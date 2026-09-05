---
title: Piloto Firjan — processamento refinado
tipo: resultado-processamento
destino: 02-refinement
classe: derivado
data-revisao: 2026-08-31
fonte-original: "[[05-resources/Processar/Plataforma HUB/01-mvps/MVP - Candidatos/fontes/HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx|HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx]]"
cartao-processamento: "[[05-resources/Processar/Plataforma HUB/00-entrada/piloto-firjan-processamento.md|piloto-firjan-processamento]]"
---

# Piloto Firjan — processamento refinado

Resultado refinado do piloto controlado de processamento dos materiais do MVP Firjan. O documento foi criado diretamente em `02-refinement/pesquisa/`, conforme o destino aprovado, sem mover ou alterar o workbook original.

## Fatos

- O README de [[MVP - Candidatos]] descreve a jornada formação → oportunidade → contratação e um MVP para conectar pessoas formadas pela Firjan a empresas associadas.
- O workbook contém oito abas de planejamento: fluxo do MVP, dimensionamento, escopo, mão de obra, investimento, custo/caixa, plano do case e resumo executivo.
- O dimensionamento de referência é de 10 empresas, até 1.000 candidatos, 2 recrutadores por empresa, aproximadamente 50 oportunidades e cerca de 500 matches apresentados.
- As taxas editáveis do modelo são 30% de avanço de match para entrevista e 20% de contratação por entrevista; a capacidade resultante é 150 entrevistas e 30 contratações, com conversão candidato → contratação de 3%.
- O escopo enxuto inclui importação administrativa, perfil, oportunidade, matching por regras ponderadas, shortlist, candidatura, funil, feedback e dashboards; recomendações de desenvolvimento e relatório de impacto ficam na Fase 2.
- O plano do case organiza preparação no mês 1, matching nos meses 2–3, conversão nos meses 4–5 e case no mês 6. O workbook é um modelo de planejamento e não contém uma base nominal de candidatos.

## Hipóteses

- Os volumes, taxas e custos do workbook são premissas editáveis a validar com Firjan e empresas participantes, não resultados observados nem promessa de contratação.
- O destino `02-refinement` é adequado porque o resultado refina fluxo, critérios de matching, indicadores e perguntas de validação operacional.
- A criação direta desta nota em `02-refinement/pesquisa/` atende ao encaminhamento do artefato aprovado sem exigir a movimentação do workbook-fonte.

## Decisões

- Manter o workbook original no caminho atual em `01-mvps/MVP - Candidatos/fontes/` durante este piloto.
- Registrar o cartão em `00-entrada/` e marcar `concluido` somente após verificar o artefato roteado, os links e a permanência da fonte.
- Encaminhar o resultado refinado para `02-refinement/pesquisa/` após revisão humana.
- Tratar o workbook como fonte de planejamento (`classe: fonte`) e preservar a distinção entre capacidade projetada e evidência real.

## Lacunas e bloqueios

- Falta autorização/cronograma confirmado da Firjan e das empresas para testar o lote de 10 empresas.
- Falta acesso a dados anonimizados ou agregados de candidatos, vagas e resultados para medir baseline e taxas reais.
- Falta definir critérios de consentimento, retenção, acesso e tratamento de dados pessoais antes de qualquer importação real; nenhuma linha nominal foi processada neste piloto.
- Falta definir a regra de ponderação do matching e o responsável por validar a aderência percebida.
- Faltam critérios de aceite quantitativos para os KPIs (match → entrevista, entrevista → contratação, tempo até primeira oportunidade e motivos de não avanço).

## Relações

- Cartão de processamento: [[05-resources/Processar/Plataforma HUB/00-entrada/piloto-firjan-processamento.md|piloto-firjan-processamento]]
- Fonte original: [[05-resources/Processar/Plataforma HUB/01-mvps/MVP - Candidatos/fontes/HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx|HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx]]
- Contexto do MVP: [[MVP - Candidatos]]
- Manifesto: [[manifesto-processamento]]
- Fila: [[HUB_Fila_Processamento]]
