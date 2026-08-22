"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  ERROR_SENTINEL,
  OPENING_MESSAGE,
  parseReadback,
  type CaptureResponse,
  type ChatRequest,
  type Msg,
  type RevenueBand,
} from "./constants";

type DisplayMessage = Msg & { id: string };
type Failure = {
  copy: string;
  canRetry: boolean;
  showMailto: boolean;
};

const inputClass =
  "min-h-12 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus:outline-none";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-[var(--muted)]";
const primaryClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] disabled:cursor-not-allowed disabled:opacity-60";

function visibleStreamText(text: string) {
  const lastMarker = text.lastIndexOf("[[");
  if (lastMarker >= 0) {
    const candidate = text.slice(lastMarker);
    if (
      "[[READBACK".startsWith(candidate) ||
      candidate.startsWith("[[READBACK") ||
      "[[ERROR]]".startsWith(candidate) ||
      candidate.startsWith("[[ERROR")
    ) {
      return text.slice(0, lastMarker);
    }
  }

  if (text.endsWith("[")) return text.slice(0, -1);
  return text;
}

function buildMailto(
  messages: DisplayMessage[],
  fields?: { name: string; email: string; businessName: string; band: RevenueBand }
) {
  const visitorText = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .join("\n");
  const body = fields
    ? [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Business: ${fields.businessName}`,
        `Revenue: ${fields.band}`,
        "",
        "What I want off my plate:",
        visitorText,
      ]
    : [
        "Name:",
        "Business:",
        "",
        "What I want off my plate:",
        visitorText,
      ];

  return `mailto:StudioWest3@proton.me?subject=${encodeURIComponent(
    "InvestFest follow up"
  )}&body=${encodeURIComponent(body.join("\n"))}`;
}

function MailtoCard({ href }: { href: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-sm leading-6 text-[var(--ink-secondary)]">
        Send me the short version by email. I will pick it up personally.
      </p>
      <a href={href} className={`${primaryClass} mt-3 w-full sm:w-auto`}>
        Email David directly
      </a>
    </div>
  );
}

export default function AgentChatClient() {
  const searchParams = useSearchParams();
  const src = searchParams.get("src") ?? undefined;
  const sessionIdRef = useRef<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pendingRequestRef = useRef<ChatRequest | null>(null);
  const visitorSentRef = useRef(false);
  const captureSucceededRef = useRef(false);
  const consecutiveFailuresRef = useRef(0);

  const [messages, setMessages] = useState<DisplayMessage[]>([
    { id: "opening", role: "assistant", content: OPENING_MESSAGE },
  ]);
  const [draft, setDraft] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [stage, setStage] = useState<"chat" | "capture" | "final">("chat");
  const [band, setBand] = useState<RevenueBand | null>(null);
  const [markerSuppliedBand, setMarkerSuppliedBand] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [capturing, setCapturing] = useState(false);
  const [captureFailed, setCaptureFailed] = useState(false);

  useEffect(() => {
    sessionIdRef.current = crypto.randomUUID();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, failure, stage]);

  useEffect(() => {
    function sendAbandonBeacon() {
      if (
        document.visibilityState !== "hidden" ||
        !visitorSentRef.current ||
        captureSucceededRef.current ||
        !sessionIdRef.current
      ) {
        return;
      }

      navigator.sendBeacon("/api/agent/abandon", sessionIdRef.current);
    }

    document.addEventListener("visibilitychange", sendAbandonBeacon);
    return () =>
      document.removeEventListener("visibilitychange", sendAbandonBeacon);
  }, []);

  const runTurn = useCallback(async (requestBody: ChatRequest) => {
    setStreaming(true);
    setFailure(null);

    const bubbleId = crypto.randomUUID();
    setMessages((current) => [
      ...current,
      { id: bubbleId, role: "assistant", content: "" },
    ]);

    const controller = new AbortController();
    let stallTimer = window.setTimeout(() => controller.abort(), 25_000);
    const resetStallTimer = () => {
      window.clearTimeout(stallTimer);
      stallTimer = window.setTimeout(() => controller.abort(), 25_000);
    };

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      });

      if (response.status === 409) {
        setMessages((current) =>
          current.filter((message) => message.id !== bubbleId)
        );
        setStage("capture");
        return;
      }

      if (response.status === 429 || response.status === 503) {
        setMessages((current) =>
          current.filter((message) => message.id !== bubbleId)
        );
        setFailure({
          copy:
            response.status === 503
              ? "Demand is heavy today. Email me directly and I will run this with you personally."
              : "I hit the conversation limit for a moment. Tap to retry.",
          canRetry: true,
          showMailto: true,
        });
        return;
      }

      if (!response.ok || !response.body) throw new Error("turn_failed");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullReply = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        resetStallTimer();
        fullReply += decoder.decode(value, { stream: true });
        const visible = visibleStreamText(fullReply);
        setMessages((current) =>
          current.map((message) =>
            message.id === bubbleId ? { ...message, content: visible } : message
          )
        );
      }
      fullReply += decoder.decode();

      if (fullReply.trimEnd().endsWith(ERROR_SENTINEL)) {
        throw new Error("stream_failed");
      }

      const parsed = parseReadback(fullReply);
      setMessages((current) =>
        current.map((message) =>
          message.id === bubbleId
            ? { ...message, content: parsed.clean }
            : message
        )
      );
      consecutiveFailuresRef.current = 0;
      pendingRequestRef.current = null;

      if (parsed.band) {
        setBand(parsed.band);
        setMarkerSuppliedBand(true);
        setStage("capture");
      }
    } catch {
      setMessages((current) =>
        current.filter((message) => message.id !== bubbleId)
      );
      consecutiveFailuresRef.current += 1;
      setFailure({
        copy: "Connection dropped. Tap to retry.",
        canRetry: true,
        showMailto: consecutiveFailuresRef.current >= 2,
      });
    } finally {
      window.clearTimeout(stallTimer);
      setStreaming(false);
    }
  }, []);

  function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = draft.trim();
    const sessionId = sessionIdRef.current;
    if (!content || content.length > 600 || streaming || !sessionId) return;

    const userMessage: DisplayMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };
    const nextMessages = [...messages, userMessage];
    const requestBody: ChatRequest = {
      sessionId,
      src,
      messages: nextMessages.map(({ role, content: messageContent }) => ({
        role,
        content: messageContent,
      })),
    };

    visitorSentRef.current = true;
    pendingRequestRef.current = requestBody;
    setMessages(nextMessages);
    setDraft("");
    void runTurn(requestBody);
  }

  function retryTurn() {
    if (!streaming && pendingRequestRef.current) {
      void runTurn(pendingRequestRef.current);
    }
  }

  async function handleCapture(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const sessionId = sessionIdRef.current;
    if (!sessionId || !band || capturing) return;

    setCapturing(true);
    let succeeded = false;

    try {
      const response = await fetch("/api/agent/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          name,
          email,
          businessName,
          revenueBand: band,
        }),
      });
      if (response.ok) {
        const result = (await response.json()) as CaptureResponse;
        succeeded = result.ok;
      }
    } catch {
      succeeded = false;
    }

    captureSucceededRef.current = succeeded;
    setCaptureFailed(!succeeded);
    setCapturing(false);
    setStage("final");
  }

  const fallbackHref = buildMailto(messages);
  const captureFallbackHref = band
    ? buildMailto(messages, { name, email, businessName, band })
    : fallbackHref;

  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-2xl flex-col px-6">
        <header className="border-b border-[var(--border)] py-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            The Bottleneck Agent
          </p>
          <p className="text-sm leading-6 text-[var(--ink-secondary)]">
            An AI agent David West built. Three minutes. It finds the one thing you
            should hand off.
          </p>
        </header>

        <div
          ref={scrollRef}
          className="min-h-0 flex-1 overflow-y-auto py-5"
          aria-live="polite"
        >
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className={`mb-3 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-[var(--crimson)] text-white"
                      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)]"
                  }`}
                >
                  {message.content || "Thinking..."}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {failure && (
            <div className="space-y-3" role="alert">
              <button
                type="button"
                onClick={retryTurn}
                disabled={!failure.canRetry || streaming}
                className="min-h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left text-sm font-semibold text-[var(--ink-secondary)] disabled:opacity-60"
              >
                {failure.copy}
              </button>
              {failure.showMailto && <MailtoCard href={fallbackHref} />}
            </div>
          )}
        </div>

        <div className="border-t border-[var(--border)] bg-white py-4">
          <AnimatePresence mode="wait" initial={false}>
            {stage === "chat" ? (
              <motion.form
                key="composer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                onSubmit={handleSend}
                className="flex items-end gap-2"
              >
                <label htmlFor="agent-message" className="sr-only">
                  Your reply
                </label>
                <input
                  id="agent-message"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  maxLength={600}
                  autoComplete="off"
                  enterKeyHint="send"
                  disabled={streaming}
                  placeholder="Type your answer"
                  className={inputClass}
                />
                <button
                  type="submit"
                  disabled={streaming || !draft.trim()}
                  className={`${primaryClass} shrink-0 px-5`}
                >
                  Send
                </button>
              </motion.form>
            ) : stage === "capture" ? (
              <motion.form
                key="capture"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                onSubmit={handleCapture}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="agent-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="agent-name"
                    required
                    maxLength={120}
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="agent-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="agent-email"
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="agent-business" className={labelClass}>
                    Business name
                  </label>
                  <input
                    id="agent-business"
                    required
                    maxLength={120}
                    autoComplete="organization"
                    value={businessName}
                    onChange={(event) => setBusinessName(event.target.value)}
                    className={inputClass}
                  />
                </div>

                {!markerSuppliedBand && (
                  <fieldset>
                    <legend className={labelClass}>Annual revenue</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {(
                        [
                          ["under_2m", "Under $2M a year"],
                          ["2m_50m", "$2M to $50M"],
                        ] as const
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setBand(value)}
                          aria-pressed={band === value}
                          className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${
                            band === value
                              ? "border-[var(--crimson)] bg-[var(--crimson)] text-white"
                              : "border-[var(--border)] bg-white text-[var(--ink-secondary)]"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                <button
                  type="submit"
                  disabled={capturing || !band}
                  className={`${primaryClass} w-full`}
                >
                  {capturing ? "Sending..." : "Send my read out"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="final"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="space-y-4 py-2"
              >
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-[var(--ink)]">
                    Locked in.
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-secondary)]">
                    The full read out is in my hands. You will hear from me within 24
                    hours.
                  </p>
                </div>
                <Link
                  href="/book"
                  className={`${primaryClass} w-full sm:w-auto`}
                >
                  Book the $999 AI Assessment
                </Link>
                {captureFailed && <MailtoCard href={captureFallbackHref} />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
