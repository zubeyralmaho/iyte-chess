import React from 'react';
import { Check, Clock, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { ChessPiece } from '../ui/ChessPiece';

export const About = ({ id }) => {
  // Features list
  const features = [
    {
      icon: <Clock size={20} className="text-black dark:text-white" />,
      title: 'Düzenli Etkinlikler',
      description: 'Haftalık satranç buluşmaları, aylık turnuvalar ve eğitim programları düzenliyoruz.'
    },
    {
      icon: <Users size={20} className="text-black dark:text-white" />,
      title: 'Aktif Topluluk',
      description: 'Her seviyeden satranç oyuncusu için uygun bir ortam sağlıyoruz.'
    },
    {
      icon: <BookOpen size={20} className="text-black dark:text-white" />,
      title: 'Eğitim Fırsatları',
      description: 'Başlangıç, orta ve ileri seviye için özel hazırlanmış eğitim programları sunuyoruz.'
    },
    {
      icon: <Award size={20} className="text-black dark:text-white" />,
      title: 'Turnuva Katılımları',
      description: 'İYTE\'yi çeşitli üniversiteler arası ve ulusal turnuvalarda temsil ediyoruz.'
    }
  ];

  return (
    <section id={id} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image side */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 -left-5 -right-5 -top-5 -bottom-5 bg-gray-100 dark:bg-gray-800 rounded-3xl transform -rotate-3 opacity-50"></div>
            
            <div className="relative grid grid-cols-9 grid-rows-9 aspect-square max-w-lg mx-auto">
              {/* Chess board grid with decorative pieces */}
              {Array.from({ length: 81 }).map((_, index) => {
                const row = Math.floor(index / 9);
                const col = index % 9;
                const isBlack = (row + col) % 2 === 1;
                
                // Add chess pieces at specific positions
                const chessPieces = {
                  '2-2': { piece: 'king', color: 'black' },
                  '2-6': { piece: 'queen', color: 'white' },
                  '6-2': { piece: 'knight', color: 'white' },
                  '6-6': { piece: 'rook', color: 'black' }
                };
                
                const key = `${row}-${col}`;
                const hasPiece = chessPieces[key];
                
                return (
                  <div 
                    key={index}
                    className={`
                      relative flex items-center justify-center
                      ${isBlack ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}
                      ${(row === 0 || row === 8 || col === 0 || col === 8) ? 'bg-gray-100 dark:bg-gray-800' : ''}
                    `}
                  >
                    {hasPiece && (
                      <div className="absolute inset-0 flex items-center justify-center p-1">
                        <ChessPiece 
                          piece={hasPiece.piece} 
                          color={hasPiece.color}
                          className="w-full h-full" 
                        />
                      </div>
                    )}
                    
                    {/* Board coordinates */}
                    {row === 8 && col > 0 && col < 8 && (
                      <span className="absolute bottom-1 right-1 text-xs opacity-50">
                        {String.fromCharCode(96 + col)}
                      </span>
                    )}
                    {col === 0 && row > 0 && row < 8 && (
                      <span className="absolute top-1 left-1 text-xs opacity-50">
                        {8 - row}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Content side */}
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
              Hakkımızda
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Modern ve aktif bir satranç topluluğu
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400">
              İYTE Satranç Topluluğu, satranca ilgi duyan öğrencileri bir araya getirerek hem dostluklar kurmalarını
              hem de satranç becerilerini geliştirmelerini amaçlayan bir öğrenci organizasyonudur.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400">
              2023 yılında tekrar aktif hale gelen topluluğumuz, düzenli etkinlikler, turnuvalar ve eğitim programlarıyla 
              İYTE'de satranç kültürünün yaygınlaşmasına katkıda bulunmaktadır.
            </p>
            
            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
            <a 
  href="https://chat.whatsapp.com/GRUPKODUNUZ" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button size="lg" variant="outline">
    Bize Katıl
  </Button>
</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};