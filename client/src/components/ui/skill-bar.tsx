import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: 'primary' | 'secondary';
  animate: boolean;
}

export default function SkillBar({ name, percentage, color, animate }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [animate, percentage]);
  
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${color === 'primary' ? 'bg-primary' : 'bg-pink-500'} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
