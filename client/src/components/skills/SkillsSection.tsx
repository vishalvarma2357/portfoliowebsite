import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/section-heading';
import SkillBar from '../ui/skill-bar';
import SkillIcon from '../ui/skill-icon';
import { frontendSkills, backendSkills, otherSkills } from '@/data';

export default function SkillsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setAnimateSkills(true);
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="My Skills" title="Technical Expertise" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <h3 className="text-xl font-bold mb-8">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="primary"
                  animate={animateSkills}
                  icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <h3 className="text-xl font-bold mb-8">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="secondary"
                  animate={animateSkills}
                  icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-8 text-center">Tools & Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-200 px-6 py-3 rounded-full flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill.icon && <SkillIcon icon={skill.icon} size={18} />}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
