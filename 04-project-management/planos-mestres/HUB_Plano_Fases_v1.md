---
title: HUB — Plano Diretor de Fases v1
subtitle: Sequenciamento eficiente para gestão sequencial do projeto completo
version: "1.0"
status:
  - approved plan
type: plano-mestre
layer: cross-cutting
created: 2026-08-26
updated: 2026-08-27
owner:
  - PF Rezende
tags:
  - hub
  - plano-mestre
  - fases-projeto
  - gestao-projeto
  - blueprint
related_notes:
  - "[[00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas]]"
  - "[[02-review/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto]]"
  - "[[00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto]]"
  - "[[04-project-management/tarefas/HUB_Tarefas_Projeto.base]]"
  - "[[Fases_Projeto.canvas]]"
---

# HUB — Plano Diretor de Fases v1

> [!info] Propósito
> Transformar o inventário atual (~115 pastas, 68 gaps, 8 tarefas BP) em **7 fases sequenciais com gates verificáveis**. Cada fase fecha um conjunto de gaps antes de liberar trabalho downstream — evita retrabalho financeiro/tecnológico antes da semântica de dados estar travada. Este plano complementa (não substitui) o [`HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md) e o [`HUB_Fundacao_Blueprint_Projeto`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/02-review/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto.md).

> [!warning] Maturidade
> Plano de gestão (`04-project-management/`), não evidência aprovada. Cada fase permanece `blueprint` até passar por `01-work/` → `02-review/` → `03-approved/`. Nenhum gate é auto-aprovado.

---

## 1. Como ler este plano

- **Fases (P01–P07):** unidades sequenciais de planejamento e execução. Cada fase tem: objetivo, gaps que fecha, BP-task âncora, entradas/saídas, critérios de saída (gate) e dono provisório.
- **Gaps (68):** fonte de verdade em [`HUB_Registro_Lacunas_Projeto.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md) e [`HUB_Lacunas_Projeto.base`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/registro-lacunas/HUB_Lacunas_Projeto.base). Nenhuma fase está completa enquanto seus gaps críticos não atenderem aos 6 critérios de fechamento (§14 do registro).
- **Camadas:** dentro de cada fase o trabalho atravessa `01-blueprint` → `02-refinement` → `03-approval`. Este plano orquestra a **ordem entre fases**, não dentro da fase.
- **Roteamento:** ler na camada mais madura, escrever na menos madura (ver `project-map.md` § Onde escrever / Onde ler).

```
Fase P(n) completa (gate aprovado)
        │
        ├──→ libera P(n+1) para iniciar trabalho de blueprint/refinamento
        │
        └──→ se reprovada → volta para refinamento (não avança)
```

---

## 2. Mapa de dependências (por que esta ordem)

Derivado de [`HUB_Registro_Lacunas_Projeto.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md) §12 Espinha dorsal:

```mermaid
flowchart TD
    P0[P00 Fundação] --> P1[P01 Oferta & Negócio<br/>STR-001..003]
    P1 --> P2[P02 Produto & Operação<br/>PRD-001..007]
    P1 --> P6a[P06 Finanças prelim — só hipóteses]
    P2 --> P3[P03 Dados Canônicos<br/>DAT-001..006 · SPINE]
    P3 --> P4[P04 Governança & Confiança<br/>GOV-001..008]
    P3 --> P5[P05 Tecnologia Contratual<br/>TEC-001..007]
    P4 --> P6[P06 Economia & GTM<br/>FIN/GTM/BRD]
    P5 --> P6
    P6 --> P7[P07 Portão de Lançamento<br/>LCH-*]
    P4 --> P7
    P5 -. paralelo .-> P4
```

**Regra de ouro:** `P03 Dados Canônicos` é o **spine**. Nenhuma economia reconstruída (FIN-003), contrato de integração (TEC-001) ou alegação de valor (BRD-002) pode ser aprovada antes de `DAT-001` (entidades/chaves), `DAT-003` (event envelope) e `DAT-006` (taxonomia de valor) estarem aprovadas. Hoje `FIN-001` e `DAT-004` mostram exatamente o custo de violar isso — ROI 28,42% ilustrativo tratado como evidência.

### 2.1 Dependências e regra de liberação dos gates

| Gate | Depende de | Libera | Regra de bloqueio |
|---|---|---|---|
| **P00** | — | P01 | Sem baseline de escopo e RACI provisório, P01 permanece trabalho de risco. |
| **P01** | P00 | P02; hipóteses de P06 somente | Oferta, comprador, capacidade, receita e rota devem estar rastreáveis; `STR-001..003`, `FIN-002` e `GTM-001` continuam abertos até evidência/aceite. |
| **P02** | P01 | P03 | Sem fronteiras de módulo, jornada, permissões, SOPs e RACI, não há contrato confiável para dados. |
| **P03.A** | P02 | P04; descoberta técnica de P05 | Só identidade/entidades; P05 só detalha contratos após P03.B; não libera economia, claims ou lançamento. |
| **P03.B** | P03.A | Contratos detalhados de P05 | Só eventos/dicionário físico; P06 continua bloqueado. |
| **P03** | P03.B | P06 (com P04 e P05 ainda obrigatórios) | Entidades, eventos, métricas, linhagem e taxonomia de valor aprovados; é o spine do sistema. |
| **P04** | P03.A (P03.B recomendado) | P06 e contribuição para P07 | Sem LGPD, responsabilidade, PI, Selo e controles aprovados, claims, funding restrito e lançamento ficam bloqueados. |
| **P05** | P03.B | P06 e contribuição para P07 | Sem contratos, segurança, SLOs, recuperação e rollback testados, não há capacidade técnica aprovada. |
| **P06** | P03 + P04 + P05 | P07 | Finanças/GTM são evidência auditada; hipóteses não podem ser contadas como tração. |
| **P07** | P06 + P04 | Lançamento, somente se aprovado | Qualquer crítico em blueprint, risco sem tratamento ou rastreabilidade órfã bloqueia o lançamento. |

> **Estado dos gates:** esta tabela define critérios e ordem, não registra aprovação. Cada liberação exige pacote de revisão, evidência rastreável e decisão nominal em `00-project-control/decisoes/`. Enquanto isso não existir, o gate permanece `em-revisao` ou `bloqueado`.

**Paralelismo permitido:**

| Janela | Paralelo seguro | Por quê |
|---|---|---|
| Após P01 gate | P02 pesquisa + P06 hipóteses preliminares | P06 fica em `Hipótese`, não `Comprovado` |
| Após P03 gate | P04 + P05 em paralelo | Compartilham o mesmo contrato de dados, sem dependência mútua direta |
| Sempre | `00-project-control/registro-lacunas/` + `decisoes/` + `riscos/` | Transversal, não bloqueia |

**Paralelismo proibido:** qualquer FIN/GTM/BRD que afirme valor ou TM antes de P03+P04 gates.

---

## 3. As 7 fases — visão executiva

| Fase    | Nome                             | Gaps críticos que fecha                        | Task BP âncora            | Saída principal                                             | Dono provisório       | Gate                  |
| ------- | -------------------------------- | ---------------------------------------------- | ------------------------- | ----------------------------------------------------------- | --------------------- | --------------------- |
| **P00** | Fundação & Alinhamento (0–2 sem) | —                                              | —                         | Scope baseline + RACI provisório + canvas P1–P7             | PF Rezende            | Scope approved        |
| **P01** | Arquitetura de Oferta & Negócio  | `STR-001,002,003` · `FIN-002` · `GTM-001`      | `BP-001`                  | Matriz oferta–comprador–capacidade + taxonomia receita      | PF Rezende + Finanças | Oferta aprovada       |
| **P02** | Produto & Operação               | `PRD-001,002` · `STR-007` · `GOV-008`          | `BP-002` + `BP-005`       | Fronteiras de módulos + matriz permissão + SOPs C.A.O.S.    | Produto + Ops         | Operability ready     |
| **P03** | Dados Canônicos (spine)          | `DAT-001..006` · `DAT-008` · `DAT-010`         | `BP-003`                  | Modelo lógico/físico + event envelope + catálogo métricas   | Dados                 | Data arch approved    |
| **P04** | Governança & Confiança           | `GOV-001..005` · `GOV-008`                     | `BP-006`                  | Estrutura entidades + LGPD map + Selo charter               | Jurídico              | Legal/Sec approved    |
| **P05** | Tecnologia Contratual            | `TEC-001..007`                                 | `BP-004`                  | Contratos API/evento + SLOs + threat model                  | Tech                  | Arch/Sec approved     |
| **P06** | Economia & GTM com Evidência     | `FIN-001,003,006` · `GTM-002..006` · `BRD-002` | `BP-007` + parte `BP-001` | Modelo financeiro reconstruído + claim library + GTM routes | Finanças + GTM        | Evidence audit passed |
| **P07** | Portão de Lançamento             | `LCH-001..007` · `STR-003`                     | `BP-008`                  | Checklist integrado + runbook + workflow aprovação          | Controle Projeto      | Launch Approved       |

> Detalhamento completo em [`04-project-management/planos-fase/P01_*.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-fase) — um arquivo por fase com entradas/saídas, critérios de saída verificáveis e backlog de tarefas.

**Cobertura de gaps:** P01–P07 fecham **24 gaps críticos + 22 dos 35 altos** diretamente. Os quatro gaps abaixo são exceções ao backlog: embora classificados como Média/Alta no registro, o mínimo exigido por seus gates é **bloqueador obrigatório**. Extensões além desse mínimo ficam como backlog pós-MVP.

### Registro canônico de gaps disputados / bloqueadores

| Gap | Gate vinculante | Classificação canônica | Condição mínima de aceite (bloqueadora) | Extensões opcionais pós-MVP |
|---|---|---|---|---|
| `DAT-010` | P03 **G03.B2** | **blocking: yes** | Dicionário físico mapeado e fonte de verdade/proveniência reconciliada entre origem e corrigido, com registro auditável. | Automação de reconciliação e cobertura adicional de fontes. |
| `TEC-005` | P05 **G05.4** | **blocking: yes** | Baseline por integração (custo, latência, volume e rate-limit) publicado e integrado ao modelo financeiro P06. | Otimização avançada, capacity planning preditivo e novas integrações. |
| `TEC-007` | P05 **G05.7** | **blocking: yes** | Processo de release/rollback, ambientes e suporte aprovados e testados antes do lançamento. | Automação/expansão de ambientes e estratégias avançadas de progressive delivery. |
| `LCH-007` | P07 **G07.7** | **blocking: yes** | Todo artefato de lançamento tem status/proveniência válidos e segue a regra de promoção até `03-approved/`. | Retenção histórica ampliada e automações de ciclo de vida. |

**Regra:** o mínimo de aceite do gate é bloqueador; somente as extensões explicitamente listadas como opcionais podem permanecer pós-MVP. `LCH-007` é a grafia canônica.

**Roadmap M0–M4 (da Fundação §10) mapeado:**

| Roadmap | Conteúdo | Fase dona |
|---|---|---|
| M0 | IDs, taxonomia, eventos, indicadores, dashboards operacionais | P03 (saída) |
| M1 | Conexões de fontes, grafo, coortes, pareamento | P03+P05 |
| M2 | Value mart, experimentos, atribuição, sign-off financeiro | P06 |
| M3 | Modelos, drift, fairness, model cards | Pós-P07 (roadmap futuro) |
| M4 | Benchmarks anônimos, marketplace, multi-ecossistema | Pós-P07 |

### 3.1 Critérios de saída consolidados por domínio

Os critérios abaixo são a versão de coordenação do gate. Os checklists normativos permanecem nos planos de fase e em [[04-project-management/marcos/marcos-fases-v1]]. Nenhum item abaixo implica aceite formal.

| Fase | Saída mínima verificável | Domínios reconciliados | Evidência/gap vinculante |
|---|---|---|---|
| **P01** | Matriz oferta→comprador→unidade→capacidade→operação→receita→gap; taxonomia de receita; rotas com fallback; roadmap sem contradição (**G01.6**). | Negócio, produto, finanças, operações, governança e lançamento. | P01-T01/P01-T02; G01.1–G01.7; `STR-001..003`, `FIN-002`, `GTM-001`. |
| **P02** | Fronteiras dos 6 módulos, jornada/eventos, ator×permissão, diagnóstico reproduzível, SOPs com SLA e RACI sem ambiguidade. | Produto, operações, segurança, dados e governança. | G02.1–G02.7; `PRD-*`, `STR-007/008`, `GOV-008`. |
| **P03** | Entidades/chaves e matching testados; envelope/schema/replay; catálogo de métricas, linhagem, taxonomia de valor, LGPD e XLSX reconciliado. | Dados, produto, finanças, governança e tecnologia. | G03.A1–G03.C5; `DAT-001..006`, `DAT-008..010`. P03.A/P03.B liberam apenas o trabalho indicado. |
| **P04** | Estrutura e responsabilidades jurídicas; base legal/retenção/DSAR; PI; Selo independente ou bloqueado; fairness/drift e controles testados. | Governança, jurídico, dados, finanças e operações. | G04.1–G04.9; `GOV-001..009`. |
| **P05** | Arquitetura e contratos M0; integração por chaves P03; baseline de custo/latência/volume; threat model; SLO/on-call/recovery e rollback. | Tecnologia, dados, segurança, operações e finanças. | G05.1–G05.7; `TEC-001..007`. |
| **P06** | Modelo financeiro em 3 cenários sem dupla contagem; ponte produto→valor; separação restrito/comercial; KPIs ledger; mercado e GTM com logs, diversificação e claims revisados. | Finanças, GTM, produto, dados, jurídico e governança. | G06.1–G06.12; `FIN-*`, `GTM-*`, `BRD-*`, com `STR-003` condicionante. |
| **P07** | Portão mestre, produto implantável, workflow auditável, rastreabilidade sem órfãos, riscos tratados, checklist comercial e ciclo de vida de artefatos. | Todos os domínios + controle de projeto. | G07.1–G07.8; `LCH-001..007`, `STR-003`. Lançamento só após M01–M06 aprovados. |

**Regra de coerência P01→P07:** produto e negócio definem o que pode ser prometido; P03 define o que pode ser medido; P04 define o que pode ser usado/alegado; P05 define o que pode ser operado; P06 define o que pode ser financiado e vendido; P07 verifica a composição. Uma hipótese, piloto ou artefato em blueprint não é convertido em aprovação, tração ou prontidão por este roadmap.

---

## 4. Alternativa leve: corte em 4 fases

Se 7 fases for granular demais para o ritmo atual, colapsar sem violar dependências:

| Corte 4 fases | Agrupa | Quando usar |
|---|---|---|
| **F-A Estratégia** | P01+P02 | Time enxuto, precisa de narrativa investidor rápida |
| **F-B Spine** | P03+P04 | Quando jurídico/dados precisam andar juntos |
| **F-C Construção** | P05+P06 | Quando tech e economia são o mesmo time |
| **F-D Lançamento** | P07 | Idem |

```mermaid
flowchart LR
    FA[F-A Estratégia<br/>P01+P02] --> FB[F-B Spine<br/>P03+P04]
    FB --> FC[F-C Construção<br/>P05+P06]
    FC --> FD[F-D Lançamento<br/>P07]
```

**Trade-off:** 4 fases é mais rápido de gerenciar, mas gates ficam muito amplos (ex: F-B aprova dados + jurídico juntos — risco de 8 gaps críticos num único gate). **Recomendação:** começar em **7 fases** até P03 gate; se o ritmo permitir, colapsar P04+P05 e P06 em execução. Este plano mantém os 7 arquivos mesmo no modo 4-fases — só muda o agrupamento de gates no `cronogramas/`.

---

## 5. Cronograma indicativo (sem datas fictícias)

> Durações são **esforço relativo**, não calendário. Preencher em [`04-project-management/cronogramas/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/cronogramas) após atribuir donos reais.

| Fase | Esforço | Dependência dura | Pode sobrepor com |
|---|---|---|---|
| P00 | 1–2 sem | — | — |
| P01 | 3–4 sem | P00 gate | — |
| P02 | 3–4 sem | P01 gate | P06 hipóteses |
| P03 | 4–6 sem | P02 gate | — |
| P04 | 3–4 sem | P03 gate | P05 |
| P05 | 3–5 sem | P03 gate | P04 |
| P06 | 4–6 sem | P03+P04+P05 gates | — |
| P07 | 2–3 sem | P06+P04 gates | — |

**Caminho crítico:** `P00 → P01 → P02 → P03 → P06 → P07` (P04/P05 são paralelizáveis). Atraso em P03 atrasa tudo — é o spine.

---

## 6. Donos provisórios & RACI (a preencher)

> Atual: todos `BP-*` com `owner: PF Rezende`. Este plano propõe especialização; confirmar em [`00-project-control/decisoes/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/decisoes) + atualizar `HUB_Lacunas_Projeto.base`.

| Fase | Accountable (A) | Responsible (R) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| P00 | PF Rezende | PF Rezende | — | Todos |
| P01 | PF Rezende (Estratégia) | Finanças + Produto | Jurídico, GTM | Tech |
| P02 | Produto | Ops + Produto | Dados, Jurídico | Finanças |
| P03 | Dados | Dados + Tech | Produto, Jurídico | Finanças |
| P04 | Jurídico | Jurídico + Dados | Finanças, Produto | Tech |
| P05 | Tech | Tech + Dados | Ops, Jurídico | Finanças |
| P06 | Finanças | Finanças + GTM | Dados, Jurídico | Produto |
| P07 | Controle Projeto | Todos os As | — | — |

> Preencher `owner` real em cada `P0x_*.md`. Sem `A` único, o gate não pode ser aprovado (`GOV-008`).

---

## 7. Como usar este plano no dia a dia

### Para planejar
1. Abra este arquivo para ver **ordem e gates**.
2. Entre no `P0x_*.md` da fase ativa — ele tem o checklist de entrada/saída.
3. Crie/atualize tarefas em [`04-project-management/tarefas/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas) com `gap_ids` da fase + `dependencies: [P0x]`.
4. Tarefas operacionais curtas (≤1 semana) ficam em [`TaskNotes/Tasks/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/TaskNotes/Tasks) com link para a tarefa BP/phase correspondente.

### Para refinar & aprovar
- Escreva refinamento em `01-work/<dominio>/` citando `P0x` + gap.
- Monte pacote em `02-review/pacotes/P0x-*.md`.
- Só mova para `02-review/aprovado/` via gate de `P0x`. Nunca pule gate.

### Para status & retrospectiva
- Atualize [`04-project-management/relatorios-status/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/relatorios-status) por fase (não por domínio).
- Registre decisões em [`00-project-control/decisoes/`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/decisoes) usando [`template-decisao.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/decisoes/template-decisao.md) quando um gate for aprovado/bloqueado.

---

## 8. Riscos do sequenciamento

| Risco | Mitigação neste plano |
|---|---|
| P03 atrasa e arrasta P04–P07 | P03 tem sub-gates (entidades → eventos → métricas) para liberar P04/P05 parcialmente |
| Pressão para afirmar FIN/GTM antes de P03 | P06 bloqueado até P03+P04+P05 — status `Hipótese` até lá |
| Canvas atual (`Fases_Projeto.canvas`) sugere paralelismo irrestrito | Este plano substitui agrupamento temático por ordem de dependência; manter canvas como referência histórica em `99-archive/` se redesenhado |
| TaskNotes desconectado de BP | Cada `P0x` lista `gap_ids` e `TaskNotes` correspondentes a vincular |

---

## 9. Próximos passos

- [ ] **Validar** este plano com stakeholders (gate P00).
- [ ] **Atribuir** donos reais por fase (preencher RACI §6) e atualizar `HUB_Lacunas_Projeto.base` + `HUB_Tarefas_Projeto.base`.
- [ ] **Criar** `04-project-management/cronogramas/cronograma-fases-v1.base` (Bases timeline) a partir do §5.
- [ ] **Criar** `04-project-management/marcos/marcos-fases-v1.md` — um marco por gate.
- [ ] **Vincular** `TaskNotes/Tasks/*MVP*.md` aos `P0x` correspondentes.
- [ ] **Arquivar** ou redesenhar [`Fases_Projeto.canvas`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/escopo/fases-projeto/rascunho/Fases_Projeto.canvas) para refletir P01–P07 ao invés de clusters temáticos.

---

## 10. Referências

- [`HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md) — regras das 3 camadas
- [`HUB_Fundacao_Blueprint_Projeto.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/02-review/01-blueprint/estrategia/HUB_Fundacao_Blueprint_Projeto.md) — identidade, 4 unidades, 6 módulos, roadmap M0–M4
- [`HUB_Registro_Lacunas_Projeto.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/00-project-control/registro-lacunas/HUB_Registro_Lacunas_Projeto.md) §2 Resumo + §12 Espinha dorsal — dependências e 68 gaps
- [`HUB_Tarefas_Projeto.base`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/tarefas/HUB_Tarefas_Projeto.base) — 8 BP tasks (BP-001..008)
- [`HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/04-project-management/planos-mestres/HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor_pt-BR.md) — tese investidor (não validada)

> **Manutenção:** ao mover/criar arquivos, atualizar também [`project-map.md`](file:///Users/paulorezende/Library/Mobile%20Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The%20New%20HUB%20dev-2/project-map.md) (tabela navegável + árvore de pastas).

---

## 11. Glossário de terminologia

> Códigos de identificação usados nas fases, gaps e tarefas deste plano. Códigos `P##` referem-se às fases; códigos `XXX-###` referem-se a gaps de domínio; `BP-###` referem-se a blueprint tasks.

### Fases (P)

| Código | Significado |
|---|---|
| **P00** | Fundação & Alinhamento — scope baseline + RACI provisório |
| **P01** | Arquitetura de Oferta & Negócio |
| **P02** | Produto & Operação |
| **P03** | Dados Canônicos (spine) |
| **P04** | Governança & Confiança |
| **P05** | Tecnologia Contratual |
| **P06** | Economia & GTM com Evidência |
| **P07** | Portão de Lançamento |

### Prefixos de gap por domínio

| Prefixo | Domínio |
|---|---|
| **STR-** | Estratégia / Oferta & Negócio |
| **PRD-** | Produto |
| **DAT-** | Dados Canônicos |
| **GOV-** | Governança & Confiança |
| **TEC-** | Tecnologia Contratual |
| **FIN-** | Finanças / Economia |
| **GTM-** | Go-to-Market |
| **BRD-** | Business Requirements / proposta de valor |
| **LCH-** | Launch / Portão de Lançamento |

### Blueprint tasks

| Código | Significado |
|---|---|
| **BP-001** | Blueprint task de Oferta & Negócio |
| **BP-002** | Blueprint task de Produto |
| **BP-003** | Blueprint task de Dados Canônicos (spine) |
| **BP-004** | Blueprint task de Tecnologia Contratual |
| **BP-005** | Blueprint task de Operação |
| **BP-006** | Blueprint task de Governança |
| **BP-007** | Blueprint task de Finanças / GTM |
| **BP-008** | Blueprint task de Lançamento |

### Exemplos citados neste plano

| Código                | Contexto de uso neste documento                     |
| --------------------- | --------------------------------------------------- |
| **DAT-001**           | Entidades/chaves — pré-requisito do spine (P03)     |
| **DAT-003**           | Event envelope — pré-requisito do spine (P03)       |
| **DAT-006**           | Taxonomia de valor — pré-requisito do spine (P03)   |
| **DAT-004**           | Gap que mostrou custo de violar o spine             |
| **FIN-003**           | Economia reconstruída — bloqueada até P03+P04+P05   |
| **TEC-001**           | Contrato de integração — bloqueado até DAT aprovado |
| **BRD-002**           | Alegação de valor — bloqueada até DAT aprovado      |
| **LCH-007**           | Ciclo de vida de artefatos — bloqueador do G07.7; extensões pós-MVP |

---

## 12. Anexo — Cronogramas separados (Task 8 — Piloto SEBRAE 28/10)

> **Dual-track:** Este anexo separa **Estratégico (P00→P07 Gates & Dependências)** de **Operacional (Piloto SEBRAE 28/10)** sem duplicar gates. O cronograma dual vive em [`cronograma-fases-v1.base`](../cronogramas/cronograma-fases-v1.base) — View A "Estratégico — P00→P07 Gates & Dependências (datas-âncora)" + View B "Operacional — Piloto SEBRAE 28/10 (Prep → Evento → Follow-up → Decisão)". **Regra:** Tempos operacionais do piloto **não alteram** a ordem de dependência P00→P07 (§2.1); apenas ancoram o MVP em datas reais.

### 12.1 Referências canônicas (links obrigatórios)

- **Charter único do piloto:** [`HUB_Charter_Piloto_SEBRAE_2026-10-28.md`](./HUB_Charter_Piloto_SEBRAE_2026-10-28.md) — 15 campos, evento-âncora **28/10/2026**, coorte 30 fornecedores, IN/OUT, dados+base legal, métricas, orçamento, responsáveis nominais, datas-âncora e gate decisão (**campo 13:** Prep 03/09–27/10, Evento 28/10, Follow-up 29/10–27/11, Relatório **28/11**, Decisão **05/12**; **campo 10** métricas mínimas; **campo 14** sucesso/fracasso binário).
- **Spine mínimo do piloto:** [`spine-piloto-minimo-v1.md`](../../01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md) — 12 entidades mínimas + 12 métricas mínimas + envelope mínimo + deferred list; limite ≤12 imposto pelo charter.
- **Marcos & Gates:** [`marcos-fases-v1.md`](../marcos/marcos-fases-v1.md) (M00→M07) + [`cronograma-fases-v1.base`](../cronogramas/cronograma-fases-v1.base) Views A/B — datas-âncora **15/10** (Acordo LGPD go/no-go), **28/10** (Evento), **28/11** (Relatório), **05/12** (Decisão gate).

> Datas-âncora Task 8: **15/10** Acordo Cooperação + Matriz dados-finalidade assinados (go/no-go LGPD) · **28/10** Evento Piloto SEBRAE-SP · **28/11** Relatório pós-piloto (owner Tamara Braga + PF Rezende) · **05/12** Decisão gate (A Repetir / B Escalar p/ programa / C Pausar) — ver charter campo 13/15.

### 12.2 Must-have do Piloto — 9 itens bloqueadores (o piloto NÃO opera sem eles)

> Cada item tem **owner nominal** (sem "a designar") + `target_file` + `evidence_required` auditável. Bloqueio até 15/10 = piloto não coleta dados. Itens 1–6 = P03 spine reduzido; 7–9 = operação SEBRAE.

| # | Must-have (9) | ID / Tarefa | Owner nominal (Accountable) | Apoio / Consulted | Evidence required (path auditável) | Gate / Data |
|---|---|---|---|---|---|---|
| 1 | **Modelo lógico/físico 12 entidades piloto** | `P03-T01` — Modelo lógico/físico com PK/FK/cardinalidade | **Ana Silva** (Dados) — interino PF Rezende até 15/10 | PF Rezende | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` + `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §1 | M03.A — até 15/10 |
| 2 | **Envelope evento + schema registry** | `P03-T03` — Envelope canônico + replay | **Marcos** (Infra/Plataforma) — PF Rezende interino | Ana Silva | `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md` + `01-work/dados-tech-financas/refinamento-modelo-dados/schema-registry/fixtures/identity.merged.v1.0.valid.json` | M03.B — até 15/10 |
| 3 | **Dicionário físico 12 campos mapeados** | `P03-T04` — Dicionário físico mapping | **PF Rezende** (Dados interino) + **Ana Silva** revisora | Marcos | `01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md` + `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/04-registro-correcoes/corrections.csv` | M03.B — G03.B2 (DAT-010 blocking) |
| 4 | **Catálogo métricas + grafo (12 piloto / 73 full)** | `P03-T05` — Catálogo canônico métricas | **PF Rezende** (Dados interino) | Tamara Braga | `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md` + `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2 | M03.C — até 28/11 |
| 5 | **Matriz dados-finalidade + Acordo LGPD** | `P03-T08` — Matriz LGPD + ciclo de vida | **PF Rezende** (DPO interino) + **Bruno Brigida** (SEBRAE — jurídico acionado) | Tamara Braga, Marcos | `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md` + `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/acordo-cooperacao-SEBRAE-HUB-2026-10-15.md` | **15/10** go/no-go (charter c5/c9) |
| 6 | **Fluxos linhagem / replay / DSAR + XLSX reconstruído** | `P03-T09` — Linhagem + DSAR | **Marcos** (Tech) + **PF Rezende** | Ana Silva | `01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md` + `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/06-relatorios-validacao/` | M03.C — até 28/11 |
| 7 | **Infra MVP (Hostinger VPS KVM-8 + logs)** | `Infra MVP` — VPS + storage + custo | **Marcos** (Infra) | PF Rezende | `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §3 + `06-relatorios-validacao/esforco-h-2026-11-28.csv` + charter campo 11 (Hostinger) | até 04/09 valor + 28/10 operação |
| 8 | **Workshop pitch + match curado (30 fornecedores)** | `Workshop match` — Workshop 21/10 + match manual + 15+15 pitches 28/10 | **Tamara Braga** (Lead operacional) + **Bruno Brigida** (Sponsor SEBRAE) | **Pedro Naegele** (apoio), Marcos | `06-relatorios-validacao/match-log-2026-10-28.csv` + `06-relatorios-validacao/reuniao-log-2026-10-28.csv` + `01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1.md` § match | 21/10 workshop · 28/10 evento |
| 9 | **Fluxo medição + Relatório 28/11 + Decisão 05/12** | `Fluxo medição` — Funil 7 + esforço 2 + satisfação 3 + template relatório | **Tamara Braga** + **PF Rezende** (Accountable geral) | **Pedro Naegele**, Marcos, Bruno Brigida | `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2 (12 métricas) + `06-relatorios-validacao/pesquisa-satisfacao-*.csv` + `06-relatorios-validacao/receita-reportada-2026-11-28.csv` | **28/11** relatório · **05/12** gate |

**Checklist must-have (9 — bloqueadores; marque somente com evidence linkada):**

- [ ] **P03-T01** — Modelo lógico/físico 12 entidades piloto — owner **Ana Silva** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`
- [ ] **P03-T03** — Envelope evento/schema — owner **Marcos** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1.md`
- [ ] **P03-T04** — Dicionário físico 12 campos — owner **PF Rezende** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1.md`
- [ ] **P03-T05** — Catálogo métricas + grafo — owner **PF Rezende** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1.md`
- [ ] **P03-T08** — Matriz dados-finalidade + Acordo LGPD até **15/10** — owners **PF Rezende + Bruno Brigida** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md`
- [ ] **P03-T09** — Fluxos linhagem/replay/DSAR — owner **Marcos** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1.md`
- [ ] **Infra MVP** — Hostinger VPS KVM-8 + storage — owner **Marcos** — evidence `06-relatorios-validacao/esforco-h-2026-11-28.csv` (charter c11)
- [ ] **Workshop match** — Workshop 21/10 + match curado 28/10 — owners **Tamara Braga + Pedro Naegele + Bruno Brigida** — evidence `06-relatorios-validacao/match-log-2026-10-28.csv`
- [ ] **Fluxo medição** — Funil + esforço + relatório **28/11** → decisão **05/12** — owners **Tamara Braga + PF Rezende + Pedro Naegele** — evidence `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` §2 + `06-relatorios-validacao/receita-reportada-2026-11-28.csv`

### 12.3 Métricas do Piloto — 12 mínimas (charter campo 10 → spine §2 → relatório 28/11)

> **Fonte canônica:** `HUB_Charter_Piloto_SEBRAE_2026-10-28.md` **campo 10** (funil 7 + operação 2 + qualitativo 2 + intenção) detalhado em `spine-piloto-minimo-v1.md` **§2 Métricas mínimas — 12/12** (fórmula, target_file, evidence_required). Todas com denominador, fonte primária e planilha auditável — sem "% conversão" sem denominador.

| # | Métrica (12) | Fórmula (charter c10 / spine §2) | Target_file | Evidence 28/11 |
|---|---|---|---|---|
| 1 | **inscritos** | `count(inscricao where evento=2026-10-28)` | `catalogo-metricas-grafo-P03-T05-v1.md` § inscritos | `06-relatorios-validacao/metrica-inscritos-2026-10-28.csv` |
| 2 | **qualificados** | `count(fornecedor where diagnostico.maturidade >= threshold)` | `catalogo-metricas-grafo-P03-T05-v1.md` § qualificados | `modelo-logico-fisico-P03-T01-v1.md` + `taxonomia-estados-valor-P03-T07-v1.md` |
| 3 | **matches** | `count(match where evento=2026-10-28)` | `catalogo-metricas-grafo-P03-T05-v1.md` § matches | `06-relatorios-validacao/match-log-2026-10-28.csv` |
| 4 | **reunioes_realizadas** | `count(reuniao where status=realizada)` | `catalogo-metricas-grafo-P03-T05-v1.md` § reunioes | `06-relatorios-validacao/reuniao-log-2026-10-28.csv` |
| 5 | **propostas_enviadas** | `count(proposta where enviada=true)` | `catalogo-metricas-grafo-P03-T05-v1.md` § propostas | `06-relatorios-validacao/proposta-contrato-log.csv` |
| 6 | **contratos_fechados** | `count(contrato where assinado=true)` | `catalogo-metricas-grafo-P03-T05-v1.md` § contratos | `taxonomia-estados-valor-P03-T07-v1.md` + `proposta-contrato-log.csv` |
| 7 | **receita_reportada_total** | `sum(receita_reportada.valor_reportado)` | `catalogo-metricas-grafo-P03-T05-v1.md` § receita | `06-relatorios-validacao/receita-reportada-2026-11-28.csv` |
| 8 | **esforco_h_por_fornecedor** | `sum(horas_operacao) / count(inscritos)` | `templates-linhagem-evidencias-P03-T06-v1.md` § esforço | `06-relatorios-validacao/esforco-h-2026-11-28.csv` (Tamara/Pedro/Marcos) |
| 9 | **esforco_h_por_reuniao** | `sum(horas_curadoria+evento+followup) / count(reunioes)` | `templates-linhagem-evidencias-P03-T06-v1.md` § esforço | `esforco-h-2026-11-28.csv` |
| 10 | **satisfacao_fornecedor** | `avg(CSAT 1-10) + NPS fornecedor` | `catalogo-metricas-grafo-P03-T05-v1.md` § satisfacao | `06-relatorios-validacao/pesquisa-satisfacao-fornecedor-2026-11-28.csv` |
| 11 | **satisfacao_comprador** | `avg(CSAT 1-10 comprador)` | `catalogo-metricas-grafo-P03-T05-v1.md` § satisfacao | `06-relatorios-validacao/pesquisa-satisfacao-comprador-2026-11-28.csv` |
| 12 | **intencao_repetir** | `count(sim)/count(respostas)` fornecedor & comprador | `catalogo-metricas-grafo-P03-T05-v1.md` § intencao | `pesquisa-satisfacao-*.csv` campo `intencao_repetir` |

Taxas derivadas (não contam no limite 12; charter c10 nota): `taxa_match=matches/qualificados`, `taxa_reuniao=reunioes/matches`, `taxa_proposta=propostas/reunioes`, `taxa_contrato=contratos/propostas`, `taxa_conversao_ponta_a_ponta=contratos/inscritos` — reportadas no relatório 28/11.

### 12.4 Template do Relatório pós-piloto — 28/11 (charter campo 10 + campo 14)

> **Owner:** Tamara Braga + PF Rezende · **Deadline:** **28/11/2026** · **Gate seguinte:** decisão **05/12** (charter campo 15) com PF Rezende + Tamara Braga + Bruno Brigida · **Registro:** `04-project-management/relatorios-status/relatorio-piloto-SEBRAE-2026-11-28.md` + `04-project-management/atas-reuniao/` + `00-project-control/decisoes/DEC-PILOTO-2026-12-05.md` (se A/B).

**Template — estrutura mínima (linka charter campo 10 e campo 14):**

```markdown
# Relatório Piloto SEBRAE 28/10 — 28/11/2026
Owner: Tamara Braga + PF Rezende | Charter: HUB_Charter_Piloto_SEBRAE_2026-10-28.md c10/c14 | Spine: spine-piloto-minimo-v1.md §2

## 1. Funil (7) — charter c10
| etapa | n | taxa | denominador | fonte primária |
|---|---|---|---|---|
| inscritos |  | — | evento=2026-10-28 | inscricao log |
| qualificados |  | inscritos | diagnostico OK | diagnostico |
| match → reuniao → proposta → contrato → receita (R$) |  | ver taxas derivadas | match/reuniao/proposta logs | 06-relatorios-validacao/*.csv |

## 2. Esforço & Custo (2) — charter c10/c11
- esforco_h_por_fornecedor, esforco_h_por_reuniao, esforco_h_por_contrato (custo/hora + custo/match)
- infra Hostinger VPS (Marcos) — custo realizado

## 3. Satisfação & Intenção (3) — charter c10
- NPS/CSAT fornecedor (≥7 para sucesso), CSAT comprador, intencao_repetir ≥50% (campo 14)

## 4. Classificação binária — charter c14 (sem zona cinza)
- SUCESSO se: ≥20% reuniões (≥6/30) + ≥10% propostas (≥3/30) + ≥1 contrato/receita auditável + esforço documentado + NPS ≥7 + intencao ≥50% + LGPD 15/10 OK
- FRACASSO se: qualquer um (<10% reuniões OU 0 propostas OU 0 contrato/receita OU esforço >40h/reuniao OU satisfação <6 OU LGPD não assinado até 15/10)

## 5. Decisão recomendada (05/12 — charter c15)
- ( ) A Repetir piloto (ajustes, custo marginal menor)
- ( ) B Escalar para programa (cofinanciamento conteúdo/eventos + orçamento SEBRAE 2026)
- ( ) C Pausar/encerrar (documentar aprendizado)
Evidência: logs 06-relatorios-validacao/*.csv + pesquisa-satisfacao + esforço-h
```

**Critério de aceite do relatório (charter campo 14 — binário, sem zona cinza):**

- **Sucesso (todos devem ocorrer):** ≥6/30 reuniões + ≥3/30 propostas + ≥1 contrato/receita auditável + esforço/h por contrato documentado + NPS ≥7 + intenção repetir ≥50% + acordo LGPD até 15/10.
- **Fracasso (qualquer um):** <10% reuniões OU 0 propostas em 30d OU 0 contrato/receita OU esforço >40h/reunião sem queda projetável OU satisfação <6 OU LGPD/acordo não assinado até 15/10 (piloto não opera).

### 12.5 Como usar este anexo no dia a dia

1. **View Estratégico vs Operacional:** View A para gates P00→P07 (dependências); View B para tracking diário do piloto (Prep→Evento→Follow-up→Decisão) com filtro P03/P04/P05.
2. **Check must-have:** os 9 itens acima são **bloqueadores** — qualquer um pendente em 15/10 impede coleta de dados pessoais (LGPD).
3. **Relatório 28/11:** template §12.4 deve sair com **12 métricas + classificação binária charter c14**; sem ele, gate 05/12 não delibera.
4. **Decisão 05/12:** registrar em `00-project-control/decisoes/DEC-PILOTO-2026-12-05.md` + ata SEBRAE; sem prorrogação tácita.

> **Verificação Task 8:**
> ```bash
> grep -n "28/10" 04-project-management/cronogramas/cronograma-fases-v1.base  # >0
> python3 -c "import yaml; print(len(yaml.safe_load(open('04-project-management/cronogramas/cronograma-fases-v1.base'))['views']))"  # ==8
> grep -n "Cronogramas separados" 04-project-management/planos-mestres/HUB_Plano_Fases_v1.md  # §12
> grep -c "^- \[ \]" 04-project-management/planos-mestres/HUB_Plano_Fases_v1.md  # >=9 no §12
> ```
