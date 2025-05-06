import { useCallback, useState, useEffect } from 'react';

/**
 * Custom hook for chess board animations
 * Simulates a famous chess game
 * 
 * @param {React.RefObject} boardRef - Reference to the ChessBoard component
 * @returns {Object} Animation functions and state
 */
export const useChessAnimation = (boardRef) => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Ünlü oyun: "Opera Oyunu" - Paul Morphy vs Duke Karl / Count Isouard, Paris 1858
  // Bu oyun, satranç tarihinin en ünlü oyunlarından biridir
  // Opera Game: Paul Morphy vs Duke Karl / Count Isouard, Paris 1858
  // With correct coordinates and moves according to Fischer's annotation
  const famousGame = [
    // 1. e4 e5
    { from: [6, 4], to: [4, 4] },    // e2-e4
    { from: [1, 4], to: [3, 4] },    // e7-e5
    
    // 2. Nf3 d6
    { from: [7, 6], to: [5, 5] },    // g1-f3
    { from: [1, 3], to: [2, 3] },    // d7-d6
    
    // 3. d4 Bg4
    { from: [6, 3], to: [4, 3] },    // d2-d4
    { from: [0, 2], to: [4, 6] },    // c8-g4
    
    // 4. dxe5 Bxf3
    { from: [4, 3], to: [3, 4] },    // d4xe5
    { from: [4, 6], to: [5, 5] },    // g4xf3
    
    // 5. Qxf3 dxe5
    { from: [7, 3], to: [5, 5] },    // d1xf3
    { from: [2, 3], to: [3, 4] },    // d6xe5
    
    // 6. Bc4 Nf6
    { from: [7, 5], to: [4, 2] },    // f1-c4
    { from: [0, 6], to: [2, 5] },    // g8-f6
    
    // 7. Qb3 Qe7
    { from: [5, 5], to: [5, 1] },    // f3-b3
    { from: [0, 3], to: [1, 4] },    // d8-e7
    
    // 8. Nc3 c6
    { from: [7, 1], to: [5, 2] },    // b1-c3
    { from: [1, 2], to: [2, 2] },    // c7-c6
    
    // 9. Bg5 b5
    { from: [7, 2], to: [3, 6] },    // c1-g5
    { from: [1, 1], to: [3, 1] },    // b7-b5
    
    // 10. Nxb5 cxb5
    { from: [5, 2], to: [3, 1] },    // c3xb5
    { from: [2, 2], to: [3, 1] },    // c6xb5
    
    // 11. Bxb5+ Nbd7
    { from: [4, 2], to: [3, 1] },    // c4xb5+
    { from: [0, 1], to: [1, 3] },    // b8-d7
    
    // 12. O-O-O (Queenside castling)
    // Şah: e1 -> c1, Kale: a1 -> d1
    { from: [7, 4], to: [7, 2] },    // e1-c1 (Şah)
    { from: [7, 0], to: [7, 3] },    // a1-d1 (Kale)
    
    // 12... Rd8 (Siyah rok sonrası kale hamlesi)
    { from: [0, 0], to: [0, 3] },    // a8-d8 (Siyah kale a8'den d8'e gidiyor)
    
    // 13. Rxd7 Rxd7
    { from: [7, 3], to: [1, 3] },    // d1xd7
    { from: [0, 3], to: [1, 3] },    // d8xd7
    
    // 14. Rh1 to Rd1, Qe5 to Qe6
    { from: [7, 7], to: [7, 3] },    // h1-d1 (Kale h1'den d1'e gidiyor)
    { from: [1, 4], to: [2, 4] },    // e7-e6 (Vezir e7'den e6'ya gidiyor)
    
    // 15. Bxd7+ Nxd7
    { from: [3, 1], to: [1, 3] },    // b5xd7+
    { from: [2, 5], to: [1, 3] },    // f6xd7 (At f6'dan d7'ye gidiyor)
    
    // 16. Qb8+ Nxb8
    { from: [5, 1], to: [0, 1] },    // b3-b8+
    { from: [1, 3], to: [0, 1] },    // d7xb8
    
    // 17. Rd8# (Checkmate)
    { from: [7, 3], to: [0, 3] }     // d1-d8#
];

  // Tahtayı başlangıç durumuna sıfırla
  const resetBoard = useCallback(() => {
    if (!boardRef.current) return;
    boardRef.current.resetBoard();
    setCurrentMoveIndex(0);
  }, [boardRef]);

  // Bir sonraki hamleyi oynat
  const playNextMove = useCallback(() => {
    if (!boardRef.current || currentMoveIndex >= famousGame.length) return false;
    
    const move = famousGame[currentMoveIndex];
    const success = boardRef.current.movePiece(move.from, move.to);
    
    if (success) {
      setCurrentMoveIndex(prev => prev + 1);
      return true;
    }
    
    return false;
  }, [boardRef, currentMoveIndex, famousGame]);

  // Oyunu baştan sona kadar otomatik oynat
  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    resetBoard();
    
    // İlk hamleyi hemen yap, sonraki hamleler için bir gecikme belirle
    setTimeout(() => {
      let moveIndex = 0;
      
      const interval = setInterval(() => {
        if (moveIndex < famousGame.length) {
          if (boardRef.current) {
            const move = famousGame[moveIndex];
            boardRef.current.movePiece(move.from, move.to);
            moveIndex++;
            setCurrentMoveIndex(moveIndex);
          }
        } else {
          clearInterval(interval);
          // Oyun bittiğinde 3 saniye bekleyip baştan başlat
          setTimeout(() => {
            resetBoard();
            setIsAnimating(false);
            startAnimation();
          }, 3000);
        }
      }, 1500); // Her hamle arasında 1.5 saniye
      
      return () => clearInterval(interval);
    }, 1000);
  }, [boardRef, resetBoard, isAnimating, famousGame]);

  // Oyunun açıklamasını al
  const getGameInfo = useCallback(() => {
    return {
      title: "Opera Oyunu",
      players: "Paul Morphy vs Duke Karl / Count Isouard",
      location: "Paris",
      year: 1858,
      moveCount: famousGame.length,
      currentMove: currentMoveIndex
    };
  }, [currentMoveIndex, famousGame.length]);

  return {
    playNextMove,
    resetBoard,
    startAnimation,
    getGameInfo,
    currentMoveIndex
  };
};