import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-grid">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-pink-500 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Alex Johnson
              <span className="block text-primary mt-2">MERN Stack Developer</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-2xl">
              I build exceptional digital experiences with modern web technologies. 
              Specialized in crafting full-stack applications with MongoDB, Express, React, and Node.js.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <FaFilePdf className="text-2xl" />
                <span className="font-medium">Resume</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-full blur opacity-75"></div>
              <div className="relative bg-white rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Alex Johnson profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
