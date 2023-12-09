import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <section
        id="home"
        className="md:p-24 max-md:py-24 max-sm:ml-12 min-h-screen flex items-center"
      >
        <Hero />
      </section>
      <section id="about" className="min-h-screen flex items-center">
        <About />
      </section>
      <section
        id="services"
        className="md:p-24 max-md:py-24 max-sm:mx-12 min-h-screen"
      >
        <Services />
      </section>
      <section id="portfolio" className="min-h-screen text-center">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen py-24">
        <Contact />
      </section>
    </main>
  );
}
