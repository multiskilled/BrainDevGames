import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        {/* Social Media & Copyright */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BrainDevGames. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2.12 3.14 3.14 0 00.71 1.36 3.09 3.09 0 001.46.84 45.18 45.18 0 008.44.31 45.18 45.18 0 008.44-.31 3.09 3.09 0 001.46-.84 3.14 3.14 0 00.71-1.36 9.55 9.55 0 00.3-2.12 48.29 48.29 0 000-6.48zM9.75 14.85V8.25l5.5 3.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
