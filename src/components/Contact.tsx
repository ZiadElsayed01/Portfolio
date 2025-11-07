"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Typewriter  from "typewriter-effect";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-24 pb-16 relative">
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
              <h2 className="text-5xl font-bold gradient-text">Get In Touch</h2>
              <div className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  text: "ziadelsayed046@gmail.com",
                  href: "mailto:ziadelsayed046@gmail.com",
                },
                { icon: Phone, text: "01226642557", href: "tel:01226642557" },
                { icon: MapPin, text: "Cairo, Egypt" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center hover:shadow-glow transition-all duration-500">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="p-2.5 rounded-lg bg-primary/10 text-primary"
                        >
                          <Icon size={28} />
                        </motion.div>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-primary hover:text-primary transition-colors text-xl"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-primary text-xl">{item.text}</p>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Call to Action Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center">
                <p className="text-xl text-foreground/80">
                  Let's connect and discuss how we can work together!
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button size="lg" className="bg-primary" asChild>
                      <a href="mailto:ziadelsayed046@gmail.com">
                        <Mail size={20} />
                        Send Email
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary"
                      asChild
                    >
                      <a
                        href="https://github.com/ZiadElsayed01"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                        GitHub
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary"
                      asChild
                    >
                      <a
                        href="https://linkedin.com/in/ziadel-sayed"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                        LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center bg-primary text-background py-4">
        <Typewriter
          options={{
            strings: [
              `© ${new Date().getFullYear()} Ziad El-Sayed. All rights reserved.`,
            ],
            autoStart: true,
            loop: true,
            cursor: "|",
            cursorClassName: "typewriter-cursor",
          }}
        />
      </footer>
    </>
  );
};

export default Contact;
