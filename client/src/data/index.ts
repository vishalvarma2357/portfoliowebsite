export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

export const frontendSkills: Skill[] = [
  { name: 'HTML5 & ', percentage: 95, icon: 'html5' },
  { name: 'CSS3', percentage: 90, icon: 'css3' },
  { name: 'JavaScript (ES6+)', percentage: 85, icon: 'javascript' },
  { name: 'React.js', percentage: 75, icon: 'react' },
  { name: 'Responsive Design', percentage: 90, icon: 'css3' },
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', percentage: 50, icon: 'node' },
  { name: 'Express.js', percentage: 55, icon: 'express' },
  { name: 'MongoDB', percentage: 65, icon: 'mongodb' },
  { name: 'RESTful APIs', percentage: 50, icon: 'api' },
];

interface OtherSkill {
  name: string;
  icon?: string;
}

export const otherSkills: OtherSkill[] = [
  { name: 'Git & GitHub', icon: 'git' },
  // { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
  // { name: 'Jest', icon: 'default' },
  // { name: 'Webpack', icon: 'default' },
  // { name: 'Agile/Scrum', icon: 'default' },
  // { name: 'CI/CD', icon: 'default' },
  { name: 'TypeScript', icon: 'typescript' },
  
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  // demoUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Innomatics Research labs Clone',
    description: 'A dynamic educational platform offering courses, mentorship, and career support with an intuitive and user-friendly interface.',
    image: 'https://assets.collegedunia.com/public/image/institute/album_1607522158innomatics-research-labs-kphb-colony-hyderabad-computer-training-institutes-w15wo9wxro.jpg',
    technologies: ['html5', 'css3', 'Javascript'],
    // demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/vishalvarma2357/InnomaticsResearchLabsClone',
  },
  {
    id: 2,
    title: 'Paytm Clone',
    description: 'A digital payment platform with a seamless interface, fast transactions, and multiple payment options for a smooth user experience.',
    image: 'https://cdn-bclnh.nitrocdn.com/HrhbFpIEQgeThoExdTufdJjReiWCKhjs/assets/images/optimized/rev-9a3864c/www.fugenx.com/wp-content/uploads/2018/12/How-Much-Does-it-Cost-to-Develop-an-App-like-Paytm.jpg',
    technologies: ['html5', 'css3', 'javascript'],
    // demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/vishalvarma2357/Paytm-Clone',
  },
  {
    id: 3,
    title: 'Memory Match Game',
    description: 'A fun and interactive memory match game that challenges players to find matching pairs within a time limit.',
    image: 'https://plays.org/screenshots/memory-match-game-screenshot.png',
    technologies: ['html5', 'css3', 'javascript'],
    // demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/vishalvarma2357/MemoryMatchGame',
  },
  // {
  //   id: 3,
  //   title: 'Assign Alert',
  //   description: 'An institute task management app for seamless task allocation, progress tracking, and efficient collaboration.',
  //   image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   technologies: ['html5', 'css3', 'sql', 'php'],
  //   // demoUrl: 'https://example.com',
  //   codeUrl: '',
  // },

 
  // {
  //   id: 5,
  //   title: 'Coffee Cafe',
  //   description: 'A stylish coffee café website featuring a rich menu, warm ambiance, and easy online reservations.',
  //   image: 'https://www.avikalp.com/cdn/shop/products/MWZ3019_wallpaper1.jpg?v=1653192912',
  //   technologies: ['html5', 'css3'],
  //   // demoUrl: 'https://example.com',
  //   codeUrl: 'https://github.com/vishalvarma2357/CoffeeCafe',
  // },
  // {
  //   id: 6,
  //   title: 'Spotify Clone',
  //   description: 'An institute task management app for seamless task allocation, progress tracking, and efficient collaboration.',
  //   image: 'https://plays.org/screenshots/memory-match-game-screenshot.png',
  //   technologies: ['html5', 'css3', 'javascript'],
  //   // demoUrl: 'https://example.com',
  //   codeUrl: 'https://github.com/vishalvarma2357/Spotify_Clone',
  // },
];

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  
  
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: ' Full Stack Developer Intern',
    company: 'Innomatics Research Labs',
    period: 'Jan 2025 - Present',
    description: 'Developing and enhancing web applications using the MERN stack, ensuring responsiveness and optimal performance and Collaborating with cross-functional teams to design, develop, and deploy scalable solutions.',
    
  },
  {
    id: 2,
    position: 'MERN Stack Developer Intern',
    company: 'EY GDS Next Gen Internship',
    period: 'Dec 2024 - Jan 2025',
    description: 'Developed a Digital Payment Wallet (Paytm clone) as a hands-on learning project in web development and Collaborated with mentors to design, develop, and refine solutions into working prototypes.'
   
  },
  {
    id: 3,
    position: 'Frontend Developer Intern',
    company: 'Edunet Foundation in Collab with AICTE ',
    period: 'Jun 2024-Jul 2024',
    description: 'Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript by creating a functional Amazon clone, demonstrating proficiency in frontend development and design.',
    
  },

  {
    id: 4,
    position: 'Data Analytics  Intern',
    company: ' Mira Bhayandar Municipal Corporation (MBMC) ',
    period: 'Feb 2024 - Jun 2024',
    description: 'Analyzed corporate data to identify trends, generate actionable insights, and support data-driven strategies, while enhancing analytical skills through website reporting, detailed analysis, and CSR impact research.',
    
  },
];
