import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CreativeGrid from "./components/CreativeGrid";
import Work from "./components/Work";
import WestStone from "./components/WestStone";
import WebBuilds from "./components/WebBuilds";
import Building from "./components/Building";
import YouTube from "./components/YouTube";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <CreativeGrid />
      <Work />
      <WestStone />
      <WebBuilds />
      <Building />
      <YouTube />
      <Connect />
    </main>
  );
}
