import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Skills from "@/app/sections/Skills";
import Projects from "@/app/projects";
import Experience from "@/app/sections/Experience";
import Education from "@/app/sections/Education";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
