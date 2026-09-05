---
title: "Registro de Mudança — Consolidado diário 2026-09-05"
date: 2026-09-05
type: registro-mudanca
status: rascunho
tags:
  - projeto/registro-mudanca
  - projeto/gestao
related_notes: []
author:
  - PF Rezende
commits:
  - 928c9a8
  - 8bd6f63
  - ce995dd
  - fd9e1d2
  - 6bd4cb4
  - e3afa27
  - 2859d89
  - 44051be
  - 4b9a90c
  - 59e5aae
  - 782c94c
  - e170d75
  - 9e58928
  - 6b59711
  - 3d2a81e
  - 8f82f13
  - 1a929c4
  - bf7a50f
  - b44ec86
  - e202b6d
  - 0587f2b
  - 50f5e3a
  - 5ffcf12
  - f04b6b5
  - bf161d9
  - 8afb9b2
  - 8684227
  - b8b2ed4
  - ca133b3
---

# Registro de Mudança — Consolidado diário 2026-09-05

> [!info] Identificação
> - **Data:** 2026-09-05
> - **Tipo:** estrutural + governança + produto (dia de fundação: o vault ganhou fronteiras de lifecycle)
> - **Origem:** decisão direta do usuário (dono do projeto) em sessão assistida; 29 commits, todos em `main`, todos com push.
> - **Registros-irmãos (detalhe por evento):** `2026-09-05-reestruturacao-fronteiras-lifecycle.md`, `2026-09-05-lifecycle-fronteiras-manutencao.md`, `2026-09-05-agrupamento-tematico-01-work.md`, `2026-09-05-gate-planilhas-mestras.md`, `2026-09-05-submissao-mvps-visao-acordo.md`, `2026-09-05-submissao-blueprint-review.md`, `2026-09-05-submissao-reconciliacao-blueprint.md` + census `2026-09-05-lifecycle-census-filelist.txt` / `-status.txt`. Este consolidado narra o dia inteiro; os irmãos valem pelo detalhe normativo de cada gate.

## 1. Resumo

O dia 2026-09-05 converteu um vault plano (pilha de pastas numeradas sem dono de verdade) em um
repositório com **fronteiras de lifecycle exigíveis**: `01-work/` (elaboração) → `02-review/`
(congelado, só decisão do gate) → `03-approved/` (imutável, espelhado no Drive). Ao longo do dia:
higiene matinal (3 commits), reestruturação em 8 fases (10 commits), rotulagem e agrupamento
temático (5 commits), gates e normalizações do aprovado (8 commits) e o ciclo completo do bloco
blueprint — retorno, submissão, pre-check máquina, reconciliação e re-submissão (3 commits).

**Resultado:** `main` termina o dia com o vault roteável por `project-map.md`, cada pasta com seu
carimbo de fronteira, 4 pacotes congelados em `02-review/` aguardando decisão humana, o núcleo de
inteligência aprovado e espelhado, e o mapa + READMEs sincronizados. Nenhum gate foi decidido pela
máquina: todas as promoções do dia foram por decisão direta do usuário.

## 2. Contexto e motivação

- **Antes:** pastas `01-blueprint/`, `02-refinement/`, `03-gates/`, `04-project-management/` etc.
  coexistiam sem semântica de aprovação; blueprint, rascunho P03, MVPs, visão e acordo de parceria
  dividiam o mesmo nível; nomes misturavam maiúsculas/espaços; Drive e iCloud divergiam em estrutura.
- **Problema ou oportunidade:** sem fronteira, qualquer edição podia contaminar material em revisão
  ou aprovado; agentes (e o próprio dono) não tinham como saber o que é editável, o que está
  congelado e o que é fonte de verdade.
- **Objetivo:** instalar o contrato `rascunho → em-elaboracao → em-revisao → aprovado`, com
  guardas legíveis por máquina (READMEs de fronteira, `status:` em toda nota viva, framework
  normativo) e testemunha imutável de cada travessia (registro de mudança por gate).

## 3. O que mudou

### 3.1 Higiene matinal (05:20–05:51)

| Commit | O que foi | Porquê |
|---|---|---|
| `928c9a8` | Restaurados mapas de governança + sincronizados `README.md` e `project-map.md` (5 arquivos, +622) | Mapas de autorização/tenancy haviam se perdido na bagunça; docs raiz voltaram a descrever o real |
| `8bd6f63` | Corrigidas 2 referências pendentes (documento-mãe v2 investidor, doc do plugin Canvas Bases) | Links apontavam para caminhos já movidos |
| `ce995dd` | Removido `04-project-management/HUB_Plano_Unificado_v1.html` (−932 linhas) | Superado por versões `.md`/`.docx` vigentes |

### 3.2 Reestruturação lifecycle, fases 0–7 (06:50–07:09)

| Commit | O que foi | Porquê |
|---|---|---|
| `fd9e1d2` | Fase 0: censo completo (filelist + status por fronteira) + registro da reestruturação | Testemunha do "antes" — nada se move sem inventário |
| `6bd4cb4` | Fase 1: esqueleto `01-work/`, `02-review/`, `03-approved/`, `05-resources/`, `99-archive/` com READMEs-guarda | Fronteiras passam a existir fisicamente |
| `e3afa27` | Fase 2: 10 narrativas blueprint → domínios em `01-work/`; CSVs-fonte → `05-resources/fontes/` (44 arquivos) | Blueprint vira elaboração endereçável; dado bruto sai do caminho |
| `2859d89` | Cache de grafo do Obsidian (`graph.json`) removido do git + `.gitignore` | Artefato local não versionável |
| `44051be` | Fase 3: conteúdo refinement → `01-work/`; mapas de governança → `documentos-oficiais/`; README do refinement aposentado (24 arquivos) | Refinement P03 ganha endereço; governança vai para a pasta oficial |
| `4b9a90c` | Fase 4: draft original arquivado em `99-archive/`; shell `01-blueprint/` aposentado; inbox renomeado (147 arquivos) | Originais preservados como testemunha, fora do caminho |
| `59e5aae` | Fase 5: pacotes de revisão + bloqueados → `02-review/`; cenários P01 → `03-approved/` (48 arquivos) | Primeira travessia real de fronteira nos dois sentidos |
| `782c94c` | Fase 6: shell `documentos-oficiais/` importado p/ `01-work/` com `_controle/`; `03-approved/` espelhado no Drive (84 arquivos, +3638) | Shell oficial + controle de idioma; Drive vira espelho do aprovado |
| `e170d75` | Fase 7: varredura de links (140 arquivos), normalização do vocabulário de fronteira, reescrita de READMEs e `project-map.md` | Vault volta a ser navegável por máquina e gente |
| `9e58928` | Fase 6 completa: pastas legadas do Drive aposentadas | Espelho sem sombra do passado |
| `6b59711` | Removidos stubs de redirecionamento; auditoria de `layer:` concluída como no-op por evidência | `layer:` é taxonomia de conteúdo, não lifecycle — sem normalização global |
| `3d2a81e` | Guia de manutenção das fronteiras (registro de sessão + regras permanentes) | O contrato sobrevive à sessão que o criou |

Detalhe normativo em `2026-09-05-reestruturacao-fronteiras-lifecycle.md` e
`2026-09-05-lifecycle-fronteiras-manutencao.md`.

### 3.3 Contrato, rótulos e temas (07:17–07:34)

| Commit | O que foi | Porquê |
|---|---|---|
| `8f82f13` | Framework `HUB_Framework_Fronteiras_Lifecycle.md` + ponteiros de entrada p/ agentes | Contrato normativo + roteamento de leitura (evitairatualizações fora da fronteira) |
| `1a929c4` | Rótulos de fronteira por pasta em work, review e aprovado (18 arquivos) | Cada pasta declara seu `status` e suas regras localmente |
| `bf7a50f` | Domínios de `01-work/` agrupados em 4 temas rotulados (234 arquivos) | Navegação temática sem renomear domínios (nomes preservados) |

Detalhe em `2026-09-05-agrupamento-tematico-01-work.md`.

### 3.4 Gates, normalizações e submissões (07:41–08:35)

| Commit | O que foi | Porquê |
|---|---|---|
| `b44ec86` | Gate planilhas-mestras → `03-approved/`; backups `.bak` para o archive (20 arquivos) | Especificação + planilha viram fonte de verdade imutável |
| `e202b6d` | Finais de dados agrupados sob `nucleo-inteligencia/` (20 arquivos) | Núcleo de inteligência com endereço único |
| `0587f2b` + `50f5e3a` | Renomeações do aprovado replicadas no Drive + correção de redação histórica (27 + 7 arquivos) | Espelho fiel, inclusive nos nomes |
| `5ffcf12` | MVPs, visão da plataforma e acordo de parceria → `02-review/`, 34 `.md` carimbados `em-revisao` (88 arquivos) | Três pacotes congelados aguardando o gate humano |
| `f04b6b5` | READMEs de catálogo do inbox restaurados como `LEIAME-origem-inbox` (uma sobrescrita da máquina revertida como ponteiro, original preservado) | Submissão havia sobrescrito dois catálogos; corrigido sem perda |
| `bf161d9` | Carimbos `em-revisao` nos rótulos das pastas de revisão | Zero `.md` sem status nas fronteiras review/approved |
| `8afb9b2` | Nomes do aprovado normalizados para minúsculo-hífen (18 arquivos) | Convenção única, links varridos |

Detalhe em `2026-09-05-gate-planilhas-mestras.md` e `2026-09-05-submissao-mvps-visao-acordo.md`.

### 3.5 Ciclo blueprint: retorno → pre-check → reconciliação → re-submissão (08:41–09:08)

| Commit | O que foi | Porquê |
|---|---|---|
| `8684227` | 9 domínios reagrupados em `01-blueprint/` e aninhados em `02-review/01-blueprint/`; tema `mercado-e-direcao/` dissolvido; 34 `.md` em `em-revisao` (90 arquivos, histórico via `git mv`) | Pedido do usuário: bloco blueprint de volta ao conjunto e submetido ao gate |
| `b8b2ed4` | Proveniência registrada: domínios refinados a partir do `nucleo-inteligencia`, faltando só revisão humana | A decisão do gate depende dessa alegação de alinhamento |
| `ca133b3` | Reconciliação v2: 6 versões corrigidas + `mapeamento-identidade-relacoes-sequenciamento-v1.md` (NOVO), congeladas em `02-review/02-reconciliacao-blueprint/` (17 arquivos, +1557) | Pre-check máquina achou 6 divergências (4 blocks-gate); aprovado venceu todas |

Execução da v2: 2 lanes paralelos `openai/gpt-5.6-luna` — `reconcile-mapas` OK;
`reconcile-numeros` falhou (sessão sem file tools) e o lane foi executado diretamente pelo lead.
Detalhe em `2026-09-05-submissao-blueprint-review.md` e `2026-09-05-submissao-reconciliacao-blueprint.md`.

### 3.6 Decisões e regras afetadas

- Instalado o contrato de lifecycle (`rascunho → em-elaboracao → em-revisao → aprovado`) como
  norma do vault, com `HUB_Framework_Fronteiras_Lifecycle.md` como fonte normativa.
- Toda travessia de fronteira exige `git mv` (histórico segue o arquivo) + carimbo `status:` +
  registro de mudança com dono do gate (sempre o usuário; máquina nunca aprova).
- `03-approved/` é imutável; correções nascem como nova versão em `01-work/` e re-passam pelo gate.
- Drive espelha `03-approved/` (ignorando `.DS_Store` e normalização Unicode); `02-review/` nunca espelha.
- `layer:` é taxonomia de conteúdo, não lifecycle — sem normalização global (auditoria no-op).
- P03 segue em espera (`01-work/dados-tech-financas/refinamento-modelo-dados/`).
- Agentes do dia rodam exclusivamente em `openai/gpt-5.6-luna` (preferência registrada do usuário).

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** nenhum escopo de produto criado ou cortado; dia 100% estrutural + governança.
- **Impacto operacional:** o vault passa a ser roteável (`project-map.md` + READMEs-guarda + framework);
  agentes recebem ponteiros de entrada e regras de fronteira antes de qualquer escrita.
- **Impacto técnico ou de dados:** ~700 arquivos movidos/reescritos/rotulados com histórico preservado
  (`git mv`); 4 pacotes congelados em `02-review/`; núcleo de inteligência aprovado e espelhado no Drive.
- **Rastreabilidade:** cada travessia → registro-irmão com tabela origem→destino + commit; censo fase 0
  testemunha o "antes"; `git log 2026-09-05` (29 commits) é a trilha completa.

## 5. Validação e sincronização

- **Validação realizada:** varreduras `grep` pós-cada movimento (zero referências pendentes aos caminhos
  antigos; zero `.md` sem `status:` nas fronteiras review/approved; 34/34 e 7/7 carimbos conferidos);
  push após cada commit; pre-check máquina com pares de citações (arquivo:linha nos dois lados).
- **Resultado:** dia verde. Exceções honestas: 6 pares conceituais UNVERIFIED na reconciliação v2
  (E02, E06, E08, E11, E13, E16, E18 + parciais; Empresa≠cliente; `object_type` abstrato) — documentados
  no registro da v2 para a revisão humana decidir.
- **Arquivos vivos sincronizados:** `project-map.md` (tabela + árvore), `README.md` raiz,
  `01-work/README.md`, framework §4, rótulos de pasta, registros-irmãos.

## 6. Próximos passos

- [ ] Revisão humana dos 4 pacotes em `02-review/` (`01-mvps/`, `02-visao-plataforma/`,
      `01-acordo-parceria/`, `01-blueprint/` + `02-reconciliacao-blueprint/`) — dono: usuário.
- [ ] Decisão do gate por pacote: aprovar → `03-approved/`; devolver → `01-work/` (responsável: usuário).
- [ ] Resolver os UNVERIFIED da v2 conforme a decisão do gate (aceitar como hipótese, devolver ou exigir contrato).
- [ ] Manter P03 em espera até inventário, narrativas e critérios de aprovação alinhados.

## 7. Referências

- `2026-09-05-reestruturacao-fronteiras-lifecycle.md` (fases 0–7)
- `2026-09-05-lifecycle-fronteiras-manutencao.md` (regras permanentes)
- `2026-09-05-agrupamento-tematico-01-work.md` (temas)
- `2026-09-05-gate-planilhas-mestras.md` (fonte de verdade)
- `2026-09-05-submissao-mvps-visao-acordo.md` (3 pacotes)
- `2026-09-05-submissao-blueprint-review.md` (v1 + proveniência)
- `2026-09-05-submissao-reconciliacao-blueprint.md` (v2 + limitações)
- `00-project-control/framework/HUB_Framework_Fronteiras_Lifecycle.md` (norma vigente)
- Commits `928c9a8`…`ca133b3` (29, `git log --since="2026-09-05"`)
