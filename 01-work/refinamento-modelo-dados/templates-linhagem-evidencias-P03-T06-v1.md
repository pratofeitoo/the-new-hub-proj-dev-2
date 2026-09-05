---
title: Templates Linhagem + Registro Evidências v1 — P03-T06 (G03.C2)
task_id: P03-T06
phase: P03
status: rascunho
gap_id: DAT-004
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T06_Templates_Linhagem_Evidencias]]"
tags:
  - refinement
  - P03
  - DAT-004
---

# Templates Linhagem + Registro Evidências v1 — P03-T06 (G03.C2)

> **Status:** rascunho para validação Dados+Tech · **G03.C2** · Linhagem reproduzível para revisão; não constitui aceite financeiro ou liberação produção.
> **Depende de:** [[01-work/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo-metricas-grafo-P03-T05-v1]] — 73 indicadores; [[01-work/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — entidades.

## 1. Template — Linhagem `origem → métrica → ação → resultado → valor`

| Etapa | Artefato | Campos obrigatórios | Exemplo (caminho financeiro v1) |
|---|---|---|---|
| **Origem** | `source_system` + `source_id` + `event_id` | `source_system`, `source_object_type`, `source_id`, `occurred_at`, `ingested_at`, `consent_ref` | HRIS `person_external_id=HRIS_001` → `person_id=hub_p_001` via `identity_alias` |
| **Métrica** | `indicator_id` + `definition_version` | `indicator_id`, `definition_version`, `period`, `cohort_id`, `numerador/denominador`, `formula_version`, `run_id` | `PES-02` Índice prontidão = Σ(nível×peso×confiança)/Σpesos — `definition_version=v1`, `period=2026-08`, `cohort=onboarding_2026` |
| **Ação** | `journey_id` + `action_id` | `journey_id`, `action_type`, `actor`, `timestamp`, `evidence_ref` | `journey_id=j_001` — Ação `curadoria` por `curador_01` em `2026-08-20` |
| **Resultado** | `outcome_id` + `evidence_id` | `outcome_id`, `population`, `baseline`, `observed`, `comparison`, `confidence` | `outcome_id=out_001` — `time-to-productivity` 45d → 32d (n=12, baseline 2026-07) |
| **Valor** | `financial_value_id` | `amount`, `state` (`potencial/influenciado/validado/realizado`), `contract_id`, `attribution_rule` | `R$ 18.500` `state=influenciado` — `contract_id=c_001` (vaga preenchida) |

**Regra:** cada aresta registra `transformação, versão, ator/serviço, tempo, qualidade, autorização`; `run_id` + `formula_version` tornam o cálculo reproduzível.

## 2. Template — Registro de Evidências

| Campo | Descrição |
|---|---|
| `evidence_id` | UUID do artefato (hash + referência) |
| `origin` | `source_system` + `source_id` + `event_id` |
| `captured_at` | quando coletado |
| `consent/purpose` | `consent_id`, `purpose`, `version` |
| `reviewer` | humano que validou |
| `quality` | `valid` / `quarantined` / `rejected` |
| `confidence` | 0–1 |
| `link` | `[[path/to/file]]` ou URL com `valid_from/to` |
| `expiry` | `valid_to` ou `expires_at` |

## 3. Caminho financeiro ponta a ponta — demonstrado (1 caminho, reproduzível)

**Cenário:** contratação via ecossistema — `PES-02` (prontidão) → `PRO-05` (conclusão jornada) → `RH-06` (time-to-productivity) → `FIN-01` (receita incremental via produtividade)

| Passo | Dado | Cálculo | Evidência |
|---|---|---|---|
| 1. Origem | HRIS 12 pessoas + diagnóstico `assessment_id=a_001` | — | `01-work/.../dataset-identidade-sintetico-P03-T02.csv` (hub_p_001..012) |
| 2. Métrica | `PES-02` prontidão média 3.2 → 4.1 (cohort onboarding_2026) | Σ nível×peso/Σpesos, `run_id=run_pes02_001` | `catalogo-metricas-grafo-P03-T05-v1.md` §2 |
| 3. Ação | `journey_id=j_001` — 12 trilhas Academy + curadoria | — | `01-work/refinamento-produto/RACI_v1.md` |
| 4. Resultado | `time-to-productivity` 45d → 32d (-13d, p=0.04, n=12) | `run_id=run_rh06_001`, `formula_version=v1` | `fact_person_skill.confidence` 0.82 média |
| 5. Valor | `R$ 18.500` `influenciado` (13d × R$ 1.423/dia custo evitado) | `amount = delta_days × daily_cost`, `attribution=0.6` | `contract_id=c_001`, `transaction_id=t_001`, estado **não** `realizado` (aguarda `FIN-004` e ledger) |

> **Estado do valor:** `influenciado` — observado e temporalmente associado, sem contrafactual suficiente para `validado` ou `realizado`. Não é tração, ARR ou margem.

**Reprodutibilidade:**

```bash
# pseudocódigo
run_id=run_pes02_001 python calc_pes02.py --period 2026-08 --cohort onboarding_2026 --input dataset-identidade-sintetico-P03-T02.csv
# → output: pes02_value=4.1, evidence_id=ev_001, hash=sha256:abc
run_id=run_rh06_001 python calc_rh06.py --baseline 45d --observed 32d
# → output: delta=13d, p=0.04
```

## 4. Conexão Árvore de Valor → Simulador ROI → Dashboard

| Artefato | Ligação no caminho |
|---|---|
| Árvore de Valor (12 alavancas) | `time-to-productivity` → alavanca `produtividade` |
| Simulador ROI (H8:H20) | `R$ 18.500` alimenta `benefício bruto` H8, mas **não** soma com `produtividade` e `retenção` sem teste duplicação |
| Dashboard | visão `Operações → Produtividade` consome `PES-02` e `RH-06` com `period`, `cohort`, `definition_version` |

**Regra anti-dupla contagem:** `produtividade × retenção × contratação` não somam sem decompor mecanismo/população/janela e teto por pessoa/período (ver `indicator-financial-consistency.md`).

## 5. Pendências G03.C2 → G03.C3

- [ ] Aprovar templates com Dados+Tech; testar `run_id` reproduzível em `06-relatorios-validacao/`.
- [ ] Promover 1 caminho para `validado` com protocolo comparação/holdout e revisão Finanças+Gov Dados (G03.C3).
- [ ] Registrar `evidence_id` de cada passo em `02-review/evidencias/` antes de `realizado`.

## 6. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T06_Templates_Linhagem_Evidencias|P03-T06]]
- Gap: [[00-project-control/registro-lacunas/lacunas/DAT-004]]
- Catálogo: [[01-work/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo-metricas-grafo-P03-T05-v1]] — 73 indicadores
- Modelo: [[01-work/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — `hub_id`
