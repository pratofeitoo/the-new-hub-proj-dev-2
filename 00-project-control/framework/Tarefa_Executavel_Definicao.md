---
title: Padrão Tarefa Executável — Definição Normativa
aliases:
  - Tarefa Executável
  - Executable Task Definition
  - DoD por Tarefa
tags:
  - hub
  - project-framework
  - governance
  - executable-task
  - dod
type:
  - framework
author:
  - PF Rezende
status: aprovado
version: 1.0
created: 2026-09-05
updated: 2026-09-05
applies_to:
  - 04-project-management/tarefas/P*.md
  - 04-project-management/tarefas/BP-*.md
references:
  - 00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md
  - 00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md
  - .omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md#Task-1
---

# Padrão Tarefa Executável — Definição Normativa

> **Norma Task 1 — Fundação.** Este documento é o padrão normativo criado por
> `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md` **Task 1: Definir padrão "Tarefa Executável" e DoD por tarefa**.
> Toda tarefa `P01–P07` e `BP-001–BP-008` (56+8) MUST satisfazer este padrão para ser considerada executável.
> Documento-irmão de processo: [[HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Três Camadas]].
> Documento-irmão de lifecycle: [[HUB_Framework_Fronteiras_Lifecycle|Fronteiras Lifecycle]].

## 1. Propósito e escopo

Uma tarefa é **executável** quando qualquer pessoa — humana ou agente — pode, sem perguntar ao autor,
responder: *quem faz, o que entrega, onde entrega, com que critério passa, com que evidência prova e como verificar*.

Este padrão NÃO cria tarefas novas, NÃO move fase e NÃO libera gate. Ele torna as 56+8 tarefas
existentes auditáveis por dono nominal, critério testável, evidência reproduzível e verificação reprodutível,
com status ancorado na pasta (lifecycle-first).

**Aplica-se a:** `04-project-management/tarefas/P*.md` e `BP-*.md` (frontmatter + corpo).
**Não se aplica a:** `00-project-control/`, `01-work/`, `02-review/`, `03-approved/` — que seguem
o contrato de [[HUB_Framework_Fronteiras_Lifecycle|Fronteiras Lifecycle]] §3–§4.

## 2. Referência normativa

| Fonte | Papel |
|---|---|
| `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md` Task 1 | Origem deste padrão; define DoD, campos obrigatórios e regra `status == pasta` |
| `00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md` §2–§3 | Contrato `status == pasta` (única fonte da verdade de lifecycle) |
| `00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md` § Camada 3 | Filtro de aprovação — evidência e gate antes de lançamento |
| `04-project-management/tarefas/README.md` | Template de tarefa (a atualizar na Task 1 para exigir `owner` nominal, `acceptance_criteria` e `verification`) |
| `references/definition-of-done.md` (quando criado) | Checklist global por tarefa — espelha a §8 deste documento |

## 3. Campos obrigatórios de frontmatter (MUST)

Toda nota de tarefa MUST conter YAML frontmatter válido com os campos abaixo.
Ausência de qualquer campo = FAIL na auditoria Task 2.

| Campo | Tipo | Regra | Exemplo |
|---|---|---|---|
| `task_id` | `string` | `P{01-07}-T{NN}` ou `BP-{001-008}`; único no repo | `P03-T01` |
| `phase` | `string` | `P01`..`P07` ou `BP` | `P03` |
| `status` | `string` | **MUST obedecer §7 lifecycle-first** | `em-revisao` |
| `priority` | `string` | `critica \| alta \| media \| baixa` | `critica` |
| `area` | `string` | Domínio canónico (ex: `data-intelligence`, `business-model`) | `data-intelligence` |
| `layer` | `string` | Taxonomia de papel do conteúdo (`blueprint`, `refining`, `approval`, `cross-cutting`, etc.) — ortogonal a `status` | `blueprint` |
| `owner` | `string[]` | **MUST ser pessoa nominal. PROIBIDO "a designar", "a definir", "TBD", papel genérico sem nome.** Ver §9 | `["Ana Silva"]` |
| `target_file` | `string` | Path existente no vault para o entregável (não `99-archive/superado/` sem nota de superado) | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` |
| `gap_ids` | `string[]` | Ao menos um `GAP-ID` válido de `00-project-control/registro-lacunas/lacunas/` ou `[]` com justificativa em corpo | `["DAT-001"]` |
| `dependencies` | `string[]` | `task_id`s de que depende; `[]` se nenhuma | `["P02-T01"]` |
| `related_notes` | `string[]` | Wikilinks resolvidos para plano de fase / gap / marco | `["[[04-project-management/planos-fase/P03_Dados_Canonicos]]"]` |
| `evidence_required` | `string \| string[]` | **MUST** — arquivo, link ou log que prova o done. Nunca "Não especificada" | `01-work/.../modelo-logico-fisico-P03-T01-v1.md` |
| `created` | `date` | ISO `YYYY-MM-DD` | `2026-08-26` |
| `tags` | `string[]` | Ao menos `task` + `fase-P{NN}` | `["task", "fase-P03"]` |

Campos opcionais mas recomendados: `accountable` (A único quando RACI se aplica), `blocked_reason` + `blocked_until` (quando nomeação pendente — ver §9).

> **Validação frontmatter:** `grep -L "^owner:" 04-project-management/tarefas/*.md` e `grep -L "evidence_required" 04-project-management/tarefas/*.md` MUST retornar vazio após normalização Task 4–6.

## 4. Seções obrigatórias no corpo (MUST)

Toda tarefa MUST conter, nesta ordem, as seções abaixo. Seção ausente = FAIL.

| # | Seção (heading `##`) | Conteúdo mínimo | Falha típica |
|---|---|---|---|
| 1 | `## Objetivo` | 1–2 frases: o que a tarefa produz e por que existe (link para gap/plano) | Objetivo genérico sem gap |
| 2 | `## Entregável` | Artefato concreto + `target_file` (path idêntico ao frontmatter) | "Documento a definir" sem path |
| 3 | `## Critério` ou `## Acceptance criteria` | **2–3 bullets testáveis** — cada bullet verificável por evidência (ver §5) | Critério subjetivo ("qualidade adequada") |
| 4 | `## Evidence required` ou `## Evidência` | Path/arquivo/link/log que comprova cada bullet do critério | "Não especificada" |
| 5 | `## Verification` ou `## Verificação` | Comando ou check manual reprodutível que qualquer revisor pode rodar (ver §6) | Sem comando, só "revisar" |
| 6 | `## Dependências` | Lista de `task_id`s + gates (`G03.A1`, `DEC-M*`) que bloqueiam | Dependência implícita não declarada |

Notas:

- `## Execução` / `## Registros` / `## Revisão` são opcionais e vivem abaixo das seções normativas.
- `acceptance_criteria` no frontmatter (array de strings) é opcional se a seção `## Acceptance criteria` existir no corpo — mas **uma das duas MUST existir com 2–3 bullets**.
- Tarefas `BP-*` seguem o mesmo esqueleto; `target_file` pode apontar para `02-review/01-blueprint/` quando submetido a gate.

## 5. Acceptance criteria — 2 a 3 bullets testáveis (MUST)

Cada tarefa MUST ter **2–3 bullets** sob `## Acceptance criteria` (ou `## Critério`) que sejam:

- **Testável:** passa ou falha sem interpretação ("25/25 PK estável" não "modelo bem definido").
- **Mensurável:** número, path, estado ou gate explícito.
- **Rastreável:** cada bullet aponta para uma evidência em § `Evidence required`.

Exemplo de bullets testáveis (P03-T01):

```markdown
## Acceptance criteria

- [ ] 25/25 entidades com `canonical_id` (PK estável) + 12/12 relacionamentos com FK/cardinalidade/temporalidade — tabela §1–§2 do `target_file`
- [ ] `identity_alias` com crosswalk `hub_id`/`external_id`/`source_system` + `valid_from/to` e `occurred_at`/`recorded_at` (UTC) — §3–§4
- [ ] Diagrama ER Mermaid renderiza sem erro e `grep -c "a designar" target_file` == 0

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` (§1–§4 + diagrama)
- `99-archive/superado/01-blueprint-v1-submissao-superada/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md#1` (crosswalk)

## Verification

- [ ] `grep -c "canonical_id" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` == 25
- [ ] Abrir `target_file` no Obsidian — diagrama ER renderiza; `grep -R "a designar" target_file` == 0
```

Anti-exemplo (NÃO fazer):

```markdown
## Critério

- Modelo bem estruturado e de boa qualidade
- Validado pela equipe quando possível

## Evidência

- Não especificada

## Verificação

- Revisar
```

Por que falha: bullets subjetivos (não testáveis), sem contagem/path/gate, evidência ausente, verificação não reprodutível.

## 6. Evidence required e Verification

### 6.1 `evidence_required` (MUST)

- MUST ser path existente, wikilink resolvido, log, CSV, ata ou `DEC-*`. Exemplos válidos:
  `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`,
  `02-review/bloqueado/indicadores/matriz-indicadores-v1.xlsx`,
  `04-project-management/atas-reuniao/2026-10-28-piloto-SEBRAE.md`,
  `00-project-control/decisoes/DEC-M03-2026-10-15.md`.
- MUST NOT ser `Não especificada`, `a designar`, `TBD`, `a definir` ou path em `99-archive/superado/` sem nota explícita "superado — ver `target_file` atual em `01-work/`".
- Cada bullet de acceptance criteria SHOULD mapear 1:1 para uma evidência listada.

### 6.2 `verification` (MUST)

- MUST ser comando shell, check Obsidian ou conferência manual que um revisor independente pode reproduzir sem perguntar ao autor.
- Formato recomendado: checklist com 2–3 itens, cada um com comando entre crases.

Comandos canónicos:

```bash
# Frontmatter presente
grep -n "^evidence_required:" 04-project-management/tarefas/P03-T01*.md
grep -n "Acceptance criteria" 04-project-management/tarefas/P03-T*.md

# Baseline pré-correção (Task 1 — esperado ~60 hits antes de Task 4)
grep -R "a designar" 04-project-management/tarefas/*.md | wc -l
grep -c "a designar" 04-project-management/tarefas/P03-T01*.md

# Critério ausente
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md

# Lifecycle
grep -rh "^status:" 04-project-management/tarefas/P01*.md | sort | uniq -c
```

## 7. Regra lifecycle-first — `status == pasta` (MUST)

> **Invariante do repo** (norma [[HUB_Framework_Fronteiras_Lifecycle|Fronteiras Lifecycle]] §2–§3):
> a **pasta é a verdade**, o campo `status:` é o carimbo. Transição = mover arquivo + carimbar.

Esta regra vale para o **conteúdo do entregável** (`target_file` em `01-work`/`02-review`/`03-approved`),
e por extensão para a **tarefa que o governa**: uma tarefa NUNCA está `concluido`/`aprovado` se seu
`target_file` não está na pasta correspondente com gate aprovado.

| Onde está o `target_file` | `status` permitido na tarefa | Significado |
|---|---|---|
| `01-work/<tema>/<dominio>/` | `rascunho` \| `em-elaboracao` | Em elaboração — não submetido |
| `02-review/` (incl. `pacotes/`, `bloqueado/`, `01-blueprint/` etc.) | `em-revisao` | Congelado aguardando gate/decisão |
| `03-approved/` | `aprovado` | Gate assinado (`DEC-M*` + `## Histórico de aprovação`) |
| `99-archive/` | `superado` \| `rejeitado` \| `descontinuado` | Obsoleto com motivo |

Regras:

1. **MUST:** `status` da tarefa reflete o estado real do `target_file`. Divergência = corrigir na origem
   (mover arquivo ou corrigir `status`), nunca mascarar editando só a matriz/log.
2. **MUST NOT:** tarefa `concluido`/`aprovado` sem `DEC-M*` correspondente + pacote em `02-review/`.
   P01/P02 "concluído sem gate aprovado" é `em-revisao até DEC-M01/M02` (ver plano Task 7).
3. **MUST:** promoção usa `git mv` (preserva `git log --follow`) + atualização de `status` + bloco de histórico.
   Edição direta em `03-approved/` ou `02-review/` é proibida.
4. **SHOULD:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` e
   `04-project-management/HUB_Log_Tarefas_Progresso.md` espelham `status` — mas a fonte da verdade é
   `tarefas/P*.md` frontmatter + pasta do `target_file`. Correção na matriz sozinha é proibida (plano § Architecture Decisions — "Correção na origem").

Hierarquia fonte da verdade (plano Task 7): `tarefa frontmatter` → `plano de fase` → `marcos-fases-v1.md` → `HUB_Log_Tarefas_Progresso.md` → `matriz-fases-tarefas-v1.md`.

## 8. Definition of Done por tarefa (DoD)

Uma tarefa está **Done** se e somente se TODOS os itens abaixo são PASS. Um único FAIL = não-Done.

| # | Check | Como verificar | Gate |
|---|---|---|---|
| D1 | Frontmatter completo (§3) — todos os campos MUST presentes e válidos | `grep -n "^task_id:\|^owner:\|^target_file:\|^evidence_required:\|^status:" tarefas/P03-T01*.md` — zero ausente | Task 1 |
| D2 | `owner` nominal — sem "a designar" (§9) | `grep -R "a designar" 04-project-management/tarefas/P03-T01*.md` == 0 | Task 4 |
| D3 | `target_file` existe no vault | `ls <target_file>` sem erro; `test -f` PASS | Task 1 |
| D4 | 2–3 bullets testáveis em `Acceptance criteria` (§5) | `grep -A5 "Acceptance criteria" tarefas/P03-T01*.md` mostra 2–3 `- [ ]` com número/path/gate | Task 5/6 |
| D5 | `evidence_required` preenchido com path/log/link existente (§6.1) | Cada path listado existe; `grep "Não especificada" tarefas/P03-T01*.md` == 0 | Task 5/6 |
| D6 | `verification` com comando/check reprodutível (§6.2) | Seção `## Verification` com 1–3 comandos entre crases; rodar comandos PASS | Task 1 |
| D7 | `status == pasta` do `target_file` (§7) | `grep "^status:" tarefas/P03-T01*.md` coerente com `ls 01-work/ 02-review/ 03-approved/` | Task 7 |
| D8 | Gate preservado — `blocking: yes` não mascarado, `DEC-*` quando `aprovado` | `grep "blocking: yes" tarefas/P03-T01*.md` + `ls 00-project-control/decisoes/DEC-M*.md` coerentes | Task 5/6/7 |
| D9 | `gap_ids` válidos + `dependencies` declaradas | Cada `gap_id` existe em `00-project-control/registro-lacunas/lacunas/`; cada `dependency` é `task_id` existente | Task 2 |
| D10 | `git diff --check` limpo (sem whitespace errors) + `frontmatter` YAML válido | `git diff --check` vazio; abrir no Obsidian Bases sem erro YAML | Global |

> Checklist global espelho: `references/definition-of-done.md` (quando criado) replica esta tabela
> como checklist por tarefa. Até lá, esta §8 é a referência canónica.

## 9. Proibição de "a designar" (MUST NOT)

As strings **"a designar"**, **"a definir"**, **"TBD"**, **"a determinar"**, **"a nomear"** são **proibidas**
em `owner`, `accountable`, `evidence_required`, `target_file` e `acceptance_criteria`.

- **MUST:** `owner: ["Nome Sobrenome"]` — pessoa nominal, não papel genérico.
- **Permitido quando nomeação realmente pendente:**

  ```yaml
  owner: ["PF Rezende (interino)"]
  blocked_reason: "aguardando nomeação Jurídico/LGPD"
  blocked_until: 2026-10-15
  ```

  ou

  ```yaml
  owner: ["bloqueado: aguardando nomeação — Dados"]
  blocked_until: 2026-10-15
  ```

  O `blocked_until` é obrigatório quando se usa `bloqueado`; sem data é FAIL.
- **MUST NOT:** `owner: ["Dados (a designar)"]`, `owner: ["GTM a designar"]`, `owner: ["a designar"]`.
- **Verificação:**

  ```bash
  grep -R "a designar" 04-project-management/tarefas/*.md
  # Pós-Task 4: MUST == 0

  grep -R "TBD\|a definir\|a determinar" 04-project-management/tarefas/*.md
  # MUST == 0
  ```

Baseline documentado na Task 1 (pré-correção): `grep -R "a designar" 04-project-management/tarefas/*.md | wc -l` esperado ~60 hits.
Pós-Task 4: 0 hits (ou apenas `bloqueado: aguardando nomeação + data-limite`).

## 10. Exemplos completos — bom vs ruim

### 10.1 Exemplo BOM — tarefa reescrita conforme padrão (P03-T01)

```yaml
---
title: P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)
task_id: P03-T01
phase: P03
status: em-revisao
priority: critica
area: data-intelligence
layer: blueprint
owner:
  - Ana Silva
accountable: Ana Silva
target_file: 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md
gap_ids:
  - DAT-001
dependencies:
  - P02-T01
related_notes:
  - "[[04-project-management/planos-fase/P03_Dados_Canonicos]]"
  - "[[00-project-control/registro-lacunas/lacunas/DAT-001]]"
evidence_required:
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md
  - 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md#diagrama-er
created: 2026-08-26
tags:
  - task
  - fase-P03
---
```

```markdown
## Objetivo

Produzir modelo canónico de 25 entidades com PK estável, FK, cardinalidade e temporalidade (G03.A1).

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` — tabelas §1–§4 + diagrama ER.

## Acceptance criteria

- [ ] 25/25 entidades com `canonical_id` (PK estável, imutável) — tabela §1 do target_file
- [ ] 12/12 relacionamentos com FK + cardinalidade + `valid_from/to` e `occurred_at`/`recorded_at` (UTC) — §2 + §4
- [ ] Diagrama ER Mermaid renderiza sem erro; `identity_alias` crosswalk `hub_id`/`external_id`/`source_system` — §3

## Evidence required

- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` (§1–§4 + diagrama)

## Verification

- [ ] `grep -c "canonical_id" 01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` == 25
- [ ] Abrir target_file no Obsidian — diagrama ER renderiza; `grep -R "a designar" target_file` == 0

## Dependências

- P02-T01 (fronteiras travadas) — `status: aprovado` em `03-approved/` ou `em-revisao` com DEC pendente
```

Por que passa: owner nominal, target_file existente em `01-work`, 3 bullets com números/paths, evidência 1:1, verificação com comandos rodáveis, `status: em-revisao` coerente com `01-work` + `02-review` pendente.

### 10.2 Exemplo RUIM — mesma tarefa antes da normalização

```yaml
---
title: P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)
task_id: P03-T01
phase: P03
status: em-revisao
priority: critica
area: data-intelligence
layer: blueprint
owner:
  - Dados (a designar)
gap_ids:
  - DAT-001
dependencies:
  - P02-T01
target_file: 99-archive/superado/01-blueprint-v1-submissao-superada/dados-inteligencia/HUB_Blueprint_Dados_e_Inteligencia.md
---
```

```markdown
## Objetivo

Produzir modelo canónico de entidades (~25 nós → entidades com PK/FK, cardinalidade, tipos objeto, temporalidade).

## Entregável

Proposta de diagramas + tabelas em `HUB_Blueprint_Dados_e_Inteligencia.md` + `01-work/dados-tech-financas/refinamento-modelo-dados/`, para revisão posterior.

## Critério de refinamento (G03.A1)

A proposta não deve manter entidade sem chave estável; a validação por arquitetura de dados permanece pendente de revisão.
```

Por que falha (5 violações):

1. `owner: Dados (a designar)` — proibido (§9); sem pessoa nominal.
2. `target_file` aponta para `99-archive/superado/` sem nota de superado — evidência obsoleta (§3, §6.1).
3. Sem `evidence_required` no frontmatter — campo obrigatório ausente (§3, D5).
4. Critério com 1 bullet subjetivo ("não deve manter entidade sem chave estável") — não testável, sem número/path (§5, D4).
5. Sem seção `## Verification` — verificação não reprodutível (§6.2, D6).

Correção: aplicar modelo da §10.1 (owner nominal, target_file em `01-work`, 3 bullets, evidência, verification).

## 11. Validação e gates de PR

Todo PR que toca `04-project-management/tarefas/` ou `00-project-control/framework/` MUST passar:

```bash
# 1. Frontmatter e critério presentes
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md
# esperado: vazio (pós-Task 5)

grep -R "a designar" 04-project-management/tarefas/*.md
# esperado pós-Task 4: vazio (ou só bloqueado datado)

# 2. Lifecycle
grep -rh "^status:" 04-project-management/tarefas/P01*.md | sort | uniq -c
# P01/P02 pós-Task 7: em-revisao até DEC-M01/M02, nunca concluido órfão

# 3. Higiene
git diff --check
# esperado: vazio (sem trailing whitespace, sem conflito de marcador)

# 4. Matriz canónica (quando tocada)
# 56 linhas P01–P07, IDs únicos, wikilinks resolvidos — validar via script ou contagem manual
```

Regra de correção (plano § Architecture Decisions): divergência corrige-se no arquivo de tarefa/plano/marco/decisão
e **depois** na matriz — nunca editando só a matriz. `git mv` para moves (preserva `git log --follow`).

## 12. Histórico e manutenção

- **Criado em:** 2026-09-05 — Task 1 do plano `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md`.
- **Versão:** 1.0 — fundação para auditoria Task 2 e normalização Tasks 4–7.
- **Estável por desenho.** Alterar §3, §7 ou §8 exige decisão registrada em `00-project-control/decisoes/` ou `00-project-control/registro-mudancas/`.
- **Próximo passo previsto no plano:** Task 2 — auditoria 56+8 tarefas vs este padrão (gap report + baseline `grep -R "a designar"`).
- **Template a atualizar:** `04-project-management/tarefas/README.md` (Task 1 — exigir `owner` nominal, `acceptance_criteria`, `verification`, proibir "a designar").

---

*Fim do padrão normativo. Para dúvidas de lifecycle, consultar [[HUB_Framework_Fronteiras_Lifecycle|Fronteiras Lifecycle]] §2–§5.
Para dúvidas de camadas e aprovação, consultar [[HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Três Camadas]] § Camada 3.*
