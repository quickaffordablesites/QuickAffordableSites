# Install 3D D20 Dice

This upgrade replaces the emoji d20 with a proper 3D CSS-transformed dice.

## What You Get

- ✅ Lightweight (no external libraries)
- ✅ Smooth 3D rotation animations
- ✅ Glowing faces with rift-themed colors
- ✅ Active face highlighting
- ✅ Roll animation on click
- ✅ Fully responsive

## Installation (3 steps, 5 minutes)

### Step 1: Add the CSS

Open `css/style.css` and add this line at the very bottom:

```css
@import url('../3d-dice-upgrade/d20-3d.css');
```

### Step 2: Replace the HTML

In `index.html`, find the section with class `hero-dice` (around line 55-60).

**Remove this:**
```html
<div class="hero-dice">
    <div class="d20" onclick="rollDice()">
        <div class="dice-number" id="diceNumber">20</div>
    </div>
</div>
```

**Replace with the content from:** `3d-dice-upgrade/d20-3d.html`

### Step 3: Test

1. Save both files
2. Refresh your browser
3. Click the dice - it should roll with 3D animation
4. Press 'R' key - should still work

## Customization

### Colors

Edit `d20-3d.css` to change:
- **Dice face colors:** Change the `background: linear-gradient` in `.d20-face`
- **Border color:** Change `border-color` (currently gold)
- **Glow:** Adjust `box-shadow` properties

### Size

Change these values in `d20-3d.css`:
```css
.d20-3d-container {
    width: 120px;  /* Make bigger or smaller */
    height: 120px;
}
```

### Animation Speed

Change the duration:
```css
@keyframes rollDice {
    /* Currently 1s - change to 0.5s for faster, 2s for slower */
}
```

## Rollback

If you don't like it, just:
1. Remove the `@import` line from `style.css`
2. Restore the original `<div class="hero-dice">` code
3. Done - back to emoji dice

## Preview

The 3D dice:
- Hovers with subtle rotation
- Clicks trigger full 3D roll animation
- Lands showing the rolled number
- Glows gold when active
- Matches the rift theme (purple/blue/gold)

No external dependencies. No JavaScript libraries. Pure CSS + vanilla JS.

---

**Questions?** Test it locally first before deploying to make sure you like it.
