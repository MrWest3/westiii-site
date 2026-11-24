"use client";

import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";

export function useNewsletterSubscription(list?: string) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(list ? { email, list } : { email }),
      });

      if (response.ok) {
        track("email_signup", { list: list ?? "newsletter" });
        setStatus("success");
        setEmail("");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return {
    email,
    setEmail,
    status,
    handleSubscribe,
  };
}
