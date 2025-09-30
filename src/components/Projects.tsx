import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SavvyHost Dashboard",
    description: "Built a responsive dashboard for SavvyHost to manage websites and client data. Optimized performance up to 90% and SEO with Next.js rendering strategies.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true
  },
  {
    title: "MIS Web Application",
    description: "Full-stack Management Information System with scalable backend and dynamic frontend featuring responsive, user-friendly interface.",
    tech: ["Next.js", "React", "Node.js", "TypeScript"],
    github: "https://github.com/kofta999/grad-project",
    demo: "https://grad-project-3nle0xg1t-kofta999s-projects.vercel.app/",
    featured: true
  },
  {
    title: "Fresh Cart",
    description: "Full-featured E-Commerce platform with responsive design, modern UI, and complete shopping cart functionality.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/ZiadElsayed01/Freshcart",
    demo: "https://fresh-cart-route.vercel.app/login",
    featured: true
  },
  {
    title: "Yummy",
    description: "Recipe discovery web application with dynamic recipe exploration, external API integration, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "API"],
    github: "https://github.com/ZiadElsayed01/Yummy",
    demo: "https://ziadelsayed01.github.io/Yummy/"
  },
  {
    title: "Weather App",
    description: "Real-time weather application fetching data through external API with Bootstrap responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
    github: "https://github.com/ZiadElsayed01/Weather-API",
    demo: "https://ziadelsayed01.github.io/Weather-API/"
  },
  {
    title: "Games Platform",
    description: "Gaming information platform providing comprehensive game database using external APIs with user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/ZiadElsayed01/Games-API",
    demo: "https://ziadelsayed01.github.io/Games-API/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`glass p-6 space-y-4 hover:shadow-glow transition-all duration-500 group animate-slide-up ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-accent/20 text-accent border-accent/30">Featured</Badge>
                    )}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10"
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
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary group-hover:scale-105 transition-all"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 group-hover:scale-105 transition-all"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;