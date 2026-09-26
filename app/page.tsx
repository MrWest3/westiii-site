import IdentityHero from "./components/IdentityHero";
import Doors from "./components/Doors";
import WhatIDo from "./components/WhatIDo";
import RealEstateSpotlight from "./components/RealEstateSpotlight";
import Proof from "./components/Work";
import HopeStrip from "./components/HopeStrip";
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
      <IdentityHero />
      <Doors />
      <WhatIDo />
      <RealEstateSpotlight />
      <Proof />
      <HopeStrip />
      <Connect />
    </main>
  );
}
