import React from 'react';

export const ChessPiece = ({ piece, color = 'black', className = '', size = 24 }) => {
  // SVG paths for each chess piece
  const piecePaths = {
    pawn: {
      viewBox: '0 0 45 45',
      path: 'M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z',
    },
    knight: {
      viewBox: '0 0 45 45',
      path: 'M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18',
      path2: 'M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10',
    },
    bishop: {
      viewBox: '0 0 45 45',
      path: 'M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z',
      path2: 'M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z',
      path3: 'M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z',
    },
    rook: {
      viewBox: '0 0 45 45',
      path: 'M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z',
      path2: 'M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z',
      path3: 'M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14',
      path4: 'M 34,14 L 31,17 L 14,17 L 11,14',
      path5: 'M 31,17 L 31,29.5 L 14,29.5 L 14,17',
      path6: 'M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5',
    },
    queen: {
      viewBox: '0 0 45 45',
      path: 'M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z',
      path2: 'M 14 15 A 2 2 0 1 1  10,15 A 2 2 0 1 1  14 15 z',
      path3: 'M 19 17 A 2 2 0 1 1  15,17 A 2 2 0 1 1  19 17 z',
      path4: 'M 24 17 A 2 2 0 1 1  20,17 A 2 2 0 1 1  24 17 z',
      path5: 'M 29 17 A 2 2 0 1 1  25,17 A 2 2 0 1 1  29 17 z',
      path6: 'M 34 15 A 2 2 0 1 1  30,15 A 2 2 0 1 1  34 15 z',
      path7: 'M 39 13 A 2 2 0 1 1  35,13 A 2 2 0 1 1  39 13 z',
      path8: 'M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z',
      path9: 'M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z',
    },
    king: {
      viewBox: '0 0 45 45',
      path: 'M 22.5,11.63 L 22.5,6',
      path2: 'M 20,8 L 25,8',
      path3: 'M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25',
      path4: 'M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z',
    },
  };

  const selectedPiece = piecePaths[piece] || piecePaths.pawn;
  const fill = color === 'white' ? '#fff' : '#000';
  const stroke = color === 'white' ? '#000' : '#fff';

  return (
    <svg
      width={size}
      height={size}
      viewBox={selectedPiece.viewBox}
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {selectedPiece.path && <path d={selectedPiece.path} />}
      {selectedPiece.path2 && <path d={selectedPiece.path2} />}
      {selectedPiece.path3 && <path d={selectedPiece.path3} />}
      {selectedPiece.path4 && <path d={selectedPiece.path4} />}
      {selectedPiece.path5 && <path d={selectedPiece.path5} />}
      {selectedPiece.path6 && <path d={selectedPiece.path6} />}
      {selectedPiece.path7 && <path d={selectedPiece.path7} />}
      {selectedPiece.path8 && <path d={selectedPiece.path8} />}
      {selectedPiece.path9 && <path d={selectedPiece.path9} />}
    </svg>
  );
};