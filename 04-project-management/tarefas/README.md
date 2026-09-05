# Arquitetura de Tarefas do Blueprint

O arquivo [`HUB_Blueprint_Tasks.base`](HUB_Tarefas_Projeto.base) é a visualização centralizada do Obsidian Bases para as notas de tarefas blueprint-document desta pasta.

Cada tarefa é uma nota Markdown com frontmatter YAML. O frontmatter são os metadados estruturados da tarefa; o corpo contém o objetivo da tarefa, o conteúdo exigido e os critérios de conclusão.

> **Padrão normativo vigente:** toda tarefa `P*.md` e `BP-*.md` desta pasta MUST satisfazer
> [`00-project-control/framework/Tarefa_Executavel_Definicao.md`](../../00-project-control/framework/Tarefa_Executavel_Definicao.md)
> **§3–§8** (campos obrigatórios, seções obrigatórias, acceptance criteria, evidence/verification, lifecycle-first e Definition of Done).
> Este README é o **template/checklist operacional** desse padrão. Em caso de divergência, vale o documento normativo.

## Conjunto atual de tarefas

- `BP-001` — Arquitetura de Ofertas e Receita
- `BP-002` — Blueprint de Produto e Capacidades
- `BP-003` — Blueprint de Dados e Inteligência
- `BP-004` — Blueprint de Arquitetura de Tecnologia
- `BP-005` — Blueprint de Modelo Operacional
- `BP-006` — Blueprint de Governança e Jurídico
- `BP-007` — Blueprint de Marca e Mercado
- `BP-008` — Blueprint de Lançamento e Evolução

> Cobertura completa: 56 tarefas `P01–P07` + 8 `BP-*` = 64 notas. Novas tarefas `P*`/`BP-*` criadas nesta pasta herdam o mesmo padrão.

## Padrão Tarefa Executável — referência rápida

| O que | Onde está a norma | O que este README faz |
|---|---|---|
| Campos obrigatórios de frontmatter | `Tarefa_Executavel_Definicao.md` **§3** | Checklist e tabela resumida abaixo |
| Seções obrigatórias no corpo | `Tarefa_Executavel_Definicao.md` **§4** | Ordem e conteúdo mínimo |
| Acceptance criteria (2–3 bullets testáveis) | **§5** | Regra de escrita + exemplo |
| Evidence required + Verification | **§6** | O que é evidência válida e como verificar |
| Regra lifecycle-first (`status == pasta`) | **§7** + `HUB_Framework_Fronteiras_Lifecycle.md` §2–§3 | Tabela pasta ↔ status permitido |
| Definition of Done por tarefa (D1–D10) | **§8** | Checklist de Done reproduzido abaixo |
| Proibição de "a designar" | **§9** | Como nomear owner e como verificar com `grep` |

---

## 1. Propriedades exigidas das notas de tarefa

### 1.1 Campos obrigatórios de frontmatter (MUST) — cf. `Tarefa_Executavel_Definicao.md` §3

Toda nota de tarefa MUST conter YAML frontmatter válido. Ausência de qualquer campo = **FAIL** na auditoria.

| Campo | Tipo | Regra (resumo §3) | Exemplo |
|---|---|---|---|
| `task_id` | `string` | `P{01-07}-T{NN}` ou `BP-{001-008}`; único no repo | `P03-T01` |
| `phase` | `string` | `P01`..`P07` ou `BP` | `P03` |
| `status` | `string` | **MUST obedecer §7 lifecycle-first** (`status == pasta` do `target_file`) | `em-revisao` |
| `priority` | `string` | `critica \| alta \| media \| baixa` | `critica` |
| `area` | `string` | Domínio canónico | `data-intelligence` |
| `layer` | `string` | Taxonomia de papel do conteúdo (`blueprint`, `refining`, `approval`, `cross-cutting` etc.) — ortogonal a `status` | `blueprint` |
| `owner` | `string[]` | **MUST ser pessoa nominal. PROIBIDO "a designar" — ver §9 abaixo** | `["Ana Silva"]` |
| `target_file` | `string` | Path existente no vault para o entregável (não `99-archive/superado/` sem nota explícita) | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` |
| `gap_ids` | `string[]` | Ao menos um `GAP-ID` válido de `00-project-control/registro-lacunas/lacunas/` ou `[]` com justificativa no corpo | `["DAT-001"]` |
| `dependencies` | `string[]` | `task_id`s de que depende; `[]` se nenhuma | `["P02-T01"]` |
| `related_notes` | `string[]` | Wikilinks resolvidos para plano de fase / gap / marco | `["[[04-project-management/planos-fase/P03_Dados_Canonicos]]"]` |
| `evidence_required` | `string \| string[]` | **MUST** — arquivo/link/log que prova o done. Nunca `"Não especificada"` | `01-work/.../modelo-logico-fisico-P03-T01-v1.md` |
| `created` | `date` | ISO `YYYY-MM-DD` | `2026-08-26` |
| `tags` | `string[]` | Ao menos `task` + `fase-P{NN}` | `["task", "fase-P03"]` |

Opcional mas recomendado: `accountable` (A único no RACI), `blocked_reason` + `blocked_until` (quando nomeação pendente — ver §9).

Lista mínima legada (mantida para compatibilidade; acima está a norma completa):

- `task_id`
- `task_type`
- `status`
- `priority`
- `layer`
- `area`
- `sequence`
- `owner`
- `target_file`
- `dependencias`
- `gap_ids`
- `related_notes`

> **Nota:** `task_type`/`sequence`/`dependencias` legados permanecem válidos quando presentes, mas a auditoria Task 2 valida pelos campos canónicos da §3 (`phase`, `dependencies`, `evidence_required`, `created`, `tags` etc.).

### 1.2 Seções obrigatórias no corpo (MUST) — cf. §4

Toda tarefa MUST conter, **nesta ordem**, as seções abaixo. Seção ausente = **FAIL**.

| # | Seção (heading `##`) | Conteúdo mínimo | Falha típica |
|---|---|---|---|
| 1 | `## Objetivo` | 1–2 frases: o que a tarefa produz e por que existe (link para gap/plano) | Objetivo genérico sem gap |
| 2 | `## Entregável` | Artefato concreto + `target_file` (path idêntico ao frontmatter) | "Documento a definir" sem path |
| 3 | `## Acceptance criteria` (ou `## Critério`) | **2–3 bullets testáveis** — cada bullet verificável por evidência (ver §5) | Critério subjetivo ("qualidade adequada") |
| 4 | `## Evidence required` (ou `## Evidência`) | Path/arquivo/link/log que comprova cada bullet do critério (§6.1) | "Não especificada" |
| 5 | `## Verification` (ou `## Verificação`) | Comando ou check manual reprodutível (§6.2) | Sem comando, só "revisar" |
| 6 | `## Dependências` | Lista de `task_id`s + gates (`G03.A1`, `DEC-M*`) que bloqueiam | Dependência implícita não declarada |

- `## Execução` / `## Registros` / `## Revisão` são opcionais e vivem abaixo das seções normativas.
- `acceptance_criteria` no frontmatter (array de strings) é opcional se a seção `## Acceptance criteria` existir no corpo — mas **uma das duas MUST existir com 2–3 bullets**.

As tarefas do Blueprint devem definir conceitos e premissas sem apresentá-los como validados, aprovados ou prontos para lançamento. Os IDs de gap relevantes devem ser atualizados conforme a tarefa evolui.

---

## 2. Acceptance criteria — 2 a 3 bullets testáveis (MUST) — cf. §5

Cada tarefa MUST ter **2–3 bullets** sob `## Acceptance criteria` que sejam:

- **Testável:** passa ou falha sem interpretação ("25/25 PK estável" não "modelo bem definido").
- **Mensurável:** número, path, estado ou gate explícito.
- **Rastreável:** cada bullet aponta para uma evidência em `## Evidence required`.

Exemplo (P03-T01 — bom):

```markdown
## Acceptance criteria

- [ ] 25/25 entidades com `canonical_id` (PK estável) + 12/12 relacionamentos com FK/cardinalidade/temporalidade — tabela §1–§2 do `target_file`
- [ ] `identity_alias` com crosswalk `hub_id`/`external_id`/`source_system` + `valid_from/to` e `occurred_at`/`recorded_at` (UTC) — §3–§4
- [ ] Diagrama ER Mermaid renderiza sem erro e `grep -c "a designar" target_file` == 0
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

Por que falha: bullets subjetivos, sem contagem/path/gate, evidência ausente, verificação não reprodutível.

---

## 3. Evidence required e Verification (MUST) — cf. §6

### 3.1 `evidence_required` (§6.1)

- MUST ser path existente, wikilink resolvido, log, CSV, ata ou `DEC-*`.
- MUST NOT ser `Não especificada`, `a designar`, `TBD`, `a definir` ou path em `99-archive/superado/` sem nota explícita "superado — ver `target_file` atual em `01-work/`".
- Cada bullet de acceptance criteria SHOULD mapear 1:1 para uma evidência listada.

Exemplos válidos: `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`, `02-review/bloqueado/indicadores/matriz-indicadores-v1.xlsx`, `04-project-management/atas-reuniao/2026-10-28-piloto-SEBRAE.md`, `00-project-control/decisoes/DEC-M03-2026-10-15.md`.

### 3.2 `verification` (§6.2)

- MUST ser comando shell, check Obsidian ou conferência manual que um revisor independente pode reproduzir sem perguntar ao autor.
- Formato recomendado: checklist com 2–3 itens, cada um com comando entre crases.

---

## 4. Regra lifecycle-first — `status == pasta` (MUST) — cf. §7 e `HUB_Framework_Fronteiras_Lifecycle.md` §2–§3

> **Invariante do repo:** a **pasta é a verdade**, o campo `status:` é o carimbo. Transição = mover arquivo + carimbar.

Esta regra vale para o **conteúdo do entregável** (`target_file` em `01-work`/`02-review`/`03-approved`) e, por extensão, para a **tarefa que o governa**: uma tarefa NUNCA está `concluido`/`aprovado` se seu `target_file` não está na pasta correspondente com gate aprovado.

| Onde está o `target_file` | `status` permitido na tarefa | Significado |
|---|---|---|
| `01-work/<tema>/<dominio>/` | `rascunho` \| `em-elaboracao` | Em elaboração — não submetido |
| `02-review/` (incl. `pacotes/`, `bloqueado/`, `01-blueprint/` etc.) | `em-revisao` | Congelado aguardando gate/decisão |
| `03-approved/` | `aprovado` | Gate assinado (`DEC-M*` + `## Histórico de aprovação`) |
| `99-archive/` | `superado` \| `rejeitado` \| `descontinuado` | Obsoleto com motivo |

Regras:

1. **MUST:** `status` da tarefa reflete o estado real do `target_file`. Divergência = corrigir na origem (mover arquivo ou corrigir `status`), nunca mascarar editando só a matriz/log.
2. **MUST NOT:** tarefa `concluido`/`aprovado` sem `DEC-M*` correspondente + pacote em `02-review/`. P01/P02 "concluído sem gate aprovado" é `em-revisao até DEC-M01/M02`.
3. **MUST:** promoção usa `git mv` (preserva `git log --follow`) + atualização de `status` + bloco de histórico. Edição direta em `03-approved/` ou `02-review/` é proibida.
4. **SHOULD:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` e `HUB_Log_Tarefas_Progresso.md` espelham `status` — mas a fonte da verdade é `tarefas/P*.md` frontmatter + pasta do `target_file`.

Hierarquia fonte da verdade: `tarefa frontmatter` → `plano de fase` → `marcos-fases-v1.md` → `HUB_Log_Tarefas_Progresso.md` → `matriz-fases-tarefas-v1.md`.

---

## 5. Definition of Done por tarefa (DoD) — cf. §8

Uma tarefa está **Done** se e somente se TODOS os itens abaixo são PASS. Um único FAIL = não-Done.
Referência canónica: `Tarefa_Executavel_Definicao.md` **§8** (espelho futuro: `references/definition-of-done.md`).

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
| D10 | `git diff --check` limpo (sem whitespace errors) + frontmatter YAML válido | `git diff --check` vazio; abrir no Obsidian Bases sem erro YAML | Global |

---

## 6. Proibição de "a designar" (MUST NOT) — cf. §9

As strings **"a designar"**, **"a definir"**, **"TBD"**, **"a determinar"**, **"a nomear"** são **PROIBIDAS** em `owner`, `accountable`, `evidence_required`, `target_file` e `acceptance_criteria`.

- **MUST:** `owner: ["Nome Sobrenome"]` — pessoa nominal, não papel genérico.
- **MUST NOT:** `owner: ["Dados (a designar)"]`, `owner: ["GTM a designar"]`, `owner: ["a designar"]`.

**Permitido quando nomeação realmente pendente (única exceção com data-limite obrigatória):**

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

`blocked_until` é obrigatório quando se usa `bloqueado`; sem data é FAIL (§9).

### Verificação obrigatória (rodar antes de todo PR que toca `tarefas/`)

```bash
# Baseline pré-correção (Task 1): esperado ~60 hits. Pós-Task 4: MUST == 0
grep -R "a designar" 04-project-management/tarefas/*.md
grep -R "a designar" 04-project-management/tarefas/*.md | wc -l

# Varredura ampliada (proibidas: a definir, TBD, a determinar)
grep -R "TBD\|a definir\|a determinar\|a nomear" 04-project-management/tarefas/*.md
# Pós-Task 4: MUST == 0 (ou apenas bloqueado datado)

# Frontmatter presente
grep -L "^owner:" 04-project-management/tarefas/*.md
grep -L "evidence_required" 04-project-management/tarefas/*.md
# esperado: vazio

# Critério ausente
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md
grep -L "Acceptance criteria" 04-project-management/tarefas/P*.md
# esperado pós-Task 5/6: vazio
```

> Se qualquer `grep -R "a designar"` retornar hit fora do padrão `bloqueado: aguardando nomeação + blocked_until`, o PR **MUST** ser bloqueado.

---

## 7. Template / Esqueleto para nova tarefa `P*` / `BP-*`

Copie e preencha. Todos os campos/seções marcados MUST são auditados na Task 2.

### 7.1 Frontmatter — exemplo canónico (P03-T01 reescrito conforme §10.1 do padrão)

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

Para `BP-*`, use `phase: BP` e `task_id: BP-00X`; `target_file` pode apontar para `02-review/01-blueprint/` quando submetido a gate.

### 7.2 Corpo — esqueleto mínimo (ordem MUST §4)

```markdown
# P03-T01 — Modelo lógico/físico com PK/FK/cardinalidade (M03.A)

## Objetivo

Produzir modelo canónico de 25 entidades com PK estável, FK, cardinalidade e temporalidade (G03.A1). Link para gap/plano: [[00-project-control/registro-lacunas/lacunas/DAT-001]].

## Entregável

`01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md` — tabelas §1–§4 + diagrama ER. (path idêntico ao frontmatter `target_file`)

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

## Execução (opcional)

Notas de execução, registros e revisão abaixo das seções normativas.
```

---

## 8. Checklist de criação / PR gate — usar para toda nova tarefa ou edição em `tarefas/`

Copie este checklist para a descrição do PR ou para a nota da tarefa.

```markdown
### Checklist Tarefa Executável — cf. Tarefa_Executavel_Definicao.md §3–§8

- [ ] Frontmatter completo (§3): `task_id`, `phase`, `status`, `priority`, `area`, `layer`, `owner` nominal, `target_file` existente, `gap_ids`, `dependencies`, `related_notes`, `evidence_required`, `created`, `tags`
- [ ] `owner` é pessoa nominal — sem "a designar" / "a definir" / "TBD" (§9) — ou `bloqueado: aguardando nomeação` + `blocked_until: YYYY-MM-DD`
- [ ] Seções no corpo nesta ordem (§4): Objetivo → Entregável → Acceptance criteria → Evidence required → Verification → Dependências
- [ ] `Acceptance criteria` tem 2–3 bullets testáveis com número/path/gate (§5)
- [ ] `evidence_required` aponta para path/log/link existente, 1:1 com os bullets (§6.1) — nunca "Não especificada"
- [ ] `Verification` tem 1–3 comandos/checks reprodutíveis entre crases (§6.2)
- [ ] `status == pasta` do `target_file` (§7): `01-work`→rascunho/em-elaboracao, `02-review`→em-revisao, `03-approved`→aprovado
- [ ] `target_file` existe (`ls` PASS) e não aponta para `99-archive/superado/` sem nota de superado
- [ ] `gap_ids` e `dependencies` referenciam IDs existentes
- [ ] `grep -R "a designar" 04-project-management/tarefas/*.md` == 0 (ou só bloqueado datado)
- [ ] `git diff --check` limpo (sem trailing whitespace)
- [ ] Bases abrem sem erro YAML: `HUB_Tarefas_Projeto.base`
```

**Definition of Done completa:** ver tabela D1–D10 na §5 acima. Um único FAIL = não-Done (§8).

---

## 9. Comandos de verificação canónicos — rodar antes de submeter

```bash
# 1. Frontmatter e critério presentes (Task 5/6)
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md
grep -L "Acceptance criteria" 04-project-management/tarefas/P*.md
grep -n "^evidence_required:" 04-project-management/tarefas/P03-T01*.md
grep -n "Acceptance criteria" 04-project-management/tarefas/P03-T*.md

# 2. Proibição "a designar" (Task 4 — pós-correção MUST == 0)
grep -R "a designar" 04-project-management/tarefas/*.md
grep -R "a designar" 04-project-management/tarefas/*.md | wc -l
grep -R "TBD\|a definir\|a determinar" 04-project-management/tarefas/*.md
grep -c "a designar" 04-project-management/tarefas/P03-T01*.md

# 3. Critério ausente (pós-Task 5)
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md

# 4. Lifecycle (§7)
grep -rh "^status:" 04-project-management/tarefas/P01*.md | sort | uniq -c
grep -rh "^status:" 04-project-management/tarefas/P03*.md | sort | uniq -c
# P01/P02 pós-Task 7: em-revisao até DEC-M01/M02, nunca concluido órfão

# 5. Higiene
git diff --check
# esperado: vazio (sem trailing whitespace, sem marcador de conflito)

# 6. Contagem de cobertura
ls 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# esperado: 64 (56 P + 8 BP)
```

Regra de correção (plano § Architecture Decisions — "Correção na origem"): divergência corrige-se no arquivo de tarefa/plano/marco/decisão e **depois** na matriz — nunca editando só a matriz. `git mv` para moves (preserva `git log --follow`).

---

## 10. Referências

- Padrão normativo: [`00-project-control/framework/Tarefa_Executavel_Definicao.md`](../../00-project-control/framework/Tarefa_Executavel_Definicao.md) — **§3 Campos obrigatórios**, **§4 Seções obrigatórias**, **§5 Acceptance criteria**, **§6 Evidence/Verification**, **§7 Lifecycle-first**, **§8 Definition of Done**, **§9 Proibição "a designar"**, **§10 Exemplos bom vs ruim**
- Lifecycle: [`00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md`](../../00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md) §2–§3
- Processo: [`00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md`](../../00-project-control/framework/HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md) Camada 3
- Plano origem: [`.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md`](../../.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md) Task 1
- Checklist global (quando criado): `references/definition-of-done.md` — espelha a §8
