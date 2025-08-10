import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Pyhton", level: 70 },
    { name: "flask", level: 65 },
  ];

  const frameworks = [
    "React", "Vue.js", "Node.js", "Flask", "FastAPI", "Django"
  ];

  const tools = [
    "Github", "VS Code", "Figma", "terminal", "Lovable", "Flaticon", "Vercel", "mySQL"
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Adaptability"
  ];

  useEffect(() => {
    document.querySelectorAll(".judul3").forEach((e, i) => {
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          toggleActions: "restart none none none"
        },
        duration: 0.5,
        delay: i === 0 ? 0 : 0.5,
        text: i === 0 ? "keahlian " : "Saya",
        ease: "none"
      })
    })
  }, [])

  return (
    <section className="py-20 px-4 bg-muted/20" id="skills">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 judul3"></span>
            <span className="text-primary judul3  "></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="zoom-out" data-aos-duration="2000">
            Teknologi dan tools yang saya kuasai untuk mengembangkan
            solusi digital yang berkualitas tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="box rounded-lg">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="fade-right">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="box rounded-lg">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="fade-left">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Frameworks & Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="box rounded-lg">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="fade-down">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="box rounded-lg">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green" data-aos="fade-up">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-primary/30 text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;