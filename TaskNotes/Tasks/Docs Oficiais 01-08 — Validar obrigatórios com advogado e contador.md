---
title: "Docs Oficiais 01-08 — Validar obrigatórios com advogado e contador"
status: open
priority: high
dateCreated: 2026-09-02T18:33:00.000-03:00
tags:
  - task
  - documentacao-oficial
  - vault-isolado
  - obrigatorio
projects:
  - "[[02-refinement/refinamento-governanca/HUB_Mapa_Documentos_Oficiais_v1]]"
  - "[[TaskNotes/Tasks/Documentação Oficial — Epic Vault Isolado HUB (01-14)]]"
contexts:
  - "@juridico"
  - "@fiscal"
  - "@LGPD"
timeEstimate: 300
due: 2026-09-20
scheduled: 2026-09-05
blockedBy:
  - uid: "[[TaskNotes/Tasks/GOV-001 — Decidir estrutura societária (quantos CNPJs)]]"
    reltype: FINISHTOSTART
---

# Docs Oficiais 01-08 — Validar obrigatórios com advogado e contador

Validação profissional dos 32 docs obrigatórios (`GOV-MAP-001`) antes de registrar.

**Foco crítico 2026-09-02:**
- **07.04 IBS/CBS (EC 132/2023 + LC 214/2025)** — ERP já precisa carregar teste CBS 0,9% + IBS 0,1% em 2026, vira obrigatório 2027
- **06.01 ROPA + 06.02 DPO + 06.03 RIPD + 04.04 DPA** — fluxo a fluxo vs `[[02-refinement/refinamento-governanca/matriz-dados-finalidade-P03-T08-v1]]`
- **01.01 Contrato Social / 01.02 Estatuto** — minuta v0.1
- **03.05 / 04.08 Selo** — manter `bloqueado` por `GOV-003`

**Checklist:**
- [ ] Agendar OAB (societário + LGPD) — revisar 01.01, 01.04, 04.01-04.08, 05.02, 06.01-06.04
- [ ] Agendar CRC (tributário) — revisar 07.01-07.05 + 10.04 (CPC 47) + 09.06 intercompany
- [ ] Pareceres arquivados em `00-controle/` do vault isolado
- [ ] Atualizar `status: registrado/aprovado` nos 32 arquivos `01-08`

**Exige:** `GOV-001` decidido. Vault isolado criado via prompt v2.
