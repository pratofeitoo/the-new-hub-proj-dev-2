# Registro de correções

Registro controlado das correções semânticas aplicadas à camada canônica dos indicadores. Nesta fase, `corrections.csv` contém apenas o cabeçalho: nenhuma correção semântica foi aplicada.

## Colunas obrigatórias

| Coluna | Uso |
|---|---|
| `issue_id` | Identificador estável da ocorrência. |
| `source_csv` | Caminho do CSV imutável de origem. |
| `source_row` | Número da linha de origem (cabeçalho = 1). |
| `source_column` | Nome da coluna de origem. |
| `category` | Categoria controlada da correção. |
| `original_value` | Valor observado na origem. |
| `corrected_value` | Valor proposto/aprovado. |
| `evidencias` | Evidência que sustenta a correção. |
| `dependency_impact` | Impacto em dependências. |
| `severity` | Gravidade para priorização. |
| `status` | Estado do fluxo de revisão. |
| `reviewer` | Responsável pela revisão. |
| `approved_at` | Data/hora da aprovação, quando aplicável. |

## Valores permitidos

Categorias: `terminology`, `key`, `schema`, `formula`, `unit`, `ownership`, `governanca`, `integration`, `roadmap`, `duplication`, `evidencias`.

Status: `proposed`, `aprovado`, `rejeitado`, `superado`.

## Regras de controle

- Cada correção deve apontar para CSV, linha, coluna e evidência verificáveis.
- `source_row`, `source_column`, `severity` e `status` não podem ficar vazios em correções registradas.
- Uma cópia em `03-csv-corrigido/` só pode divergir após o registro correspondente existir aqui. Nesta fase, todas as 15 cópias são byte-a-byte idênticas às fontes.
- `run-01-source/` é somente leitura.
