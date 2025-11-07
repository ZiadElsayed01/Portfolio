import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-24 pb-16 relative">
        <div className="mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-5xl font-bold gradient-text">Get In Touch</h2>
              <div className="h-1 w-28 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Mail size={28} />
                  </div>
                  <a
                    href="mailto:ziadelsayed046@gmail.com"
                    className="text-primary hover:text-primary transition-colors text-xl"
                  >
                    ziadelsayed046@gmail.com
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Phone size={28} />
                  </div>
                  <a
                    href="tel:01226642557"
                    className="text-primary hover:text-primary transition-colors text-xl"
                  >
                    01226642557
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={28} />
                  </div>
                  <p className="text-primary text-xl">Cairo, Egypt</p>
                </div>
              </Card>
            </div>

            <Card className="p-8 text-center">
              <p className="text-xl text-foreground/80">
                Let's connect and discuss how we can work together!
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:scale-105"
                  asChild
                >
                  <a href="mailto:ziadelsayed046@gmail.com">
                    <Mail size={20} />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary hover:scale-105"
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary hover:scale-105"
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
              </div>
            </Card>
          </div>
        </div>
      </section>
      <footer className="text-center bg-primary text-background py-4">
        <p>© 2025 Ziad El-Sayed. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
