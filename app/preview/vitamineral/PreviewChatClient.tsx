"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  BUSINESS_NAME,
  ERROR_SENTINEL,
  OPENING_MESSAGE,
  parseLead,
  type ChatRequest,
  type Msg,
} from "./constants";

type DisplayMessage = Msg & { id: string };

const inputClass =
  "min-h-12 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus:outline-none";
const primaryClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] disabled:cursor-not-allowed disabled:opacity-60";

function visibleStreamText(text: string) {
  const lastMarker = text.lastIndexOf("[[");
  if (lastMarker >= 0) {
    const candidate = text.slice(lastMarker);
    if (
      "[[LEAD".startsWith(candidate) ||
      candidate.startsWith("[[LEAD") ||
      "[[ERROR]]".startsWith(candidate) ||
      candidate.startsWith("[[ERROR")
    ) {
      return text.slice(0, lastMarker);
    }
  }

  if (text.endsWith("[")) return text.slice(0, -1);
  return text;
}

export default function PreviewChatClient() {
  const sessionIdRef = useRef<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pendingRequestRef = useRef<ChatRequest | null>(null);

  const [messages, setMessages] = useState<DisplayMessage[]>([
    { id: "opening", role: "assistant", content: OPENING_MESSAGE },
  ]);
  const [draft, setDraft] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [failed, setFailed] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    sessionIdRef.current = crypto.randomUUID();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, failed]);

  const runTurn = useCallback(async (requestBody: ChatRequest) => {
    setStreaming(true);
    setFailed(false);

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
      const response = await fetch("/api/preview/vitamineral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      });

      if (response.status === 429 || response.status === 503) {
        setMessages((current) =>
          current.filter((message) => message.id !== bubbleId)
        );
        setFailed(true);
        return;
      }

      if (!response.ok || !response.body) throw new Error("turn_failed");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullReply = "";

      while (true) {
        const { value, done: streamDone } = await reader.read();
        if (streamDone) break;
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

      const parsed = parseLead(fullReply);
      setMessages((current) =>
        current.map((message) =>
          message.id === bubbleId
            ? { ...message, content: parsed.clean }
            : message
        )
      );
      pendingRequestRef.current = null;
      if (requestBody.messages.length >= 29) setDone(true);
    } catch {
      setMessages((current) =>
        current.filter((message) => message.id !== bubbleId)
      );
      setFailed(true);
    } finally {
      window.clearTimeout(stallTimer);
      setStreaming(false);
    }
  }, []);

  function handleSend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = draft.trim();
    const sessionId = sessionIdRef.current;
    if (!content || content.length > 600 || streaming || done || !sessionId) {
      return;
    }

    const userMessage: DisplayMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };
    const nextMessages = [...messages, userMessage];
    const requestBody: ChatRequest = {
      sessionId,
      messages: nextMessages.map(({ role, content: messageContent }) => ({
        role,
        content: messageContent,
      })),
    };

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

  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-2xl flex-col px-6">
        <header className="border-b border-[var(--border)] py-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            Working preview
          </p>
          <h1 className="text-lg font-black tracking-tight text-[var(--ink)]">
            The {BUSINESS_NAME} front desk
          </h1>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-secondary)]">
            Already trained on the menu, prices, hours, and membership. Text it
            like a customer would: ask about a drip, a price, a booking. On the
            real thing, this answers your phone line and web chat around the
            clock, and every lead lands in your inbox.
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
                  {message.content || "Typing..."}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {failed && (
            <button
              type="button"
              onClick={retryTurn}
              disabled={streaming}
              className="min-h-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left text-sm font-semibold text-[var(--ink-secondary)] disabled:opacity-60"
              role="alert"
            >
              Connection dropped. Tap to retry.
            </button>
          )}
        </div>

        <div className="border-t border-[var(--border)] bg-white py-4">
          {done ? (
            <p className="py-2 text-sm leading-6 text-[var(--ink-secondary)]">
              That is the end of this preview session. Refresh the page to start
              a new conversation.
            </p>
          ) : (
            <form onSubmit={handleSend} className="flex items-end gap-2">
              <label htmlFor="preview-message" className="sr-only">
                Your message
              </label>
              <input
                id="preview-message"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                maxLength={600}
                autoComplete="off"
                enterKeyHint="send"
                disabled={streaming}
                placeholder="Text the front desk"
                className={inputClass}
              />
              <button
                type="submit"
                disabled={streaming || !draft.trim()}
                className={`${primaryClass} shrink-0 px-5`}
              >
                Send
              </button>
            </form>
          )}
          <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
            A preview built by David West. Not connected to VitaMineral&apos;s
            phone lines yet. No medical advice, and booking requests here are
            demonstrations only.
          </p>
        </div>
      </div>
    </main>
  );
}
