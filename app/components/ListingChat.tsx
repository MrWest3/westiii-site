"use client";

import { useEffect, useRef, useState } from "react";
import { FREE_CALL_URL } from "../lib/links";

type Msg = { role: "user" | "assistant"; content: string };

const MAX_QUESTIONS = 6;
const suggestions = [
  "How many bedrooms and baths?",
  "Tell me about the pool.",
  "Is the basement finished?",
  "What are the HOA fees?",
  "Can I schedule a showing?",
];

export default function ListingChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const asked = messages.filter((m) => m.role === "user").length;
  const done = asked >= MAX_QUESTIONS;

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages]);

  async function ask(question: string) {
    const text = question.trim().slice(0, 400);
    if (!text || pending || done) return;

    const history: Msg[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/listing-qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!response.ok || !response.body) {
        throw new Error(
          response.status === 429 ? "busy" : response.status === 503 ? "offline" : "failed",
        );
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      while (true) {
        const { value, done: finished } = await reader.read();
        if (finished) break;
        reply += decoder.decode(value, { stream: true });
        const shown = reply.replace("\n[[ERROR]]", "");
        setMessages([...history, { role: "assistant", content: shown }]);
      }
      if (reply.includes("[[ERROR]]") || !reply.replace("\n[[ERROR]]", "").trim()) {
        throw new Error("failed");
      }
    } catch (caught) {
      setMessages(history.slice(0, -1));
      setInput(text);
      const reason = caught instanceof Error ? caught.message : "failed";
      setError(
        reason === "busy"
          ? "Lots of questions right now. Give it a minute and try again."
          : reason === "offline"
            ? "The demo is resting right now. Book a free call and I'll walk you through it live."
            : "That one didn't go through. Try asking again.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
        <div>
          <p className="text-sm font-black text-[var(--ink)]">The Laurel House assistant</p>
          <p className="text-xs text-[var(--muted)]">Live demo. Nothing you type is sent to anyone.</p>
        </div>
      </div>

      <div
        ref={logRef}
        className="flex h-80 flex-col gap-3 overflow-y-auto px-5 py-5"
        aria-live="polite"
      >
        <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-[var(--surface)] px-4 py-3 text-[15px] leading-relaxed text-[var(--ink)]">
          Hi, I can answer questions about The Laurel House any time. What would you like to know?
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
              message.role === "user"
                ? "self-end rounded-tr-sm bg-[var(--ink)] text-white"
                : "self-start rounded-tl-sm bg-[var(--surface)] text-[var(--ink)]"
            }`}
          >
            {message.content || (
              <span className="inline-flex gap-1" aria-label="Typing">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)] [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--muted)] [animation-delay:300ms]" />
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border)] px-5 py-4">
        {done ? (
          <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
            That&apos;s the end of the demo.{" "}
            <a
              href={FREE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--crimson)] underline underline-offset-4"
            >
              Book a free call
            </a>{" "}
            to get one for your own listings.
          </p>
        ) : (
          <>
            {asked === 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => ask(suggestion)}
                    disabled={pending}
                    className="min-h-9 rounded-full border border-[var(--border)] px-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--crimson)] disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
              className="flex gap-2"
            >
              <label htmlFor="listing-question" className="sr-only">
                Ask a question about the listing
              </label>
              <input
                id="listing-question"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={400}
                placeholder="Ask about the house"
                disabled={pending}
                className="min-h-11 min-w-0 flex-1 rounded-lg border border-[var(--border)] px-3 text-base text-[var(--ink)] outline-none focus:border-[var(--crimson)]"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                className="min-h-11 rounded-lg bg-[var(--crimson)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)] disabled:opacity-50"
              >
                Ask
              </button>
            </form>
            {error && <p className="mt-2 text-sm text-[var(--crimson)]">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}
