import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function SudokuLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-puzzle-bg to-white">
      <Header />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sudoku <span className="text-purple-600">Challenge</span>
            </h1>
          </div>

          {/* Skeleton Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6">
              <div className="w-full max-w-xl mx-auto aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <LoadingSpinner text="Loading your puzzle..." />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
