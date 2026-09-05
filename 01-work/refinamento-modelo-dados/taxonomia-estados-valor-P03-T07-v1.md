---
title: Taxonomia Estados Valor v1 — P03-T07 (G03.C3)
task_id: P03-T07
phase: P03
status: rascunho
gap_id: DAT-006
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T07_Taxonomia_Estados_Valor]]"
tags:
  - refinement
  - P03
  - DAT-006
---

# Taxonomia Estados Valor v1 — P03-T07 (G03.C3)

> **Status:** rascunho para parecer Finanças + Governança de Dados · **G03.C3** · Insumo para decisão Camada 3; não aprovado.
> **Depende de:** [[01-work/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo-metricas-grafo-P03-T05-v1]] — 73 indicadores; [[01-work/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1|templates-linhagem-P03-T06]] — `influenciado`.

## 1. Estados — definição canônica

| Estado | Significado | Uso permitido | Caminho mínimo de evidências |
|---|---|---|---|
| **Potencial** | Oportunidade modelada caso intervenção seja bem-sucedida sob premissas declaradas. | Priorização, cenários, hipótese. | Premissas explícitas → baseline/denominador → fórmula cenário → sensibilidade + owner |
| **Influenciado** | Mudança observada temporalmente associada à atividade HUB, sem contrafactual suficiente. | Aprendizado operacional, reporte interno qualificado. | Métrica origem → vínculo intervenção → janela → confundidores + limitações |
| **Validado** | Resultado que passou por protocolo medição/comparação/revisão acordado, com qualidade e limites documentados. | Reporte condicional cliente/governança; **não** é certificação financeira. | Protocolo predefinido → baseline/comparação ou desenho justificado → cálculo reproduzível (`run_id`) → revisão independente |
| **Realizado** | Valor validado reconhecido em registro operacional/financeiro oficial, líquido de custos, timing e duplicações. | Reporte aprovado Finanças, sujeito a entidade e contabilidade. | Validado → contrato/livro operacional → reconciliação → aprovação Finanças |

> **Regra de ouro:** nenhum estado é convertido automaticamente; promoção exige evidência `period`, `cohort`, `definition_version`, `formula_version`, `run_id`.

## 2. Políticas de cálculo, atribuição, deduplicação e contrafactual

### Estados financeiros canônicos congelados

`Potencial → Influenciado → Validado → Realizado`. Cada transição exige evidência; nenhum valor pode pular estados. `Realizado` só entra no ledger após validação Financeiro e reconciliação contábil.

### 2.1 Cálculo

- Fórmula versionada (`formula_version`) + `run_id` por execução; denominador, `period`, `cohort_id`, `population` explícitos.
- Atribuição declara: `unidade análise`, `janela tratamento`, `baseline`, `método contrafactual`, `parcela atribuída %`, `confiança`, `lag`, `exclusões`, `stop rule`.

### 2.2 Atribuição

| Método | Quando usar | Evidência exigida |
|---|---|---|
| Comparação observacional (coorte) | M2 sem randomização | `baseline`, `cohort_id`, `dimensões`, `confundidores` |
| Holdout / A-B | M2 com grupo controle | protocolo + `run_id` + `p-value` |
| Contrafactual modelado | quando holdout inviável | modelo + `model_version_id` + limites |

Todo valor `influenciado→validado` exige método declarado; `realizado` exige `contract_id` + `transaction_id` do ledger.

### 2.3 Deduplicação

- Registro `financial_claims` indexado por `(beneficiário, alavanca, period, intervenção, origem)`.
- Regras: `produtividade × retenção × contratação` → decompor mecanismo/população/janela + teto por pessoa/período; `compras × margem` → reconciliação contábil; `pipeline` nunca soma com `receita`.
- Ledger único de benefícios é a fonte da verdade; deduplicação obrigatória por `beneficiário × alavanca × período × intervenção`, com teto por população e `haircut DAT-08` aplicado conforme confiança do impacto.

### 2.4 Temporais

- Janela observação `period` + `cohort` + `maturation_window`; resultado pós-período não alegado antes de `valid_to`.
- Eventos atrasados mantêm `occurred_at`; `recorded_at` registra chegada.

## 3. Exemplo — mesmo caminho P03-T06

`PES-02 3.2→4.1 (potencial 30% → influenciado)` → `RH-06 45d→32d (influenciado, p=0.04)` → `R$ 18.500 influenciado (13d×custo, atribuição 60%)` → **promotion para `validado` exige** holdout n=24, protocolo aprovado, `run_id=run_rh06_holdout_001`; **para `realizado` exige** `contract_id=c_001` + ledger + Finanças.

## 4. Pareceres registrados (insumo Camada 3)

| Função | Parecer | Condição |
|---|---|---|
| **Finanças** | Refinar com condições | Separar `influenciado` (operacional) de `realizado` (ledger); nenhum `influenciado` entra em demonstrativo sem `contract_id`+ reconciliação; `DAT-006` aberto até aprovação |
| **Governança Dados** | Refinar com condições | Exigir `definition_version`+`formula_version`+`run_id` em toda métrica; `validado` só com revisão independente; bloquear `realizado` sem `period/cohort` |

> Ambos `Refinar com condições` — `DAT-006` permanece aberto até decisão Camada 3 com evidência.

## 5. Pendências G03.C3

- [ ] Protocolo holdout para `RH-06` + teste `run_rh06_holdout_001` em `06-relatorios-validacao/`.
- [ ] Aprovação conjunta Finanças+Gov Dados deste documento em `00-project-control/decisoes/DEC-P03-T07.md`.

## 6. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T07_Taxonomia_Estados_Valor|P03-T07]]
- Gap: [[00-project-control/registro-lacunas/lacunas/DAT-006]]
- Catálogo: [[01-work/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo 73]]
- Templates: [[01-work/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1|templates G03.C2]]
