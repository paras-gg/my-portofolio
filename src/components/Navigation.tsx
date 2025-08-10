import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import gambar from "../image/gambar.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-md shadow-green border-b border-primary/20'
        : 'bg-transparent'
      }`}
      >
      <div className="container max-w-6xl mx-auto px-4" data-aos="fade-down" data-aos-once="true" >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full">
              <span className="text-primary-foreground font-bold text-lg">
                <img src={gambar} alt="gambar" className="rounded-full" />
              </span>
            </div>
            <span className="font-bold text-xl">Zentro wesite</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#">
              <Button
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-colors border-primary/30"
              >
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-green">
            <div className="flex flex-col space-y-4 p-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-4 shadow-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;