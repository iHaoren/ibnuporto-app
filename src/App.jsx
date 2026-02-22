import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Documentation from "./components/Documentation";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <main className="space-y-24">
      <Hero />
      <About />
      <Gallery />
      <Documentation />
      <Contact />
      <Analytics />
    </main>
  );
}

export default App;
