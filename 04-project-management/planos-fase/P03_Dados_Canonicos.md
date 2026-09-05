---
title: P03 — Dados Canônicos (spine)
phase: P03
version: 1.0
status: rascunho
layer: blueprint
priority: critica
area: data-intelligence
owner:
  - Dados (a designar)
  - Tech (apoio)
  - PF Rezende (interino)
tags:
  - hub
  - fase-projeto
  - P03
  - dados
  - spine
gap_ids:
  - DAT-001
  - DAT-002
  - DAT-003
  - DAT-004
  - DAT-005
  - DAT-006
  - DAT-008
  - DAT-009
  - DAT-010
bp_tasks:
  - BP-003
related_notes:
  - "[[01-work/dados-tech-financas/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia]]"
  - "[[01-work/dados-tech-financas/dados-inteligencia/modelo-indicadores/abas-origem]]"
  - "[[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx]]"
  - "[[04-project-management/planos-fase/P02_Produto_Operacao]]"
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
created: 2026-08-26
updated: 2026-08-26
---

# P03 — Dados Canônicos (spine)

> [!danger] Spine do projeto
> **Fase mais crítica.** Define a linguagem única (entidades, chaves, eventos, métricas, valor) que todas as outras fases consomem. Atraso aqui atrasa P04–P07. Pressa aqui gera retrabalho em FIN/TEC/GOV. Gate P03 tem **sub-gates** para liberar P04/P05 parcialmente sem esperar o catálogo completo de 73 indicadores.

## 1. Objetivo

Produzir o modelo canônico de dados, eventos, métricas e valor do HUB — com chaves estáveis, contratos versionados, linhagem ponta a ponta e distinção formal entre valor potencial/influenciado/validado/realizado — desbloqueando a correção do modelo de indicadores bloqueado em `02-review/bloqueado/`.

## 2. Gaps que esta fase fecha

| ID | Gap | Tipo | Condição de aprovação |
|---|---|---|---|
| **DAT-001** | Modelo canônico entidades: PK, FK, cardinalidade, tipos objeto | definition | Arch dados valida semântica identidade/relacionamentos |
| **DAT-002** | Matching/merging/survivorship entre sistemas origem | implementation | Testes demonstram resolução + reversibilidade |
| **DAT-003** | Envelope canônico evento + schema registry + idempotência | definition | Produtores/consumidores passam em teste contrato+replay |
| **DAT-004** | Linhagem origem→métrica→ação→resultado→valor financeiro | evidence | Toda afirmação publicada tem linhagem reproduzível |
| **DAT-005** | Camada semântica métricas↔fórmulas↔dashboards | connection | Nenhuma métrica crítica com definição alternativa |
| **DAT-006** | Regras atribuição valor + estados valor | definition | Finanças+Gov dados aprovam classificação valor |
| **DAT-008** | Mapa finalidade-campo + retenção/exclusão derivados | governance | LGPD valida propagação ponta a ponta |
| **DAT-009** | Fluxos linhagem/correção/replay/DSAR | implementation | Testes controle passam |
| **DAT-010** | Fonte verdade autoritativa (origem vs corrigido) | validation · **blocking: yes** | Linhagem de artefatos inequívoca antes de liberar o gate P03 |

> Fora desta fase: `DAT-007` (M2/M3 thresholds, fica para P06/M3).

## 3. Escopo

### Dentro
1. Modelo lógico + físico: ~25 nós conceituais → entidades canônicas com PK/FK/tipos/objetos/temporalidade (DAT-001).
2. Serviço de identidade: matching, merge, alias, survivorship, correção e reversão (DAT-002).
3. Envelope de eventos canônico + schema registry, versionamento, idempotência, regras temporais (DAT-003).
4. Templates de linhagem métrica + registro de evidências (DAT-004) conectando `Indicadores Master → Árvore de Valor → Simulador ROI → Dashboard`.
5. Catálogo canônico de métricas + grafo de dependências (DAT-005) — resolver definições alternativas.
6. Taxonomia estados de valor (`potencial → influenciado → validado → realizado`) + políticas cálculo/atribuição/deduplicação/contrafactual (DAT-006).
7. Matriz dados-finalidade + ciclo de vida + fluxos DSAR/exclusão/portabilidade (DAT-008/009).
8. **Desbloqueio do XLSX bloqueado:** reconciliar `01-work/dados-tech-financas/dados-inteligencia/modelo-indicadores/abas-origem/` vs `02-review/bloqueado/.../03-csv-corrigido/` vs `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/` e promover via `04-registro-correcoes/` + `06-relatorios-validacao/`.

### Fora
- Contratos jurídicos de controlador/operador por fluxo (P04)
- Payloads/endpoints/SLOs físicos (P05)
- Modelo financeiro reconstruído com atribuição aprovada (P06 consome a saída desta fase)

## 4. Entradas

- Saídas de **P01** (oferta) + **P02** (fronteiras módulos + jornada com eventos)
- [`HUB_Blueprint_Dados_e_Inteligencia.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-work/dados-tech-financas/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md)
- Mirror completo: [`01-work/dados-tech-financas/dados-inteligencia/modelo-indicadores/abas-origem/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-work/dados-tech-financas/dados-inteligencia/modelo-indicadores/abas-origem) (14 abas `00–14` + `analise.md`)
- XLSX bloqueado + CSVs corrigidos: [`02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx) (`03-csv-corrigido/`, `04-registro-correcoes/`, `06-relatorios-validacao/`)
- XLSX melhorado [`01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/pastas-trabalho/MELHORADO_v1.1.xlsx`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/pastas-trabalho) + [`sintese-entre-abas/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/sintese-entre-abas)

## 5. Saídas

| Artefato | Onde vive | Camada |
|---|---|---|
| Modelo lógico + físico aprovado (PK/FK/cardinalidade/tipos) | `01-work/dados-tech-financas/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md` + `01-work/dados-tech-financas/refinamento-modelo-dados/` | blueprint→refining |
| Serviço identidade (regras matching/survivorship) | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/` | refining |
| Envelope evento canônico + schema registry | mesmo | refining |
| Catálogo métricas canônico + grafo dependências | mesmo + `sintese-entre-abas/` | refining |
| Taxonomia estados valor | mesmo | refining |
| Matriz dados-finalidade + fluxos DSAR/replay | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` (linkado) | refining |
| XLSX validado (reconstruído a partir dos `03-csv-corrigido/` validados) | `02-review/bloqueado/.../indicadores-xlsx/` → `02-review/pacotes/P03-Dados-Canonicos.md` → `02-review/aprovado/` | approval |
| Pacote revisão P03 | `02-review/pacotes/P03-Dados-Canonicos.md` | approval |

## 6. Critérios de saída (gate P03 — com sub-gates)

### Sub-gate S3A — Entidades & Identidade (libera P04/P05 iniciarem)
- [ ] **G03.A1** — Entidades canônicas com PK, FK, cardinalidade, tipos objeto e regras temporais documentadas; sem entidade sem chave estável (DAT-001).
- [ ] **G03.A2** — Regras de matching/merging/survivorship testadas em dataset sintético com taxa de falso-positivo/negativo medida e reversibilidade demonstrada (DAT-002).

### Sub-gate S3B — Eventos & Contratos (libera P05 detalhar payloads)
- [ ] **G03.B1** — Envelope canônico de evento + schema registry + versionamento + idempotência publicados; produtores/consumidores de teste passam em contrato+replay (DAT-003).
- [ ] **G03.B2** — Dicionário físico ~41 campos mapeado para entidades canônicas; contradições entre `abas-origem/` e `03-csv-corrigido/` resolvidas e registradas em `04-registro-correcoes/` (**DAT-010; blocking: yes**). Este mínimo é obrigatório para liberar P03; automação e cobertura adicional de fontes são extensões pós-MVP.

### Gate G3 completo — Métricas & Valor (libera P06)
- [ ] **G03.C1** — Catálogo de 73 indicadores com fórmula, dimensão, owner e dependência; nenhuma métrica crítica com definição alternativa (DAT-005).
- [ ] **G03.C2** — Linhagem `origem→métrica→ação→resultado→valor` demonstrada para pelo menos 1 caminho financeiro ponta a ponta com evidência reproduzível (DAT-004).
- [ ] **G03.C3** — Taxonomia `potencial/influenciado/validado/realizado` aprovada por Finanças+Gov Dados (DAT-006).
- [ ] **G03.C4** — Mapa finalidade-campo + retenção/exclusão derivados validado por LGPD (DAT-008); fluxo DSAR/exclusão/replay testado (DAT-009).
- [ ] **G03.C5** — XLSX reconstruído a partir dos `03-csv-corrigido/` validados passa em `06-relatorios-validacao/` (entity-key, roi-recalculation).

> **Política promoção:** `03-csv-corrigido/` é fonte; `abas-origem/` é espelho histórico; `MELHORADO_v1.1.xlsx` é refinamento — não confundir.

## 7. Tarefas (backlog inicial)

| Tarefa | Gap |
|---|---|
| Modelo lógico/físico com PK/FK/cardinalidade | DAT-001 |
| Especificar serviço identidade + dataset teste | DAT-002 |
| Envelope evento + schema registry + testes contrato | DAT-003 |
| Templates linhagem + registro evidências | DAT-004 |
| Catálogo métricas + grafo dependências | DAT-005 |
| Taxonomia estados valor | DAT-006 |
| Matriz dados-finalidade + ciclo vida | DAT-008 |
| Prototipar fluxos linhagem/correção/replay/DSAR | DAT-009 |
| Reconciliar `03-csv-corrigido/` → XLSX validado | DAT-010 |

## 8. Riscos

| Risco | Mitigação |
|---|---|
| 73 indicadores viram paralisia | Priorizar métricas ligadas a P01 ofertas + P06 value tree; restante fica pós-MVP |
| XLSX bloqueado nunca é promovido | Tratar como sub-projeto com dono único + `04-registro-correcoes/` auditável |
| Semântica rica sem contrato físico | Gate S3B bloqueia P05 se não houver payload/owner/volume |

## 9. Referências
- [`BP-003`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/BP-003_HUB_Blueprint_Dados_e_Inteligencia.md)
- [`HUB_Registro_Lacunas_Projeto.md` §5](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md)
