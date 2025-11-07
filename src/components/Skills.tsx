"use client";

import { motion } from "framer-motion";
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
      "jQuery",
      "Axios",
      "i18n",
      "React Query",
      "React Router",
      "Context API",
      "Formik",
      "Yup",
      "Redux",
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
      "Motion.DEV",
      "Lucide",
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 relative bg-linear-to-b from-muted/20 to-background"
    >
      <div className="mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Title Section */}
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text">
              Skills & Technologies
            </h2>
            <div className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I work with
            </p>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-glow transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.05 },
                        },
                      }}
                    >
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          <Badge
                            className="border-primary text-primary bg-background hover:bg-primary hover:text-background transition-all duration-300 text-md"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
