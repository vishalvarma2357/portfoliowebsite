import { motion } from 'framer-motion';
import SectionHeading from '../ui/section-heading';
import ProjectCard from '../ui/project-card';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="My Work" title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-slate-900 text-white hover:bg-slate-800"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <FaGithub className="mr-2 h-5 w-5" />
            <span>View More on GitHub</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
