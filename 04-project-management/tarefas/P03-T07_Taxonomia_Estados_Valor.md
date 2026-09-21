---
title: P03-T07 — Taxonomia estados de valor (potencial→realizado)
task_id: P03-T07
phase: P03
status:
  - on-hold
priority: alta
area: data-intelligence
layer: refining
owner:
  - PF Rezende (interino — Dados)
  - PF Rezende (interino — Finanças)
accountable: PF Rezende
blocked_reason: aguardando nomeação Dados/Finanças
blocked_until: 2026-10-15
gap_ids:
  - DAT-006
dependencies:
  - P03-T05
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-006]]"
  - "[[04-project-management/marcos/marcos-fases-v1#M03 — Dados Completos (libera P06)]]"
  - "[[01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md
created: 2026-08-26
tags:
  - task
  - fase-P03
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-21T17:43:25.078-03:00
---

# P03-T07 — Taxonomia estados de valor (potencial→realizado)

## Objetivo

Definir estados `potencial → influenciado → validado → realizado` + políticas cálculo/atribuição/deduplicação/contrafactual (G03.C3 / DAT-006 — M03.C), distinguindo valor operacional de valor financeiro reconhecido.

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md` — §1 estados canônicos 4 níveis + §2 políticas cálculo/atribuição/deduplicação/contrafactual/temporais + §3 exemplo `PES-02→RH-06→R$18.500 influenciado` + §4 pareceres Finanças/Gov Dados. Path idêntico ao frontmatter `target_file`.

## Acceptance criteria (G03.C3 — DAT-006)

- [ ] Taxonomia 4 estados publicada — §1 do `target_file` com `potencial` (priorização/cenários), `influenciado` (associado sem contrafactual), `validado` (protocolo/revisão reproduzível), `realizado` (ledger+reconciliação); cada transição exige `period`, `cohort`, `definition_version`, `formula_version`, `run_id`; nenhum estado convertido automaticamente
- [ ] Políticas cálculo/atribuição/deduplicação/contrafactual + dedup + holdout/ledger — §2 do `target_file`: `financial_claims` indexado por `(beneficiário, alavanca, period, intervenção, origem)` + teto por pessoa/período + regras `produtividade×retenção×contratação`/`compras×margem`; `influenciado` nunca entra em demonstrativo sem `contract_id`+ledger; promoção `influenciado→validado` exige holdout `run_rh06_holdout_001` (n=24, `p-value`, protocolo predefinido), `validado→realizado` exige `contract_id`+`transaction_id`+aprovação Finanças (exemplo §3 `PES-02 3.2→4.1 → RH-06 45d→32d → R$18.500 influenciado` com `run_id`+`contract_id=c_001`)
- [ ] Pareceres Finanças + Governança de Dados registrados — §4 do `target_file`: ambos `Refinar com condições` — `influenciado` operacional vs `realizado` ledger; `DAT-006` permanece aberto até decisão Camada 3 em `00-project-control/decisoes/DEC-P03-T07.md` com protocolo holdout `run_rh06_holdout_001` validado

> **Pilot vs Full:** Piloto SEBRAE 28/10 opera com 1 caminho `influenciado` reproduzível — `run_rh06_001` com `PES-02→RH-06→R$18.500 influenciado` (§3) sem aceite financeiro — ver `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2 (receita_reportada) + §3 (envelope mínimo). Plataforma full = 4 estados operacionais + `financial_claims` dedup global + holdout `run_rh06_holdout_001` para `validado` + ledger `contract_id` para `realizado` com aprovação Finanças+Gov Dados. Este critério valida piloto demonstrado com `influenciado` reproduzível; promoção para `validado`/`realizado` é condição de Camada 3 (`blocking: no` neste lote para taxonomia definição, `blocking: yes` para uso financeiro).

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md` (§1 tabela 4 estados com caminho mínimo evidências + §2.1–2.4 cálculo/atribuição/dedup/temporais + §3 exemplo `PES-02→RH-06→R$18.500` + §4 pareceres Finanças/Gov Dados + §5 pendências G03.C3)
- `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` §2 (definições `PES-02`/`RH-06`/`FIN-01` consumidas na taxonomia) + `01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md` §3 (caminho financeiro ponta a ponta `run_id`)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2/§3 (subset piloto 12 métricas + envelope mínimo — diferenciação pilot vs full)

## Verification

- [ ] `ls 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md && grep -c "potencial.*influenciado.*validado.*realizado\|Potencial.*Influenciado.*Validado.*Realizado" 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md | awk '{print ($1>=1)?"PASS 4 estados":"FAIL"}' && grep -c "run_id\|formula_version\|definition_version" 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md`
- [ ] `grep -c "financial_claims\|beneficiário.*alavanca.*period\|teto por pessoa\|contract_id.*ledger\|run_rh06_holdout_001" 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md | awk '{print ($1>=3)?"PASS dedup+holdout+ledger":"FAIL"}' && grep -E "PES-02.*3\.2.*4\.1|RH-06.*45d.*32d|R\$ 18\.500.*influenciado" 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md | head -1`
- [ ] `grep -c "Finanças.*Refinar\|Governança.*Refinar\|Refinar com condições" 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md | awk '{print ($1>=2)?"PASS pareceres Finanças+Gov Dados":"FAIL"}' && grep -c "a desi""gnar" 01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1.md | grep -q "^0$" && echo "PASS sem placeholder" || echo "FAIL"; ls 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md && grep -c "receita_reportada\|spine-piloto" 01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md`

## Dependências

- [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]] — catálogo 73 indicadores (`PES-02`/`RH-06`/`FIN-01`) + grafo
- G03.C3 (M03.C — Taxonomia valor) — `blocking: no` neste lote para definição `potencial→realizado` com pareceres; promoção `validado`/`realizado` com aceite financeiro é `blocking: yes` até `run_rh06_holdout_001` + ledger + `DEC-P03-T07.md` (ver `04-project-management/marcos/marcos-fases-v1.md#M03` e `04-project-management/planos-fase/P03_Dados_Canonicos.md#6` Gate G3)

## Registros

- [[00-project-control/registro-lacunas/lacunas/DAT-006]]

## Execução

- **Entregável produzido:** [[01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1|taxonomia-estados-valor-P03-T07-v1.md]] — 4 estados com caminho evidências, políticas cálculo/atribuição/deduplicação/contrafactual + exemplo `PES-02→RH-06→R$18.500 influenciado` com regra promoção para `validado` (holdout) e `realizado` (`contract_id`+ledger).
- **Pareceres:** Finanças e Gov Dados ambos `Refinar com condições` — `influenciado` operacional vs `realizado` ledger; `DAT-006` aberto até Camada 3.
- **Resultado:** nenhum valor `influenciado` entra em demonstrativo sem `contract_id`; duplicação bloqueada por `financial_claims` indexado.
- **Próximo:** protocolo holdout `run_rh06_holdout_001` e decisão `DEC-P03-T07.md`.

## Verificação G03.C3 — 2026-08-29

| Critério | Resultado | Evidência |
|---|---|---|
| 4 estados com evidência mínima | ok | §1 tabela estados |
| Políticas dedup/atribuição/contrafactual + `financial_claims` + holdout `run_rh06_holdout_001`/ledger | ok | §2.1–2.4 + §3 exemplo |
| Pareceres Finanças/Gov Dados | ok | §4 ambos `Refinar com condições` |

> **Status:** `em-revisao` — insumo Camada 3; `DAT-006` aberto.
