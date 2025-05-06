import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Events } from './components/sections/Events';
import { Team } from './components/sections/Team';
import { LicenseFAQ } from './components/sections/LicenseFAQ';
import { Contact } from './components/sections/Contact';
import { ChessBoardBackground } from './components/ui/ChessBoardBackground';
import './styles/globals.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('light');

  // Handle scroll to change active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <ChessBoardBackground />
      
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <MobileMenu 
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
      />
      
      <main className="relative z-10">
        <Hero id="hero" />
        <About id="about" />
        <Events id="events" />
        <Team id="team" />
        <LicenseFAQ id="license-faq" />
        
        <Contact id="contact" />
      </main>
      
      <Footer theme={theme} />
    </div>
  );
};

export default App;