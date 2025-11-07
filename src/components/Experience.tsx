import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Variants } from "motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "SavvyHost",
    period: "July 2025 – October 2025",
    type: "Part-time",
    achievements: [
      "Optimized websites using Next.js rendering strategies (SSR, CSR, ISR) to improve performance, SEO, and user experience",
      "Built and customized interactive dashboards for efficient data visualization and content management",
      "Enhanced usability for clients and internal teams through intuitive interface design",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Huma-Volve",
    period: "September 2025 – October 2025",
    type: "Training",
    achievements: [
      "Developed responsive web applications using React.js, TypeScript, and Tailwind CSS",
      "Integrated RESTful APIs and implemented reusable UI components",
      "Enhanced user experience and performance through clean, optimized code",
    ],
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
      "Collaborated with agile teams using Git for version control",
    ],
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
      "Enhanced web application performance by 20% through code optimization",
    ],
  },
  {
    title: "Front-End Lead",
    company: "Google Developer Student Club (GDSC)",
    period: "February 2023 – May 2023",
    type: "Leadership",
    achievements: [
      "Directed a team of 5 students in planning and executing front-end projects",
      "Conducted 4+ workshops on HTML, CSS, JavaScript, and React.js",
      "Enhanced technical ability of peers through mentoring and training",
    ],
  },
];

const Experience = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 relative bg-linear-to-b from-background to-muted/20"
    >
      <div className="mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center space-y-4">
            <h2 className="text-5xl font-bold linear-text">Experience</h2>
            <motion.div
              className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
          </motion.div>

          {/* Experience Cards */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="p-8 hover:shadow-glow hover:scale-[1.02] transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div
                      initial={{ rotate: -20, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-3 rounded-xl bg-primary/10 text-primary self-start"
                    >
                      <Briefcase size={28} />
                    </motion.div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="text-2xl font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-2xl text-primary/80">
                              {exp.company}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-primary text-secondary text-xl rounded-md">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xl">
                          <Calendar size={20} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + i * 0.1,
                            }}
                            className="flex gap-3 text-foreground/80"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span className="text-xl leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
