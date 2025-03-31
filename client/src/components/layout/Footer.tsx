import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        
        {/* Centered Name and Title */}
        <div className="mb-6">
          <a href="#home" className="text-2xl font-bold flex justify-center items-center gap-2">
            <span className="code text-pink-500">&lt;</span>
            <span>Vishal Varma</span>
            <span className="code text-pink-500">/&gt;</span>
          </a>
          <p className="text-gray-400 mt-2">MERN Stack Developer</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a 
            href="https://github.com/vishalvarma2357" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/vishal-varma-497bb1285/" 
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

        {/* Copyright Text */}
        <div className="border-t border-gray-800 pt-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Vishal Varma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
