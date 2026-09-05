---
title: "Registro de Mudança — Faseamento sequencial P01→P07 + cronograma e marcos"
date: 2026-08-26
type: registro-mudanca
status: registrado
tags:
  - projeto/registro-mudanca
  - projeto/gestao
  - fase-projeto
  - hub
related_notes:
  - "[[04-project-management/planos-mestres/HUB_Plano_Fases_v1]]"
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[04-project-management/planos-fase/P02_Produto_Operacao]]"
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[04-project-management/planos-fase/P04_Governanca_Confianca]]"
  - "[[04-project-management/planos-fase/P05_Tecnologia_Contratual]]"
  - "[[04-project-management/planos-fase/P06_Economia_GTM_Evidencia]]"
  - "[[04-project-management/planos-fase/P07_Portao_Lancamento]]"
  - "[[04-project-management/cronogramas/cronograma-fases-v1.base]]"
  - "[[04-project-management/marcos/marcos-fases-v1]]"
  - "[[project-map]]"
  - "[[README]]"
  - "[[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas]]"
  - "[[01-work/estrategia/HUB_Fundacao_Blueprint_Projeto]]"
  - "[[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto]]"
author:
  - PF Rezende
  - Sisyphus
commits:
  - 1c2733f
  - a74c098
  - f18966d
---

# Registro de Mudança — Faseamento sequencial P01→P07 + cronograma e marcos

> [!info] Identificação
> - **Data:** 2026-08-26
> - **Tipo:** mudança estrutural de gestão de projeto (não altera escopo de negócio, organiza execução)
> - **Origem:** exploração do repositório + gaps `STR→LCH` + proposta de sequenciamento eficiente
> - **Decisão vinculada:** a registrar em [[00-project-control/decisoes/template-decisao|template-decisao]] quando o gate M00 for votado

## 1. Resumo

O projeto saiu de uma organização **temática** (`Fases_Projeto.canvas` com clusters “Conceitos e Teorias / Estruturações Operacionais Internas/Externas”) para um **faseamento sequencial verificável** P01→P07 com gates, cronograma Bases e marcos. A mudança torna a gestão **sequencial e eficiente**, respeitando a espinha dorsal de dependências do [[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto|HUB_Registro_Lacunas_Projeto]] §12 (`STR → PRD → DAT(spine) → GOV/TEC → FIN/GTM/BRD → LCH`).

**Resultado:** 9 arquivos novos + 2 arquivos vivos sincronizados (`[[project-map]]` e `[[README]]`), sem quebrar as três camadas do [[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Framework de Três Camadas]].

## 2. Contexto e motivação

- **Antes:** 8 tarefas `BP-001..008` existiam em [[04-project-management/tarefas/HUB_Tarefas_Projeto.base|HUB_Tarefas_Projeto.base]], mas sem ordem de execução, sem gates e com `04-project-management/cronogramas/` e `marcos/` vazios (`.gitkeep`). O canvas `[[00-project-control/escopo/fases-projeto/rascunho/Fases_Projeto.canvas|Fases_Projeto.canvas]]` sugeria paralelismo irrestrito, ocultando o gargalo `DAT`.
- **Problema:** risco de retrabalho — economia (`FIN-003`, ROI 28,42% ilustrativo) e tecnologia (`TEC-001`) sendo afirmadas antes da semântica de dados (`DAT-001..006`) travada.
- **Objetivo:** transformar o inventário (~115 pastas, 68 gaps — 24 críticos) em unidades sequenciais onde cada fase fecha seus gaps antes de liberar downstream.

## 3. O que mudou

### 3.1 Novos artefatos de gestão (9 arquivos)

| Arquivo | Papel | Gaps / BP | Links |
|---|---|---|---|
| [[04-project-management/planos-mestres/HUB_Plano_Fases_v1|HUB_Plano_Fases_v1.md]] | Plano diretor: 7 fases + alternativa 4-fases, M0–M4 mapping, RACI provisório, cronograma indicativo | `STR→LCH`, `BP-001..008` | [[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Framework]] · [[01-work/estrategia/HUB_Fundacao_Blueprint_Projeto|Fundação]] · [[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto|Gaps]] |
| [[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio|P01_Arquitetura_Oferta_Negocio.md]] | Oferta & negócio: matriz oferta-comprador, taxonomia receita | `STR-001/002/003`, `FIN-002`, `GTM-001` → `BP-001` | [[01-work/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita|Oferta e Receita]] |
| [[04-project-management/planos-fase/P02_Produto_Operacao|P02_Produto_Operacao.md]] | Produto & operação: fronteiras 6 módulos + SOPs C.A.O.S. | `PRD-001..007`, `STR-007/008`, `GOV-008` → `BP-002`+`BP-005` | [[01-work/produto/HUB_Blueprint_Produto_e_Capacidades|Produto]] · [[01-work/operacoes/HUB_Blueprint_Modelo_Operacional|Operações]] |
| [[04-project-management/planos-fase/P03_Dados_Canonicos|P03_Dados_Canonicos.md]] | **Spine** dados canônicos: entidades, eventos, métricas, estados de valor + desbloqueio XLSX bloqueado | `DAT-001..010` → `BP-003` | [[01-work/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia|Dados]] · [[02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx|indicadores-xlsx bloqueado]] |
| [[04-project-management/planos-fase/P04_Governanca_Confianca|P04_Governanca_Confianca.md]] | Governança & confiança: entidades, LGPD, Selo charter | `GOV-001..009` → `BP-006` | [[01-work/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico|Governança]] |
| [[04-project-management/planos-fase/P05_Tecnologia_Contratual|P05_Tecnologia_Contratual.md]] | Tecnologia contratual: contratos, SLOs, threat model | `TEC-001..007` → `BP-004` | [[01-work/tecnologia/HUB_Blueprint_Arquitetura_Tecnologica|Tecnologia]] |
| [[04-project-management/planos-fase/P06_Economia_GTM_Evidencia|P06_Economia_GTM_Evidencia.md]] | Economia & GTM com evidência: financeiro reconstruído + claim library | `FIN/GTM/BRD` → `BP-007` | [[01-work/marca-mercado/HUB_Blueprint_Marca_e_Mercado|Marca]] |
| [[04-project-management/planos-fase/P07_Portao_Lancamento|P07_Portao_Lancamento.md]] | Portão de lançamento: checklist integrado + runbook | `LCH-001..007` → `BP-008` | [[01-work/visao-lancamento/HUB_Blueprint_Lancamento_e_Evolucao|Lançamento]] · [[02-review/portao-lancamento|portao-lancamento]] |
| [[04-project-management/cronogramas/cronograma-fases-v1.base|cronograma-fases-v1.base]] | Cronograma Bases com 6 views (Timeline, Caminho Crítico, Paralelizáveis, Por Dono, Portfolio, Gaps) | lê `planos-fase/*.md` via `phase` | [[04-project-management/marcos/marcos-fases-v1|marcos-fases-v1]] |
| [[04-project-management/marcos/marcos-fases-v1|marcos-fases-v1.md]] | Marcos M00→M07 + sub-gates M03.A/B com critérios G01.x→G07.x | `M00` (scope) → `M07` (LAUNCH APPROVED) | [[00-project-control/decisoes/template-decisao|template-decisao]] |

> Todos os arquivos citam `gap_ids` e `related_notes` com wikilinks, permitindo navegação no graph do Obsidian.

### 3.2 Artefatos vivos sincronizados

| Arquivo | Mudança |
|---|---|
| [[project-map]] | `git-hash 7c97901 → 1c2733f`, `last-synced` atualizado, árvores de `04-project-management/` expandidas, `.obsidian/themes` 5→7 (Nebula, Slytherin), anexo navegável com 6 linhas novas, `Arquivos-chave` +10 entradas, `Notas de frescor` com `1c2733f` |
| [[README]] | `Como ler` passo 6 com faseamento, mermaid `planos-diretores → planos-mestres`, `O que cada pasta significa` detalhando P01→P07/M00→M07, `Arquivos-chave` +10, `Como usar` com cronograma/gates, nova seção `Sequenciamento atual (faseamento P01→P07)` |

### 3.3 Infra Obsidian

- `[[.obsidian/types.json]]` — propriedade `phase: multitext` registrada (usada por `planos-fase/*.md`).
- `[[.obsidian/bookmarks.json]]` — novos bookmarks para `HUB_Plano_Fases_v1`, `cronograma-fases-v1.base`, `marcos-fases-v1`.
- `[[.obsidian/workspace.json]]` — abas abertas refletem o novo faseamento.

## 4. Commits e sincronização

| Commit | Mensagem | Conteúdo |
|---|---|---|
| `1c2733f` | `feat(plan): faseamento sequencial P01-P07 + cronograma e marcos` | 14 files, +1678/-56 — 9 novos + 4 atualizados (canvas, workspace) |
| `a74c098` | `docs(map): sync project-map to 1c2733f` | `project-map.md` + `.obsidian/*` + whitespace `cronograma-fases-v1.base` |
| `f18966d` | `docs(readme): sync to faseamento P01-P07 (a74c098)` | `README.md` + workspace state |

Todos com push para `origin/main` (`github.com/pratofeitoo/the-new-hub-proj-dev-2.git`).

## 5. Impactos e regras de uso

- **Regra de sequenciamento:** nenhuma fase avança sem gate aprovado. P03 é gargalo — possui sub-gates `M03.A` (entidades → libera P04) e `M03.B` (eventos → libera P05 detalhar payloads). P04 e P05 são paralelizáveis após `M03.A/B`.
- **Camadas preservadas:** cada fase atravessa `01-blueprint → 02-refinement → 03-approval`. O faseamento orquestra **ordem entre fases**, não dentro da fase.
- **Rastreabilidade:** requisito → evidência → entregável cobrada em `[[04-project-management/marcos/marcos-fases-v1|M07 G07.4]]`.
- **O que não muda:** escopo de negócio (4 unidades, 6 módulos, M0–M4) permanece como em [[01-work/estrategia/HUB_Fundacao_Blueprint_Projeto|Fundação]]; apenas a ordem de prova muda.

## 6. O que fica para depois

- Atribuir donos reais por fase (preencher RACI `HUB_Plano_Fases_v1` §6 e `owner` em `[[00-project-control/registro-lacunas/lacunas|lacunas/*.md]]`).
- Criar/atualizar `[[00-project-control/riscos|00-project-control/riscos]]`, `[[00-project-control/premissas|premissas]]`, `[[00-project-control/dependencias|dependencias]]` a partir dos gates.
- Vincular `[[TaskNotes/Tasks|TaskNotes/Tasks]]` operacionais aos `P0x` correspondentes.
- Decidir via `[[00-project-control/decisoes/template-decisao|decisão M00]]` se mantém 7 gates ou colapsa para a alternativa 4-fases.

## 7. Referências

- [[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Framework de Três Camadas]]
- [[01-work/estrategia/HUB_Fundacao_Blueprint_Projeto|Fundação do Blueprint]]
- [[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto|Registro de Lacunas]] — 68 gaps (24 críticos), §12 Espinha dorsal, §14 Definição de fechamento
- [[04-project-management/tarefas/HUB_Tarefas_Projeto.base|HUB_Tarefas_Projeto.base]] — BP-001..008
- [[04-project-management/planos-mestres/HUB_Plano_Fases_v1|HUB_Plano_Fases_v1.md]] + `planos-fase/P01..P07`
- [[project-map]] + [[README]]
- Commits `1c2733f`, `a74c098`, `f18966d`
