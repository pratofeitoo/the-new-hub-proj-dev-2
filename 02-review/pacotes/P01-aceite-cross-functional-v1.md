---
title: P01 — Pacote de aceite cross-functional v1
status: em-revisao
type: pacote-revisao
layer: approval
phase: P01
owner:
  - PF Rezende
related_tasks:
  - P01-T01
  - P01-T02
  - P01-T03
  - P01-T04
gap_ids:
  - STR-001
  - STR-002
  - FIN-002
  - GTM-001
created: 2026-08-27
tags:
  - approval
  - fase-P01
  - cross-functional
---

# P01 — Pacote de aceite cross-functional v1

## Escopo

Este pacote consolida os pareceres preparatórios de P01-T01 a P01-T04. O objetivo é formalizar a fila de aceite, as condições e os responsáveis por decisão; ele **não constitui aprovação final**, fechamento de gap, tração comercial ou autorização de lançamento.

## Artefatos sob revisão

| Task | Artefato | Estado atual | Condição de aceite |
|---|---|---|---|
| [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades\|P01-T01]] | Matriz 4 unidades e ownership | Em revisão | Corrigir cobertura do diagrama, RACI, interfaces, fronteiras jurídicas e responsáveis nominais. |
| [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade\|P01-T02]] | Matriz oferta→comprador→capacidade→receita | Em revisão | Validar comprador, JTBD, parceiro, capacidade, risco e classificação de receita por oferta. |
| [[04-project-management/tarefas/P01-T03_Taxonomia_Receita\|P01-T03]] | Taxonomia e reconhecimento de receita | Em revisão | Registrar responsável financeiro, cenários contratuais, política restrita e decisão de principal/agente. |
| [[04-project-management/tarefas/P01-T04_Segmentos_Orcamentos_Compradores\|P01-T04]] | Segmentos, papéis, processos e orçamentos | Em revisão | Validar funções compradoras, orçamento real, rota de compra e evidência por segmento. |

## Matriz de aceite nominal

| Função | Decisão requerida | Evidência mínima | Status |
|---|---|---|---|
| Estratégia | Aceitar coerência de oferta, ownership e sequenciamento | Parecer nominal + validação de STR-001/002/003 | Pendente |
| Operações | Aceitar RACI, handoffs, critérios de aceite e capacidade de entrega | Parecer nominal + interfaces e SLOs provisórios | Pendente |
| Jurídico/Governança | Aceitar fronteiras jurídicas, PI, dados, funding restrito e independência | Parecer nominal + controles e decisões registradas | Pendente |
| Finanças | Aceitar entidade, contrato, reconhecimento, rateio, transfer pricing e ledger | Parecer nominal + cenários e política de funding | Pendente |

## Regras de decisão

1. Cada função deve registrar nome, data, decisão (`aprovar`, `aprovar com condições` ou `bloquear`) e condições remanescentes.
2. `Aprovar com condições` permite maturidade de Blueprint, mas não fecha os gaps nem libera a fase seguinte.
3. Qualquer condição crítica sem responsável, evidência ou prazo mantém P01 em `em-revisao`.
4. A decisão final deve ser copiada para `00-project-control/decisoes/` e reconciliada com `HUB_Lacunas_Projeto.base`.

## Decisão atual

**Estado:** `em-revisao` — os quatro pareceres preparatórios recomendam aprovação condicional como insumo de Blueprint, mas nenhum aceite nominal foi registrado. `STR-001`, `STR-002`, `FIN-002` e `GTM-001` permanecem abertos.

## Próximos registros

- Preencher os quatro nomes e decisões nominais.
- Anexar evidências de comprador/orçamento ao log GTM-002.
- Reexecutar a revisão após as condições consolidadas em P01-T01–T04.
