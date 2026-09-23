# Implementation Plan: Revisão V2 e Veredito do Gate — E01–E20 + Contratos Fundacionais F1 (E02, E20, E01)

## Overview
Revisar o pacote V2 em `03-approved/reconciliacao-blueprint/` (7 arquivos congelados), validar o mapeamento E01–E20 vs inventário aprovado `03-approved/nucleo-inteligencia/` (FLD-001–047, N01–N26, REL-01–12), auditar os contratos fundacionais F1 (E02, E20, E01) em `01-work/dados-tech-financas/refinamento-modelo-dados/contratos-fundacao-F1-E02-E20-E01-v1.md`, e emitir o veredito formal do Gate V2 com condições, bloqueios e sequência autorizada (F0→F4). O veredito já possui rascunho em `04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2.md` — este plano consolida a revisão humana exigida no gate e fecha F0.

## Architecture Decisions
- **Fonte de verdade imutável:** `03-approved` nunca é editado no gate; V2 apenas reconcilia camadas — sem criar REL-* fictício.
- **UNVERIFIED ≠ erro:** ausência de contraparte sem inferência; cada E recebe status explícito (parcial/hipótese/futura/coberta).
- **Bloqueio P0 = F1:** nenhum uso operacional de E02/E20 antes de contrato aprovado + tenant/auditoria validados; E20 exige teste propagação ≤5min + aprovação LGPD/DPO.
- **Vertical slice por contrato:** E02, E20, E01 auditados em profundidade antes de liberar F2.

## Dependency Graph
```
03-approved (FLD, N, REL)  ← base imutável
        │
        ├── 03-approved/reconciliacao-blueprint/Mapeamento_Identidade_Relacoes_Sequenciamento_V1.md (E→REL, UNVERIFIED)
        ├── 03-approved/reconciliacao-blueprint/Matriz_Status_E01_E20_V1.md (status, pendência, fase)
        ├── 04-project-management/registros-trabalho/logs-progresso/2026-09-05-classificacao-20-relacoes-blueprint.md (esforço/prioridade)
        │
        ├── 01-work/dados-tech-financas/refinamento-modelo-dados/contratos-fundacao-F1-E02-E20-E01-v1.md
        │       ├── E02: Company≠Entity (dim_company, dim_entity, rel_company_entity)
        │       ├── E20: Consent ternário (fact_consent, revogação ≤5min)
        │       └── E01: rel_person_company temporal (relationship_id)
        │
        └── Veredito Gate V2 → 04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2.md
                └── Liberação F1 (2–4 semanas) → F2 (2–5s) → F3/F4
```

## Task List

### Phase 0 — F0: Fechamento documental (1–3 dias, este plano cobre)
#### Task 1: Auditoria do mapeamento E01–E20 vs aprovado
**Description:** Ler `Mapeamento_Identidade_Relacoes_Sequenciamento_V1.md` + `Matriz_Status_E01_E20_V1.md` + `Matriz_Convergencia_73_16_25_23_12_8` + `REL-01–12` e verificar: cada E tem contraparte aprovada correta, UNVERIFIED qualificado sem inferência, parciais apontam REL-*/FLD/N exato, hipóteses/futuras com fase e sem compromisso MVP, e totais 0/5/3/12 consistentes.

**Acceptance criteria:**
- [ ] Cada E01–E20 tem linha na matriz com status = coberta|parcial|hipótese|futura e evidência FLD/N/REL citada
- [ ] Nenhum REL-* fictício criado; UNVERIFIED permanece até contrato existir
- [ ] 5 parciais (E01,E03,E05,E07,E09) + 3 hipóteses (E04,E14,E15) + 12 futuras validados contra Matriz_Convergencia

**Verification:**
- [ ] `grep -n "UNVERIFIED" 03-approved/reconciliacao-blueprint/*.md` + cross-check com 03-approved
- [ ] Diff matriz vs classificação: totais batem

**Dependencies:** None
**Files likely touched (read-only):**
- `03-approved/reconciliacao-blueprint/Mapeamento_Identidade_Relacoes_Sequenciamento_V1.md`
- `03-approved/reconciliacao-blueprint/Matriz_Status_E01_E20_V1.md`
- `03-approved/nucleo-inteligencia/analises-processadas/Matriz_Convergencia_73_16_25_23_12_8.md`
**Estimated scope:** S (2–3 files, leitura + anotação)

#### Task 2: Validação do contrato E02 — Empresa≠Cliente≠Entidade
**Description:** Revisar `contratos-fundacao-F1` §E02: chaves PK/FK (`dim_company.company_id`, `dim_entity.entity_id`, `rel_company_entity`), cardinalidade N:N contratual / 1:N cliente, temporalidade `valid_from/to`, regra `company_id≠entity_id`, `tenant_id` escopo, auditoria `provenance_ref` + evento. Propor teste de aceite F1 (amostra sem colisão + validação cardinalidade).

**Acceptance criteria:**
- [ ] Decisão Company≠Entity explícita; Cliente = papel em `fact_contract`, não entidade
- [ ] Contrato lista PK/FK, cardinalidade, temporalidade, tenant_id e auditoria sem ambiguidade
- [ ] Critério de aceite F1 redigido: amostra dim_company×dim_entity×fact_contract sem colisão

**Verification:**
- [ ] Leitura cruzada com `modelo-logico-fisico-P03-T01-v1.md` § rel_company_entity
- [ ] Checklist tenant_id + valid_from/to em toda linha

**Dependencies:** Task 1
**Files likely touched:**
- `01-work/dados-tech-financas/refinamento-modelo-dados/contratos-fundacao-F1-E02-E20-E01-v1.md` (§E02)
- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`
**Estimated scope:** S (1–2 files)

#### Task 3: Validação do contrato E20 — Consentimento ternário + revogação LGPD
**Description:** Revisar §E20: chaves `consent_id`, `titular_id→person_id`, `purpose`+`legal_basis` enum, `fact_consent(person_id,purpose,consent_id)`, bloqueio de sensíveis sem consent, revogação → `consent.revoked` → quarentena ≤5min, retenção/DSAR, e gate LGPD/DPO. Validar exigência de teste ponta-a-ponta ≤5min.

**Acceptance criteria:**
- [ ] Relação ternária versionada definida com status granted/revoked/expired e valid_from/to
- [ ] Bloqueio de FLD-005/006/007, FLD-028 e sensíveis sem consent válido para a finalidade
- [ ] Revogação com propagação ≤5min + quarentena + CMP log; retenção 60m/24–36m/60m audit e DSAR cobrindo aliases

**Verification:**
- [ ] Cross-check com `matriz-dados-finalidade-P03-T08-v1.md` (propagação + quarentena)
- [ ] Gate LGPD registrado como bloqueador F1 antes de F2

**Dependencies:** Task 1 (paralelizável com Task 2)
**Files likely touched:**
- `01-work/dados-tech-financas/refinamento-modelo-dados/contratos-fundacao-F1-E02-E20-E01-v1.md` (§E20)
- `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md`
**Estimated scope:** S (1–2 files)

#### Task 4: Validação do contrato E01 — Vínculo Pessoa–Empresa temporal
**Description:** Revisar §E01: `relationship_id` PK, FKs `person_id`/`company_id`, `relationship_type=employment`, `valid_from/to` obrigatórios, `manager_id` como atributo do vínculo, proibição de sobreposição de vínculos vigentes, `tenant_id` + eventos `relationship.started/ended`, e aceite A1–A3 (REL-03 parcial declarado).

**Acceptance criteria:**
- [ ] `relationship_id` PK + temporalidade obrigatória + regra anti-sobreposição employment documentada
- [ ] `dim_person.company_id` sempre via vínculo vigente; admissão/desligamento = abre/encerra linha
- [ ] A1 REL-03 parcial declarado por escrito; A2 relationship_id reservado; A3 aceite/devolução no gate

**Verification:**
- [ ] Amostra rel_person_company sem dois employments vigentes sobrepostos por person_id
- [ ] Envelope event_id/event_type/schema_version/occurred_at amarrado

**Dependencies:** Task 2 (E01 consome distinção Company de E02)
**Files likely touched:**
- `01-work/dados-tech-financas/refinamento-modelo-dados/contratos-fundacao-F1-E02-E20-E01-v1.md` (§E01)
- `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`
**Estimated scope:** S (1–2 files)

#### Task 5: Consolidação e emissão do veredito Gate V2
**Description:** Com Tasks 1–4 aprovadas, consolidar classificação + matriz + contratos F1 no veredito formal (`2026-09-05-matriz-status-E01-E20-gate-V2.md`): decisão "aprovada com condições", o que aprova/bloqueia, sequência F0→F4, critérios de done, e próximo passo (abrir F1 com E02+E20 em paralelo → E01). Atualizar logs e referências cruzadas.

**Acceptance criteria:**
- [ ] Veredito contém: 0 cobertas / 5 parciais / 3 hipóteses / 12 futuras + fonte imutável + bloqueios E02/E20/E08 + ledger financeiros + exigência eventos reproduzíveis E11/E12/E17
- [ ] Sequência F0 (1–3d) → F1 (2–4s) → F2 (2–5s) → F3 (4–8s) → F4 (4–8+s piloto) com done criteria marcados
- [ ] Próximo passo operacional redigido: abrir F1 com E02+E20 paralelo, fechar E01 na sequência, só então liberar F2

**Verification:**
- [ ] `cat 04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2.md` — todos os checkboxes de done marcados
- [ ] Links para matriz e classificação válidos (wikilinks resolvidos)

**Dependencies:** Tasks 1,2,3,4
**Files likely touched:**
- `04-project-management/registros-trabalho/logs-progresso/2026-09-05-matriz-status-E01-E20-gate-V2.md`
- `04-project-management/registros-trabalho/logs-progresso/2026-09-05-classificacao-20-relacoes-blueprint.md`
- `03-approved/reconciliacao-blueprint/Matriz_Status_E01_E20_V1.md`
**Estimated scope:** M (3–5 files)

### Checkpoint: After Tasks 1–5 (F0)
- [ ] Matriz E01–E20 validada e sem REL fictício
- [ ] Contratos E02/E20/E01 revisados e com aceite F1 definido
- [ ] Veredito Gate V2 emitido e referenciado
- [ ] Nenhuma mutação em `03-approved` (git diff vazio nessa árvore)
- [ ] Build/docs OK; `project-map.md` refletindo V2 ativa e V1 arquivada já está OK

### Phase 1 — F1 Fundação (2–4 semanas, inicia após F0 — não faz parte deste despacho)
- Task 6: Implementar contrato físico E02 (DDL `dim_company`, `dim_entity`, `rel_company_entity` + teste tenant/cardinalidade)
- Task 7: Implementar contrato E20 (pipeline `consent.revoked` ≤5min + teste quarentena + aprovação LGPD)
- Task 8: Implementar contrato E01 (constraints temporais + teste anti-sobreposição)

## Risks and Mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Fazer inferência e criar REL-* fictício para UNVERIFIED | High — quebra gate e inventário aprovado | Gate proíbe; revisão humana valida cada UNVERIFIED sem inferência |
| E20 sem teste ≤5min liberando F2 | High — risco LGPD | Bloqueador F1 explícito; sem aprovação LGPD/DPO não abre F2 |
| E02 com colisão company_id=entity_id | High — contaminação tenancy | Amostra + constraint PK/FK + teste cardinalidade antes de F2 |
| Avançar F2 antes de F1 | Medium — retrabalho P04/P05 | Sequência autorizada F1→F2 registrada no veredito |
| Afirmar causalidade E08 sem método | High — claim inválido | E08 isolada em F4 com baseline/cohort/holdout/ledger |

## Open Questions
- Dono LGPD/DPO para aprovação E20 já designado? (precisa nomear antes de F1 done)
- Dataset sintético para testes F1 já disponível em `01-work/dados-tech-financas/refinamento-modelo-dados/`?

## Parallelization Opportunities
- **Seguro paralelizar (após Task 1):** Task 2 (E02) || Task 3 (E20) — tocam seções distintas do mesmo doc mas em modo revisão (sem edição concorrente no mesmo bloco); alternativamente, cada agente produz relatório de revisão em arquivo separado e consolidador integra.
- **Sequencial:** Task 4 (E01) após Task 2; Task 5 após 1–4.
- **Coordenação:** Veredito (Task 5) define contrato antes de F1 físico.

## Verification (global)
- [ ] Every task has acceptance criteria — yes
- [ ] Every task has verification step — yes
- [ ] Dependencies ordered correctly — yes (Task1 → Task2/3 → Task4 → Task5)
- [ ] No task touches more than ~5 files — yes
- [ ] Checkpoints exist — yes (after Task5)
- [ ] Human reviewed plan — pending (this file)

