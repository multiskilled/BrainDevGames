# BrainDevGames - Puzzle Mind 🧠

A modern Next.js web application featuring brain-training games including Sudoku and Riddles. Built with the latest web technologies for optimal performance and user experience.

![Puzzle Mind](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🧩 **Interactive Sudoku** with multiple difficulty levels (Easy, Medium, Hard)
- 🤔 **Brain-teasing Riddles** from API Ninjas with reveal/hide functionality
- 💾 **LocalStorage Persistence** - Your game progress is automatically saved
- 📱 **Fully Responsive** - Beautiful design on desktop, tablet, and mobile
- ⚡ **5-minute ISR Caching** - Fast load times with smart caching
- 🎨 **Stunning UI** - Pastel color scheme matching the Puzzle Mind design
- 🛡️ **Error Boundaries** - Graceful error handling throughout
- ♿ **Accessible** - Built with accessibility in mind

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- API Ninjas account (free tier available)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "d:\AI Projects\BrainDevGames"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your values:
   ```env
   # Get your free API key at: https://api-ninjas.com/
   API_NINJAS_KEY=your_actual_api_key_here
   
   # Generate using: openssl rand -base64 32
   NEXTAUTH_SECRET=your_random_32_character_secret
   
   # Local development URL
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

### Playing Sudoku
1. Navigate to the Sudoku page from the home screen
2. Select your difficulty level (Easy, Medium, Hard)
3. Click on empty cells to fill in numbers
4. Use the on-screen number pad (mobile) or keyboard (desktop)
5. Click "Check Solution" to validate your answer
6. Get hints or clear the board as needed
7. Your progress is automatically saved!

### Solving Riddles
1. Navigate to the Riddles page
2. Read each riddle carefully
3. Click "Reveal Answer" when you want to see the solution
4. Click "Load More Riddles" to get new challenges
5. Your revealed answers are remembered

## 🏗️ Project Structure

```
BrainDevGames/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   │   ├── sudoku/          # Sudoku puzzle endpoint
│   │   └── riddles/         # Riddles endpoint
│   ├── sudoku/              # Sudoku game page
│   ├── riddles/             # Riddles page
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   ├── error.js             # Global error boundary
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/             # Header, Footer
│   ├── games/              # Game components
│   └── ui/                 # Reusable UI components
├── lib/                    # Utility functions
│   ├── utils.js           # Helper functions
│   └── api-ninjas.js      # API client
├── public/                # Static assets
├── .env.local            # Environment variables (create this)
└── package.json          # Dependencies

```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: JavaScript (ES6+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [API Ninjas](https://api-ninjas.com/) (Sudoku & Riddles)
- **Session**: iron-session for lightweight session management
- **Storage**: Browser localStorage for game state persistence
- **Deployment**: Optimized for Vercel

## 📡 API Routes

### Sudoku API
```
GET /api/sudoku?difficulty={easy|medium|hard}
```
**Response:**
```json
{
  "difficulty": "medium",
  "puzzle": [[0,0,0,...], ...],
  "solution": [[5,3,4,...], ...]
}
```

### Riddles API
```
GET /api/riddles?limit={number}
```
**Response:**
```json
[
  {
    "title": "Brain Teaser",
    "question": "What has keys but no locks?",
    "answer": "A piano"
  }
]
```

## 🎨 Design System

The app follows the Puzzle Mind design with a calming pastel color palette:

- **Primary Background**: `#E8F4FA` (Light Blue)
- **Sudoku Card**: `#D4E9F5` (Blue)
- **Riddles Card**: `#FDECD0` (Peach)
- **Cognitive**: `#E0F2F7` (Teal)
- **Focus**: `#E8F4FA` (Light Blue)
- **Memory**: `#FFF4D6` (Yellow)
- **Stress**: `#F0E6FA` (Purple)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Games

1. Create new API route in `app/api/your-game/route.js`
2. Create game component in `components/games/YourGame.js`
3. Create page in `app/your-game/page.js`
4. Add navigation link in Header and home page

## 🐛 Troubleshooting

### API Errors
- **502 Bad Gateway**: Check your `API_NINJAS_KEY` is valid
- **Failed to fetch**: Ensure `.env.local` file exists with correct keys

### Build Errors
- Clear `.next` folder: `rm -rf .next` and rebuild
- Clear node_modules: `rm -rf node_modules && npm install`

### LocalStorage Issues
- Check browser privacy settings allow localStorage
- Clear browser cache and localStorage

## 📝 License

MIT License - feel free to use this project for learning and personal projects!

## 🙏 Acknowledgments

- [API Ninjas](https://api-ninjas.com/) for the puzzle APIs
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📧 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review API Ninjas documentation
3. Check Next.js documentation

---

**Built with ❤️ using Next.js and Tailwind CSS**
