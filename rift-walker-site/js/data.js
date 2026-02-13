/* ============================================
   The Rift Walker - Sample Data
   Configure SUBSTACK_URL to load real episodes
   ============================================ */

// PLACEHOLDER: Add your real episodes here
// Replace with actual episode data from your Substack
// Format: { id, number, title, excerpt, diceRoll, published, readTime }
const SAMPLE_EPISODES = [
    // Example format (delete this and add your real episodes):
    // {
    //     id: 1,
    //     number: "Episode 1",
    //     title: "Your Episode Title",
    //     excerpt: "Your episode summary here...",
    //     diceRoll: 14,  // The key roll from this episode
    //     published: "2026-02-01",
    //     readTime: "12 min read"
    // },
];

// PLACEHOLDER: Add your real dice roll moments here
// These are the critical rolls that changed the story
// Format: { episode, encounter, roll, impact, date }
const SAMPLE_ROLLS = [
    // Example format (delete this and add your real moments):
    // {
    //     episode: 1,
    //     encounter: "Name of the encounter/moment",
    //     roll: 14,
    //     impact: "What happened because of this roll",
    //     date: "2026-02-01"
    // },
];

// Configuration for Substack integration
const CONFIG = {
    SUBSTACK_URL: null, // Set to actual Substack URL to load real episodes
    RSS_FEED_URL: null, // Set to RSS feed URL for live updates
    USE_SAMPLE_DATA: true // Use sample data if no real data available
};

// Fetch real episodes from Substack (requires CORS-friendly endpoint)
async function fetchSubstackEpisodes() {
    if (!CONFIG.SUBSTACK_URL) {
        console.log("SUBSTACK_URL not configured. Using sample data.");
        return SAMPLE_EPISODES;
    }
    
    try {
        // This would need a backend proxy or CORS-enabled endpoint
        // For now, we'll use sample data as a fallback
        return SAMPLE_EPISODES;
    } catch (error) {
        console.error("Error fetching Substack episodes:", error);
        return SAMPLE_EPISODES;
    }
}

// Function to render episodes to the DOM
async function renderEpisodes() {
    const episodes = CONFIG.USE_SAMPLE_DATA ? SAMPLE_EPISODES : await fetchSubstackEpisodes();
    const container = document.getElementById('episodes-grid');
    
    if (!container) return;
    
    container.innerHTML = episodes.map(episode => `
        <div class="episode-card" onclick="window.open('#episodes', '_self')">
            <div class="episode-number">${episode.number}</div>
            <h3 class="episode-title">${episode.title}</h3>
            <p class="episode-excerpt">${episode.excerpt}</p>
            <div class="episode-meta">
                <span class="episode-dice">🎲 ${episode.diceRoll}</span>
                <span>${episode.readTime}</span>
            </div>
        </div>
    `).join('');
}

// Function to render dice rolls timeline
async function renderRolls() {
    const container = document.getElementById('rolls-timeline');
    if (!container) return;
    
    container.innerHTML = SAMPLE_ROLLS.map(roll => `
        <div class="roll-entry">
            <h3>${roll.encounter}</h3>
            <div class="roll-result">🎲 ${roll.roll}</div>
            <p>${roll.impact}</p>
            <p style="font-size: 0.85rem; color: var(--text-tertiary); margin-top: 1rem;">
                Episode ${roll.episode} • ${new Date(roll.date).toLocaleDateString()}
            </p>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderEpisodes();
    renderRolls();
    
    // Set latest episode info
    const latestEpisode = SAMPLE_EPISODES[SAMPLE_EPISODES.length - 1];
    const latestTitle = document.getElementById('latest-title');
    const latestSummary = document.getElementById('latest-summary');
    
    if (latestTitle) latestTitle.textContent = latestEpisode.title;
    if (latestSummary) latestSummary.textContent = latestEpisode.excerpt;
});

// Export for use in other modules
window.riftWalkerData = {
    episodes: SAMPLE_EPISODES,
    rolls: SAMPLE_ROLLS,
    config: CONFIG,
    fetchSubstackEpisodes,
    renderEpisodes,
    renderRolls
};
