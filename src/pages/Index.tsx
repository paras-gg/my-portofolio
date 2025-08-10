import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);
const Index = () => {

  useEffect(() =>{
    AOS.init({duration : 800})
  },[])
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
