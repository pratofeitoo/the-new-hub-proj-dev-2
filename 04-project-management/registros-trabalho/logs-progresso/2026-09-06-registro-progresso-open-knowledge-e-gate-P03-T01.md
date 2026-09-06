---
title: Registro de Progresso — Open Knowledge, Wiki e Gate P03-T01
description: Consolida as discussões, decisões, planos, testes e execução do piloto Open Knowledge realizados em 2026-09-06.
type: log
status: stable
date: 2026-09-06
phase: P03
tags:
  - gestao-projeto
  - open-knowledge
  - wiki
  - gate
  - P03
  - P03-T01
  - dados-canonicos
  - agentes
related_notes:
  - /docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md
  - /specs/p03-t01-gate-folder/PRODUCT.md
  - /docs/plans/2026-09-06-p03-t01-gate-folder-pilot.md
  - /04-project-management/gates/P03-T01/README.md
---
## Registro de Progresso — Open Knowledge, Wiki e Gate P03-T01

> [!abstract] Veredito executivo
> Open Knowledge foi avaliado como uma camada útil para conhecimento de projeto e execução agentiva, desde que não substitua a fonte de verdade existente. O conceito foi convertido em um piloto real: um gate folder para P03-T01 — Modelo Lógico/Físico. O gate foi criado, recebeu templates e artefatos de execução, e terminou **bloqueado para revisão humana** porque o pacote está pronto para handoff, mas a aprovação formal do modelo ainda não existe.

## 1. Objetivo do dia

O objetivo foi entender se Open Knowledge acrescenta valor ao projeto atual e, em caso afirmativo, desenhar e executar um piloto estreito que testasse:

- wiki agentiva sem duplicar a fonte de verdade;
- templates e metadados de pasta como contrato operacional;
- uma pasta capaz de funcionar como checkpoint/gate para agentes;
- redução de exploração desnecessária e prevenção de deriva de escopo;
- rastreabilidade, evidência, revisão e bloqueio explícito.

## 2. Exploração do NoteGen MCP

### 2.1 Ferramentas e testes

Foram listadas as ferramentas do NoteGen MCP e executados testes de leitura, notas, cópia, movimentação, renomeação e exclusão.

A exigência operacional definida foi: qualquer artefato de teste deveria ficar dentro de uma primeira pasta dedicada, `NoteGen MCP test-2026-09-06/`. Os arquivos temporários foram criados nessa pasta e em sua subpasta, depois enviados à lixeira; a pasta terminou sem arquivos Markdown.

### 2.2 Limitações encontradas

- `expectedRevision` não foi exposto nas respostas, impedindo testar completamente append, update e patch.
- Um registro temporário foi criado, mas o ID não foi retornado; por isso não foi possível fazer cleanup seguro do registro. A contagem de registros aumentou de 2 para 3.
- Probes de rename/delete para canvas inexistente retornaram sucesso, indicando possível falha de validação do servidor.
- A conclusão operacional foi evitar novos artefatos mutáveis no NoteGen quando o identificador de cleanup não estiver acessível.

## 3. Exploração do Open Knowledge MCP

### 3.1 Ferramentas de leitura testadas

Foram testadas as ferramentas de configuração, execução de leitura, auditoria, conflitos, histórico, links, lint, palette, preview, busca, skills e share link.

Resultados observados:

- 540 documentos Markdown no escopo atual.
- Auditoria com 42 documentos problemáticos e 183 warnings de links quebrados.
- Markdownlint desativado na configuração global; lint não selecionou regras até a auditoria específica.
- Nenhum conflito de merge rastreado.
- Preview local disponível em `http://127.0.0.1:56064`.
- Share link gerado com sucesso.
- Configuração atual usa `content.dir: .`, portanto uma pasta `wiki/` não é uma barreira técnica de indexação por si só.

### 3.2 Conclusão sobre o software

Open Knowledge foi considerado valioso como:

- interface agentiva para documentação;
- camada de busca, backlinks, histórico e proveniência;
- editor WYSIWYG para Markdown;
- superfície de revisão entre humanos e agentes;
- controle operacional para documentos e gates.

A recomendação foi não substituir Obsidian nem o repositório existente. Open Knowledge deve funcionar como camada de projeto e agente, mantendo os documentos existentes como fonte de verdade.

## 4. Plano para uma wiki dedicada

Foi discutida a criação de uma pasta `wiki/` para uma camada de conhecimento derivada, sem copiar toda a documentação existente.

A decisão foi preferir o Knowledge base starter pack como fundação, com adaptação específica do projeto:

```text
wiki/
├── external-sources/
├── research/
├── articles/
│   ├── architecture/
│   ├── concepts/
│   ├── decisions/
│   └── workflows/
└── log.md
```

Princípios definidos:

- `external-sources/` recebe apenas fontes externas preservadas.
- Documentos internos do projeto continuam em seus caminhos originais.
- `research/` contém sínteses provisórias.
- `articles/` contém conhecimento canônico consolidado.
- A wiki referencia os documentos originais por `source_paths`.
- A wiki não deve virar uma segunda fonte de verdade nem um segundo sistema de tarefas.

O plano detalhado foi registrado em [Open Knowledge Wiki — Implementation Plan](/docs/plans/2026-09-06-open-knowledge-wiki-implementation-plan.md).

## 5. Insight sobre pastas como gates

A funcionalidade de pasta do Open Knowledge — propriedades, templates, atividade e lista de subpastas — foi interpretada como um possível control plane para execução agentiva.

A conclusão foi que uma pasta enriquecida funciona como **soft gate**:

```text
Folder properties  → contrato do gate
Templates          → formatos de artefato
Agent skill/prompt → comportamento exigido
Git/revisão        → verificação e reversibilidade
```

A pasta sozinha não impede um agente de escrever fora dela. Ela reduz ambiguidade e cria um ponto de parada, mas precisa ser combinada com instruções, escopo declarado, revisão e verificação Git.

## 6. Especificação e plano do piloto P03-T01

Foi escolhido como tarefa real o **P03-T01 — Modelo Lógico/Físico**, por possuir:

- documento de modelo existente;
- dependências documentais claras;
- estado explícito de rascunho;
- critérios de revisão;
- risco real de promoção prematura;
- relação direta com P03-T02, P03-T03 e P03-T05.

Foram criados e validados:

- [PRODUCT.md do gate P03-T01](/specs/p03-t01-gate-folder/PRODUCT.md)
- [Plano de implementação do gate P03-T01](/docs/plans/2026-09-06-p03-t01-gate-folder-pilot.md)

O desenho foi avaliado segundo a filosofia de design de software como um módulo profundo e especial-purpose, com contrato pequeno e complexidade procedimental escondida na pasta e nos templates. A avaliação inicial foi 8/10, condicionada à demonstração de que os agentes realmente respeitam o checkpoint sem exigir prompts repetidos.

## 7. Execução do gate P03-T01

### 7.1 Estrutura criada

Foi criada a pasta [Gate P03-T01 — Modelo Lógico/Físico](/04-project-management/gates/P03-T01/README.md):

```text
04-project-management/gates/P03-T01/
├── .ok/
│   ├── frontmatter.yml
│   └── templates/
│       ├── gate-run.md
│       ├── evidence-register.md
│       └── review-record.md
├── README.md
├── working/
├── evidence/
├── deliverables/
└── review/
```

A pasta `output/` prevista originalmente foi recusada pela configuração do workspace. Ela foi substituída por `deliverables/` no plano, na documentação e nos artefatos executados.

### 7.2 Contrato do gate

O gate recebeu propriedades para:

- `type: gate`;
- `gate_id: P03-T01`;
- tarefa e propósito;
- critérios de entrada e saída;
- caminhos permitidos;
- ações proibidas;
- artefatos obrigatórios;
- status de gate.

Os cinco documentos de origem foram verificados e mantidos como somente leitura:

- P03-T01 Modelo Lógico/Físico;
- P03-T02 Especificação de Identidade;
- P03-T03 Envelope Canônico;
- P03-T05 Catálogo Canônico e Grafo;
- Blueprint de Dados e Inteligência em revisão.

### 7.3 Templates e artefatos

Foram criados três templates locais:

- `gate-run`;
- `evidence-register`;
- `review-record`.

Foram criados os artefatos:

- `working/P03-T01-run-001.md`;
- `evidence/P03-T01-evidence-001.md`;
- `deliverables/P03-T01-validation-package.md`;
- `review/P03-T01-review-001.md`.

O pacote registrou como suportados, entre outros pontos:

- 25 entidades canônicas com `canonical_id` estável;
- uso de `identity_alias` para identificadores externos;
- convenções temporais e UTC;
- dependências do modelo para identidade e envelope de eventos;
- Consent como bloqueador de governança para dados sensíveis.

Também foram registrados como não estabelecidos:

- implementação física em produção;
- aprovação de G03.A1;
- execução bem-sucedida de constraints físicas;
- conclusão de merge, split e survivorship.

## 8. Estado final do gate

O pacote está completo para handoff, mas o gate foi marcado como **blocked** até revisão humana de Data Architecture e Tech.

Isso preserva a distinção entre:

- pacote de validação criado;
- gate pronto para revisão;
- modelo P03-T01 ainda em rascunho;
- aprovação formal e promoção ainda não concedidas.

Nenhum documento-fonte foi promovido, movido, renomeado ou editado.

## 9. Orquestração e verificação

Foram usados agentes auxiliares com o modelo obrigatório `openai/gpt-5.6-luna`:

- `source-check`: confirmou a existência dos cinco caminhos de fonte e a ausência prévia do gate.
- `gate-review`: revisou a estrutura, encontrou uma leitura de estado desatualizada durante a execução e ajudou a corrigir a semântica de aprovação para `blocked`.

As configurações dos agentes foram verificadas antes e depois do dispatch.

Validações finais:

- Auditoria Open Knowledge do gate: nenhum problema em 5 documentos.
- Lint do PRODUCT.md: sem problemas.
- Lint do plano: sem problemas.
- Lint do README, evidence register, deliverable e review record: sem problemas.
- `git status` mostrou apenas os dois documentos de especificação/plano e a nova pasta do gate como alterações deste trabalho.

## 10. Próximos passos

1. Revisão humana do pacote P03-T01 em `deliverables/`.
2. Decisão sobre constraints físicas, reconciliação de referências e aprovação G03.A1.
3. Manter o gate bloqueado até que as pendências sejam resolvidas ou formalmente aceitas.
4. Medir se o gate reduziu exploração, rework e deriva de escopo.
5. Só replicar o padrão em outra tarefa se este piloto demonstrar ganho operacional.
6. Considerar hardening posterior se o limite operacional não impedir escritas fora da pasta.

## 11. Decisão consolidada

Open Knowledge deve ser usado neste projeto como uma camada agentiva e de governança documental, não como substituto da fonte aprovada. O padrão de gate folder é promissor porque concentra contrato, templates, evidência, handoff e revisão em uma superfície pequena. A eficácia real dependerá de os agentes lerem o contrato, respeitarem os caminhos permitidos e pararem nos estados de bloqueio/revisão.
