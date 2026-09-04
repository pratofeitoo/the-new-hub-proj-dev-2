<!-- git-hash: 12668de -->
<!-- last-synced: 2026-09-04 -->

# Mapa do Projeto

## Modelo operacional

O repositório é gerenciado como um sistema completo de negócio e produto por meio de três camadas:

1. **Blueprint** — conceitos, premissas e arquitetura geral.
2. **Refinamento** — pesquisa, testes, protótipos, melhorias e substituições.
3. **Aprovação** — revisão baseada em evidências e decisão de gate.

`00-project-control/`, `04-project-management/`, `05-resources/`, `06-deliverables/` e `99-archive/` apoiam o fluxo transversalmente.

## Estrutura atual

| Área | Papel atual |
|---|---|
| `00-project-control/` | Framework, escopo, decisões, gaps (68 notas) e registros de mudança (5 registros + template). Pastas vazias de dependências, índices, premissas e riscos foram removidas na poda. |
| `01-blueprint/` | Visão-base estratégica, arquitetura de produto, negócio, dados, tecnologia, governança, operações e lançamento (9 domínios). |
| `02-refinement/` | Refinamento estratégico, pesquisa, governança, produto, finanças e spine de dados P03 com 9 entregáveis em revisão. A governança atualmente contém a matriz P03-T08; as antigas pastas vazias de protótipos e revisões foram removidas. |
| `03-approval/` | `bloqueado/` e `pacotes-revisao/`; as áreas vazias de aprovação foram removidas. O modelo de indicadores continua bloqueado enquanto P03 está em revisão. |
| `04-project-management/` | Planos mestre e de fase P01–P07, 56 tarefas de fase + BP, matriz canônica, marcos, cronogramas, atas, cenários, planos unificados e logs de progresso. Retrospectivas vazias foram removidas. |
| `05-resources/` | Fila de processamento `Processar/Plataforma HUB/`, com 143 arquivos rastreados: 7 MVPs, visão de plataforma, Arquitetura e Custos (96 telas), análises e arquivo. |
| `06-deliverables/` | Pasta flat reservada para saídas finais; atualmente contém apenas `.gitkeep`. |
| `99-archive/` | Histórico preservado em `instantaneos-historicos/` e `superado/`; áreas vazias de descontinuado e rejeitado foram removidas. |
| `TaskNotes/` | 22 notas operacionais atuais, 2 notas em `Archive/` e visualizações Bases, incluindo `documentacao-oficial`. |
| `System/` | 69 arquivos em 5 famílias de documentação local: Charts, Dataview Charts, JSON Canvas Spec, Obsidian Base e Task Notes. `attachments/` é local e não rastreado. |
| `.obsidian/` | Configuração do vault, 10 plugins habilitados/rastreados e tema `March` rastreado; outros 12 temas e 11 plugins inativos permanecem apenas localmente. |
| `.agents/` | Skills e artefatos de agentes versionados no projeto. |
| `.logs/` | Logs de execução de subtasks e agentes. |

## Árvore de diretórios versionada

> A árvore abaixo descreve o estado rastreado no commit `12668de`. Assets locais ignorados, como plugins/temas desvendorizados, cache e áudios, são indicados separadamente.

```
.
├── .agents/                         — skills e configuração de agentes do projeto
├── .git/                            — histórico e metadados do Git
├── .logs/                           — logs de subtasks e agentes
├── .obsidian/                       — configuração do vault
│   ├── plugins/                     — 10 plugins habilitados/rastreados
│   └── themes/March/                — único tema rastreado
├── 00-project-control/              — controle, framework, escopo, gaps e decisões
│   ├── escopo/fases-projeto/        — canvas do faseamento P00→P07
│   ├── framework/                   — framework das três camadas
│   ├── registro-lacunas/lacunas/    — gaps BRD/DAT/FIN/GOV/TEC (68 notas)
│   └── registro-mudancas/           — registros estruturais e decisórios
├── 01-blueprint/                    — estratégia, produto, negócio, dados, tech, governança e lançamento
│   ├── dados-inteligencia/          — modelo semântico e indicadores
│   ├── estrategia/                  — fundação e primeiro rascunho
│   └── governanca-juridico/         — governança e fundamentos jurídicos
├── 02-refinement/                   — pesquisas, refinamentos e evidências em evolução
│   ├── estrategia/                  — refinamento estratégico
│   ├── modelos-financeiros/         — área reservada
│   ├── pesquisa/                    — pesquisas por domínio
│   ├── refinamento-governanca/      — LGPD e mapas de documentação oficial
│   ├── refinamento-modelo-dados/    — spine P03-T01..T09 e schema registry
│   └── refinamento-produto/         — escopo, fluxo, tenancy, filas e RACI
├── 03-approval/                     — revisão e bloqueios
│   ├── bloqueado/                   — modelo de indicadores e derivados de validação
│   └── pacotes-revisao/             — pacotes para stakeholders
├── 04-project-management/           — execução P01→P07
│   ├── atas-reuniao/                — atas estruturadas e templates
│   ├── cenarios/                    — 6 cenários P01-S01→S06
│   ├── cronogramas/                 — cronograma Bases
│   ├── marcos/                      — M00→M07 e sub-gates M03.A/B
│   ├── planos-fase/                 — P01→P07
│   ├── planos-mestres/              — planos diretores
│   ├── registro-mestre/             — matriz canônica de tarefas
│   ├── registros-trabalho/          — base de execução e logs
│   ├── relatorios-status/           — relatórios e template
│   └── tarefas/                     — 8 BP + 56 tarefas de fase
├── 05-resources/Processar/          — fila de processamento
│   └── Plataforma HUB/              — 7 MVPs + visão de plataforma e análises
├── 06-deliverables/                 — reservado; atualmente flat
├── 99-archive/                      — snapshots históricos e material superado
│   ├── instantaneos-historicos/
│   └── superado/
├── System/Plugins docs/             — 5 famílias de docs locais (69 arquivos)
├── System/attachments/              — anexos locais ignorados pelo Git
├── TaskNotes/                       — tarefas operacionais, Archive/ e Views/
├── README.md                        — orientação de entrada
├── mdbase.yaml                      — configuração do mdbase/TaskNotes
└── project-map.md                   — este mapa
```

### Conteúdo local não versionado

- `.mdbase/cache.sqlite` permanece local e ignorado.
- `System/attachments/` contém os áudios locais, fora do índice Git.
- Temas Obsidian inativos (12) e plugins inativos (11) foram removidos do índice, mas não apagados do vault local.
- `_types/` e `.omo/` não existem no estado atual do repositório, embora `mdbase.yaml` ainda contenha referências a `_types/`; isso precisa ser resolvido antes de depender desse diretório como fonte de tipos.

## Faseamento e estado do trabalho

O fluxo de execução é:

`P01 Oferta & Negócio` → `P02 Produto & Operação` → `P03 Dados Canônicos` → `P04 Governança` ↔ `P05 Tecnologia` → `P06 Economia & GTM` → `P07 Portão de Lançamento`.

- P01: 7 tarefas concluídas.
- P02: 6 tarefas concluídas.
- P03: 9 tarefas em revisão.
- P04–P07: 34 tarefas pendentes.
- `GOV-001` (estrutura societária/CNPJs) continua sendo o bloqueador principal da documentação oficial.
- O epic do vault isolado de documentos oficiais permanece em andamento; suas notas de controle estão em `TaskNotes/Tasks/`, mas os mapas de documentos não estão presentes no estado atual do repositório.

## Guia de roteamento

| Intenção | Ler | Escrever |
|---|---|---|
| Entender regras e decisões | `00-project-control/` | `decisoes/` ou `registro-lacunas/` |
| Entender o que está sendo proposto | `01-blueprint/` | domínio correspondente do blueprint |
| Pesquisar ou refinar | `02-refinement/` | subpasta de refinamento correspondente |
| Preparar revisão | `03-approval/bloqueado/` e `pacotes-revisao/` | pacote de revisão/evidência |
| Executar o plano | `04-project-management/` | tarefas, marcos, atas, logs e cenários |
| Consultar fontes | `05-resources/Processar/Plataforma HUB/` | manter a fila de processamento |
| Consultar tarefas operacionais | `TaskNotes/` | `TaskNotes/Tasks/` e `TaskNotes/Views/` |
| Consultar histórico | `99-archive/` | não continuar trabalho ativo aqui |

## Regras de manutenção

- Não trate blueprint ou refinamento como aprovação, contrato ou evidência de produção.
- Não arquive P03 nem deduplicate views enquanto o trabalho estiver em revisão ou tiver uso ativo.
- Atualize este mapa e o `README.md` quando a estrutura de pastas mudar.
- Arquivos compilados de plugins não devem ser editados manualmente.
- Assets locais ignorados devem permanecer fora do Git; reinstalação de plugins/temas ocorre pelo marketplace quando necessário.
