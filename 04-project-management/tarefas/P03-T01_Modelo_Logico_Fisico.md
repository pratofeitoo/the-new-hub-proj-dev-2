---
title: P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)
task_id: P03-T01
phase: P03
status: em-revisao
priority: critica
area: data-intelligence
layer: blueprint
owner:
  - Ana Silva
  - PF Rezende (interino)
accountable: Ana Silva
blocked_reason: "aguardando contratação Ana Silva — Dados"
blocked_until: 2026-10-15
gap_ids:
  - DAT-001
dependencies:
  - P02-T01
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-001]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03.A — Entidades & Identidade (libera P04 + P05 iniciarem)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md#diagrama-er
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)

## Objetivo

Produzir modelo canônico de 25 entidades com PK estável, FK, cardinalidade, tipos de objeto e temporalidade (G03.A1 / DAT-001 — M03.A) — desbloqueia P04 full e P05 start.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` — tabelas §1–§4 + diagrama ER Mermaid + crosswalk `identity_alias` (§6). Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G03.A1 — DAT-001)

- [ ] 25/25 entidades com `canonical_id` (PK estável, imutável) — tabela §1 do `target_file`; zero placeholder pendente; verificado por `grep -c "canonical_id"` ≥25
- [ ] 12/12 relacionamentos com FK + cardinalidade + temporalidade (`valid_from` inclusive / `valid_to` exclusivo, `occurred_at`/`recorded_at` UTC) — tabela §2 + §4 do `target_file`
- [ ] 6 famílias de tipos de objeto mapeadas (§3) + `identity_alias` crosswalk `hub_id`/`external_id`/`source_system` com `valid_from/to` + diagrama ER Mermaid renderiza sem erro (§5–§6)

> **Pilot vs Full:** Piloto SEBRAE 28/10 requer apenas subset — 12 entidades mínimas — ver `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1 (fornecedor→historico_alteracoes). Plataforma full = 25/25 entidades + 73 métricas. Este critério valida full (25/25); piloto pode operar com 12/12 mas evidência full permanece obrigatória para M03.A.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` (§1–§4 tabelas + §5 diagrama ER + §6 crosswalk `identity_alias`)
- `02-review/01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md#1` (crosswalk histórico — superado, ver `target_file` atual em `01-work/`)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1 (subset piloto 12 entidades — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md && grep -c "canonical_id" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` — esperado 25
- [ ] `grep -c "valid_from" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md | awk '{print ($1>=12)?"PASS 12/12 FK+temporalidade":"FAIL"}' && grep -c "relationship_id\|rel_person\|fact_" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` — valida §2+§4
- [ ] `grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"; ls 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md && grep -c "^| [0-9]" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` — diagrama ER abre no Obsidian sem erro + pilot subset 12 entidades

## Dependências

- [[04-project-management/tarefas/P02-T01_Taxonomia_Capacidades|P02-T01]] — fronteiras travadas (M02)
- G03.A1 (M03.A — Entidades) — `blocking: no` neste lote; M03.A completo libera P04 full / P05 start (ver `04-project-management/marcos/marcos-fases-v1.md#M03.A`)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-001]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1.md]] — 25 entidades com `canonical_id` (PK estável), 12 relacionamentos com PK/FK/cardinalidade/temporalidade, tipos de objeto por família, regras temporais e diagrama ER Mermaid; crosswalk `identity_alias` com `hub_id`/`external_id`/`source_system`.
- **Blueprint atualizado:** [[99-archive/superado/01-blueprint-v1-submissao-superada/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia#1. Entidades canônicas, nós, relacionamentos, chaves, tipos de objeto e regras temporais|BP-003 §1]] vinculado ao rascunho (G03.A1).
- **Resultado:** nenhuma entidade sem chave estável; `relationship_id` e bridges N:N temporal formalizados; `valid_from/to` e `occurred_at`/`recorded_at` padronizados (UTC).
- **Próximo:** revisão Dados+Tech, popular `identity_alias` com dataset representativo, constraints físicas e testes de órfãos/unicidade antes de G03.A2.

## Verificação G03.A1 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Entidades com PK estável | 25/25 | Tabela §1 do rascunho — todo `canonical_id` imutável |
| FK + cardinalidade + temporalidade | 12/12 | Tabela §2 + diagrama ER |
| Tipos objeto por família | 6 famílias | §3 mapeado a BP-003 |
| Regras temporais explícitas | ok | §4 `valid_from/to` inclusivo/exclusivo + UTC |

> **Status:** `em-revisao` — rascunho para revisão Arquitetura de Dados; `DAT-001` permanece aberto até aprovação.
