---
title: Matriz Dados-Finalidade + Ciclo Vida v1 — P03-T08 (G03.C4 parcial)
task_id: P03-T08
phase: P03
status: em-revisao
gap_id: DAT-008
owner: PF Rezende (interino Dados/Jurídico LGPD)
blocked_until: 2026-10-10
legal_review: pendente — nomeação Jurídico LGPD/DPO
created: 2026-08-29
source_task: "[[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade]]"
tags:
  - refinement
  - P03
  - DAT-008
---

# Matriz Dados-Finalidade + Ciclo Vida v1 — P03-T08 (G03.C4 parcial)

> **Status:** em-revisão para LGPD/Governança · **G03.C4 parcial** · Esta matriz é evidência de escopo e desenho para decisão Camada 3; não é aprovação legal nem liberação de produção.
> **Depende de:** [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|modelo-logico-fisico-P03-T01-v1]] — 25 entidades; [[01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|dicionario-fisico-mapping-P03-T04-v1]] — 41 campos.

> **Escopo piloto SEBRAE (28/10):** somente as 12 entidades mínimas listadas em `spine-piloto-minimo-v1.md` §1. As regras abaixo são um recorte operacional/manual e não promovem a cobertura full. A cobertura completa permanece **deferred**: 5 fluxos × 41 campos, automação de DSAR/quarentena e execução dos testes dependem de validação posterior.

## 1. Fluxos de lançamento cobertos

| Fluxo | Finalidade primária | Base legal | Dados pessoais envolvidos |
|---|---|---|---|
| Onboarding + Consentimento | Gestão consentimento e finalidade | Consentimento | `person_id`, `consent_id`, `purpose` |
| Diagnóstico + Jornada | Execução serviço | Execução contrato | `person_id`, `company_id`, `skill_id`, `assessment_id` |
| Matching + Introdução | Execução serviço / legítimo interesse | Execução contrato | `person_id`, `match_id`, `opportunity_id` |
| Medição + Dashboard | Métrica anonimizada | Legítimo interesse + consentimento quando sensível | `metric_id`, `cohort_id`, `participation_id` (pseudônimo) |
| Comercial (Contrato/Transação) | Execução contrato | Execução contrato | `contract_id`, `transaction_id`, `company_id` |

## 2. Matriz — campo → finalidade → base legal → retenção → propagação → exclusão

> Os prazos de retenção abaixo são propostas de desenho. A fonte aprovada exige política por finalidade, retenção e exclusão, mas não fixa estes prazos globais; aprovação LGPD/Finanças permanece pendente.

### 2.1 Identidade canônica do titular

O titular é sempre identificado por `person_id`, com FK para `dim_person.person_id`. `titular_id` ≡ `person_id` é somente um alias legado de documentação/integração; não é uma coluna ou chave concorrente. A coluna física canônica é `fact_consent.person_id`, em conjunto com `consent_id` e `purpose` para representar o consentimento ternário.

| Tabela.Campo | Finalidade | Base legal | Retenção | Propagação consentimento | Exclusão / DSAR | Evidência |
|---|---|---|---|---|---|---|
| dim_person.person_id | Identificação pseudônima | Execução contrato / consentimento | prazo por finalidade a validar | revogação bloqueia novos usos <=5 min; propaga para `fact_person_skill`, `fact_event`, derivados | vault + alias preservado pseudônimo; DSAR exporta `person_id` + aliases |
| dim_person.company_id | Vínculo vigente (projeção legada/derivada) | Execução serviço | prazo por finalidade/contrato a validar | purpose-scoped; não propaga sem finalidade | `rel_person_company.valid_to` encerra vínculo; sem FK canônica |
| dim_person.consent_status | Controle finalidade | Consentimento / obrigação legal | enquanto necessário, sujeito a política aprovada | **propaga para todo derivado:** `fact_person_skill`, `fact_event`, métricas, modelos, caches, exports parceiros | revogação `valid_to = revoked_at`; fila bloqueada <=5 min; `CMP log + propagation test` |
| dim_person.profile_segment | Personalização | Legítimo interesse | TTL analítico a validar | não sensível; sem propagação crítica | anonimizado após TTL aprovado |
| dim_company.company_id | Identificação organização | Execução contrato | prazo por finalidade/contrato a validar | não pessoal; controle acesso por tenant | `company_id` retido para ledger conforme obrigação aplicável |
| fact_person_skill.* | Avaliação competência | Execução serviço | prazo após evento a validar | consentimento aplicável; `evidence_id` propaga finalidade | token only; revogação bloqueia novos cálculos |
| fact_event.event_id | Auditoria | Execução contrato / obrigação legal | prazo de auditoria a validar | `consent_ref` propaga; `purpose` acompanha derivado | audit append-only; minimizado após exclusão |
| fact_match.match_id | Recomendação | Execução serviço | prazo após `expires_at` a validar | opt-in `purpose=matching`; revogação invalida ranking | `match_id` mantido mas `confidence` anonimizado |
| fact_contract.contract_id | Prova contratual | Execução contrato | prazo contratual/fiscal a validar | não depende de consentimento isolado | contrato retido; dados pessoais minimizados |
| fact_transaction.transaction_id | Financeiro | Execução contrato / obrigação legal | prazo fiscal a validar | idem | ledger imutável; DSAR não apaga transação fiscal |

> **41 campos completos** em `08_Dicionario_Dados.csv` seguem a mesma regra; a tabela acima exemplifica famílias. O registro de retenção continua sendo uma proposta para aprovação por finalidade.

### 2.2 Recorte explícito — 12 entidades/campos do piloto SEBRAE

Esta tabela congela o recorte mínimo do piloto. Cada linha representa a entidade e os campos mínimos efetivamente previstos; campos adicionais do dicionário de 41 ficam fora do piloto.

| # | Entidade piloto | Campos mínimos no piloto | Finalidade | Base legal em revisão | Retenção / exclusão | Evidência operacional |
|---:|---|---|---|---|---|---|
| 1 | `fornecedor` | `fornecedor_id`, `cnpj` opcional, `nome_fantasia`, `contato`, `segmento` | Identificar fornecedor e oferta | Consentimento na inscrição; cooperação técnica | Vault até 27/01/2027; exclusão/anonimização após o prazo ou DSAR | inscrição + planilha DSAR |
| 2 | `comprador` | `comprador_id`, `contato`, `necessidade` | Identificar demanda do comprador | Consentimento; cooperação técnica | TTL até 27/01/2027; excluir/anonimizar por solicitação | lista de convidados + DSAR manual |
| 3 | `oportunidade` | `oportunidade_id`, `comprador_id`, `descricao`, `janela` | Registrar demanda para curadoria | Execução da cooperação; consentimento quando pessoal | 36 meses após encerramento; excluir PII e preservar agregado anonimizado | registro de oportunidade |
| 4 | `inscricao` | `inscricao_id`, `fornecedor_id`, `evento_id`, `occurred_at` | Registrar adesão ao evento | Consentimento (inscrição) | Até 27/01/2027; apagar/anonimizar após DSAR | formulário + histórico |
| 5 | `diagnostico` | `diagnostico_id`, `fornecedor_id`, `maturidade`, `lacuna`, `valid_from/to` | Avaliar prontidão e lacunas | Consentimento; execução da cooperação | 36 meses; quarentenar derivado revogado e excluir/anonimizar | diagnóstico + `consent_id` |
| 6 | `match` | `match_id`, `fornecedor_id`, `oportunidade_id`, `responsavel_curadoria` | Curadoria fornecedor–demanda | Consentimento `purpose=matching` | 36 meses após `expires_at`; invalidar e quarentenar ao revogar | match-log manual |
| 7 | `reuniao` | `reuniao_id`, `match_id`, `occurred_at`, `status` | Registrar introdução/reunião | Execução da cooperação; consentimento para contato | 36 meses; remover PII em DSAR | reunião-log manual |
| 8 | `proposta` | `proposta_id`, `reuniao_id`, `valor_proposto`, `enviada` | Acompanhar proposta comercial | Execução de contrato/cooperação | 60 meses se obrigação contratual; minimizar no DSAR | proposta-contrato-log |
| 9 | `contrato` | `contrato_id`, `proposta_id`, `assinado` | Provar contratação | Execução contrato; obrigação legal quando aplicável | 60 meses/obrigação legal; minimizar, não apagar ledger exigido | proposta-contrato-log |
| 10 | `receita_reportada` | `receita_id`, `contrato_id`, `valor_reportado`, `moeda` | Medir resultado econômico reportado | Execução contrato/cooperação | 60 meses quando fiscal; anonimizar agregado não fiscal | receita-reportada |
| 11 | `consentimento` | `consentimento_id`, `fornecedor_id`, `purpose`, `version`, `status`, `valid_from/to` | Registrar autorização granular e revogação | Consentimento | Retenção compatível com auditoria; registrar revogação e restringir uso | CMP log (rascunho) |
| 12 | `historico_alteracoes` | `alteracao_id`, `entity_ref`, `actor`, `occurred_at`, `recorded_at` | Auditoria mínima das mudanças | Obrigação legal/interesse legítimo | 60 meses, append-only e minimizado | histórico + DSAR manual |

**Regra comum do recorte:** sempre que o campo for dado pessoal, o uso carrega `consent_id` (ou `consentimento_id` no envelope piloto) + `purpose` + `version`. Sem combinação válida, o uso é bloqueado e o registro/derivado é colocado em `quarantine`; no piloto, a fila e a conferência são manuais.

## 3. Propagação consentimento — regra

1. Todo campo com `sensibilidade Alta/Crítica` exige `consent_id` + `purpose` + `version`.
2. Revogação (`consent_status=revoked`) cria evento `consent.revoked` → pipeline bloqueia novos `fact_*` com `purpose` revogado em ≤5 min; derivados já materializados entram em fila `quarantine`.
3. Métricas, modelos, caches, exports parceiros reavaliam `purpose` antes de uso; sem `purpose` válido = `quarantined`.

> **Bloqueio obrigatório por finalidade:** `FLD-024 (consent_id)`, `FLD-025 (purpose)`, `FLD-026 (legal_basis)` e `FLD-005/006/007/028` ficam bloqueados sem consentimento válido para a finalidade solicitada. Cada uso carrega `consent_id + purpose + version` e é validado antes de leitura, uso ou derivação; ausência, expiração ou revogação resulta em `quarantined`.

## 4. Retenção / Exclusão / Portabilidade

| Classe | Período mínimo/máximo | Gatilho | Job ciclo vida | Portabilidade |
|---|---|---|---|---|
| Vault identidade | 60 meses | contrato + obrigação legal | `lifecycle_job` com `valid_to` | exporta `person_id` + aliases + `consent` |
| Analítico | 24–36 meses | `purpose` TTL | anonimização após TTL | não exporta |
| Audit | 60 meses | obrigação legal | append-only, minimizado | tipo evento + autorização (sem dado sensível) |

Exclusão abrange `identity_alias`, `dim_*`, `fact_*`, features, caches, índices, backups, exports parceiros; quando agregado compartilhado não pode ser excluído, documenta anonimização + risco residual (LGPD).

### 4.1 Operação manual de DSAR no piloto

Até existir automação full, o owner registra cada solicitação em planilha controlada e usa `identity_alias`/`fornecedor_id` para localizar o titular:

| Solicitação | Procedimento piloto | Resultado/evidência |
|---|---|---|
| **Acesso** | localizar aliases e as 12 entidades; exportar dados, consentimentos e participações com `provenance` | planilha DSAR + export estruturado + data/owner |
| **Exclusão** | bloquear novos usos, marcar derivados como `quarantine`, remover/anonimizar os registros permitidos e registrar exceções legais | checklist de exclusão + IDs de quarentena + justificativa |
| **Portabilidade** | exportar os dados do titular em formato estruturado (CSV/JSON), com campos e proveniência | arquivo de portabilidade + checksum/data |

O atendimento manual não comprova SLA automatizado: a propagação `consent.revoked` deve ser observada contra o limite de **≤5 min** no teste, enquanto a execução ponta a ponta permanece pendente.

## 5. Dados derivados — regras

- Agregação não remove obrigação; `derived_artifact` registra `source_event_ids` + `purpose`.
- Reidentificação avaliada; risco > limiar = `restricted`.

## 6. Parecer LGPD (insumo Camada 3)

| Função | Parecer | Condição |
|---|---|---|
| **Jurídico/LGPD** | Refinar com condições | Validar propagação ≤5 min em `fact_person_skill`, `fact_event`, métricas, modelos e exports parceiros; teste `propagation test` antes de G03.C4 |
| **Governança Dados** | Refinar com condições | Confirmar `purpose` por campo + `valid_from/to` histórico auditável; `DAT-008` aberto até teste ponta a ponta |

> Ambos `Refinar com condições` — `DAT-008` permanece aberto.

## 7. Pendências G03.C4

- [ ] Executar o **propagation test** ponta a ponta `consent.revoked → quarantine` conforme o SPEC [[01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/propagation-test-E20-v1|propagation-test-E20-v1]] (rascunho/SPEC de desenho; não é aprovação).
- [ ] Executar e preencher o log CMP conforme o SPEC [[01-work/dados-tech-financas/refinamento-modelo-dados/06-relatorios-validacao/CMP-log-E20-v1|CMP-log-E20-v1]] (rascunho/SPEC de desenho; não é evidência executada).
- [ ] Aprovação conjunta LGPD+Gov Dados deste mapa em `00-project-control/decisoes/DEC-P03-T08.md`.

> **Piloto versus full:** O piloto pode operar somente com as 12 entidades/campos da §2.2, retenção mínima, quarentena manual, CMP log em rascunho e DSAR manual de acesso/exclusão/portabilidade. A plataforma full continua deferred (5×41 campos, propagação automatizada para todos os destinos, quarentena automática, CMP log executado e DSAR automatizado) e não é promovida por este documento.

## 8. Rastreabilidade

- Tarefa: [[04-project-management/tarefas/P03-T08_Matriz_Dados_Finalidade|P03-T08]]
- Gap: [[00-project-control/registro-lacunas/lacunas/DAT-008]]
- Dicionário: [[01-work/dados-tech-financas/refinamento-modelo-dados/dicionario-fisico-mapping-P03-T04-v1|P03-T04 v1]] — 41 campos
- Modelo: [[01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1|P03-T01 v1]] — `valid_from/to`
