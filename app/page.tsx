import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Offers from "./components/Offers";
import Proof from "./components/Work";
import About from "./components/About";
import WorkshopsStrip from "./components/WorkshopsStrip";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <main>
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
