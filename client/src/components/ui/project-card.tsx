import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Project } from '@/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card rounded-xl overflow-hidden bg-white shadow-lg transition-transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-primary/80 flex flex-col justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-white text-xl font-bold mb-3">{project.title}</h4>
          <p className="text-white text-center mb-4">{project.description}</p>
          <div className="flex space-x-3">
            <Button size="sm" variant="secondary" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800" asChild>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-500 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <FaExternalLinkAlt className="inline mr-1" /> Live Site
          </a>
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <FaGithub className="inline mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
