/**
 * westiii.com/hope: the inputs behind the mindset.
 *
 * Everything on the page lives here. Adding a book, a channel, or an idea is
 * an edit to one of these arrays. Keep the "why" lines in David's voice, one
 * to three sentences, and keep every claim about a book to what it argues.
 */

export const LAST_UPDATED = "September 26, 2026";

/**
 * Swap for the reel's own URL once it is posted. The reel card only renders
 * for visitors who arrive on /hope?ref=hope-reel (the comment-to-DM link).
 */
export const REEL_URL = "https://www.instagram.com/__dw3/";

export type WatchItem = {
  kind: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  image: string;
  /** "portrait" renders the reel frame beside the text; "wide" is 16:9 on top. */
  layout: "portrait" | "wide" | "pair";
  imageAlt: string;
  secondImage?: string;
};

export const startHere: WatchItem[] = [
  {
    kind: "Reel, 2:49",
    title: "The video that brought you here",
    body: "P(doom), the three people who left the labs to warn us, and why the sun still rises tomorrow. If you commented HOPE, this is the one.",
    href: REEL_URL,
    linkLabel: "Watch on Instagram",
    image: "/hope/reel-thumb.jpg",
    imageAlt: "Closing frame of the reel: Godspeed over the West III logo",
    layout: "portrait",
  },
  {
    kind: "Mo Gawdat, 15 min",
    title: "The Skill You Need in the Age of AI",
    body: "His 2026 commencement speech. The old game was chess: plan five years out and execute. That board is gone. The new game is squash: stay on your toes, hit the ball, get back to center. Then his homework: sit with a good model, tell it your dreams, ask which AIs to learn, and master them tomorrow.",
    href: "https://www.youtube.com/watch?v=qqV1EX9YPfM",
    linkLabel: "Watch on YouTube",
    image: "/hope/gawdat-thumb.jpg",
    imageAlt: "Mo Gawdat at a lectern in academic dress",
    layout: "wide",
  },
  {
    kind: "19 Keys, 45 min",
    title: "AI Secret Attack Plan + Cognitive Supremacy",
    body: "His line: control the source of AI instead of trying to ban it. The future splits into people who can still think and people run by machines. Pick a side on purpose.",
    href: "https://www.youtube.com/watch?v=KOGk-1ePOqY",
    linkLabel: "Watch on YouTube",
    image: "/hope/19keys-thumb.jpg",
    imageAlt: "19 Keys video thumbnail",
    layout: "wide",
  },
  {
    kind: "Two scenarios, read both",
    title: "AI 2027 and AI 2040",
    body: "Daniel Kokotajlo left OpenAI and wrote the scenario everyone argues about. Then the same group wrote Plan A: what it looks like if we get it right. Read the scary one first.",
    href: "https://ai-2027.com/",
    linkLabel: "ai-2027.com",
    image: "/hope/ai2027.jpg",
    imageAlt: "The AI 2027 site",
    secondImage: "/hope/ai2040.jpg",
    layout: "pair",
  },
];

export const AI_2040_URL = "https://ai-2040.com/";

export type Book = {
  title: string;
  authors: string;
  year: string;
  body: string;
  cover: string;
  href: string;
};

export const featuredBook = {
  title: "The Last Economy",
  authors: "Emad Mostaque",
  year: "August 2025. Free to read at ii.inc",
  body: "The most practical book on this page and the last one I finished. Mostaque argues that intelligence itself is moving from labor to capital, puts a clock on it (a thousand days from August 2025), and spends the back half on what one person actually does about it. Three futures, and the one worth building: small protected pockets that work so well they spread. I built a countdown to his date and I run my own plan against it.",
  flag: "One flag so you read it clean: chapter 18 pitches a currency his own company is issuing. Take the ideas, skip the token.",
  cover: "/hope/cover-the-last-economy.jpg",
  readHref: "https://ii.inc/the-last-economy",
  countdownHref: "/builds",
};

function amazon(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}

export const books: Book[] = [
  {
    title: "Scary Smart",
    authors: "Mo Gawdat",
    year: "2021",
    body: "Gawdat ran Google X as Chief Business Officer and left in 2018 with a warning. His case: AI learns from how we treat it, so the safe path is to raise it well, the way you would raise a kid. He ends with three things any user can do starting today.",
    cover: "/hope/cover-scary-smart.jpg",
    href: amazon("Scary Smart Mo Gawdat"),
  },
  {
    title: "Superagency",
    authors: "Reid Hoffman and Greg Beato",
    year: "2025",
    body: "The LinkedIn co-founder walks through every big technology that got the same panic, from the printing press to the car, and shows what each one did for a normal person. You get a way to read AI news without flinching, and a list of what to steer toward.",
    cover: "/hope/cover-superagency.jpg",
    href: amazon("Superagency Reid Hoffman"),
  },
  {
    title: "The Algorithmic Leader",
    authors: "Mike Walsh",
    year: "2019",
    body: "Written before ChatGPT and it holds up. Ten principles for leading when the machine is better than you at the task. You rethink what your job actually is once the analysis is automated.",
    cover: "/hope/cover-the-algorithmic-leader.jpg",
    href: amazon("The Algorithmic Leader Mike Walsh"),
  },
  {
    title: "Genesis",
    authors: "Henry Kissinger, Eric Schmidt, Craig Mundie",
    year: "2024",
    body: "Kissinger's last book, finished with Google's former CEO. It takes the biggest questions seriously: power, judgment, faith, what stays human. Read it when you want the long view instead of the news cycle.",
    cover: "/hope/cover-genesis.jpg",
    href: amazon("Genesis Artificial Intelligence Hope and the Human Spirit Kissinger"),
  },
  {
    title: "AI 2041",
    authors: "Kai-Fu Lee and Chen Qiufan",
    year: "2021",
    body: "Ten short stories set twenty years out, each followed by the former head of Google China explaining the tech that makes the story possible. The most concrete picture of daily life with AI you will find, and none of it is dystopian by default.",
    cover: "/hope/cover-ai-2041.jpg",
    href: amazon("AI 2041 Kai-Fu Lee"),
  },
  {
    title: "2084 and the AI Revolution",
    authors: "John C. Lennox",
    year: "2024 edition",
    body: "An Oxford mathematician takes the transhumanist promises apart one at a time and asks what it means to be human. Argued from faith, clearly. Worth it even if you do not share the faith, because he asks the questions the builders skip.",
    cover: "/hope/cover-2084-and-the-ai-revolution.jpg",
    href: amazon("2084 and the AI Revolution John Lennox"),
  },
  {
    title: "21 Lessons for the 21st Century",
    authors: "Yuval Noah Harari",
    year: "2018",
    body: "Harari on the present: work, truth, attention, meaning. His first line: “In a world deluged by irrelevant information, clarity is power.” That sentence is the reason this page exists.",
    cover: "/hope/cover-21-lessons-for-the-21st-century.jpg",
    href: amazon("21 Lessons for the 21st Century Harari"),
  },
  {
    title: "The Future Is Faster Than You Think",
    authors: "Peter Diamandis and Steven Kotler",
    year: "2020",
    body: "A decade of change mapped industry by industry: transport, retail, health, food, money. You see how technologies stack on each other, and why the pace keeps surprising people who only watch one at a time.",
    cover: "/hope/cover-the-future-is-faster-than-you-think.jpg",
    href: amazon("The Future Is Faster Than You Think Diamandis"),
  },
  {
    title: "We Are As Gods",
    authors: "Peter Diamandis and Steven Kotler",
    year: "April 2026",
    body: "Their newest. The premise: we already have god-level tools, so the only question left is whether we get good at using them. A survival guide for the healthy-soil side of the forest fire.",
    cover: "/hope/cover-we-are-as-gods.jpg",
    href: amazon("We Are As Gods Diamandis Kotler"),
  },
];

export type Channel = {
  name: string;
  href: string;
  /** YouTube channel id, used to pull the latest upload. */
  channelId: string;
  avatar: string;
  why: string;
  /** Shown when the live pull fails. */
  fallbackLatest: string;
};

export const channels: Channel[] = [
  {
    name: "Peter Diamandis, Moonshots",
    href: "https://www.youtube.com/@peterdiamandis",
    channelId: "UCvxm0qTrGN_1LMYgUaftWyQ",
    avatar: "/hope/av-peterdiamandis.jpg",
    why: "Every week he puts a number behind why the future is better than the feed says it is. Data-driven optimism.",
    fallbackLatest: "Three lab warnings in five days",
  },
  {
    name: "19 Keys",
    href: "https://www.youtube.com/@19KEYS",
    channelId: "UCsY17ZnXg_Gmt9bWz49HoWw",
    avatar: "/hope/av-19keys.jpg",
    why: "Talks about cognitive wealth the way most people talk about money. Mindset before tools, and usually early.",
    fallbackLatest: "How to capture God",
  },
  {
    name: "Tom Bilyeu, Impact Theory",
    href: "https://www.youtube.com/@TomBilyeu",
    channelId: "UCnYMOamNKLGVlJgRUbamveA",
    avatar: "/hope/av-tombilyeu.jpg",
    why: "Two-hour interviews with the people building it, and he asks the hard version of the question.",
    fallbackLatest: "The brutal truth about AI and your job",
  },
  {
    name: "Dan Koe",
    href: "https://www.youtube.com/@DanKoeTalks",
    channelId: "UCWXYDYv5STLk-zoxMP2I1Lw",
    avatar: "/hope/av-dankoetalks.jpg",
    why: "The one-person business in the AI decade. Writing, focus, and building something that is yours.",
    fallbackLatest: "If you have multiple interests, start a one-person business",
  },
  {
    name: "Nate B Jones",
    href: "https://www.youtube.com/@NateBJones",
    channelId: "UC0C-17n9iuUQPylguM1d-lQ",
    avatar: "/hope/av-natebjones.jpg",
    why: "Twenty years in product. Tells you what changed this week and what to do about it, without the hype.",
    fallbackLatest: "The race to done: Fable 5.1 vs GPT-6 Astra",
  },
  {
    name: "Greg Isenberg",
    href: "https://www.youtube.com/@GregIsenberg",
    channelId: "UCPjNBjflYl0-HQtUvOx0Ibw",
    avatar: "/hope/av-gregisenberg.jpg",
    why: "Startup ideas and how to build them with AI. Practical and fast, no theory.",
    fallbackLatest: "GPT-6 Astra: how I would make money with it",
  },
  {
    name: "Stacked Podcast",
    href: "https://www.youtube.com/@stackedpod",
    channelId: "UCA00QTLGuJ0I0wpEjLGAm9Q",
    avatar: "/hope/av-stackedpod.jpg",
    why: "Two operators who built real companies, then went all in on AI. Weekly on what actually shipped.",
    fallbackLatest: "Anthropic suggests it has reached RSI",
  },
];

export type Idea = { line: string; note: string };

export const ideas: Idea[] = [
  {
    line: "Anything over 1% is grounds for caution.",
    note: "From my P(doom) video. Taking the risk seriously and staying hopeful are the same job.",
  },
  {
    line: "Learn AI. Make others aware. Adapt. Prepare.",
    note: "The four moves. Everything on this page serves one of them.",
  },
  {
    line: "A forest fire ends with healthier soil.",
    note: "Damage first, then new beginnings. You want to be the new soil.",
  },
  {
    line: "Stay one of the humans who can still think.",
    note: "19 Keys. The split coming is cognitive, not financial.",
  },
  {
    line: "Where do we build the first seed?",
    note: "Mostaque. The good future starts in one small place that works, then spreads.",
  },
  {
    line: "Guard your attention, not your hours.",
    note: "Mostaque. AI makes an hour cheap. Attention stays finite, so it is the thing to protect.",
  },
];

export const diamandis = {
  label: "diamandis.com/blog",
  href: "https://www.diamandis.com/blog",
  title: "Peter Diamandis, data-driven optimism",
  body: "His tagline is Upgrade Your Mindset and he means it literally. The 2023 mindset series is the part that holds up. Start with these three.",
  posts: [
    {
      title: "Overcoming Pessimism with Abundance and Optimism",
      note: "Why your brain defaults to doom, and the media-diet fix. 7 min.",
      href: "https://www.diamandis.com/blog/scaling-abundance-series-3",
    },
    {
      title: "The People, Environment and Media That Shape Your Mindset",
      note: "The three inputs you control. The most practical one. 9 min.",
      href: "https://www.diamandis.com/blog/scaling-abundance-series-6",
    },
    {
      title: "We Need a Vision, Not Black Mirror",
      note: "Dystopian media trains people to expect collapse. 3 min.",
      href: "https://www.diamandis.com/blog/we-need-a-vision-not-black-mirror",
    },
  ],
};
