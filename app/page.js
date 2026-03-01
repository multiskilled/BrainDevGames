import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-illustration.png)',
            backgroundSize: 'cover',
            minHeight: '600px'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                UNLEASH YOUR
                <br />
                <span className="text-purple-600">MIND'S POTENTIAL</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Sharpen Your Brain, Boost Your Focus, &
                <br className="hidden sm:block" />
                Enhance Memory with Daily Puzzles!
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white" id="benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              UNLOCK THE POWER OF YOUR BRAIN WITH
              <br />
              DAILY MENTAL CHALLENGES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Cognitive Health */}
              <div className="benefit-card bg-cognitive">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">COGNITIVE</h3>
                <h3 className="font-bold text-gray-800 text-lg">HEALTH</h3>
              </div>

              {/* Focus & Attention */}
              <div className="benefit-card bg-focus">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">FOCUS &</h3>
                <h3 className="font-bold text-gray-800 text-lg">ATTENTION</h3>
              </div>

              {/* Strengthens Memory */}
              <div className="benefit-card bg-memory">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">STRENGTHENS</h3>
                <h3 className="font-bold text-gray-800 text-lg">MEMORY</h3>
              </div>

              {/* Reduces Stress */}
              <div className="benefit-card bg-stress">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">REDUCES</h3>
                <h3 className="font-bold text-gray-800 text-lg">STRESS</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Selection Section */}
        <section className="py-16 bg-gradient-to-b from-white to-puzzle-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              CHOOSE YOUR CHALLENGE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Sudoku Card */}
              <Link href="/sudoku">
                <div className="game-card bg-sudoku-card">
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">SUDOKU</h3>
                    
                    <div className="w-24 h-24 mb-4 bg-white/50 rounded-lg flex items-center justify-center">
                      <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                      </svg>
                    </div>

                    <p className="text-gray-700 text-center mb-6">
                      Master Logic & Numbers with
                      <br />
                      challenging grids
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors uppercase">
                      Play Sudoku
                    </button>
                  </div>
                </div>
              </Link>

              {/* Riddles Card */}
              <Link href="/riddles">
                <div className="game-card bg-riddles-card">
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">RIDDLES</h3>
                    
                    <div className="w-24 h-24 mb-4 bg-white/50 rounded-lg flex items-center justify-center">
                      <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c-.549-1.165.484-2.351 1.746-1.992l8.5 2.427a1 1 0 01.678 1.265l-2.427 8.5c-.359 1.262-1.545 2.295-2.71 1.746l-6.06-2.875a1 1 0 00-1.228.336l-2.25 3a1 1 0 01-1.6-.2l-2.75-4.5a1 1 0 01.2-1.2l3-2.25a1 1 0 00.336-1.228L8.228 9z" />
                      </svg>
                    </div>

                    <p className="text-gray-700 text-center mb-6">
                      Unravel Brain Teasers &
                      <br />
                      Clever Enigmas
                    </p>

                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors uppercase">
                      Solve Riddles
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
