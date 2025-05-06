import React, { forwardRef, useState, useEffect } from 'react';
import { ChessPiece } from './ChessPiece';

// Initial board setup - standard chess position
const initialBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Piece mapping for component
const pieceMapping = {
  'p': 'pawn',
  'r': 'rook',
  'n': 'knight',
  'b': 'bishop',
  'q': 'queen',
  'k': 'king',
  'P': 'pawn',
  'R': 'rook',
  'N': 'knight',
  'B': 'bishop',
  'Q': 'queen',
  'K': 'king'
};

export const ChessBoard = forwardRef(({ 
  animated = false, 
  interactive = false,
  flipped = false, // Tahtayı çevirme seçeneği
  showCoordinates = true, // Koordinatları gösterme seçeneği
  highlightLastMove = true // Son hamleyi vurgulama seçeneği
}, ref) => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [highlightedSquares, setHighlightedSquares] = useState([]);
  const [lastMove, setLastMove] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);

  // Expose board methods through ref
  React.useImperativeHandle(ref, () => ({
    movePiece: (from, to) => {
      return movePiece(from, to);
    },
    getBoard: () => board,
    resetBoard: () => {
      setBoard(initialBoard);
      setLastMove(null);
      setMoveHistory([]);
    },
    getMoveHistory: () => moveHistory
  }));

  // Handle square click for interactive mode
  const handleSquareClick = (row, col) => {
    if (!interactive) return;

    // If no square is selected and current square has a piece
    if (!selectedSquare && board[row][col]) {
      setSelectedSquare([row, col]);
      // Highlight possible moves
      setHighlightedSquares(getPossibleMoves(row, col));
    } 
    // If a square is already selected
    else if (selectedSquare) {
      const [selectedRow, selectedCol] = selectedSquare;
      
      // If clicking on a highlighted square, move the piece
      if (isHighlighted(row, col)) {
        movePiece([selectedRow, selectedCol], [row, col]);
      }
      
      // Reset selection
      setSelectedSquare(null);
      setHighlightedSquares([]);
    }
  };

  // Check if a square is highlighted
  const isHighlighted = (row, col) => {
    return highlightedSquares.some(([r, c]) => r === row && c === col);
  };

  // Get possible moves (simplified implementation)
  const getPossibleMoves = (row, col) => {
    // This is a simplified version - in a real app, you'd implement proper chess rules
    const moves = [];
    const piece = board[row][col].toLowerCase();
    const isWhite = board[row][col] !== piece;
    
    // Add moves based on piece type (simplified)
    if (piece === 'p') {
      // Pawns move forward
      const direction = isWhite ? -1 : 1;
      const startRow = isWhite ? 6 : 1;
      
      // One square forward
      if (row + direction >= 0 && row + direction < 8 && !board[row + direction][col]) {
        moves.push([row + direction, col]);
        
        // Two squares forward from starting position
        if (row === startRow && !board[row + 2 * direction][col]) {
          moves.push([row + 2 * direction, col]);
        }
      }
      
      // Captures
      [-1, 1].forEach(offset => {
        const newCol = col + offset;
        if (
          newCol >= 0 && newCol < 8 && row + direction >= 0 && row + direction < 8 && 
          board[row + direction][newCol] && 
          (isWhite ? board[row + direction][newCol].toLowerCase() === board[row + direction][newCol] : 
                     board[row + direction][newCol].toUpperCase() === board[row + direction][newCol])
        ) {
          moves.push([row + direction, newCol]);
        }
      });
    } 
    else if (piece === 'n') {
      // Knight moves (L-shape)
      const knightMoves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      
      knightMoves.forEach(([rowOffset, colOffset]) => {
        const newRow = row + rowOffset;
        const newCol = col + colOffset;
        
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
          if (!board[newRow][newCol] || 
              (isWhite ? board[newRow][newCol].toLowerCase() === board[newRow][newCol] : 
                         board[newRow][newCol].toUpperCase() === board[newRow][newCol])) {
            moves.push([newRow, newCol]);
          }
        }
      });
    }
    // Simplified moves for other pieces would go here
    
    return moves;
  };

  // Move piece function
  const movePiece = (from, to) => {
    const [fromRow, fromCol] = from;
    const [toRow, toCol] = to;
    
    // Validate move
    if (fromRow < 0 || fromRow >= 8 || fromCol < 0 || fromCol >= 8 || 
        toRow < 0 || toRow >= 8 || toCol < 0 || toCol >= 8) {
      return false;
    }
    
    // Check if there's a piece at the source
    if (!board[fromRow][fromCol]) {
      return false;
    }
    
    setBoard(prevBoard => {
      const newBoard = prevBoard.map(row => [...row]);
      const movingPiece = newBoard[fromRow][fromCol];
      
      // Update the board
      newBoard[toRow][toCol] = movingPiece;
      newBoard[fromRow][fromCol] = '';
      
      return newBoard;
    });
    
    // Update last move and history
    setLastMove({ from, to });
    setMoveHistory(prev => [...prev, { from, to }]);
    
    return true;
  };

  // Render the board
  const renderBoard = () => {
    // Create array of rows and columns
    const rows = Array(8).fill(0).map((_, i) => flipped ? 7 - i : i);
    const cols = Array(8).fill(0).map((_, i) => flipped ? 7 - i : i);
    
    return (
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full border border-gray-200 dark:border-gray-700">
        {rows.map(rowIndex => 
          cols.map(colIndex => {
            const isBlack = (rowIndex + colIndex) % 2 === 1;
            const isSelected = selectedSquare && selectedSquare[0] === rowIndex && selectedSquare[1] === colIndex;
            const isHighlightedSquare = isHighlighted(rowIndex, colIndex);
            const isLastMoveFrom = lastMove && lastMove.from[0] === rowIndex && lastMove.from[1] === colIndex;
            const isLastMoveTo = lastMove && lastMove.to[0] === rowIndex && lastMove.to[1] === colIndex;
            
            // Get the piece at this position
            const piece = board[rowIndex][colIndex];
            
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  relative flex items-center justify-center
                  ${isBlack ? 'bg-gray-600 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-500'}
                  ${isSelected ? 'ring-2 ring-blue-500 ring-inset' : ''}
                  ${isHighlightedSquare ? 'ring-2 ring-green-500 ring-inset' : ''}
                  ${highlightLastMove && isLastMoveFrom ? 'bg-yellow-200 dark:bg-yellow-800' : ''}
                  ${highlightLastMove && isLastMoveTo ? 'bg-yellow-300 dark:bg-yellow-700' : ''}
                  transition-all duration-200
                `}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              >
                {piece && (
                  <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${animated ? 'hover:scale-110' : ''}`}>
                    <ChessPiece 
                      piece={pieceMapping[piece]} 
                      color={piece.toLowerCase() === piece ? 'black' : 'white'} 
                      className="w-3/4 h-3/4"
                    />
                  </div>
                )}
                
                {/* Coordinates */}
                {showCoordinates && (
                  <>
                    {colIndex === (flipped ? 7 : 0) && (
                      <span className="absolute left-1 top-1 text-xs opacity-50">
                        {8 - rowIndex}
                      </span>
                    )}
                    {rowIndex === (flipped ? 0 : 7) && (
                      <span className="absolute right-1 bottom-1 text-xs opacity-50">
                        {String.fromCharCode(97 + colIndex)}
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="w-full aspect-square max-w-md mx-auto relative overflow-hidden rounded-xl">
      {renderBoard()}
    </div>
  );
});