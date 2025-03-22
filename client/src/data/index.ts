export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

export const frontendSkills: Skill[] = [
  { name: 'React.js', percentage: 95, icon: 'react' },
  { name: 'JavaScript (ES6+)', percentage: 90, icon: 'javascript' },
  { name: 'HTML5 & CSS3', percentage: 95, icon: 'html5' },
  { name: 'Redux', percentage: 85, icon: 'redux' },
  { name: 'Responsive Design', percentage: 90, icon: 'css3' },
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', percentage: 90, icon: 'node' },
  { name: 'Express.js', percentage: 85, icon: 'express' },
  { name: 'MongoDB', percentage: 80, icon: 'mongodb' },
  { name: 'RESTful APIs', percentage: 90, icon: 'api' },
  { name: 'GraphQL', percentage: 75, icon: 'graphql' },
];

interface OtherSkill {
  name: string;
  icon?: string;
}

export const otherSkills: OtherSkill[] = [
  { name: 'Git & GitHub', icon: 'git' },
  { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Jest', icon: 'default' },
  { name: 'Webpack', icon: 'default' },
  { name: 'Agile/Scrum', icon: 'default' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'CI/CD', icon: 'default' },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with payment processing and inventory management.',
    image: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Express', 'Socket.io', 'Redux'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A custom blog engine with markdown support and content management.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
];

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    period: '2020 - Present',
    description: 'Led the development of enterprise-level web applications, mentored junior developers, and implemented CI/CD pipelines to improve deployment efficiency.',
    achievements: [
      'Led a team of 5 developers to deliver a customer portal with 99.9% uptime',
      'Reduced API response time by 40% through code optimization',
      'Implemented automated testing that caught 87% of bugs before production',
    ],
  },
  {
    id: 2,
    position: 'MERN Stack Developer',
    company: 'Webcraft Inc.',
    period: '2018 - 2020',
    description: 'Developed and maintained web applications for clients across various industries, focusing on responsive design and performance optimization.',
    achievements: [
      'Built an e-commerce platform that increased client\'s sales by 35%',
      'Integrated payment gateways and shipping APIs for seamless checkout',
      'Optimized website loading time from 4.2s to 1.8s',
    ],
  },
  {
    id: 3,
    position: 'Frontend Developer',
    company: 'Digital Minds Agency',
    period: '2016 - 2018',
    description: 'Collaborated with designers to implement responsive, cross-browser compatible websites, ensuring high-quality user experiences across all devices.',
    achievements: [
      'Created interactive UI components used across multiple client projects',
      'Developed responsive layouts that improved mobile engagement by 22%',
      'Implemented A/B testing that led to 15% higher conversion rates',
    ],
  },
];
