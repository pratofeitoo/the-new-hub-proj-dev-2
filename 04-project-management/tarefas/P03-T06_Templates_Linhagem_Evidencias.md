---
title: P03-T06 — Templates de linhagem + registro de evidências
task_id: P03-T06
phase: P03
status:
  - on-hold
priority: critica
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino)
accountable: PF Rezende
blocked_reason: aguardando nomeação Dados
blocked_until: 2026-10-15
gap_ids:
  - DAT-004
dependencies:
  - P03-T05
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-004]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03 — Dados Completos (libera P06)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:43:23.909-03:00
---

# P03-T06 — Templates de linhagem + registro de evidências

## Objetivo

Construir templates `origem→métrica→ação→resultado→valor` + registro de evidências (G03.C2 / DAT-004 — M03.C) conectando Árvore de Valor→Simulador ROI→Dashboard com linhagem ponta a ponta reproduzível.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md` — §1 template linhagem 5 etapas + §2 registro evidências + §3 caminho financeiro ponta a ponta demonstrado + §4 conexão Árvore→Simulador→Dashboard + regra anti-dupla contagem. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G03.C2 — DAT-004)

- [ ] Templates `origem→métrica→ação→resultado→valor` publicados — §1–§2 do `target_file` com campos obrigatórios `run_id` + `formula_version` + `evidence_id` + `origin/captured_at/consent/purpose/reviewer/quality/confidence/link/expiry`; cada aresta registra `transformação, versão, ator/serviço, tempo, qualidade, autorização` e torna o cálculo reproduzível
- [ ] 1 caminho financeiro ponta a ponta demonstrado e reproduzível — §3 do `target_file`: `PES-02 (Índice prontidão 3.2→4.1, run_pes02_001, cohort onboarding_2026) → PRO-05 → RH-06 (time-to-productivity 45d→32d, run_rh06_001, -13d p=0.04 n=12) → FIN-01 R$ 18.500 influenciado (13d × R$1.423/dia, attribution=0.6, contract_id=c_001, transaction_id=t_001)` com pseudocódigo `run_id` + `hash=sha256` e linhagem `HRIS_001 → hub_p_001 → run_pes02_001 → run_rh06_001 → c_001`; estado `influenciado` (não `realizado`) — sem aceite financeiro implícito
- [ ] Regra anti-dupla contagem + conexão Árvore→Simulador→Dashboard — §4 do `target_file`: `produtividade × retenção × contratação` não somam sem decompor mecanismo/população/janela e teto por pessoa/período (ver `indicator-financial-consistency`); `R$ 18.500` alimenta `benefício bruto` H8 do Simulador mas não duplica `FIN-02..FIN-07` sem teste dedup

> **Pilot vs Full:** Piloto SEBRAE 28/10 usa linhagem mínima — 12 entidades + envelope mínimo + templates com `run_id` manual — ver `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1 (12 entidades: fornecedor→historico_alteracoes) + §3 (envelope mínimo 8 campos piloto + `consentimento_id` condicional). Plataforma full = templates versionados + replay `run_id` + holdout para `validado` + ledger para `realizado`. Este critério valida piloto demonstrado com 1 caminho `influenciado` reproduzível; promoção para `validado` (holdout `run_rh06_holdout_001`) e `realizado` (ledger + `contract_id`) é G03.C3 (ver `P03-T07`); `blocking: no` neste lote.

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md` (§1 template 5 etapas origem→valor + §2 registro evidências `origin/captured_at/consent/reviewer/quality` + §3 caminho financeiro 5 passos + pseudocódigo `run_id`/`hash` + §4 anti-dupla contagem)
- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` §2 (definições `PES-02` + `RH-06` + `FIN-01` consumidas no caminho) + `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` §1 (§6 `identity_alias` para `HRIS_001→hub_p_001`)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §3 (envelope mínimo piloto — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md && grep -c "run_id\|formula_version\|evidence_id" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | awk '{print ($1>=3)?"PASS templates run_id":"FAIL"}' && grep -E "origem.*métrica|métrica.*ação|resultado.*valor" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | head -1`
- [ ] `grep -c "PES-02.*3\.2.*4\.1\|RH-06.*45d.*32d\|R\$ 18\.500\|influenciado" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | awk '{print ($1>=2)?"PASS caminho financeiro":"FAIL"}' && grep -E "run_pes02_001|run_rh06_001|hub_p_001.*c_001|sha256" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | head -2`
- [ ] `grep -c "anti-dupla\|deduplic\|não.*somam\|teto por pessoa" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | awk '{print ($1>=1)?"PASS anti-dupla contagem":"FAIL"}' && grep -E "potencial.*influenciado.*validado.*realizado|state" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | head -1 && grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"`

## Dependências

- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]] — catálogo 73 indicadores (§2 `PES-02`/`RH-06`/`FIN-01`) + grafo DAT-01/02/03→dashboards
- G03.C2 (M03.C — Linhagem) — `blocking: no` neste lote; linhagem reproduzível para revisão, sem aceite financeiro; promoção para `validado`/`realizado` é G03.C3 (ver `04-project-management/marcos/marcos-fases-v1.md#M03` e `04-project-management/planos-fase/P03_Dados_Canonicos.md#6` Gate G3)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-004]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1|templates-linhagem-evidencias-P03-T06-v1.md]] — templates `origem→métrica→ação→resultado→valor` com campos `run_id`/`formula_version`/`evidence_id` + registro evidências (`origin/captured_at/consent/reviewer/quality`) + 1 caminho financeiro ponta a ponta `PES-02 (3.2→4.1) → PRO-05 → RH-06 (45d→32d) → FIN-01 R$ 18.500 influenciado` com pseudocódigo reprodutível e regra anti-dupla contagem.
- **Conexão:** Árvore `produtividade` → Simulador H8 (benefício bruto) → Dashboard `Operações → Produtividade` com `period/cohort/definition_version`.
- **Resultado:** linhagem `HRIS_001 → person_id=hub_p_001 → run_pes02_001 → run_rh06_001 → contract_id=c_001` auditável; valor permanece `influenciado` (não `realizado`).
- **Próximo:** promover para `validado` com protocolo holdout e aprovação Finanças+Gov Dados (G03.C3).

## Verificação G03.C2 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| Templates com `run_id`/`formula_version` | ok | §1–2 do rascunho |
| 1 caminho financeiro reproduzível | ok | §3 tabela 5 passos + pseudocódigo |
| Sem aceite financeiro implícito | ok | estado `influenciado`, não `realizado` |

> **Status:** `em-revisao` — templates para validação; `DAT-004` aberto até `G03.C3`.
