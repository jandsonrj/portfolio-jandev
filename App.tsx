
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Chatbot from './components/Chatbot';
import { content } from './i18n';

type Language = 'pt' | 'en';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  const currentContent = content[language];
  
  // Create a stringified version of the content for the chatbot's knowledge base
  const knowledgeBase = JSON.stringify(currentContent, null, 2);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header 
        content={currentContent.header}
        language={language}
        onLanguageToggle={handleLanguageToggle}
      />
      <main>
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Services content={currentContent.services} />
        <Skills content={currentContent.skills} />
        <Projects content={currentContent.projects} />
        <Contact content={currentContent.contact} language={language} />
      </main>
      <Footer content={currentContent.footer} />
      <ScrollToTopButton />
      <Chatbot 
        knowledgeBase={knowledgeBase}
        language={language}
        content={currentContent.chatbot} 
      />
    </div>
  );
};

export default App;