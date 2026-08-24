/**
 * Comment-keyword deliverables.
 *
 * Each reel gates something behind a comment keyword. ManyChat DMs the link,
 * and the link points at /r/<slug> here.
 *
 * Adding a new one is adding an entry to this file. There is no page to build.
 */

export type Block =
  | {
      kind: "list";
      numbered?: boolean;
      intro?: string;
      items: {
        head: string;
        body: string[];
        /** the standout item, gets the crimson treatment */
        flag?: boolean;
        /** small label above the heading, e.g. "the one nobody does" */
        tag?: string;
        /** trailing meta line, e.g. which criteria a project satisfies */
        meta?: string;
      }[];
    }
  | { kind: "callout"; label: string; body: string }
  | { kind: "prose"; body: string[] }
  | { kind: "cta"; eyebrow: string; label: string; sub: string; href: string };

export type Deliverable = {
  slug: string;
  /** shown above the title, e.g. "Make AI Easy · No 1" */
  eyebrow: string;
  title: string;
  /** the comment keyword that unlocks it, for our own reference */
  keyword: string;
  description: string;
  standfirst: string;
  blocks: Block[];
  /** appended to the bottom of every page unless the page ends in its own cta */
  footnote?: string;
};

const ASSESSMENT = {
  kind: "cta" as const,
  eyebrow: "Want this run on your business",
  label: "The AI Assessment",
  sub: "westiii.com/book",
  href: "/book",
};

export const deliverables: Deliverable[] = [
  {
    slug: "door",
    eyebrow: "Make AI Easy · No 1",
    title: "The AI Agent Security Checklist",
    keyword: "DOOR",
    description:
      "Ten checks to run before you let an AI agent touch anything that matters.",
    standfirst:
      "Ten checks to run before you let an AI agent touch anything that matters. Three of them were in the reel. Here are all ten.",
    blocks: [
      {
        kind: "list",
        numbered: true,
        items: [
          {
            head: "Give it one job and one set of keys",
            body: [
              "The agent gets access to exactly what its job needs. Scope it to the folder, the table, the calendar. Never the whole inbox just because the inbox is where the one email lives.",
            ],
          },
          {
            head: "Enforce access at the database level",
            flag: true,
            tag: "the one nobody does",
            body: [
              "Telling an agent to only read the customers table is a suggestion. A database user with read-only rights to one table is a wall. If the only thing stopping your agent is a sentence you wrote, you have no control.",
            ],
          },
          {
            head: "No sensitive data on day one",
            body: [
              "New hires start on low-stakes work and earn access. Run your agent for two weeks on things you could lose without it hurting. Card numbers, client records and payroll come later, once you have seen how it behaves.",
            ],
          },
          {
            head: "Separate where it practices from where you sell",
            body: [
              "The agent works in a copy. A real production database was deleted in July 2025 because an AI coding agent was pointed at the live system and ignored a freeze. If your agent can reach production, one bad instruction is permanent.",
            ],
          },
          {
            head: "Write down what it may never do",
            body: [
              "A short deny list beats a long allow list. Four things belong on almost every one: deleting records, sending money, emailing outside the company, and changing permissions. Put that list in the system config, where the agent cannot talk its way past it.",
            ],
          },
          {
            head: "Anything irreversible waits for a human click",
            body: [
              "Sending, publishing, paying, deleting, submitting. The agent prepares it, you approve it. You keep almost all of the speed.",
            ],
          },
          {
            head: "Log every action somewhere it cannot edit",
            body: [
              "If you cannot answer what it did at 2am on Tuesday, you are not running an agent, you are hoping. The log lives outside the agent's reach.",
            ],
          },
          {
            head: "Treat everything it reads as untrusted",
            body: [
              "Web pages, PDFs, emails and support tickets can carry instructions aimed at your agent, and it will follow them if you let it. What it reads is information, never a command.",
            ],
          },
          {
            head: "Scope the keys, rotate them, know where they live",
            body: [
              "One key per agent, never a shared admin key, and a date you rotate it. If you cannot name every credential your agent holds right now, that is the first thing to fix.",
            ],
          },
          {
            head: "Have a kill switch you have actually tested",
            body: [
              "Know how to stop it inside a minute, and know what breaks when you do. Test it on a normal Tuesday. Nobody has ever found the kill switch for the first time during the incident.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        body: [
          "Run all ten before an agent touches money, customers, or anything you cannot rebuild.",
        ],
      },
      ASSESSMENT,
    ],
  },

  {
    slug: "build",
    eyebrow: "Make AI Easy · No 2",
    title: "Build It Instead",
    keyword: "BUILD",
    description:
      "How to build the tool you would have paid for, instead of buying one that almost fits.",
    standfirst:
      "You asked how I start. This is the actual sequence, and none of it begins with writing code. Most of the work is deciding what the thing is before anything gets built.",
    blocks: [
      {
        kind: "list",
        numbered: true,
        items: [
          {
            head: "Name the tool you already pay for",
            body: [
              "Pick one subscription and write down what it actually solves. Be honest about the fraction. Most tools land somewhere around seventy or eighty percent, and you have quietly bent your process around the gap.",
            ],
          },
          {
            head: "Write down the gap, specifically",
            flag: true,
            tag: "this is the whole job",
            body: [
              "What are the two or three things it does not do that you keep wishing it did? That list is the spec. Everything after this is execution, and if you get this part vague you will build a worse copy of the thing you are already paying for.",
            ],
          },
          {
            head: "Talk it out before you type anything",
            body: [
              "Say the whole thing out loud. What it takes in, what it hands back, how often it should run, who else touches it. Ramble. Contradict yourself. Getting the full shape out matters more than getting it tidy.",
            ],
          },
          {
            head: "Make it interview you",
            body: [
              "Paste this in and stop. Do not let it start building.",
              "QUOTE:Before you write anything, ask me ten questions about what I actually need here. One at a time. Wait for each answer. Then turn my answers plus this original ask into a single spec, and show me the spec first.",
              "You will know things about your own problem after question six that you did not know at question one. That is the point.",
            ],
          },
          {
            head: "Build the ugliest version that runs once",
            body: [
              "No interface. No login. No settings. One file that does the job a single time and prints the answer. If it is useful ugly, it will be useful later. If it is useless ugly, you found that out in an afternoon instead of a month.",
            ],
          },
          {
            head: "Put it on a schedule and walk away",
            body: [
              "The moment it runs without you starting it, it stops being a project and becomes a tool. Mine runs at 7am and hands me the output before I am awake. Until something runs while you sleep, you are still just chatting with AI.",
            ],
          },
        ],
      },
      {
        kind: "callout",
        label: "The rule that keeps this honest",
        body: "Build the thing you would have paid for. If you would not have opened your wallet for it, you are building a toy, and toys do not survive contact with a busy week.",
      },
      {
        kind: "list",
        intro: "Three I actually run.",
        items: [
          {
            head: "A money tracker that answers my questions",
            meta: "replaced a subscription",
            body: [
              "Raw CSV exports from every account, read locally so nothing leaves the machine. It found subscriptions I had forgotten I was paying for. The paid apps kept miscategorising and never answered the one thing I actually wanted to know.",
            ],
          },
          {
            head: "A creator tracker that runs at 7am",
            meta: "nothing on the market fit",
            body: [
              "It watches a specific set of people across platforms, pulls what they posted, and hands me a board before I am up. Off-the-shelf tools track the metrics they chose, not the ones I care about.",
            ],
          },
          {
            head: "A job-search agent",
            meta: "a job nobody sells software for",
            body: [
              "It reads listings across a set of companies, scores them against what I am actually looking for, and drafts the first pass at a cover letter for anything worth the time.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        body: [
          "None of those are products. They fit one person, and that person is me. That is the whole shift: you no longer have to buy something that almost fits.",
        ],
      },
      ASSESSMENT,
    ],
  },

  {
    slug: "proof",
    eyebrow: "Make AI Easy · No 3",
    title: "Projects That Get You Hired",
    keyword: "PROOF",
    description:
      "Five portfolio projects built to survive the questions a hiring manager actually asks.",
    standfirst:
      "Nobody asks for a resume first anymore. They ask for a link. These are projects built to survive the three questions that actually get asked once somebody clicks it.",
    blocks: [
      {
        kind: "list",
        numbered: true,
        intro: "What they are checking for.",
        items: [
          {
            head: "It exists at a URL",
            body: [
              "Somebody clicks one link and watches your thing work. No install, no video, no repo they have to read. That beats every bullet point you could write.",
            ],
          },
          {
            head: "You can defend a decision",
            body: [
              "Anybody can generate a project now. Almost nobody can say what the other option was and why it was worse. Write that down while you are building, because you will forget.",
            ],
          },
          {
            head: "A real person has the problem",
            body: [
              "The tutorial project everybody built is invisible. The ugly internal tool that saved somebody eight hours a week gets you in the room.",
            ],
          },
        ],
      },
      {
        kind: "list",
        numbered: true,
        intro:
          "Five that clear all three. Pick one and finish it. One finished project beats three excellent plans.",
        items: [
          {
            head: "An agent that does one job for one real business",
            meta: "real problem · live URL",
            body: [
              "Find a local business, ask what question they answer forty times a week, and build the thing that answers it. After-hours enquiries, booking, the same five questions their front desk fields all day.",
              "The reason this one wins: you had to talk to a stranger about their actual problem, and almost nobody applying alongside you did.",
            ],
          },
          {
            head: "Something that replaces a tool you were paying for",
            flag: true,
            tag: "strongest of the five",
            meta: "defensible · real problem",
            body: [
              "Cancel a subscription and rebuild the part you actually used. Then publish the number: what it cost, what you cut, what it does that the paid one never did.",
              "It proves you can scope, ship and judge your own work. The dollar figure does the arguing for you.",
            ],
          },
          {
            head: "A before and after with the time measured",
            meta: "defensible · real problem",
            body: [
              "Take one workflow that a real team runs by hand. Time it. Rebuild it. Time it again. Show both numbers and the failure cases you found in between.",
              "Almost nobody measures. Turning up with two timestamps puts you in a very small group.",
            ],
          },
          {
            head: "A system that runs on a schedule with a public log",
            meta: "live URL · defensible",
            body: [
              "Something that fires every morning without you and writes down what it did. Leave the log open where anyone can read it, including the days it got things wrong.",
              "Anyone can demo something once. Showing thirty days of unattended runs is a completely different claim, and the mistakes in the log make it more convincing, not less.",
            ],
          },
          {
            head: "A teardown of something everybody in your field uses",
            meta: "live URL · defensible",
            body: [
              "Pick a tool or a dataset your target industry lives in, pull it apart properly, and publish what you found with the method attached so someone can check your work.",
              "This is the one that gets you known before you apply, which is a different and better position than applying.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        body: [
          "Certificates are not worthless. They just do not separate you, because the person applying next to you got the same one free this morning. A link they can click does.",
          "And when you network, give people a reason to remember you instead of a request. Show them the thing.",
        ],
      },
      {
        kind: "cta",
        eyebrow: "Mine, if you want the format",
        label: "westiii.com/builds",
        sub: "four case studies, each one a link",
        href: "/builds",
      },
    ],
  },

  {
    slug: "wispr",
    eyebrow: "Make AI Easy · No 5",
    title: "Wispr Flow, Free Month",
    keyword: "WISPR",
    description:
      "A free month of Wispr Flow Pro, so you can find out whether talking to your AI beats typing to it.",
    standfirst:
      "This is the link I mentioned. It gives you a free month of Pro, so you can find out whether talking to your AI beats typing to it before you pay for anything.",
    blocks: [
      {
        kind: "cta",
        eyebrow: "Free month of Pro",
        label: "Claim it here",
        sub: "wisprflow.ai",
        href: "https://wisprflow.ai/r?DAVID54294",
      },
      {
        kind: "list",
        items: [
          {
            head: "Use it everywhere, not just in one app",
            body: [
              "It types into whatever window you are already in. Your AI chat, your email, your notes, a form. That is the part that makes it stick.",
            ],
          },
          {
            head: "Stop editing yourself while you talk",
            body: [
              "Say the ums. Correct yourself mid-sentence. Pause and think. Mispronounce things. It cleans that up, and you get your whole thought out instead of the tidy half you would have typed.",
            ],
          },
          {
            head: "Go for a walk with it",
            body: [
              "Voice mode plus no screen is the version of this that changed how I work. Brain dump what is on your mind and what you are trying to get done, and let it organise the mess afterwards.",
            ],
          },
        ],
      },
      {
        kind: "prose",
        body: [
          "One more thing worth doing: before you ask AI for anything, tell it to interview you first. Ten questions before it answers. The answer you get after that is a different answer.",
        ],
      },
      ASSESSMENT,
    ],
    footnote:
      "That link is a referral, so I get a free month too when you use it.",
  },
];

export function getDeliverable(slug: string) {
  return deliverables.find((d) => d.slug === slug);
}
