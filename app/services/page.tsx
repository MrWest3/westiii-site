import Link from "next/link";

const tiers = [
  {
    name: "Foundation",
    price: "$2,500",
    implementation: "$2,000 one-time",
    tagline: "Everything you need to stop bleeding leads and start converting faster.",
    recommended: false,
    features: [
      { name: "Studio West CRM & Pipeline", detail: "Unified + provider CRM with custom fields. Two pipelines: Patient Journey and Provider Recruitment." },
      { name: "Speed to Lead", detail: "Auto-response within 60 seconds of any form submission via SMS + email. Never lose a hot lead." },
      { name: "Missed Call Text-Back", detail: "Auto-SMS within 1 minute of any missed call across all locations." },
      { name: "Database Reactivation", detail: "Monthly campaigns to re-engage lapsed contacts via automated SMS/email sequences." },
      { name: "Recruitment Funnel", detail: "Dedicated landing page + application form + automated nurture sequence." },
      { name: "AI Voice Agent", detail: "Inbound call handling for appointment scheduling and FAQ — 1 agent, customized for your business." },
      { name: "Studio West Sites & Forms", detail: "Patient intake + provider application pages, fully connected to CRM and automations." },
      { name: "Reputation Management", detail: "Google review monitoring, automated review request sequences post-appointment across all locations." },
      { name: "Membership Platform (Basic)", detail: "Internal training hub for staff onboarding. Upload courses, track completion, assign by role and location." },
      { name: "Monthly Reporting", detail: "Performance dashboard with key metrics." },
    ],
  },
  {
    name: "Growth",
    price: "$3,500",
    implementation: "$3,000 one-time",
    tagline: "Everything in Foundation plus AI-powered content, expanded automation, and premium capabilities.",
    recommended: true,
    features: [
      { name: "Everything in Foundation", detail: "" },
      { name: "AI Social Media", detail: "AI-generated content calendar, scheduled posts across platforms — industry and business-specific." },
      { name: "Advanced Reactivation", detail: "Segmented by base location, insurance type, and dental readiness class. Multi-channel: SMS + email + voicemail drops." },
      { name: "Dual AI Agents", detail: "Demo/FAQ agent + dedicated closing agent on provider recruitment pages." },
      { name: "Studio West Website Builder", detail: "Multiple agents across locations, outbound appointment confirmation calls, provider outreach calls." },
      { name: "Membership Platform (Growth)", detail: "Community structure, conditional logic based on client type, location, and tier." },
      { name: "Advanced Workflows", detail: "Multi-step nurture sequences, conditional logic based on patient type, location, and insurance." },
      { name: "Conversational AI Bot", detail: "Website chat + SMS bot for 24/7 patient engagement." },
      { name: "Ad Campaign Support", detail: "Campaign structure, audience targeting, landing page optimization (ad spend separate)." },
      { name: "Bi-Weekly Reporting", detail: "Performance reviews + optimization recommendations." },
    ],
  },
  {
    name: "Enterprise",
    price: "$5,500",
    implementation: "$3,500 one-time",
    tagline: "Full AI-powered operating system. Maximum automation, maximum leverage.",
    recommended: false,
    features: [
      { name: "Everything in Foundation + Growth", detail: "" },
      { name: "Custom AI Apps", detail: "ROI calculators, provider dashboards, location comparison tools — zero-code app builder." },
      { name: "Full Membership / LMS", detail: "Internal training academy (staff certification, compliance tracking, location-specific protocols) + external revenue platform (premium content, paid subscriptions, community membership). Full course creation, drip content, certificates, payment processing." },
      { name: "AI Voice (Advanced)", detail: "Multiple agents across locations, outbound appointment confirmation calls, provider outreach calls." },
      { name: "Command Center", detail: "Centralized dashboard across all locations. Location-level tracking, network-wide analytics." },
      { name: "Priority Support", detail: "Dedicated Slack channel, same-day response, monthly strategy calls." },
      { name: "Workflow Optimization", detail: "Ongoing automation improvements, new workflow builds as needs evolve." },
      { name: "White-Label Reporting", detail: "Branded dashboards for stakeholders and leadership." },
    ],
  },
];

const replacedTools = [
  { tool: "CRM Platform", replacement: "Studio West CRM (included)" },
  { tool: "Separate SMS Platform", replacement: "Studio West SMS (included)" },
  { tool: "Review Management Tool", replacement: "Studio West Reputation (included)" },
  { tool: "Course / LMS Platform", replacement: "Studio West Memberships (included)" },
  { tool: "Landing Page Tools", replacement: "Studio West Sites (included)" },
  { tool: "Call Tracking", replacement: "Studio West Voice Agent (included)" },
];

const capabilities = [
  "Staff onboarding courses",
  "Role-based assignment",
  "Completion tracking",
  "Client-facing content",
  "Paid subscriptions",
  "Drip content scheduling",
  "Licenses & credentials",
  "Compliance / CE tracking",
  "Multi-tier memberships",
  "Community features",
  "Revenue analytics",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Nav bar */}
      <div className="border-b border-[var(--border)] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-[var(--ink-secondary)] hover:text-[var(--crimson)] transition-colors inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>
          <Link
            href="/#connect"
            className="text-sm font-semibold px-4 py-2 bg-[var(--crimson)] text-white rounded hover:bg-[var(--crimson-light)] transition-colors"
          >
            Work With Me
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            Studio West Creatives
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[var(--ink)] leading-none mb-6">
            AI Operating
            <br />
            <span className="text-[var(--crimson)]">System</span>
          </h1>
          <p className="text-xl text-[var(--ink-secondary)] max-w-2xl leading-relaxed mb-8">
            One system that replaces your CRM, SMS platform, review tool, LMS, landing pages, and call tracking — while adding AI agents, automated pipelines, and content generation on top.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm text-[var(--ink-secondary)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Replaces your existing tools — included in every plan
          </div>
        </div>

        {/* The Shift */}
        <div className="mb-20 border-l-2 border-[var(--crimson)] pl-8">
          <p className="text-2xl md:text-3xl font-black text-[var(--ink)] leading-snug mb-4">
            Block just laid off 4,000 people. Amazon. Salesforce. Duolingo.
            They&apos;re all cutting headcount while revenue goes up.
          </p>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            This is not a warning about the future. This is a warning about right now.
            The formula has changed: <span className="text-[var(--ink)] font-semibold">smaller teams + intelligent systems = more leverage.</span> The businesses
            that win from here are the ones that figure this out first.
          </p>
        </div>

        {/* The Bandwidth Trap */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)] mb-6 leading-tight">
            The Bandwidth Trap
          </h2>
          <p className="text-[var(--ink-secondary)] max-w-2xl leading-relaxed mb-12">
            Most businesses spend 80% of their time working <em>in</em> the business — checking stats,
            following up on leads, managing tools, sending emails, building reports.
            That leaves 20% to actually work <em>on</em> the business. The result is a plateau.
            Not because the team isn&apos;t talented. Because they don&apos;t have the bandwidth to grow.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-6">Before AIOS</p>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[var(--ink-secondary)]">Busy Work — In the Business</span>
                    <span className="text-sm font-black text-[var(--ink)]">80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div className="h-full w-4/5 bg-[var(--muted)] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[var(--ink-secondary)]">Growth Work — On the Business</span>
                    <span className="text-sm font-black text-[var(--ink)]">20%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div className="h-full w-1/5 bg-[var(--muted)] rounded-full" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] mt-6 leading-relaxed">
                Cold calling, follow-ups, data entry, reporting, scheduling, tool management.
                Recurring tasks that consume the day and leave nothing for what actually moves the business forward.
              </p>
            </div>

            <div className="bg-[var(--ink)] border border-[var(--ink)] rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-6">After AIOS</p>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white/60">Busy Work — Automated</span>
                    <span className="text-sm font-black text-white">20%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-1/5 bg-white/30 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white/60">Growth Work — On the Business</span>
                    <span className="text-sm font-black text-[var(--gold)]">80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-4/5 bg-[var(--crimson)] rounded-full" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/50 mt-6 leading-relaxed">
                Every automated task is time you never lose again. And it compounds — the more the system learns,
                the more it handles, the more bandwidth you get back. Week over week.
              </p>
            </div>
          </div>
        </div>

        {/* What this is */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            What This Is
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)] mb-6 leading-tight">
            This is not ChatGPT.<br />This is not a SaaS subscription.
          </h2>
          <p className="text-[var(--ink-secondary)] max-w-2xl leading-relaxed mb-10">
            An AI Operating System wraps around your entire business. It knows who you are,
            what you want to accomplish, and how to access every tool and platform you run on.
            It works while you sleep. It remembers every conversation. Every interaction makes it more effective.
            It is the difference between using AI as a tool and having AI work for you.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { layer: "01", title: "Context", body: "The system knows your business, your goals, your clients, and how you operate. You set it up once. It never forgets." },
              { layer: "02", title: "Data", body: "Everything you access daily — CRM, email, forms, reports — connects to one place. One conversation surfaces all of it." },
              { layer: "03", title: "Intelligence", body: "Agents proactively surface what you need. Lead reports, follow-up queues, performance summaries — delivered before you ask." },
              { layer: "04", title: "Automation", body: "The recurring tasks that eat your day get handed off. Follow-ups, review requests, content scheduling, lead qualification — running 24/7." },
              { layer: "05", title: "Build", body: "When 60–70% of your operations run on their own, you get your bandwidth back. That's when the real growth starts." },
              { layer: "KPI", title: "1 Hour = 5–10 Hours", body: "That's the leverage shift. One hour of your time drives five to ten hours of output when the system is running correctly." },
            ].map((item) => (
              <div key={item.layer} className="border border-[var(--border)] rounded-xl p-6 hover:border-[var(--crimson)] transition-colors duration-300">
                <p className="text-xs font-black text-[var(--crimson)] tracking-widest mb-2">{item.layer}</p>
                <p className="font-bold text-[var(--ink)] mb-2">{item.title}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tiers */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            The Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)] mb-4 leading-tight">
            Choose Your System
          </h2>
          <p className="text-[var(--muted)] max-w-xl leading-relaxed mb-12">
            Every tier is built and deployed custom. Reach out and we scope it together.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border overflow-hidden flex flex-col ${
                tier.recommended
                  ? "border-[var(--crimson)] shadow-lg shadow-[var(--crimson)]/10"
                  : "border-[var(--border)]"
              }`}
            >
              {tier.recommended && (
                <div className="bg-[var(--crimson)] text-white text-xs font-bold tracking-widest uppercase text-center py-2">
                  Recommended
                </div>
              )}
              <div className={`p-6 ${tier.recommended ? "bg-white" : "bg-[var(--surface)]"}`}>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-2">
                  {tier.name}
                </p>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{tier.tagline}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col gap-3 border-t border-[var(--border)]">
                {tier.features.map((f) => (
                  <div key={f.name} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--crimson)] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">{f.name}</p>
                      {f.detail && (
                        <p className="text-xs text-[var(--muted)] leading-relaxed mt-0.5">{f.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-[var(--border)]">
                <Link
                  href="/#connect"
                  className={`w-full block text-center py-3 rounded font-semibold text-sm transition-colors ${
                    tier.recommended
                      ? "bg-[var(--crimson)] text-white hover:bg-[var(--crimson-light)]"
                      : "border border-[var(--border)] text-[var(--ink)] hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* What You Can Eliminate */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-[var(--ink)] mb-2">What You Can Eliminate</h2>
          <p className="text-[var(--muted)] mb-10">
            Every tool below is replaced by something already included in your plan.
          </p>
          <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-[var(--surface)] px-6 py-3 border-b border-[var(--border)]">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)]">Current Tool</p>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)]">Replaced By</p>
            </div>
            {replacedTools.map((row, i) => (
              <div
                key={row.tool}
                className={`grid grid-cols-2 px-6 py-4 ${i < replacedTools.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              >
                <p className="text-sm text-[var(--ink-secondary)] line-through opacity-60">{row.tool}</p>
                <p className="text-sm font-medium text-[var(--ink)]">{row.replacement}</p>
              </div>
            ))}
            <div className="px-6 py-4 bg-[var(--ink)] rounded-b-2xl">
              <p className="text-sm text-white/70">
                Every tool in this list is{" "}
                <span className="text-white font-semibold">already included in your plan</span>
                {" "}— no additional subscriptions, no integrations to manage.
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-[var(--ink)] mb-2">Full Capability Set</h2>
          <p className="text-[var(--muted)] mb-10">Available across tiers depending on your plan.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-3 p-4 border border-[var(--border)] rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[var(--crimson)] shrink-0" />
                <span className="text-sm text-[var(--ink-secondary)]">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--ink)] rounded-2xl p-10 md:p-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-4">
            Ready to Build
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Let&apos;s Build Your
            <br />
            Operating System.
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
            Every system is scoped and built custom. Reach out and we&apos;ll map out exactly what your business needs.
          </p>
          <Link
            href="/#connect"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--crimson)] text-white font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors text-sm"
          >
            Start the Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
