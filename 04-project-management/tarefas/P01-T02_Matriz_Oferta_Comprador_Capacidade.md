---
title: P01-T02 — Matriz oferta × comprador × capacidade (v1)
task_id: P01-T02
phase: P01
status: em-revisao
priority: critica
area: business-model
layer: blueprint
owner:
  - PF Rezende
  - Tamara
gap_ids:
  - STR-002
dependencies:
  - P01-T01
target_file: 01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-002]]"
created: 2026-08-26
updated: 2026-08-27
tags:
  - task
  - fase-P01
---

# P01-T02 — Matriz oferta × comprador × capacidade (v1)

## Objetivo
Construir matriz `oferta × comprador × frente de negócio × unidade responsável × motor de receita` para todas as ofertas candidatas.

## Entregável
Tabela validável em `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md`. Cada oferta: nome, unidade dona (A), comprador primário, JTBD, troca de valor, motor receita, premissa aberta linkada a gap.

## Dependências
- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]]

## Critério de aceite (G01.1/G01.2)
Nenhuma oferta em 2 unidades sem regra de propriedade + acordo intragrupo anotado.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/STR-002]]

## Execução

- **Entregável produzido:** matriz oferta → comprador → unidade → capacidade → operação → receita → gap adicionada em [[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita#2.1 Matriz oferta → comprador → unidade → capacidade → operação → receita → gap]].
- **Cobertura:** 17 ofertas candidatas nas frentes Mídia e Experiências, Impacto Financiável e Ecossistemas Empresariais.
- **Resultado:** cada linha possui unidade dona, capacidade principal, operação/troca de valor, motor de receita e gap vinculado.
- **Próximo gate:** validar compradores, JTBD, parceiros, riscos e classificação de receita em refinamento; manter hipóteses explícitas até os aceites de P01.

## Validação estrutural de STR-002 — 2026-08-27

O inventário foi reconciliado com a matriz §2.1 e com os segmentos de lançamento §2.2.

| Critério | Resultado | Evidência |
|---|---|---|
| Ofertas cobertas | **17/17** | 5 em Mídia e Experiências; 6 em Impacto Financiável; 6 em Ecossistemas Empresariais |
| Propriedade única | **17/17** | 11 ofertas sob HUB Negócios (N) e 6 sob Instituto HUB (I); nenhuma oferta tem duas unidades donas |
| Comprador primário | **17/17** | Cada linha identifica o grupo comprador; os papéis de assinatura, pagamento e operação estão qualificados nos segmentos §2.2 |
| Troca de valor / operação | **17/17** | Cada linha descreve a operação e o valor entregue ao comprador |
| Motor econômico | **17/17** | Cada linha possui motor de receita; recorrência, marketplace e classificação contábil permanecem hipóteses quando indicado |
| Gap rastreável | **17/17** | Cada linha aponta STR-002 e os gaps complementares aplicáveis |

### Resultado da validação

- **Propriedade:** fechada em nível de Blueprint; a unidade dona está definida por oferta e não é alterada pelo uso de capacidades compartilhadas.
- **Comprador:** definido em nível de segmento e função compradora; ainda não é comprador nomeado nem evidência de demanda.
- **Economia:** motor de receita e faixa de teste estão definidos; não constituem preço aprovado, margem, ARR, receita reconhecida ou tração.
- **Condição G01.1/G01.2:** atendida estruturalmente para a versão v1, sem sobreposição de unidade dona.

### Pendências para aceite formal

- Nomear o comprador real e a autoridade de contratação para a primeira oferta de cada segmento.
- Confirmar JTBD, orçamento real, custo de entrega, limite de serviço e economia unitária.
- Registrar evidência de demanda no log GTM-002 antes de classificar qualquer rota como tração.
- Reconciliar classificação e reconhecimento de receita com Finanças em FIN-002.
- Registrar aceite nominal do owner de STR-002; a validação estrutural não equivale a aprovação interfuncional.
