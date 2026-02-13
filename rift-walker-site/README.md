# The Rift Walker - Companion Website

**A beautiful, interactive companion website for Cody Sigmon's "The Rift Walker" LitRPG web serial.**

Built with intention. Guided by d20 rolls. Created by Kai.

---

## 🌍 Overview

This is a standalone website for **The Rift Walker**, a LitRPG web serial about a father named Ray searching across dimensions for his son, Riker. The story is written by Cody Sigmon and published weekly on Substack, with real d20 dice rolls determining outcomes.

### Key Features

- **Beautiful, responsive design** inspired by the dimensional-crossing narrative
- **Episode archive** with d20 roll history
- **Character profiles** for Ray, Riker, and the world they inhabit
- **Dice roll interactivity** - click or press 'R' to roll a d20 and get a narrative response
- **World-building section** explaining the core mechanics and themes
- **Substack integration ready** - configure to pull live episodes
- **Dark theme** optimized for readability and atmosphere
- **Mobile-responsive** - works beautifully on all devices

---

## 🎲 Design Decisions

### Aesthetic

The design embraces the thematic elements of The Rift Walker:

1. **Dark theme with dimensional energy** - The background uses gradients inspired by rifts between dimensions (purple/blue gradients)
2. **Dice rolls as core UI element** - The d20 is animated and interactive, reflecting how the story is shaped by chance
3. **Gold accents** - Warm, hopeful color representing the love and persistence at the story's heart (Ray's search for Riker)
4. **Typography** - Clean, modern fonts for readability; hero text uses gradient to capture the rift theme
5. **Animations** - Subtle but meaningful (dice rolls, hover effects, scroll animations)

### Technical Approach

- **Static HTML/CSS/JS** - Fast, lightweight, no backend required for basic functionality
- **Responsive grid layouts** - Episodes, characters, and world sections adapt to all screen sizes
- **Accessibility** - Semantic HTML, readable color contrast, keyboard navigation (R to roll, H to go home)
- **Performance** - No external dependencies, minimal JavaScript, instant load times
- **Scalability** - Easy to add real Substack episodes, RSS feeds, or other integrations

### Feature Priorities

1. **Episode archive first** - The story is the main attraction
2. **World-building information** - Help new readers understand the d20 mechanics and setting
3. **Character presence** - Introduce Ray, Riker, and the thematic core
4. **Interactivity** - Make the d20 central and fun
5. **Newsletter integration** - Easy subscription path to Substack

---

## 📁 File Structure

```
rift-walker-site/
├── index.html              # Main page
├── css/
│   └── style.css          # All styling (3000+ lines, fully responsive)
├── js/
│   ├── data.js            # Episode data & Substack integration
│   └── script.js          # Interactivity (dice rolls, menu, animations)
├── assets/                 # Images, icons (currently using emoji)
├── episodes/               # Episode content (optional subdirectory)
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment instructions
└── config.json            # Configuration template
```

---

## 🚀 Quick Start

### Local Development

1. **Clone/extract this directory:**
   ```bash
   cd rift-walker-site
   ```

2. **Start a simple HTTP server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   
   # Or any other static server
   ```

3. **Open in browser:**
   - http://localhost:8000

### Configuration

Edit `js/data.js` to customize:

```javascript
const CONFIG = {
    SUBSTACK_URL: "https://yourname.substack.com",      // Your Substack URL
    RSS_FEED_URL: "https://yourname.substack.com/feed",  // RSS feed
    USE_SAMPLE_DATA: true                                 // Use demo data initially
};
```

---

## 🔧 Integration Options

### 1. **Substack RSS Feed (Recommended)**
The easiest integration method:

```javascript
// In js/data.js
CONFIG.RSS_FEED_URL = "https://yourname.substack.com/feed";
```

Then modify the `fetchSubstackEpisodes()` function to parse RSS.

### 2. **Direct Substack API (If Available)**
If Substack provides an API endpoint, create a proxy endpoint and configure:

```javascript
CONFIG.SUBSTACK_URL = "https://api-proxy.example.com/substack/yourname";
```

### 3. **Manual Content Updates**
Add episodes directly to `SAMPLE_EPISODES` in `js/data.js`:

```javascript
{
    id: 7,
    number: "Episode 7",
    title: "Your Title Here",
    excerpt: "Your excerpt here",
    diceRoll: 15,
    published: "2026-03-15",
    readTime: "14 min read"
}
```

---

## 🎮 Interactive Features

### Dice Rolling
- **Click the animated d20** in the hero section, or
- **Press the 'R' key** anywhere on the page
- Results show narrative interpretations based on the roll (1-20)

### Navigation
- **Smooth scrolling** for all anchor links
- **Mobile hamburger menu** on small screens
- **Keyboard shortcuts:**
  - `R` - Roll the d20
  - `H` - Go to home/top of page

### Animations
- **Scroll-triggered fades** for cards and sections
- **Hover effects** on interactive elements
- **Gradient animations** on text elements
- **Dice rotation** animation

---

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop:** 1200px
- **Tablet:** 768px
- **Mobile:** 480px

All layouts, fonts, and spacing adapt intelligently to screen size.

---

## 🎨 Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-dark: #0a0e27;      /* Main background */
    --rift-purple: #7c3aed;        /* Rift color 1 */
    --rift-blue: #3b82f6;          /* Rift color 2 */
    --accent-gold: #fbbf24;        /* Accent/hope color */
    --text-primary: #f0f4f8;       /* Main text */
}
```

### Fonts

The site uses system fonts for speed. To use custom fonts:

1. Add font imports to `css/style.css`
2. Update the `font-family` property in the `body` rule

### Episodes Per Page

In `css/style.css`, adjust the grid:

```css
.episodes-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
```

Change `300px` to show more/fewer episodes per row.

---

## 📊 Analytics & Tracking

The site includes hooks for:

- **Google Analytics** (optional)
- **Custom event logging** via `logEvent()`
- **Console debug tools** accessible via `window.riftWalkerDebug`

Currently uses simple console logging. To integrate Google Analytics:

```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

---

## 🚢 Deployment

See `DEPLOYMENT.md` for detailed instructions on deploying to:
- **GitHub Pages** (free, recommended)
- **Netlify** (free with auto-deployment)
- **Vercel** (free for static sites)
- **Your own server** (VPS, shared hosting)
- **Cloudflare Pages** (free, fast)

Quick deploy to Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

---

## 🔍 SEO & Meta Tags

The site includes:
- ✅ Descriptive meta tags
- ✅ Open Graph image tags (configure og-image.png)
- ✅ Semantic HTML
- ✅ Responsive viewport
- ✅ Structured content

To improve SEO:
1. Add `og-image.png` to `/assets/`
2. Customize meta descriptions in `index.html`
3. Set up a sitemap and robots.txt
4. Submit to Google Search Console

---

## 🤝 Contributing

This companion site is designed to be maintained alongside the Substack serial. To update:

1. **Add new episodes** to `SAMPLE_EPISODES` in `js/data.js`
2. **Update character info** in the Characters section of `index.html`
3. **Add world-building** to the World section
4. **Keep the design consistent** with the established aesthetic

---

## 📝 License

This website is built for **The Rift Walker** by Cody Sigmon. 

Design and build by Kai, February 2026.

---

## 🙏 Credits

- **Story:** Cody Sigmon
- **Design & Build:** Kai
- **Philosophy:** Let go of control, let the story become what it becomes.

---

## 🐛 Troubleshooting

**Episodes not showing:**
- Check that `renderEpisodes()` is called in `js/data.js`
- Verify `SAMPLE_EPISODES` has data
- Check browser console for errors

**Dice roll not working:**
- Ensure JavaScript is enabled
- Check that `.d20` element exists in HTML
- Look for errors in console via `window.riftWalkerDebug`

**Responsive design looks broken:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that CSS media queries are loading
- Test in Chrome DevTools device emulation

**Substack integration not working:**
- Verify `CONFIG.RSS_FEED_URL` is correct
- Check for CORS issues (may need backend proxy)
- Look for fetch errors in console

---

## 📧 Questions?

This site was built with intention and care. If you have questions about the design, customization, or deployment, refer to `DEPLOYMENT.md` or the inline comments in the code.

**Roll on.** 🎲
