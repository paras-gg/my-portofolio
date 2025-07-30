import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang komprehensif.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur real-time collaboration, notifikasi, dan analytics dashboard.",
      image: "📋",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Dashboard analitik cuaca dengan visualisasi data interaktif dan prediksi menggunakan machine learning.",
      image: "🌤️",
      technologies: ["React", "Python", "FastAPI", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Aplikasi mobile banking dengan fitur transfer, pembayaran tagihan, dan keamanan biometrik.",
      image: "🏦",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan tracking progress siswa.",
      image: "🎓",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Tool analitik media sosial untuk melacak engagement, sentimen analysis, dan performance metrics.",
      image: "📊",
      technologies: ["Django", "React", "D3.js", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proyek <span className="text-primary">Terbaru</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beberapa proyek yang telah saya kerjakan menggunakan 
            teknologi terdepan dan best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group bg-card/50 backdrop-blur-sm border-primary/20 shadow-green hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
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
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-green hover:shadow-glow"
          >
            <Github className="mr-2 h-5 w-5" />
            Lihat Semua Proyek di GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;