# Netlify Pricing Analysis for Quick Affordable Sites Business
**Created:** Feb 10, 2026 (5:51 PM CST)
**Status:** For Cody's review after training

---

## Current Situation
- **Plan:** Pro ($20/month)
- **Monthly Credits:** 3,000
- **What Happened:** Burned through 300 free credits on landing page iterations
- **Reason:** Each production deploy = 15 credits × ~20 deploys = 300 credits

---

## Netlify Credit Pricing (2026)

### Plans
| Plan | Cost/Month | Monthly Credits | Extra Credits Available |
|------|-----------|-----------------|------------------------|
| Free | $0 | 300 | Hard limit, none |
| Personal | $9 | 1,000 | 500 for $5, or 1,500 for $10 |
| Pro | $20 | 3,000 | 500 for $5, or 1,500 for $10 |

### What Consumes Credits

**PER PRODUCTION DEPLOY:** 15 credits
- Each time you push a site live to production
- Each revision/update = 1 deploy = 15 credits
- Deploy previews/branch deploys = FREE (doesn't count)

**MONTHLY TRAFFIC (ongoing per site):**
- **Bandwidth:** 10 credits per GB downloaded
- **Web Requests:** 3 credits per 10,000 requests
- **Form Submissions:** 1 credit each (if added later)

**WHAT DOESN'T COUNT:**
- Deploy previews (free, for your testing)
- Branch deploys (free, for experimenting)
- Failed deploys (free, no cost)

---

## Business Model Impact

### Cost Per Site Build

**Tier 1 ($150 revenue):** 
- 1 deploy (initial build) = 15 credits
- Total cost: ~15 credits per site

**Tier 2 ($300 revenue):**
- 2 deploys (initial + 1 revision included) = 30 credits
- Total cost: ~30 credits per site

### Monthly Traffic Cost Per Site (Once Live)

**Small food truck sites (100-500 monthly visitors):**
- ~1,000 requests/month = 0.3 credits
- ~50 MB bandwidth = negligible
- **Total traffic cost per site per month: ~1-2 credits**

This is VERY cheap. A food truck website isn't streaming video or heavy media.

---

## Cost Scenarios for QAS Business

### Scenario 1: 10 Sites/Month at Tier 2 (Best Case)

```
Sites built: 10
Cost per site: 30 credits (2 deploys × 15)
Build cost: 10 × 30 = 300 credits
Traffic cost: 10 sites × 2 credits = 20 credits
TOTAL MONTHLY CREDITS USED: 320 credits

Netlify cost: $20/month (within 3,000 Pro credits)
Revenue: 10 × $300 = $3,000
Profit: $3,000 - $20 = $2,980/month
```

**Verdict:** Very profitable. Plenty of headroom.

---

### Scenario 2: 20 Sites/Month (Growth Case)

```
Sites built: 20
Cost per site: 30 credits
Build cost: 20 × 30 = 600 credits
Traffic cost: 20 × 2 = 40 credits
TOTAL MONTHLY CREDITS USED: 640 credits

Netlify cost: $20/month (still within 3,000)
Revenue: 20 × $300 = $6,000
Profit: $6,000 - $20 = $5,980/month
```

**Verdict:** Extremely profitable. Could do 50+ sites/month before needing auto-recharge.

---

### Scenario 3: 50+ Sites/Month (If It Happens)

```
Sites built: 50
Cost per site: 30 credits
Build cost: 50 × 30 = 1,500 credits
Traffic cost: 50 × 2 = 100 credits
TOTAL MONTHLY CREDITS USED: 1,600 credits

Netlify cost: $20/month (still within 3,000!)
Revenue: 50 × $300 = $15,000
Profit: $15,000 - $20 = $14,980/month
```

**Verdict:** At 50 sites/month, still completely within 3,000 credits. No overage fees needed.

---

### Scenario 4: When Auto-Recharge Actually Kicks In

To trigger auto-recharge and buy extra credits:

```
Monthly sites needed: ~150+ sites
Credits used: 150 × 30 = 4,500 credits
Overage: 4,500 - 3,000 = 1,500 extra credits needed
Cost: 1,500 credits = $10 (automatic charge via auto-recharge)

Total monthly cost: $20 + $10 = $30
Revenue: 150 × $300 = $45,000
Profit: $45,000 - $30 = $44,970/month
```

**Verdict:** At 150 sites/month, you'd pay $10 extra. Still 99.98% margin.

---

## What Drained the Initial 300 Credits

You burned through the free 300 credits by rebuilding QAS landing page repeatedly during development:

```
Each iteration of QAS landing page = 1 production deploy = 15 credits
300 ÷ 15 = 20 possible deploys
We probably did 15-20+ iterative deploys before finalizing
```

**Why it happened:**
- Cody sent feedback → Kai deployed → Cody reviewed → repeat
- Each deploy costs 15 credits
- No way to avoid this in development cycle

**How to minimize this going forward:**
- Use **deploy previews** (free) for client review before final production deploy
- Only do 1 final production deploy after approval
- Reduces cost from 15+ deploys → 1 deploy per site

---

## Revised Model Going Forward

**Development:** 
- Use deploy previews (FREE) for client feedback
- Once approved: 1 final production deploy = 15 credits per site

**Tier 1:** $150 = 1 deploy (15 credits)
**Tier 2:** $300 = 2 deploys max (30 credits) - initial + 1 revision

---

## Bottom Line

**Pro plan ($20/month, 3,000 credits) handles:**
- ✅ Up to 100 sites/month without overages
- ✅ Up to 200 sites/month with only $10 extra ($30 total/month)
- ✅ Extremely cheap per-site cost (15-30 credits = $0.10-0.20 per site)
- ✅ Traffic costs negligible for small food truck/service sites

**The business model is VERY healthy from a Netlify cost perspective.**

The real limiting factor is sales/client acquisition, not Netlify costs.

---

## Action Items

1. **Keep auto-recharge OFF** (default) until you hit 3,000 credits used
2. **Use deploy previews** during development (free testing)
3. **Only final deploys count** toward the 15-credit cost
4. **Monitor dashboard** monthly at: app.netlify.com/teams/~/billing/

If you hit 3,000 credits in a month = celebrate, you've built 100+ sites and made $30k+

At that point, the $10 overage is negligible compared to revenue.

---

**TL;DR:** You can build 50+ sites/month and still only pay $20. You won't hit auto-recharge charges until you're doing 150+ sites/month. The business model is financially sound on hosting costs alone.