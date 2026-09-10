# Overlap Matrix — Toe-to-Toe Yes/No Filter

> Both sitemaps now share identical physical form (Home + 6 lanes + yellow gates). This table is the binary filter: **green = both have it, yellow = only one, grey = neither / Business OS gap**.
> Branch: `wip/meeting-2026-09-10` | Generated: 2026-09-10

## Summary (at a glance)

| Lane | In A? | In B? | Verdict |
|---|---|---|---|
| **Home + Top bar (4)** | ✅ 5 nodes | ✅ 5 nodes | 🟢 SAME — both have Home + My Account/Login/Create/Social |
| **Shop (Performance/Value)** | ✅ 11 nodes | ✅ 8 nodes | 🟢 SAME lane, deeper in A (has Cart/Checkout gates) vs B has more data (73 indicators) but fewer gates |
| **Classifieds (Talent discovery)** | ✅ 9 nodes | ❌ 0 (orphan) | 🟡 GAP in B — A has talent marketplace (MOD-03), B has nothing |
| **Sell (Supply / Fornecedores)** | ✅ 10 nodes | ✅ 9 nodes | 🟢 SAME — both have Sell flow + approval gates; B adds 17 integrations detail |
| **About (Concept / Dictionary)** | ✅ 3 nodes | ✅ 8 nodes | 🟡 B DEEPER — A 20 caps thesis collapsed; B has 25 nodes + 20 edges + 41 fields + RACI |
| **Support (Governance / ROI)** | ✅ 9 nodes | ✅ 9 nodes | 🟢 SAME weight — both have Contact/FAQ/Become Seller/Return/Shipping/Alertas |
| **Blog (Community / Academy)** | ✅ 3 nodes | ❌ 0 (orphan) | 🟡 GAP in B — A has MOD-06/07 built; B only future research |

**Counts:** A 58 mapped / 0 orphans | B 37 mapped / 4 orphans | **Overlap on 4 lanes, 2 gaps, 1 deep asymmetry**

## Detailed Node Matrix

| Page / Gate | Lane | In A (dev-2) | In B (Branch 01) | Filter | Meeting Note |
|---|---|---|---|---|---|
| Home (HUB Core / 00_Leia-me thesis) | Home | ✅ MOD-01 | ✅ 00_Leia-me | 🟢 | Both claim unified intelligence — phrasing differs |
| My Account | Top bar | ✅ PER-01..13 | ✅ 07 visões ×10 | 🟢 | Same pattern |
| Login | Top bar | ✅ | ✅ | 🟢 | — |
| Create an Account | Top bar | ✅ N24 consent | ✅ CMP/N24 | 🟢 | Both have LGPD gate — strong |
| Social Media | Top bar | ✅ | ✅ | 🟢 | Placeholder both |
| Shop | Shop | ✅ MOD-02+04 | ✅ 04_Master (73) | 🟢 | A = transactional cockpit, B = indicator catalog — same seat, different lens |
| Product List | Shop | ✅ Scorecards | ✅ Indicators list | 🟢 | Collapsed in B to 1 node instead of 73 rows |
| Product Detail | Shop | ✅ KPI detail + FIN-01 | ✅ 05 Árvore 12 levers | 🟢 | B adds causal chain — richer |
| Cart | Shop | ✅ Action Cart | ✅ — | 🟡 | A has action cart, B has no cart concept — **B gap** |
| Log In/Register (Shop) | Shop | ✅ yellow gate ×2 | ✅ yellow gate | 🟢 | Same auth branching |
| Checkout | Shop | ✅ Confirm Plan | ✅ Event commit (09) | 🟢 | Different label, same commit semantics |
| Classifieds | Classifieds | ✅ MOD-03 | ❌ — | 🟡 | **B missing entire lane** — talent marketplace |
| Classifieds Success Stories | Classifieds | ✅ | ❌ — | 🟡 | — |
| Post a Classified | Classifieds | ✅ | ❌ — | 🟡 | — |
| Post Classified Template | Classifieds | ✅ | ❌ — | 🟡 | — |
| Confirmation Email → Reject/Approve → Email | Classifieds | ✅ full flow | ❌ — | 🟡 | Full approval workflow missing in B |
| Sell | Sell | ✅ MOD-05 | ✅ 10_Integrações | 🟢 | Same lane |
| Sellers Account | Sell | ✅ SCR-08 | ✅ | 🟢 | — |
| Template | Sell | ✅ | ✅ | 🟢 | — |
| Confirmation Email | Sell | ✅ | ✅ | 🟢 | — |
| Post Rejected / Approved (Sell) | Sell | ✅ yellow | ✅ yellow | 🟢 | Same gates |
| Rejected/Approval Email Sent (Sell) | Sell | ✅ terminal | ✅ terminal | 🟢 | Same leaves |
| Not Logged In / Logged as Seller | Sell | ✅ dual gate | ✅ dual gate | 🟢 | Same entry split |
| About Us | About | ✅ 20 caps thesis | ✅ 01 Mapa + Beachhead | 🟢 | A narrative, B visual+research — same seat |
| Testimonials | About | ✅ Cases | ✅ Market research | 🟢 | Different evidence, same seat |
| Glossary | About | ✅ FLD-001..047 | ✅ 41 fields + 25 nodes +20 edges | 🟡 | B **much deeper** — collapse was correct call |
| Customer Support | Support | ✅ MOD-08 | ✅ 11_Governança | 🟢 | Same lane root |
| Contact Us | Support | ✅ | ✅ | 🟢 | — |
| FAQs | Support | ✅ GOV-08 | ✅ 11_Gov | 🟢 | — |
| Become a Seller | Support | ✅ | ✅ GTM research | 🟢 | B adds GTM lens |
| Return Policy | Support | ✅ ROI validation | ✅ M0/M1/M2 gates | 🟢 | Same semantics |
| Shipping Policy | Support | ✅ INT SLAs | ✅ 17 integrations + SLAs | 🟢 | B more detailed (2s–1h vs D+1) |
| Central Alertas / Visões Dashboard | Support | ✅ SCR-05 | ✅ 07 (10 views) | 🟢 | A centralized, B distributed — same seat |
| ROI do HUB | Support | ✅ SCR-06 / HUB-04 | ✅ 06 Simulador | 🟢 | A dashboard, B simulador — same seat |
| Blog | Blog | ✅ MOD-06+07 | ❌ — | 🟡 | **B missing entire lane** — community/academy |

## The 5-Line Executive Filter (for the meeting)

1. **Business OS proved:** A transactional marketplace with Shop+Sell+Support navigation IS buildable and already has users — your HUB thesis is not theoretical.
2. **Where HUB is ahead:** Lane-complete — you have Classifieds (talent) + Blog (community/academy) designed; Business OS-style apps often lack governance (your N24/LGPD + ROI Impact has no equivalent there).
3. **Where HUB is behind:** Data depth collapsed for the sitemap but **not built** — B has 73 indicators / 41 fields / 27 events validated on paper; A has 8 modules / 9 screens on paper. Neither has shipped gates.
4. **Riskiest gap (2 orphans):** Talent marketplace (Classifieds) + Community events (Blog) — B has 0 nodes there, A has design but no evidence. If Business OS monetizes those lanes, you are 6 months behind on network effects.
5. **Decision to make today:** Pick **one orphan lane** to validate first (Classifieds talent matching OR Blog community). Don't build both. The other 4 lanes are already toe-to-toe — no missing piece there.

## What To Do With This

- **Before meeting:** Drop Business OS screenshot into `BusinessOS-reference.md` and replace the 5 bullets — the matrix above will instantly re-color.
- **During meeting:** Open `sitemap-A.html` + `sitemap-B.html` side-by-side. For any question "do we have X?" — find the lane, read the cell above (✅/❌).
- **After meeting:** Promote the chosen orphan lane to `02-review/` as a 1-page decision (`mapping-A.csv` row → proposal).

