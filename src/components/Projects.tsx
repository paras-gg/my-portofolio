import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang komprehensif.",
      image: "🛒",
      technologies: ["React", "Tailwind", "Tilt.js", "Gsap"],
      githubUrl: "https://github.com/paras-gg/orange-glow-mart",
      liveUrl: "https://orange-glow-mart.vercel.app/",
      status: "Completed"
    },
    {
      id: 2,
      title: "fashion collection",
      description: "Temukan koleksi fashion terbaru dengan warna-warna cerah dan hangat yang akan membuat Anda tampil percaya diri.",
      image: "👗",
      technologies: ["React", "Tailwind"],
      githubUrl: "https://github.com/paras-gg/fashion-new",
      liveUrl: "https://fashion-new.vercel.app/",
      status: "Completed"
    },
    {
      id: 3,
      title: "Seafood restaurant",
      description: "Nikmati hidangan seafood segar terbaik dengan cita rasa autentik yang memanjakan lidah Anda. Pengalaman kuliner laut yang tak terlupakan.",
      image: "🦞",
      technologies: ["React", "Tailwind"],
      githubUrl: "https://github.com/paras-gg/sea-food-wena",
      liveUrl: "https://sea-food-wena.vercel.app/?",
      status: "Completed"
    },
    {
      id: 4,
      title: "property investment",
      description: "Solusi lengkap untuk semua kebutuhan properti Anda dengan dukungan tim ahli yang berpengalaman dan teknologi terdepan.",
      image: "🏦",
      technologies: ["React", "Tailwind", "TypeScript"],
      githubUrl: "https://github.com/paras-gg/properti-luxe",
      liveUrl: "https://properti-luxe.vercel.app/",
      status: "Completed"
    },
    {
      id: 5,
      title: "virtual investment",
      description: "Platform simulasi investasi terdepan di Indonesia. Belajar cara berinvestasi saham, kripto, dan reksa dana dengan uang virtual.",
      image: "📈",
      technologies: ["React", "Tailwind", "Vercel"],
      githubUrl: "https://github.com/paras-gg/virtual-invest",
      liveUrl: "https://virtual-invest-virid.vercel.app/",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Japanese restaurant",
      description: "Rasakan harmoni cita rasa autentik Jepang dalam suasana yang elegan dan mewah.",
      image: "🍣",
      technologies: ["React", "Tailwind", "TypeScript", "Vercel"],
      githubUrl: "https://github.com/paras-gg/sakura-zen-web",
      liveUrl: "https://sakura-zen-web.vercel.app/",
      status: "Completed"
    }
  ];

  useEffect(() => {
    document.querySelectorAll(".judul4").forEach((e, i) => {
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          toggleActions: "restart none none none"
        },
        duration: 0.5,
        delay: i === 0 ? 0 : 0.5,
        text: i === 0 ? "projek " : "terbaru",
        ease: "none"
      })
    })
    const box_projek = document.querySelectorAll(".box_projek")
    VanillaTilt.init(box_projek, {
      max: 15,
      speed: 500,
      scale: 1.1,
      glare: true,
      "max-glare": 0.0,
    });
  }, [])
  return (
    <section className="py-20 px-4" id="projects">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 judul4"></span>
            <span className="text-primary judul4"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="zoom-out" data-aos-duration="2000">
            Beberapa proyek yang telah saya kerjakan menggunakan
            teknologi terdepan dan best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (

            <div className="box_projek">
              <Card
                key={project.id}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 shadow-green hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                data-aos={project.id % 2 === 0 ? 'fade-up' : 'fade-down'}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-4">{project.image}</div>
                    <Badge
                      variant={project.status === "Completed" ? "secondary" : "outline"}
                      className={
                        project.status === "Completed"
                          ? "bg-primary/20 text-primary border-primary/30"
                          : "border-accent/30 text-accent"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <a href={project.githubUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.liveUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </a>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/paras-gg?tab=repositories">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-green hover:shadow-glow"
            >
              <Github className="mr-2 h-5 w-5" />
              Lihat Semua Proyek di GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;