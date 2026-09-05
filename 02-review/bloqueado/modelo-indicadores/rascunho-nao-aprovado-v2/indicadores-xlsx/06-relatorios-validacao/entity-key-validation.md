# Fase 3 — validação de entidades, chaves, eventos e integrações

## Escopo e decisão

- Insumos inspecionados: cópias corrigidas das abas `02_Nos_de_Dados`, `03_Conexoes`, `08_Dicionario_Dados`, `09_Eventos_Produto` e `10_Integracoes`.
- Saídas: `04-registro-correcoes/entity-key-crosswalk.csv` e `04-registro-correcoes/event-integration-crosswalk.csv`.
- `corrections.csv` permanece apenas com cabeçalho. Nenhum CSV corrigido foi alterado porque não existe correção aprovada. Portanto, os identificadores técnicos são preservados.
- O status de cruzamento `verified` significa que o identificador/nome de origem e a forma do contrato estão representados. Ele **não** afirma que o mapeamento do sistema externo está provisionado.

## Verificações determinísticas

| Verificação | Resultado | Evidência / regra |
|---|---|---|
| Nomes canônicos de entidades | APROVADO | 25 linhas `N01`–`N25`; nenhum `canonical_name` duplicado; cada ID de nó de origem aparece uma vez. |
| Identidade de relacionamentos | APROVADO | 20 linhas `E01`–`E20`; cada relacionamento tem chave-ponte estável, cardinalidade e requisito temporal. |
| Cobertura de destinos de chaves estrangeiras | APROVADO (declarado) | As PKs do dicionário (`person_id`, `company_id`, `entity_id`, `skill_id`, `assessment_id`, `event_id`, `opportunity_id`, `match_id`, `model_version_id`, `participation_id`, `contract_id`, `metric_id`, `cohort_id`) estão representadas por mapeamentos canônicos. `object_id` permanece polimórfico de domínio e exige validação de catálogo em tempo de execução. |
| Identidade/idempotência de eventos | APROVADO (contrato) | 27 linhas de eventos; toda linha exige `event_id` e uma regra de dedupe. `occurred_at` é UTC; a proveniência da ingestão é explícita. |
| Cobertura de chaves de integração | APROVADO (contrato) | 15 linhas de integrações; toda origem tem chave de integração, autenticação, SLA, tratamento de retry/erro, caminho de quarentena ou reconciliação. |
| Rastreabilidade dos registros | APROVADO | Toda linha de cruzamento tem `decision=unchanged`, `status=verified` e um `correction_issue_id` vazio; isso é consistente com o `corrections.csv` apenas com cabeçalho. |
| Imutabilidade da origem | APROVADO | Somente arquivos sob `run-02-execution/30-models/indicadores-xlsx/` e o log de execução append-only estão no escopo; `run-01-source/` era somente leitura. |

## Valores não resolvidos (explícitos; não inventar mapeamentos)

1. IDs externos são placeholders contratuais, não mapeamentos confirmados de produção: `HRIS.person_external_id`, IDs de provedores CRM/ATS/SRM/LMS/BI/GRC/ERP e identificadores CMP exigem confirmação do dono do sistema.
2. `dim_supplier`, `dim_program`, `dim_evidence`, `dim_recommendation`, `dim_benchmark`, `dim_risk`, `dim_content`, `dim_consent` e os schemas físicos das tabelas-ponte são referenciados pelo modelo de entidades, mas não estão presentes como linhas na aba 08. Permanecem como alvos de implementação não resolvidos.
3. `fact_transaction` não tem linha explícita de `transaction_id` na aba 08, embora seja a chave canônica do nó nas abas 02 e 10 (integrações). Adicione o campo ao dicionário somente por meio de um registro de correção aprovado separadamente.
4. `fact_business_metric` usa `metric_id` enquanto o nó canônico usa `business_metric_id`; isso é preservado como terminologia da origem. Uma futura decisão de alias deve ser registrada antes de qualquer edição de CSV.
5. `object_id` é polimórfico na aba 08; a validação em tempo de execução deve resolver `object_type + object_id` contra o catálogo de domínio.
6. Os valores de auth, SLA e retry são contratos declarados da aba 10; credenciais, URLs de endpoints, latência medida e orçamentos de retry não foram fornecidos.

## Próximo portão

O lead pode prosseguir para a correção de indicadores/financeira e a validação entre abas. Antes da reconstrução do workbook, obtenha mapeamentos de chaves externas aprovados pelos responsáveis e resolva as lacunas do dicionário acima por meio de novos registros de correção; não renomeie silenciosamente campos da origem.
