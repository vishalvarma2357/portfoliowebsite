import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ContactSection from '@/components/contact/ContactSection';
import useScrollSpy from '@/hooks/use-scroll-spy';

export default function Home() {
  const activeSection = useScrollSpy();

  // Set document title
  useEffect(() => {
    document.title = 'Alex Johnson | MERN Stack Developer';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
