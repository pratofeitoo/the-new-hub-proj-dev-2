# Arquitetura do Registro de Lacunas

O registro de origem consolidado é [`HUB_Project_Gap_Register.md`](HUB_Project_Gap_Register.md).

Os registros individuais de lacunas com suporte em YAML vivem em [`gaps/`](gaps/), uma nota Markdown por ID de lacuna. O índice centralizado do Obsidian Bases é [`HUB_Project_Gaps.base`](HUB_Project_Gaps.base).

Cada nota de lacuna preserva:

- ID e tipo da lacuna;
- prioridade e status;
- domínio e camada atual/próxima;
- estado atual;
- elemento faltante;
- ação de refinamento;
- condição de aprovação;
- IDs das tarefas de blueprint relacionadas.

A tabela no registro de origem permanece como o registro consolidado legível por humanos. As notas são a camada operacional de nível de propriedade usada pelo Bases.
