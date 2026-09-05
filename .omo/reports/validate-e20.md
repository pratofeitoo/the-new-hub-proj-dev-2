# Validação E20 — Consentimento ternário + revogação LGPD

**Escopo:** contratos Fundação F1 E20, matriz Dados–Finalidade P03-T08 e modelo lógico/físico P03-T01 (N24/FLD-024–026).  
**Resultado:** **FAIL — bloqueador para F2**. O contrato descreve os controles necessários, mas a evidência operacional obrigatória (teste ponta a ponta e aprovação LGPD/DPO + Governança) ainda está pendente; os documentos permanecem em rascunho.

## Checklist

| Critério | Resultado | Evidência / lacuna |
|---|---|---|
| Relação ternária `person_id × purpose × consent_id` | **PASS (contratual)** | E20 define a relação e P03-T01 §2 registra `fact_consent` com cardinalidade 1:N por finalidade. |
| Versionamento e estado | **PASS (contratual)** | `version`, `status` (`granted/revoked/expired`), `valid_from/to` e `revogado_em` estão explicitamente exigidos (E20; N24). |
| Chaves e titular | **PARTIAL** | E20 usa `titular_id → dim_person.person_id`, enquanto P03-T01 modela `Consent`/`fact_consent` com `person_id`. Deve haver uma definição física única (alias explícito ou coluna canônica) e constraint que impeça ambiguidade. |
| Bloqueio de sensíveis sem consentimento válido por finalidade | **PASS (regra)** | E20 e N24 bloqueiam leitura/uso/derivação de `FLD-005/006/007`, `FLD-028`, `nome_social` e localização sensível em `fact_person_skill`, `fact_event` e `fact_match`; P03-T08 §3 exige `consent_id + purpose + version` para alta/crítica sensibilidade. |
| FLD-024–026 / rastreabilidade do consentimento | **PARTIAL** | O N24 exige referência e histórico, e P03-T08 exige `purpose` no derivado; não há amostra/constraint física ou evidência publicada demonstrando que cada uso de FLD-024–026 carrega e valida a versão correta do consentimento. |
| Pipeline `consent.revoked → quarantine` em ≤5 min | **FAIL (evidência)** | O fluxo e a fila `quarantine` estão especificados, mas o teste obrigatório está unchecked em P03-T08 §7 (`06-relatorios-validacao/`). Não há medição de latência nem resultado para `fact_person_skill`, `fact_event`, `fact_match` e demais derivados. |
| CMP log auditável + propagation test | **FAIL (evidência)** | Requeridos pelo E20/P03-T08, porém o teste e a aprovação conjunta continuam pendentes (`DAT-008` aberto). |
| Retenção | **PASS (regra; confirmar implementação)** | Vault: 60 meses; analítico: 24–36 meses; audit: 60 meses append-only. P03-T08 também explicita 36 meses para fatos operacionais e 60 meses para a trilha de auditoria. |
| DSAR / exclusão | **PASS (cobertura declarada)** | Exporta `person_id + aliases + consent`; exclusão cobre `identity_alias`, `dim_*`, `fact_*`, features, caches, índices, backups e exports parceiros. Agregados não removíveis exigem anonimização e risco residual documentado. |
| Gate LGPD/DPO antes de F2 | **FAIL (gate não satisfeito)** | E20 §Aceite exige teste ≤5 min e aprovação conjunta LGPD + Governança Dados; E20 §Liberação F2 impede abertura sem isso. P03-T08 registra ambos os pareceres como “Refinar com condições” e `DAT-008` aberto. |

## Gaps bloqueadores

1. Executar e arquivar o teste E2E `consent.revoked → fact_event quarantine` em até 5 minutos, incluindo `fact_person_skill`, `fact_match`, métricas, modelos, caches e exports parceiros.
2. Emitir evidência do CMP log (correlation/idempotency, timestamp de revogação, propagação e destino quarantine) e repetir o teste para demonstrar propagação efetiva, não apenas a regra documental.
3. Resolver a divergência `titular_id` vs `person_id` no modelo físico, com FK/unique/checks para a relação ternária e intervalo temporal (`valid_from < valid_to`, `revogado_em` coerente com `status`).
4. Demonstrar validação de finalidade e versão nos usos de FLD-024–026 e nos campos sensíveis derivados; ausência de consentimento válido deve bloquear leitura, escrita/uso e derivação.
5. Obter aprovação formal LGPD/DPO e Governança Dados, registrar em `00-project-control/decisoes/DEC-P03-T08.md`, e somente então liberar F2.

## Veredito

**FAIL / F2 bloqueado.** A especificação cobre a intenção e a maior parte do contrato, mas não há evidência de execução do propagation test nem aprovação do gate LGPD/DPO. Não alterar `03-approved` ou `02-review`; promover somente após fechar os gaps acima.
