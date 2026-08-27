---
title: P01-T03 — Taxonomia de receita e regras de reconhecimento
task_id: P01-T03
phase: P01
status: em-revisao
priority: critica
area: business-model
layer: blueprint
owner:
  - PF Rezende
  - Tamara
gap_ids:
  - FIN-002
dependencies:
  - P01-T02
target_file: 01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/FIN-002]]"
created: 2026-08-26
tags:
  - task
  - fase-P01
---

# P01-T03 — Taxonomia de receita e regras de reconhecimento

## Objetivo
Definir taxonomia primária/secundária/expansão e regra comercial vs restrita (leis incentivo/doações) com exemplos de quando vira ARR vs pontual vs restrita.

## Entregável
Seção § Receita em `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` + tabela em `05-resources/planilhas/` (exemplo).

## Dependências
- [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]]

## Critério de aceite (G01.3)
Taxonomia distingue implementação, licença/plataforma, assinatura, marketplace (adiado), mídia, funding restrito — com regra de reconhecimento.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/FIN-002]]

## Execução

- **Entregável produzido:** taxonomia e regras de reconhecimento adicionadas em [[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita#3.1 Taxonomia operacional e regra de reconhecimento v1]].
- **Tabela de cenários:** [[05-resources/planilhas/HUB_Taxonomia_Receita_Reconhecimento_v1]].
- **Cobertura G01.3:** implementação, licença/plataforma, assinatura, marketplace adiado, mídia/projetos e funding restrito, com distinção entre receita pontual, ARR potencial e receita restrita.
- **Resultado:** regras conceituais de gatilho, exclusões de ARR e controles mínimos documentadas; nenhuma regra contábil ou fiscal foi tratada como aprovada.
- **Próximo gate:** validação nominal de Finanças e reconciliação dos cenários com P01-T02, contratos e ledger fonte da verdade.

## Validação financeira interna — 2026-08-27

> [!warning] Limite do parecer
> A validação interna recomenda **aprovar com condições** para maturidade de Blueprint. Não constitui aprovação nominal de Finanças nem encerra `FIN-002`.

- **Implementação e projetos:** reconhecimento condicionado à identificação e satisfação de cada obrigação de desempenho; aceite ou faturamento isolados não são gatilhos suficientes.
- **Licença e acesso:** acesso hospedado, licença, suporte, atualização, implementação e hospedagem devem ser distinguidos e alocados por obrigação.
- **Assinaturas:** o início da prestação é o marco operacional; faturamento, renovação e aceite são controles ou KPIs, não substitutos da análise da obrigação.
- **Marketplace:** manter adiado até avaliação aprovada de principal versus agente; não presumir apresentação líquida por existir repasse.
- **Funding restrito:** tratar inicialmente como entrada restrita, com instrumento, elegibilidade, período, devolução, ledger e reporte próprios; nunca incluir em ARR comercial.
- **ARR:** tratar como KPI gerencial separado da receita reconhecida, incluindo apenas serviço recorrente contratado e iniciado, com fórmula e data de medição documentadas.

**Condições pendentes:** responsável financeiro designado; cenários contratuais preenchidos; decisão formal sobre licenças e principal/agente; política de funding restrito; regras de entidade, contrato, intercompany e ledger; e aceite nominal registrado. `FIN-002` permanece aberto.
