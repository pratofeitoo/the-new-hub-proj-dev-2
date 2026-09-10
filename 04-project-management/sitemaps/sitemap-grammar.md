# Sitemap Grammar — Locked Spec (clone of image-1.png)

> Both specimens must obey this or the toe-to-toe comparison fails.

## Visual Tokens

| Element | Color | Hex | Use |
|---|---|---|---|
| Home | Pink | #F48FB1 | Single root |
| Top bar (disconnected) | Pink | #F48FB1 | My Account, Login, Create, Social |
| Shop lane | Teal | #80CBC4 | Transactional / Performance / Clients |
| Classifieds lane | Blue | #81D4FA | Talent/Vaga + Supply discovery |
| Sell lane | Olive/Grey | #BCAAA4 | Seller/Supplier onboarding & fulfillment |
| About lane | Purple | #CE93D8 | Institutional, glossary, nodes |
| Support lane | Salmon | #FFAB91 | Governance, ROI, integrations, help |
| Blog lane | Lavender | #D1C4E9 | Community / Academy content |
| Gate diamond | Yellow | #FFE082 | Auth / approval decision → Email Sent or next page |
| Terminal | Dark olive/blue | #A1887F / #90CAF9 | Email Sent, Checkout |

## Structure Rules

1. **Single Home** top-center. All lanes branch from Home at level 1.
2. **Depth 3-4 max.** If a wiki tab has 73 indicators, collapse to `Product List → Detail`; don't draw 73 boxes.
3. **Yellow gate** only where system asks `Logged In?` or `Post Approved?`. HUB equivalent: `Consent valid? (N24)`, `Role = Gestor?`.
4. **Vertical stack** for Support/About lanes (as in image: About Us → Testimonials → Glossary).
5. **Emails are leaves:** `Confirmation Email Sent`, `Rejected Post Email Sent` — never branch further.
6. **No new lane** without meeting approval. If a candidate doesn't fit 6 lanes, mark `orphan` in mapping CSV.

## Mapping Quick Reference

| Candidate from A or B | Which Lane? | Test |
|---|---|---|
| Performance scorecard, margem, KPI detail | Shop (teal) | "Does it transact or show money?" → Yes = Shop |
| Vaga, skill matching, supplier discovery | Classifieds (blue) | "Is it a listing to browse/apply/post?" → Yes = Classifieds |
| Demand creation, supplier onboarding, contract | Sell (olive) | "Is it supply-side creating/listing?" → Yes = Sell |
| Concept, node dictionary, research thesis | About (purple) | "Is it explanatory/institutional?" → Yes = About |
| Help, governance, ROI, integrations, RACI, dashboards | Support (salmon) | "Is it meta/governance/help?" → Yes = Support |
| Community event, academy course | Blog (lavender) | "Is it content/community?" → Yes = Blog |

## Verification

Render both sitemaps and ask a stranger: "Are these the same kind of drawing?" If yes → grammar holds. If they comment "this one is deeper/more detailed" → collapse depth until visual weight matches.
