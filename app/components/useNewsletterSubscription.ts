"use client";

import { useState, type FormEvent } from "react";

export function useNewsletterSubscription() {
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
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
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
