import React from 'react';

export const ChessBoardBackground = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-5 dark:opacity-[0.03] pointer-events-none overflow-hidden">
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-black/10 to-transparent dark:from-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-black/10 to-transparent dark:from-white/10 rounded-full blur-3xl"></div>
      
      {/* Chess pattern */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {Array.from({ length: 64 }).map((_, index) => {
          const row = Math.floor(index / 8);
          const col = index % 8;
          const isBlack = (row + col) % 2 === 1;
          
          return (
            <div 
              key={index}
              className={`${isBlack ? 'bg-black/5 dark:bg-white/5' : 'bg-transparent'}`}
            />
          );
        })}
      </div>
    </div>
  );
};