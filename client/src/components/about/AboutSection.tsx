import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaMountain, FaChess } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import SectionHeading from '../ui/section-heading';

export default function AboutSection() {
  return (<section id="about" className="pt-8 py-20 bg-gray-50 -mt-10"> {/* Reduced top padding */}

      <div className="container mx-auto px-6">
        <SectionHeading subtitle="" title="About Me" />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Alex coding" 
                className="w-full h-auto" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">MERN Stack Developer with a passion for building exceptional web applications</h3>
            
            <p className="text-gray-500 mb-4">
            Hi, I'm Vishal Varma, a passionate MERN Stack Developer  with hands-on experience in building dynamic web applications. 
            With expertise in MongoDB, Express.js, React, and Node.js, I craft seamless full-stack solutions that prioritize performance, maintainability, and user experience.

            </p>
            
            <p className="text-gray-500 mb-6">
            My approach to development follows clean code principles and a problem-solving mindset, ensuring efficient and scalable solutions.
            Beyond coding, I continuously explore new technologies, participate in coding challenges, and contribute to open-source projects to stay updated with the latest industry trends.
            </p>
            <p className="text-gray-500 mb-6">
            When I'm not coding, I enjoy exploring new technologies, working on personal projects, and enhancing my skills through certifications.
             I'm always open to collaborations, so feel free to reach out and contact!
            </p>
            


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3">Education</h4>
                <ul className="space-y-2 text-gray-500">
                 
                  <li className="flex items-start gap-2">
                    <FaGraduationCap className="mt-1 text-primary" />
                    <span>BE in Computer Engineering, University of Mumbai</span>
                  </li>
                </ul>
              </div>
              
            
            </div>
            
            <Button 
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
