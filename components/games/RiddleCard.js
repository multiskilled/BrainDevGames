'use client';

import { useState, useEffect } from 'react';
import { storage } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function RiddleCard({ riddle, index }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const riddleId = `riddle_${index}_${riddle.question.substring(0, 20)}`;

  // Load revealed state from localStorage
  useEffect(() => {
    const revealed = storage.get(`riddle_revealed_${riddleId}`, false);
    setIsRevealed(revealed);
  }, [riddleId]);

  const toggleReveal = () => {
    const newState = !isRevealed;
    setIsRevealed(newState);
    storage.set(`riddle_revealed_${riddleId}`, newState);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c-.549-1.165.484-2.351 1.746-1.992l8.5 2.427a1 1 0 01.678 1.265l-2.427 8.5c-.359 1.262-1.545 2.295-2.71 1.746l-6.06-2.875a1 1 0 00-1.228.336l-2.25 3a1 1 0 01-1.6-.2l-2.75-4.5a1 1 0 01.2-1.2l3-2.25a1 1 0 00.336-1.228L8.228 9z" />
          </svg>
        </div>
        <div className="flex-1">
          {riddle.title && (
            <h3 className="font-bold text-gray-800 mb-2">{riddle.title}</h3>
          )}
          <p className="text-gray-700 text-lg leading-relaxed">{riddle.question}</p>
        </div>
      </div>

      {isRevealed && (
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200 animate-fadeIn">
          <p className="text-purple-900 font-semibold mb-1">Answer:</p>
          <p className="text-gray-800">{riddle.answer}</p>
        </div>
      )}

      <button
        onClick={toggleReveal}
        className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-all ${
          isRevealed
            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
      </button>
    </div>
  );
}
