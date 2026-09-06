# Design — Reconciliação da Fonte Aprovada com Dados, Tech e Finanças

## Objetivo

Criar uma reconciliação única, auditável e orientadora para alinhar os artefatos em `01-work/dados-tech-financas` à fonte imutável em `03-approved/nucleo-inteligencia`, sem editar a fonte aprovada.

## Escopo

- Registrar em uma tabela única as regras aprovadas, conflitos encontrados, decisão canônica e arquivos afetados.
- Normalizar vocabulário financeiro, estados de valor, namespaces de indicadores e regras Person–Company.
- Separar entidades canônicas, entidades operacionais, FLDs canônicos, campos físicos e indicadores de blueprint.
- Corrigir alegações de validação que não possuem evidência executada.

## Fora de escopo

- Alterar qualquer arquivo em `03-approved/`.
- Executar banco, pipeline, teste de propagação, teste físico E01 ou recalcular ROI.
- Promover qualquer artefato de `01-work/` para revisão/aprovação.

## Decisões

1. `Receita disponível perdida` é o nome técnico aprovado; aliases anteriores permanecem apenas em notas de compatibilidade.
2. Os oito status conceituais da especificação são mapeados explicitamente aos quatro estados operacionais do ledger.
3. `rel_person_company` é a relação autoritativa temporal; `dim_person.company_id` só pode existir como projeção legada/derivada, nunca como FK canônica.
4. Os 73 indicadores são inventário de blueprint; os 16 KPIs da planilha são o catálogo técnico governado.
5. `N26 Decision` é entidade operacional adicional, não altera a contagem das 25 entidades canônicas.
6. Valores, thresholds e retenções sem evidência/aprovação são marcados como proposta, hipótese ou não verificado.
7. Contagens de campos são rotuladas por camada: 47 FLDs canônicos, campos físicos detalhados e linhas-base do CSV.

## Verificação

A verificação será documental e estrutural: links e referências serão conferidos, termos conflitantes serão pesquisados, e o diff final será comparado com as regras e contagens da fonte aprovada. Nenhuma validação operacional será declarada como executada.

## Falhas consideradas

- A tabela de reconciliação virar uma segunda fonte de verdade: evitado declarando-a como crosswalk de trabalho e mantendo `03-approved` como autoridade.
- A normalização apagar distinções úteis: evitado preservando aliases, provenance e status de rascunho.
- Um template ser interpretado como evidência: evitado substituindo PASS não comprovado por `pendente`/`não verificado`.
