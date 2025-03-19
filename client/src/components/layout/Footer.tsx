import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFilePdf } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold flex items-center gap-2">
              <span className="code text-pink-500">&lt;</span>
              <span>Alex Johnson</span>
              <span className="code text-pink-500">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2">MERN Stack Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
            
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaFilePdf />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
