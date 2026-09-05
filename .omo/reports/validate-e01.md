# Validação E01 — vínculo Pessoa–Empresa temporal

**Escopo:** contrato fundacional F1 E01, P03-T01 (modelo lógico/físico) e P03-T03 (envelope de eventos).  
**Resultado:** **FAIL — contrato conceitualmente alinhado, porém sem evidência/constraints suficientes para aceite A2–A3.**

## Resumo do contrato

E01 modela o vínculo laboral como `Relationship`, materializado em `rel_person_company`, com `relationship_id` estável, pessoa e empresa como FKs, `relationship_type=employment`, vigência temporal e histórico append-only. Admissão abre uma linha e desligamento encerra-a; eventos `relationship.started/ended` e `provenance_ref` dão rastreabilidade. O contrato limita o escopo: A1 (`REL-03`) é parcial, A2 requer validação de chave/temporalidade e A3 requer aceite ou devolução registrada.

## Checklist de aceitação

| Critério | Status | Evidência / observação |
|---|---|---|
| `relationship_id` é PK | **PASS conceitual / PENDENTE físico** | Contrato E01 declara PK (linhas 53–57); P03-T01 também mostra PK no diagrama (linha 130), mas declara as constraints físicas como pendência (linha 161). |
| FKs `person_id` e `company_id` | **PASS conceitual / PENDENTE físico** | Contrato aponta `dim_person`/`dim_company`; P03-T01 repete ambos (linhas 66–69). Não há DDL, teste de órfãos ou evidência de constraint aplicada. |
| `relationship_type=employment` | **PASS conceitual** | Declarado no contrato e na relação P03-T01 (linhas 57, 68). Enum/check físico ainda não demonstrado. |
| `valid_from`/`valid_to` obrigatórios | **PARTIAL** | Ambos os artefatos exigem intervalo explícito; P03 define inclusivo/exclusivo e `NULL` como vigente (linhas 92–99). Porém o P03 ainda pede check/constraints físicos e não prova amostra válida/inválida. |
| `manager_id` pertence ao vínculo | **FAIL / gap** | Contrato coloca `manager_id` (FLD-003) no vínculo, mas P03-T01 não o modela em `Relationship`/`rel_person_company` nem define FK/validação de pertencimento. |
| Sem sobreposição incompatível de empregos | **PARTIAL** | Regra é declarada tanto no contrato quanto na relação P03; constraint de exclusão/testes de sobreposição permanece pendente (P03 linha 161). Não há definição de quais tipos/tenants tornam vínculos compatíveis. |
| `tenant_id` em leituras operacionais | **PARTIAL** | Contrato exige `tenant_id + valid_from/to` em toda leitura operacional. P03 estabelece `tenant_id` em toda entidade, mas a especificação da bridge/relação e exemplos de predicado operacional não explicitam o escopo; falta teste de isolamento entre tenants. |
| Admissão abre linha; desligamento fecha linha | **PASS por contrato / sem teste** | Contrato proíbe update in place (linha 59); P03 preserva histórico e exige nova versão em correções (linhas 94–99). Não há fixture ou relatório demonstrando append-only para start/end. |
| `provenance_ref` | **PARTIAL** | Contrato o exige para o vínculo; P03 declara o campo comum às entidades (linha 22), mas não define seu formato, imutabilidade ou ligação aos eventos de relacionamento. |
| Eventos `relationship.started/ended` | **PARTIAL** | Contrato exige os dois eventos com `event_id`, `event_type`, `schema_version`, `occurred_at`. P03-T03 define esses campos no envelope (linhas 20–40), mas seus produtores/fixtures não incluem esses event types (linhas 106–124); não há schema ou teste específico. |
| A1: `REL-03` declarado parcial | **PASS** | Declaração explícita no contrato (linha 61). |
| A2: `relationship_id`/temporalidade reservados e validados em amostra | **FAIL — evidência ausente** | Requisito está escrito, mas nenhum dataset, amostra, resultado de validação ou relatório foi encontrado nos três artefatos; P03 lista criação de constraints/testes como pendência. |
| A3: aceite/devolução registrada no gate | **FAIL — evidência ausente** | O contrato define a exigência, mas os documentos estão em `status: rascunho` e não contêm decisão, aprovador, data, aceite ou devolução efetivamente registrada. |

## Gaps e riscos

1. **Integridade física não fechada:** P03-T01 ainda lista FK, unicidade, `valid_from < valid_to`, não-sobreposição e testes de órfãos como pendências. Portanto a modelagem não pode ser tratada como enforcement operacional.
2. **`manager_id` não tem representação P03:** há inconsistência direta entre E01 e P03. É necessário decidir se é FK para outro `relationship_id`/pessoa e definir a regra temporal/tenant de pertencimento, inclusive auto-gerência e ciclos.
3. **Chave temporal incompleta:** a regra de não-sobreposição não especifica constraint/índice, definição de “incompatível”, nem comportamento de intervalos abertos (`valid_to IS NULL`).
4. **Eventos não cobertos pelo P03-T03:** o envelope é genérico e contém os campos pedidos, mas `relationship.started/ended` não aparecem nos produtores, schemas ou fixtures de teste. Isso impede provar replay, idempotência e correlação para E01.
5. **Proveniência ambígua:** `provenance_ref` do vínculo não é relacionado formalmente ao `source_ref`/`event_id` do envelope. Risco de não conseguir reconstruir a origem de cada abertura/encerramento.
6. **Tenant sem prova de leitura:** `tenant_id` é uma regra geral do P03, mas não há consulta/política/teste que impeça vazamento cross-tenant ao resolver `dim_person.company_id` via vínculo vigente.
7. **Inconsistência interna do P03:** o cabeçalho afirma 26 entidades, mas a tabela numerada termina em 25. Não bloqueia isoladamente E01, mas reduz confiança no inventário e deve ser corrigido antes do aceite do modelo.

## Veredito

**FAIL (devolver para correção/validação).** A decisão de domínio e a convenção temporal estão alinhadas entre E01 e P03-T01, e o envelope P03-T03 contém os quatro campos mínimos de auditoria exigidos. Contudo, `manager_id`, enforcement físico, amostra A2, cobertura de eventos específicos e registro A3 estão ausentes ou incompletos. E01 só deve abrir F2 após: (a) reconciliar `manager_id` no P03, (b) publicar/testar constraints e isolamento por tenant, (c) adicionar schemas/fixtures de `relationship.started/ended`, e (d) registrar aceite ou devolução A3 com evidências.
