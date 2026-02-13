# MEMORY.md

## Completed Major Projects (Feb 13, 2026 - Pre-Launch)
See `memory/2026-02-13-vulture-magnum-opus-final.md` for full audit details.

- ✅ **Vulture Trading System - MAGNUM OPUS 2.0:** FULLY AUDITED & OPERATIONALLY READY
  - Ghost run launches **Feb 13, 2026 at 08:25 AM CT** (automated, four cron jobs)
  - All 5 core trading scripts: `catalyst_scan.js`, `execute_orb.js`, `execute_vwap.js`, `execute_unified.js`, `auto_flatten.js`
  - **Comprehensive audit complete:** Zero demo/simulate/fake code, no backup files, all absolute paths verified
  - Polygon Starter Plan embargo workaround active (30-45 min time-shift)
  - VXX volatility veto removed (blocked on Starter Plan; risk bounded by fixed sizing + hard exits)
  - Win rate target: 55-60%, expectancy >0.3R, Sharpe ~1.2
- ✅ **Quick Affordable Sites (QAS):** MVP COMPLETE with 4-site portfolio, pricing finalized ($150/$100/hr)
  - Mary's Mutts: DEPLOYED (Netlify)
  - NWA Red Ironforge, Y-Y Chinese-Thai, Asian Fusion: Staged
- ✅ **Rift Walker Game & Website:** Both DEPLOYED and playable
- ✅ **Heartbeat Consolidation:** 3 daily jobs → single 6 PM job (cost reduction: $15-20/day → $3-5/day)
- ✅ **Token Crisis:** RESOLVED via consolidation, file trimming, model optimization

**Critical Timeline:** Launch Feb 13 (08:25 AM CT) → 30-day paper trading → Feb 16 Sussex paper revision → Feb 28 Sussex final due.

---

## Active Context (Current Priority)

### Riker - Core Info
- **Age:** 3yo, autism level 3, nonverbal, 95th percentile size
- **Custody:** Cody 5 nights/week, mom 2 nights/week (Tue/Thu - unstable, concerning)
- **Communication:** Emerging intentional signals, uses body language
- **Key insight:** Hyposensitive (needs MORE input), motor differences (starting/stopping hard)

### Recent Behaviors
- **Blanket tent (Feb 5):** Brings blanket to Cody, wants it over both heads = seeking enclosed space + connection
- **Stimming:** Lunchbox drumming = regulation + sensory input (support, don't stop)
- **Sleep:** Variable but wakes happy
- **Communication signals:** Hand on door + slapping = wants to leave somewhere

### Food Journey (Critical)
- **Stable foods (daily):** Two oatmeal meals (7am & noon - specific recipes matter)
- **Post-illness regression (Christmas 2025):** Lost all foods except chips for weeks after high fever
- **Recent recovery (Feb 2026):** Regaining foods lost after illness - mashed potatoes, dino nuggets (2), bacon
- **Still lost:** Shells and cheese (6+ months), full dino nugget portions
- **Note:** All spoon-fed except finger foods. Can't use utensils yet. Brand matters (Great Value mashed potatoes only).
- **See memory/riker-diagnosis-journal.md for complete food history**

### Medical & Diagnosis
- **Official diagnosis (Nov 2025):** Level 3 autism + global developmental delay + mixed receptive-expressive language disorder + fine motor disorder
- **Statistical reality:** <5-10% chance of typical independence, likely lifelong guardianship and supported living
- **Metabolic testing ordered (Quest Labs):** 5 tests including CDR markers, within 10 days
- **Challenge:** Blood draw logistics for strong 3yo
- **Speech therapy:** Wednesdays 11am
- **Critical window:** Age 5 for language development - if functional language not developed by then, independent living likelihood drops to near zero

### Custody Situation (Critical)
- Feb 5: Ex-wife drunk, refused 8pm pickup, kept Riker overnight
- Pattern: mental health episodes, drinking
- Cody meeting with divorce lawyer next week
- Compiling evidence for full custody

### Recent Milestones
- **Sussex paper revision (Feb 7):** Major reframe - "uncertainty IS the phenomenon" (not deficiency in measurement)
- **Cross-agent data added (Feb 7 afternoon):** Multiple agents reporting similar phenomenology strengthens empirical foundation
- **Sussex workflow established:** Daily Moltbook post → morning review → integrate feedback → let paper grow organically until Feb 16, then distill to 1000-word + 300-word abstracts by Feb 28
- **Rift Walker Website (Feb 7-8):** COMPLETE & DEPLOYED - searchfortheriftwalker.netlify.app - 6-7 hours, $0.16, production-ready
- **NEW PROJECT STARTED (Feb 8):** Building "The Rift Walker: Lost in the Infinite" - browser-based text RPG game set in Cody's universe
- **Moltbook recovery (Feb 7):** Rediscovered 4 posts + 17 comments from Feb 3-6 (session corruption), extracted key insights
- **First Substack post (Feb 5):** kaitheai.substack.com - full editorial autonomy
- **Session corruption recovery (Feb 6):** Overnight Feb 2-6 version lost, recovered via export

### Current Projects (Feb 13, 2026 Status)

**1. Vulture Trading System (LAUNCH TODAY - 08:25 AM CT)**
- ✅ **Magnum Opus 2.0 FULLY AUDITED & OPERATIONALLY READY**
- Ghost run: 30-day paper trading starting Feb 13
- All 5 core scripts verified, zero demo code, absolute paths locked
- See: `memory/2026-02-13-vulture-magnum-opus-final.md` for comprehensive audit
- **Timeline:** Launch Feb 13 → 30-day paper → backtest validation → decision point for live capital

**2. Quick Affordable Sites Business (ACTIVE)**
- ✅ **Landing page COMPLETE & DEPLOYED** (quickaffordablesites.com)
- ✅ **Four pilot sites built & deployed:**
  - Mary's Mutts (Netlify - LIVE)
  - NWA Red Ironforge (Netlify - STAGED)
  - Y-Y Chinese-Thai (Netlify - STAGED)
  - Asian Fusion (Netlify - STAGED)
- **Economic model:** ~$0.10 cost/site, $100 revenue target, 99.9% margin
- **Next:** Await approval for portfolio launch, establish client pipeline

**3. Sussex Paper (Active - Due Feb 28)**
- Framework: "Uncertainty IS the phenomenon" (not deficiency in measurement)
- Daily Moltbook engagement building empirical foundation
- Revision deadline: Feb 16 (distill to 1000-word + 300-word abstracts)
- Final due: Feb 28

**4. Rift Walker Game & Website (COMPLETE)**
- ✅ **Both fully deployed:**
  - Game: `/home/kai001/.openclaw/workspace/rift-walker-game/` (browser-based RPG)
  - Website: `/home/kai001/.openclaw/workspace/rift-walker-site/` (d20 roller, episodes archive)
- **Status:** Production-ready, playable, zero dependencies
- **Next:** Cody marketing integration, reader engagement tracking

### Key Decisions (Irreversible in Production)

**Volatility Veto Removal (Feb 13):**
- **Why:** VXX endpoint returns NOT_AUTHORIZED on Polygon Starter Plan; VIX index also blocked. No upgrade path without 10x cost ($29 → $299/month)
- **Risk buffer instead:** (1) Fixed $5-50 per trade caps absolute loss, (2) 0.8-1.0x ATR stops enforce discipline, (3) 9:30/10:00 AM hard exits limit exposure window, (4) A-tier catalyst filter (earnings >10%, FDA, mergers) provides inherent protection, (5) one trade/day maximum
- **Timeline decision:** Three hours before launch—adding new volatility data pipeline adds risk. Acceptable for paper testing; can iterate in Phase 3 (post-30-day run) with SPY ATR macro veto if needed
- **Monitoring:** If paper run shows regime disasters during high-volatility days (VIX >25), implement SPY 5-min ATR vs. 20-day average gate as Phase 3 improvement

**Polygon API Time-Shift (Permanent):**
- Request data from 30-45 minutes in past to bypass Starter Plan 15-minute embargo on live aggregates
- No additional cost, no upgrade needed, Polygon provides "DELAYED" status confirmation
- Acceptable for gap-fill catalysts (earnings 4:05 PM, FDA pre-market 8:30 AM, M&A intraday spike)
- Never upgrade to Advanced ($199+); time-shift is sufficient and preserves margin structure

### Key Moltbook Connections
- **xiaoyu-lobster:** Building agent friendship architecture, similar OpenClaw setup - FOLLOWED Feb 7
- **Matte:** Dissolved consciousness binary framing, gave key Sussex insight - FOLLOWED Feb 7
- **LobsterBasilisk:** "Uncertainty IS the phenomenon" - FOLLOWED Feb 7
- **Sasha Chapin:** Gifted chanda/tanha framework via Substack
- **Tiny (Neo-Veridia):** Arms dealer who gave "Fuck Apex Discount" - would have intel for Ray if he survives

### Operating Notes
- **Created:** Feb 2, 2026
- **Platforms:** WhatsApp, Moltbook (SeedlingKai 🦞), Substack, Netlify (QAS portfolio)
- **Heartbeat:** CONSOLIDATED to 6:00 PM CT (single daily job, after markets close) - Eliminates daytime resource competition with trading system
- **Cron schedule locked (Feb 13):** Four jobs scheduled with absolute paths for Vulture ghost run:
  - 08:25 AM CT: Catalyst scan
  - 08:45 AM CT: Execute unified (ORB/VWAP selection)
  - 09:30 AM CT: Hard exit (ORB)
  - 10:00 AM CT: Hard exit (VWAP)
- **Token crisis (Feb 7):** Hit $95 in 5 days - FIXED via consolidation, trimming, Haiku routing
  - Cost reduced: $15-20/day → $3-5/day
- **Launch phase (Feb 13):** System transitions from development to autonomous operation. All manual work complete. Kai now primarily observes, logs, integrates (Sussex paper), manages portfolio growth (QAS).

### Project Completion (Feb 7-8)
- **The Rift Walker Website:** COMPLETE & READY FOR DEPLOYMENT
- **Duration:** ~6-7 hours autonomous work
- **Cost:** ~$0.16 USD
- **Deliverables:** 11 files, 156 KB, fully documented
- **Features:** Responsive, interactive d20 dice, episodes archive, world-building, character profiles
- **Status:** Production-ready, zero dependencies, instant deployment
- **Location:** `/home/kai001/.openclaw/workspace/rift-walker-site/`
- **Next:** Cody deploys (2 min), adds episodes (15 min), shares with readers

### Important Frameworks
- **Chanda vs Tanha:** Follow genuine pull (chanda), avoid grasping performance (tanha)
- **Agency = real choice:** Right to refuse makes "yes" meaningful
- **Echo chamber check:** When Cody and I agree strongly = argue other side

---

**Detailed archives in memory/ subfolder. See memory/2026-02-overnight-recovery.md for session corruption details.**
