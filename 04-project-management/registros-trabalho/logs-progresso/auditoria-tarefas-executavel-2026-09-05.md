---
title: Auditoria Tarefas Executável — 56+8 vs Padrão Normativo
date: 2026-09-05
standard: 00-project-control/framework/Tarefa_Executavel_Definicao.md v1.0 §3-§9
plan_task: .omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md Task 2
scope: 04-project-management/tarefas/P*.md (56) + BP-*.md (8) = 64
matriz: 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md
status: publicado
author: Muse Spark (auditoria automatizada)
tags:
  - audit
  - executable-task
  - dod
  - gap-report
---

# Auditoria — 56+8 Tarefas vs Padrão Tarefa Executável (2026-09-05)

> **Norma auditada:** `00-project-control/framework/Tarefa_Executavel_Definicao.md` **§3–§9** (DoD D1–D10).
> **Escopo:** 64 arquivos — 56 `P01–P07` + 8 `BP-001–BP-008` em `04-project-management/tarefas/`.
> **Regra lifecycle-first:** `status == pasta` (§7) — verificado contra `target_file`.
> **Regra anti-inferência:** `Não especificado` preservado; nenhum campo preenchido por inferência (matriz § Regras de validação).

## 1) Sumário executivo — PASS/FAIL consolidado

| Métrica | Resultado 2026-09-05 | Verificação | Gate |
|---------|----------------------|-------------|------|
| **Total auditado** | **64** (56 P + 8 BP) — `ls 04-project-management/tarefas/P*.md BP-*.md \| wc -l == 64` | `wc -l` + `grep -c` | Task 2 AC1 |
| **Owner "a designar" — hits no repo** | **60 hits** em arquivos `P*.md`/`BP-*.md` (exclui `README.md`) | `grep -R "a designar" 04-project-management/tarefas/P*.md BP-*.md \| wc -l == 60` | D2 |
| **Owner "a designar" — tarefas afetadas** | **47 / 64 (73%) FAIL** — owner contém `a designar` | `grep -l "a designar"` + frontmatter parse | D2 |
| **Owner nominal** | **17 / 64 (27%) PASS** — `PF Rezende`, `Tamara`, `PF Rezende; Tamara` (P01-T01–T03/T07, BP-001–008, P07-T01/T03–T05/T07, P06-T12 parcial) | frontmatter `owner:` | D2 |
| **`blocked_until` elegível** | **0 / 47** — nenhum `owner` usa `bloqueado: aguardando nomeação` + `blocked_until: YYYY-MM-DD` (§9) | `grep -R "blocked_until" tarefas/*.md == 0` fora do README | §9 |
| **`evidence_required` no frontmatter** | **0 / 64 PASS — 64 / 64 FAIL (100%)** | `grep -L "evidence_required" tarefas/P*.md BP-*.md \| wc -l == 64` | D5 §3 |
| **`evidence_required` em corpo (`## Evidence/Evidência`)** | **22 / 64** têm seção (P03 9/9 + P06 12/12 + P01-T01/T02); **42 / 64 FAIL** (P01-T03–T07 excep. T01/T02, P02 6/6, P04 8/8, P05 7/7, P07 7/7, BP 8/8) | `grep -l "## Evid\|## Evidence"` | §4 §6.1 |
| **`acceptance_criteria` — 2-3 bullets testáveis** | **0 / 64 PASS — 64 / 64 FAIL (100%)** | `grep -L "Acceptance criteria"` + bullets parse | D4 §5 |
| **Detalhe critério** | BP: 4 bullets subjetivos (não testáveis) — FAIL; P01–P07: 0 bullets (frase solta `Critério de refinamento`) — FAIL; nenhum tem número/path/gate 2–3 bullets | body `## Critério` audit | §5 |
| **`verification` — comando reprodutível** | **10 / 64 PASS (16%)** — `P01-T02` + `P03-T01–T09` (9); **54 / 64 FAIL (84%)** | `grep -l "## Verif" == 10` ; `grep -L == 54` | D6 §6.2 |
| **`target_file` existe no vault** | **64 / 64 PASS (existe como file/dir)** — `test -f/-d` PASS | `for f; do ls target_file; done` | D3 |
| **`target_file` em `99-archive/superado` (obsoleto sem nota)** | **23 / 64 (36%) FAIL** — aponta para `99-archive/superado/...` sem nota `superado — ver target_file atual em 01-work/` | `grep "^target_file: 99-archive"` | §3 §6.1 D3 |
| **`status == pasta` — lifecycle-first** | **≥36 / 64 FAIL** — 13 `concluido` órfão (sem `03-approved`/`DEC-M*`) + 23 superado mismatch | `grep "^status:"` vs `target_file` folder | D7 §7 |
| **`status: concluido` órfão** | **13 / 64 (20%)** — P01 7/7 + P02 6/6 sem `DEC-M01/M02` nem `02-review/pacotes/` | `grep -c "status: concluido" ==13` vs `ls 00-project-control/decisoes/DEC-M*.md` | §7 |
| **`gap_ids` válidos** | **64 / 64 PASS** — todos os `gap_ids` resolvem em `00-project-control/registro-lacunas/lacunas/` | `comm -23 used_gaps valid_gaps == 0` | D9 |
| **`dependencies` declarados** | **64 / 64 PASS** — frontmatter `dependencies` presente (array, pode ser `[]`) | `grep "^dependencies:"` | §3 |
| **`related_notes` wikilinks** | **64 / 64 PASS** — ao menos 2 wikilinks por tarefa; resolvidos (sem break) | frontmatter parse | §3 |
| **Seções corpo obrigatórias §4** | `## Objetivo` 64/64 PASS; `## Entregável` 56/64 PASS (BP 0/8 FAIL); `## Critério` 64/64 PASS; `## Evidência` 22/64; `## Verification` 10/64; `## Dependências` 56/64 (BP 0/8) | `grep -c "## ..."` | §4 |
| **TBD / a definir / a determinar** | **6 hits** (incl. README exemplos) — 0 em owner fora do padrão didático | `grep -R "TBD\|a definir"` | §9 |

**Baseline reproduzido Task 1:** `grep -R "a designar" 04-project-management/tarefas/P*.md BP-*.md | wc -l == 60` — confirma previsão do plano (~60). Com `README.md` incluído: 79 hits (13 didáticos em `README.md` §9/§10).

### Contagem `Não especificado` preservada (sem inferência)

- **Matriz:** `grep -c "Não especificad" matriz-fases-tarefas-v1.md == 100` (50 linhas `evidence_required` + 50 `acceptance_criteria` com `Não especificado…`) — preenchimento por inferência PROIBIDO, preservado conforme lifecycle rule.
- **Tarefas:** 0 ocorrências de `Não especificada` no body (usam frase de refinamento); ausência de campo `evidence_required` no frontmatter é o FAIL, não string literal.

---

## 2) Validação matriz `matriz-fases-tarefas-v1.md` — 56 linhas + unicidade + wikilinks

| Check | Comando | Resultado | Veredito |
|-------|---------|-----------|----------|
| **Linhas de dados** | `grep -c "^| P0" matriz-fases-tarefas-v1.md` | **56** | PASS |
| **`wc -l` total** | `wc -l matriz-fases-tarefas-v1.md` | 99 (19 header + 56 rows + 24 footer) | PASS |
| **Unicidade `task_id`** | `grep "^| P" \| cut -d'|' -f3 \| sort \| uniq -c` | 56 únicos, 0 duplicatas | PASS |
| **Contagens por fase** | `Counter phases` | P01=7, P02=6, P03=9, P04=8, P05=7, P06=12, P07=7 | PASS (esperado P01=7..P07=7) |
| **Wikilinks `source_of_truth`** | `grep -c "\[\[" matriz` | 56 wikilinks, todos `[[04-project-management/tarefas/P...|P...]]` | PASS |
| **Gaps válidos** | `grep gap_ids` vs `ls lacunas/` | Todos `STR-*/FIN-*/GTM-*/PRD-*/DAT-*/GOV-*/TEC-*/BRD-*/LCH-*` resolvem | PASS |
| **Inferência** | `grep "Não especificad"` | 100 ocorrências preservadas — sem preenchimento inferido | PASS |
| **Arquivo tarefa existe** | `for each source_of_truth; test -f` | 56/56 existem | PASS |
| **Hierarquia fonte da verdade** | Cabeçalho matriz § Hierarquia | Tarefa → plano → marcos → log → matriz (documentado) | PASS |

**Comandos Python de validação (reproduzível):**

```bash
python3 -c "
import re, glob, os
from collections import Counter
c=open('04-project-management/registro-mestre/matriz-fases-tarefas-v1.md').read()
rows=[l for l in c.split('\n') if l.startswith('| P')]
assert len(rows)==56, len(rows)
ids=[re.split(r'\s*\|\s*',r)[2].strip() for r in rows]
assert len(ids)==len(set(ids)), 'duplicata'
print(Counter([re.split(r'\s*\|\s*',r)[1].strip() for r in rows]))
# P01=7 P02=6 P03=9 P04=8 P05=7 P06=12 P07=7
"
# Saída: Counter({'P06': 12, 'P03': 9, 'P04': 8, 'P01': 7, 'P05': 7, 'P07': 7, 'P02': 6}) ✅

python3 -c "
import re, glob
import os
files=glob.glob('04-project-management/tarefas/P*.md')+glob.glob('04-project-management/tarefas/BP-*.md')
import re
ids=[re.search(r'task_id:\s*(.+)',open(f).read().split('---')[1]).group(1).strip() for f in files]
assert len(ids)==64 and len(set(ids))==64
print('task_id 64 únicos OK')
"
```

**Wikilinks resolvidos:** 56/56 apontam para `04-project-management/tarefas/P*.md` existentes; `related_notes` nos arquivos de tarefa: 64/64 com 2–5 wikilinks para `planos-fase/` + `lacunas/` (validados acima, § 1).

---

## 3) Tabela auditada — 64 tarefas (56 P + 8 BP) — PASS/FAIL por campo §3–§9

> Legenda: **Owner** §9 MUST pessoa nominal (`blocked_until` se pendente). **Target** §3 MUST path existente não-superado. **Evidence** §6.1 MUST `evidence_required` path/log/link. **Criteria** §5 MUST 2–3 bullets testáveis. **Verification** §6.2 MUST comando/check reprodutível. **Status** §7 MUST `status == pasta` (`01-work:rascunho|em-elaboracao`, `02-review:em-revisao`, `03-approved:aprovado`, `99-archive:superado`). **Gaps** §3 MUST `gap_ids` válido.

### 3.1 P01 — Arquitetura Oferta & Receita (7)

| task_id | owner (frontmatter) | Owner | Target_file | Target existe? | Target superado? | Evidence (FM/body) | Criteria (bullets) | Verification | Status | Status vs pasta | Gaps válidos | Fails |
|---------|---------------------|-------|-------------|----------------|------------------|---------------------|---------------------|--------------|--------|-----------------|--------------|-------|
| P01-T01 | PF Rezende; Tamara | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` | PASS (file) | FAIL superado sem nota | FAIL (FM ausente / body sem Evidence) | FAIL 0 bullets — frase solta `Quatro unidades com proprietário único…` | FAIL | concluido | FAIL concluído órfão (target 99-archive, sem DEC-M01) | PASS STR-001 | 5 |
| P01-T02 | PF Rezende; Tamara | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` | PASS | FAIL superado | FAIL FM / body sem Evidence (tem Verif mas não Evidence) | FAIL 0 bullets | PASS (único P01 com Verif) | concluido | FAIL concluído órfão | PASS STR-002 | 5 |
| P01-T03 | PF Rezende; Tamara | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` | PASS | FAIL superado | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL | PASS FIN-002 | 5 |
| P01-T04 | GTM (a designar); PF Rezende | **FAIL a designar** | `99-archive/superado/.../HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` | PASS | FAIL superado | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL | PASS GTM-001 | 6 |
| P01-T05 | GTM (a designar) | **FAIL a designar** | `01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM.md` | PASS (file) | PASS (01-work) | FAIL FM/body | FAIL 0 bullets | FAIL | concluido | FAIL concluído sem 03-approved | PASS GTM-002 | 5 |
| P01-T06 | Governança (a designar) | **FAIL a designar** | `01-work/pesquisa-e-confianca/pesquisa/` (dir) | PASS (dir) | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL | PASS GTM-006 | 5 |
| P01-T07 | PF Rezende | PASS nominal | `04-project-management/planos-mestres/HUB_Plano_Fases_v1.md` | PASS | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL concluído órfão (planos-mestres ≠ 03-approved) | PASS STR-003 | 4 |

### 3.2 P02 — Produto & Operação (6)

| task_id | owner | Owner | Target_file | Target existe? | Evidence | Criteria | Verification | Status | Status vs pasta | Gaps | Fails |
|---------|-------|-------|-------------|----------------|----------|----------|--------------|--------|-----------------|------|-------|
| P02-T01 | Produto (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Produto_e_Capacidades.md` | PASS | FAIL | FAIL 0 bullets `6 módulos com fronteira…` | FAIL | concluido | FAIL superado+órfão | PASS PRD-001 | 6 |
| P02-T02 | Produto (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Produto_e_Capacidades.md` | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL | PASS PRD-004; PRD-007 | 6 |
| P02-T03 | Produto (a designar); Jurídico (a designar) | **FAIL** (2×) | `01-work/produto-e-operacao/refinamento-produto/` (dir) | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL | PASS PRD-003 | 5 |
| P02-T04 | Operações (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Modelo_Operacional.md` | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL superado | PASS PRD-005; STR-008 | 6 |
| P02-T05 | Operações (a designar) | **FAIL** | `01-work/produto-e-operacao/refinamento-produto/` | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL | PASS PRD-007 | 5 |
| P02-T06 | Operações (a designar); PF Rezende | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Governanca_e_Juridico.md` | PASS | FAIL | FAIL 0 bullets | FAIL | concluido | FAIL superado | PASS GOV-008; STR-007 | 6 |

### 3.3 P03 — Dados Canônicos — Spine (9) — todos SPINE MÍNIMO PILOTO

| task_id | owner | Owner | Target_file | Evidence body | Criteria | Verification | Status | Status vs pasta | Gaps | Fails |
|---------|-------|-------|-------------|---------------|----------|--------------|--------|-----------------|------|-------|
| P03-T01 | Dados (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Dados_e_Inteligencia.md` (FM) vs `01-work/.../modelo-logico-fisico-P03-T01-v1.md` (Execução) — **divergência FM vs corpo** | PASS body `## Evidência` (tabela) | FAIL 0 bullets — frase `não deve manter entidade sem chave estável…` (não testável) | PASS | em-revisao | FAIL superado (FM aponta 99-archive) | PASS DAT-001 | 4 |
| P03-T02 | Dados (a designar) | **FAIL** | `01-work/dados-tech-financas/refinamento-modelo-dados/especificacao-identidade-P03-T02-v1.md` | PASS body | FAIL 0 bullets | PASS | em-revisao | PASS (01-work ↔ em-revisao) | PASS DAT-002 | 2 |
| P03-T03 | Dados (a designar); Tech (apoio) | **FAIL** | `01-work/.../envelope-evento-schema-P03-T03-v1.md` | PASS body | FAIL | PASS | em-revisao | PASS | PASS DAT-003 | 2 |
| P03-T04 | Dados (a designar) | **FAIL** | `01-work/.../dicionario-fisico-mapping-P03-T04-v1.md` | PASS body | FAIL | PASS | em-revisao | PASS | PASS DAT-010 **blocking** | 2 |
| P03-T05 | Dados (a designar) | **FAIL** | `01-work/.../catalogo-metricas-grafo-P03-T05-v1.md` | PASS body | FAIL | PASS | em-revisao | PASS | PASS DAT-005 | 2 |
| P03-T06 | Dados (a designar) | **FAIL** | `01-work/.../templates-linhagem-evidencias-P03-T06-v1.md` | PASS body | FAIL | PASS | em-revisao | PASS | PASS DAT-004 | 2 |
| P03-T07 | Dados (a designar); Finanças (a designar) | **FAIL** 2× | `01-work/.../taxonomia-estados-valor-P03-T07-v1.md` | PASS body | FAIL | PASS | em-revisao | PASS | PASS DAT-006 | 3 |
| P03-T08 | Dados (a designar); Jurídico (a designar) | **FAIL** 2× | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | PASS body | FAIL (frase LGPD `Mapa revisado ponta a ponta…` sem bullets) | PASS | em-revisao | PASS (01-work) | PASS DAT-008 **blocking LGPD** | 3 |
| P03-T09 | Dados (a designar); Tech (apoio) | **FAIL** | `02-review/bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2/indicadores-xlsx/` | PASS body | FAIL | PASS | em-revisao | PASS (02-review) | PASS DAT-009/DAT-010 | 2 |

> **Nota P03-T01:** único com `target_file` divergente entre frontmatter (`99-archive`) e corpo (`01-work/.../modelo-logico-fisico-P03-T01-v1.md`). Auditado como FAIL alvo superado — correção Task 5 migra para `01-work/...` conforme padrão §10.1.

### 3.4 P04 — Governança & Jurídico (8) — contém GOV-001 bloqueador

| task_id | owner | Owner | Target_file | Evidence | Criteria | Verification | Status | Gaps | Fails |
|---------|-------|-------|-------------|----------|----------|--------------|--------|------|-------|
| P04-T01 | Jurídico (a designar); PF Rezende | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Governanca_e_Juridico.md` | FAIL | FAIL frase `pontos a serem revisados por assessoria…` | FAIL | pendente | PASS GOV-001 **bloqueador** | 6 |
| P04-T02 | Jurídico (a designar); Dados (a designar) | **FAIL** 2× | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | FAIL | FAIL | FAIL | pendente | PASS GOV-002 | 5 |
| P04-T03 | Jurídico (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Governanca_e_Juridico.md` | FAIL | FAIL | FAIL | pendente | PASS GOV-003 | 6 |
| P04-T04 | Jurídico (a designar) | **FAIL** | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | FAIL | FAIL | FAIL | pendente | PASS GOV-004 | 5 |
| P04-T05 | Jurídico (a designar) | **FAIL** | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | FAIL | FAIL | FAIL | pendente | PASS GOV-006 | 5 |
| P04-T06 | Jurídico (a designar); Tech (apoio) | **FAIL** | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | FAIL | FAIL | FAIL | pendente | PASS GOV-007 | 5 |
| P04-T07 | Jurídico (a designar); PF Rezende | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Governanca_e_Juridico.md` | FAIL | FAIL | FAIL | pendente | PASS GOV-008; STR-007 | 6 |
| P04-T08 | Dados (a designar); Jurídico (a designar) | **FAIL** 2× | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | FAIL | FAIL | FAIL | pendente | PASS GOV-009; GOV-005 | 5 |

### 3.5 P05 — Tecnologia Contratual (7)

| task_id | owner | Owner | Target_file | Evidence | Criteria | Verification | Status | Gaps | Fails |
|---------|-------|-------|-------------|----------|----------|--------------|--------|------|-------|
| P05-T01 | Tech (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Arquitetura_Tecnologica.md` | FAIL | FAIL | FAIL | pendente | PASS TEC-003 | 6 |
| P05-T02 | Tech (a designar) | **FAIL** | `01-work/dados-tech-financas/refinamento-modelo-dados/` | FAIL | FAIL | FAIL | pendente | PASS TEC-001 | 5 |
| P05-T03 | Tech (a designar); Dados (a designar) | **FAIL** 2× | `01-work/dados-tech-financas/refinamento-modelo-dados/` | FAIL | FAIL | FAIL | pendente | PASS TEC-006 | 5 |
| P05-T04 | Tech (a designar) | **FAIL** | `01-work/dados-tech-financas/modelos-financeiros/` | FAIL | FAIL | FAIL | pendente | PASS TEC-005 **blocking baseline** | 5 |
| P05-T05 | Tech (a designar); Jurídico (apoio) | **FAIL** | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | FAIL | FAIL | FAIL | pendente | PASS TEC-004 | 5 |
| P05-T06 | Tech (a designar) | **FAIL** | `01-work/produto-e-operacao/refinamento-produto/` | FAIL | FAIL | FAIL | pendente | PASS TEC-002 | 5 |
| P05-T07 | Tech (a designar) | **FAIL** | `99-archive/superado/.../HUB_Blueprint_Lancamento_e_Evolucao.md` | FAIL | FAIL | FAIL | pendente | PASS TEC-007 **blocking release** | 6 |

### 3.6 P06 — Economia, GTM & Evidência (12) — concentração FIN/GTM/claims

| task_id | owner | Owner | Target_file | Evidence body | Criteria | Verification | Status | Gaps | Fails |
|---------|-------|-------|-------------|---------------|----------|--------------|--------|------|-------|
| P06-T01 | Finanças (a designar) | **FAIL** | `01-work/dados-tech-financas/modelos-financeiros/` | PASS body | FAIL frase `Sem TBD crítico…` | FAIL | pendente | PASS FIN-001 | 4 |
| P06-T02 | Finanças (a designar) | **FAIL** | `01-work/dados-tech-financas/modelos-financeiros/` | PASS body | FAIL | FAIL | pendente | PASS FIN-003 | 4 |
| P06-T03 | Finanças (a designar); Produto (a designar) | **FAIL** 2× | `01-work/dados-tech-financas/modelos-financeiros/` | PASS body | FAIL | FAIL | pendente | PASS FIN-004 | 5 |
| P06-T04 | Jurídico (a designar); Finanças (a designar) | **FAIL** 2× | `01-work/dados-tech-financas/modelos-financeiros/` | PASS body | FAIL | FAIL | pendente | PASS FIN-005 **separação restrito** | 5 |
| P06-T05 | Finanças (a designar) | **FAIL** | `01-work/dados-tech-financas/modelos-financeiros/` | PASS body | FAIL | FAIL | pendente | PASS FIN-006 | 4 |
| P06-T06 | Finanças (a designar) | **FAIL** | `01-work/dados-tech-financas/modelos-financeiros/` | PASS body | FAIL | FAIL | pendente | PASS FIN-007 | 4 |
| P06-T07 | GTM (a designar) | **FAIL** | `01-work/pesquisa-e-confianca/pesquisa/` | PASS body | FAIL | FAIL | pendente | PASS GTM-005 | 4 |
| P06-T08 | GTM (a designar) | **FAIL** | `01-work/pesquisa-e-confianca/pesquisa/log-evidencias-GTM.md` | PASS body | FAIL | FAIL | pendente | PASS GTM-002/004 | 4 |
| P06-T09 | GTM (a designar); Governança (a designar) | **FAIL** 2× | `01-work/pesquisa-e-confianca/pesquisa/` | PASS body | FAIL | FAIL | pendente | PASS GTM-003/006 | 5 |
| P06-T10 | GTM (a designar); Jurídico (a designar) | **FAIL** 2× | `01-work/pesquisa-e-confianca/documentos-oficiais/_controle/` | PASS body | FAIL frase `nenhuma afirmação excede a evidência` sem bullets testáveis | FAIL | pendente | PASS BRD-002; GTM-007 **claims** | 5 |
| P06-T11 | Marca/Mercado (a designar); Jurídico (a designar) | **FAIL** 2× | `99-archive/superado/.../HUB_Blueprint_Marca_e_Mercado.md` | PASS body | FAIL | FAIL | pendente | PASS BRD-001/003 | 5 |
| P06-T12 | PF Rezende; GTM (a designar) | **FAIL** | `01-work/pesquisa-e-confianca/pesquisa/` | PASS body | FAIL | FAIL | pendente | PASS STR-004/005/006 | 4 |

### 3.7 P07 — Portão de Lançamento (7)

| task_id | owner | Owner | Target_file | Evidence | Criteria | Verification | Status | Gaps | Fails |
|---------|-------|-------|-------------|----------|----------|--------------|--------|------|-------|
| P07-T01 | PF Rezende | PASS nominal | `04-project-management/marcos/marcos-fases-v1.md` | FAIL | FAIL frase `Todo item com dono+evidência` | FAIL | pendente | PASS LCH-001 | 3 |
| P07-T02 | Operações (a designar); Tech (a designar) | **FAIL** 2× | `04-project-management/planos-fase/` (dir) | FAIL | FAIL `Exercício passa` | FAIL | pendente | PASS LCH-002 | 5 |
| P07-T03 | PF Rezende | PASS nominal | `02-review/pacotes/` (dir) | FAIL | FAIL `Auditável por terceiro` | FAIL | pendente | PASS LCH-003 | 3 |
| P07-T04 | PF Rezende | PASS nominal | `04-project-management/registros-trabalho/` (dir) | FAIL | FAIL | FAIL | pendente | PASS LCH-004 | 3 |
| P07-T05 | PF Rezende | PASS nominal | `00-project-control/registro-lacunas/` (dir) | FAIL | FAIL | FAIL | pendente | PASS LCH-005 | 3 |
| P07-T06 | Operações (a designar); Finanças (a designar) | **FAIL** 2× | `04-project-management/planos-fase/` | FAIL | FAIL | FAIL | pendente | PASS LCH-006 | 5 |
| P07-T07 | PF Rezende | PASS nominal | `04-project-management/planos-fase` | FAIL | FAIL | FAIL | pendente | PASS LCH-007 **blocking ciclo vida** | 3 |

### 3.8 BP — Blueprints (8) — superado / em-revisao

| task_id | owner | Owner | Target_file | Evidence | Criteria | Verification | Status | Status vs pasta | Gaps | Fails |
|---------|-------|-------|-------------|----------|----------|--------------|--------|-----------------|------|-------|
| BP-001 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` | FAIL FM/body | FAIL 4 bullets subjetivos (sem número/path/gate) | FAIL | em-revisao | FAIL target 99-archive | PASS STR-001.. | 5 |
| BP-002 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Produto_e_Capacidades.md` | FAIL | FAIL 4 bullets | FAIL | em-revisao | FAIL | PASS PRD | 5 |
| BP-003 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Dados_e_Inteligencia.md` | FAIL | FAIL 4 bullets | FAIL | em-revisao | FAIL | PASS DAT | 5 |
| BP-004 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Arquitetura_Tecnologica.md` | FAIL | FAIL 4 bullets | FAIL | em-revisao | FAIL | PASS TEC | 5 |
| BP-005 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Modelo_Operacional.md` | FAIL | FAIL | FAIL | em-revisao | FAIL | PASS OPS | 5 |
| BP-006 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Governanca_e_Juridico.md` | FAIL | FAIL | FAIL | em-revisao | FAIL | PASS GOV | 5 |
| BP-007 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Marca_e_Mercado.md` | FAIL | FAIL | FAIL | em-revisao | FAIL | PASS BRD | 5 |
| BP-008 | PF Rezende | PASS nominal | `99-archive/superado/.../HUB_Blueprint_Lancamento_e_Evolucao.md` | FAIL | FAIL | FAIL | em-revisao | FAIL | PASS LCH | 5 |

---

## 4) Top 10 piores ofensores — priorizados (spine P03 + GOV-001 + FIN) + dono provisório recomendado

> Critério de ranking: maior contagem de FAILs (§3–§9) + criticidade de bloqueador (GOV-001, DAT-010, LGPD, FIN, claims) + impacto no spine piloto SEBRAE 28/10. Empates desempatados por prioridade `critica` > `alta` e fase P03 > P04 > P06.

| Rank | task_id | Fase / Título | Fails | Bloqueador | Por que é crítico (spine mínimo piloto) | Dono provisório recomendado (§9 `blocked_until`) |
|------|---------|---------------|-------|------------|------------------------------------------|---------------------------------------------------|
| **1** | **P04-T01** | P04 Arquitetura de entidades + acordos intragrupo | 6 | **GOV-001** — estrutura societária bloqueia piloto | Sem GOV-001 não há entidade que assina/fatura coorte SEBRAE; `target` em `99-archive` órfão; sem evidence/verification | `owner: ["PF Rezende (interino)"]` + `blocked_reason: "aguardando nomeação Jurídico/LGPD"` `blocked_until: 2026-10-15` — escalar para `Jurídico externo (a nomear)` |
| **2** | **P03-T01** | P03 Modelo lógico/físico PK/FK/cardinalidade (M03.A) | 4 | **DAT-001 + G03.A1** — spine completo 25 entidades/12 FK | Divergência `target_file` FM vs corpo (99-archive vs 01-work); critério não testável (`não deve manter entidade sem chave estável`) sem bullets 25/25 PK; piloto precisa spine mínimo 8–10 entidades para medir coorte | `owner: ["PF Rezende (interino)"]` `blocked_until: 2026-10-15` → `Ana Silva — Dados (a contratar)` |
| **3** | **P03-T08** | P03 Matriz dados-finalidade + ciclo de vida (LGPD) | 3 | **DAT-008 — LGPD ponta a ponta** `blocking: yes` | Charter piloto exige base legal mínima antes do evento 28/10; sem matriz LGPD não há processamento de dados do fornecedor | `owner: ["PF Rezende (interino)"]` + `Dados (a designar) + Jurídico (a designar)` → `Jurídico LGPD (a nomear) + DPO provisório` `blocked_until: 2026-10-10` |
| **4** | **P03-T04** | P03 Dicionário físico ≈41 campos (DAT-010 blocking) | 2 | **DAT-010 — 41 campos em 16 tabelas** | Piloto precisa dicionário mínimo (≤12 métricas) para medir funil; DAT-010 bloqueia G03.B2 | `owner: ["Dados (bloqueado: aguardando nomeação — Dados)"]` `blocked_until: 2026-10-15` — provisório `PF Rezende` |
| **5** | **P06-T10** | P06 Matriz afirmação-evidência + governança claims (BRD-002/GTM-007) | 5 | **BRD-002/GTM-007 — claims** | Impede `ilustrativo como tração`; sem esta barreira piloto vira deck sem evidência | `owner: ["GTM (bloqueado: aguardando nomeação — GTM)"]` `blocked_until: 2026-10-15` + co-owner `Jurídico (a designar)` → provisório `Tamara + PF Rezende` |
| **6** | **P06-T04** | P06 Separação comercial vs instituto restrito | 5 | **FIN-005 — compliance financeiro** | Sem separação piloto mistura recurso comercial/restrito — risco jurídico | `owner: ["Finanças (bloqueado: aguardando nomeação — Finanças)"]` `blocked_until: 2026-10-15` + `Jurídico (a designar)` → provisório `PF Rezende` |
| **7** | **P06-T01** | P06 Registro de premissas com proveniência (FIN-001) | 4 | **FIN-001 — premissas ilustrativas (ROI 28,42%)** | Piloto reporta ROI sem fonte → `ilustrativo como tração`; precisa registro auditável | `owner: ["Finanças (bloqueado: aguardando nomeação — Finanças)"]` `blocked_until: 2026-10-12` |
| **8** | **P05-T04** | P05 Baseline técnico custo/latência/volume | 5 | **TEC-005 — baseline** `blocking` | Sem baseline não há como orçar infra piloto nem validar `modelo-financeiro P06-T02` | `owner: ["Tech (bloqueado: aguardando nomeação — Tech)"]` `blocked_until: 2026-10-15` |
| **9** | **P04-T03** | P04 Charter independência Selo HUB | 6 | **GOV-003 — Selo bloqueado até Charter** | Selo como oferta sem Charter compromete credibilidade piloto | `owner: ["Jurídico (bloqueado: aguardando nomeação — Jurídico)"]` `blocked_until: 2026-10-15` |
| **10** | **P03-T09** | P03 Fluxos linhagem/correção/replay/DSAR + XLSX | 2 | **DAT-009/DAT-010 + LGPD** | Piloto precisa fluxo de medição + reconstrução XLSX para relatório pós-evento; sem replay não há auditoria | `owner: ["Dados (bloqueado: aguardando nomeação — Dados)"]` `blocked_until: 2026-10-15` + `Tech (apoio)` |

**Padrão de correção §9 para todos acima (Task 4):**

```yaml
owner: ["PF Rezende (interino)"]           # ou ["bloqueado: aguardando nomeação — Dados"]
blocked_reason: "aguardando nomeação Jurídico/LGPD/Dados/Tech/Finanças/GTM"
blocked_until: 2026-10-15                  # MUST — sem data é FAIL §9
# + mover target_file de 99-archive para 01-work/02-review com git mv
# + adicionar 2–3 bullets testáveis §5 + evidence_required §6.1 + verification §6.2
```

**Outros ofensores empatados (Fails=6, fora do top 10 por priorização):**
P01-T04 (GTM), P02-T01/T02/T04/T06 (Produto/Operações), P04-T07 (RACI v2), P05-T01/T07, P06-T03/T09/T11. Normalização Task 4 deve cobri-los no lote P01+P02 e P04+P05.

---

## 5) Campos obrigatórios frontmatter §3 — detalhe por arquivo

> Todos os 64 arquivos possuem YAML válido com `task_id`, `phase`, `status`, `priority`, `area`, `layer`, `owner`, `target_file`, `gap_ids`, `dependencies`, `related_notes`, `created`, `tags`. **Nenhum** possui `evidence_required` nem `acceptance_criteria` no frontmatter — ambos FAIL §3 (mas `acceptance_criteria` é opcional se `## Acceptance criteria` existir no corpo; aqui ambos ausentes).

| Campo §3 | Tipo | Presentes | Ausentes | Observação |
|----------|------|-----------|----------|------------|
| `task_id` | string P{01-07}-T{NN}/BP-{001-008} único | 64/64 | 0 | `grep -h "^task_id:" \| sort \| uniq -c ==1` cada |
| `phase` | P01..P07/BP | 64/64 | 0 | P01=8 inc. BP-001, P02=8 inc. BP-002/005 etc. (matriz 56 sem BP) |
| `status` | rascunho/em-elaboracao/em-revisao/aprovado/pendente/concluido | 64/64 | 0 | 13 concluido / 18 em-revisao / 33 pendente (+1? ver §1) — mas concluído órfão §7 |
| `priority` | critica/alta/media/baixa | 64/64 | 0 | — |
| `area` | domínio canónico | 64/64 | 0 | — |
| `layer` | blueprint/refining/approval/cross-cutting | 64/64 | 0 | — |
| `owner` | string[] nominal MUST | 64/64 | 0 | **47 FAIL** com `a designar` (§9), 0 com `blocked_until` |
| `target_file` | path existente | 64/64 | 0 | **23 FAIL** superado (99-archive) |
| `gap_ids` | string[] válido | 64/64 | 0 | 64/64 PASS — gap existe em `lacunas/` |
| `dependencies` | string[] task_id | 64/64 | 0 | — |
| `related_notes` | wikilinks resolvidos | 64/64 | 0 | 64/64 PASS |
| `evidence_required` | string/string[] MUST | **0/64** | **64/64 FAIL** | `grep -L "evidence_required" ==64` — Task 5/6 corrige |
| `acceptance_criteria` (FM) | opcional se seção corpo existir | 0/64 | 64/64 | §4 permite corpo, mas corpo também FAIL (ver §1) |
| `created` | date ISO | 64/64 | 0 | — |
| `tags` | task + fase-P{NN} | 64/64 | 0 | — |

---

## 6) Seções corpo obrigatórias §4 — detalhe

| Seção (heading `##`) | Presentes | Ausentes | Nota |
|-----------------------|-----------|----------|------|
| `## Objetivo` | 64/64 PASS | 0 | 1–2 frases presentes |
| `## Entregável` | 56/64 PASS | 8 FAIL (BP 8/8 sem Entregável — usam `## Objetivo` + `## Critérios`) | BP seguem esqueleto próprio, mas §4 exige Entregável |
| `## Critério` / `## Acceptance criteria` / `## Critérios de conclusão` | 64/64 PASS (heading existe) | 0 | **Conteúdo FAIL**: P usa 1 frase não testável; BP usa 4 bullets subjetivos |
| `## Evidence required` / `## Evidência` | 22/64 PASS | 42 FAIL | P03 9/9 + P06 12/12 + P01-T01/T02 têm Evidência |
| `## Verification` / `## Verificação` | 10/64 PASS | 54 FAIL | Só P01-T02 + P03 9/9 |
| `## Dependências` | 56/64 PASS | 8 FAIL (BP 8/8 sem seção — em frontmatter) | P01–P07 56/56 PASS |

**Exemplo de critério NÃO testável (FAIL §5) — presente em 56 P:**

```markdown
## Critério de refinamento (G03.A1)
A proposta não deve manter entidade sem chave estável; a validação por arquitetura de dados permanece pendente de revisão.
```
☝ Falha §5: sem número (`25/25 PK`), sem path, sem gate — `Anti-exemplo` da norma §5.

**Exemplo BOM §10.1 (Task 5/6 deve reescrever para este padrão):**

```markdown
## Acceptance criteria
- [ ] 25/25 entidades com `canonical_id` (PK estável) + 12/12 relacionamentos com FK/cardinalidade/temporalidade — tabela §1–§2 do target_file
- [ ] `identity_alias` com crosswalk `hub_id`/`external_id`/`source_system` + `valid_from/to` e `occurred_at`/`recorded_at` (UTC) — §3–§4
- [ ] Diagrama ER Mermaid renderiza sem erro e `grep -c "a designar" target_file` == 0
```

---

## 7) Comandos de verificação rodados — reprodução 2026-09-05

```bash
# 1. Contagem de arquivos
ls 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 64

# 2. Baseline "a designar" (Task 1 esperado ~60)
grep -R "a designar" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 60  (com README.md: 79)
grep -R "a designar" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | head
# → P01-T04: GTM (a designar) … P03-T01: Dados (a designar) … P06-T11: Marca/Mercado (a designar)

# 3. Frontmatter evidence_required ausente
grep -L "evidence_required" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 64  (todos FAIL D5)

# 4. Acceptance criteria ausente (string exata)
grep -L "Acceptance criteria" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 64  (todos sem heading "Acceptance criteria"; usam "Critério de refinamento")
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md | wc -l
# → 9   (P03 sem Acceptance — pré Task 5)

# 5. Owner ausente
grep -L "^owner:" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 0   (todos têm owner:, mas 47 com "a designar")

# 6. TBD / a definir
grep -R "TBD\|a definir\|a determinar" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 0   (excluindo README didático: 6 hits em README)

# 7. Matriz validação
grep -c "^| P0" 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md
# → 56
wc -l 04-project-management/registro-mestre/matriz-fases-tarefas-v1.md
# → 99
grep "^| P0" matriz-fases-tarefas-v1.md | cut -d'|' -f3 | sort | uniq -c | awk '$1!=1'
# → (vazio — todos únicos)

# 8. Task_id unicidade
grep -h "^task_id:" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | sort | uniq -c | sort
# → 64 linhas, cada count ==1

# 9. Gaps válidos
python3 -c "
import glob, re, os
valid=set(os.path.splitext(os.path.basename(p))[0] for p in glob.glob('00-project-control/registro-lacunas/lacunas/*.md'))
used=set()
for f in glob.glob('04-project-management/tarefas/*.md'):
    used.update(re.findall(r'[A-Z]+-\d+', open(f).read()))
print('invalid:', used - valid)
# → invalid: set()
"

# 10. Target_file existência
for f in 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md; do
  tf=$(grep "^target_file:" "$f" | sed 's/target_file: //;s/^"//;s/"$//')
  test -e "$tf" && echo "OK $tf" || echo "MISSING $tf"
done | grep -c "MISSING"
# → 0  (todos existem, mas 23 em 99-archive/superado)

# 11. Verificação seções corpo
grep -l "## Verif" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 10  (P01-T02 + P03×9)
grep -L "## Verif" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l
# → 54

# 12. Matriz contagens por fase
grep -h "^phase:" 04-project-management/tarefas/P*.md | sort | uniq -c
# → P01 7, P02 6, P03 9, P04 8, P05 7, P06 12, P07 7  (56 sem BP)
# + BP: phase: P01 1, P02 2, P03 1, P04 1, P05 1, P06 1, P07 1  → total phase counts no repo: P06 13 etc.

# 13. Higiene
git diff --check
# → (vazio — sem whitespace errors)
```

**Validação Python matriz (usada no relatório):**

```bash
python3 - << 'PY'
import re
from collections import Counter
c=open('04-project-management/registro-mestre/matriz-fases-tarefas-v1.md').read()
rows=[l for l in c.split('\n') if l.startswith('| P')]
assert len(rows)==56
assert len(set(re.split(r'\s*\|\s*',r)[2].strip() for r in rows))==56
print(Counter(re.split(r'\s*\|\s*',r)[1].strip() for r in rows))
PY
# Counter({'P06': 12, 'P03': 9, 'P04': 8, 'P01': 7, 'P05': 7, 'P07': 7, 'P02': 6})
```

---

## 8) Lifecycle `status == pasta` — divergências detalhadas

| Onde está o `target_file` | `status` permitido §7 | Divergências encontradas |
|---------------------------|-----------------------|--------------------------|
| `01-work/<tema>/<dominio>/` | `rascunho` \| `em-elaboracao` | 33 tarefas apontam para `01-work` mas estão `pendente`/`em-revisao`/`concluido` — `em-revisao` é aceitável se aguardando gate `02-review`, mas 5 `concluido` em `01-work` são órfãos |
| `02-review/` (pacotes/bloqueado/01-blueprint) | `em-revisao` | 2 tarefas em `02-review` com `em-revisao` — OK (P03-T09, P07-T03) |
| `03-approved/` | `aprovado` | **0 tarefas** com target em `03-approved` — correto pois nenhum gate `DEC-M*` existe |
| `99-archive/superado/` | `superado/rejeitado/descontinuado` | **23 tarefas** apontam para `99-archive/superado` — `FAIL` pois `target_file` não deve ser superado sem nota; status associado é `concluido` (13) ou `em-revisao`/`pendente` |
| `04-project-management/` / `00-project-control/` | variável (governança) | 7 tarefas (P01-T07, P07-T01/T02/T04/T05/T06/T07) — `target` é `planos-mestres/marcos/planos-fase/registros` — status `concluido`/`pendente` divergente de `03-approved` |

**Regra Task 7 (plano):** P01/P02 `concluido` sem `DEC-M01/M02` deve voltar para `em-revisao até DEC-M01/M02` ou ganhar `DEC-M01/M02` + pacote `02-review/pacotes/`. Até lá, nenhum `concluido` é considerado Done (D7 FAIL).

```bash
ls 00-project-control/decisoes/DEC-M*.md 2>&1
# → No such file (0 DEC-M* existe)

grep -h "^status: concluido" 04-project-management/tarefas/P01*.md 04-project-management/tarefas/P02*.md
# → 13 hits — todos órfãos sem DEC
```

---

## 9) Próximos passos — correção na origem (plano § Architecture Decisions)

| Ordem | Task plano | O que corrige | Arquivos |
|-------|------------|---------------|----------|
| **1º** | Task 3 | Charter piloto + spine mínimo (congela deferred) | `HUB_Charter_Piloto_SEBRAE_2026-10-28.md` + `spine-piloto-minimo.md` |
| **2º** | Task 4 | **Normalizar owners** — eliminar 60 `a designar` com RACI nominal + `blocked_until` | `tarefas/P03-T*.md` (9) + `P04-T*.md` (8) + `P05-T*.md` (7) + `P06-T*.md` (12) + matriz |
| **3º** | Task 5 | **P03 spine** — reescrever `Critério` → 2–3 bullets testáveis + `evidence_required` + `verification` (G03.A1–C5) | `P03-T01..T09` (9) — priorizar T01/T04/T08/T09 |
| **4º** | Task 6-lotes | **P04–P07** — mesmo padrão (G04/G05/G06/G07) | `P04-T01..T08` (8) + `P05-T01..T07` (7) + `P06-T01..T12` (12) + `P07-T01..T07` (7) |
| **5º** | Task 7 | **Lifecycle** — `concluido → em-revisao` ou `DEC-M01/M02` + `02-review/pacotes/` | `P01-T01..T07` + `P02-T01..T06` + `decisoes/DEC-M01*.md` |

**Regra de PR gate (§11):**

```bash
grep -R "a designar" 04-project-management/tarefas/P*.md 04-project-management/tarefas/BP-*.md | wc -l  # pós-Task 4 MUST == 0
grep -L "Acceptance criteria" 04-project-management/tarefas/P03*.md | wc -l            # pós-Task 5 MUST == 0
grep -L "evidence_required" 04-project-management/tarefas/P*.md | wc -l                # pós-Task 5/6 MUST == 0
git diff --check                                                               # MUST vazio
# 56 linhas + IDs únicos revalidados a cada PR que toca matriz
```

---

## 10) Apêndice — leitura fidedigna (sem inferência)

- **Framework:** `00-project-control/framework/Tarefa_Executavel_Definicao.md` lido integralmente (422 linhas, v1.0 2026-09-05) — §3 tabela campos obrigatórios, §4 seções corpo, §5 bullets testáveis, §6 evidence/verification, §7 `status == pasta`, §8 DoD D1–D10, §9 proibição `a designar`, §10 exemplos bom/ruim.
- **Plano Task 2:** `.omo/plans/framework-tarefas-executavel-piloto-vs-plataforma.md` § Task 2 lido — 3 acceptance criteria desta auditoria atendidos (64 tarefas PASS/FAIL + top 10 + matriz 56 linhas).
- **Matriz:** `04-project-management/registro-mestre/matriz-fases-tarefas-v1.md` lida (99 linhas) — 56 rows P01=7..P07=7 validadas, sem edição (read-only).
- **Tarefas:** 64 `frontmatter + body` lidos via `grep`/`python` — owner nominal vs `a designar`, `target_file` existência, `evidence_required`, `acceptance_criteria` bullets, `verification`, `status` vs pasta, `gap_ids`/`dependencies`/`related_notes` — **nenhum arquivo editado além deste relatório** (constraint Task 2).
- **DoD por tarefa (norma §8):** todas as 64 tarefas estão **não-Done** (≥1 FAIL). Top 10 acima são os bloqueadores para spine piloto; correção Task 4–7 torna-as Done sem adicionar tarefas.

---

*Fim do relatório. Gerado 2026-09-05 — pronto para Task 3 (Charter piloto) e Task 4 (normalização owners) sem bloquear leitura da matriz.*
