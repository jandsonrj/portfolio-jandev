
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import type { Skill } from '../types';

interface SkillsContent {
  title: string;
  subtitle: string;
  heading: string;
  p1: string;
  button: string;
  list: Skill[];
}

interface SkillsProps {
  content: SkillsContent;
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  return (
    <section id="skills" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{content.heading}</h3>
            <p className="text-justify text-gray-600">
              {content.p1}
            </p>
            <a href="#services" className="inline-block bg-cyan-500 text-white text-lg font-semibold px-6 py-2 rounded-md border-2 border-cyan-500 transition-all duration-300 hover:bg-transparent hover:text-cyan-400">
              {content.button}
            </a>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            {content.list.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1 font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-cyan-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
