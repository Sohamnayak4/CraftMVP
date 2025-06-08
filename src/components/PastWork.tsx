import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  completedIn: number;
  link: string;
}

export const PastWork = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "FocusTube",
      category: "Landing Page",
      imageUrl: "/Screenshot 2025-05-23 175501.png",
      description: "A landing page for a YouTube channel that helps people focus and get things done.",
      link: "https://focustube.sohamnayak.tech/",
      completedIn: 12,
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="work" className="py-20 bg-gray-900 relative">
      {/* Background elements */}
      <div className="absolute left-0 bottom-1/3 w-72 h-72 bg-pink-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-gray-300">
            Browse through our work to see if we can help you build your next MVP.
          </p>
        </div>
        
        {/* Category tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  {/* <span className="text-sm text-purple-400">
                    Delivered in {project.completedIn} days
                  </span> */}
                  
                  <button onClick={() => window.open(project.link, '_blank')} className="group-hover:translate-x-1 transition-transform text-gray-300 hover:text-white">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};