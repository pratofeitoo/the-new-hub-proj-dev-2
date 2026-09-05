# Implementation Plan: Framework de Tarefas Executável — Piloto Mínimo vs Plataforma

## Overview
Tornar as **56 tarefas P01–P07 + 8 BP** existentes **executáveis, com dono, evidência e gate** sem adicionar escopo. O trabalho separa explicitamente **spine mínimo do piloto** (fluxo de conversão SEBRAE 28/10: fornecedor → match → reunião → proposta → contrato → receita) do **spine completo da plataforma** (25 entidades, 73 indicadores, 41 campos, matching, envelope, linhagem, LGPD). Cada tarefa existente passa a ter: dono nominal (Accountable/Responsible), entregável com `target_file` válido, `evidence_required`, `acceptance_criteria` testável e `verification` reprodutível, com status = pasta lifecycle (`01-work`/`02-review`/`03-approved`). P01/P02 "concluído sem gate aprovado" é explicitamente tratado como `em-revisao até DEC-M01/M02`.

## Architecture Decisions
- **Lifecycle-first como invariante:** `status` deve igualar pasta (`01-work: rascunho|em-elaboracao`, `02-review: em-revisao`, `03-approved: aprovado`). Nenhuma tarefa é `concluido` sem `DEC-*` + pacote `02-review/`.
- **Piloto vs Plataforma como backlogs separados:** piloto tem charter próprio, spine mínimo (8-10 entidades, ≤12 métricas) e cronograma operacional; plataforma mantém spine completo como arquitetura futura. Não mover P03–P07 para piloto sem justificativa de `evidence_required`.
- **Executável = dono + critério + evidência + verificação:** toda tarefa precisa de `owner` nominal (não "a designar"), `acceptance_criteria` com 2-3 bullets testáveis, `evidence_required` (arquivo/link/log) e `verification` (comando manual ou check). Matriz canônica reflete; não corrige divergência sozinha.
- **Gate ≠ checklist concluído:** matriz `deliverable: - [x]` não libera fase. Liberação exige `marcos-fases-v1.md` G-critérios + `DEC-M*` + pacote `02-review/`. `STR-001/002`, `FIN-002`, `GTM-001` e `GOV-001` permanecem bloqueadores explícitos.
- **Correção na origem:** divergência corrige-se no arquivo de tarefa/plano/marco/decisão e depois na matriz — nunca editando só a matriz. `git diff --check` e validação de 56 linhas são gates de PR.

## Dependency Graph
```
Definição de Executável (DoD por tarefa + template)  ← foundation
        │
        ├── Auditoria 56+8 tarefas vs DoD (gap report + 60× "a designar")
        │         │
        │         ├── Spine Mínimo Piloto (charter + entidades/métricas mínimas + cronograma SEBRAE)
        │         │         │
        │         │         └── Spine Plataforma (mantém 25/73/41 como futuro, sem bloquear piloto)
        │         │
        │         ├── Normalização de Owners (RACI v1 → RACI v2, founders → dono não-fundador onde exigido)
        │         │
        │         ├── Critérios P03 (G03.A1–C5, DAT-010 blocking) + evidência reproduzível
        │         │
        │         └── Critérios P04–P07 (G04/G05/G06/G07 + LGPD/DSAR/TEC blocking)
        │
        ├── Correção Lifecycle/Status (work/review/approved = status real)
        │
        └── Tooling (matriz-fases-tarefas-v1, HUB_Log_Tarefas_Progresso, Bases/Views, templates tarefa/reunião)
```

Ordem bottom-up: fundação → auditoria → spines → owners → critérios P03 → critérios P04-P07 → lifecycle → tooling. Gates G03.A/B liberam paralelismo P04||P05.

### Phase 1: Fundação e diagnóstico

## Task 1: Definir padrão "Tarefa Executável" e DoD por tarefa

**Description:** Redigir o padrão normativo que toda tarefa P*/BP-* deve satisfazer: frontmatter (`owner` nominal, `gap_ids`, `dependencies`, `target_file` existente, `status`), seções `Objetivo`/`Entregável`/`Critério`, `evidence_required` (arquivo/link/log), `acceptance_criteria` (2-3 bullets testáveis) e `verification` (comando ou check manual). Incluir Definition of Done por tarefa e regra lifecycle-first. Atualizar `00-project-control/framework/` e template de tarefa.

**Acceptance criteria:**
- [ ] Documento `00-project-control/framework/Tarefa_Executavel_Definicao.md` publicado com DoD, campos obrigatórios, exemplos bom/ruim e regra `status == pasta`
- [ ] Template `04-project-management/tarefas/README.md` atualizado para exigir `owner` nominal, `acceptance_criteria` e `verification` (sem "a designar" permitido)
- [ ] `references/definition-of-done.md` referenciado ou criado como checklist global por tarefa

**Verification:**
- [ ] `grep -R "a designar" 04-project-management/tarefas/*.md` documentado como baseline pré-correção (esperado ~60 hits)
- [ ] Criar 1 tarefa-exemplo P03-T01 reescrita conforme padrão e validar com `grep -n "Acceptance criteria" ` + `git diff --check` limpo

**Dependencies:** None

**Files likely touched:**
- `00-project-control/framework/Tarefa_Executavel_Definicao.md` (novo)
- `04-project-management/tarefas/README.md`
- `00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md` (referência)

**Estimated scope:** S (2-3 files)

## Task 2: Auditoria das 56+8 tarefas vs padrão — gap report reproduzível

**Description:** Auditar todas as 56 tarefas P01–P07 + 8 BP contra o padrão da Task 1. Gerar `04-project-management/registros-trabalho/logs-progresso/auditoria-tarefas-executavel-YYYY-MM-DD.md` com tabela por tarefa: `owner` (a designar vs nominal), `target_file` existe?, `evidence_required` especificado?, `acceptance_criteria` presente?, `status` vs pasta, `gap_ids` válidos. Validar 56 linhas + unicidade `task_id` + contagens P01=7..P07=7.

**Acceptance criteria:**
- [ ] Relatório cobre 64 tarefas (56+8) com status PASS/FAIL por campo e contagem consolidada (ex: 60 "a designar", N sem `acceptance_criteria`)
- [ ] Lista priorizada de 10 piores ofensores (P03 spine + P04 GOV-001 + P06 FIN) com recomendação de dono provisório
- [ ] `matriz-fases-tarefas-v1.md` validada: 56 linhas, IDs únicos, links wikilink resolvidos, sem inferência preenchida

**Verification:**
- [ ] `python -c "import re; ..."` ou script `scripts/validate-matriz.py` confirma 56 linhas e unicidade (a criar se inexistente)
- [ ] `grep -c "a designar" 04-project-management/tarefas/*.md` + `grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md` reproduzidos no relatório

**Dependencies:** Task 1

**Files likely touched:**
- `04-project-management/registros-trabalho/logs-progresso/auditoria-tarefas-executavel-*.md` (novo)
- `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` (leitura/validação, sem edição de conteúdo)

**Estimated scope:** M (3-4 files, 1 novo relatório)

## Task 3: Charter único do Piloto + Spine Mínimo (SEBRAE 28/10)

**Description:** Criar `04-project-management/planos-mestre/HUB_Charter_Piloto_SEBRAE_2026-10-28.md` — 1 página: patrocinador/comprador, entidade que assina/fatura, coorte (30 fornecedores), problema testado, escopo IN/OUT, dados usados + base legal, métricas mínimas (inscrito→qualificado→match→reunião→proposta→contrato→receita + esforço/h + satisfação + intenção de repetir), orçamento/custos, responsáveis, datas, definição de sucesso/fracasso e decisão pós-piloto. Derivar spine mínimo: ≤12 entidades, ≤12 métricas, envelope mínimo — e registrar o que fica DEFERRED para plataforma (73-12 métricas, white-label, selo, marketplace).

**Acceptance criteria:**
- [ ] Charter 1-página com todos os 15 campos acima preenchidos; `comprador` explicitado como `SEBRAE-piloto-validacao` vs `SEBRAE-comprador-institucional` (sem chamar "piloto pago" sem instrumento)
- [ ] `spine-piloto-minimo.md` lista entidades/campos/métricas mínimas com `target_file` e `evidence_required` (ex: `fornecedor`, `comprador`, `oportunidade`, `inscricao`, `diagnostico`, `match`, `reuniao`, `proposta`, `contrato`, `receita_reportada`, `consentimento`)
- [ ] Seção `Deferred para Plataforma` lista explicitamente o que NÃO entra no piloto (Selo, marketplace, IA autônoma, benchmarks públicos, multi-ecossistema)

**Verification:**
- [ ] Revisão com PF Rezende + owner SEBRAE (Bruno) com assinatura/comentário em ata `04-project-management/atas-reuniao/`
- [ ] `grep -n "a designar" HUB_Charter_Piloto*` == 0; datas e owners preenchidos

**Dependencies:** Task 2 (usa top offenders e gaps STR/FIN/GTM)

**Files likely touched:**
- `04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md` (novo)
- `01-work/dados-tech-financas/refinamento-modelo-dados/spine-piloto-minimo-v1.md` (novo)
- `04-project-management/planos-fase/P03_Dados_Canonicos.md` (referência para deferred)

**Estimated scope:** M (3 files)

### Checkpoint: Fundação
- [ ] Padrão executável publicado e template atualizado
- [ ] Auditoria 64 tarefas com gap report reproduzível
- [ ] Charter piloto 1-página + spine mínimo vs plataforma separados
- [ ] Nenhuma tarefa marcada `concluido` sem `DEC-*`; `git diff --check` limpo

### Phase 2: Tornar tarefas existentes executáveis (sem adicionar tarefas)

## Task 4: Normalizar owners — eliminar "a designar" com RACI nominal

**Description:** Para as 60 ocorrências "a designar" (principalmente P03 Dados a designar, P04 Jurídico a designar, P05 Tech a designar, P06 Finanças/GTM/Marca), atribuir `accountable` (A único) e `responsible` nominais por tarefa em `04-project-management/tarefas/P*.md` frontmatter + `matriz-fases-tarefas-v1.md`. Onde dono não-fundador exigido (G04.7, G02.6), nomear explícito ou marcar `bloqueado: aguardando nomeação` com data-limite. Sincronizar `00-project-control/registro-lacunas/` e `marcos-fases-v1.md`.

**Acceptance criteria:**
- [ ] `grep -R "a designar" 04-project-management/tarefas/` == 0; toda tarefa tem `owner: [Nome]` (não papel genérico) com fallback `bloqueado` datado se nomeação pendente
- [ ] Matriz `accountable`/`responsible` reflete frontmatter 1:1; sem invenção de A/R quando tarefa não separa (conforme regra da matriz)
- [ ] `GOV-001` bloqueador permanece explícito até estrutura societária definida — não mascarado por owner genérico

**Verification:**
- [ ] `grep -n "owner:" 04-project-management/tarefas/P03*.md` mostra nomes; `git diff 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` revisado linha a linha
- [ ] `HUB_Tarefas_Projeto.base` e `HUB_Lacunas_Projeto.base` exibem owners sem "a designar"

**Dependencies:** Task 2, Task 3

**Files likely touched:**
- `04-project-management/tarefas/P03-T*.md` (9), `P04-T*.md` (8), `P05-T*.md` (7), `P06-T*.md` (12)
- `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md`
- `04-project-management/marcos/marcos-fases-v1.md` (owners M03/M04/M05)

**Estimated scope:** M (5 files por lote; executar em 2 sub-lotes: P03+P04 e P05+P06)

## Task 5: Adicionar acceptance_criteria + evidence_required + verification em P03 (G03.A1–C5)

**Description:** Reescrever `Critério`/`Entregável` de `P03-T01`..`P03-T09` para satisfazer `G03.A1`..`G03.C5` com critério testável e evidência reproduzível. Ex: P03-T01 exige "25/25 PK estável + 12/12 FK/cardinalidade/temporalidade", P03-T04 exige "41 campos em 16 tabelas + DAT-010 blocking", P03-T08 exige "5 fluxos × 41 campos + LGPD ponta a ponta", P03-T09 exige "fluxos + XLSX + 06-relatorios-validacao PASS". Cada tarefa aponta `evidence_required` para arquivo/log real em `01-work/.../refinamento-modelo-dados/` ou `02-review/bloqueado/...`.

**Acceptance criteria:**
- [ ] Cada P03-T01..T09 tem 2-3 bullets `Acceptance criteria` testáveis + `Verification` com comando/check (ex: `officecli validate`, `grep FP/FN`, `cat matriz-dados-finalidade`)
- [ ] `evidence_required` preenchido com path existente; `target_file` não aponta para `99-archive/superado/` obsoleto sem nota de superado
- [ ] `DAT-010`/`G03.B2` marcado `blocking: yes` permanece até `04-registro-correcoes/corrections.csv` + relatórios `06-relatorios-validacao/` PASS

**Verification:**
- [ ] `grep -A2 "Acceptance criteria" 04-project-management/tarefas/P03*.md` mostra bullets; `ls 01-work/dados-tech-financas/refinamento-modelo-dados/*P03-T0*` confirma evidências
- [ ] `git diff --check` limpo; matriz-fases-tarefas-v1 `evidence_required` não mais "Não especificada"

**Dependencies:** Task 4 (owners), Task 3 (spine mínimo diferencia o que é G03 obrigatório para piloto vs G03 completo)

**Files likely touched:**
- `04-project-management/tarefas/P03-T01_Modelo_Logico_Fisico.md` .. `P03-T09_Fluxos_Linhagem_Replay_DSAR.md` (9)
- `04-project-management/planos-fase/P03_Dados_Canonicos.md` (gate criteria)

**Estimated scope:** M (9 files, fazer em 3 lotes de 3)

## Task 6: Adicionar acceptance_criteria + evidence_required em P04–P07 pendentes (G04/G05/G06/G07)

**Description:** Aplicar o mesmo padrão da Task 5 a `P04-T01..T08`, `P05-T01..T07`, `P06-T01..T12`, `P07-T01..T07` (34 tarefas pendentes). Priorizar bloqueadores: `GOV-001` (P04-T01), `TEC-005/G05.4` e `TEC-007/G05.7` (P05), `BRD-002/GTM-007` (P06-T10 claims), `LCH-007/G07.7` (P07-T07). Cada claim/economia/GTM deve ter `evidence_required` que impede "ilustrativo como tração".

**Acceptance criteria:**
- [ ] Todas as 34 tarefas P04–P07 têm `Acceptance criteria` testáveis + `evidence_required` com path ou `DEC-*` esperado (não "Não especificado")
- [ ] Bloqueadores `blocking: yes` (DAT-010, TEC-005, TEC-007, LCH-007) explicitamente ligados a `Verification` que falha até evidência existir
- [ ] `P06` e `P07` não permitem `ARR/MRR/NRR` ou `Launch Approved` sem `M03+M04+M05` aprovados (regra dependência do Plano Fases v1)

**Verification:**
- [ ] `grep -L "Acceptance criteria" 04-project-management/tarefas/P04*.md 04-project-management/tarefas/P05*.md 04-project-management/tarefas/P06*.md 04-project-management/tarefas/P07*.md` == 0
- [ ] `HUB_Log_Tarefas_Progresso.md` reflete `pendente`/`em-revisao` coerente com gates, não `concluido` antecipado

**Dependencies:** Task 4, Task 5

**Files likely touched:**
- `04-project-management/tarefas/P04-T*.md`, `P05-T*.md`, `P06-T*.md`, `P07-T*.md`
- `04-project-management/planos-fase/P04_*.md`, `P05_*.md`, `P06_*.md`, `P07_*.md`

**Estimated scope:** M (34 files, executar em 3 lotes: P04, P05, P06+P07)

### Checkpoint: Tarefas executáveis
- [ ] Zero "a designar"; zero tarefa sem `Acceptance criteria`/`evidence_required`
- [ ] P03 spine: G03.A1–C5 verificáveis; bloqueadores `blocking: yes` preservados
- [ ] P04–P07: G04–G07 verificáveis; nenhum gate liberado sem `DEC-*`
- [ ] Matriz 56 linhas revalidada; `git log --follow` preservado (moves via `git mv`)

### Phase 3: Gates, lifecycle e tooling

## Task 7: Alinhar lifecycle real — status == pasta + corrigir "concluído sem gate"

**Description:** Corrigir divergência onde `P01-T01..T07` e `P02-T01..T06` estão `concluido`/`done` mas `M01`/`M02` gates não têm `DEC-M01/M02` nem pacote `02-review/pacotes/`. Reclassificar para `em-revisao` até decisão nominal, ou criar `DEC-M01`/`DEC-M02` com evidência se gate de fato aprovado. Garantir `HUB_Log_Tarefas_Progresso.md` legenda (`concluido` vs `em-revisao` vs `pendente`) e `project-map.md` lifecycle coerentes.

**Acceptance criteria:**
- [ ] Nenhuma tarefa `concluido` sem `DEC-*` correspondente; P01/P02 ou voltam para `em-revisao` ou ganham `00-project-control/decisoes/DEC-M01-*.md` + `02-review/pacotes/P01-Oferta-Negocio.md`
- [ ] `matriz-fases-tarefas-v1.md` § Hierarquia fonte da verdade respeitada: tarefa → plano fase → marcos → log → matriz
- [ ] `project-map.md` § Faseamento reflete gates reais (M01/M02 não aprovados até DEC existir)

**Verification:**
- [ ] `ls 00-project-control/decisoes/DEC-M*.md` vs `grep "status: concluido" 04-project-management/tarefas/P01*.md` — sem órfão
- [ ] `HUB_Log_Tarefas_Progresso.md` tabela P01/P02 status coerente com `tarefas/P*.md` frontmatter

**Dependencies:** Task 4, Task 6

**Files likely touched:**
- `04-project-management/tarefas/P01-T*.md`, `P02-T*.md` (status frontmatter)
- `00-project-control/decisoes/DEC-M01-*.md`, `DEC-M02-*.md` (novos se gate aprovado)
- `04-project-management/HUB_Log_Tarefas_Progresso.md`, `project-map.md`

**Estimated scope:** S (3-5 files)

## Task 8: Cronogramas separados — estratégico P00→P07 vs operacional do piloto

**Description:** Desdobrar `04-project-management/cronogramas/cronograma-fases-v1.base` em duas views: (A) estratégico de maturidade `P00→P07` com gates e dependências; (B) operacional do piloto `Preparação(agora–27/10) → Evento 28/10 → Acompanhamento 30d → Relatório → Decisão continuidade`. Listar tarefas que precisam estar prontas antes do evento (ex: P03 spine mínimo, P03-T08 LGPD mínimo, P03-T09 fluxo medição, owners nomeados) e quem entrega cada uma.

**Acceptance criteria:**
- [ ] Duas timelines publicadas com datas-âncora: evento 28/10, janela preparação, janela follow-up, data decisão pós-piloto
- [ ] Lista explícita "Must-have antes do evento" com 8-10 tarefas e owners nominais + `evidence_required` (ex: acordo dados, consentimento, instrumento cooperação, infra)
- [ ] Métricas capturadas no evento e relatório pós-evento template definidos (link para charter)

**Verification:**
- [ ] Abrir `cronograma-fases-v1.base` no Obsidian Timeline — duas views renderizam sem erro
- [ ] `grep "28/10" 04-project-management/cronogramas/*` + checklist must-have com checkboxes `- [ ]` por tarefa

**Dependencies:** Task 3, Task 7

**Files likely touched:**
- `04-project-management/cronogramas/cronograma-fases-v1.base`
- `04-project-management/planos-mestres/HUB_Plano_Fases_v1.md` (anexo cronograma operacional)
- `04-project-management/planos-mestres/HUB_Charter_Piloto_SEBRAE_2026-10-28.md` (link)

**Estimated scope:** S (2-3 files)

## Task 9: Atualizar matriz, logs, Bases e templates — tooling coerente

**Description:** Sincronizar `matriz-fases-tarefas-v1.md`, `HUB_Log_Tarefas_Progresso.md`, `HUB_Tarefas_Projeto.base`/`HUB_Tarefas_Fases_Execucao.base`/`HUB_Lacunas_Projeto.base`, `TaskNotes/` e `System/Plugins docs/` para refletir: spine piloto vs plataforma, owners nominais, novos `evidence_required`/`acceptance_criteria`, e statuses lifecycle-corrigidos. Atualizar templates de ata e relatório status para exigir `evidence_required` e `owner` nominal.

**Acceptance criteria:**
- [ ] Matriz revalidada (56 linhas, IDs únicos, contagens P01–P07) com `evidence_required` e `acceptance_criteria` preenchidos — zero "Não especificado" onde Task 5/6 preencheram
- [ ] Bases/Views exibem: P01/P02 `em-revisao` (ou `concluido` com DEC), P03 `em-revisao` com spine mínimo destacado, P04–P07 `pendente` com owners nominais
- [ ] Templates `atas-reuniao/_template-ata.md` e `relatorios-status/template-relatorio-status.md` exigem `owner`, `evidence_required`, `gate` e `DEC-*` link

**Verification:**
- [ ] Abrir `HUB_Tarefas_Projeto.base` + `HUB_Lacunas_Projeto.base` no Obsidian — sem "a designar", sem erro YAML
- [ ] `grep -n "evidence_required" 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md | grep "Não especificada" | wc -l` cai de ~50 para 0 nas linhas P03–P07 corrigidas
- [ ] `npm run build` se aplicável ou `git diff --check` + `ls 04-project-management/tarefas/*.md | wc -l` == 64

**Dependencies:** Task 7, Task 8

**Files likely touched:**
- `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md`
- `04-project-management/HUB_Log_Tarefas_Progresso.md`
- `04-project-management/tarefas/HUB_Tarefas_Projeto.base`, `HUB_Tarefas_Fases_Execucao.base`, `HUB_Lacunas_Projeto.base` (views)
- `04-project-management/atas-reuniao/_template-ata.md`, `04-project-management/relatorios-status/template-relatorio-status.md`

**Estimated scope:** M (4-6 files)

## Task 10: Gate de verificação do framework (PR gate)

**Description:** Rodar verificação ponta a ponta do framework antes de liberar P04/P05: validar 56+8 tarefas, matriz, marcos, logs, Bases e templates. Produzir `04-project-management/relatorios-status/Verificacao_Framework_Tarefas_*.md` com evidência de: 0 "a designar", 0 tarefa sem critério, lifecycle == pasta, gates bloqueados preservados, piloto vs plataforma separados, cronogramas publicados.

**Acceptance criteria:**
- [ ] Relatório de verificação com 6 checks PASS: owners, critérios, evidência, lifecycle, gates, cronogramas
- [ ] PR contém apenas correções de framework (sem mover `03-approved`); `git diff --stat` revisado e `git diff --check` limpo
- [ ] Próximo passo operacional redigido: quais 3 tarefas abrem sprint piloto (ex: P03-T01 spine mínimo + P03-T08 LGPD mínimo + P03-T09 medição)

**Verification:**
- [ ] `bash scripts/validate-framework.sh` (ou equivalente manual: greps + ls + base YAML validate) → 6/6 PASS
- [ ] Humano revisa PR e aprova plano de sprint piloto antes de `P04-T01` abrir

**Dependencies:** Task 9

**Files likely touched:**
- `04-project-management/relatorios-status/Verificacao_Framework_Tarefas_*.md` (novo)
- `.omo/reports/validate-framework.md` (opcional)

**Estimated scope:** S (1-2 files)

### Checkpoint: Complete
- [ ] Framework executável: toda tarefa tem dono, critério testável, evidência e verificação
- [ ] Piloto vs Plataforma separados com charter e spine mínimo operacional
- [ ] Lifecycle == pasta; gates não aprovados sem `DEC-*`; bloqueadores preservados
- [ ] Matriz/Bases/Logs/Templates sincronizados; cronogramas dual (estratégico + operacional) publicados
- [ ] Pronto para sprint piloto sem abrir P04–P07 completos

## Risks and Mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Owners nominais viram papel genérico ("GTM a designar → GTM (a designar)") | High — framework continua não-executável | Task 1 proíbe "a designar"; Task 4 exige nome ou `bloqueado: aguardando nomeação + data-limite`; verificação grep falha se persistir |
| "Concluído" sem gate vira `em-revisao` e gera atrito político | Medium | Task 7 oferece duas saídas honrosas: reclassificar ou produzir `DEC-M01/M02` com evidência; log preserva histórico |
| Spine mínimo do piloto cresce e vira plataforma completa | High — repete antipadrão "infra antes de venda" | Task 3 congela deferred list; Task 5/6 exigem `evidence_required` por métrica/entidade — adicionar fora do spine mínimo exige PR + justificativa |
| Matriz editada para mascarar divergência (corrige só matriz, não tarefa) | High — perde fonte da verdade | Regra matriz § Validação + `git mv` + `git diff --check`; Task 9 verifica matriz vs frontmatter 1:1 |
| LGPD/Governança empurrada para "depois do piloto" | High — risco jurídico | Task 5/6 mantêm `DAT-008/P03-T08` e `GOV-002/P04-T02` como `blocking: yes` para dados sensíveis; charter exige base legal mínima antes do evento |
| Cronograma operacional conflita com gates estratégicos | Medium | Task 8 mantém dois cronogramas separados; must-have do piloto não libera `M06`/`M07` (Launch) |

## Open Questions
- Quem são os `Accountable` nominais para Dados, Jurídico/LGPD, Tech e Finanças nas Tasks 4–6? Nomear antes de Task 4 ou usar `bloqueado` datado?
- `DEC-M01`/`M02` existem informalmente? Se sim, materializar como `DEC-M01-2026-09-05.md` ou reclassificar P01/P02 para `em-revisao`?
- Dataset sintético e `identity_alias` representativo para validar P03-T01/T02 já estão em `01-work/` ou precisam ser produzidos no sprint piloto?
- Cronograma operacional do piloto deve viver em `cronograma-fases-v1.base` (dual view) ou em base dedicada `cronograma-piloto-SEBRAE.base`?

## Parallelization Opportunities
- **Sequencial obrigatório:** Task 1 → Task 2 → Task 3 → Task 4 (fundação antes de owners/spine)
- **Paralelizável após Task 4:** Task 5 (P03) || Task 6-lote-P04 || Task 6-lote-P05 (tocam arquivos disjuntos; matriz é ponto de coordenação — serializar edição da matriz)
- **Paralelizável com Task 5/6:** Task 7 (lifecycle) pode iniciar após Task 4 (não precisa esperar P06/P07 completos)
- **Coordenação:** Matriz `matriz-fases-tarefas-v1.md` é gargalo — definir dono da matriz antes de paralelizar Tasks 5/6; usar branch por lote e merge sequencial

## Verification (global)
- [ ] Every task has acceptance criteria — yes (Tasks 1–10, 2-3 bullets each)
- [ ] Every task has verification step — yes (grep/ls/Bases/DEC checks)
- [ ] Dependencies ordered correctly — yes (1→2→3→4→5/6→7→8→9→10)
- [ ] No task touches more than ~5 files — yes (Task 4/6 em lotes de ≤5 por PR)
- [ ] Checkpoints exist — yes (Fundação / Executáveis / Complete)
- [ ] Human reviewed plan — pending (this file)
