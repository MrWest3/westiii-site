import { resolveMx } from "node:dns/promises";

/**
 * A price unlock is only worth something if the email reaches a person, so
 * the gate checks more than the shape: common typos, placeholder addresses,
 * throwaway inboxes, and whether the domain can receive mail at all.
 * A DNS hiccup lets the email through rather than blocking a real visitor.
 */

export type EmailCheck =
  | { ok: true }
  | { ok: false; reason: "typo" | "placeholder" | "disposable" | "no_mail"; suggestion?: string };

// Misspellings people actually type, mapped to the provider they meant.
const TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com", "gmai.com": "gmail.com", "gmal.com": "gmail.com", "gamil.com": "gmail.com",
  "gnail.com": "gmail.com", "gmaill.com": "gmail.com", "gmail.co": "gmail.com", "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com", "gmail.om": "gmail.com", "gmail.comm": "gmail.com", "gmailcom": "gmail.com",
  "hotmial.com": "hotmail.com", "hotmal.com": "hotmail.com", "hotmai.com": "hotmail.com", "hotmail.co": "hotmail.com",
  "hotmail.con": "hotmail.com", "yahooo.com": "yahoo.com", "yaho.com": "yahoo.com", "yahoo.co": "yahoo.com",
  "yahoo.con": "yahoo.com", "yhaoo.com": "yahoo.com", "outlok.com": "outlook.com", "outllook.com": "outlook.com",
  "outlook.co": "outlook.com", "outlook.con": "outlook.com", "iclod.com": "icloud.com", "icloud.co": "icloud.com",
  "icloud.con": "icloud.com", "icoud.com": "icloud.com", "aol.co": "aol.com", "aol.con": "aol.com",
  "comcast.met": "comcast.net", "bellsouth.met": "bellsouth.net", "att.met": "att.net",
};

// Addresses people type to get past a form. "you@company.com" is this form's own placeholder.
const PLACEHOLDER_DOMAINS = new Set([
  "example.com", "example.org", "example.net", "test.com", "test.test", "domain.com", "company.com",
  "yourcompany.com", "email.test", "invalid", "localhost", "fake.com", "asdf.com", "abc.com", "none.com",
]);
const PLACEHOLDER_LOCALS = new Set([
  "test", "testing", "asdf", "asdfg", "qwerty", "fake", "none", "noemail", "nobody", "noreply",
  "no-reply", "nope", "abc", "abc123", "xxx", "you", "your", "youremail", "email", "name",
]);

// Throwaway inbox services. Subdomains count too (mail.yopmail.com).
const DISPOSABLE = [
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "guerrillamail.org", "guerrillamailblock.com",
  "sharklasers.com", "grr.la", "10minutemail.com", "10minutemail.net", "10minemail.com", "20minutemail.com",
  "temp-mail.org", "temp-mail.io", "tempmail.com", "tempmail.net", "tempmailo.com", "tempmail.plus",
  "tempr.email", "tempinbox.com", "throwawaymail.com", "trashmail.com", "trashmail.net", "trash-mail.com",
  "yopmail.com", "yopmail.net", "yopmail.fr", "getnada.com", "nada.email", "maildrop.cc", "mailnesia.com",
  "dispostable.com", "fakeinbox.com", "fakemail.net", "emailondeck.com", "mintemail.com", "mohmal.com",
  "mailcatch.com", "spamgourmet.com", "spambox.us", "spam4.me", "mytemp.email", "burnermail.io",
  "inboxkitten.com", "moakt.com", "mailpoof.com", "33mail.com", "anonaddy.me", "discard.email",
  "emailfake.com", "fakermail.com", "luxusmail.org", "minuteinbox.com", "tmail.ws", "tmpmail.org",
  "tmpmail.net", "1secmail.com", "1secmail.net", "1secmail.org", "byom.de", "harakirimail.com",
  "mailtemp.net", "mail.tm", "mail.gw", "dropmail.me", "emltmp.com", "linshiyouxiang.net",
];

function isDisposable(domain: string): boolean {
  return DISPOSABLE.some((d) => domain === d || domain.endsWith(`.${d}`));
}

async function withTimeout<T>(work: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(Object.assign(new Error("dns timeout"), { code: "ETIMEOUT" })), ms);
  });
  try {
    return await Promise.race([work, timeout]);
  } finally {
    clearTimeout(timer);
  }
}

export async function checkRealEmail(email: string): Promise<EmailCheck> {
  const at = email.lastIndexOf("@");
  const local = email.slice(0, at);
  const domain = email.slice(at + 1).toLowerCase().replace(/\.$/, "");

  const fixed = TYPOS[domain];
  if (fixed) return { ok: false, reason: "typo", suggestion: `${local}@${fixed}` };
  if (PLACEHOLDER_DOMAINS.has(domain) || PLACEHOLDER_LOCALS.has(local.toLowerCase())) {
    return { ok: false, reason: "placeholder" };
  }
  if (isDisposable(domain)) return { ok: false, reason: "disposable" };

  try {
    const records = await withTimeout(resolveMx(domain), 2500);
    // A "null MX" (exchange "." or empty) means the domain says it takes no mail.
    const takesMail = records.some((r) => r.exchange && r.exchange !== ".");
    return takesMail ? { ok: true } : { ok: false, reason: "no_mail" };
  } catch (error) {
    const code = (error as { code?: string }).code;
    if (code === "ENOTFOUND" || code === "ENODATA") return { ok: false, reason: "no_mail" };
    return { ok: true };
  }
}
