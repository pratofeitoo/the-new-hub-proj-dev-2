---
ops_id: OPS-013
task_type: operational
status: open
priority: high
dateCreated: 2026-09-02T18:31:00.000-03:00
tags:
  - task
  - documentacao-oficial
  - vault-isolado
  - GOV-001
  - bloqueador
projects:
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]"
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Instrucao_Vault_Documentos_Oficiais]]"
  - "[[TaskNotes/Tasks/Documentação Oficial — Epic Vault Isolado HUB (01-14)]]"
contexts:
  - "@juridico"
  - "@fiscal"
timeEstimate: 120
due: 2026-09-10
scheduled: 2026-09-03
blockedBy: []
dateModified: 2026-09-05T08:50:55.085-03:00
googleCalendarEventId: i5gjbl89v21vn3hd3qmpnaknu0
---

# GOV-001 — Decidir estrutura societária (quantos CNPJs)

**Bloqueador de 80% dos docs.** Sem isso todo `entidade_dona` fica como `hipótese`.

Pergunta: `1 CNPJ único` / `2 CNPJs (Negócios+Plataforma juntos + Instituto)` / `3 CNPJs` / `4 CNPJs (Marca com CNPJ)`?

**Entrega:**
- Nota `00-controle/03-decisao-GOV-001-estrutura-societaria.md` no vault isolado
- Registro em `00-project-control/decisoes/` no vault de projeto
- Atualizar `entidade_dona` em `GOV-MAP-001` e `GOV-MAP-002`

**Critérios:**
- [ ] Parecer societário/tributário (EC 132/2023 IBS/CBS) obtido
- [ ] Parecer terceiro setor para Instituto (OSC/CEBAS)
- [ ] Decisão assinada pelos founders

**Bloqueia:** `01.01`, `01.02`, `02.01`, `04.06`, `09.01`, `09.02` e toda separação ARR vs restrito (`FIN-002`)
