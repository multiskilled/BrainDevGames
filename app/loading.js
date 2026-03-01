import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-puzzle-bg to-white">
      <LoadingSpinner size="large" text="Loading BrainDevGames..." />
    </div>
  );
}
