import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Frontend Developer",
    company: "SavvyHost",
    period: "Current",
    type: "Full-time",
    achievements: [
      "Optimized websites using Next.js rendering strategies (SSR, CSR, ISR) to improve performance, SEO, and user experience",
      "Built and customized interactive dashboards for efficient data visualization and content management",
      "Enhanced usability for clients and internal teams through intuitive interface design"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Huma-Volve",
    period: "September 2025 – October 2025",
    type: "Training",
    achievements: [
      "Developed responsive web applications using React.js, TypeScript, and Tailwind CSS",
      "Integrated RESTful APIs and implemented reusable UI components",
      "Enhanced user experience and performance through clean, optimized code"
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Route Academy",
    period: "March 2024 – April 2025",
    type: "Internship",
    achievements: [
      "Mastered core full stack technologies including Node.js, Express.js, MongoDB, React, Next.js",
      "Built and integrated RESTful APIs with frontend applications for seamless data flow",
      "Developed responsive, scalable web apps with React and Bootstrap",
      "Collaborated with agile teams using Git for version control"
    ]
  },
  {
    title: "React.js Front-End Developer Intern",
    company: "Digital Egyptian Pioneer (DEPI)",
    period: "April 2024 – October 2025",
    type: "Internship",
    achievements: [
      "Developed 10+ reusable, modular React components, improving maintainability and reducing code duplication by 30%",
      "Managed state effectively using React Hooks and Context API, improving user experience",
      "Integrated RESTful APIs with Axios to fetch and display dynamic data, boosting API response times by 15%",
      "Enhanced web application performance by 20% through code optimization"
    ]
  },
  {
    title: "Front-End Lead",
    company: "Google Developer Student Club (GDSC)",
    period: "February 2023 – May 2023",
    type: "Leadership",
    achievements: [
      "Directed a team of 5 students in planning and executing front-end projects",
      "Conducted 4+ workshops on HTML, CSS, JavaScript, and React.js",
      "Enhanced technical ability of peers through mentoring and training"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="glass p-6 hover:shadow-glow transition-all duration-500 animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary self-start group-hover:bg-primary/20 transition-colors">
                    <Briefcase size={28} />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-secondary font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-foreground/80">
                          <span className="text-secondary mt-1.5">▸</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;