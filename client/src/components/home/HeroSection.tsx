import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-grid">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Left Section (Text) */}
          <motion.div 
            className="lg:w-3/5 pl-8 md:pl-16" // <-- Added padding to move text right
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-pink-500 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vishal Varma
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
          </motion.div>

          {/* Right Section (Profile Image) */}
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
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHu0KgvQHZVXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726945410545?e=1748476800&v=beta&t=3xsHPqlUK3AWD2kU8x9-H2yN-D5hIP4eyaoDkgrsQ8A"
                  alt="Vishal Varma profile"
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
