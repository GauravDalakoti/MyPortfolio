import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experiences, and what drives me as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm a passionate developer with a strong foundation in web technologies. My journey in tech began during my college years when I built my first website. Since then, I've been captivated by the ever-evolving landscape of web development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in creating responsive, user-centered applications that solve real-world problems. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Uttarkhand, India</span>
              </div>
             
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-8 border-indigo-50 dark:border-indigo-900/30 shadow-lg">
                <img 
                  src={profile}
                  alt="Your Name" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <div className="bg-indigo-600 text-white p-3 rounded-full">
                  <Briefcase size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Experience & Education</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
                <Briefcase className="mr-2" size={20} />
                Work Experience
              </h4>
              
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 dark:border-indigo-400 pl-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Backend Developer</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Guru Infotech. | jan 2025 to march 2025</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Assisting in backend development for enterprise applications, supporting API integration, database management, and learning best practices under senior developer guidance.
                  </p>
                </div>
                
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
                <GraduationCap className="mr-2" size={20} />
                Education
              </h4>
              
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 dark:border-indigo-400 pl-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Bachelor's of Computer Application</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Graphic Era Hill University Bhimtal | 2022 - 2025</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Focused on Human-Computer Interaction, Web Development, and modern software technologies..
                  </p>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;