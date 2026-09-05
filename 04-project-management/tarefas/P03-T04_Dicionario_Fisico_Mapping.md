---
title: P03-T04 — Dicionário físico (≈41 campos) mapeado para entidades canônicas
task_id: P03-T04
phase: P03
status: em-revisao
priority: alta
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino)
accountable: PF Rezende
blocked_reason: "aguardando nomeação Dados — DAT-010"
blocked_until: 2026-10-15
gap_ids:
  - DAT-010
dependencies:
  - P03-T01
  - P03-T03
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-010]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03.B — Eventos & Contratos (libera P05 detalhar payloads)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv
  - 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-05T00:00:00.000-03:00
---

# P03-T04 — Dicionário físico (≈41 campos) mapeado para entidades canônicas

## Objetivo

Mapear dicionário de 41 campos em 16 tabelas físicas para 25 entidades canônicas (G03.B2 / DAT-010 — M03.B) — reconciliar `abas-origem/` (12 cols) vs `03-csv-corrigido/` (16 cols) com linhagem auditável; desbloqueia P05 detalhar payloads.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md` — §1 resumo 16 tabelas→entidades + §2 detalhamento 41 campos→`entidade.atributo` + §3 contradições DAT010-001..004 + §4 diagrama físico Mermaid. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G03.B2 — DAT-010 · **blocking: yes**)

- [ ] 41/41 campos em 16 tabelas físicas mapeados para 25 entidades canônicas — tabela §2 do `target_file` com `entidade.atributo`, PK/FK, tipos e temporalidade (`valid_from/to`, `occurred_at`/`recorded_at` UTC); zero campo sem entidade canônica; verificado por `grep -c "dim_\|fact_\|rel_"` + contagem §2
- [ ] 4/4 correções `DAT010-001` a `DAT010-004` registradas em `04-registro-correcoes/corrections.csv` com `status=proposed` — `Retenção` (60 meses vault/TTL por finalidade), `Controle de acesso` (vault separado/RBAC), `Consentimento/revogação` (≤5 min CMP log), `Evidência` (ROPA/token scan/range test) — reconciliação 12→16 cols auditável — §3 do `target_file` + `corrections.csv`
- [ ] Linhagem `origem → corrigido → canônico` inequívoca e auditável + diagrama físico Mermaid (§4) renderiza sem erro + `06-relatorios-validacao/entity-key-validation` pendente antes de promover XLSX para `02-review/aprovado/` — §4–§5 do `target_file`

> **Pilot vs Full:** Piloto SEBRAE 28/10 requer apenas subset — 12 campos / 12 entidades mínimas — ver `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1 (fornecedor→historico_alteracoes) + §3 (`payload_minimo` 41→12 campos piloto). Plataforma full = 41/41 campos + 16/16 tabelas + 25/25 entidades + 4 correções aprovadas. Este critério valida full (41/41 + 4/4); piloto pode operar com 12/12 mas evidência full permanece obrigatória para M03.B — **blocking: yes** em DAT-010.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md` (§1 resumo 16 tabelas + §2 41 campos→entidade.atributo + §3 contradições 12→16 cols + §4 diagrama ER + §5 pendências G03.B2)
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv` (4 entradas `DAT010-001`..`DAT010-004` com `source_csv=08_Dicionario_Dados.csv`, `category=governanca/schema/evidencias`, `status=proposed`)
- `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/` (`entity-key-validation` + `roi-recalculation` — pendentes antes de promoção XLSX; `03-csv-corrigido/` é fonte, `abas-origem/` espelho)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1/§3 (subset piloto 12 entidades/12 campos — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md && grep -c "dim_\|fact_\|rel_" 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md | awk '{print ($1>=16)?"PASS 16 tabelas":"FAIL"}' && grep -c "Person\|Company\|Consent\|Skill\|Event" 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md`
- [ ] `ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv && grep -c "DAT010-00" 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv | awk '{print ($1>=4)?"PASS 4/4 DAT010":"FAIL"}' && grep -E "Retenção|Controle de acesso|Consentimento|Evidência" 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv | head -4`
- [ ] `ls 02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/ 2>&1 | head -1 && grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"; ls 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md && grep -c "payload_minimo\|fornecedor" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md`

## Dependências

- [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico|P03-T01]] — 25 entidades canônicas com `canonical_id` (§1–§4)
- [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema|P03-T03]] — envelope canônico + temporalidade (`occurred_at`/`recorded_at` UTC)
- G03.B2 (M03.B — Dicionário físico) — **`blocking: yes` em DAT-010**; sem aprovação Dados+Tech de `DAT010-001..004` o gate M03.B não libera P05/P03 completo (ver `04-project-management/marcos/marcos-fases-v1.md#M03.B` e `04-project-management/planos-fase/P03_Dados_Canonicos.md#6` S3B)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-010]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|dicionario-fisico-mapping-P03-T04-v1.md]] — 41 campos em 16 tabelas físicas mapeados para 25 entidades canônicas (P03-T01 v1), com PK/FK, entidade.atributo e temporalidade; diagrama físico simplificado.
- **Contradições resolvidas:** `abas-origem` (12 cols) vs `03-csv-corrigido` (16 cols) — 4 colunas **Retenção, Controle de acesso, Consentimento/revogação, Evidência** adicionadas como mínimo bloqueador G03.B2; registradas em [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv|corrections.csv]] como `DAT010-001` a `DAT010-004` (`proposed`).
- **Resultado:** nenhum campo sem entidade canônica; linhagem `origem → corrigido → canônico` inequívoca para revisão.
- **Próximo:** aprovação Dados+Tech das 4 correções e `06-relatorios-validacao/entity-key-validation` antes de promover XLSX.

## Verificação G03.B2 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| 41 campos mapeados | 41/41 | Tabela §2 do rascunho |
| 16 tabelas → entidades | ok | §1 resumo |
| Contradições registradas | 4/4 | DAT010-001..004 em `corrections.csv` |
| Linhagem inequívoca | ok | `abas-origem` (espelho) vs `03-csv-corrigido` (fonte) |

> **Status:** `em-revisao` — rascunho para revisão Dados+Tech; `DAT-010` **blocking: yes** permanece até aprovação.
