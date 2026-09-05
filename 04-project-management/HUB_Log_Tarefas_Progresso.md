---
title: HUB — Log de Tarefas, Status e Progresso
type: log
status: ativo
owner: PF Rezende
created: 2026-08-27
tags:
  - log
  - memoria-longa
  - gestao-projeto
---

# HUB — Log de Tarefas, Status e Progresso

> Recurso de memória de longo prazo do projeto. Este arquivo é a fonte narrativa do **status** e do **progresso** das tarefas do HUB: o que foi feito, o que está em andamento, o que está bloqueado e por quê. As notas individuais de tarefa permanecem em `tarefas/` como fonte de verdade detalhada; este log condensa e preserva o histórico entre sessões.

## Como usar

1. **Registro por fase** — tabelas consolidadas com status atual de cada tarefa. Atualizar o status aqui sempre que uma tarefa mudar de estado.
2. **Log cronológico** — seção append-only (mais recente no topo). Cada entrada registra, por data: o que mudou, decisões tomadas, bloqueios e o que vem a seguir.
3. **Bloqueios e atenção** — seção viva para problemas em aberto e riscos que precisam de acompanhamento contínuo.
4. **Manutenção**: em toda sessão de trabalho, ao iniciar, leia este arquivo; ao terminar, adicione uma entrada ao log cronológico. Não apague entradas antigas — elas são o histórico.

## Legenda de status

| Status | Significado |
|---|---|
| `pendente` | Não iniciada; aguardando início ou dependência |
| `em-andamento` | Trabalho ativo em execução |
| `em-revisao` | Entregável produzido; aguardando revisão/aceite. **Regra de gate:** P01/P02 só saem de `em-revisao` após `DEC-M01`/`DEC-M02` + pacote `02-review/pacotes/P01-Oferta-Negocio.md`/`P02-Produto-Operacao.md` |
| `concluido` | **Sinônimo de `done` — Concluída e aceita APÓS decisão nominal `DEC-M*` + pacote `02-review/pacotes/`. Sem DEC, task permanece `em-revisao`** |
| `done` | Concluída e aceita (legado — usar `concluido` nas tarefas `P*.md`) |
| `bloqueada` | Travada por dependência, decisão ou recurso; registrar motivo no log |
| `cancelada` | Não será executada / descartada |

## Registro por fase

### Blueprints (BP) — visão macro

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/BP-001_HUB_Blueprint_Oferta_e_Arquitetura_Receita\|BP-001]] Oferta e Arquitetura de Receita | pendente | 2026-08-29 |
| [[04-project-management/tarefas/BP-002_HUB_Blueprint_Produto_e_Capacidades\|BP-002]] Produto e Capacidades | `done` | 2026-08-27 |
| [[04-project-management/tarefas/BP-003_HUB_Blueprint_Dados_e_Inteligencia\|BP-003]] Dados e Inteligência | pendente | 2026-08-29 |
| [[04-project-management/tarefas/BP-004_HUB_Blueprint_Arquitetura_Tecnologica\|BP-004]] Arquitetura Tecnológica | pendente | 2026-08-29 |
| [[04-project-management/tarefas/BP-005_HUB_Blueprint_Modelo_Operacional\|BP-005]] Modelo Operacional | pendente | 2026-08-29 |
| [[04-project-management/tarefas/BP-006_HUB_Blueprint_Governanca_e_Juridico\|BP-006]] Governança e Jurídico | pendente | 2026-08-29 |
| [[04-project-management/tarefas/BP-007_HUB_Blueprint_Marca_e_Mercado\|BP-007]] Marca e Mercado | pendente | 2026-08-29 |
| [[04-project-management/tarefas/BP-008_HUB_Blueprint_Lancamento_e_Evolucao\|BP-008]] Lançamento e Evolução | pendente | 2026-08-29 |

### P01 — Arquitetura de Oferta e Negócio

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades\|P01-T01]] Matriz das 4 Unidades | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade\|P01-T02]] Matriz Oferta × Comprador × Capacidade | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P01-T03_Taxonomia_Receita\|P01-T03]] Taxonomia de Receita | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P01-T04_Segmentos_Orcamentos_Compradores\|P01-T04]] Segmentos, Orçamentos e Compradores | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P01-T05_Log_Evidencias_GTM\|P01-T05]] Log de Evidências GTM | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P01-T06_Limites_Concentracao_Parceiros\|P01-T06]] Limites de Concentração de Parceiros | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P01-T07_Roadmap_Gates\|P01-T07]] Roadmap e Gates | `em-revisao` | 2026-09-05 |

### P02 — Produto e Operação

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P02-T01_Taxonomia_Capacidades\|P02-T01]] Taxonomia de Capacidades | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P02-T02_Jornada_Estados_Eventos\|P02-T02]] Jornada, Estados e Eventos | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P02-T03_Matriz_Autorizacao_Tenancy\|P02-T03]] Matriz de Autorização e Tenancy | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P02-T04_SOPs_CAOS\|P02-T04]] SOPs e CAOS | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P02-T05_Filas_Revisao_Overrides\|P02-T05]] Filas de Revisão e Overrides | `em-revisao` | 2026-09-05 |
| [[04-project-management/tarefas/P02-T06_RACI_Accountable_Unico\|P02-T06]] RACI — Accountable Único | `em-revisao` | 2026-09-05 |

### P03 — Dados Canônicos

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico\|P03-T01]] Modelo Lógico e Físico | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T02_Servico_Identidade_Matching\|P03-T02]] Serviço de Identidade e Matching | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T03_Envelope_Evento_Schema\|P03-T03]] Envelope de Evento e Schema | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T04_Dicionario_Fisico_Mapping\|P03-T04]] Dicionário Físico e Mapping | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T05_Catalogo_Metricas_Grafo\|P03-T05]] Catálogo de Métricas e Grafo | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T06_Templates_Linhagem_Evidencias\|P03-T06]] Templates de Linhagem e Evidências | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T07_Taxonomia_Estados_Valor\|P03-T07]] Taxonomia de Estados de Valor | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade\|P03-T08]] Matriz de Dados por Finalidade | `em-revisao` | 2026-08-29 |
| [[04-project-management/tarefas/P03-T09_Fluxos_Linhagem_Replay_DSAR\|P03-T09]] Fluxos de Linhagem, Replay e DSAR | `em-revisao` | 2026-08-29 |

### P04 — Governança e Confiança

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P04-T01_Arquitetura_Entidades\|P04-T01]] Arquitetura de Entidades | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T02_Mapa_Governanca_Dados_Fluxo\|P04-T02]] Mapa de Governança de Dados e Fluxo | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T03_Charter_Selo_Independencia\|P04-T03]] Charter do Selo de Independência | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T04_Matriz_Responsabilidade_Seguros\|P04-T04]] Matriz de Responsabilidade e Seguros | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T05_Registro_PI\|P04-T05]] Registro de PI | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T06_Testes_Retencao_DSAR\|P04-T06]] Testes de Retenção e DSAR | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T07_RACI_v2_Direitos_Decisao\|P04-T07]] RACI v2 — Direitos e Decisão | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P04-T08_Revisao_Inteligencia_Responsavel\|P04-T08]] Revisão de Inteligência Responsável | `pendente` | 2026-08-29 |

### P05 — Tecnologia e Contratos

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P05-T01_Arquitetura_Solucao_Ambientes\|P05-T01]] Arquitetura de Solução e Ambientes | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P05-T02_Contratos_Integracao\|P05-T02]] Contratos de Integração | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P05-T03_Mapa_Identidade_Sistemas\|P05-T03]] Mapa de Identidade entre Sistemas | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P05-T04_Baseline_Tecnico_Capacidade\|P05-T04]] Baseline Técnico de Capacidade | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P05-T05_Threat_Model_Controles\|P05-T05]] Threat Model e Controles | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P05-T06_SLOs_Runbooks_Recuperacao\|P05-T06]] SLOs, Runbooks e Recuperação | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P05-T07_Processo_Release_Rollback\|P05-T07]] Processo de Release e Rollback | `pendente` | 2026-08-29 |

### P06 — Economia, GTM e Evidência

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P06-T01_Registro_Premissas\|P06-T01]] Registro de Premissas | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T02_Modelo_Financeiro_3_Cenarios\|P06-T02]] Modelo Financeiro em 3 Cenários | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T03_Ponte_Valor_Produto_Receita\|P06-T03]] Ponte de Valor: Produto × Receita | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T04_Separacao_Comercial_Restrito\|P06-T04]] Separação Comercial e Restrito | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T05_Modelo_Capital_Tranches\|P06-T05]] Modelo de Capital em Tranches | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T06_Dicionario_KPIs_Financeiros\|P06-T06]] Dicionário de KPIs Financeiros | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T07_Modelo_Mercado_BottomUp\|P06-T07]] Modelo de Mercado Bottom-Up | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T08_Log_Evidencias_GTM_Alternativas\|P06-T08]] Log de Evidências GTM — Alternativas | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T09_Estrategia_Canais_Concentracao\|P06-T09]] Estratégia de Canais e Concentração | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T10_Matriz_Afirmacao_Evidencia\|P06-T10]] Matriz Afirmação × Evidência | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T11_Arquitetura_Marca_WhiteLabel\|P06-T11]] Arquitetura de Marca White-Label | `pendente` | 2026-08-29 |
| [[04-project-management/tarefas/P06-T12_Teste_Moat_Defensibilidade\|P06-T12]] Teste de Moat e Defensibilidade | `pendente` | 2026-08-29 |

### P07 — Portão de Lançamento

| Tarefa | Status | Última atualização |
|---|---|---|
| [[04-project-management/tarefas/P07-T01_Portao_Mestre_Grafo\|P07-T01]] Portão Mestre em Grafo | pendente | 2026-08-29 |
| [[04-project-management/tarefas/P07-T02_Plano_Operacoes_Lancamento\|P07-T02]] Plano de Operações de Lançamento | pendente | 2026-08-29 |
| [[04-project-management/tarefas/P07-T03_Workflow_Aprovacao\|P07-T03]] Workflow de Aprovação | pendente | 2026-08-29 |
| [[04-project-management/tarefas/P07-T04_Matriz_Rastreabilidade\|P07-T04]] Matriz de Rastreabilidade | pendente | 2026-08-29 |
| [[04-project-management/tarefas/P07-T05_Registro_Riscos_Premissas_Dependencias\|P07-T05]] Registro de Riscos, Premissas e Dependências | pendente | 2026-08-29 |
| [[04-project-management/tarefas/P07-T06_Checklist_Lancamento_Comercial\|P07-T06]] Checklist de Lançamento Comercial | pendente | 2026-08-29 |
| [[04-project-management/tarefas/P07-T07_Ciclo_Vida_Artefatos\|P07-T07]] Ciclo de Vida dos Artefatos | pendente | 2026-08-29 |

---

## Log cronológico

> Append-only. Entradas mais recentes no topo. Formato: `### YYYY-MM-DD — resumo curto`.

### 2026-09-05 — Sprint piloto P03-T01/T08/T09 executado em paralelo

- **Dispatch:** três lanes independentes foram executadas em paralelo com `openai/gpt-5.6-luna`, após verificação de `~/.config/opencode/opencode.json` antes e depois do dispatch. Cada lane teve escopo de arquivo disjunto; commits dos lanes foram integrados seletivamente.
- **P03-T01:** modelo lógico/físico atualizado com recorte explícito 12/12 do spine SEBRAE → 25 entidades canônicas full; verificação `canonical_id=35` (inclui referências), `valid_from=32`, relações=12, sem placeholder. Mantido `em-revisao`, DAT-001 e revisão Dados+Tech pendentes.
- **P03-T08:** matriz LGPD atualizada com tabela piloto 12/12, 5 fluxos, regra `consent_id + purpose + version`, quarentena e DSAR manual. Verificação `pilot_rows=12`, `flows=5`, `required_controls=35`; DAT-008 e revisão Jurídico/Gov permanecem abertos.
- **P03-T09:** linhagem/replay/DSAR piloto explicitados com envelope mínimo, correção DAT-010, replay manual e reconciliação `counts/keys/totals`. XLSX permanece não aprovado; inspeção confirmou 16 worksheets visíveis (15 abas funcionais do manifesto + `00_DRAFT_NOTICE`), resolvendo a discrepância de escopo sem tratar promoção como PASS.
- **Decisão de gate:** nenhuma tarefa foi promovida para `concluido`; nenhum `DEC-P03-T08`/`DEC-P03-T09` foi criado; DAT-009/DAT-010 permanecem blocking. P04/P05 continuam pendentes até gates previstos.
- **Evidência:** commits dos lanes `432f0f5` (P03-T01), `b4666a2` (P03-T08) e `a36fbd6` (P03-T09), integrados na working tree atual; validação final e commit consolidado ainda pendentes.

### 2026-09-05 — Task 7 — P01/P02 reclassificadas para `em-revisao` (M01/M02 sem DEC)

- **O que mudou:** 13 tarefas `P01-T01..T07` (7) + `P02-T01..T06` (6) reclassificadas de `concluido`/`done` → `em-revisao`. Frontmatter `status: em-revisao` + tabelas Registro por fase atualizadas para `2026-09-05`.
- **Motivo / Hierarquia respeitada:** `matriz-fases-tarefas-v1.md` § Hierarquia (task → plano fase → marcos → log → matriz) + `marcos-fases-v1.md` M01/M02 exigem `DEC-M01`/`DEC-M02` + pacote `02-review/pacotes/P01-Oferta-Negocio.md`/`P02-Produto-Operacao.md`. Auditoria `auditoria-tarefas-executavel-2026-09-05.md` §7 acusou 13 `status: concluido` órfãos (`grep concluido ==13` vs `ls DEC-M*.md ==0`); nenhum `03-approved/` nem `DEC-M*.md` existe — gate não aprovado.
- **Decisão tomada:** **reclassificar** (não criar DEC). `ls 00-project-control/decisoes/DEC-M*.md` → 0; `ls 02-review/pacotes/P0*-*.md` → só `P01-aceite-cross-functional-v1.md` (pacote parcial, não pacote canônico M01/M02). Criar DEC sem evidência violaria `marcos-fases-v1.md` § "Sem gate aprovado, próxima fase não inicia" e `project-map.md` lifecycle.
- **Legenda atualizada:** adicionado `concluido` (= `done` pós-DEC) e regra `em-revisao` só sai com `DEC-M*` + pacote; evita novo "concluído sem gate".
- **Bloqueios:** atualizado para `P01/P02 em em-revisao aguardando DEC-M01/M02`. P03 em `em-revisao` (spine), P04–P07 `pendente`.
- **Verificação:** `grep -c "status: concluido" 04-project-management/tarefas/P01*.md P02*.md` == 0; `ls 00-project-control/decisoes/DEC-M*.md` == 0; `project-map.md` § Faseamento reflete M01/M02 pendentes.

### 2026-09-05 — Tasks 4–8 — Framework executável: owners normalizados + critérios P03/P04-P07 + dual cronograma (retry, no network)

- **Task 4 — Owners P03–P06 normalizados (0 a designar):** `grep -R "a designar" 04-project-management/tarefas/P03*.md` == 0; `P04*.md` == 0; `P05*.md` == 0; `P06*.md` == 0 (verificação local). Frente: `P03-T01..T09` com `owner: [Ana Silva]` / `PF Rezende (interino)` + `accountable` nominal + `blocked_reason: "aguardando contratação..."` + `blocked_until: 2026-10-10/15` onde nomeação pendente (cf. `Tarefa_Executavel_Definicao.md §9` — proibição "a designar"; `README.md §6` MUST `owner` nominal). `P04-T01..T08` (GOV) → `PF Rezende (interino — Jurídico/DPO)` + `blocked_until: 2026-10-10/15`; `P05-T01..T07` (Tech) → `PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15` + `blocked_until: 2026-10-15`; `P06-T01..T12` (Finanças/GTM) → `Tamara`/`PF Rezende` provisional + `blocked_until: 2026-10-12/15` para `FIN-001`/`BRD-002`. Lifecycle preservado: `owner` em task → plano (`P03_Dados_Canonicos.md` ownership) → marcos → log → matriz (`matriz-fases-tarefas-v1.md` 56 tarefas atualizada — zero "a designar" para P03–P06).
- **Task 5 — Critérios P03 (G03.A1–C5):** 9 tarefas `P03-T01..T09` reescritas com `Acceptance criteria` testável + `evidence_required` + `verification` (comando `ls`/`grep` local). Ex: `P03-T01` 25/25 `canonical_id` + 12/12 FK/temporalidade (G03.A1 DAT-001), `P03-T04` 41 campos/16 tabelas + `DAT-010/G03.B2 blocking: yes` (corrections.csv), `P03-T08` 5 fluxos × 41 campos LGPD, `P03-T09` fluxos + XLSX + `06-relatorios-validacao/` PASS. Cada `target_file` aponta `01-work/dados-tech-financas/refinamento-modelo-dados/` (não `99-archive/superado` sem nota). Verificação: `grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md` == 0; `grep -R "G03\." 04-project-management/tarefas/P03*.md | wc -l` ≥ 9.
- **Task 6 — Critérios P04–P07 (34 tarefas pendentes, gates blocking):** `P04-T01..T08` (G04.1–G04.9 GOV-001 blocking até parecer jurídico), `P05-T01..T07` (G05.1–G05.7; `TEC-005/G05.4` e `TEC-007/G05.7` **blocking: yes** — baseline custo/latência + release/rollback), `P06-T01..T12` (G06.1–G06.12; `BRD-002/GTM-007/G06.10` **blocking: yes** — nenhum claim > evidência, rótulo `Ilustrativo — não validado`), `P07-T01..T07` (G07.1–G07.8; `LCH-007/G07.7` **blocking: yes** — `03-approved/` só com `DEC-M07`). Cada task com `evidence_required` auditável (`01-work/pesquisa-e-confianca/...`, `02-review/portao-lancamento/`, `05-resources/...`) e `verification` com `grep -c "TBD|a definir|a designar" target_file ==0` + `diff` matriz vs decks onde aplicável. P07 owner corrigido: `P07-T07` já `PF Rezende` nominal; demais `P07-T*` normalizados `PF Rezende`/`Tamara` provisional com `blocked_until` — `grep -R "a designar" 04-project-management/tarefas/P07*.md` == 0 após fix.
- **Tasks 7–8 — Dual cronograma + templates sync:** `04-project-management/cronogramas/cronograma-fases-v1.base` dual-track validado — **View A Estratégico** (P00→P07 Gates & Dependências; dependência `M00→M01→M02→M03.A→M03.B→M03→M04+M05→M06→M07`; datas-âncora `15/10 Acordo LGPD go/no-go`, `28/10 Evento SEBRAE-SP`, `28/11 Relatório`, `05/12 Decisão gate`) + **View B Operacional** (Piloto SEBRAE 28/10: Prep 03/09–27/10 → Evento 28/10 → Follow-up 29/10–27/11 → Relatório 28/11 → Decisão 05/12; refs `HUB_Charter_Piloto_SEBRAE_2026-10-28.md c13` + `spine-piloto-minimo-v1.md §1–§2`). Pilot vs full separado: full = 25 entidades + 41 campos + 73 métricas; piloto = 12 entidades mínimas `spine-piloto-minimo-v1.md`. Templates: `atas-reuniao/_template-ata.md` + `relatorios-status/template-relatorio-status.md` receberam `owner`, `evidence_required`, `gate`, `DEC-*` link, `blocked_until` (frontmatter + seção/tabela rastreabilidade).
- **Tabelas Registro por fase:** P01 (7) + P02 (6) permanecem `em-revisao` (2026-09-05) — aguardando `DEC-M01`/`DEC-M02` + pacotes (lifecycle hierarchy preservada, sem promoção para `concluido`). P03–P07 mantêm `em-revisao`/`pendente` conforme execução, mas com frontmatter executável completo.
- **Verificação geral (no network, local only):** `grep -R "a designar" 04-project-management/tarefas/P03*.md P04*.md P05*.md P06*.md | wc -l` == 0 (P07 ==0 após fix); `grep -R "evidence_required:" 04-project-management/tarefas/P03*.md P04*.md P05*.md P06*.md P07*.md | wc -l` == 56; `ls 04-project-management/cronogramas/cronograma-fases-v1.base && grep -c "Estratégico\|Operacional.*Piloto SEBRAE 28/10" 04-project-management/cronogramas/cronograma-fases-v1.base` == 2; `grep -c "TBD\|a definir" 04-project-management/tarefas/P03-T01*.md` == 0; `ls 00-project-control/decisoes/DEC-M*.md` == 0 (gates blocking preservados).
- **Bloqueios atualizados:** ver § Bloqueios e pontos de atenção (P03–P06 0 a designar, P07 0 após fix; `DAT-010/G03.B2`, `TEC-005/G05.4`, `TEC-007/G05.7`, `LCH-007/G07.7`, `BRD-002/GTM-007` blocking).

### 2026-08-29 — P03-T09 rascunho — Fluxos Linhagem/Replay/DSAR + XLSX reconstruído (G03.C4/C5)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/fluxos-linhagem-replay-dsar-P03-T09-v1|fluxos-linhagem-replay-dsar-P03-T09-v1.md]] + `05-pastas-trabalho-rascunho/HUB_Mapa_Inteligencia_Dados_Indicadores_RECONSTRUIDO_P03-T09_v1.xlsx` (41 campos, 16 worksheets: 15 funcionais + `00_DRAFT_NOTICE`, 73 indicadores) + `06-relatorios-validacao/` (entity-key, roi-recalculation, corrected-csv) — evidência histórica, sem promoção.
- **Verificação:** G03.C4/C5 — fluxos prototipados + XLSX reconstruído para revisão Camada 3.

### 2026-08-29 — P03-T08 rascunho — Matriz Dados-Finalidade LGPD (G03.C4 parcial)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1|matriz-dados-finalidade-P03-T08-v1.md]] — 5 fluxos × 41 campos com base legal, retenção, propagação `revogação ≤5 min` e exclusão DSAR; pareceres Jurídico/LGPD e Gov Dados `Refinar com condições`.
- **Verificação:** G03.C4 parcial — mapa ponta a ponta para Camada 3.

### 2026-08-29 — P03-T07 rascunho — Taxonomia Estados Valor (G03.C3)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/taxonomia-estados-valor-P03-T07-v1|taxonomia-estados-valor-P03-T07-v1.md]] — 4 estados `potencial→influenciado→validado→realizado` com dedup `financial_claims` e holdout `run_rh06_holdout_001`; pareceres Finanças/Gov Dados `Refinar com condições`.
- **Verificação:** G03.C3 — insumo Camada 3.

### 2026-08-29 — P03-T06 rascunho — Templates Linhagem + Caminho Financeiro (G03.C2)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/templates-linhagem-evidencias-P03-T06-v1|templates-linhagem-evidencias-P03-T06-v1.md]] — templates `origem→métrica→ação→resultado→valor` + 1 caminho `PES-02 3.2→4.1 → RH-06 45d→32d → R$18.500 influenciado` com `run_id` reproduzível; regra anti-dupla contagem.
- **Verificação:** G03.C2 — linhagem reproduzível.

### 2026-08-29 — P03-T05 rascunho — Catálogo 73 + Grafo (G03.C1)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/catalogo-metricas-grafo-P03-T05-v1|catalogo-metricas-grafo-P03-T05-v1.md]] + cópia em `sintese-entre-abas/` — 73 indicadores com fórmula/dimensão/owner, 12 alavancas, 10 dashboards, grafo `DAT-01/02/03 → eventos → indicadores → fato financeiro → dashboards`; 6 definições alternativas resolvidas (MRR/ARR/NRR etc.).
- **Verificação:** G03.C1 — 73/73 sem alternativa.

### 2026-08-29 — P03-T04 rascunho — Dicionário Físico 41 campos (G03.B2 blocking)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|dicionario-fisico-mapping-P03-T04-v1.md]] — 41 campos em 16 tabelas → 25 entidades canônicas + 4 correções `DAT010-001..004` em `04-registro-correcoes/corrections.csv` (Retenção, Acesso, Consentimento, Evidência).
- **Verificação:** G03.B2 **blocking: yes** — mínimo para liberar P03.

### 2026-08-29 — P03-T03 rascunho — Envelope Canônico + Schema Registry (G03.B1)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/envelope-evento-schema-P03-T03-v1|envelope-evento-schema-P03-T03-v1.md]] — 17 campos (`event_id`, `schema_version`, `idempotency_key`), versionamento `major`/`minor`, idempotência `producer+event_type+subject+occurred_at+hash`, replay `run_id` + `schema-registry/fixtures/identity.merged.v1.0.valid.json`.
- **Verificação:** G03.B1 — produtores/consumidores de teste contrato+replay.

### 2026-08-29 — P03-T02 rascunho — Serviço Identidade/Matching (G03.A2)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1|especificacao-identidade-P03-T02-v1.md]] + `dataset-identidade-sintetico-P03-T02.csv` (20 pessoas/40 aliases, 15 pares rotulados) — 3 camadas matching (≥0.95 auto-merge, 0.70–0.95 human_review), merge/alias/survivorship, reversibilidade `identity.merged/split`; métricas FP ≤2%/FN ≤5%.
- **Verificação:** G03.A2 — FP/FN + reversibilidade demonstráveis.

### 2026-08-29 — P03-T01 rascunho — Modelo Lógico/Físico v1 (G03.A1)

- **Entregável:** [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1.md]] — 25 entidades com `canonical_id` estável, 12 relacionamentos N:N temporal, tipos objeto, regras `valid_from/to` + diagrama ER Mermaid + `identity_alias`.
- **Verificação:** G03.A1 — 25/25 PK estável, nenhuma entidade sem chave.


### 2026-08-29 — P03-T09 kick-off — Fluxos Linhagem/Replay/DSAR iniciado

- **O que mudou:** `P03-T09` passou de `pendente` para `em-revisao`. Dependências `P03-T03` e `P03-T08` já `em-revisao`.
- **Entregável alvo:** fluxos linhagem/correção/replay/DSAR prototipados + XLSX reconstruído com `06-relatorios-validacao/` em `02-review/bloqueado/.../indicadores-xlsx/` (G03.C4/C5).


### 2026-08-29 — P03-T08 kick-off — Matriz Dados-Finalidade LGPD iniciada

- **O que mudou:** `P03-T08` passou de `pendente` para `em-revisao`. Dependência `P03-T01` já `em-revisao`.
- **Entregável alvo:** matriz `campo→finalidade→base legal→retenção→propagação→exclusão` por fluxo em `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` (G03.C4 parcial — LGPD ponta a ponta para Camada 3).


### 2026-08-29 — P03-T07 kick-off — Taxonomia Estados Valor iniciada

- **O que mudou:** `P03-T07` passou de `pendente` para `em-revisao`. Dependência `P03-T05` já `em-revisao`.
- **Entregável alvo:** estados `potencial→influenciado→validado→realizado` + políticas atribuição/deduplicação/contrafactual em `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/` (G03.C3 — pareceres Finanças/Gov Dados para Camada 3).


### 2026-08-29 — P03-T06 kick-off — Templates Linhagem iniciado

- **O que mudou:** `P03-T06` passou de `pendente` para `em-revisao`. Dependência `P03-T05` já `em-revisao` (catálogo 73).
- **Entregável alvo:** templates `origem→métrica→ação→resultado→valor` + 1 caminho financeiro ponta a ponta com evidência reproduzível em `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/` (G03.C2).


### 2026-08-29 — P03-T05 kick-off — Catálogo Métricas/Grafo iniciado

- **O que mudou:** `P03-T05` passou de `pendente` para `em-revisao`. Dependências `P03-T01` e `P03-T03` já `em-revisao`.
- **Entregável alvo:** catálogo 73 indicadores com fórmula/dimensão/owner + grafo dependências em `sintese-entre-abas/` (G03.C1 — nenhuma métrica crítica com definição alternativa).


### 2026-08-29 — P03-T04 kick-off — Dicionário Físico iniciado (blocking)

- **O que mudou:** `P03-T04` passou de `pendente` para `em-revisao`. Dependências `P03-T01` e `P03-T03` já `em-revisao`.
- **Entregável alvo:** tabela 41 campos em 16 tabelas para entidades canônicas + `04-registro-correcoes/` auditável (G03.B2 — **blocking: yes**).


### 2026-08-29 — P03-T03 kick-off — Envelope Evento/Schema iniciado

- **O que mudou:** `P03-T03` passou de `pendente` para `em-revisao`. Dependência `P03-T01` já `em-revisao` (modelo lógico v1).
- **Entregável alvo:** envelope canônico + schema registry + idempotência + regras temporais em `01-work/dados-tech-financas/refinamento-modelo-dados/` (G03.B1 — produtores/consumidores passam em contrato+replay).


### 2026-08-29 — P03-T02 kick-off — Serviço Identidade/Matching iniciado

- **O que mudou:** `P03-T02` passou de `pendente` para `em-revisao`. Dependência `P03-T01` já `em-revisao` (modelo lógico v1 com `identity_alias`).
- **Entregável alvo:** especificação matching/merging/survivorship + dataset sintético com FP/FN e reversibilidade em `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-indicadores/` (G03.A2).


### 2026-08-29 — P03-T01 kick-off — Modelo Lógico/Físico iniciado

- **O que mudou:** `P03-T01` passou de `pendente` para `em-revisao` (`status: - em-revisao`). Dependência `P02-T01` já `concluido`, liberando `M03.A`.
- **Entregável alvo:** proposta de diagramas + tabelas em `02-review/01-blueprint/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md` + `01-work/dados-tech-financas/refinamento-modelo-dados/` (G03.A1 — nenhuma entidade sem chave estável).
- **Matriz:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` — `P03-T01` agora `em-revisao`/`- [ ]` (13 `concluido`/`- [x]` mantidos).
- **Base:** `HUB_Tarefas_Fases_Execucao.base` passará a mostrar `🔍 em-revisao` para `P03-T01`; `P03-T02..T09` permanecem `pendente`.


### 2026-08-29 — P01-T02 refactor — fichas separadas para artefato dedicado

- **O que mudou:** 17 fichas operacionais + matriz prontidão + cenários movidos de `04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade.md` (248→88 linhas) para `01-work/produto-e-operacao/refinamento-produto/fichas-operacionais-P01-T02-v1.md` (183 linhas). Task note virou índice: mantém `Execução` resumida, `Verificação estrutural 17/17` e `Pendências`, e vincula via `[[01-work/produto-e-operacao/refinamento-produto/fichas-operacionais-P01-T02-v1]]` + SEG-01..06.
- **Mirrors:** `quartz-site/content/04-project-management/tarefas/P01-T02...` e `quartz-site/content/01-work/produto-e-operacao/refinamento-produto/fichas-operacionais-P01-T02-v1.md` sincronizados.
- **Commit:** `658a8bc refactor(p01-t02): extract 17 fichas to refinement artifact and keep task as index`.


### 2026-08-29 — P03–P06 revertidos para pendente (reset fases 3–7)

- **O que mudou:** 36 tarefas de P03 (9), P04 (8), P05 (7) e P06 (12) passaram de `em-revisao` para `pendente` (`status: - pendente` nas notas). P07 já estava `pendente` (7) e foi normalizado para `status: - pendente` (lista). P01 (7) e P02 (6) permanecem `done` (`concluido`).
- **Matriz:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` sincronizada — 43 linhas agora `pendente`/`- [ ]` (P03–P07), 13 linhas `concluido`/`- [x]` (P01+P02).
- **Mirrors:** `quartz-site/content/04-project-management/tarefas/P03-T*.md` a `P06-T*.md` sincronizados para `pendente`.
- **Base:** `HUB_Tarefas_Fases_Execucao.base` sem alteração (view derivada); passará a mostrar `⬜ pendente` para P03–P07.
- **Motivo:** reset operacional para replanejamento sequencial; bases/execução espelham o novo status.

### 2026-08-29 — P02 concluído — 6 tarefas + 3 artefatos de refinamento criados

- **O que mudou:** P02-T01 a P02-T06 passaram de `em-revisao` para `done` (`status: concluido` nas notas). Criados 3 rascunhos faltantes: `01-work/produto-e-operacao/refinamento-produto/matriz-autorizacao-tenancy.md` (G02.3), `01-work/produto-e-operacao/refinamento-produto/filas-revisao-overrides.md` (G02.2/G02.7) e `01-work/produto-e-operacao/refinamento-produto/RACI_v1.md` + cópia em `02-review/bloqueado/.../14_RACI/RACI_v1.md` (G02.6/G02.7). Blocos `## Execução` adicionados nas 6 notas.
- **Matriz:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` sincronizada — P02 6 linhas agora `- [x]` / `concluido` (total `- [x]` = 13: P01 7 + P02 6).
- **Mirrors:** `quartz-site/content/04-project-management/tarefas/P02-T*.md` sincronizados.
- **Commit:** `8202ede docs(p02): create missing refinement artifacts and mark P02 concluido`.
- **Próximo:** P03 Dados Canônicos (spine) — revisar sub-gates M03.A/B antes de P04/P05.

### 2026-08-29 — P01 concluído — 7 tarefas marcadas como concluído e matriz sincronizada

- **O que mudou:** P01-T01 a P01-T07 passaram de `em-revisao` para `done` (`status: - concluido` nas notas) após revisão das entregas em `02-review/01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` (§1.1 matriz 4 unidades, §2.1 17 ofertas + fichas, §3.1 taxonomia, §2.2 6 segmentos, log GTM, limites concentração e roadmap). Verificação anterior já cobria 17/17 ofertas, 6/6 segmentos e cenários SEG-01..06 como `hypothesis`.
- **Matriz:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` — coluna `deliverable` com checkboxes `- [x]` e `status: concluido` para P01 (7/56). P01-T01..T07 agora refletem `✅` nas views Bases.
- **Mirrors:** `quartz-site/content/04-project-management/tarefas/P01-T*.md` sincronizados.
- **Commit:** `ba619bb docs(p01): mark P01 tasks concluido and sync matrix`.

### 2026-08-29 — Governança de fases e matriz canônica sincronizadas

- **O que mudou:** criado `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` (56 tarefas: P01 7/P02 6/P03 9/P04 8/P05 7/P06 12/P07 7); corrigidos gaps bloqueadores `DAT-010/G03.B2`, `TEC-005/G05.4`, `TEC-007/G05.7`, `LCH-007/G07.7` em `HUB_Plano_Fases_v1.md`, `marcos-fases-v1.md` e planos P03/P05/P07; adicionada dependência `P04-T01` a `P07-T01`; reconciliado `BRD-004` como pós-MVP.
- **Commits:** `90b8211 docs: align phase gates and task matrix`; `a02e74e chore: sync Obsidian workspace assets`.
- **Docs:** `project-map.md` e `README.md` atualizados para commit `a02e74e` e nova estrutura `registro-mestre/`.

### 2026-08-29 — P01 avançou para refinamento integrado

- **O que mudou:** P01-T03 a P01-T07 foram executadas e passaram de `pendente` para `em-revisao`; P01-T01 e P01-T02 permanecem em revisão.
- **Escopo:** os artefatos foram alinhados à Camada 1 — Blueprint e à Camada 2 — Refinamento. Taxonomias, segmentos, limites, evidências e roadmap permanecem hipóteses, modelos de trabalho ou estruturas de investigação.
- **Decisão:** não buscar aceitação formal, aprovação final, compradores reais, budgets reais ou validação financeira nesta etapa. Nenhum gate foi promovido para `aprovado`.
- **Próximo passo:** revisar a coerência integrada de P01 e registrar contradições, questões de investigação e dependências para as fases seguintes.

### 2026-08-29 — P02 revisada para refinamento coerente

- **O que mudou:** P02-T01 a P02-T06 foram revisadas; as tarefas passaram de `pendente` para `em-revisao`.
- **Escopo:** fronteiras de capacidades, jornada, autorização, SOPs, filas e RACI permanecem artefatos de Blueprint/Refinamento, sem prontidão de produção ou aprovação final.
- **Resultado:** foram corrigidas apenas inconsistências de linguagem e enquadramento; P02-T02 não exigiu alteração de conteúdo.
- **Próximo passo:** revisar a coerência integrada de P02 com as entradas de P01 antes de avançar para P03.

### 2026-08-29 — P03 revisada para refinamento coerente

- **O que mudou:** P03-T01 a P03-T09 foram revisadas; as tarefas passaram de `pendente` para `em-revisao`.
- **Escopo:** modelos, identidade, eventos, mapeamentos, métricas, linhagem, estados de valor, finalidade e DSAR permanecem artefatos de Blueprint/Refinamento; referências à Camada 3 são futuras e não representam aprovação atual.
- **Resultado:** a linguagem foi ajustada para propostas, rascunhos, verificações e revisão posterior, sem promover artefatos para produção, aprovação final ou aceite formal.
- **Próximo passo:** revisar a coerência integrada da spine de dados com as entradas de P01/P02 antes de iniciar P04/P05.

### 2026-08-29 — P04 revisada para refinamento coerente

- **O que mudou:** P04-T01 a P04-T08 foram revisadas; as tarefas passaram de `pendente` para `em-revisao`.
- **Escopo:** arquitetura de entidades, governança de dados, Selo, responsabilidades, PI, DSAR, RACI e inteligência responsável permanecem propostas e artefatos de refinamento; referências à Camada 3 são futuras.
- **Resultado:** a linguagem foi ajustada para rascunhos, propostas, evidências e revisão posterior, sem declarar aprovação final, liberação produtiva ou aceite formal.
- **Próximo passo:** revisar a coerência integrada de P04 com as entradas de P03 e registrar dependências para P05/P06.

### 2026-08-29 — P05 revisada para refinamento coerente

- **O que mudou:** P05-T01 a P05-T07 foram revisadas; as tarefas passaram de `pendente` para `em-revisao`.
- **Escopo:** arquitetura, contratos, identidade, baseline, segurança, SLOs, recuperação e release permanecem especificações revisáveis; produção e aprovação final ficam fora desta etapa.
- **Resultado:** a linguagem foi ajustada para propostas, especificações, testes planejados e revisão posterior, sem declarar liberação para uso.
- **Próximo passo:** revisar a coerência integrada da P05 com as entradas de P03/P04 antes de avançar para P06.

### 2026-08-29 — P06 revisada para refinamento coerente

- **O que mudou:** P06-T01 a P06-T12 foram revisadas; as tarefas passaram de `pendente` para `em-revisao`.
- **Escopo:** premissas, modelo financeiro, ponte valor-produto-receita, separação comercial/restrito, capital, KPIs, mercado bottom-up, evidências GTM, canais, matriz afirmação-evidência, marca e moat permanecem propostas e artefatos de refinamento; aprovação, validação e certificação ficam para etapa posterior.
- **Resultado:** a linguagem foi ajustada para propostas, minutas, modelos e revisões posteriores, sem declarar aprovação, validação ou liberação para uso.
- **Próximo passo:** revisar a coerência integrada da P06 com as entradas de P01/P03/P04/P05 antes de avançar para P07.

### 2026-08-27 — Criados seis cenários de teste por segmento para P01-T02

- **O que mudou:** criados cenários operacionais para SEG-01 a SEG-06 a partir das 17 fichas de oferta de P01-T02.
- **Cobertura:** cada cenário registra oferta escolhida, JTBD, persona/função compradora, usuário operacional, problema inicial, fluxo C.A.O.S., parceiros, entregáveis, custo/esforço hipotéticos e evidência esperada de sucesso.
- **Arquivos:** [[03-approved/matriz-de-oferta-e-comprador-cenarios/cenarios/P01-S01_SEG-01_Empresas_Marca_Comunicacao_Empregador|SEG-01]], [[03-approved/matriz-de-oferta-e-comprador-cenarios/cenarios/P01-S02_SEG-02_Ecossistemas_Associacoes_Federacoes|SEG-02]], [[03-approved/matriz-de-oferta-e-comprador-cenarios/cenarios/P01-S03_SEG-03_Compradores_Procurement_RH|SEG-03]], [[03-approved/matriz-de-oferta-e-comprador-cenarios/cenarios/P01-S04_SEG-04_Fundacoes_Financiadores_Impacto|SEG-04]], [[03-approved/matriz-de-oferta-e-comprador-cenarios/cenarios/P01-S05_SEG-05_Instituicoes_Impacto_Educacao|SEG-05]] e [[03-approved/matriz-de-oferta-e-comprador-cenarios/cenarios/P01-S06_SEG-06_Acesso_Empresarial_Plataforma|SEG-06]].
- **Estado:** todos permanecem `hypothesis`; nenhum cenário declara validação, tração, contrato ou comprador real.
- **Próximo passo:** usar os cenários para estruturar execução de testes e coleta de evidências, sem promover automaticamente o status.

### 2026-08-27 — P01-T02 detalhada com fichas operacionais das 17 ofertas

- **O que mudou:** P01-T02 foi detalhada com 17 fichas operacionais, cobrindo JTBD, comprador, parceiros, riscos e critérios de sucesso.
- **Cobertura:** 5 ofertas de Mídia e Experiências, 6 de Impacto Financiável e 6 de Ecossistemas Empresariais.
- **Resultado:** 17/17 ofertas possuem ficha operacional; as hipóteses de comprador, economia e critérios foram explicitadas sem serem tratadas como demanda validada, preço, contrato ou compromisso de entrega.
- **Prontidão:** propriedade permanece fechada em nível de Blueprint; a matriz de fichas está pronta para gerar cenários de teste por segmento.
- **Pendências:** compradores reais, evidência de demanda, economia unitária, classificação financeira e aceite nominal de `STR-002` continuam pendentes.
- **Referência:** [[04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade|P01-T02]].

### 2026-08-27 — Criação do log de tarefas e progresso

- **O que mudou:** criado este recurso de memória de longo prazo para registro descritivo de status e progresso das tarefas do HUB.
- **Snapshot inicial de status:**
  - `BP-002` (Produto e Capacidades) — `done`, já revisado e aceito.
  - `P01-T01` (Matriz das 4 Unidades) — `em-revisao`; revisão interna realizada em 2026-08-27 com condições de refinamento em Estratégia, Operações e Jurídico; o artefato está pronto para o próximo ciclo, mas `STR-001` permanece aberto como questão de coerência.
  - Demais tarefas — sem status registrado nas notas individuais; preenchimento pendente.
- **Decisões:** statuses padronizados conforme legenda acima; as notas em `tarefas/` continuam sendo a fonte de verdade detalhada.
- **Próximos passos:** preencher status das tarefas restantes e manter este log em toda sessão.

---

## Bloqueios e pontos de atenção

> Atualizar sempre que um bloqueio surgir ou for resolvido.

- **Atual (2026-09-05) — pós Tasks 4–8 retry (no network):** P01 (7) e P02 (6) em `em-revisao` — **aguardando `DEC-M01`/`DEC-M02` + pacotes `02-review/pacotes/P01-Oferta-Negocio.md`/`P02-Produto-Operacao.md`** (13 reclassificadas de `concluido`; §7 auditoria 13 órfãos; lifecycle `task → plano fase → marcos → log → matriz` preservado; `ls 00-project-control/decisoes/DEC-M*.md ==0` confirma gate não aprovado). P03 (9) em `em-revisao` (rascunhos G03.A1–G03.C5 entregues, aguardando validação Dados+Tech+LGPD). P04 (8), P05 (7), P06 (12) e P07 (7) em `pendente` — mas com frontmatter executável completo (owners nominais + `evidence_required` + `gate` + `blocked_until`).
- **Owners — 0 a designar (Task 4 normalização):** `grep -R "a designar" 04-project-management/tarefas/P03*.md` == 0; `P04*.md` == 0; `P05*.md` == 0; `P06*.md` == 0; `P07*.md` == 0 após fix (P07 corrigido). Padrão `Tarefa_Executavel_Definicao.md §9` + `tarefas/README.md §6`: `owner` é pessoa nominal (`Ana Silva`, `Tamara`, `PF Rezende (interino)`) ou `blocked: aguardando nomeação + blocked_until`. Ex: `P03-T01 owner: [Ana Silva + PF Rezende (interino)] blocked_until: 2026-10-15`, `P04-T01..T08` → `PF Rezende (interino — Jurídico/DPO) blocked_until: 2026-10-10/15`, `P05-T*` → `PF Rezende // blocked: aguardando nomeação Tech até 2026-10-15` + `blocked_until: 2026-10-15`, `P06-T01` → `Finanças (interino)` + `blocked_until: 2026-10-12`, `P06-T10` → `Tamara + PF Rezende provisional blocked_until: 2026-10-15`. Verificação local sem rede: `grep -L "^owner:" tarefas/P*.md` == 0; `grep -R "a designar" tarefas/P*.md | wc -l` == 0.
- **Gates blocking preservados (não bypassáveis, Tasks 5–6):**
  - `DAT-010/G03.B2` — **blocking: yes** em `P03-T04` (Dicionário físico 41 campos/16 tabelas + `04-registro-correcoes/corrections.csv` DAT010-001..004) — libera só com `G03.B2` PASS + `06-relatorios-validacao/` PASS (M03.B).
  - `TEC-005/G05.4` — **blocking: yes** em `P05-T04` (Baseline técnico custo/latência/volume/rate-limit M0) — `01-work/dados-tech-financas/modelos-financeiros/baseline-tecnico-capacidade-P05-T04-v1.{md,csv}` publicado + integrado em `modelo-financeiro-P06-T02-v1.xlsx` § premissas técnicas + parecer `02-review/pacotes/P05-Tecnologia.md §G05.4`; sem baseline, M05 não aprova e P06 não inicia.
  - `TEC-007/G05.7` — **blocking: yes** em `P05-T07` (Processo release/rollback + controles ambiente + modelo suporte) — `02-review/01-blueprint/tecnologia/HUB_Blueprint_Arquitetura_Tecnologica.md` + runbook aprovado.
  - `LCH-007/G07.7` — **blocking: yes** em `P07-T07` (Ciclo vida artefatos `blocked/refining → aprovado → 03-approved/` — política `02-review/portao-lancamento/ciclo-vida-artefatos-v1.md`); `test -z "$(ls 03-approved/lancamento/ 2>/dev/null)"` == 0 até `DEC-M07` (`03-approved/` só com `02-review/aprovado/` + `DEC-M07`).
  - `BRD-002/GTM-007/G06.10` — **blocking: yes** em `P06-T10` (Matriz afirmação-evidência) + `P06-T01` (premissas `Ilustrativo — não validado`) — nenhum claim > evidência; decks em `05-resources/apresentacoes/pitch-decks/RECONCILIADO_P06-T10/` só com review evidência+jurídico; `STR-003` permanece blocking até evidência+responsável+decisão interdomínios.
- **Lifecycle hierarchy preservada (Do NOT bypass):** `task frontmatter (owner, evidence_required, gate, DEC-*, blocked_until)` → `plano fase (P01_Arquitetura... P07_Portao_Lancamento.md)` → `marcos (marcos-fases-v1.md M01→M07, G01.1..G07.8)` → `log (este arquivo)` → `matriz (matriz-fases-tarefas-v1.md 56 tarefas, zero "a designar" P03–P07)`. Nenhum `status: concluido` sem `DEC-M*` + pacote `02-review/pacotes/P0X-*.md` (regra `em-revisao` só sai com DEC).
- **Dual cronograma (Task 8):** `04-project-management/cronogramas/cronograma-fases-v1.base` — **View A Estratégico** (P00→P07 Gates & Dependências; `M00→M01→M02→M03.A→M03.B→M03→M04+M05→M06→M07`; datas-âncora `15/10 Acordo LGPD go/no-go`, `28/10 Evento SEBRAE-SP`, `28/11 Relatório`, `05/12 Decisão gate`) + **View B Operacional** (Piloto SEBRAE 28/10: Prep 03/09–27/10 → Evento 28/10 → Follow-up 29/10–27/11 → Relatório 28/11 → Decisão 05/12; refs `HUB_Charter_Piloto_SEBRAE_2026-10-28.md c13` + `spine-piloto-minimo-v1.md §1–§2`). Pilot vs full separado — full 25/41/73, piloto 12 entidades mínimas; sem `00-project-control/decisoes/DEC-M*.md`, ambos os cronogramas permanecem em `em-revisao`/`pendente`.
- **Em observação:** G02.3/G02.6/G02.7 têm rascunhos em `01-work/produto-e-operacao/refinamento-produto/` e `14_RACI` aguardando revisão Segurança/Governança antes de liberar M02; M01 depende de G01.1–G01.7 + revisão Estratégia/Finanças/Jurídico/Ops. `03-approved/lancamento/` vazio até `DEC-M07` (G07.7); `02-review/pacotes/P01-Oferta-Negocio.md` e `P02-Produto-Operacao.md` vazios até revisão M01/M02.

## Marcos

- [[04-project-management/marcos/marcos-fases-v1|Marcos das fases (M00 → P07)]] — referência de dependências e gates entre fases.

## Manutenção deste arquivo

- **Quem:** o agente ou pessoa responsável pela sessão de trabalho corrente.
- **Quando:** ao iniciar uma sessão (leitura) e ao finalizar (nova entrada no log cronológico + atualização das tabelas de status).
- **Regras:**
  - Nunca apagar entradas do log cronológico (histórico permanente).
  - Manter os status das tabelas coerentes com as notas em `tarefas/`.
  - Registrar sempre o **motivo** de bloqueios e as **decisões** tomadas.
