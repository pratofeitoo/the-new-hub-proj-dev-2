# Reconciliação da Fonte Aprovada — Plano de Implementação

> **For agentic workers:** executar as tarefas em ordem e verificar cada lote antes do próximo.

**Goal:** alinhar os artefatos de trabalho de dados, tecnologia e finanças às regras aprovadas por meio de um único crosswalk auditável.
**Architecture:** a fonte em `03-approved` permanece imutável. Um documento de reconciliação em `01-work` concentra as decisões; os documentos de trabalho referenciam essa tabela e adotam suas regras sem promover status.
**Tech Stack:** Markdown, links Obsidian, buscas estruturais com `rg`/`git diff`.
**Assumptions:** a validação é documental; não pressupõe banco, runtime, dados reais ou execução de testes.

## Arquivos

- Criar `docs/specs/2026-09-05-reconciliacao-fonte-aprovada-design.md` — design aprovado.
- Criar `01-work/dados-tech-financas/refinamento-modelo-dados/reconciliacao-fonte-aprovada-P03-v1.md` — tabela única.
- Modificar os documentos de catálogo, modelo lógico/físico, mapping, estados, glossário, premissas, finalidade, linhagem e README.

## Tarefas

### Tarefa 1 — Crosswalk canônico

- Criar a tabela com decisões para terminologia, estados, indicadores, entidades, Person–Company, FLDs, evidência e números financeiros.
- Registrar os arquivos afetados e o estado de verificação de cada regra.

### Tarefa 2 — Terminologia e estados

- Trocar `Receita potencial perdida` por `Receita disponível perdida` nos artefatos técnicos.
- Documentar o mapeamento oito-status → quatro-estados.
- Atualizar premissas para usar os quatro estados técnicos sem declarar validação financeira.

### Tarefa 3 — Schema e namespaces

- Tornar `rel_person_company` a autoridade do vínculo temporal.
- Rebaixar `dim_person.company_id` a projeção legada/derivada, sem FK canônica.
- Distinguir 73 indicadores de blueprint, 16 KPIs governados, 25 entidades canônicas e N26 operacional.
- Explicar as camadas de contagem de campos.

### Tarefa 4 — Evidências

- Remover alegações de teste/PASS sem artefato executado.
- Manter templates como SPEC e registrar referências ausentes como pendência.

### Tarefa 5 — Verificação

- Pesquisar termos antigos e relações diretas proibidas.
- Confirmar que a fonte aprovada não foi modificada.
- Inspecionar `git diff` e executar validações Markdown estruturais.
