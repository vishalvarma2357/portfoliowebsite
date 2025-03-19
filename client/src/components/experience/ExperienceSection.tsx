import { motion } from 'framer-motion';
import SectionHeading from '../ui/section-heading';
import ExperienceItem from '../ui/experience-item';
import { experiences } from '@/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Career Path" title="Work Experience" />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-primary/20 transform md:translate-x-px"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative ${index !== experiences.length - 1 ? 'mb-16' : ''}`}
            >
              <ExperienceItem 
                position={experience.position}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                achievements={experience.achievements}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
