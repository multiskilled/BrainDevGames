'use client';

import Link from 'next/link';

export default function RiddlesError({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-puzzle-bg to-white px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Failed to Load Riddles</h2>
        <p className="text-gray-600 mb-6">
          We couldn't load the riddles. This might be due to API issues.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
