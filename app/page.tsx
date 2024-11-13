import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}