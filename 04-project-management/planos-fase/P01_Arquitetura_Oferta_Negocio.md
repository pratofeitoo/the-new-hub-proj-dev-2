---
title: P01 — Arquitetura de Oferta & Negócio
phase: P01
version: 1
status:
  - active
layer: blueprint
priority: critica
area: business-model
owner:
  - PF Rezende
  - Finanças (a designar)
tags:
  - hub
  - fase-projeto
  - P01
  - business-model
  - gtm
gap_ids:
  - STR-001
  - STR-002
  - STR-003
  - STR-005
  - FIN-002
  - GTM-001
  - GTM-002
bp_tasks:
  - BP-001
related_notes:
  - "[[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita]]"
  - "[[01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto]]"
  - "[[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto]]"
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
created: 2026-08-26
updated: 2026-08-26
---

# P01 — Arquitetura de Oferta & Negócio

> [!info] Papel no sequenciamento
> **Primeira fase executável.** Resolve a coerência entre as 4 unidades do grupo, 3 frentes de negócio e motores de receita antes que qualquer produto/dados seja detalhado. Sem este gate, PRD/DAT/TEC herdam contradições (ex: mesma oferta vendida por 2 unidades, receita restrita contada como ARR).

## 1. Objetivo

Definir como o sistema completo do HUB — marca, HUB Negócios, Instituto HUB e Plataforma HUB — se torna um portfólio coerente de ofertas, compradores, trocas de valor, motores de receita e responsabilidades por unidade. Conectar cada oferta ao blueprint completo sem apresentá-la como validada.

> Alvo: reduzir os gaps de refinamento `STR-001..003` (relação unidades↔ofertas↔roadmap) + estruturar hipóteses sobre a origem de cada real (`FIN-002`) + delinear segmentos de lançamento (`GTM-001`).

## 2. Gaps de refinamento trabalhados nesta fase

| ID | Gap | Tipo | Evidência/condição de refinamento |
|---|---|---|---|
| **STR-001** | Relação unidades↔ofertas↔clientes↔ops↔plataforma | definition | Modelo de sistema coerente, com hipóteses, interfaces e pontos de investigação registrados |
| **STR-002** | Arquitetura de ofertas (quem compra o quê, por qual unidade, com qual recorrência) | definition | Toda oferta de lançamento tem comprador, troca de valor, responsável e economia |
| **STR-003** | Roadmap que preserve sistema completo | connection | Dependências e critérios de saída de fase coerentes entre os domínios, com lacunas explícitas |
| **STR-005** | Papel de parceiros e rota comercial | definition | Nenhum caminho crítico depende de parceiro não confirmado |
| **FIN-002** | Taxonomia de receita primária/secundária/expansão | definition | Classificação e lógica de relatórios estruturadas como hipótese de trabalho, com questões para refinamento financeiro |
| **GTM-001** | Segmentação por portfólio | definition | Segmentos e propriedade de lançamento delineados, com premissas e evidências necessárias registradas |
| **GTM-002** | Demanda documentada por rota | evidence | Rotas classificadas como hipótese até que evidências de demanda sejam registradas |

> Backlog não-crítico desta fase: `STR-004` (moat), `STR-006` (categorias), `STR-007` (autoridade delegada) — entram em P06/P04.

## 3. Escopo

### Dentro
1. Mapa das 4 unidades: marca/estratégia, negócios, instituto, plataforma — capacidades compartilhadas vs específicas.
2. Matriz `oferta × comprador × frente de negócio × unidade responsável × motor de receita`.
3. Definição de motores: licenciamento ecossistema, assinatura empresarial, implementação, diagnóstico/evolução, marketplace (adiado), mídia/experiências, funding restrito instituto, selo (restrito).
4. Separação explícita: receita comercial vs restrita (leis incentivo, doações) — nunca misturar em ARR.
5. Arquitetura de compradores de lançamento (quem assina, quem paga, quem opera).
6. Portfólio de parceiros estratégicos + matriz de dependências + limites de concentração preliminares.
7. Roadmap P01→P07 com critérios de saída por fase (este plano é a entrega).

### Fora (fica para downstream)
- Detalhe de capacidades de produto (P02)
- Entidades de dados e eventos (P03)
- Contratos jurídicos e Selo charter (P04)
- Specs de integração e SLOs (P05)
- Modelo financeiro com premissas validadas e GTM routes com evidência de demanda (P06)
- Qualquer afirmação de TAM/preço/tração (P06, só com evidência)

## 4. Entradas

- [`HUB_Fundacao_Blueprint_Projeto.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto.md) §3 Arquitetura de negócios (§4 unidades, §3 frentes) + §8 Blueprint comercial
- [`HUB_Blueprint_Oferta_e_Arquitetura_Receita.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md) (alvo `BP-001`)
- [`HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-mestres/HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md) §8 Modelo de Negócio (pacotes a testar)
- Gaps `STR-*`, `FIN-002`, `GTM-001/002` em [`HUB_Registro_Lacunas_Projeto.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md)

## 5. Saídas (deliverables)

| Artefato | Onde vive | Camada |
|---|---|---|
| Matriz oferta–comprador–capacidade v1 | `01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` (atualizado) | blueprint |
| Diagrama 4 unidades + frentes + ofertas | mesmo doc (anexo mermaid) | blueprint |
| Taxonomia de receita (primária/secundária/expansão + comercial vs restrita) | mesmo doc § Receita + `05-resources/planilhas/` (tabela) | blueprint |
| Arquitetura de compradores de lançamento (segmentos, papéis, hipóteses de orçamento) | mesmo doc + `02-refinement/pesquisa/` (se entrevistas) | refining |
| Portfólio de parceiros + matriz dependências | `02-refinement/pesquisa/` + `00-project-control/dependencias/` | refining |
| Roadmap P01–P07 atualizado | `HUB_Plano_Fases_v1.md` + `04-project-management/cronogramas/` | gestão |
| Pacote de revisão P01 | `03-approval/pacotes-revisao/P01-Oferta-Negocio.md` | approval |
| Decisão registrada | `00-project-control/decisoes/DEC-P01-*.md` | gestão |

## 6. Critérios de saída (gate P01)

> Todos verificáveis. Gate só passa se **todos** satisfeitos; caso contrário retorna para `02-refinement`.

- [ ] **G01.1** — Cada oferta tem: nome, unidade dona (A único), comprador primário, job-to-be-done, troca de valor, motor de receita e premissa aberta linkada a gap ID.
- [ ] **G01.2** — Nenhuma oferta aparece em 2 unidades sem regra de propriedade explícita e acordo intragrupo anotado.
- [ ] **G01.3** — Taxonomia de receita distingue pelo menos: implementação, licença/plataforma, assinatura, marketplace (adiado), mídia, funding restrito — com regra de reconhecimento (quando vira ARR vs receita pontual vs restrita).
- [ ] **G01.4** — Toda rota crítica de lançamento tem `parceiro = nomeado + status [confirmado/hipótese]`. Se hipótese, há rota fallback documentada (STR-005).
- [ ] **G01.5** — Segmentos de lançamento coerentes com as hipóteses de Finanças, Jurídico e Ops, com questões e evidências faltantes registradas.
- [ ] **G01.6** — Roadmap P01→P07 com dependências e critérios de saída de fase publicado e sem contradição entre domínios (STR-003).
- [ ] **G01.7** — Pacote de revisão P01 submetido a revisão interna de Estratégia, Finanças, Jurídico e Ops, com divergências e próximos ciclos registrados.

## 7. Tarefas (backlog inicial)

> Criar como notas em `04-project-management/tarefas/` com `gap_ids: [STR-001]` etc. + link para `TaskNotes/` se operacional.

| Tarefa | Gap | Tipo |
|---|---|---|
| Mapear capacidades compartilhadas vs específicas por unidade (matriz 4×N) | STR-001 | definition |
| Construir matriz oferta–comprador–capacidade v1 | STR-002 | definition |
| Escrever taxonomia de receita + exemplos de reconhecimento | FIN-002 | definition |
| Definir segmentos + orçamentos compradores de lançamento | GTM-001 | definition |
| Log de evidências por rota (status: hipótese vs tração) | GTM-002 | evidence |
| Definir limites de concentração de parceiros (thresholds) | GTM-006 | governance |
| Conectar roadmap a gates P01–P07 | STR-003 | connection |

## 8. Riscos & mitigações

| Risco | Mitigação |
|---|---|
| Ofertas amplas demais (3 frentes viram 12 ofertas) | Forçar `oferta = comprador + troca + recorrência`; auditar colisão de categoria |
| Receita restrita contada como ARR | Revisão financeira obrigatória no gate (FIN-002) |
| Parceiro tratado como tração | Coluna `status` + `GTM-002` gate: sem evidência escrita = hipótese |

## 9. Referências
- [`BP-001`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/BP-001_HUB_Blueprint_Oferta_e_Arquitetura_Receita.md)
- [`HUB_Plano_Fases_v1.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-mestres/HUB_Plano_Fases_v1.md) §2–§6
