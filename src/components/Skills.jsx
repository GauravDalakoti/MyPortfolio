import React, { useEffect, useRef } from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bars = document.querySelectorAll('.skill-progress');
          bars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = `${bar.dataset.level}%`;
            }, index * 100);
          });
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express.js', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'MySQL', level: 70, category: 'backend' },
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'Redux', level: 75, category: 'tools' },
    { name: 'Java', level: 70, category: 'tools' },
    { name: 'Python', level: 65, category: 'tools' }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels in various technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2">
                <span className="text-sm">01</span>
              </span>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {skills
                .filter(skill => skill.category === 'frontend')
                .map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))
              }
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2">
                <span className="text-sm">02</span>
              </span>
              Backend Development
            </h3>
            <div className="space-y-6">
              {skills
                .filter(skill => skill.category === 'backend')
                .map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))
              }
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-2">
                <span className="text-sm">03</span>
              </span>
              Additional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {skills
                .filter(skill => skill.category === 'tools')
                .map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;