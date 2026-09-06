---
type: evidence-register
status: draft
gate_id: P03-T01
title: P03-T01 Evidence Register 001
---

## P03-T01 Evidence Register

| Claim or finding | Source path | Evidence location | State | Notes |
| --- | --- | --- | --- | --- |
| 25 canonical entities with stable identifiers and temporal fields | P03-T01 model | §1 and §4 | supported | Draft source explicitly marks the model as not approved. |
| External identifiers resolve through `identity_alias` | P03-T01 and P03-T02 | P03-T01 §6; P03-T02 §2 | supported | Direct joins between external IDs are prohibited. |
| Event envelope depends on canonical identifiers and temporal conventions | P03-T01 and P03-T03 | P03-T03 §1 | supported | P03-T03 remains a draft requiring contract and replay validation. |
| Physical constraints and orphan tests are complete | P03-T01 model | §7 | unresolved | The source lists them as pending work. |
| P03-T01 is approved for promotion | P03-T01 model | Header and §7 | contradicted | The source says review and approval are still required. |
| Consent is a governance blocker for sensitive data | P03-T01 model | §1, N24 | supported | Consent validity and revocation propagation remain implementation obligations. |

### Coverage gaps

- The source crosswalks named by P03-T01 are not all part of this bounded source set.
- Physical constraint implementation and tests are not evidenced.
- Full-model validation and SEBRAE pilot-subset validation are distinct and both require review.

### Source conflicts

- No direct contradiction was found among the five declared sources for the claims recorded above.
- Draft status and pending implementation items prevent an approval claim.
