import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="code text-pink-500">&lt;</span>
            <span>Alex Johnson</span>
            <span className="code text-pink-500">/&gt;</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`py-2 transition-colors ${
                    activeSection === link.id 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`py-2 transition-colors ${
                    activeSection === link.id 
                      ? 'text-primary' 
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center pt-2">
                <span className="text-gray-500 mr-2">Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
