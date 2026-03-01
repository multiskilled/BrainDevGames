'use client';

export default function ErrorMessage({ message, onRetry }) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
      return;
    }
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <h3 className="text-red-800 font-semibold mb-1">Oops! Something went wrong</h3>
            <p className="text-red-700 text-sm">{message}</p>
          </div>
        </div>
        <button
          onClick={handleRetry}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
