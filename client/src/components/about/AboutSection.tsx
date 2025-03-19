import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaMountain, FaChess } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import SectionHeading from '../ui/section-heading';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="About Me" title="My Background Story" />

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
              With over 5 years of experience in web development, I specialize in creating responsive and 
              dynamic applications using the MERN stack. My journey in programming began during my Computer 
              Science studies at MIT, where I developed a strong foundation in algorithms and data structures.
            </p>
            
            <p className="text-gray-500 mb-6">
              I've worked with startups and established companies, helping them build scalable web solutions 
              that solve real business problems. My approach combines technical expertise with a keen eye for 
              user experience, ensuring that the applications I build are not only functional but also intuitive 
              and enjoyable to use.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3">Education</h4>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-start gap-2">
                    <FaGraduationCap className="mt-1 text-primary" />
                    <span>MSc in Computer Science, MIT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaGraduationCap className="mt-1 text-primary" />
                    <span>BSc in Software Engineering, Stanford</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Interests</h4>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-start gap-2">
                    <FaBook className="mt-1 text-primary" />
                    <span>Open Source Contributing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaMountain className="mt-1 text-primary" />
                    <span>Hiking & Photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaChess className="mt-1 text-primary" />
                    <span>Chess & Strategy Games</span>
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
