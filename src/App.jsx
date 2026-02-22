import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Documentation from "./components/Documentation";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="space-y-24">
      <Hero />
      <About />
      <Gallery />
      <Documentation />
      <Contact />
    </main>
  );
}

export default App;
