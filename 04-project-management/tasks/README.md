# Arquitetura de Tarefas do Blueprint

O arquivo [`HUB_Blueprint_Tasks.base`](HUB_Project_Tasks.base) é a visualização centralizada do Obsidian Bases para as notas de tarefas blueprint-document desta pasta.

Cada tarefa é uma nota Markdown com frontmatter YAML. O frontmatter são os metadados estruturados da tarefa; o corpo contém o objetivo da tarefa, o conteúdo exigido e os critérios de conclusão.

## Conjunto atual de tarefas

- `BP-001` — Arquitetura de Ofertas e Receita
- `BP-002` — Blueprint de Produto e Capacidades
- `BP-003` — Blueprint de Dados e Inteligência
- `BP-004` — Blueprint de Arquitetura de Tecnologia
- `BP-005` — Blueprint de Modelo Operacional
- `BP-006` — Blueprint de Governança e Jurídico
- `BP-007` — Blueprint de Marca e Mercado
- `BP-008` — Blueprint de Lançamento e Evolução

## Propriedades exigidas das notas de tarefa

- `task_id`
- `task_type`
- `status`
- `priority`
- `layer`
- `area`
- `sequence`
- `owner`
- `target_file`
- `dependencies`
- `gap_ids`
- `related_notes`

As tarefas do Blueprint devem definir conceitos e premissas sem apresentá-los como validados, aprovados ou prontos para lançamento. Os IDs de gap relevantes devem ser atualizados conforme a tarefa evolui.
