import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function RiddlesLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-puzzle-bg to-white">
      <Header />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Brain <span className="text-orange-600">Riddles</span>
            </h1>
          </div>

          {/* Skeleton Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                <div className="h-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              </div>
            ))}
          </div>

          <LoadingSpinner text="Loading riddles..." />
        </div>
      </main>

      <Footer />
    </div>
  );
}
