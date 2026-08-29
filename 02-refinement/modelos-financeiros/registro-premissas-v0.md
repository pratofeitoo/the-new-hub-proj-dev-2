---
title: Registro de Premissas com Proveniência — v0 (FIN-001)
type: registro-proveniencia
status: rascunho
layer: refining
area: business-model
gap_ids:
  - FIN-001
  - FIN-003
source_task: "[[04-project-management/tarefas/P06-T01_Registro_Premissas|P06-T01]]"
depends_on:
  - "[[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo|P03-T05]] — 73 indicadores canônicos"
  - "[[04-project-management/tarefas/P05-T04_Baseline_Tecnico_Capacidade|P05-T04]] — baseline custo/latência/volume/rate-limit"
related_notes:
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-001]]"
  - "[[02-refinement/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/indicator-financial-consistency]]"
  - "[[02-refinement/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/sintese-entre-abas/README|Catálogo canônico P03]]"
  - "[[05-resources/planilhas/HUB_Mapa_Financeiro_Patrocinadores_Investidores.xlsx]]"
target_layer: refining
review_date: a-definir
created: 2026-08-29
updated: 2026-08-29
tags:
  - hub
  - financas
  - premissas
  - proveniencia
  - refining
  - FIN-001
---

# Registro de Premissas com Proveniência — v0

> [!warning] Regra FIN-001 · G06.1
> **Nenhuma premissa ilustrativa pode ser apresentada como afirmação validada.** Toda linha abaixo permanece como **hipótese em refinamento** até ter fonte, data, confiança, dono e próxima evidência registrados. `Sem TBD em premissa crítica` — se não houver fonte, mantenha `TBD` explícito e registre o bloqueio em `FIN-001`. Este arquivo é `em-revisao`; não constitui aprovação financeira, contábil ou jurídica.

Este registro operacionaliza [[04-project-management/tarefas/P06-T01_Registro_Premissas|P06-T01]] e alimenta [[04-project-management/tarefas/P06-T02_Modelo_Financeiro_3_Cenarios|P06-T02]] (3 cenários). Ele é a **camada de proveniência** entre os dois insumos travados em `P03/P05` e o modelo financeiro.

- **P03-T05** → `02-refinement/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/` — 73 indicadores com fórmula/dimensão/owner. Toda premissa de *valor/resultado* deve apontar para um `indicador_id` canônico.
- **P05-T04** → `02-refinement/modelos-financeiros/` (baseline M0–M2) — custo, latência, volume, rate-limit por integração. Toda premissa de *custo/capacidade* deve apontar para uma linha do baseline.

Sem esse duplo vínculo, qualquer ROI (ex.: `28,42%` ilustrativo do simulador) permanece **não auditável** — ver [[02-refinement/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/indicator-financial-consistency#6. Severidade e readiness|severidade crítica: soma de 6 alavancas sem ledger]].

## Como usar

1. **Preencha uma linha por premissa** que alimenta o modelo (não por KPI genérico). Valores atuais vêm do `HUB_Mapa_Financeiro_Patrocinadores_Investidores.xlsx` e dos 6 pesquisas `segundo-rascunho-projeto` — trate-os como `Observado/Hipótese`, não `Comprovado`.
2. **Sem TBD crítico:** se `fonte`, `confiança` ou `dono` estiverem vazios em premissa que impacta timing/ramp/payback, marque `status = bloqueada` e descreva a próxima evidência.
3. **Rastreabilidade dupla obrigatória:** toda linha deve ter `indicador_P03` *ou* `baseline_P05` (ou ambos) — sem isso, P07 não consegue verificar `G07.4` (sem órfão).
4. **Atualize `updated` e `review_date`** a cada preenchimento; a promoção para `validado/realizado` exige evidência escrita e está fora desta fase (Camada 3).

## Tabela principal — premissas com proveniência

| premissa_id | descrição | valor_atual (ilustrativo) | unidade | fonte | data_fonte | confiança | dono | indicador_P03 | baseline_P05 | alavanca árvore valor | gap | status | próxima evidência | data revisão |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FIN-P001 | ROI ilustrativo do simulador | 28,42% | % | `06_Simulador_ROI` H20 (antes do ledger) | 2026-08-20 | baixa — ilustrativa, sem ledger deduplicado | Finanças (a designar) | `FIN-10` / `PRO-08` (a vincular) | — | 6 alavancas somadas (produtividade+contratação+retenção+compras+risco+margem) | FIN-001 / FIN-003 | hipótese | Substituir por ledger de benefícios deduplicado por `contrato_id+alavanca+período`; reconciliar com Finanças | a definir |
| FIN-P002 | Benefício bruto anual (soma 6 alavancas) | R$ 1.220.000 | R$ | `06_Simulador_ROI` H16 | 2026-08-20 | baixa — sem teste de independência | Finanças (a designar) | `DAT-01/02/03` → `PRO-*` / `RH-*` (a vincular) | — | H16 soma sem exclusividade | FIN-001 / FIN-003 | bloqueada — sobreposição não testada | Matriz de exclusividade + teto por pessoa/período; decompor por alavanca | a definir |
| FIN-P003 | Benefício líquido | R$ 270.000 | R$ | `06_Simulador_ROI` (H16 - investimento) | 2026-08-20 | baixa | Finanças (a designar) | — | — | — | FIN-001 | hipótese | Reconciliar com fato financeiro único (contrato/transação) | a definir |
| FIN-P004 | Investimento total | R$ 950.000 | R$ | `06_Simulador_ROI` | 2026-08-20 | baixa — one-off+recorrente misturados | Finanças (a designar) | — | `TEC-005` (a vincular custo/latência) | — | FIN-001 / FIN-006 | hipótese | Separar one-off vs. recorrente; curva mensal de desembolso/ramp | a definir |
| FIN-P005 | Payback apresentado | 9,34 meses | meses | `06_Simulador_ROI` H20 (bruto) | 2026-08-20 | baixa — bruto vs. líquido | Finanças (a designar) | — | — | — | FIN-003 | hipótese | Recalcular com fluxos líquidos/mensais; explicitar "payback bruto" vs. caixa | a definir |
| FIN-P006 | LTV/CAC HUB | 5,33x | x | `06_Simulador_ROI` bloco unit economics | 2026-08-20 | baixa — sem ponte cliente→receita HUB | Finanças (a designar) | `FIN-10` | — | — | FIN-001 | hipótese | Construir ponte: valor cliente → receita HUB → custo servir → margem HUB | a definir |
| FIN-P007 | Payback CAC | 9,38 meses | meses | `06_Simulador_ROI` | 2026-08-20 | baixa | Finanças (a designar) | — | — | — | FIN-001 | hipótese | Enriquecer com expansão/churn por coorte + custos variáveis | a definir |
| FIN-P008 | _[adicione premissa de timing/ramp]_ | TBD | TBD | TBD — **bloqueada se TBD** | — | TBD | TBD | TBD | `P05-T04` linha M0/M1/M2 | TBD | FIN-003 | bloqueada | Fonte, janela e método causal (baseline/holdout) | a definir |
| FIN-P009 | _[adicione premissa de atribuição HUB]_ | TBD | % | TBD | — | TBD | TBD | `PRO-08` (âncora experimental) | — | TBD | FIN-001 | bloqueada | Definir método/teto aprovado; unidade de análise + comparador | a definir |
| FIN-P010 | _[adicione premissa de baseline/comparador]_ | TBD | TBD | TBD | — | TBD | TBD | `DAT-001/002/003` | — | TBD | FIN-001 | bloqueada | Baseline, janela, coorte, denominador e versão da fórmula | a definir |

> **Regra de preenchimento:** não apague linhas `TBD` — elas documentam lacunas para `P07-T05`. Uma premissa só sai de `hipótese/bloqueada` quando `fonte + data + confiança + dono + próxima evidência` estiverem preenchidos e a evidência estiver linkada em `05-resources/planilhas/` ou `02-refinement/`.

## Wiring explícito — P03 (métricas) e P05 (baseline)

### P03-T05 → quais indicadores cada premissa consome

| premissa_id | indicador_P03 (ID canônico Master) | fórmula/versão | janela/período | baseline | owner P03 | estado do dado |
|---|---|---|---|---|---|---|
| FIN-P001 | `FIN-10` (ROI) + `PRO-08` (experimento) | a vincular à versão do catálogo | a definir | a definir | Dados (a designar) | estimado |
| FIN-P002 | `PRO-*`, `RH-06`, `RH-07`, `ENT-*` | idem | idem | idem | Dados (a designar) | estimado |
| FIN-P00X | _preencher_ | _fórmula vX_ | _mensal/trimestral_ | _baseline + comparador_ | _owner_ | estimado → validado → realizado |

> Fonte canônica: `02-refinement/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/` + `HUB_Mapa_Inteligencia_Dados_Indicadores_MELHORADO_v1.1.xlsx`. Se o indicador não existir no Master, registre a lacuna em `DAT-005` antes de usar.

### P05-T04 → qual baseline cada premissa consome

| premissa_id | integração (M0–M2) | baseline_P05 (tabela) | custo | latência | volume | rate-limit | disponibilidade | fonte baseline | data baseline |
|---|---|---|---|---|---|---|---|---|---|
| FIN-P004 | CRM / plataforma / warehouse / consentimento (a detalhar) | `P05-T04` Tabela de baseline | TBD | TBD | TBD | TBD | TBD | a definir | a definir |
| FIN-P00X | _M0/M1/M2_ | _linha da tabela_ | _R$_ | _ms_ | _req/mês_ | _req/s_ | _%_ | _link_ | _data_ |

> Fonte canônica: `02-refinement/modelos-financeiros/` — tabela de baseline por integração (P05-T02 → P05-T04). Sem essa linha, P06-T01 não pode fechar `G05.4` e P07 não passa em `G07.4`.

## Tabela de proveniência e confiança

| premissa_id | fonte primária | link/arquivo | data de corte | frescor | cobertura | coorte | estado valor | confiança | limitação conhecida |
|---|---|---|---|---|---|---|---|---|---|
| FIN-P001 | `06_Simulador_ROI` | `01-tabs-csv/06_Simulador_ROI/` | 2026-08-20 | desatualizado | 73 indicadores sem ledger | — | estimado | baixa | Soma sem exclusividade; sem fato financeiro único |
| FIN-P00X | _ex.: CRM billing_ | _path_ | _YYYY-MM-DD_ | _dias_ | _%_ | _coorte_ | _estimado/validado/realizado_ | _alta/média/baixa_ | _ex.: pipeline ≠ receita_ |

Estados de valor: `estimado` → `validado` → `realizado` → `revertido`. Só `realizado` com `contrato_id/transacao_id` entra no fato financeiro deduplicado.

## Critério de aceite — G06.1

- [ ] Nenhuma premissa crítica com `TBD` (fonte/data/confiança/dono vazios)
- [ ] Cada premissa com `indicador_P03` ou `baseline_P05` vinculado (rastreabilidade dupla)
- [ ] Cada premissa com `próxima evidência` e `data revisão` explícitas
- [ ] Ledger de benefícios definido: chave `nó central + evento econômico + alavanca + período + coorte`, com dedup por `indicador+baseline+período`

Quando todos os checkboxes acima estiverem marcados, este registro pode ser proposto para revisão em `P06-T01`; a promoção para `validado` exige revisão de Finanças e está fora desta fase.

## Próximos passos

1. Preencher `FIN-P008…P010` com as premissas reais que alimentam timing/ramp/atribuição — hoje estão `TBD` de propósito para forçar proveniência.
2. Vincular cada linha a `05-resources/planilhas/HUB_Mapa_Financeiro_Patrocinadores_Investidores.xlsx` (reconciliação) e ao `catálogo Master` versionado.
3. Quando a tabela principal estiver sem `TBD` crítico, abrir `P06-T02` (3 cenários) consumindo este registro — nunca o inverso.

## Histórico

- **2026-08-29 — v0 scaffold:** estrutura criada como esqueleto `em-revisao` para `P06-T01` (FIN-001), com wiring `P03-T05` + `P05-T04` e 7 premissas ilustrativas do simulador marcadas como `hipótese/bloqueada`. Nenhuma afirmação validada.
