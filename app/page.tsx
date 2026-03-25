import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <div className="bg-[#111316] text-[#e2e2e6] min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative pt-20">
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
