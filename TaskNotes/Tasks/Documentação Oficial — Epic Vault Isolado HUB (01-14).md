---
ops_id: OPS-011
task_type: operational
status: open
priority: high
dateCreated: 2026-09-02T18:30:00.000-03:00
tags:
  - task
  - documentacao-oficial
  - vault-isolado
  - epic
projects:
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]"
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1]]"
  - "[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Instrucao_Vault_Documentos_Oficiais]]"
contexts:
  - "@juridico"
  - "@governanca"
timeEstimate: 480
due: 2026-09-30
scheduled: 2026-09-03
dateModified: 2026-09-05T17:23:26.955-03:00
---

# Documentação Oficial — Epic Vault Isolado HUB (01-14)

Epic para tracking de toda documentação oficial no vault isolado `HUB_Documentos_Oficiais`.

**Fonte da verdade:**
- `GOV-MAP-001` → `01-08` (32 docs obrigatórios) → `[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1]]`
- `GOV-MAP-002` → `09-14` (27 docs não-obrigatórios mas requeridos) → `[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1]]`
- Instrução visual v2 → `[[01-work/pesquisa-e-confianca/documentos-oficiais/_controle/HUB_Instrucao_Vault_Documentos_Oficiais]]`

**Estrutura destino:** `HUB_Documentos_Oficiais/00-controle` + `01-08` + `09-14` + `99-arquivo` = 15 pastas, 59 docs + 5 controle

**Diretório físico criado:** `/Shared drives/DiverCidade HUB/2026/THE NEW HUB/Documentações Oficiais do Projeto` (ver `[[TaskNotes/Archive/Configurar um diretório dedicado para documentações oficiais e formas do projeto]]`)

## Subtasks
Este epic agrupa:
- `[[GOV-001 — Decidir estrutura societária (quantos CNPJs)]]`
- `[[Docs Oficiais AGORA — 7 documentos críticos antes do CNPJ]]`
- `[[Docs Oficiais 01-08 — Validar obrigatórios com advogado e contador]]`
- `[[Docs Não-Obrigatórios 09-14 — Planejar horizontes 0-6M e 6-18M]]`

## Como acompanhar no TaskNotes
- **Kanban:** `TaskNotes/Views/kanban-default.base` → agrupar por `status`
- **Lista:** `TaskNotes/Views/tasks-default.base` → filtrar `tag:documentacao-oficial`
- **Agenda:** `due` e `scheduled` aparecem em `agenda-default.base` e `calendar-default.base`

## Checklist epic
- [x] Vault isolado criado (prompt v2 executado)
- [ ] 59 arquivos .md gerados a partir dos 2 templates
- [ ] GOV-001 decidido e registrado em `00-controle/03-decisao-GOV-001-estrutura-societaria.md`
- [ ] 7 docs AGORA em `aprovado/em_uso`
- [ ] Validação profissional concluída (OAB + CRC)
