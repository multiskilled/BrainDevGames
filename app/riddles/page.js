import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RiddlesList from '@/components/games/RiddlesList';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { headers } from 'next/headers';

async function getRiddles(limit = 3) {
  try {
    const headerStore = headers();
    const host = headerStore.get('host');
    const protocol = headerStore.get('x-forwarded-proto') || 'http';
    const baseUrl = host ? `${protocol}://${host}` : (process.env.NEXTAUTH_URL || 'http://localhost:3000');

    const res = await fetch(
      `${baseUrl}/api/riddles?limit=${limit}`,
      {
        next: { revalidate: 300 } // 5-minute cache
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch riddles');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching Riddles:', error);
    return null;
  }
}

export default async function RiddlesPage() {
  const riddles = await getRiddles(3);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-puzzle-bg to-white">
      <Header />
      
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Brain <span className="text-orange-600">Riddles</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Unravel brain teasers and clever enigmas
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>

          {riddles ? (
            <RiddlesList initialRiddles={riddles} />
          ) : (
            <ErrorMessage
              message="Unable to load riddles. Please check your API configuration or try again later."
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
