import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "HireJunction",
      description: "Full-stack job portal with user registration, resume uploading, and job search functionality. Achieved 15% improvement in server response time.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      category: "web",
      githubUrl: "https://github.com/GauravDalakoti/HireJunction",
      liveUrl: "https://hirejunction.vercel.app"
    },
    {
      id: 2,
      title: "ResumeXMaker",
      description: "Resume creation tool with AI-powered summary generation and drag-and-drop interface. Reduced user effort by 40% through automated AI summary generator.",
      image: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      category: "web",
      githubUrl: "https://github.com/GauravDalakoti/ResumeXBuilder",
      liveUrl: "https://resume-x-maker.vercel.app"
    },
    {
      id: 3,
      title: "ClothSoffer",
      description: "E-commerce clothing platform with admin dashboard. Enhanced website performance by optimizing API calls, reducing loading time by 20%.",
      image: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      category: "web",
      githubUrl: "https://github.com/GauravDalakoti/ClothSoffer",
      liveUrl: "https://clothsoffer.vercel.app"
    },
    {
      id: 4,
      title: "TruncUrl",
      description: "This is a URL shortener application with an analytics dashboard built using React.js, TailwindCSS, Node.js, Express.js and MongoDB. Users can create shortened links and track their performance, including clicks, locations, and devices",
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      category: "web",
      githubUrl: "https://github.com/GauravDalakoti/TruncUrl",
      liveUrl: "https://truncurl.vercel.app"
    }
  ];

  const categories = ['all', 'web', 'mobile'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Explore my recent projects. Each one represents unique challenges solved with efficient solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;