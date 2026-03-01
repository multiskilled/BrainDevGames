import { NextResponse } from 'next/server';
import { retryFetch } from '@/lib/utils';

const SUDOKU_API_BASE_URL = 'https://you-do-sudoku-api.vercel.app/api';

function splitToGrid(value, zeroForInvalid = false) {
  if (typeof value !== 'string' || value.length < 81) {
    return null;
  }

  const digits = value.slice(0, 81).split('').map((cell) => {
    const parsed = Number.parseInt(cell, 10);
    if (Number.isNaN(parsed)) {
      return zeroForInvalid ? 0 : null;
    }
    return parsed;
  });

  if (digits.includes(null)) {
    return null;
  }

  const grid = [];
  for (let row = 0; row < 9; row++) {
    grid.push(digits.slice(row * 9, row * 9 + 9));
  }
  return grid;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const difficulty = searchParams.get('difficulty') || 'medium';
    
    // Validate difficulty
    const validDifficulties = ['easy', 'medium', 'hard'];
    const validatedDifficulty = validDifficulties.includes(difficulty) 
      ? difficulty 
      : 'medium';

    // Check for API key
    if (!process.env.SUDOKU_API_KEY) {
      console.error('SUDOKU_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // Fetch from You-Do-Sudoku API with retry logic and ISR caching
    const response = await retryFetch(
      `${SUDOKU_API_BASE_URL}?difficulty=${validatedDifficulty}`,
      {
        headers: {
          'X-Api-Key': process.env.SUDOKU_API_KEY
        },
        next: { revalidate: 300 } // 5-minute ISR cache
      }
    );

    if (!response.ok) {
      console.error(`Sudoku API returned status ${response.status}`);
      return NextResponse.json(
        { error: 'Failed to fetch puzzle from external service' },
        { status: 502 }
      );
    }

    const data = await response.json();
    
    let puzzleGrid = null;
    let solutionGrid = null;

    if (Array.isArray(data?.puzzle) && Array.isArray(data?.puzzle[0])) {
      puzzleGrid = data.puzzle;
    } else if (Array.isArray(data?.board) && Array.isArray(data?.board[0])) {
      puzzleGrid = data.board;
    } else {
      puzzleGrid = splitToGrid(data?.puzzle, true) || splitToGrid(data?.board, true);
    }

    if (Array.isArray(data?.solution) && Array.isArray(data?.solution[0])) {
      solutionGrid = data.solution;
    } else if (Array.isArray(data?.solvedBoard) && Array.isArray(data?.solvedBoard[0])) {
      solutionGrid = data.solvedBoard;
    } else {
      solutionGrid = splitToGrid(data?.solution) || splitToGrid(data?.solvedBoard);
    }

    if (!Array.isArray(puzzleGrid) || !Array.isArray(solutionGrid)) {
      return NextResponse.json(
        { error: 'Invalid puzzle format from external service' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      difficulty: validatedDifficulty,
      puzzle: puzzleGrid,
      solution: solutionGrid
    });

  } catch (error) {
    console.error('Sudoku API error:', error);
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 502 }
    );
  }
}
