---
title: P01-T02 — Matriz oferta × comprador × capacidade (v1)
task_id: P01-T02
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
projects:
  - "[[Fases 01-07]]"
dateModified: 2026-09-01T19:45:04.324-03:00
---

# P01-T02 — Matriz oferta × comprador × capacidade (v1)

## Objetivo
Construir matriz `oferta × comprador × frente de negócio × unidade responsável × motor de receita` para todas as ofertas candidatas.

## Entregável
Tabela validável em `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md`. Cada oferta: nome, unidade dona (A), comprador primário, JTBD, troca de valor, motor receita, premissa aberta linkada a gap.

## Dependências
- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]]

## Critério de refinamento (G01.1/G01.2)
Nenhuma oferta em 2 unidades sem regra de propriedade + acordo intragrupo anotado.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/STR-002]]

## Execução

- **Entregável produzido:** matriz oferta → comprador → unidade → capacidade → operação → receita → gap adicionada em [[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita#2.1 Matriz oferta → comprador → unidade → capacidade → operação → receita → gap]].
- **Cobertura:** 17 ofertas candidatas nas frentes Mídia e Experiências, Impacto Financiável e Ecossistemas Empresariais.
- **Resultado:** cada linha possui unidade dona, capacidade principal, operação/troca de valor, motor de receita e gap vinculado.
- **Próximo ciclo de refinamento:** investigar compradores, JTBD, parceiros, riscos e classificação de receita; manter hipóteses explícitas e não tratá-las como decisões finais.

## Verificação estrutural de STR-002 — 2026-08-27

O inventário foi reconciliado com a matriz §2.1 e com os segmentos de lançamento §2.2.

| Critério | Resultado | Evidência |
|---|---|---|
| Ofertas cobertas | **17/17** | 5 em Mídia e Experiências; 6 em Impacto Financiável; 6 em Ecossistemas Empresariais |
| Propriedade única | **17/17** | 11 ofertas sob HUB Negócios (N) e 6 sob Instituto HUB (I); nenhuma oferta tem duas unidades donas |
| Comprador primário | **17/17** | Cada linha identifica o grupo comprador; os papéis de assinatura, pagamento e operação estão qualificados nos segmentos §2.2 |
| Troca de valor / operação | **17/17** | Cada linha descreve a operação e o valor entregue ao comprador |
| Motor econômico | **17/17** | Cada linha possui motor de receita; recorrência, marketplace e classificação contábil permanecem hipóteses quando indicado |
| Gap rastreável | **17/17** | Cada linha aponta STR-002 e os gaps complementares aplicáveis |

### Resultado da verificação estrutural

- **Propriedade:** coerente em nível de Blueprint; a unidade dona está delineada por oferta e não é alterada pelo uso de capacidades compartilhadas.
- **Comprador:** definido em nível de segmento e função compradora; ainda não é comprador nomeado nem evidência de demanda.
- **Economia:** motor de receita e faixa de teste estão definidos como hipóteses; não constituem preço, margem, ARR, receita reconhecida ou tração.
- **Condição G01.1/G01.2:** atendida estruturalmente para a versão v1, sem sobreposição de unidade dona.

### Pendências para o próximo ciclo de refinamento

- Refinar o perfil do comprador e a autoridade de contratação para a primeira oferta de cada segmento; não são compradores nomeados nesta camada.
- Refinar JTBD, hipóteses de orçamento, custo de entrega, limite de serviço e economia unitária; não buscar confirmação financeira nesta camada.
- Registrar evidências de demanda no log GTM-002; manter qualquer rota como hipótese até haver evidência suficiente.
- Refinar a classificação e o reconhecimento de receita com as hipóteses de Finanças em FIN-002.
- Registrar o parecer interno do owner de STR-002; a validação estrutural não equivale a aprovação interfuncional.

## Resultados detalhados — ver artefato dedicado

As fichas operacionais completas (17 ofertas), a matriz de prontidão e os cenários de teste foram movidos para arquivo dedicado para manter esta nota como índice de resultados.

- **Fichas operacionais (17):** [[02-refinement/refinamento-produto/fichas-operacionais-P01-T02-v1|fichas-operacionais-P01-T02-v1.md]] — JTBD, comprador, parceiros, riscos e critérios de sucesso por oferta (Mídia 5, Impacto 6, Ecossistemas 6).
- **Matriz de prontidão:** incluída no mesmo arquivo — `17/17 fichas completas em v1`.
- **Cenários de teste (SEG-01..06):** [[04-project-management/cenarios/P01-S01_SEG-01_Empresas_Marca_Comunicacao_Empregador|SEG-01]] a [[04-project-management/cenarios/P01-S06_SEG-06_Acesso_Empresarial_Plataforma|SEG-06]] — permanecem em `hypothesis`.

> Esta nota mantém apenas o resumo executivo (Execução + Verificação). O histórico completo vive em `02-refinement/refinamento-produto/` e nos arquivos de cenário; não duplique conteúdo — vincule.
