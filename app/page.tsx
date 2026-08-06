import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import AiEmployees from "./components/AiEmployees";
import CostOfInaction from "./components/CostOfInaction";
import Offers from "./components/Offers";
import Proof from "./components/Work";
import About from "./components/About";
import WorkshopsStrip from "./components/WorkshopsStrip";
import Connect from "./components/Connect";

const aiAssessmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://westiii.com/#ai-assessment",
  name: "The Hours Back Plan",
  description:
    "A 45-minute AI assessment with a written playbook in 48 hours and a review call. I find 5+ reclaimable hours a week or you don't pay.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://westiii.com/#business",
    name: "Studio West Creatives",
  },
  areaServed: {
    "@type": "City",
    name: "Atlanta",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "USD",
    url: "https://westiii.com/book",
  },
};

const currentStateAssessmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://westiii.com/#current-state-assessment",
  name: "Current State Assessment",
  description:
    "A Current State Assessment for companies doing $2M to $50M. Every workflow mapped, the cost of inaction priced, and a phased build plan. I find at least $50,000 in annualized reclaimable cost in 14 days or you don't pay.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://westiii.com/#business",
    name: "Studio West Creatives",
  },
  areaServed: {
    "@type": "City",
    name: "Atlanta",
  },
  offers: {
    "@type": "Offer",
    price: "3500",
    priceCurrency: "USD",
    url: "https://westiii.com/assessment",
  },
};

const firstEmployeeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://westiii.com/#first-ai-employee",
  name: "Your First AI Employee",
  description:
    "A managed AI employee that owns one clearly defined role: written job description, a Company Brain built from how the business runs, scoped tool access, approval gates, and a weekly value ledger.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://westiii.com/#business",
    name: "Studio West Creatives",
  },
  areaServed: {
    "@type": "City",
    name: "Atlanta",
  },
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "USD",
    url: "https://westiii.com/ai-employees",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAssessmentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(currentStateAssessmentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(firstEmployeeSchema) }}
      />
      <Hero />
      <HowItWorks />
      <AiEmployees />
      <CostOfInaction />
      <Offers />
      <Proof />
      <About />
      <WorkshopsStrip />
      <Connect />
    </main>
  );
}
