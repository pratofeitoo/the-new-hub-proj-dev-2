---
tipo: cartao-processamento
status: concluido
destino: 02-refinement
classe: fonte
origem: materiais do MVP Firjan presentes em 05-resources/Processar/Plataforma HUB/01-mvps/MVP - Candidatos/
proprietario: Paulo
data-entrada: 2026-08-31
data-revisao: 2026-08-31
fonte-original: "[[05-resources/Processar/Plataforma HUB/01-mvps/MVP - Candidatos/fontes/HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx|HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx]]"
documento-resultado: "[[02-refinement/pesquisa/piloto-firjan-processamento.md|piloto-firjan-processamento]]"
substitui:
---

# Piloto Firjan — cartão de processamento

## Identificação

- Arquivo ou lote relacionado: `HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx`
- Origem: materiais do MVP Firjan em `01-mvps/MVP - Candidatos/`.
- Contexto de recebimento: piloto controlado para validar o fluxo de processamento sem mover a coleção existente.
- Proprietário: Paulo

## Processamento

- [x] Identificar conteúdo e finalidade.
- [x] Separar fatos observados de hipóteses.
- [x] Extrair decisões e perguntas abertas.
- [x] Registrar números com unidade, período e fonte.
- [x] Avaliar dados pessoais, confidenciais ou sensíveis.
- [x] Criar ou atualizar documento-resultado.
- [x] Validar destino final.
- [x] Testar links.

### Histórico de transição

O cartão percorreu, nesta ordem, `novo` → `triagem` → `em-processamento` → `aguardando-revisao` → `aprovado-para-mover` → `concluido`. O artefato aprovado foi roteado por criação direta no destino; o workbook-fonte não foi movido.

## Síntese

### Fatos

- O README de [[MVP - Candidatos]] descreve a jornada formação → oportunidade → contratação e um MVP para conectar pessoas formadas pela Firjan a empresas associadas.
- O workbook contém oito abas de planejamento: fluxo do MVP, dimensionamento, escopo, mão de obra, investimento, custo/caixa, plano do case e resumo executivo.
- O dimensionamento de referência é de 10 empresas, até 1.000 candidatos, 2 recrutadores por empresa, aproximadamente 50 oportunidades e cerca de 500 matches apresentados.
- As taxas editáveis do modelo são 30% de avanço de match para entrevista e 20% de contratação por entrevista; a capacidade resultante é 150 entrevistas e 30 contratações, com conversão candidato → contratação de 3%.
- O escopo enxuto inclui importação administrativa, perfil, oportunidade, matching por regras ponderadas, shortlist, candidatura, funil, feedback e dashboards; recomendações de desenvolvimento e relatório de impacto ficam na Fase 2.
- O plano do case organiza preparação no mês 1, matching nos meses 2–3, conversão nos meses 4–5 e case no mês 6. O workbook é um modelo de planejamento e não contém uma base nominal de candidatos.

### Hipóteses

- Os volumes, taxas e custos do workbook são premissas editáveis a validar com Firjan e empresas participantes, não resultados observados nem promessa de contratação.
- O destino `02-refinement` é adequado porque o resultado refina fluxo, critérios de matching, indicadores e perguntas de validação operacional.
- A nota [[02-refinement/pesquisa/piloto-firjan-processamento.md|piloto-firjan-processamento]] é o documento-resultado dedicado; o README de `MVP - Candidatos` preserva o contexto e a proveniência do material.

### Decisões

- Manter o workbook original no caminho atual em `01-mvps/MVP - Candidatos/fontes/` durante este piloto.
- Registrar o cartão em `00-entrada/` e marcar `concluido` somente após verificar o artefato roteado, os links e a permanência da fonte.
- Encaminhar o resultado refinado para `02-refinement/pesquisa/` após revisão humana; neste piloto, a nota foi criada diretamente no destino.
- Tratar o workbook como fonte de planejamento (`classe: fonte`) e preservar a distinção entre capacidade projetada e evidência real.

### Lacunas e bloqueios

- Falta autorização/cronograma confirmado da Firjan e das empresas para testar o lote de 10 empresas.
- Falta acesso a dados anonimizados ou agregados de candidatos, vagas e resultados para medir baseline e taxas reais.
- Falta definir critérios de consentimento, retenção, acesso e tratamento de dados pessoais antes de qualquer importação real; nenhuma linha nominal foi processada neste piloto.
- Falta definir a regra de ponderação do matching e o responsável por validar a aderência percebida.
- Faltam critérios de aceite quantitativos para os KPIs (match → entrevista, entrevista → contratação, tempo até primeira oportunidade e motivos de não avanço).

## Relações

- Fonte original: [[05-resources/Processar/Plataforma HUB/01-mvps/MVP - Candidatos/fontes/HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx|HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx]]
- Documento-resultado: [[02-refinement/pesquisa/piloto-firjan-processamento.md|piloto-firjan-processamento]]
- Documentos relacionados: [[manifesto-processamento]] · [[HUB_Fila_Processamento]]

## Movimentação verificada

- Destino: `02-refinement/pesquisa/piloto-firjan-processamento.md`
- Fonte preservada: `05-resources/Processar/Plataforma HUB/01-mvps/MVP - Candidatos/fontes/HUB_MVP_Firjan_10_Empresas_1000_Candidatos.xlsx`
- Data da verificação: 2026-08-31
- SHA-256 pré-movimento da fonte: `106b3905fa4ec3826e302f740edb8ad3be424907675f88bcb54f3d53ea83c8cd`
- O artefato aprovado foi criado diretamente no destino; portanto, este piloto foi roteado para `02-refinement/pesquisa/` em vez de mover fisicamente um arquivo existente. A fonte original permanece preservada no caminho de origem.
