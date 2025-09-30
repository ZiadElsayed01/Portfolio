import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass p-6 text-center space-y-3 hover:shadow-glow transition-all duration-500 group animate-slide-up">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a 
                  href="mailto:ziadelsayed046@gmail.com"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  ziadelsayed046@gmail.com
                </a>
              </div>
            </Card>

            <Card className="glass p-6 text-center space-y-3 hover:shadow-glow transition-all duration-500 group animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a 
                  href="tel:01226642557"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  01226642557
                </a>
              </div>
            </Card>

            <Card className="glass p-6 text-center space-y-3 hover:shadow-glow transition-all duration-500 group animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Cairo, Egypt
                </p>
              </div>
            </Card>
          </div>

          <Card className="glass p-8 text-center space-y-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <p className="text-lg text-foreground/90">
              Let's connect and discuss how we can work together!
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:ziadelsayed046@gmail.com">
                  <Mail size={20} className="mr-2" />
                  Send Email
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/ZiadElsayed01" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://linkedin.com/in/ziadel-sayed" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <footer className="text-center text-muted-foreground pt-16 pb-8">
        <p>© 2025 Ziad El-Sayed. Built with React and lots of ☕</p>
      </footer>
    </section>
  );
};

export default Contact;