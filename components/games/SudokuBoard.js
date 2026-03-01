'use client';

import { useState, useEffect } from 'react';
import { storage } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function SudokuBoard({ initialPuzzle, solution, difficulty }) {
  const [board, setBoard] = useState(null);
  const [originalPuzzle, setOriginalPuzzle] = useState(null);
  const [currentSolution, setCurrentSolution] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [errors, setErrors] = useState(new Set());
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Load saved game or use initial puzzle
  useEffect(() => {
    const savedGame = storage.get('sudoku_current_game');

    if (
      savedGame &&
      savedGame.difficulty === difficulty &&
      Array.isArray(savedGame.board) &&
      Array.isArray(savedGame.originalPuzzle) &&
      Array.isArray(savedGame.solution)
    ) {
      setBoard(savedGame.board);
      setOriginalPuzzle(savedGame.originalPuzzle);
      setCurrentSolution(savedGame.solution);
    } else {
      setBoard(JSON.parse(JSON.stringify(initialPuzzle)));
      setOriginalPuzzle(JSON.parse(JSON.stringify(initialPuzzle)));
      setCurrentSolution(JSON.parse(JSON.stringify(solution)));
    }
  }, [initialPuzzle, solution, difficulty]);

  // Save game state
  useEffect(() => {
    if (board && originalPuzzle && currentSolution) {
      storage.set('sudoku_current_game', {
        board,
        originalPuzzle,
        solution: currentSolution,
        difficulty
      });
    }
  }, [board, originalPuzzle, currentSolution, difficulty]);

  const handleCellChange = (row, col, value) => {
    // Don't allow changing original cells
    if (originalPuzzle[row][col] !== 0) return;

    const newBoard = board.map(r => [...r]);
    const num = parseInt(value) || 0;
    newBoard[row][col] = num;
    setBoard(newBoard);

    // Clear error for this cell
    const newErrors = new Set(errors);
    newErrors.delete(`${row}-${col}`);
    setErrors(newErrors);
  };

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const handleNumberPad = (num) => {
    if (selectedCell) {
      const { row, col } = selectedCell;
      handleCellChange(row, col, num);
    }
  };

  const checkSolution = () => {
    if (!currentSolution) return;

    const newErrors = new Set();
    let hasEmpty = false;

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          hasEmpty = true;
        } else if (board[row][col] !== currentSolution[row][col]) {
          newErrors.add(`${row}-${col}`);
        }
      }
    }

    setErrors(newErrors);

    if (!hasEmpty && newErrors.size === 0) {
      setIsComplete(true);
      setShowSuccess(true);
      setStatusMessage('Excellent! Your solution is correct.');
      setTimeout(() => setShowSuccess(false), 5000);
    } else if (newErrors.size > 0 || hasEmpty) {
      setStatusMessage('Some entries are incorrect or incomplete. Keep going!');
    }
  };

  const clearBoard = () => {
    setBoard(JSON.parse(JSON.stringify(originalPuzzle)));
    setErrors(new Set());
    setIsComplete(false);
    setShowSuccess(false);
    setStatusMessage('');
  };

  const getHint = () => {
    if (!currentSolution) return;
    if (!selectedCell) return;
    
    const { row, col } = selectedCell;
    if (originalPuzzle[row][col] !== 0) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = currentSolution[row][col];
    setBoard(newBoard);
    setStatusMessage('Hint applied to selected cell.');
  };

  const getSolution = () => {
    if (!currentSolution) return;

    setBoard(JSON.parse(JSON.stringify(currentSolution)));
    setErrors(new Set());
    setIsComplete(true);
    setShowSuccess(false);
    setStatusMessage('Solution revealed. Compare your entries and try a new puzzle!');
  };

  const generateAnotherSudoku = async () => {
    try {
      setIsGenerating(true);
      setStatusMessage('Generating a new puzzle...');

      const response = await fetch(`/api/sudoku?difficulty=${difficulty}`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch a new puzzle');
      }

      const data = await response.json();
      const freshPuzzle = JSON.parse(JSON.stringify(data.puzzle));
      const freshSolution = JSON.parse(JSON.stringify(data.solution));

      setBoard(freshPuzzle);
      setOriginalPuzzle(freshPuzzle);
      setCurrentSolution(freshSolution);
      setSelectedCell(null);
      setErrors(new Set());
      setIsComplete(false);
      setShowSuccess(false);
      setStatusMessage('New Sudoku generated. Good luck!');
    } catch (error) {
      setStatusMessage('Could not generate a new puzzle right now. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!board) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {showSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-800 font-bold text-lg">🎉 Congratulations! You solved it!</p>
        </div>
      )}

      {/* Sudoku Grid */}
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6">
        <div className="grid grid-cols-9 gap-0 w-full max-w-xl mx-auto aspect-square border-4 border-gray-800">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isOriginal = originalPuzzle[rowIndex][colIndex] !== 0;
              const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
              const hasError = errors.has(`${rowIndex}-${colIndex}`);
              const isThickRight = (colIndex + 1) % 3 === 0 && colIndex < 8;
              const isThickBottom = (rowIndex + 1) % 3 === 0 && rowIndex < 8;

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`
                    relative flex items-center justify-center
                    border border-gray-300
                    ${isThickRight ? 'border-r-2 border-r-gray-800' : ''}
                    ${isThickBottom ? 'border-b-2 border-b-gray-800' : ''}
                    ${isSelected ? 'bg-blue-100' : ''}
                    ${hasError ? 'bg-red-100' : ''}
                    ${!isOriginal && !hasError && !isSelected ? 'bg-gray-50' : ''}
                  `}
                >
                  <input
                    type="text"
                    maxLength={1}
                    value={cell === 0 ? '' : cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    disabled={isOriginal}
                    className={`
                      w-full h-full text-center text-lg md:text-2xl font-semibold
                      bg-transparent outline-none cursor-pointer
                      ${isOriginal ? 'text-gray-900 cursor-default font-bold' : 'text-blue-600'}
                      ${hasError ? 'text-red-600' : ''}
                    `}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Number Pad (Mobile) */}
      <div className="grid grid-cols-5 gap-2 mb-6 md:hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button
            key={num}
            onClick={() => handleNumberPad(num)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 rounded-lg text-xl"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleNumberPad(0)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 rounded-lg col-span-1"
        >
          ✕
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={checkSolution} variant="success">
          Check Solution
        </Button>
        <Button onClick={getHint} variant="secondary" disabled={!selectedCell}>
          Get Hint
        </Button>
        <Button onClick={getSolution} variant="secondary">
          Get Solution
        </Button>
        <Button onClick={clearBoard} variant="outline">
          Clear Board
        </Button>
        <Button onClick={generateAnotherSudoku} variant="primary" disabled={isGenerating}>
          {isGenerating ? 'Generating...' : 'Generate Another Sudoku'}
        </Button>
      </div>

      {errors.size > 0 && !isComplete && (
        <p className="text-center text-red-600 mt-4">
          {errors.size} error{errors.size > 1 ? 's' : ''} found. Keep trying!
        </p>
      )}

      {statusMessage && (
        <p className="text-center text-gray-700 mt-3">{statusMessage}</p>
      )}
    </div>
  );
}
