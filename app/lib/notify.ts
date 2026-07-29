import { Resend } from "resend";

// Where form notifications land. Business inbox, not the personal one.
const TO = process.env.NOTIFY_TO ?? "StudioWest3@proton.me";

// Resend only sends from a domain verified in the account. Until westiii.com
// is verified, this falls back to Resend's shared sender, which delivers only
// to the address that owns the Resend account.
const FROM = process.env.RESEND_FROM ?? "onboarding@resend.dev";

type Notification = {
  subject: string;
  lines: string[];
  replyTo?: string;
};

/**
 * Best effort notification. The Redis write is the system of record, so a mail
 * failure must never surface to the person filling out the form. Everything in
 * here swallows its errors and logs instead.
 */
export async function sendNotification({ subject, lines, replyTo }: Notification) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[notify] RESEND_API_KEY is not set, skipping:", subject);
    return;
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: `westiii.com <${FROM}>`,
      to: [TO],
      subject,
      text: lines.join("\n"),
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error("[notify] Resend rejected:", subject, error);
    }
  } catch (err) {
    console.error("[notify] threw:", subject, err);
  }
}
