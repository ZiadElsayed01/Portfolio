import { Code2, Layers, Palette, GitBranch, Wrench, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux", "Redux Toolkit", "jQuery"]
  },
  {
    icon: Palette,
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Bootstrap", "Sass", "Shadcn UI", "Material UI"]
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "Docker"]
  },
  {
    icon: Wrench,
    title: "Backend & Tools",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Axios"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Team Collaboration", "Problem-Solving", "Communication", "Public Speaking", "Training & Coaching"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="glass p-6 space-y-4 hover:shadow-glow transition-all duration-500 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;