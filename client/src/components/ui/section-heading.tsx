import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  light?: boolean;
}

export default function SectionHeading({ subtitle, title, light = false }: SectionHeadingProps) {
  return (
    <motion.div 
      className="flex flex-col items-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-sm font-bold text-primary tracking-wider uppercase">
        {subtitle}
      </span>
      <h2 className={`text-3xl lg:text-4xl font-bold mt-2 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      <div className="h-1 w-20 bg-pink-500 mt-4 rounded-full"></div>
    </motion.div>
  );
}
