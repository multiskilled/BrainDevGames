import './globals.css'

export const metadata = {
  title: 'BrainDevGames - Brain Training Games',
  description: 'Sharpen Your Brain, Boost Your Focus, & Enhance Memory with Daily Puzzles!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
