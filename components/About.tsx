
import React from 'react';
import SectionTitle from '../components/SectionTitle';

interface AboutContent {
  title: string;
  subtitle: string;
  greeting: string;
  role: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  button: string;
}

interface AboutProps {
  content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <img 
              src="https://i.postimg.cc/52nYSQQ9/jandev-Copia.jpg" 
              alt="Jandson Vitorino" 
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-cyan-500"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">{content.greeting} <span className="text-cyan-500">{content.role}</span></h3>
            <div className="space-y-4 text-justify text-gray-600">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
              <p>{content.p3}</p>
              <p>{content.p4}</p>
            </div>
            <a 
              href="https://drive.google.com/file/d/1jB2IYaOGCdgd4PewbURrFdZXQ7V8WAoZ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-cyan-500 text-white text-lg font-semibold px-8 py-3 rounded-md border-2 border-cyan-500 transition-all duration-300 hover:bg-transparent hover:text-cyan-400"
            >
              {content.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
