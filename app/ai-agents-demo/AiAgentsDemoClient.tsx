"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type LeadStatus = "New" | "Qualified" | "Callback queued" | "Booked" | "Nurture";
type IntakeField =
  | "serviceInterest"
  | "newExisting"
  | "mainConcern"
  | "preferredLocation"
  | "urgency"
  | "preferredCallbackTime"
  | "fullName"
  | "phone"
  | "email";

interface Scenario {
  id: string;
  practice: string;
  segment: string;
  headline: string;
  source: string;
  locationOptions: string[];
  serviceOptions: string[];
  starter: string;
  ownerGoal: string;
  sampleLead: Record<IntakeField, string>;
}

interface Lead {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  preferredLocation: string;
  serviceInterest: string;
  newExisting: string;
  mainConcern: string;
  preferredCallbackTime: string;
  urgency: string;
  source: string;
  aiSummary: string;
  suggestedNextAction: string;
  draftedFollowUp: string;
  status: LeadStatus;
  createdAt: string;
}

interface ChatMessage {
  id: number;
  role: "ai" | "visitor";
  text: string;
}

interface IntakeStep {
  field: IntakeField;
  question: string;
  helper: string;
  options?: string[];
}

const scenarios: Scenario[] = [
  {
    id: "pediatric-therapy",
    practice: "BrightPath Pediatric Therapy",
    segment: "Pediatric therapy group",
    headline: "Parent asks about speech and occupational therapy availability.",
    source: "Website chat - Services page",
    locationOptions: ["Buckhead", "Decatur", "Virtual consult"],
    serviceOptions: ["Speech therapy", "Occupational therapy", "Feeding support", "Care coordination"],
    starter:
      "Hi, I can help with service fit and callback routing. I cannot provide medical advice, but I can collect basic contact and scheduling details for the team.",
    ownerGoal: "Route parent inquiries quickly without asking for clinical history.",
    sampleLead: {
      serviceInterest: "Occupational therapy",
      newExisting: "New patient",
      mainConcern: "Parent wants to understand availability and next steps for an evaluation.",
      preferredLocation: "Decatur",
      urgency: "This week",
      preferredCallbackTime: "Tomorrow morning",
      fullName: "Maya Johnson",
      phone: "(404) 555-0182",
      email: "maya.johnson@example.com",
    },
  },
  {
    id: "functional-medicine",
    practice: "Northline Functional Wellness",
    segment: "Functional medicine clinic",
    headline: "Prospective patient wants a discovery call before booking.",
    source: "Website chat - New patient page",
    locationOptions: ["Midtown", "Sandy Springs", "Virtual consult"],
    serviceOptions: ["New patient consultation", "Membership information", "Lab review process", "Nutrition coaching"],
    starter:
      "Welcome. I can explain non-clinical next steps and help the team follow up. I will avoid symptoms, diagnoses, or treatment advice.",
    ownerGoal: "Qualify consult intent and capture a clean handoff for the coordinator.",
    sampleLead: {
      serviceInterest: "New patient consultation",
      newExisting: "New patient",
      mainConcern: "Wants pricing, timeline, and whether a discovery call is required first.",
      preferredLocation: "Virtual consult",
      urgency: "Flexible",
      preferredCallbackTime: "Weekday afternoon",
      fullName: "Jordan Ellis",
      phone: "(678) 555-0144",
      email: "jordan.ellis@example.com",
    },
  },
  {
    id: "wellness-studio",
    practice: "Aster Wellness Studio",
    segment: "Wellness and aesthetics studio",
    headline: "Visitor compares memberships and wants a callback.",
    source: "Instagram bio link - Mobile landing page",
    locationOptions: ["West Midtown", "Alpharetta", "No preference"],
    serviceOptions: ["IV hydration", "Skin consultation", "Membership options", "Wellness visit"],
    starter:
      "I can help with service information and connect you with the team. I do not collect medical details here.",
    ownerGoal: "Convert social traffic into qualified leads with immediate staff visibility.",
    sampleLead: {
      serviceInterest: "Membership options",
      newExisting: "New patient",
      mainConcern: "Comparing monthly wellness plans and wants help choosing the right starting point.",
      preferredLocation: "West Midtown",
      urgency: "Next few days",
      preferredCallbackTime: "Today after 3 PM",
      fullName: "Alex Rivera",
      phone: "(470) 555-0199",
      email: "alex.rivera@example.com",
    },
  },
];

const emptyIntake: Record<IntakeField, string> = {
  serviceInterest: "",
  newExisting: "",
  mainConcern: "",
  preferredLocation: "",
  urgency: "",
  preferredCallbackTime: "",
  fullName: "",
  phone: "",
  email: "",
};

const initialLeads: Lead[] = [
  {
    id: 101,
    fullName: "Renee Brooks",
    phone: "(404) 555-0177",
    email: "renee.brooks@example.com",
    preferredLocation: "Buckhead",
    serviceInterest: "Speech therapy",
    newExisting: "New patient",
    mainConcern: "Needs availability and insurance process explained by staff.",
    preferredCallbackTime: "Today before 5 PM",
    urgency: "This week",
    source: "Website chat - Services page",
    aiSummary:
      "New parent inquiry for speech therapy. Interested in Buckhead, wants availability and insurance process. No clinical details collected.",
    suggestedNextAction: "Call today, confirm fit, then send evaluation packet.",
    draftedFollowUp:
      "Hi Renee, thanks for reaching out to BrightPath. Our coordinator can help with availability and next steps. Is today before 5 PM still a good callback window?",
    status: "Callback queued",
    createdAt: "9:42 AM",
  },
  {
    id: 102,
    fullName: "Marcus Lee",
    phone: "(678) 555-0101",
    email: "marcus.lee@example.com",
    preferredLocation: "Virtual consult",
    serviceInterest: "New patient consultation",
    newExisting: "New patient",
    mainConcern: "Wants pricing and discovery call details.",
    preferredCallbackTime: "Friday morning",
    urgency: "Flexible",
    source: "Website form - Pricing page",
    aiSummary:
      "Prospective new patient asking about consultation pricing and discovery call flow. Good candidate for coordinator call.",
    suggestedNextAction: "Send consult overview and invite to book discovery call.",
    draftedFollowUp:
      "Hi Marcus, thanks for your interest. We can walk through pricing, timing, and whether a discovery call is the right first step.",
    status: "Nurture",
    createdAt: "Yesterday",
  },
];

const statusStyles: Record<LeadStatus, string> = {
  New: "border-sky-200 bg-sky-50 text-sky-800",
  Qualified: "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Callback queued": "border-amber-200 bg-amber-50 text-amber-800",
  Booked: "border-violet-200 bg-violet-50 text-violet-800",
  Nurture: "border-stone-200 bg-stone-100 text-stone-700",
};

const statuses: LeadStatus[] = ["New", "Qualified", "Callback queued", "Booked", "Nurture"];

function buildSteps(scenario: Scenario): IntakeStep[] {
  return [
    {
      field: "serviceInterest",
      question: "What service are you interested in?",
      helper: "General service category only.",
      options: scenario.serviceOptions,
    },
    {
      field: "newExisting",
      question: "Are you a new or existing patient?",
      helper: "This helps the team route the request.",
      options: ["New patient", "Existing patient", "Returning after a break"],
    },
    {
      field: "mainConcern",
      question: "What would you like the team to help with?",
      helper: "Keep this high level. Please do not share symptoms, diagnoses, or medical history.",
      options: ["Availability", "Pricing", "Right service fit", "Callback from coordinator"],
    },
    {
      field: "preferredLocation",
      question: "Which location works best?",
      helper: "Choose the most convenient option.",
      options: scenario.locationOptions,
    },
    {
      field: "urgency",
      question: "How soon would you like to hear back?",
      helper: "For emergencies, call local emergency services instead.",
      options: ["Today", "This week", "Next few days", "Flexible"],
    },
    {
      field: "preferredCallbackTime",
      question: "What callback window works for you?",
      helper: "A broad window is enough for this demo.",
      options: ["Today after 3 PM", "Tomorrow morning", "Weekday afternoon", "Anytime"],
    },
    {
      field: "fullName",
      question: "What is your full name?",
      helper: "Contact details are used only for the staff handoff.",
    },
    {
      field: "phone",
      question: "What phone number should the team use?",
      helper: "Use demo data here. No real patient information is needed.",
    },
    {
      field: "email",
      question: "What email should receive the follow-up?",
      helper: "Use demo data here. No PHI is collected.",
    },
  ];
}

function makeSummary(values: Record<IntakeField, string>, scenario: Scenario) {
  const urgency = values.urgency || "unspecified timing";
  return `${values.newExisting || "Visitor"} interested in ${values.serviceInterest || "a service"} at ${
    values.preferredLocation || "preferred location TBD"
  }. Main request: ${values.mainConcern || "general callback"}. Requested callback: ${
    values.preferredCallbackTime || "not specified"
  }. Urgency: ${urgency}. No PHI, medical history, diagnosis, or treatment advice collected.`;
}

function makeNextAction(values: Record<IntakeField, string>) {
  if (values.urgency === "Today") {
    return "Call within 15 minutes, confirm service fit, then offer the next available appointment path.";
  }

  if (values.newExisting === "Existing patient") {
    return "Route to front desk to verify account and schedule the requested callback window.";
  }

  return "Call during the preferred window, confirm fit, then send intake or booking link.";
}

function makeFollowUp(values: Record<IntakeField, string>, scenario: Scenario) {
  const firstName = values.fullName.split(" ")[0] || "there";
  return `Hi ${firstName}, thanks for reaching out to ${scenario.practice}. Our team can help with ${values.serviceInterest.toLowerCase()} and next steps. Is ${values.preferredCallbackTime.toLowerCase()} still a good time to call?`;
}

function makeLead(values: Record<IntakeField, string>, scenario: Scenario, id: number): Lead {
  return {
    id,
    ...values,
    source: scenario.source,
    aiSummary: makeSummary(values, scenario),
    suggestedNextAction: makeNextAction(values),
    draftedFollowUp: makeFollowUp(values, scenario),
    status: values.urgency === "Today" ? "Callback queued" : "Qualified",
    createdAt: "Just now",
  };
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-stone-200 py-3 last:border-b-0">
      <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-stone-950">{value || "-"}</dd>
    </div>
  );
}

function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span className={`rounded border px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

export default function AiAgentsDemoClient() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = scenarios[scenarioIndex];
  const steps = useMemo(() => buildSteps(scenario), [scenario]);
  const [stepIndex, setStepIndex] = useState(0);
  const [intake, setIntake] = useState<Record<IntakeField, string>>(emptyIntake);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: "ai", text: scenarios[0].starter },
    { id: 2, role: "ai", text: buildSteps(scenarios[0])[0].question },
  ]);
  const [draft, setDraft] = useState("");
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedLeadId, setSelectedLeadId] = useState(initialLeads[0].id);
  const [leadCounter, setLeadCounter] = useState(201);

  const currentStep = steps[stepIndex];
  const completed = stepIndex >= steps.length;
  const selectedLead = leads.find((lead) => lead.id === selectedLeadId) || leads[0];
  const currentGeneratedLead = makeLead(intake, scenario, leadCounter);
  const completionScore = Math.round(
    (Object.values(intake).filter(Boolean).length / Object.keys(emptyIntake).length) * 100,
  );

  function resetForScenario(nextIndex: number) {
    const nextScenario = scenarios[nextIndex];
    const nextSteps = buildSteps(nextScenario);
    setScenarioIndex(nextIndex);
    setStepIndex(0);
    setIntake(emptyIntake);
    setDraft("");
    setMessages([
      { id: 1, role: "ai", text: nextScenario.starter },
      { id: 2, role: "ai", text: nextSteps[0].question },
    ]);
  }

  function submitAnswer(answer: string) {
    if (!currentStep || !answer.trim()) {
      return;
    }

    const cleanAnswer = answer.trim();
    const nextIntake = { ...intake, [currentStep.field]: cleanAnswer };
    const nextStepIndex = stepIndex + 1;
    const nextMessageId = messages.length + 1;

    setIntake(nextIntake);
    setDraft("");
    setStepIndex(nextStepIndex);
    setMessages((items) => [
      ...items,
      { id: nextMessageId, role: "visitor", text: cleanAnswer },
      {
        id: nextMessageId + 1,
        role: "ai",
        text:
          nextStepIndex < steps.length
            ? steps[nextStepIndex].question
            : "Thanks. I have enough non-clinical details to hand this to the team.",
      },
    ]);
  }

  function addLeadToPipeline(values: Record<IntakeField, string> = intake) {
    const newLead = makeLead(values, scenario, leadCounter);
    setLeads((items) => [newLead, ...items]);
    setSelectedLeadId(newLead.id);
    setLeadCounter((count) => count + 1);
  }

  function loadSample() {
    const sample = scenario.sampleLead;
    setIntake(sample);
    setStepIndex(steps.length);
    setDraft("");
    setMessages([
      { id: 1, role: "ai", text: scenario.starter },
      { id: 2, role: "visitor", text: "Can you help me request a callback?" },
      { id: 3, role: "ai", text: "Absolutely. I collected the basic, non-clinical intake details for the team." },
      { id: 4, role: "visitor", text: `${sample.fullName}, ${sample.serviceInterest}, ${sample.preferredCallbackTime}.` },
    ]);
    addLeadToPipeline(sample);
  }

  function updateLeadStatus(id: number, status: LeadStatus) {
    setLeads((items) => items.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
  }

  const alertTone =
    selectedLead?.urgency === "Today"
      ? "border-red-200 bg-red-50 text-red-900"
      : "border-amber-200 bg-amber-50 text-amber-900";

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-950">
      <header className="border-b border-stone-200 bg-white/85 px-5 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 transition-colors hover:text-[var(--crimson)]"
          >
            <span aria-hidden="true">←</span>
            Studio West
          </Link>
          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-500 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Local prototype
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[var(--crimson)]">
              AI Front Desk Agent Demo
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-stone-950 md:text-6xl">
              Capture qualified wellness leads before the front desk has to chase them.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              A guarded website agent answers basic service questions, collects a short intake,
              drafts the handoff, and gives the owner a clean pipeline view. This v1 uses mock
              data and local state only.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["No PHI collection", "No medical advice", "Mock alerts", "Owner-ready summary"].map((item) => (
                <span
                  key={item}
                  className="rounded border border-stone-200 bg-stone-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-stone-200 bg-[#f5f2ea] p-4">
            <div className="rounded-md border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Scenario</p>
                  <h2 className="mt-1 text-xl font-black text-stone-950">{scenario.practice}</h2>
                </div>
                <span className="rounded bg-[var(--ink)] px-3 py-1 text-xs font-bold text-white">{scenario.segment}</span>
              </div>
              <p className="mb-5 text-sm leading-6 text-stone-600">{scenario.headline}</p>
              <div className="grid gap-2">
                {scenarios.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => resetForScenario(index)}
                    className={`rounded-md border px-4 py-3 text-left transition ${
                      scenarioIndex === index
                        ? "border-[var(--crimson)] bg-red-50 text-stone-950"
                        : "border-stone-200 bg-white text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    <span className="block text-sm font-black">{item.practice}</span>
                    <span className="mt-1 block text-xs leading-5">{item.ownerGoal}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 xl:grid-cols-[0.92fr_1.08fr_0.92fr]">
        <div className="rounded-lg border border-stone-200 bg-white">
          <div className="border-b border-stone-200 p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Patient Website</p>
            <h2 className="mt-1 text-xl font-black">Chat-style intake</h2>
          </div>

          <div className="h-[440px] overflow-y-auto p-4">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className={`mb-3 flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] rounded-lg px-4 py-3 text-sm leading-6 ${
                      message.role === "visitor"
                        ? "bg-[var(--crimson)] text-white"
                        : "border border-stone-200 bg-stone-50 text-stone-700"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-stone-200 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                Intake {completionScore}% complete
              </span>
              <button
                type="button"
                onClick={loadSample}
                className="rounded border border-stone-300 px-3 py-1.5 text-xs font-bold text-stone-700 transition hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
              >
                Run sample
              </button>
            </div>

            {!completed && currentStep ? (
              <>
                <p className="mb-3 text-xs leading-5 text-stone-500">{currentStep.helper}</p>
                {currentStep.options ? (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {currentStep.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => submitAnswer(option)}
                        className="rounded border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-700 transition hover:border-[var(--crimson)] hover:bg-red-50 hover:text-[var(--crimson)]"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
                <form
                  className="flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    submitAnswer(draft);
                  }}
                >
                  <input
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    className="min-w-0 flex-1 rounded border border-stone-300 px-3 py-3 text-sm outline-none transition focus:border-[var(--crimson)]"
                    placeholder="Type demo response..."
                  />
                  <button
                    type="submit"
                    className="rounded bg-stone-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--crimson)]"
                  >
                    Send
                  </button>
                </form>
              </>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => addLeadToPipeline()}
                  className="rounded bg-[var(--crimson)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--crimson-light)]"
                >
                  Add to pipeline
                </button>
                <button
                  type="button"
                  onClick={() => resetForScenario(scenarioIndex)}
                  className="rounded border border-stone-300 px-4 py-3 text-sm font-bold text-stone-700 transition hover:border-stone-500"
                >
                  Reset intake
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white">
          <div className="border-b border-stone-200 p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">AI Handoff</p>
            <h2 className="mt-1 text-xl font-black">Lead summary generator</h2>
          </div>

          <div className="grid gap-5 p-4 lg:grid-cols-[0.9fr_1.1fr]">
            <dl className="rounded-lg border border-stone-200 bg-stone-50 px-4">
              <FieldRow label="Full name" value={intake.fullName} />
              <FieldRow label="Phone" value={intake.phone} />
              <FieldRow label="Email" value={intake.email} />
              <FieldRow label="Location" value={intake.preferredLocation} />
              <FieldRow label="Service" value={intake.serviceInterest} />
              <FieldRow label="Patient type" value={intake.newExisting} />
              <FieldRow label="Callback" value={intake.preferredCallbackTime} />
              <FieldRow label="Urgency" value={intake.urgency} />
            </dl>

            <div className="space-y-4">
              <div className="rounded-lg border border-stone-200 p-4">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-stone-400">AI summary</p>
                <p className="text-sm leading-6 text-stone-700">{currentGeneratedLead.aiSummary}</p>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                  Suggested next action
                </p>
                <p className="text-sm font-semibold leading-6 text-emerald-950">
                  {currentGeneratedLead.suggestedNextAction}
                </p>
              </div>
              <div className="rounded-lg border border-stone-200 p-4">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-stone-400">
                  Drafted follow-up
                </p>
                <p className="text-sm leading-6 text-stone-700">{currentGeneratedLead.draftedFollowUp}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className={`rounded-lg border p-4 ${alertTone}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Fake alert</p>
                <h2 className="mt-1 text-lg font-black">New qualified lead routed</h2>
              </div>
              <span className="rounded bg-white/70 px-2 py-1 text-xs font-black">SMS</span>
            </div>
            <p className="mt-3 text-sm leading-6">
              {selectedLead.fullName} needs a {selectedLead.serviceInterest.toLowerCase()} callback at{" "}
              {selectedLead.preferredCallbackTime.toLowerCase()}. Owner and front desk notifications are simulated.
            </p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white">
            <div className="border-b border-stone-200 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Owner Dashboard</p>
              <h2 className="mt-1 text-xl font-black">Pipeline</h2>
            </div>
            <div className="divide-y divide-stone-200">
              {leads.map((lead) => (
                <button
                  key={lead.id}
                  type="button"
                  onClick={() => setSelectedLeadId(lead.id)}
                  className={`block w-full px-4 py-4 text-left transition ${
                    selectedLeadId === lead.id ? "bg-red-50" : "bg-white hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black text-stone-950">{lead.fullName}</p>
                      <p className="mt-1 text-xs text-stone-500">{lead.serviceInterest}</p>
                    </div>
                    <StatusBadge status={lead.status} />
                  </div>
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-stone-500">{lead.aiSummary}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-stone-200 bg-white p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Selected lead</p>
          <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black">{selectedLead.fullName}</h2>
              <p className="mt-1 text-sm text-stone-500">{selectedLead.source}</p>
            </div>
            <StatusBadge status={selectedLead.status} />
          </div>
          <dl className="mt-5 grid gap-x-5 sm:grid-cols-2">
            <FieldRow label="Phone" value={selectedLead.phone} />
            <FieldRow label="Email" value={selectedLead.email} />
            <FieldRow label="Location" value={selectedLead.preferredLocation} />
            <FieldRow label="Callback" value={selectedLead.preferredCallbackTime} />
          </dl>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Staff workspace</p>
              <h2 className="mt-1 text-xl font-black">Handoff notes and status controls</h2>
            </div>
            <select
              value={selectedLead.status}
              onChange={(event) => updateLeadStatus(selectedLead.id, event.target.value as LeadStatus)}
              className="rounded border border-stone-300 bg-white px-3 py-2 text-sm font-bold text-stone-700 outline-none focus:border-[var(--crimson)]"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-stone-200 p-4">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-stone-400">Summary</p>
              <p className="text-sm leading-6 text-stone-700">{selectedLead.aiSummary}</p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Action</p>
              <p className="text-sm font-semibold leading-6 text-emerald-950">{selectedLead.suggestedNextAction}</p>
            </div>
            <div className="rounded-lg border border-stone-200 p-4">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-stone-400">Follow-up</p>
              <p className="text-sm leading-6 text-stone-700">{selectedLead.draftedFollowUp}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
