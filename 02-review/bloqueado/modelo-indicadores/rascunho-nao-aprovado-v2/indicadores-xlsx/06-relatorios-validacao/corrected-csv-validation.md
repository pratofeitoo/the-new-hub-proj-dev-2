# Validação do CSV corrigido — Fase 6

**Execução:** `run-02-execution`
**Escopo:** `03-csv-corrigido/` e registros de correção; a camada de origem foi somente leitura.
**Decisão:** **REJEITADO — o portão de reconstrução permanece fechado aguardando execução de evidências e aprovações.**

## Inventário determinístico

- Foram encontradas 15 abas de origem e 15 abas corrigidas no manifesto CSV. O workbook reconstruído contém 16 worksheets visíveis: essas 15 abas funcionais mais `00_DRAFT_NOTICE` (folha de aviso, não oculta/helper de dados).
- Contagens de linhas corrigidas (linhas de dados após o preâmbulo de título/cabeçalho): nós 25, indicadores 73, dicionário 41, eventos 27, integrações 15, governança 23, roadmap 5, RACI 20.
- A camada corrigida é byte-idêntica à origem para 00–07 e 13. As abas 08, 09, 10, 11, 12 e 14 diferem da origem e são, portanto, tratadas como artefatos corrigidos, não cópias literais.
- `corrections.csv` tem 10 linhas de problemas cobrindo todas as seis abas divergentes mais registros consolidados de bloqueadores. Cada valor alterado possui CSV/linha/coluna de origem, ponteiro de evidência, severidade e status.

## Verificações

| Verificação | Resultado | Evidência / link do problema |
|---|---:|---|
| Inventário e contagens das abas de origem/corrigidas | APROVADO (15/15 abas presentes; 8/15 idênticas) | `03-csv-corrigido/00-manifest/manifest.csv`; desvios exigem `CORR-REG-001` (registro em nível de linha ausente) |
| Cabeçalhos obrigatórios | APROVADO para metadados centrais e operacionais | Metadados de eventos completos 27/27; metadados de dependência/publicação de integrações completos 15/15; campos de limiar/janela/teste de governança completos 23/23. Evidência contratual registrada; artefatos de execução permanecem pendentes. |
| IDs duplicados/ausentes | APROVADO | Nós: 25 IDs, 0 em branco, 0 duplicados. Indicadores: 73 IDs, 0 em branco, 0 duplicados. |
| Chaves estrangeiras / referências de entidade | APROVADO com exceção de cobertura | Cruzamento de entidades: 45/45 verificados, 0 não resolvidos. Referências relacionais estão sintaticamente populadas; metadados operacionais de eventos/integrações permanecem incompletos (`CORR-REG-002`). |
| Nomes canônicos e cruzamento de chaves | APROVADO | `entity-key-crosswalk.csv`: 45 linhas, 45 `verified`, 45 `unchanged`, 0 sem chave/status canônico. `event-integration-crosswalk.csv`: 42 linhas, 42 `verified`, 0 não resolvidos. |
| Cobertura de propriedades de eventos | APROVADO com exceção de evidência | 27 linhas de eventos; schema/versão, ingestão, idempotência e proveniência completos 27/27. Evidência de schema JSON e de execução ponta a ponta permanece pendente sob `CORR-REG-002`. |
| Cobertura de chaves de integração | APROVADO com exceção de evidência | 15 linhas de integrações têm chaves e contratos de dependência/publicação completos 15/15. Evidência de execução de prontidão/reconciliação permanece pendente sob `CORR-REG-002`. |
| Cobertura de responsáveis | APROVADO | Indicadores 73/73; integrações 15/15; governança 23/23; roadmap 5/5; RACI 20/20 possuem valores de owner/primário-A. |
| Cobertura de sensibilidade/base legal/retenção | APROVADO com exceção de evidência | O dicionário tem 41/41 valores de sensibilidade, base legal e retenção. Os controles de governança têm contratos explícitos de limiar/janela/teste 23/23; evidência de execução de exclusão/acesso e aprovações permanecem pendentes sob `CORR-REG-003`. |
| Cobertura de entradas de fórmulas | APROVADO | Indicadores 73/73 têm fórmula não vazia e mínimo de origem; cruzamento 73/73 tem campos de definição/origem/fórmula. |
| Benefícios financeiros duplicados | APROVADO com ressalva de governança | Sem IDs de indicadores duplicados ou IDs de cruzamento duplicados (73/73). O registro de ROI tem 24 premissas ilustrativas; nenhuma premissa é certificada por evidência. `CORR-REG-004` deve permanecer aberto até que o responsável pelas evidências do cliente aprove. |
| Dependências do roadmap | APROVADO com exceção de aprovação | O roadmap tem 5 linhas com contratos mensuráveis de evidência de dependência/saída. `roadmap-raci-register.csv` mantém 12 linhas propostas (6 críticas, 6 altas) aguardando aprovação respaldada por evidência sob `CORR-REG-005`. |

## Regra do portão

Nenhuma verificação reprovada permanece para metadados obrigatórios, mas a execução de evidências e o status de aprovação não estão completos. A remediação de metadados de `CORR-REG-001` está completa com validação pendente; `CORR-REG-002` e `CORR-REG-003` exigem evidências operacionais; `CORR-REG-004` permanece explicitamente ilustrativo aguardando aprovação do cliente; e `CORR-REG-005` permanece proposto aguardando aprovação respaldada por evidência. Consequentemente, a aprovação é rejeitada. Nenhuma reconstrução de workbook pode começar.

## Reprodução

Leia cada CSV com suporte a BOM UTF-8; identifique a primeira linha cuja primeira célula é o cabeçalho da tabela; conte os registros não vazios seguintes; conte IDs duplicados/em branco; compare SHA-256 entre corrigido/origem usando os caminhos em `00-manifest/manifest.csv`; e conte células de metadados obrigatórios em branco. O registro legível por máquina resultante é `csv-corrigido-validation.json`.
