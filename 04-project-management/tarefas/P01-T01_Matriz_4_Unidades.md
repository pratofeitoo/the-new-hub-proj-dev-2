---
title: P01-T01 — Matriz 4 Unidades (capacidades compartilhadas vs específicas)
task_id: P01-T01
phase: P01
status:
  - concluido
priority: critica
area: business-model
layer: blueprint
owner:
  - PF Rezende
  - Tamara
gap_ids:
  - STR-001
dependencies: []
target_file: 01-work/mercado-e-direcao/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[01-work/mercado-e-direcao/estrategia/HUB_Fundacao_Blueprint_Projeto]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-001]]"
created: 2026-08-26
tags:
  - task
  - fase-P01
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:44:59.408-03:00
---

# P01-T01 — Matriz 4 Unidades (capacidades compartilhadas vs específicas)

## Objetivo
Mapear HUB marca/estratégia, HUB Negócios, Instituto HUB e Plataforma HUB em matriz 4×N com capacidades compartilhadas vs específicas por unidade.

## Entregável
Tabela + diagrama mermaid em `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` § Matriz 4 Unidades. Cada linha: capacidade, unidade dona (A único), tipo `compartilhada/específica`.

## Dependências
Nenhuma — primeira tarefa de P01.

## Critério de refinamento (G01.1 parcial)
Quatro unidades com proprietário único por capacidade; sem sobreposição não justificada.

## Registros relacionados
- [[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio#7. Tarefas (backlog inicial)]]
- [[00-project-control/registro-lacunas/lacunas/STR-001]]

## Execução

- **Entregável produzido:** matriz 4×N e diagrama Mermaid adicionados em [[01-work/mercado-e-direcao/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita#1.1 Matriz de capacidades das quatro unidades]].
- **Resultado:** cada capacidade possui um proprietário único (A único); capacidades compartilhadas e específicas estão explicitamente classificadas.
- **Próximo ciclo de refinamento:** revisão de coerência por Estratégia, Operações, Jurídico e Finanças, conforme as necessidades de investigação de [[00-project-control/registro-lacunas/lacunas/STR-001]].

## Revisão cross-functional — 2026-08-27

> [!warning] Parecer preparatório
> Esta revisão interna indica um ponto de partida para progressão controlada no refinamento. Não encerra `STR-001` nem transforma a matriz em decisão final.

| Função | Parecer | Condição principal |
|---|---|---|
| Estratégia | Refinar com condições | Reconciliar o diagrama com as 10 capacidades e conectar cada oferta a comprador, troca de valor, unidade, capacidade e receita. |
| Operações | Refinar com condições | Definir RACI, handoffs, entradas/saídas, gatilhos, critérios de serviço e escalonamento entre unidades. |
| Jurídico / Governança | Refinar com condições | Separar accountability operacional de titularidade jurídica, autoridade, contratos intercompany, PI, dados, funding restrito e independência do Selo. |
| Finanças | Refinar com condições | Estruturar hipóteses sobre entidade contratante/faturadora, reconhecimento, centros de custo, rateio da Plataforma, transfer pricing e ring-fencing de funding restrito. |

### Condições consolidadas para o próximo ciclo de refinamento

- [ ] Designar responsável por `STR-001` e registrar os quatro pareceres internos.
- [ ] Corrigir a cobertura do diagrama Mermaid para refletir todas as capacidades da matriz.
- [ ] Criar a matriz `oferta → comprador → unidade → capacidade → operação → receita → gap` em P01-T02/P01-T03.
- [ ] Documentar interfaces operacionais, direitos de decisão e critérios de serviço entre as unidades.
- [ ] Registrar fronteiras jurídicas, de PI, dados, funding, custos, receita e contratos intercompany.
- [ ] Manter `STR-001` aberto até que as evidências necessárias e as coerências do modelo sejam trabalhadas.

**Estado de revisão:** `em-revisao` — considerado insumo de Blueprint para o próximo ciclo; o gap permanece aberto para refinamento.

## Governança de STR-001

- **Owner do gap:** PF Rezende.
- **Responsabilidade:** coordenar o refinamento das condições, consolidar evidências e registrar pareceres internos.

| Função revisora | Parecer interno | Estado | Evidência / data |
|---|---|---|---|
| Estratégia | A designar | pendente | — |
| Operações | A designar | pendente | — |
| Jurídico / Governança | A designar | pendente | — |
| Finanças | A designar | pendente | — |

Os quatro pareceres permanecem em aberto até que os responsáveis sejam nomeados e registrem suas observações. Nenhuma decisão final é inferida a partir do parecer preparatório.
