/**
 * westiii.com/hope/journal: essays behind the Hope page.
 *
 * A post shows on the live site when its status is "published". Drafts render
 * in `next dev` only.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string; // kebab-case
  title: string;
  dek: string; // one-sentence summary, under 160 chars
  date: string; // ISO date
  readMinutes: number;
  image: string;
  imageAlt: string;
  status: "draft" | "published";
  blocks: Block[];
};

export const posts: Post[] = [
  {
    slug: "doom-in-doom-out",
    title: "Doom in, doom out",
    dek: "I take AI risk seriously enough to call 1% grounds for caution, and that's exactly why I watch what I feed my head.",
    date: "2026-09-26",
    readMinutes: 4,
    image: "/robot/sunrise.webp",
    imageAlt: "A crowned red and white robot sits on a rooftop ledge, watching the sun come up over a city skyline",
    status: "published",
    blocks: [
      {
        type: "p",
        text: "Recently, a former Anthropic researcher went on CNN. The banner under him read: AI could \"kill us all by the end of the decade.\" If you saw that and it made you worried, good. If that's what it takes for you to take this seriously and actually pay attention, I'll take it.",
      },
      {
        type: "p",
        text: "That's how I opened my P(doom) reel. The reel runs 2:49. This is the longer version, plus what to do with the worry once you have it.",
      },
      {
        type: "h2",
        text: "The number everyone argues about",
      },
      {
        type: "p",
        text: "P(doom) is the probability that AI causes the death of humanity. Wikipedia puts it as the estimated chance that advanced AI causes human extinction or the permanent collapse of civilization. The top researchers in AI have argued about that number for years. Some say 5%, some say 25%, some say 50%.",
      },
      {
        type: "p",
        text: "My own line is a lot lower than any of those. Anything over 1% is grounds for caution. One in a hundred sounds small until you remember the thing on the line is everybody.",
      },
      {
        type: "h2",
        text: "The warnings came from inside",
      },
      {
        type: "p",
        text: "That CNN interview wasn't the first time someone left a major AI lab to warn the world, and a lot of the people doing it helped build this stuff.",
      },
      {
        type: "p",
        text: "Daniel Kokotajlo left OpenAI in 2024 and published AI 2027, a scenario that maps out how the next few years will most likely play out. So far I think it's been very accurate, and that's the part that should get your attention. The same group then wrote AI 2040, which shows how the future could and should look if we go about this responsibly.",
      },
      {
        type: "p",
        text: "Mo Gawdat was Chief Business Officer at Google X and a big part of building the AI we know today. He left Google in 2018. Since then he's put out books and speeches on how to live in an AI-driven future, and his book Scary Smart argues that AI learns from how we treat it.",
      },
      {
        type: "p",
        text: "Whether you like him or not, Elon Musk was warning about the dangers of AI over ten years ago. He co-founded OpenAI in 2015 hoping to make the number one AI company open source, which just means publicly available, with nothing hidden from the people. Clearly, that didn't work.",
      },
      {
        type: "h2",
        text: "Why stopping it is off the table",
      },
      {
        type: "p",
        text: "My main point in the reel: if society had taken AI seriously five to ten years ago, we could have slowed this down a lot and gone about it in a much safer way. We didn't. At this point, asking the world to stop AI is like asking the sun to no longer rise. It's gonna come up tomorrow whether you're ready or not.",
      },
      {
        type: "p",
        text: "So our best option is to learn AI, make other people aware as best we can, adapt, and prepare for where this is heading. You can do all four of those while you're still worried.",
      },
      {
        type: "h2",
        text: "Half a picture",
      },
      {
        type: "quote",
        text: "If everything you take in is doom, you will only be able to imagine doom.",
      },
      {
        type: "p",
        text: "Somebody who watches nothing but collapse content and dystopian movies has a real read on the risks. They also have half a picture of the future, and that half is what they end up building toward.",
      },
      {
        type: "p",
        text: "I take the risk seriously enough to say that 1% line on camera. I also expect the next ten years to be the best decade in human history for the people who are paying attention. Both can be true. What decides which one you live in is your mindset, and your mindset is built from what you feed it.",
      },
      {
        type: "p",
        text: "Peter Diamandis has a three-minute blog post on this called We Need a Vision, Not Black Mirror. His point is that dystopian media trains people to expect collapse. The future you can picture is the only one you can build, so if the bad one is all you ever picture, that's the one you're practicing for.",
      },
      {
        type: "h2",
        text: "The forest fire",
      },
      {
        type: "p",
        text: "Do I think this will be easy? Absolutely not. I think society is about to go through a forest fire, and a lot of damage gets done in a forest fire. At the end of one, though, you get healthier soil and new beginnings. The people paying attention have a chance to be part of that new soil. The ones who aren't may go down with the fire.",
      },
      {
        type: "h2",
        text: "What to feed your head instead",
      },
      {
        type: "p",
        text: "I built the Hope page on my site for exactly this: the stuff I actually watch and read that lets me picture a good future. If you only get to five things, make it these:",
      },
      {
        type: "list",
        items: [
          "Mo Gawdat's 2026 commencement speech, The Skill You Need in the Age of AI. 15 minutes. The old game was chess, planning five years out. The new one is squash: stay on your toes and get back to center.",
          "AI 2027 and AI 2040. Read the scary one first.",
          "19 Keys, AI Secret Attack Plan + Cognitive Supremacy. The line that stuck with me: stay one of the humans who can still think.",
          "Peter Diamandis, The People, Environment and Media That Shape Your Mindset. Nine minutes on the three inputs you control.",
          "Ten books, starting with The Last Economy by Emad Mostaque. I wrote a separate post on what I'm doing about that one.",
        ],
      },
      {
        type: "p",
        text: "Take the risk seriously. Then give your head enough of the good future that you can actually picture it. Godspeed.",
      },
    ],
  },
  {
    slug: "600-days-the-last-economy",
    title: "600 days: what I'm doing about The Last Economy",
    dek: "Day 400 of Emad Mostaque's 1,000-day clock: what I believe from his book, what I don't, and my plan for the 600 days left.",
    date: "2026-09-26",
    readMinutes: 5,
    image: "/robot/books.webp",
    imageAlt: "A crowned red and white robot sits on a stack of old books in a library, reading by lamplight",
    status: "published",
    blocks: [
      {
        type: "p",
        text: "Emad Mostaque ran a macro hedge fund, then founded Stability AI. On August 22, 2025 he published The Last Economy, a free book that says we have \"roughly one thousand days\" before the rules of the economy lock in. In the same breath he writes, \"It could be 800. It could be 1,200.\"",
      },
      {
        type: "p",
        text: "A thousand days from August 22, 2025 lands on May 18, 2028. Today is September 26, 2026, which makes it day 400, with 600 left. I finished the book on September 1, day 375, so more than a third of his window was gone before I started planning. Whatever I do has to fit inside two winters.",
      },
      {
        type: "h2",
        text: "What the book says, in plain words",
      },
      {
        type: "p",
        text: "The core idea is that intelligence is moving from something people sell by the hour to something companies can own and copy. Mostaque calls it the Intelligence Inversion.",
      },
      {
        type: "p",
        text: "The strongest idea in the book is what he calls the Metabolic Rift. For 10,000 years every worker was a body that needed food, sleep and shelter. AI and robots need electricity. When machines took over muscle work, people moved to thinking work. This time the machine does the thinking, and there's no obvious third thing to move to.",
      },
      {
        type: "p",
        text: "He says the old system will settle into one of three futures. The default is Digital Feudalism: five platforms own the models and everyone else lives on a basic income inside a comfortable cage. The fear path is the Great Fragmentation, where every country walls off its own AI. Then there's Human Symbiosis, the one he wants, where everybody gets their own AI agent.",
      },
      {
        type: "p",
        text: "He thinks the good version starts in one small place that works so well other people copy it. I put his question on my Hope page:",
      },
      {
        type: "quote",
        text: "Where do we build the first seed?",
      },
      {
        type: "h2",
        text: "What I believe",
      },
      {
        type: "p",
        text: "The direction. The early data backs up the part he said would break first: the bottom rung of the job ladder.",
      },
      {
        type: "p",
        text: "Research from the Stanford Digital Economy Lab found that since late 2022, workers aged 22 to 25 in the jobs most exposed to AI have been losing ground, while young workers in less exposed jobs kept growing. Experienced workers show no gap like that. It's coming from companies hiring fewer young people, and the authors say they don't see economy-wide job loss yet.",
      },
      {
        type: "p",
        text: "One line in that paper drives my whole plan: jobs that run on written-down knowledge are shrinking, and jobs built on know-how you earn through practice and mentorship are growing. If a manual can teach it, it's getting cheaper.",
      },
      {
        type: "h2",
        text: "What I don't buy",
      },
      {
        type: "p",
        text: "The date. He never shows the math behind a thousand days, which is how it can stretch from 800 to 1,200. His flagship example of a job AI makes obsolete is radiology. Geoffrey Hinton said in 2016 to stop training radiologists. Nearly ten years later, the U.S. is still short on them.",
      },
      {
        type: "p",
        text: "So May 18, 2028 is my deadline, and I'm planning for a slower grind of closer to ten years that hits entry-level workers first. If he's right about the speed, I want to be ready anyway.",
      },
      {
        type: "h2",
        text: "The chapter 18 warning",
      },
      {
        type: "p",
        text: "Chapter 18 proposes two new kinds of money, Foundation Coins and Culture Credits. Those are the exact names of the tokens from Intelligent Internet, Mostaque's own company, which also hosts the free book. The chapter never mentions that.",
      },
      {
        type: "p",
        text: "It also attacks Bitcoin for capping its supply, then gives Foundation Coins the same 21 million cap and the same halving schedule Bitcoin uses. When I read it, the token hadn't launched. I'm not buying it on the strength of a book. Take the ideas and skip the token.",
      },
      {
        type: "h2",
        text: "What I'm doing with the 600 days",
      },
      {
        type: "p",
        text: "Now through March 31, 2027: build a cushion and stop adding. Mostaque makes the case himself in chapter 13: without a cushion you're stuck in survival mode and can't plan past the next few months. I'm keeping my day job in cybersecurity, where I work on AI agent security, since experienced workers are holding steady in the Stanford data. Nothing new gets started unless it's on this list.",
      },
      {
        type: "p",
        text: "April through December 2027: turn attention into something I own. Almost everything I run now is hours for money or content for free. The biggest fix is launching the paid version of my Skool community, and the 63-lesson curriculum is already written. I'm also picking one local industry to go deep on, since that kind of know-how stays expensive. And this journal is me publishing what I think in public.",
      },
      {
        type: "p",
        text: "January 1 to May 18, 2028: be in position. With a cushion built and recurring income coming in, I can take equity, buy a small business, or take a founding role instead of billing hours. Mostaque argues that as everything online gets generated, the real thing gets scarce, so I'm also putting more into in-person events here in Atlanta.",
      },
      {
        type: "p",
        text: "Every quarter I grade myself on the four capitals from the book's Appendix C: material (money and health), intelligence (how fast I pick up skills that last), network (relationships) and diversity (income that survives a shock). Diversity is my worst grade. Content, consulting, community and speaking all stop the day I stop showing up, so it's one lane wearing four hats.",
      },
      {
        type: "h2",
        text: "The countdown",
      },
      {
        type: "p",
        text: "I built a countdown to his date so I'd have to look at it. The countdown on my Builds page runs to May 18, 2028 and has a board of nine signs that would prove Mostaque right or wrong. I run my plan against it.",
      },
      {
        type: "p",
        text: "Mostaque ends the book on a question I keep coming back to: now that you won't have to do anything to survive, what will you choose to be? I'm still working on my answer. The plan above is how I'm spending the 600 days while I figure it out.",
      },
    ],
  },
];
