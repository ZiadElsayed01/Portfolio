import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ziad from "../assets/ZiadEl-Sayed.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center overflow-hidden min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap justify-center items-center z-10"
      >
        {/* Left content */}
        <motion.div
          className="relative space-y-8 text-center md:text-left py-6 px-6 md:px-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-primary text-2xl font-medium tracking-wider">
              Hello <span className="inline-block animate-bounce">👋</span>, I'm
            </p>
            <div className="text-5xl md:text-7xl font-bold">
              <Typewriter
                options={{
                  strings: ["Ziad El-Sayed"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
              Frontend Developer 🖌️💻
            </h2>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="text-2xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            Building responsive, scalable applications with modern web
            technologies. Passionate about creating seamless user experiences
            and solving real-world problems.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-foreground text-primary-foreground hover:text-primary text-lg border hover:border-primary shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary hover:text-primary-foreground hover:bg-primary hover:border-primary text-lg shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start gap-6"
          >
            <a
              title="Github"
              href="https://github.com/ZiadElsayed01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/90 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              title="Linkedin"
              href="https://linkedin.com/in/ziadel-sayed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/90 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              title="Email"
              href="mailto:ziadelsayed046@gmail.com"
              className="text-primary/90 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </motion.div>

          <motion.a
            title="Scroll Down"
            className="absolute cursor-pointer -bottom-5 left-1/2 -translate-x-1/2 animate-bounce"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <ChevronDown className="text-primary" size={32} />
          </motion.a>
        </motion.div>

        {/* Image animation */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={ziad} alt="Ziad El-Sayed" className="w-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
