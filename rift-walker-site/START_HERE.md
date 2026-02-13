# 🎲 The Rift Walker - Companion Website

## START HERE

Welcome! You now have a complete, production-ready companion website for *The Rift Walker*.

This document will get you from "I have files" to "My site is live" in about 15 minutes.

---

## ⚡ Quick Start (5 Minutes)

### What You Have

A beautiful, fully responsive website for your Substack serial. It includes:
- ✅ Hero section with interactive d20 dice
- ✅ Episodes archive (ready for your real episodes)
- ✅ Character profiles (Ray, Riker, and Chance)
- ✅ World-building explanation
- ✅ Dice roll timeline
- ✅ Subscribe button linking to your Substack
- ✅ Beautiful dark theme with gold accents
- ✅ Mobile-responsive design
- ✅ Zero dependencies (no frameworks, just HTML/CSS/JS)

### Deploy in 2 Minutes (Recommended)

**Option 1: Drag & Drop (Easiest)**

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag the entire `rift-walker-site` folder into the Netlify dashboard
4. **Done.** Your site is live. Share the link with readers.

**Option 2: Command Line**

```bash
npm install -g netlify-cli
cd rift-walker-site
netlify deploy --prod --dir=.
```

**Option 3: GitHub Pages**

```bash
git init
git add .
git commit -m "The Rift Walker website"
git remote add origin https://github.com/YOUR_USERNAME/rift-walker-site
git push -u origin main
# Go to repo Settings > Pages, enable GitHub Pages
```

---

## 📝 Update With Your Episodes (15 Minutes)

### Step 1: Open the Data File

```
rift-walker-site/js/data.js
```

### Step 2: Find This Section

```javascript
const SAMPLE_EPISODES = [
    {
        id: 1,
        number: "Episode 1",
        title: "The Rift Opens",
        excerpt: "Ray wakes to find...",
        diceRoll: 14,
        published: "2026-02-01",
        readTime: "12 min read"
    },
    // ... more episodes
];
```

### Step 3: Replace With Your Episodes

For each real episode from your Substack:

```javascript
{
    id: 1,
    number: "Episode 1",
    title: "Your actual episode title",
    excerpt: "First paragraph or teaser from your episode",
    diceRoll: 14,  // The actual d20 roll result
    published: "2026-02-01",  // Publication date
    readTime: "14 min read"   // How long it takes to read
}
```

### Step 4: Save & Redeploy

If using Netlify with Git:
```bash
git add js/data.js
git commit -m "Update episodes"
git push
# Netlify auto-deploys
```

If using drag & drop: Upload again to Netlify.

---

## 🎨 Customize Colors (Optional - 10 Minutes)

### Dark Theme (Current)

The site uses a beautiful dark theme with:
- Deep space black backgrounds
- Purple/blue "rift" colors
- Gold accents (hope, warmth, persistence)

### To Change Colors

Open: `rift-walker-site/css/style.css`

Find this section at the top:

```css
:root {
    --primary-dark: #0a0e27;      /* Dark background */
    --rift-purple: #7c3aed;        /* Rift color 1 */
    --rift-blue: #3b82f6;          /* Rift color 2 */
    --accent-gold: #fbbf24;        /* Hope/warmth color */
}
```

Change the hex colors to what you want. Popular palettes:
- **Keep gold** - It represents the love/hope in the story
- **Change purple/blue** - If you want different rift colors
- **Keep dark** - Light backgrounds don't fit the dimensional theme

---

## 📱 Test It Works

### Desktop
1. Open `index.html` in your browser
2. Try clicking the d20 dice (or press R)
3. Scroll through the page
4. Click navigation links

### Mobile
1. Resize browser window to mobile size
2. Test hamburger menu
3. Verify all text is readable
4. Try dice rolling on touch

### Console
Press F12 and look at Console tab. Should be clean (no red errors).

---

## 📚 Documentation

If you want more details:

- **README.md** - Complete feature overview & how to use the site
- **DEPLOYMENT.md** - Detailed deployment instructions for 6+ platforms
- **PROJECT_SUMMARY.md** - Design decisions & architecture
- **PROCESS_LOG.md** - What was built, timeline, token costs (transparent!)

All files have comments inside explaining the code.

---

## 🤔 Common Questions

### "How do I add my Substack link?"

The subscribe button already links to Substack. In `index.html`, find:

```html
<a href="https://substack.com" class="subscribe-button substack" target="_blank">
```

Change `https://substack.com` to your actual Substack URL.

### "Can I change the domain?"

Yes! See DEPLOYMENT.md for custom domain instructions.

### "Can I add an image?"

Yes! Create `assets/og-image.png` (1200x630px) and reference it in `index.html` meta tags.

### "Can I add more features?"

Yes! The code is well-commented and ready to extend. Some ideas:
- Reader polls
- Character sketches
- Map of dimensions
- Dice roll statistics
- Fan art gallery

### "How do I update episodes weekly?"

Either:
1. Edit `js/data.js` and push to Git (Netlify auto-deploys), or
2. Use Netlify forms API for dynamic updates

---

## 🚀 Your Deployment Checklist

Before telling readers about the site:

- [ ] Site is deployed (Netlify/GitHub/Vercel)
- [ ] You have a URL (theriftwalk.netlify.app or custom domain)
- [ ] Real episodes added (at least 3-5)
- [ ] Substack link verified
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Dice rolling works
- [ ] Navigation is smooth
- [ ] Colors look right

**Once done:** Share the link in your Substack newsletter!

---

## 💪 You've Got This

This site was built with intention and care. Everything is ready to go.

- No coding required to launch
- Minimal coding to customize
- Fully documented for future updates
- Free to host (Netlify)
- Fast and reliable

Deploy it today. Readers will love it.

---

## 🎲 Rolling Forward

Once the site is live:

**This Week:**
- Deploy ✓
- Add real episodes ✓
- Share with readers ✓

**This Month:**
- Monitor reader feedback
- Consider RSS feed integration (auto-updates episodes)
- Add analytics (Google Analytics)

**This Year:**
- Community features (comments, polls)
- Mobile app
- Audiobook integration
- Merchandise/Patreon link

---

## 📞 Need Help?

All decisions documented:
- **How it works:** README.md
- **How to deploy:** DEPLOYMENT.md
- **Why designed this way:** PROJECT_SUMMARY.md
- **Complete process:** PROCESS_LOG.md

The site is self-contained. No external APIs or services required to launch.

---

## 🙏 Final Thoughts

This companion website was built to serve *The Rift Walker* and its readers. The design reflects the story's themes:
- A father's persistent love (gold warmth)
- Dimensional rifts (purple/blue mystery)
- Chance determining outcomes (interactive d20)
- The search continues (hero + journey)

Everything about the site serves that narrative.

Now go share it with the world.

**Roll on.** 🎲

---

**Questions? Check the README.md for more details.**

**Ready? Deploy now. Readers are waiting.**
