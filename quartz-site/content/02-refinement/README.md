# 02-refinement

Esta camada reúne o material de refinamento do HUB: pesquisas, testes, protótipos, revisões, versões iteradas e sínteses que transformam blueprint em algo mais verificável.

## Quando usar esta pasta

Use `02-refinement/` quando você já tiver uma direção inicial em `01-blueprint/` e precisar:

- validar hipóteses;
- comparar alternativas;
- consolidar evidências;
- revisar materiais derivados;
- preparar conteúdo para aprovação.

## Fluxo de leitura recomendado

```mermaid
flowchart LR
    A[Blueprint em 01-blueprint] --> B[Pesquisa / teste / protótipo]
    B --> C[Revisão / revisão iterativa]
    C --> D[Síntese refinada]
    D --> E[Aprovação em 03-approval]
```

## Estrutura desta camada

```mermaid
flowchart TB
    R[02-refinement]
    R --> RE[research/]
    R --> TE[tests-experiments/]
    R --> PR[prototypes/]
    R --> RV[reviews/]
    R --> RS[revisions/]
    R --> DM[refinamento-modelo-dados/]
    R --> FM[modelos-financeiros/]
    R --> PD[refinamento-produto/]
    R --> GR[governance-refinement/]
    R --> ST[strategy/]
```

## O que existe aqui

- [`pesquisa/`](pesquisa/) — pesquisas, validações e leituras de suporte.
- [`testes-experimentos/`](testes-experimentos/) — testes, provas de conceito e experimentos.
- [`prototipos/`](prototipos/) — protótipos e simulações.
- [`revisoes/`](revisoes/) — revisões e análises críticas.
- [`revisoes-iteradas/`](revisoes-iteradas/) — versões reescritas ou ajustadas após feedback.
- [`refinamento-modelo-dados/`](refinamento-modelo-dados/) — sínteses e ajustes do modelo de dados e indicadores.
- [`modelos-financeiros/`](modelos-financeiros/) — refinamentos de lógica e requisitos financeiros.
- [`refinamento-produto/`](refinamento-produto/) — ajustes de produto, fluxo e escopo.
- [`refinamento-governanca/`](refinamento-governanca/) — LGPD, controles, papéis e governança.
- [`estrategia/`](estrategia/) — refinamentos da estratégia-base e documento-mãe.

## Arquivos de referência

- [`../01-blueprint/README.md`](../01-blueprint/README.md) — visão geral da camada anterior.
- [`../README.md`](../README.md) — visão geral do repositório.
- [`pesquisa/segundo-rascunho-projeto/pt-BR/HUB_v2_product_mvp_research-pt-BR.md`](pesquisa/segundo-rascunho-projeto/pt-BR/HUB_v2_product_mvp_research-pt-BR.md) — exemplo de pesquisa em pt-BR.
- [`refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/README.md`](refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas/README.md) — síntese dos indicadores.

## Como trabalhar aqui

1. Parta de um blueprint existente.
2. Traga pesquisa, teste ou revisão para dentro desta camada.
3. Registre o que mudou e por quê.
4. Separe claramente hipótese, evidência e decisão.
5. Promova o resultado para `03-approval/` quando houver maturidade suficiente.

## Regra prática

- Se ainda é ideia, volte para `01-blueprint/`.
- Se já virou evidência, fique em `02-refinement/`.
- Se já é decisão de aprovação, siga para `03-approval/`.

## Contribuição

- Escreva em pt-BR.
- Não duplique o blueprint; refine o que já existe.
- Cite sempre a origem do material derivado.
- Mantenha nomes e status consistentes com o restante do repositório.
