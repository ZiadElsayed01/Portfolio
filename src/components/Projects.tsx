"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cure",
    description:
      "Modern web application that makes it easy for patients to find doctors across different specialties, book appointments, and manage their healthcare seamlessly.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Context API",
      "Axios",
      "Formik",
      "Yup",
      "JWT",
      "Lucide",
    ],
    github: "https://github.com/ZiadElsayed01/Cure_FE",
    demo: "https://onlinebookingdoctor.netlify.app/get-start",
  },
  {
    title: "SavvyHost Dashboard",
    description:
      "Built a responsive dashboard for SavvyHost to manage websites and client data. Optimized performance up to 90% and SEO with Next.js rendering strategies.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Formik",
      "Yup",
      "JWT",
      "Lucide",
      "Axios",
      "i18n",
      "Context API",
    ],
  },
  {
    title: "MIS Web Application",
    description:
      "Full-stack Management Information System with scalable backend and dynamic frontend featuring responsive, user-friendly interface.",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Context API",
      "Cookies",
      "Axios",
      "Formik",
      "Yup",
    ],
    github: "https://github.com/kofta999/grad-project",
    demo: "https://grad-project-mis.vercel.app/login",
  },
  {
    title: "Fresh Cart",
    description:
      "Full-featured E-Commerce platform with responsive design, modern UI, and complete shopping cart functionality.",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "Formik",
      "Yup",
      "Font-Awesome",
    ],
    github: "https://github.com/ZiadElsayed01/Freshcart",
    demo: "https://fresh-cart-route.vercel.app/login",
  },
  {
    title: "Yummy",
    description:
      "Recipe discovery web application with dynamic recipe exploration, external API integration, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "API", "jQuery"],
    github: "https://github.com/ZiadElsayed01/Yummy",
    demo: "https://ziadelsayed01.github.io/Yummy/",
  },
  {
    title: "Daniels",
    description:
      "A Personal portfolio website using HTML, CSS, JavaScript, and Bootstrap to showcase projects and skills interactively.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/ZiadElsayed01/Daniels",
    demo: "https://ziadelsayed01.github.io/Daniels/",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application fetching data through external API with Bootstrap responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
    github: "https://github.com/ZiadElsayed01/Weather-API",
    demo: "https://ziadelsayed01.github.io/Weather-API/",
  },
  {
    title: "Games Platform",
    description:
      "Gaming information platform providing comprehensive game database using external APIs with user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/ZiadElsayed01/Games-API",
    demo: "https://ziadelsayed01.github.io/Games-API/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Title */}
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text">Projects</h2>
            <div className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 relative space-y-4 hover:shadow-glow transition-all duration-500 h-full">
                  <div className="absolute -top-10 right-5">
                    <p className="text-[140px] font-semibold text-foreground/10">
                      {index + 1}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-primary text-primary hover:border-primary hover:bg-foreground hover:text-background text-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:bg-foreground hover:text-background hover:border-primary hover:scale-105 transition-all"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-background hover:text-primary border hover:border-primary hover:scale-105 transition-all"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
