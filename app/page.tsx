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
  name: "The $999 AI Assessment",
  description:
    "We get on a 60-minute call, I map how your business actually runs, and you get a written plan in 48 hours. I find you 5+ hours a week or you don't pay.",
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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAssessmentSchema) }}
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
