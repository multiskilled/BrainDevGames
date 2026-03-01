# Quick Setup Guide 🚀

## Step-by-Step Setup

### 1. Get Your API Key

1. Go to [API Ninjas](https://api-ninjas.com/)
2. Click "Sign Up" (free tier available)
3. After signing in, go to your [API Key page](https://api-ninjas.com/api)
4. Copy your API key

### 2. Configure Environment Variables

1. Open the `.env.local` file in the project root
2. Replace `your_key_here` with your actual API Ninjas key:
   ```
   API_NINJAS_KEY=PASTE_YOUR_ACTUAL_KEY_HERE
   ```
3. Generate a random secret for sessions:
   ```bash
   # On Mac/Linux
   openssl rand -base64 32
   
   # On Windows (PowerShell)
   -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
   ```
4. Replace the NEXTAUTH_SECRET with the generated value

### 3. Start Development

```bash
npm run dev
```

### 4. Test the Application

1. **Home Page**: http://localhost:3000
   - Should show hero section with benefits
   - Click on game cards to navigate

2. **Sudoku**: http://localhost:3000/sudoku
   - Should load a puzzle from API
   - Try filling in numbers
   - Test difficulty selector
   - Check solution validation

3. **Riddles**: http://localhost:3000/riddles
   - Should show 3 riddles
   - Click "Reveal Answer" to toggle
   - Try "Load More Riddles"

### 5. Troubleshooting

**If API calls fail:**
- Check `.env.local` has correct API_NINJAS_KEY
- Verify API key is active at API Ninjas dashboard
- Check browser console for error messages
- Ensure you're on the free tier and haven't exceeded limits

**If styles look wrong:**
- Clear browser cache
- Check Tailwind CSS is compiling (restart dev server)
- Verify `tailwind.config.js` and `postcss.config.js` exist

**If localStorage doesn't work:**
- Check browser privacy settings
- Try in incognito/private window
- Clear site data and try again

### 6. What Should Work

✅ Home page with responsive design
✅ Sudoku puzzle loads and is playable
✅ Riddles load and reveal/hide works
✅ Game state persists on page refresh
✅ Error handling shows when API fails
✅ Mobile responsive on all pages
✅ Loading states while fetching data

### 7. Next Steps

- **Add your API key** to `.env.local`
- **Test all features** listed above
- **Try on mobile** by accessing from phone on same network
- **Deploy to Vercel** when ready for production

## Production Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository on Vercel
3. Add environment variables:
   - `API_NINJAS_KEY`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set to your production URL)
4. Deploy!

Your app will be live at: `your-project.vercel.app`

---

**Need Help?**
- Check console for errors (F12 in browser)
- Review README.md for detailed documentation
- Check API Ninjas status at https://api-ninjas.com/
