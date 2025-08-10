import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import gambar from "../image/gambar.png";
import cv from "../cv saya.pdf";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Hero = () => {
  const profile = useRef(null)

  useEffect(() => {
    const judul = document.querySelectorAll('.judul')
    judul.forEach((el, i) => {
      const Content = i === 0 ? "halo, saya " : "Zentro web"
      gsap.to(el, {
        text: Content,
        duration: 1,
        delay: i === 0 ? 0 : 1,
        ease: "none"
      })
    })
    gsap.to(".paragraf1", {
      duration: 2,
      delay: 2,
      text: "Seorang Full Stack Developer yang passionate dalam menciptakan solusi digital inovatif dan pengalaman pengguna yang luar biasa.",
      ease: "none"
    });

    VanillaTilt.init(profile.current, {
      max: 25,
      speed: 1000,
      scale: 1.1,
      glare: true,
      "max-glare": 0.5,
    });
  }, [])
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-4 py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                Available for Work
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight judul"></span>
                <span className="text-primary judul"></span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl paragraf1">

              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="mailto:varaz4754@gmail.com">
                <Button size="lg" className="shadow-green hover:shadow-glow transition-all duration-300">
                  <Mail className="mr-2 h-5 w-5" />
                  Hubungi Saya
                </Button>
              </a>
              <a href={cv} download >
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a href="https://github.com/paras-gg">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/adipati-faras-68a757353/">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:varaz4754@gmail.com">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="flex-1 flex justify-center lg:justify-end" >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-glow" data-aos="zoom-in" ref={profile}>
                <div className="text-6xl md:text-8xl text-primary rounded-full">
                  <img src={gambar} alt="gambar" className="rounded-full" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full shadow-glow animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full shadow-glow animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;