---
titulo: Padrões de dashboard — HUB
status: rascunho / provisório / não aprovado
escopo: arquiteturas provisórias para operação, gestão e visão executiva
owner: Produto + Dados/Inteligência + Operação — a confirmar
fontes:
  - principios-de-interface.md
  - tokens-de-interface.md
  - hierarquia-de-metricas.md
  - regras-de-visualizacao-de-dados.md
  - ../04-sistema-de-apresentacoes/regras-de-graficos-e-tabelas.md
dependencias:
  - ../06-governanca-e-publicacao/status-e-rotulos-de-maturidade.md
---

# Padrões de dashboard — HUB

> Arquiteturas provisórias para testar decisões e rotinas. Nenhum layout presume que as métricas, fontes ou produtos estejam validados.

## 1. Estrutura comum

Todo dashboard deve apresentar, nesta ordem flexível:

1. objetivo e público;
2. período, timezone, coorte e filtros ativos;
3. estado de atualização e qualidade da fonte;
4. resumo da decisão ou leitura principal;
5. métricas organizadas por hierarquia;
6. detalhes, distribuição e exceções;
7. fontes, definições, owner e limitações;
8. próxima ação, responsável e data de revisão.

## 2. Três vistas

### Operação diária

Foco em exceções e ações imediatas. Mostrar fila, estado, SLA ou evento, responsável, timestamp e caminho de recuperação. Evitar métricas estratégicas sem ação associada.

### Gestão mensal

Foco em tendência, comparação com baseline e decisões de capacidade. Mostrar período comparável, denominador, mudanças relevantes, qualidade de instrumentação e hipóteses explicativas separadas de observações.

### Visão executiva trimestral

Foco em direção e trade-offs. Mostrar poucos indicadores, contexto, riscos, decisões requeridas e grau de validade. Não converter projeção, correlação ou cenário em resultado financeiro realizado.

## 3. Regras de layout

- uma pergunta ou decisão principal por viewport;
- filtros globais visíveis e filtros locais próximos do visual afetado;
- cards de destaque limitados a indicadores com definição e fonte;
- tabelas para inspeção e auditoria, não apenas para decorar a tela;
- detalhes sob demanda sem esconder contexto essencial;
- responsividade definida por prioridade de conteúdo, não por redução indiscriminada de fonte.

## 4. Critérios de qualidade

- não há métrica sem unidade, período ou definição aplicável;
- discrepâncias e dados parciais aparecem como estado explícito;
- gráficos possuem título orientado à pergunta e resumo textual;
- status de maturidade é visível;
- cada decisão tem owner e próxima ação;
- filtros e coortes são exportáveis ou reproduzíveis;
- a tela não sugere causalidade, ROI, certificação ou impacto sem evidência correspondente.

## 5. Pendências

- selecionar casos reais de operação, gestão e executivo;
- validar disponibilidade e qualidade das fontes;
- definir permissões, retenção, atualização e auditoria;
- testar densidade, zoom, teclado, impressão e telas menores;
- nomear owners e aprovar definições das métricas.
