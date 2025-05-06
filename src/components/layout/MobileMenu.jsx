import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ChessPiece } from '../ui/ChessPiece';

export const MobileMenu = ({ isOpen, setIsOpen, activeSection, setActiveSection, theme }) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Ana Sayfa', icon: 'king' },
    { id: 'about', label: 'Hakkımızda', icon: 'queen' },
    { id: 'events', label: 'Etkinlikler', icon: 'rook' },
    { id: 'team', label: 'Takımımız', icon: 'bishop' },
    { id: 'achievements', label: 'Başarılarımız', icon: 'knight' },
    { id: 'contact', label: 'İletişim', icon: 'pawn' }
  ];

  // Handle navigation item click
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setIsOpen(false);
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
        setActiveSection(id);
      }, 300);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Slide-in menu */}
      <div 
        className={`fixed top-0 bottom-0 right-0 w-72 bg-white dark:bg-gray-900 z-50 shadow-xl 
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
              <ChessPiece piece="knight" size={20} className="text-white dark:text-black" />
            </div>
            <span className="font-medium">İYTE Satranç</span>
          </div>
          
          <Button 
            variant="icon" 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <X size={20} />
          </Button>
        </div>
        
        {/* Menu items */}
        <nav className="p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors
                  ${activeSection === item.id 
                    ? 'bg-gray-100 dark:bg-gray-800 font-medium' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                    <ChessPiece piece={item.icon} size={16} className="text-gray-700 dark:text-gray-300" />
                  </div>
                  <span>{item.label}</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </nav>
        
        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-800">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} İYTE Satranç Topluluğu
          </div>
        </div>
      </div>
    </>
  );
};