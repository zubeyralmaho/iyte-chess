import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { ChessPiece } from '../ui/ChessPiece';

export const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll to add shadow and background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'events', label: 'Etkinlikler' },
    { id: 'team', label: 'Takımımız' },
    { id: 'license-info', label: 'SSS' },
    { id: 'contact', label: 'İletişim' }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled ? 'py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'py-5 bg-transparent'}
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
  {/* Logo ve yazı yan yana */}
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 flex-shrink-0"> {/* Logo kapsayıcısı */}
      <img
        src="/favicon.ico"
        alt="İYTE SATRANÇ"
        className="w-full h-full object-contain"
      />
    </div>
    <h1 className="text-xl font-bold tracking-tight">
      İYTE<span className="text-xs align-top ml-0.5">•</span>
      <span className="font-light ml-2">Satranç</span>
    </h1>
  </div>
 
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`relative px-4 py-2 mx-1 rounded-full transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10
                ${activeSection === item.id ? 'font-medium' : 'font-normal'}
                group overflow-hidden`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-black dark:bg-white rounded-full"></span>
              )}
            </a>
          ))}
          
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          
          {/* Theme toggle */}
          <Button 
            variant="icon"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Dark mode' : 'Light mode'}
            className="ml-2"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-gray-700" />
            ) : (
              <Sun size={18} className="text-gray-200" />
            )}
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="icon" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};