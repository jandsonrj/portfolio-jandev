
import React, { useRef, useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import type { Project } from '../types';

interface ProjectsContent {
  title: string;
  subtitle: string;
  list: Project[];
}

interface ProjectsProps {
  content: ProjectsContent;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex-shrink-0 w-80 bg-gray-800 rounded-lg p-6 text-center group hover:bg-cyan-500 transition-all duration-300 ease-in-out snap-center">
    <div className="transform group-hover:scale-105 transition-transform duration-300">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img 
          src={project.imgSrc} 
          alt={project.title}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-cyan-400 group-hover:border-white transition-colors duration-300"
        />
      </a>
      <h3 className="text-2xl font-bold my-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white group-hover:text-white transition-colors duration-300">
          {project.title}
        </a>
      </h3>
      <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">{project.description}</p>
    </div>
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const scrollAmount = 320 + 32;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      if (intervalRef.current !== null) return;
      intervalRef.current = window.setInterval(scrollNext, 3000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    
    if (!isInteracting) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    
    return () => stopAutoScroll();
  }, [isInteracting]);

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.title} subtitle={content.subtitle} dark />
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          {content.list.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
