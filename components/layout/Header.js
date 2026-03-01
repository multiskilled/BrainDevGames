'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="BrainDevGames"
              className="h-10 w-auto max-w-[220px] object-contain"
            />
            <span className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors sm:hidden">
              BrainDevGames
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#benefits" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Benefits
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </Link>
            
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#benefits" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="/#about" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#community" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
