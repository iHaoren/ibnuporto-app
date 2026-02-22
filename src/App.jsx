import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Documentation from "./components/Documentation";
import Contact from "./components/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <main className="space-y-24">
      <Hero />
      <About />
      <Gallery />
      <Documentation />
      <Contact />
      <SpeedInsights />
    </main>
  );
}

export default App;
