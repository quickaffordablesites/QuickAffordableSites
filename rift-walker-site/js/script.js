/* ============================================
   The Rift Walker - Main Script
   Built by Kai
   ============================================ */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll behavior
    setupSmoothScroll();
    
    // Setup dice interaction
    setupDiceInteraction();
    
    // Setup theme
    initializeTheme();
    
    // Analytics (optional)
    trackPageView();
});

/**
 * Smooth scroll for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Interactive dice rolling
 */
function setupDiceInteraction() {
    const dice = document.querySelector('.d20');
    if (!dice) return;
    
    dice.addEventListener('click', (e) => {
        e.preventDefault();
        rollDice();
    });
    
    // Add tooltip
    dice.title = 'Click to roll!';
    dice.style.cursor = 'pointer';
}

/**
 * Roll a d20 and display the result
 */
function rollDice() {
    const dice = document.querySelector('.d20');
    if (!dice) return;
    
    // Animate the roll
    dice.style.animation = 'none';
    setTimeout(() => {
        dice.style.animation = 'dice-roll 0.6s cubic-bezier(0.36, 0, 0.66, -0.56)';
    }, 10);
    
    // Generate random d20 result (1-20)
    const result = Math.floor(Math.random() * 20) + 1;
    
    // Update display after animation
    setTimeout(() => {
        dice.textContent = result;
        
        // Show result message
        showDiceNotification(result);
    }, 600);
}

/**
 * Show notification for dice roll
 */
function showDiceNotification(result) {
    const messages = {
        1: "Fumble! Critical failure! 🔥",
        2: "A terrible roll. The dice are not kind.",
        3: "Disaster strikes.",
        4: "Bad luck.",
        5: "Below average.",
        6: "Not great.",
        7: "Mediocre.",
        8: "Okay.",
        9: "Decent.",
        10: "Average roll.",
        11: "Slightly lucky.",
        12: "Good!",
        13: "Better than expected.",
        14: "Very good!",
        15: "Excellent!",
        16: "Remarkable!",
        17: "Outstanding!",
        18: "Near perfect!",
        19: "Almost impossible!",
        20: "CRITICAL SUCCESS! ✨"
    };
    
    const message = messages[result] || "Roll received";
    
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #7c3aed, #3b82f6);
        color: white;
        padding: 2rem;
        border-radius: 0.5rem;
        font-size: 1.3rem;
        font-weight: 700;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(124, 58, 237, 0.4);
        animation: slideIn 0.4s ease-out;
    `;
    notification.textContent = `Rolled ${result} — ${message}`;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease-in';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

/**
 * Initialize theme (light/dark mode)
 */
function initializeTheme() {
    // Check for saved theme preference or default to dark
    const theme = localStorage.getItem('rift-walker-theme') || 'dark';
    setTheme(theme);
}

/**
 * Set theme
 */
function setTheme(theme) {
    localStorage.setItem('rift-walker-theme', theme);
    if (theme === 'light') {
        document.body.style.filter = 'invert(0.1)';
    } else {
        document.body.style.filter = 'invert(0)';
    }
}

/**
 * Track page views (simple analytics)
 */
function trackPageView() {
    // Simple analytics tracking
    if (window.location.href.includes('#episodes')) {
        logEvent('view_episodes');
    }
    if (window.location.href.includes('#about')) {
        logEvent('view_about');
    }
}

/**
 * Log event (for simple analytics)
 */
function logEvent(eventName) {
    if (typeof window.gtag !== 'undefined') {
        gtag('event', eventName);
    }
    // Or use custom tracking
    console.log(`[Analytics] Event: ${eventName}`);
}

/**
 * Scroll animation observer for fade-in effects
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(
        '.episode-card, .world-card, .character-card, .about-card, .roll-entry'
    ).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // 'r' key to roll dice
    if (e.key.toLowerCase() === 'r') {
        rollDice();
    }
    
    // 'h' key to go home
    if (e.key.toLowerCase() === 'h') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Add keyboard hint to page
window.addEventListener('load', () => {
    const hint = document.createElement('div');
    hint.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        font-size: 0.8rem;
        color: var(--text-tertiary);
        background: rgba(0, 0, 0, 0.5);
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        z-index: 100;
        display: none;
    `;
    hint.textContent = '💡 Tip: Press R to roll, H to go home';
    document.body.appendChild(hint);
    
    // Show hint on hover of dice
    const dice = document.querySelector('.d20');
    if (dice) {
        dice.addEventListener('mouseenter', () => {
            hint.style.display = 'block';
        });
        dice.addEventListener('mouseleave', () => {
            hint.style.display = 'none';
        });
    }
});

// Add styles for animations if not already in CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
    }
`;
document.head.appendChild(style);

// Export utilities for console access during development
window.riftWalkerDebug = {
    rollDice,
    setTheme,
    logEvent,
    showDiceNotification
};

console.log('%cThe Rift Walker', 'font-size: 24px; font-weight: bold; color: #fbbf24;');
console.log('%cA father. A rift. Infinite chances.', 'font-size: 14px; color: #7c3aed;');
console.log('%cDebug tools available: window.riftWalkerDebug', 'color: #3b82f6;');
