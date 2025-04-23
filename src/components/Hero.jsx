import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 500);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 1s ease, transform 1s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-indigo-100 to-transparent dark:from-indigo-950/30 dark:to-transparent -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
        >
          <span className="block">Hi, I'm </span>
          <span className="block text-indigo-600 dark:text-indigo-400">Gaurav Dalakoti</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
        >
          A passionate developer specializing in full-stack development, creating efficient and user-centered digital solutions.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProjects} 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
          
          <div className="flex justify-center gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/GauravDalakoti" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gaurav-dalakoti-abb00b346" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-gray-700 dark:text-gray-300" />
      </div>
    </section>
  );
};

export default Hero;