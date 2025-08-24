
import React, { useState, useEffect, useCallback } from 'react';

interface HeroContent {
  greeting: string;
  name: string;
  intro: string;
  typingTexts: string[];
  button: string;
}

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const handleTyping = useCallback(() => {
    const i = loopNum % content.typingTexts.length;
    const fullText = content.typingTexts[i];

    setTypedText(
      isDeleting
        ? fullText.substring(0, typedText.length - 1)
        : fullText.substring(0, typedText.length + 1)
    );

    setTypingSpeed(isDeleting ? 60 : 100);

    if (!isDeleting && typedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [isDeleting, loopNum, typedText, content.typingTexts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, handleTyping, typingSpeed]);
  
  // Reset typing animation when language changes
  useEffect(() => {
    setTypedText('');
    setIsDeleting(false);
    setLoopNum(0);
  }, [content.typingTexts]);


  return (
    <section id="home" className="h-screen flex items-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('assets/background.png')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-white font-ubuntu">
          <p className="text-2xl md:text-3xl">{content.greeting}</p>
          <h1 className="text-5xl md:text-6xl font-bold my-2">{content.name}</h1>
          <div className="text-3xl md:text-4xl" style={{ height: '50px' }}>
            <span>{content.intro} </span>
            <span className="text-cyan-400 font-medium">{typedText}</span>
            <span className="animate-ping text-cyan-400">|</span>
          </div>
          <a href="#contact" className="mt-8 inline-block bg-cyan-500 text-white text-xl font-semibold px-9 py-3 rounded-md border-2 border-cyan-500 transition-all duration-300 hover:bg-transparent hover:text-cyan-400">
            {content.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
