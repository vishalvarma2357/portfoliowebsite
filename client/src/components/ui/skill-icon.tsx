import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiRedux, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiTypescript,
  SiGit,
  SiDocker
} from 'react-icons/si';
import { FaServer, FaCode, FaAws } from 'react-icons/fa';

interface SkillIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export default function SkillIcon({ icon, size = 24, className = '' }: SkillIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    react: <SiReact size={size} className={`text-blue-400 ${className}`} />,
    javascript: <SiJavascript size={size} className={`text-yellow-400 ${className}`} />,
    html5: <SiHtml5 size={size} className={`text-orange-500 ${className}`} />,
    redux: <SiRedux size={size} className={`text-purple-500 ${className}`} />,
    css3: <SiCss3 size={size} className={`text-blue-500 ${className}`} />,
    node: <SiNodedotjs size={size} className={`text-green-500 ${className}`} />,
    express: <SiExpress size={size} className={`text-gray-300 ${className}`} />,
    mongodb: <SiMongodb size={size} className={`text-green-400 ${className}`} />,
    api: <FaServer size={size} className={`text-indigo-400 ${className}`} />,
    graphql: <SiGraphql size={size} className={`text-pink-600 ${className}`} />,
    typescript: <SiTypescript size={size} className={`text-blue-600 ${className}`} />,
    git: <SiGit size={size} className={`text-orange-600 ${className}`} />,
    docker: <SiDocker size={size} className={`text-blue-500 ${className}`} />,
    aws: <FaAws size={size} className={`text-yellow-500 ${className}`} />,
    default: <FaCode size={size} className={`text-gray-400 ${className}`} />
  };

  return (
    <div className="skill-icon transform transition-transform duration-300 hover:scale-125 hover:rotate-12">
      {iconMap[icon] || iconMap.default}
    </div>
  );
}