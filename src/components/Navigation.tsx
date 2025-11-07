import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-md z-50"
    >
      <nav
        className={`sticky bg-background top-0 left-0 p-4 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg py-5 border-b border-primary" : ""
        }`}
      >
        <div className="mx-auto md:px-16 px-6">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-4xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              ZE.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/90 transition-all hover:text-foreground font-medium text-xl hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 space-y-2 rounded-lg">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-foreground/90 hover:text-foreground transition-all font-medium py-2 text-xl hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </motion.nav>
  );
};

export default Navigation;
