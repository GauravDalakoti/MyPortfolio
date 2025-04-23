import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-indigo-400">Portfolio</span>
            </h2>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 flex items-center justify-center gap-2 border border-gray-700 hover:border-indigo-500 rounded-lg text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Back to Top
              <ArrowUp size={16} />
            </button>

            <div className="flex space-x-4">
              <a
                href="https://github.com/GauravDalakoti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-indigo-600/20 rounded-full transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-dalakoti-abb00b346"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-indigo-600/20 rounded-full transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Gaurav Dalakoti. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
