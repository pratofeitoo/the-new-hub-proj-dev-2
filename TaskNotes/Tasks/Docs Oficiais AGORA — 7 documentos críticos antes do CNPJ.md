---
status: open
priority: high
dateCreated: 2026-09-02T18:32:00.000-03:00
tags:
  - task
  - documentacao-oficial
  - vault-isolado
  - AGORA
projects:
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1]]"
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]"
  - "[[TaskNotes/Tasks/Documentação Oficial — Epic Vault Isolado HUB (01-14)]]"
contexts:
  - "@juridico"
  - "@governanca"
timeEstimate: 240
due: 2026-09-15
scheduled: 2026-09-04
blockedBy:
  - uid: "[[TaskNotes/Tasks/GOV-001 — Decidir estrutura societária (quantos CNPJs)]]"
    reltype: FINISHTOSTART
dateModified: 2026-09-05T08:51:46.802-03:00
---

# Docs Oficiais AGORA — 7 documentos críticos antes do CNPJ

Pacote `AGORA` — sem eles não converse com investidor/banco nem dê acesso a C.A.O.S./código.

| ID | Doc | Pasta isolada | Quem pede |
|---|---|---|---|
| 09.01 | Cap Table + Vesting | `09-governanca-corporativa/09.01-cap-table-vesting.md` | Investidor/banco |
| 09.02 | Acordo de Sócios completo | `09-governanca-corporativa/09.02-acordo-socios-completo.md` | Sócios/advogado |
| 11.04 | NDA + Cessão de PI | `11-pessoas-cultura/11.04-NDA-cessao-PI.md` | Qualquer pessoa com acesso |
| 11.01 | Organograma + RACI + JDs | `11-pessoas-cultura/11.01-organograma-RACI-JDs.md` | Time |
| 10.01 | Business Plan 12-18m | `10-financeiro-estrategico/10.01-business-plan-12-18m.md` | Investidor |
| 10.02 | Modelo Financeiro 3D | `10-financeiro-estrategico/10.02-modelo-financeiro-3D.md` | Investidor/contador |
| 12.01 | Política de Preço & Packaging | `12-comercial-GTM/12.01-politica-preco-packaging.md` | Cliente #1 |

**Checklist:**
- [ ] 09.01 Cap Table preenchido (sócios/%/vesting/cliff) — ver `template-documento-nao-obrigatorio.md`
- [ ] 09.02 Acordo de Sócios v0.1 revisado OAB
- [ ] 11.04 NDA/PI assinado *antes* de compartilhar C.A.O.S.
- [ ] 10.02 Modelo 3D com cenários + separação ARR vs restrito
- [ ] Todos com `status: aprovado/em_uso` no vault isolado

**Depende de:** `[[GOV-001 — Decidir estrutura societária (quantos CNPJs)]]` (FINISHTOSTART)
