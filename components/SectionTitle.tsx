
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  dark?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, dark = false }) => {
  return (
    <div className="text-center mb-16 font-ubuntu">
      <h2 className={`text-4xl font-bold relative pb-5 ${dark ? 'text-white' : 'text-gray-800'}`}>
        {title}
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 ${dark ? 'bg-white' : 'bg-gray-800'}`}></div>
        <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 text-xl text-cyan-400 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
          {subtitle}
        </div>
      </h2>
    </div>
  );
};

export default SectionTitle;
