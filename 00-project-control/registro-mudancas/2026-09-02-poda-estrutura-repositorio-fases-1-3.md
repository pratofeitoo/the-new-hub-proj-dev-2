---
title: 2026-09-02-poda-estrutura-repositorio-fases-1-3
date: 2026-09-02T23:45:00
type: registro-mudanca
status:
  - registrado
tags:
  - projeto/registro-mudanca
  - projeto/gestao
related_notes: []
author:
  - PF Rezende
commits: []
---

# Registro de Mudança — poda da estrutura do repositório (fases 1–3)

> [!info] Identificação
> - **Data:** 2026-09-02
> - **Tipo:** estrutural, técnico
> - **Origem:** pedido + revisão — avaliação da estrutura para deixar o repo menor, mais organizado e eficiente
> - **Antecessor:** NA

## 1. Resumo

Poda da estrutura em 3 fases executadas e 1 fase cancelada após verificação: (1) arquivos pesados desversionados e `.gitignore` ampliado; (2) 18 diretórios vazios colapsados; (3) 12 temas e 11 plugins inativos desvendorizados + docs duplicadas removidas; (4) arquivamento do `bloqueado/modelo-indicadores` e dedup de views **cancelados** — verificação mostrou que são trabalho ativo (evidências P03 em revisão, views editadas em 02/09).

**Resultado:** 135 caminhos staged (~131 mil linhas removidas, majoritariamente binários compilados de plugins/temas), ~56 MB + cache 3,3 MB fora do índice, árvore com 18 pastas vazias a menos. Tudo staged, **não commitado**; branch de segurança `backup/pre-prune-2026-09-03` criada antes de qualquer alteração.

## 2. Contexto e motivação

- **Antes:** ~125 pastas inventariadas; 32 `.gitkeep` (metade em pastas que já tinham conteúdo); 13 temas instalados (1 ativo) e 21 plugins instalados (~10 ativos) versionados; `System/attachments/` com 160 MB de áudios; `.mdbase/cache.sqlite` (3,3 MB) versionado; docs vendorizadas de plugins inativos (Tracker, Datacore).
- **Problema ou oportunidade:** clone pesado, navegação com pastas vazias, configs locais poluindo o índice.
- **Objetivo:** reduzir o índice git sem tocar em trabalho vivo (tarefas P01–P07, evidências P03, views em uso).

## 3. O que mudou

### 3.1 Fase 1 — peso morto do índice

| Caminho | Ação |
|---|---|
| `System/attachments/reuniao plataforma-sebrae.mp3` (50 MB) | `git rm --cached` — mantido local, fora do git |
| `.mdbase/cache.sqlite` (3,3 MB) | `git rm --cached` — mantido local, fora do git |
| `System/attachments/audio.mp3` (110 MB) | já era ignorado; agora explicitamente em `.gitignore` |
| 10× `.gitkeep` em pastas com conteúdo (`00-project-control/{decisoes,escopo,registro-mudancas}`, `04-project-management/{atas-reuniao,cronogramas,marcos,planos-fase,planos-mestres,registros-trabalho,relatorios-status}`) | `git rm` |
| `.gitignore` | + `*.mp3`, `*.mp4`, `.mdbase/cache.sqlite`, `.logs/` (verificado com `git check-ignore`) |

### 3.2 Fase 2 — colapso de 18 diretórios vazios (só `.gitkeep`)

| Removidos | Mantido no lugar |
|---|---|
| `06-deliverables/{dados,governanca,investidor,lancamento,negocio,produto}/` | `06-deliverables/.gitkeep` (pasta aspiracional, flat) |
| `03-approval/{aprovado,aprovado-condicionalmente,criterios-aprovacao,evidencias,portao-lancamento}/` | `03-approval/` = `bloqueado/` + `pacotes-revisao/` |
| `00-project-control/{dependencias,indices,premissas,riscos}/` | — (pai tem conteúdo) |
| `99-archive/{descontinuado,rejeitado}/` | `99-archive/` = `instantaneos-historicos/` + `superado/` |
| `04-project-management/retrospectivas/` | — (recriar na primeira retro) |

Dirs **preservados** por terem conteúdo real (só o `.gitkeep` saiu): `03-approval/pacotes-revisao/` (`P01-aceite-cross-functional-v1.md`), `99-archive/instantaneos-historicos/` (`Inventário dos arquivos de valor.md`), `99-archive/superado/` (canvas `Fases_Projeto_v0`).

### 3.3 Fase 3 — desvendorização Obsidian + docs

| Caminho | Ação |
|---|---|
| 12 temas em `.obsidian/themes/` (todos exceto `March`, o ativo) | `git rm --cached` — mantidos locais; 12 linhas de ignore |
| 11 plugins desabilitados (`advanced-canvas`, `better-export-pdf`, `canvas-export`, `canvas2document`, `colored-bases-properties`, `obsidian-chartsview-plugin`, `oz-image-plugin`, `pretty-properties`, `terminal`, `text-extractor`, `webpage-html-export`) | `git rm --cached` — mantidos locais; rastreados agora só os 10 de `community-plugins.json` |
| `System/Plugins docs/{Tracker Plugin,datacore}/` | `git rm -r` — plugins sem instalação e sem referências (única menção é nota futura condicional no dashboard) |
| `Charts Documentation 1.md`, `Task Notes/1. Terminology 1.md` | `git rm` — gêmeos byte-idênticos confirmados via `diff` |
| `System/Plugins docs/Canvas Bases/Demo/` | `git rm -r` — conteúdo de demonstração |
| `charts_cheatsheets pt-br.md` | **mantido** — `diff` provou que é tradução, não duplicata |

### 3.4 Fase 4 — cancelada (nada movido, nada apagado)

- Arquivamento de `03-approval/bloqueado/.../indicadores-xlsx/` → **cancelado**: são 432 KB de evidências P03-T09 (`RECONSTRUIDO_P03-T09_v1.xlsx` de 29/08 + relatórios `*-P03-T09`) referenciados por ~10 notas vivas; P03 está `em-revisao`. Gatilho correto: **após aprovação P03**.
- Suposta duplicação tripla do modelo de indicadores → **inexistente**: `02-refinement/.../modelo-indicadores/` e `MELHORADO_v1.1.xlsx` não estão no disco (mapa desatualizado); par restante (`abas-origem` vs `03-csv-corrigido`) é antes/depois de correção — trilha de auditoria, manter.
- Dedup de views/dashboard → **cancelado**: `kanban/tasks/agenda/relationships/documentacao-oficial` + dashboard editados em 02/09 — apagar seria destruir trabalho de ontem por ~20 KB.
- Correção `status` lista→escalar nas tarefas → **adiada**: 56+ frontmatters em revisão + comportamento de Base não verificado no Obsidian.
- Bônus executado: varredura de 46 `.DS_Store` do disco (nenhum era rastreado).

### 3.2 Decisões e regras afetadas

- Plugins/temas inativos saem do git mas ficam locais — reinstalação via marketplace se necessário.
- `06-deliverables/` volta a ser flat; subpastas se recriam na primeira entrega aprovada.
- `project-map.md` está desatualizado em: pastas `02-refinement/{prototipos,revisoes,revisoes-iteradas,testes-experimentos}` e `05-resources/{conjuntos-dados,materiais-origem,modelos,referencias-externas}` (não existem no disco), `MELHORADO_v1.1.xlsx`, contagens e hashes — **atualização pendente, fora deste registro**.
- Alterações `TaskNotes/` pré-existentes (working tree já sujo antes da poda) **não foram tocadas**.

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** nenhum — só higiene de índice; nenhum conteúdo de negócio movido ou apagado.
- **Impacto operacional:** clones futuros baixam ~70 MB a menos; Obsidian local inalterado (temas/plugins seguem no disco).
- **Impacto técnico ou de dados:** `.obsidian/` rastreado agora = JSONs de config + `March` + 10 plugins ativos.
- **Rastreabilidade:** pedido (avaliação de estrutura) → fases 1–3 executadas + fase 4 cancelada com evidência → este registro → commit pendente.

## 5. Validação e sincronização

- **Validação realizada:** `git check-ignore` nos padrões novos; `git ls-files` confirma temas (só `March`) e plugins (só os 10 habilitados); `diff -q` nos gêmeos antes de apagar; `ls -la` em cada diretório candidato antes do `rm`.
- **Resultado:** staged, **não commitado** — `git diff --cached --stat`: 135 arquivos, ~131 mil deleções.
- **Arquivos vivos sincronizados:** pendente — `project-map.md` e `README.md` precisam de refresh (seção 3.2).

## 6. Próximos passos

- [ ] Revisar `git diff --cached --stat` e commitar a poda
- [ ] Atualizar `project-map.md` (pastas fantasmas, contagens, hashes) e trechos voláteis do `README.md`
- [ ] Após aprovação P03: arquivar `03-approval/bloqueado/.../indicadores-xlsx/` em `99-archive/superado/`
- [ ] Confirmar no Obsidian o bug de filtro `status` lista vs escalar antes de qualquer correção em massa

## 7. Referências

- Branch de segurança: `backup/pre-prune-2026-09-03` (estado pré-poda)
- `TaskNotes/Task Dashboard.md:384` — única menção a Tracker (nota futura, aponta para cheatsheet mantido)
