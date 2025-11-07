import { Code2, Layers, Palette, GitBranch, Wrench, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "jQuery",
      "Axios",
      "i18n",
      "React Query",
      "React Router",
      "Context API",
    ],
  },
  {
    icon: Palette,
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "Shadcn UI",
      "Material UI",
      "Figma",
      "Canva",
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    icon: Wrench,
    title: "Backend & Tools",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Team Collaboration",
      "Problem-Solving",
      "Communication",
      "Public Speaking",
      "Training & Coaching",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 relative bg-linear-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text">
              Skills & Technologies
            </h2>
            <div className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
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
                  className="p-6 hover:shadow-glow transition-all duration-500 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="border-primary text-primary hover:border-primary hover:bg-foreground hover:text-background text-md"
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
