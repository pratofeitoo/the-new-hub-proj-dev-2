<!-- branch: restructure/lifecycle-borders -->
<!-- last-synced: 2026-09-05 -->

# Mapa do Projeto

## Modelo operacional

O repositório é gerenciado por **fronteiras de lifecycle** (onde a pasta = nível de confiança)
com domínios como segundo eixo:

1. **Work (`01-work/`)** — elaboração editável por domínio. `status: rascunho | em-elaboracao`.
2. **Review (`02-review/`)** — pacotes congelados aguardando gate. `status: em-revisao`.
3. **Approved (`03-approved/`)** — só finais assinados, nunca editados no lugar. `status: aprovado`. Espelhado no Drive.

`00-project-control/`, `04-project-management/`, `05-resources/`, `99-archive/` apoiam o fluxo transversalmente
(controle, execução, matéria-prima, histórico). Promoção = mover + carimbar; mudança em aprovado = nova versão em `01-work/`.

## Estrutura atual

| Área | Papel atual |
|---|---|
| `00-project-control/` | Framework, escopo, decisões, gaps e registros de mudança (incl. `2026-09-05-reestruturacao-fronteiras-lifecycle.md`). |
| `01-work/` | Elaboração em 4 temas: `mercado-e-direcao/` (`estrategia/`, `modelo-negocio/`, `marca-mercado/`, `visao-lancamento/`), `produto-e-operacao/` (`produto/`, `operacoes/`, `refinamento-produto/`), `dados-tech-financas/` (`dados-inteligencia/` + análises, CSVs em `05-resources/fontes/`, `tecnologia/`, `modelos-financeiros/`, `refinamento-modelo-dados/` com spine P03 + gate, todos rascunho), `pesquisa-e-confianca/` (`pesquisa/`, `governanca-juridico/`, `documentos-oficiais/` shell 01–14 + `_controle/`, tudo rascunho/hipótese — ver GOV-001). |
| `02-review/` | `pacotes/` (aceite P01 cross-functional, `em-revisao`) e `bloqueado/` (modelo de indicadores + derivados). |
| `03-approved/` | `cenarios/` P01-S01…S06, `nucleo-inteligencia/` (conceito + inventário + prova, gate 2026-09-05, `aprovado` + histórico). Espelho Drive em `THE NEW HUB/03-approved/` com paths idênticos. |
| `04-project-management/` | Planos mestre e de fase P01–P07, tarefas de fase + BP, matriz canônica, marcos, cronogramas, atas, cenários (ponteiro para `03-approved/`), planos unificados e logs de progresso. |
| `05-resources/` | `inbox/` (fila de triagem, ex-`Processar/`, 7 MVPs + visão de plataforma) e `fontes/modelo-indicadores/` (CSVs-fonte). Matéria-prima, nunca evidência. |
| `99-archive/` | `origens/primeiro-rascunho-projeto/`, `backups/`, `documentos-oficiais/` (descontinuado/rejeitado/superado), `instantaneos-historicos/`, `superado/`. |
| `01-blueprint/`, `02-refinement/` | Aposentadas em 2026-09-05, stubs removidos; ver `git log --follow`. |
| `TaskNotes/` | Notas operacionais, `Archive/` e visualizações Bases. |
| `System/` | Documentação local de plugins em 5 famílias. `attachments/` é local e não rastreado. |
| `.obsidian/` | Configuração do vault, 10 plugins habilitados/rastreados e tema `March` rastreado. |
| `.agents/` | Skills e artefatos de agentes versionados no projeto. |
| `.logs/` | Logs de execução de subtasks e agentes. |

## Árvore de diretórios versionada

> Estado no branch `restructure/lifecycle-borders`. Histórico de moves preservado (`git log --follow`).

```
.
├── .agents/                         — skills e configuração de agentes do projeto
├── .logs/                           — logs de subtasks e agentes
├── .obsidian/                       — configuração do vault
│   ├── plugins/                     — 10 plugins habilitados/rastreados
│   └── themes/March/                — único tema rastreado
├── 00-project-control/              — controle, framework, escopo, gaps e decisões
│   ├── escopo/fases-projeto/        — canvas do faseamento P00→P07
│   ├── framework/                   — framework das três camadas
│   ├── registro-lacunas/lacunas/    — gaps BRD/DAT/FIN/GOV/TEC e registros
│   └── registro-mudancas/           — registros estruturais e decisórios (incl. lifecycle 2026-09-05 + censos)
├── 01-work/                         — ELABORAÇÃO (rascunho | em-elaboracao), 4 temas
│   ├── mercado-e-direcao/           — estrategia/ modelo-negocio/ marca-mercado/ visao-lancamento/
│   ├── produto-e-operacao/          — produto/ operacoes/ refinamento-produto/
│   ├── dados-tech-financas/         — dados-inteligencia/ (análises; CSVs em 05-resources/fontes)
│   │                                  tecnologia/ modelos-financeiros/
│   │                                  refinamento-modelo-dados/ (spine P03-T01..T09 + gate M0, rascunho)
│   └── pesquisa-e-confianca/        — pesquisa/ governanca-juridico/
│                                      documentos-oficiais/ (shell 01–14 + _controle/, nada oficial)
├── 02-review/                       — REVISÃO (em-revisao, congelado)
│   ├── pacotes/                     — pacotes para stakeholders
│   └── bloqueado/                   — modelo de indicadores e derivados de validação
├── 03-approved/                     — APROVADO (aprovado, imutável; espelhado no Drive)
│   ├── cenarios/                    — P01-S01…S06 assinados
│   ├── nucleo-inteligencia/         — conceito + inventário + prova, gate 2026-09-05
│   │   ├── especificacao-mestra/    — especificação v1.0 (.md + .docx)
│   │   ├── planilha-tecnica/        — fonte + planejamento + validações
│   │   └── analises-processadas/    — matriz de convergência + relatórios
│   └── documentos-oficiais/         — reservado; vazio até o primeiro gate legal
├── 04-project-management/           — execução P01→P07
│   ├── atas-reuniao/                — atas estruturadas e templates
│   ├── cronogramas/                 — cronograma Bases
│   ├── marcos/                      — M00→M07 e sub-gates M03.A/B
│   ├── planos-fase/                 — P01→P07
│   ├── planos-mestres/              — planos diretores
│   ├── registro-mestre/             — matriz canônica de tarefas
│   ├── registros-trabalho/          — base de execução e logs
│   ├── relatorios-status/           — relatórios e template
│   └── tarefas/                     — BP + tarefas de fase
├── 05-resources/                    — matéria-prima
│   ├── inbox/                       — fila de triagem (ex-Processar/Plataforma HUB/)
│   └── fontes/modelo-indicadores/   — CSVs-fonte do workbook
├── 99-archive/                      — histórico
│   ├── origens/primeiro-rascunho-projeto/
│   ├── backups/  documentos-oficiais/  instantaneos-historicos/  superado/
├── 01-blueprint/ 02-refinement/      — removidas em 2026-09-05 (era stubs; conteúdo em 01-work/)
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
- `.obsidian/graph.json` fora do índice (cache local).
- Temas Obsidian inativos e plugins inativos permanecem apenas localmente.
- `_types/` e `.omo/` não existem no estado atual do repositório, embora `mdbase.yaml` ainda contenha referências a `_types/`; isso precisa ser resolvido antes de depender desse diretório como fonte de tipos.

## Faseamento e estado do trabalho

O fluxo de execução é:

`P01 Oferta & Negócio` → `P02 Produto & Operação` → `P03 Dados Canônicos` → `P04 Governança` ↔ `P05 Tecnologia` → `P06 Economia & GTM` → `P07 Portão de Lançamento`.

- P01: 7 tarefas concluídas; cenários S01…S06 assinados em `03-approved/cenarios/`.
- P02: 6 tarefas concluídas.
- P03: 9 itens + gate em elaboração em `01-work/dados-tech-financas/refinamento-modelo-dados/` (todos `rascunho`).
- P04–P07: 34 tarefas pendentes.
- `GOV-001` (estrutura societária/CNPJs) continua sendo o bloqueador principal da documentação oficial.
- Drive `THE NEW HUB/` = espelho somente-leitura de `03-approved/` + `README-DRIVE-MIRROR.md`; pastas legadas aposentadas em 2026-09-05.

## Guia de roteamento

| Intenção | Ler | Escrever |
|---|---|---|
| Agente antes de mover/promover arquivo | `00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md` (declarar a transição) | conforme a transição declarada |
| Entender regras e decisões | `00-project-control/` | `decisoes/` ou `registro-lacunas/` |
| Elaborar conteúdo | `01-work/<tema>/<domínio>/` | subpasta correspondente (`rascunho`/`em-elaboracao`) |
| Submeter a gate | `02-review/README.md` | congelar + mover para `02-review/` com dono e data |
| Consumir/compartilhar finais | `03-approved/` | nunca editar aqui; nova versão começa em `01-work/` |
| Executar o plano | `04-project-management/` | tarefas, marcos, atas, logs e cenários (ponteiro) |
| Consultar fontes | `05-resources/inbox/`, `05-resources/fontes/` | manter a fila de triagem; extrair para `01-work/` |
| Consultar tarefas operacionais | `TaskNotes/` | `TaskNotes/Tasks/` e `TaskNotes/Views/` |
| Consultar histórico | `99-archive/` | não continuar trabalho ativo aqui |

## Regras de manutenção

- `status:` deve ser igual ao da pasta (`01-work`: rascunho/em-elaboracao; `02-review`: em-revisao; `03-approved`: aprovado; `99-archive`: superado/rejeitado/descontinuado). Exceção documentada: `01-work/pesquisa-e-confianca/documentos-oficiais/` usa o vocabulário próprio herdado (`hipotese|em_elaboracao|...`), sempre abaixo de aprovado.
- Não edite aprovados no lugar; não arquive P03 enquanto estiver em elaboração ativa.
- Atualize este mapa e o `README.md` quando a estrutura de pastas mudar.
- Arquivos compilados de plugins não devem ser editados manualmente.
- Assets locais ignorados devem permanecer fora do Git; reinstalação de plugins/temas ocorre pelo marketplace quando necessário.
