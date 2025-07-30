import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL/NoSQL", level: 70 },
    { name: "Docker", level: 65 },
  ];

  const frameworks = [
    "React", "Next.js", "Vue.js", "Express.js", "FastAPI", "Django"
  ];

  const tools = [
    "Git", "VS Code", "Figma", "Postman", "Firebase", "AWS", "Vercel", "MongoDB"
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration", 
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Adaptability"
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="skills">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Keahlian <span className="text-primary">Saya</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk mengembangkan 
            solusi digital yang berkualitas tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
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

          {/* Soft Skills */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
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

        {/* Frameworks & Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
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

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-green">
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
    </section>
  );
};

export default Skills;