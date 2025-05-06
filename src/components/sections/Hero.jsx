import React, { useEffect, useRef } from 'react';
import { ChevronDown, Calendar, Users, Award, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { ChessBoard } from '../ui/ChessBoard';
import { useChessAnimation } from '../../hooks/useChessAnimation';

export const Hero = ({ id }) => {
  const boardRef = useRef(null);
  const { startAnimation, getGameInfo } = useChessAnimation(boardRef);
  
  useEffect(() => {
    // Sayfa yüklendiğinde animasyonu başlat
    const timer = setTimeout(() => {
      startAnimation();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [startAnimation]);

  // Satranç oyunu bilgisi
  const gameInfo = getGameInfo();

  // About sekmesine kaydır
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center pt-20 pb-10">
        
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              İYTE Satranç Topluluğu
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Satrançta <br />
              <span className="relative">
                <span className="relative z-10">strateji</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gray-200 dark:bg-gray-700 -z-10 transform -rotate-1"></span>
              </span>{" "}
              ve{" "}
              <span className="relative">
                <span className="relative z-10">tutku</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gray-200 dark:bg-gray-700 -z-10 transform rotate-1"></span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              İzmir Yüksek Teknoloji Enstitüsü'nün satranç tutkunlarını bir araya getiren, 
              eğitimden turnuvalara satrançla ilgili her alanda aktif topluluğu.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                <Button size="lg" onClick={scrollToAbout}>
                    Keşfet
                </Button>
                <a 
                    href="https://chat.whatsapp.com/GXbgIS8Ot3zEBeNGfwjjtQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Button size="lg" variant="outline">
                    Bize Katıl
                    </Button>
                </a>
            </div>

            
            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              
              
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-3">
                  <Users size={18} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">250+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Aktif Üye</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-3">
                  <Award size={18} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Turnuva</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chess board */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 -left-5 -right-5 -top-5 -bottom-5 bg-gradient-to-tr from-gray-200 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl transform rotate-3 opacity-50"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4">
              <ChessBoard ref={boardRef} animated={true} />
              
              {/* Oyun bilgisi */}
              <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm">
                <div className="flex items-start">
                  <Info size={16} className="mt-0.5 mr-2 text-gray-600 dark:text-gray-400" />
                  <div>
                    <div className="font-medium">{gameInfo.title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {gameInfo.players}, {gameInfo.location} {gameInfo.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Aşağı Kaydır</span>
          <div className="animate-bounce">
            <ChevronDown size={24} className="text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};