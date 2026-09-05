# Validação E02 — Empresa ≠ Cliente ≠ Entidade

**Escopo:** contrato fundacional F1 E02, modelo lógico/físico P03-T01 v1 e dicionário físico P03-T04 v1.  
**Modo:** leitura dos artefatos; nenhuma alteração em `03-approved` ou `02-review`.

## Resumo do contrato

O contrato declara explicitamente que `Company` é identificada por `company_id` e `Entity` por `entity_id`, e que não são o mesmo conceito. `Cliente` não é entidade: é o papel de uma `Company` em `fact_contract` (`company_id` + `contract_id`). O vínculo Company–Entity é uma bridge N:N temporal (`rel_company_entity`); Company–Contract é 1:N. O aceite exige ausência de colisão de IDs, cardinalidade e escopo de tenant validados.

## Checklist de aceite

| Critério | Evidência | Resultado |
|---|---|---|
| Company (`company_id`) ≠ Entity (`entity_id`) explícito | Contrato E02, decisão e regras; P03-T01 lista PKs distintas nas linhas 27–29 | **PASS** |
| Cliente como papel em `fact_contract` | Contrato explicita `fact_contract.company_id` + `contract_id` e “papel cliente” | **PASS, com ressalva física**: P03-T04 lista `fact_contract` sem `company_id` (linha 90–91) |
| PK `dim_company.company_id` | Contrato; P03-T01; P03-T04 linha 63 | **PASS** |
| PK `dim_entity.entity_id` | Contrato; P03-T01; P03-T04 linha 66 | **PASS** |
| FKs de `rel_company_entity` | Contrato e P03-T01 linha 69 nomeiam `company_id`, `entity_id` | **PASS lógico / INCOMPLETO físico**: P03-T04 não mapeia a bridge |
| Company–Entity N:N contratual | Contrato e P03-T01 linha 69 | **PASS** |
| Company–Contract 1:N | Contrato; `fact_contract.company_id` é mencionado | **INCOMPLETO**: a tabela de relacionamentos P03-T01 não registra essa relação/cardinalidade |
| `valid_from/to` | Contrato exige no vínculo; P03-T01 linhas 69, 94–99 e P03-T04 linha 63/66 | **PASS lógico**; constraints físicas ainda pendentes (P03-T01 linha 161) |
| `tenant_id` scoping | Contrato exige tenant em toda linha e leitura/escrita | **INCOMPLETO**: tenant não aparece nos campos físicos de P03-T04 nem em DDL/constraints |
| Auditoria `provenance_ref` + evento | Contrato exige `provenance_ref` e `company_entity.linked/unlinked` em `fact_event`; P03-T01 inclui `provenance_ref` no envelope canônico e evento genérico | **INCOMPLETO**: P03-T04 não demonstra esses campos/eventos nem payload/constraint de provenance |
| `company_id` nunca reutilizado como `entity_id` | Regra explícita no contrato | **PASS como regra declarada**; falta teste/constraint físico dedicado |
| `dim_company.entity_id` somente via rel | Regra explícita no contrato | **FAIL/CONTRADIÇÃO**: P03-T04 linha 64 modela `dim_company.entity_id` como FK direta; diagrama físico P03-T04 linhas 120–121 também mostra ligação direta, enquanto o contrato exige bridge |

## Teste de aceitação proposto (não executado)

Fixture mínima (IDs deliberadamente distintos e tenants distintos):

```sql
INSERT INTO dim_company(company_id, tenant_id) VALUES
  ('c-001', 't-a'), ('c-002', 't-a');
INSERT INTO dim_entity(entity_id, tenant_id) VALUES
  ('e-001', 't-a'), ('e-002', 't-b');
INSERT INTO rel_company_entity
  (company_id, entity_id, tenant_id, valid_from, valid_to, provenance_ref)
VALUES
  ('c-001', 'e-001', 't-a', '2026-01-01', NULL, 'fixture:e02');
INSERT INTO fact_contract
  (contract_id, company_id, tenant_id, valid_from, valid_to)
VALUES
  ('k-001', 'c-001', 't-a', '2026-02-01', NULL),
  ('k-002', 'c-001', 't-a', '2026-03-01', NULL);
```

Assertions:

```sql
-- sem colisão entre domínios
SELECT COUNT(*) = 0 AS no_collision
FROM dim_company c JOIN dim_entity e ON c.company_id = e.entity_id;

-- FKs e tenant: vínculo não pode cruzar tenant nem apontar órfãos
SELECT COUNT(*) = 0 AS valid_links
FROM rel_company_entity r
LEFT JOIN dim_company c ON c.company_id=r.company_id AND c.tenant_id=r.tenant_id
LEFT JOIN dim_entity  e ON e.entity_id=r.entity_id AND e.tenant_id=r.tenant_id
WHERE c.company_id IS NULL OR e.entity_id IS NULL OR r.valid_to IS NOT NULL AND r.valid_from >= r.valid_to;

-- Company–Contract 1:N e cliente somente via company_id
SELECT COUNT(*) = 2 AS two_contracts_for_company
FROM fact_contract WHERE company_id='c-001' AND tenant_id='t-a';

-- tenant isolation: t-a não enxerga entidade t-b
SELECT COUNT(*) = 0 AS isolated
FROM rel_company_entity r JOIN dim_entity e ON e.entity_id=r.entity_id
WHERE r.tenant_id='t-a' AND e.tenant_id <> 't-a';
```

Também deve ser testada a tentativa de inserir `company_id='c-001'` como `entity_id` (deve ser rejeitada por regra/constraint de domínio, ou ao menos falhar no teste de aceite) e a existência dos eventos `company_entity.linked`/`unlinked` com `provenance_ref` no `fact_event`.

## Gaps e riscos

1. **Bloqueador:** desenho físico contradiz o contrato ao tratar `dim_company.entity_id` como FK direta. Isso permite bypass de `rel_company_entity` e torna a bridge não auditável.
2. `fact_contract.company_id` está no contrato, mas ausente do mapping físico detalhado; sem ele, Cliente não é representável como papel.
3. `rel_company_entity` não está no inventário físico P03-T04; PK/unique recomendado (`tenant_id`, `company_id`, `entity_id`, `valid_from`) e FKs precisam ser publicados.
4. `tenant_id`, auditoria e eventos estão declarados genericamente, porém não comprovados no mapping físico. Falta DDL/constraints e evidência de teste.
5. As pendências de constraints físicas de P03-T01 incluem validação de FKs, checks e órfãos; portanto o aceite F1 não é reproduzível apenas com os artefatos atuais.

## Veredito

**FAIL (condicional / não libera E02 para aceite F1).** A separação conceitual e as PKs/cardinalidades do contrato estão corretas, mas há uma contradição física direta (`dim_company.entity_id`), ausência de `fact_contract.company_id` no mapping, e falta de evidência física para tenant/auditoria. Corrigir o mapping para representar `rel_company_entity` como única rota Company–Entity, incluir `company_id` em `fact_contract`, explicitar tenant/provenance/event e executar o teste acima; então reavaliar.
