import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import About from "./components/About";
import CreativeGrid from "./components/CreativeGrid";
import Work from "./components/Work";
import WebBuilds from "./components/WebBuilds";
import Building from "./components/Building";
import YouTube from "./components/YouTube";
import Testimonials from "./components/Testimonials";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <About />
      <CreativeGrid />
      <Work />
      <WebBuilds />
      <Building />
      <YouTube />
      <Testimonials />
      <Connect />
    </main>
  );
}
