# Update Instructions - Feb 8, 2026

## ✅ Fixed Issues

### 1. Title Correction
- Changed "The Rift Walker" → "Search for the Rift Walker" throughout site
- Updated: page title, nav logo, hero title, about section, footer

### 2. Removed Fabricated Content
- Cleared fake episode data from `js/data.js`
- Cleared fake dice roll moments from `js/data.js`  
- Replaced with honest placeholder comments with format examples
- **Cody can now add real data without confusion**

### 3. 3D D20 Option (OPTIONAL UPGRADE)
See below for how to add a proper 3D d20 dice instead of the emoji

---

## 📝 What You Need To Add

### Your Real Episodes

Open `js/data.js` and add your episodes to the `SAMPLE_EPISODES` array:

```javascript
const SAMPLE_EPISODES = [
    {
        id: 1,
        number: "Episode 1",
        title: "Your Actual Title",
        excerpt: "Your actual episode summary...",
        diceRoll: 14,  // The key roll from this episode
        published: "2026-01-15",  // Actual publish date
        readTime: "12 min read"
    },
    // Add all 11 episodes...
];
```

### Your Real Dice Moments

Add the critical rolls that actually happened in your story:

```javascript
const SAMPLE_ROLLS = [
    {
        episode: 1,
        encounter: "Actual encounter name",
        roll: 14,
        impact: "What actually happened in your story",
        date: "2026-01-15"
    },
    // Add your real moments...
];
```

### Your Links

In `index.html`, search for these placeholder links and replace:

**Substack Link:**
- Find: `https://substack.com`
- Replace with: Your actual Substack URL

**Footer Links:**
- Find the footer section (around line 245)
- Replace placeholder links for Twitter/X, Discord, etc.

---

## 🎲 OPTIONAL: Add 3D D20 Dice

If you want a proper 3D d20 instead of the emoji, I can create one. Two options:

### Option A: Simple CSS 3D (Recommended)
- Lightweight, no dependencies
- Animated 3D cube/icosahedron
- Rotates on click
- ~100 lines of CSS

### Option B: WebGL/Three.js 3D
- Photorealistic d20
- Physics-based rolling animation
- Requires external library (~500KB)
- More complex to maintain

**My recommendation:** Option A for now. It's 95% as cool, way lighter, and easier to customize.

Want me to build that? I can have it ready in 30 minutes.

---

## 🚀 Redeploy Steps

After you add your real data:

1. Save your changes to `js/data.js` and `index.html`
2. If you connected Netlify to git:
   - Just commit and push → auto-deploys
3. If you're manually deploying:
   - Drag the updated folder to Netlify dashboard → redeploys

---

## 📊 What Changed (Technical)

- `index.html`: All instances of "The Rift Walker" → "Search for the Rift Walker" (5 locations)
- `js/data.js`: Cleared SAMPLE_EPISODES and SAMPLE_ROLLS, added format examples as comments
- No CSS or functionality changes (everything still works the same)

The site will show empty episode/roll sections until you add real data.

---

**Questions?** Let me know what you want to tackle first:
1. Adding your episode data
2. Building the 3D d20
3. Updating links
4. Something else
