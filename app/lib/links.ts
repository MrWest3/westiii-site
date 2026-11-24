/** Shared contact and social links. Order of `socials` is the display order. */
export const FREE_CALL_URL =
  "https://calendly.com/davidawest25/free-15-minute-ai-fit-call";

/** The paid $999 AI Assessment booking page. */
export const ASSESSMENT_URL = "https://calendly.com/davidawest25/ai-audit";

/** My community on Skool (paid; the price lives on Skool, never on this site). */
export const COMMUNITY_URL = "https://www.skool.com/creative-ai-education-w-west-1549";

// Calendly records these on the booking, so every booked call names the
// page and button it came from. `placement` reads "<page>-<spot>".
function withUtm(base: string, placement: string) {
  return `${base}?utm_source=westiii&utm_medium=site&utm_content=${encodeURIComponent(placement)}`;
}

export const freeCallUrl = (placement: string) => withUtm(FREE_CALL_URL, placement);
export const assessmentUrl = (placement: string) => withUtm(ASSESSMENT_URL, placement);

export const socials = [
  { label: "Instagram", handle: "@__dw3", href: "https://www.instagram.com/__dw3/" },
  { label: "YouTube", handle: "@WestTech3", href: "https://www.youtube.com/@WestTech3" },
  {
    label: "LinkedIn",
    handle: "David West III",
    href: "https://www.linkedin.com/in/david-west-iii-289ba7148",
  },
  { label: "TikTok", handle: "@___dw3", href: "https://www.tiktok.com/@___dw3" },
  { label: "X", handle: "@___DW3", href: "https://x.com/___DW3" },
];

/** The full Laurel House listing site (unlisted demo on Netlify). */
export const LAUREL_HOUSE_URL = "https://laurel-house-99e522.netlify.app";
export const PENTHOUSE_URL = "https://luxurypenthouse.netlify.app";
