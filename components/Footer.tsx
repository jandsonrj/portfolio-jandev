
import React from 'react';
import { LinkedInIcon, GithubIcon } from '../components/Icons';

interface FooterContent {
  developedBy: string;
  author: string;
  rights: string;
}

interface FooterProps {
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>
          {content.developedBy} <a href="#" className="text-cyan-400 hover:underline">{content.author}</a> {content.rights}
        </span>
        <div className="flex items-center space-x-4">
          <a href="http://www.linkedin.com/in/jandsonrj/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href="https://github.com/jandsonrj" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
