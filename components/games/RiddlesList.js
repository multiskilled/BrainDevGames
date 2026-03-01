'use client';

import { useState } from 'react';
import RiddleCard from './RiddleCard';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function RiddlesList({ initialRiddles }) {
  const [riddles, setRiddles] = useState(initialRiddles);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreRiddles = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/riddles?limit=3');
      
      if (!res.ok) {
        throw new Error('Failed to fetch riddles');
      }

      const newRiddles = await res.json();
      setRiddles([...riddles, ...newRiddles]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {riddles.map((riddle, index) => (
          <RiddleCard key={index} riddle={riddle} index={index} />
        ))}
      </div>

      {error && (
        <ErrorMessage message={error} onRetry={loadMoreRiddles} />
      )}

      {isLoading && <LoadingSpinner text="Loading more riddles..." />}

      {!isLoading && !error && (
        <div className="text-center">
          <Button onClick={loadMoreRiddles} variant="secondary" size="large">
            Load More Riddles
          </Button>
        </div>
      )}
    </div>
  );
}
