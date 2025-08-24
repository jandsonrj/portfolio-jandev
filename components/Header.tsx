
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../components/Icons';

interface HeaderContent {
  navLinks: { href: string; label: string }[];
  langButton: string;
}

interface HeaderProps {
  content: HeaderContent;
  language: 'pt' | 'en';
  onLanguageToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ content, language, onLanguageToggle }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? 'bg-gray-900/80 backdrop-blur-sm py-4 shadow-lg' : 'py-7'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="logo text-3xl font-bold">
          <a href="#home">
            JAN<span className="text-cyan-400">Dev/&gt;</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-lg font-medium transition-colors duration-300 hover:text-cyan-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={onLanguageToggle}
            className="ml-4 px-3 py-1 border-2 border-cyan-400 text-cyan-400 rounded-md text-sm font-bold hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
          >
            {content.langButton}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm`}>
        <ul className="flex flex-col items-center py-8 space-y-6">
          {content.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick} className="text-2xl font-medium hover:text-cyan-400 transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button 
              onClick={() => { onLanguageToggle(); handleLinkClick(); }}
              className="mt-4 px-4 py-2 border-2 border-cyan-400 text-cyan-400 rounded-md text-lg font-bold hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
            >
              {content.langButton}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
