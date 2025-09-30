import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-5xl font-bold gradient-text">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <Card className="glass p-8 space-y-6 animate-slide-up">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate Frontend Developer with expertise in TypeScript, React, JavaScript (ES6+), 
              Tailwind CSS, Redux, and RESTful APIs. Familiar with Node.js, Express, MySQL and MongoDB 
              for full-stack integration.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Enthusiastic about teaching, mentoring, and contributing to the tech community, while staying 
              committed to continuous learning and modern technologies. Skilled in building responsive, 
              accessible, and scalable applications with strong focus on state management, authentication, 
              and performance optimization.
            </p>
          </Card>

          <Card className="glass p-8 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-semibold">Bachelor of Engineering – Computer Science</h3>
                <p className="text-lg text-secondary font-medium">Suez Canal University, Ismailia</p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
};

export default About;