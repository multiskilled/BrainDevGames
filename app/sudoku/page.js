import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SudokuBoard from '@/components/games/SudokuBoard';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { headers } from 'next/headers';

async function getSudokuPuzzle(difficulty = 'medium') {
  try {
    const headerStore = headers();
    const host = headerStore.get('host');
    const protocol = headerStore.get('x-forwarded-proto') || 'http';
    const baseUrl = host ? `${protocol}://${host}` : (process.env.NEXTAUTH_URL || 'http://localhost:3000');

    const res = await fetch(
      `${baseUrl}/api/sudoku?difficulty=${difficulty}`,
      {
        next: { revalidate: 300 } // 5-minute cache
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch puzzle');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching Sudoku:', error);
    return null;
  }
}

export default async function SudokuPage({ searchParams }) {
  const difficulty = searchParams?.difficulty || 'medium';
  const puzzleData = await getSudokuPuzzle(difficulty);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-puzzle-bg to-white">
      <Header />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sudoku <span className="text-purple-600">Challenge</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Master logic and numbers with challenging grids
            </p>

            {/* Difficulty Selector */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="/sudoku?difficulty=easy"
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  difficulty === 'easy'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Easy
              </a>
              <a
                href="/sudoku?difficulty=medium"
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  difficulty === 'medium'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Medium
              </a>
              <a
                href="/sudoku?difficulty=hard"
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  difficulty === 'hard'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Hard
              </a>
            </div>
          </div>

          {puzzleData ? (
            <SudokuBoard
              initialPuzzle={puzzleData.puzzle}
              solution={puzzleData.solution}
              difficulty={puzzleData.difficulty}
            />
          ) : (
            <ErrorMessage
              message="Unable to load Sudoku puzzle. Please check your API configuration or try again later."
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
