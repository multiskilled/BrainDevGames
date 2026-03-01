export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-puzzle-bg to-white px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl font-bold text-purple-600 mb-4">404</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
