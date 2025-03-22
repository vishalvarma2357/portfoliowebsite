export interface Skill {
  name: string;
  percentage: number;
}

export const frontendSkills: Skill[] = [
  { name: 'React.js', percentage: 95 },
  { name: 'JavaScript (ES6+)', percentage: 90 },
  { name: 'HTML5 & CSS3', percentage: 95 },
  { name: 'Redux', percentage: 85 },
  { name: 'Responsive Design', percentage: 90 },
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', percentage: 90 },
  { name: 'Express.js', percentage: 85 },
  { name: 'MongoDB', percentage: 80 },
  { name: 'RESTful APIs', percentage: 90 },
  { name: 'GraphQL', percentage: 75 },
];

export const otherSkills: string[] = [
  'Git & GitHub',
  'Docker',
  'AWS',
  'Jest',
  'Webpack',
  'Agile/Scrum',
  'TypeScript',
  'CI/CD',
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

// Achievement types for gamification
export type AchievementCategory = 'technical' | 'professional' | 'certification' | 'education' | 'award';
export type AchievementRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
  dateAchieved: string;
  category: AchievementCategory;
  rarity: AchievementRarity;
  points: number; // For gamification points
  unlocked: boolean; // If achievement is public/unlocked
  requiredMessage?: string; // Message to show if achievement is locked
  levelProgress?: number; // Optional progress percentage for multi-level achievements
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'React Master',
    description: 'Completed 10+ complex React projects with advanced state management',
    icon: 'Code',
    dateAchieved: '2022-04-15',
    category: 'technical',
    rarity: 'rare',
    points: 150,
    unlocked: true,
  },
  {
    id: 2,
    title: 'API Architect',
    description: 'Designed and implemented scalable RESTful and GraphQL APIs',
    icon: 'Network',
    dateAchieved: '2021-09-22',
    category: 'technical',
    rarity: 'uncommon',
    points: 100,
    unlocked: true,
  },
  {
    id: 3,
    title: 'Performance Guru',
    description: 'Optimized application performance by 70% through advanced techniques',
    icon: 'Zap',
    dateAchieved: '2023-02-10',
    category: 'technical',
    rarity: 'epic',
    points: 200,
    unlocked: true,
  },
  {
    id: 4,
    title: 'Open Source Contributor',
    description: 'Made significant contributions to open source projects',
    icon: 'Github',
    dateAchieved: '2020-11-05',
    category: 'professional',
    rarity: 'rare',
    points: 150,
    unlocked: true,
  },
  {
    id: 5,
    title: 'AWS Certified Developer',
    description: 'Earned AWS Certified Developer Associate certification',
    icon: 'Cloud',
    dateAchieved: '2022-06-30',
    category: 'certification',
    rarity: 'uncommon',
    points: 100,
    unlocked: true,
  },
  {
    id: 6,
    title: 'Full Stack Virtuoso',
    description: 'Mastered both frontend and backend technologies',
    icon: 'Layers',
    dateAchieved: '2023-01-15',
    category: 'technical',
    rarity: 'epic',
    points: 200,
    unlocked: true,
    levelProgress: 85, // 85% progress to next level
  },
  {
    id: 7,
    title: 'Accessibility Champion',
    description: 'Created fully accessible applications following WCAG guidelines',
    icon: 'Accessibility',
    dateAchieved: '2022-05-12',
    category: 'professional',
    rarity: 'rare',
    points: 150,
    unlocked: true,
  },
  {
    id: 8,
    title: 'Database Maestro',
    description: 'Expertly designed and optimized database schemas and queries',
    icon: 'Database',
    dateAchieved: '2021-12-07',
    category: 'technical',
    rarity: 'uncommon',
    points: 100,
    unlocked: true,
  },
  {
    id: 9,
    title: 'Conference Speaker',
    description: 'Presented at tech conferences sharing knowledge with the community',
    icon: 'Mic',
    dateAchieved: '2023-03-20',
    category: 'professional',
    rarity: 'epic',
    points: 200,
    unlocked: true,
  },
  {
    id: 10,
    title: 'Master Mentor',
    description: 'Mentored 20+ junior developers helping them advance their careers',
    icon: 'GraduationCap',
    dateAchieved: '2022-10-01',
    category: 'professional',
    rarity: 'legendary',
    points: 300,
    unlocked: true,
  },
  {
    id: 11,
    title: 'Million-User App',
    description: 'Developed an application that achieved over one million users',
    icon: 'Users',
    dateAchieved: '2023-07-11',
    category: 'professional',
    rarity: 'legendary',
    points: 300,
    unlocked: false,
    requiredMessage: 'This achievement is yet to be unlocked',
  },
  {
    id: 12,
    title: 'DevOps Pioneer',
    description: 'Established CI/CD pipelines and automated deployment workflows',
    icon: 'GitMerge',
    dateAchieved: '2021-08-15',
    category: 'technical',
    rarity: 'rare',
    points: 150,
    unlocked: true,
  },
];
