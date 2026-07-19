import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
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
    "A 45-minute AI assessment with a written playbook and review call. I find 5+ reclaimable hours a week or you don't pay.",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAssessmentSchema) }}
      />
      <Hero />
      <HowItWorks />
      <Offers />
      <Proof />
      <About />
      <WorkshopsStrip />
      <Connect />
    </main>
  );
}
