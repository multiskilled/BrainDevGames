'use client';

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left puzzle piece */}
      <svg
        className="absolute top-10 left-10 w-16 h-16 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#6366F1"
        strokeWidth="2"
      >
        <path d="M 20 20 L 80 20 L 80 80 L 20 80 Z" />
        <path d="M 50 20 Q 50 10 60 10 Q 70 10 70 20" />
        <path d="M 80 50 Q 90 50 90 60 Q 90 70 80 70" />
      </svg>

      {/* Top right lightbulb */}
      <svg
        className="absolute top-20 right-20 w-20 h-20 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#EC4899"
        strokeWidth="2"
      >
        <circle cx="50" cy="30" r="18" />
        <path d="M 40 50 L 60 50 L 55 70 L 45 70 Z" />
        <line x1="45" y1="75" x2="55" y2="75" strokeWidth="3" />
        <line x1="45" y1="80" x2="55" y2="80" strokeWidth="3" />
      </svg>

      {/* Bottom left brain icon */}
      <svg
        className="absolute bottom-20 left-20 w-24 h-24 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
      >
        <path d="M 30 50 Q 30 30 50 25 Q 70 30 70 50 Q 70 70 50 75 Q 30 70 30 50" />
        <circle cx="40" cy="45" r="4" fill="#8B5CF6" />
        <circle cx="50" cy="40" r="4" fill="#8B5CF6" />
        <circle cx="60" cy="45" r="4" fill="#8B5CF6" />
        <circle cx="45" cy="55" r="3" fill="#8B5CF6" />
        <circle cx="55" cy="55" r="3" fill="#8B5CF6" />
      </svg>

      {/* Bottom right gears */}
      <svg
        className="absolute bottom-10 right-10 w-20 h-20 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="2"
      >
        <circle cx="50" cy="50" r="15" />
        <path d="M 50 35 L 55 25 M 65 50 L 75 50 M 50 65 L 55 75 M 35 50 L 25 50" />
      </svg>

      {/* Floating small shapes */}
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded border-2 border-purple-400 opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full border-2 border-blue-400 opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-sm border-2 border-green-400 opacity-10"></div>
    </div>
  );
}
