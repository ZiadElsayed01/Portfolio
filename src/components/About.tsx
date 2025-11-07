import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {/* Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            <h2 className="text-5xl font-bold gradient-text">About Me</h2>
            <motion.div
              className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
          </motion.div>

          {/* Description Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-8">
              <motion.p
                className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a passionate Frontend Developer with expertise in
                TypeScript, React, JavaScript (ES6+), React Query, Tailwind CSS,
                Redux, Shadcn, and RESTful APIs. Familiar with Node.js, Express,
                MySQL and MongoDB for Full-stack integration.
              </motion.p>
              <motion.p
                className="text-xl md:text-2xl text-foreground/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Enthusiastic about teaching, mentoring, and contributing to the
                tech community, while staying committed to continuous learning
                and modern technologies. Skilled in building responsive,
                accessible, and scalable applications with strong focus on state
                management, authentication, and performance optimization.
              </motion.p>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ rotate: -20, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-3 rounded-xl bg-primary/10 text-primary"
                >
                  <GraduationCap size={28} />
                </motion.div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-semibold">
                    Bachelor of Engineering – Computer Science
                  </h3>
                  <p className="text-xl text-primary/80 font-medium">
                    Suez Canal University, Ismailia
                  </p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-lg">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>October 2020 – June 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>CGPA: 3.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
