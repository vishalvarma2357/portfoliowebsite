import { FaCheckCircle } from 'react-icons/fa';

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function ExperienceItem({
  position,
  company,
  period,
  description,
  achievements,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start">
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 mt-1.5"></div>
      
      {/* Left Side (Date for desktop, empty for mobile) */}
      <div className="hidden md:block w-1/2 pr-12 text-right">
        <span className="text-primary font-bold">{period}</span>
      </div>
      
      {/* Right Content (Experience details) */}
      <div className="md:w-1/2 md:pl-12 ml-8 md:ml-0">
        {/* Mobile Date */}
        <span className="md:hidden text-primary font-bold block mb-2">{period}</span>
        
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">{position}</h3>
          <p className="text-primary font-semibold mb-3">{company}</p>
          <p className="text-gray-500 mb-4">{description}</p>
          <ul className="space-y-2 text-gray-500">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-primary mt-1" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
