---
titulo: Hierarquia de métricas — HUB
status: rascunho / provisório / não aprovado
escopo: classificação e ordem de leitura de indicadores
owner: Dados/Inteligência + Produto + Governança — a confirmar
fontes:
  - ../02-identidade-verbal/regras-para-evidencia-e-incerteza.md
  - ../02-identidade-verbal/claims-registry.md
  - padroes-de-dashboard.md
  - regras-de-visualizacao-de-dados.md
dependencias:
  - ../06-governanca-e-publicacao/fluxo-de-aprovacao-de-claims.md
---

# Hierarquia de métricas — HUB

> Modelo provisório para impedir que indicadores de instrumentação sejam apresentados como impacto financeiro. A classificação não valida nenhuma métrica específica.

## 1. Camadas

| Camada | Pergunta | Exemplos | Cuidado de interpretação |
|---|---|---|---|
| M0 — qualidade e instrumentação | Podemos confiar na medição? | cobertura, completude, atraso, duplicidade, taxa de erro | não é resultado de negócio |
| M1 — ativação e operação | O fluxo está sendo usado/executado? | entradas, ativação, conclusão, SLA, utilização | uso não prova valor ou causalidade |
| M2 — processo e resultado próximo | O processo mudou no escopo observado? | tempo de ciclo, conversão definida, entrega, retenção da coorte | informar baseline, coorte e período |
| M3 — impacto validado | Há efeito validado no resultado-alvo? | impacto operacional/financeiro com protocolo | exige desenho, comparação, cálculo e revisão |
| M4 — resultado realizado/oficial | O resultado foi reconciliado oficialmente? | receita, custo ou resultado aprovado | exige fonte operacional/financeira e owner competente |

## 2. Regras de uso

- exibir M0 junto de qualquer dashboard que dependa da qualidade da medição;
- nunca usar posição visual para sugerir que M3/M4 existe quando só há M1/M2;
- declarar denominador, unidade, janela, coorte, baseline e método;
- separar valor observado, influência atribuída, cenário e resultado realizado;
- usar `E0`–`E4` do documento de evidência junto da métrica quando houver risco de extrapolação;
- registrar data de validade e owner da definição.

## 3. Ficha mínima de métrica

```text
metric_id:
nome:
camada: M0 | M1 | M2 | M3 | M4
definição:
fórmula/critério:
unidade:
denominador/coorte:
período/timezone:
fonte:
owner:
nível de evidência: E0 | E1 | E2 | E3 | E4
limitação:
validade:
gate/aprovação:
```

## 4. Gates de promoção

- M0–M1: revisão de instrumentação e definição.
- M2: revisão do processo, baseline, coorte e limitações.
- M3: protocolo de validação, comparação e revisão independente.
- M4: reconciliação com fonte oficial e aprovação do owner competente.

Nenhuma camada deve ser promovida por repetição do número em vários documentos.
