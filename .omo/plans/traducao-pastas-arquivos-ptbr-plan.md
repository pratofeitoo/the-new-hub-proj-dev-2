# Plano — Tradução de Títulos de Pastas e Arquivos para pt-BR

**Status:** rascunho para aprovação  
**Data:** 2026-08-26  
**Escopo:** renomear pastas e arquivos ainda em inglês para pt-BR, preservando conteúdo já traduzido  
**Autor:** Sisyphus (exploração em 2026-08-26)

---

## 1. Contexto e objetivo

O repositório teve **todo o conteúdo interno traduzido para pt-BR** (README raiz, project-map.md, READMEs de pasta, conteúdo dos .md), mas a **estrutura física** — nomes de pastas e arquivos — permanece majoritariamente em inglês.

**Objetivo deste plano:** completar a tradução dos *títulos* (nomes) de pastas e arquivos para pt-BR de forma segura, sem quebrar:
- wikilinks/ markdown links (`[[...]]` e `](...)`)
- Bases (`.base`) com `file.inFolder()` / `file.name` / `file.path`
- Canvas (`.canvas`) com nós referenciando arquivos
- `workspace.json` / `data.json` de plugins
- histórico git

> Princípio: **conteúdo já está em pt-BR, falta a casca**. A renomeação deve ser atômica, com reescrita de links e validação automatizada.

---

## 2. Inventário — o que precisa ser traduzido

### 2.1 Pastas (84 diretórios rastreados, ~74 com segmento em inglês)

**Nível raiz (prefixo numérico mantido):**
| Atual | Proposto | Nota |
|---|---|---|
| `00-project-control` | `00-controle-projeto` | |
| `01-blueprint` | `01-blueprint` | **manter** — termo consagrado no framework; README já explica como "blueprint" |
| `02-refinement` | `02-refinamento` | |
| `03-approval` | `03-aprovacao` | sem acento |
| `04-project-management` | `04-gestao-projeto` | |
| `05-resources` | `05-recursos` | |
| `06-deliverables` | `06-entregaveis` | |
| `99-archive` | `99-arquivo` | |

**Subpastas de `00-controle-projeto`:**
`assumptions` → `premissas`, `change-log` → `registro-mudancas`, `decisions` → `decisoes`, `dependencies` → `dependencias`, `framework` → `framework` (manter), `gap-register` → `registro-lacunas`, `indexes` → `indices`, `risks` → `riscos`, `scope` → `escopo`, `scope/project-phases/draft` → `escopo/fases-projeto/rascunho`

**Subpastas de `01-blueprint`:**
`brand-market` → `marca-mercado`, `business-model` → `modelo-negocio`, `data-intelligence` → `dados-inteligencia`, `governance-legal` → `governanca-juridico`, `launch-vision` → `visao-lancamento`, `operations` → `operacoes`, `product` → `produto`, `strategy` → `estrategia`, `technology` → `tecnologia`, `strategy/first-project-draft` → `estrategia/primeiro-rascunho-projeto`, `data-intelligence/indicator-model` → `dados-inteligencia/modelo-indicadores`, `.../source-tabs` → `.../abas-origem`, `.../workbooks` → `.../pastas-trabalho`

> Subpastas de `indicator-model/source-tabs` já estão parcialmente em pt-BR (`00_Leia-me`, `01_Mapa_Visual`...). Manter padrão, apenas traduzir `00-manifest` → `00-manifesto`, e arquivos `_analysis.md` → `_analise.md`.

**Subpastas de `02-refinamento`:**
`data-model-refinement` → `refinamento-modelo-dados`, `financial-models` → `modelos-financeiros`, `governance-refinement` → `refinamento-governanca`, `product-refinement` → `refinamento-produto`, `prototypes` → `prototipos`, `research` → `pesquisa`, `reviews` → `revisoes`, `revisions` → `revisoes-iteradas`, `strategy` → `estrategia`, `tests-experiments` → `testes-experimentos`, `research/second-project-draft` → `pesquisa/segundo-rascunho-projeto`, `strategy/second-project-draft` → `estrategia/segundo-rascunho-projeto`, `data-model-refinement/indicator-model/cross-sheet-synthesis` → `.../sintese-entre-abas`, `.../workbooks` → `.../pastas-trabalho`

**Subpastas de `03-aprovacao`:**
`approval-criteria` → `criterios-aprovacao`, `approved` → `aprovado`, `blocked` → `bloqueado`, `conditionally-approved` → `aprovado-condicionalmente`, `evidence` → `evidencias`, `launch-gate` → `portao-lancamento`, `review-packets` → `pacotes-revisao`, `blocked/indicator-model/unapproved-draft-v2` → `bloqueado/modelo-indicadores/rascunho-nao-aprovado-v2`, `.../indicadores-xlsx/03-corrected-csv` → `.../03-csv-corrigido`, `.../04-correction-register` → `.../04-registro-correcoes`, `.../05-draft-workbooks` → `.../05-pastas-trabalho-rascunho`, `.../06-validation-reports` → `.../06-relatorios-validacao`

**Subpastas de `04-gestao-projeto`:**
`master-plans` → `planos-diretores`, `meeting-notes` → `atas-reuniao`, `milestones` → `marcos`, `phase-plans` → `planos-fase`, `retrospectives` → `retrospectivas`, `schedules` → `cronogramas`, `status-reports` → `relatorios-status`, `tasks` → `tarefas`, `work-logs` → `registros-trabalho`

**Subpastas de `05-recursos`:**
`datasets` → `conjuntos-dados`, `documents` → `documentos`, `external-references` → `referencias-externas`, `images` → `imagens`, `images/ui-sketches` → `imagens/esbocos-ui`, `presentations` → `apresentacoes`, `presentations/pitch-decks` → `apresentacoes/pitch-decks` (manter termo pitch), `source-materials` → `materiais-origem`, `spreadsheets` → `planilhas`, `templates` → `modelos`

**Subpastas de `06-entregaveis`:**
`business` → `negocio`, `data` → `dados`, `governance` → `governanca`, `investor` → `investidor`, `launch` → `lancamento`, `product` → `produto`

**Subpastas de `99-arquivo`:**
`deprecated` → `descontinuado`, `historical-snapshots` → `instantaneos-historicos`, `rejected` → `rejeitado`, `superseded` → `superado`

### 2.2 Arquivos (~55 arquivos com nome em inglês)

**Blueprints 01 (`HUB_*_Blueprint.md` → `HUB_Blueprint_*.md` em pt-BR):**
| Atual | Proposto |
|---|---|
| `HUB_Brand_and_Market_Blueprint.md` | `HUB_Blueprint_Marca_e_Mercado.md` |
| `HUB_Offer_and_Revenue_Architecture.md` | `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` |
| `HUB_Data_and_Intelligence_Blueprint.md` | `HUB_Blueprint_Dados_e_Inteligencia.md` |
| `HUB_Governance_and_Legal_Blueprint.md` | `HUB_Blueprint_Governanca_e_Juridico.md` |
| `HUB_Launch_and_Evolution_Blueprint.md` | `HUB_Blueprint_Lancamento_e_Evolucao.md` |
| `HUB_Operating_Model_Blueprint.md` | `HUB_Blueprint_Modelo_Operacional.md` |
| `HUB_Product_and_Capability_Blueprint.md` | `HUB_Blueprint_Produto_e_Capacidades.md` |
| `HUB_Technology_Architecture_Blueprint.md` | `HUB_Blueprint_Arquitetura_Tecnologica.md` |
| `HUB_Project_Blueprint_Foundation.md` | `HUB_Fundacao_Blueprint_Projeto.md` |
| `HUB_Three-Layer_Project_Development_Framework.md` | `HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.md` |
| `HUB_Three-Layer_Project_Development_Framework.pdf` | `HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas.pdf` |
| `HUB_Project_Gap_Register.md` | `HUB_Registro_Lacunas_Projeto.md` |
| `HUB_Project_Gaps.base` | `HUB_Lacunas_Projeto.base` |
| `HUB_Project_Tasks.base` | `HUB_Tarefas_Projeto.base` |
| `Project Phases.canvas` | `Fases_Projeto.canvas` |

**Refinamento 02:**
`HUB_v2_beachhead_research.md` → `HUB_v2_pesquisa_cabeca-de-praia.md` (ou `HUB_v2_pesquisa_beachhead.md` — manter beachhead como termo técnico — **decisão pendente**)
`HUB_v2_financial_model_requirements.md` → `HUB_v2_requisitos_modelo_financeiro.md`
`HUB_v2_governance_legal_research.md` → `HUB_v2_pesquisa_governanca_juridica.md`
`HUB_v2_gtm_partnerships_research.md` → `HUB_v2_pesquisa_gtm_parcerias.md`
`HUB_v2_market_competitive_research.md` → `HUB_v2_pesquisa_mercado_competitiva.md`
`HUB_v2_product_mvp_research.md` → `HUB_v2_pesquisa_produto_mvp.md`
(versões `pt-BR/` já traduzidas — apenas mover junto com pasta)

`HUB_Escopo_Estrategico_Documento_Mae_v2_Investor_Readiness_Plan.md` → `HUB_Escopo_Estrategico_Documento_Mae_v2_Plano_Prontidao_Investidor.md`
`HUB_Escopo_Estrategico_Documento_Mae_v2_Investor_Ready.md` → `HUB_Escopo_Estrategico_Documento_Mae_v2_Pronta_Investidor.md`
`HUB_Mapa_Inteligencia_Dados_Indicadores.xlsx` → manter (já pt-BR) ou `HUB_Mapa_Inteligencia_Dados_Indicadores.xlsx` (ok)
`HUB_Mapa_Inteligencia_Dados_Indicadores_ENHANCED_v1.1.xlsx` → `HUB_Mapa_Inteligencia_Dados_Indicadores_MELHORADO_v1.1.xlsx`

**Gestão 04:**
`BP-00*_HUB_*.md` (8 arquivos) → `BP-00*_HUB_Blueprint_*.md` com nomes pt-BR correspondentes
`template-reuniao.md` → manter (já pt-BR)
`template-decisao.md` → manter

**Recursos 05:**
`HUB_Mapa_Financeiro_Patrocinadores_Investidores.xlsx` → manter (já pt-BR)
`[FIRJAN] Deck - Plataforma HUB.pdf` → manter

**Sistema / Outros:**
`System/Plugins docs/...` → **NÃO traduzir** (ver §3)
`TaskNotes/...` → **NÃO traduzir** (ver §3)
`_types/task.md` → **NÃO traduzir**
`README.md` (raiz e por pasta) → manter nome (convenção), conteúdo já pt-BR
Arquivos `*_analysis.md` → `*_analise.md` (14 arquivos)
`build_baseline.py` → `construir_linha_base.py` **ou manter** (código) — **decisão pendente**

---

## 3. O que NÃO traduzir (e por quê)

| Pasta/arquivo | Motivo |
|---|---|
| `_types/` | `mdbase.yaml: types_folder: "_types"` — plugin `TaskNotes`/`mdbase` espera exatamente esse nome; renomear quebra `path_pattern: "TaskNotes/Tasks/{title}.md"` e `default_strict` |
| `TaskNotes/` e `TaskNotes/Views/` | plugin TaskNotes grava `task.md` com `file.hasTag("task")` e `data.json` com paths hardcoded; bases usam views fixas |
| `System/Plugins docs/` | documentação local de plugins comunitários — tradução criaria drift com upstream |
| `.obsidian/` | config do vault — Obsidian espera esse nome |
| `.git/`, `.logs/` | infra |
| `README.md` por pasta | convenção git/obsidian; conteúdo já pt-BR |
| `HUB_` prefixo | identidade do projeto — manter |
| Pastas `pt-BR/` dentro de `02-refinement/research/second-project-draft/pt-BR` | já em pt-BR, mas mover junto quando pasta pai for renomeada |

Se o usuário quiser traduzir `_types` → `_tipos` e `TaskNotes` → `NotasTarefas`, isso exige **migração de config** (`mdbase.yaml`, `task.md`, `data.json`, `.base` filters) — tratar como fase separada opcional.

---

## 4. Convenções de tradução

1. **kebab-case sem acentos** para pastas: `governanca-juridico`, `visao-lancamento`, `aprovacao`. Sem `ç`, `ã`, `é` para evitar problemas em scripts/CI e normalização macOS (NFD vs NFC).
2. **Preservar prefixos numéricos** (`00-`, `01-`...) — ordenação e `project-map.md` dependem deles.
3. **Arquivos `HUB_`**: `HUB_Blueprint_<Tema>_pt-BR` ou `HUB_<Tema>_Blueprint`? Proposta: `HUB_Blueprint_<Tema>.md` com tema em pt-BR PascalCase com underscores: `HUB_Blueprint_Arquitetura_Tecnologica.md`. Manter `.md` / `.base` / `.canvas`.
4. **XLSX/CSV**: já em pt-BR em grande parte; não renomear colunas internas, só nomes de arquivo quando em inglês.
5. **Links**: reescrever todos os `](...` e `[[...]]` e `file.inFolder("...")` para novos caminhos.

---

## 5. Análise de impacto

**Links internos:** 289 ocorrências de `HUB_` + referências de pasta em `.md`/`.base`/`.yaml`/`.json`. Exemplos:
- `README.md` → 15 links para `00-project-control/framework/...`, `01-blueprint/strategy/...`, etc.
- `project-map.md` → diagrama mermaid + tabela com todos os caminhos
- `00-project-control/gap-register/HUB_Project_Gaps.base` → `file.inFolder("WORK/HUB/Projects/.../00-project-control/gap-register/gaps")` — se renomear, atualizar filtro
- `04-project-management/tasks/HUB_Project_Tasks.base` → `file.hasTag("task")` (não quebra), mas `target_file` pode conter paths
- `TaskNotes/Views/*.base` → não referenciam pastas produto, risco baixo
- `.obsidian/workspace.json` → ~30 referências a `HUB_*`, `Project Phases.canvas`, `Plano de Ação.md` — precisa reescrever
- `.canvas` → `Project Phases.canvas` contém nós com links — reescrever

**Config Obsidian:** `app.json: alwaysUpdateLinks=true` ajuda com wikilinks, mas **não cobre** links markdown `](...)`, nem `.base`, nem `workspace.json`. Não confiar só no automatismo.

**Risco de quebra:** Bases com `file.inFolder` absoluto falham silenciosamente (view vazia). Workspace com arquivo não encontrado abre aba vazia. Links quebrados em README/project-map afetam navegação.

---

## 6. Estratégia de execução (5 fases, com dependências)

### Fase 0 — Preparação (sem renomeação)
- [ ] Criar branch `chore/traducao-ptbr-pastas-arquivos`
- [ ] Rodar script de inventário: `find . -type d/f | sort > inventario-antes.txt`
- [ ] Rodar scanner de links: `grep -R --include="*.md" --include="*.base" --include="*.json" --include="*.canvas" --include="*.yaml" -n "00-project\|01-blueprint\|HUB_"` → `links-antes.txt`
- [ ] Decidir glossário final (§2 + §4) — **aprovação do usuário necessária**
- [ ] Escolher: traduzir ou não `_types`/`TaskNotes`/`System`

### Fase 1 — Pastas (top-down, `git mv`)
Ordem: raiz → nível 1 → nível 2. Uma pasta por commit para `git log --follow` preservar histórico.
1. `00-project-control` subpastas
2. `01-blueprint` subpastas
3. `02-refinement` subpastas
4. `03-approval` subpastas (inclui `indicadores-xlsx` profundos)
5. `04-project-management` subpastas
6. `05-resources` subpastas
7. `06-deliverables` e `99-archive` subpastas
8. Por último, as próprias pastas raiz `00-`...`99-` (se decidido)

> Alternativa segura: renomear só subpastas e manter nomes raiz em inglês (`00-project-control` etc.) — menos impacto. **Recomendação: manter raiz em inglês com prefixo numérico, traduzir só subpastas**. A decidir.

### Fase 2 — Arquivos (`git mv`)
- [ ] `HUB_*_Blueprint.md` (10 arquivos) — renomear e atualizar frontmatter `aliases`
- [ ] `HUB_v2_*.md` (6+6 pt-BR cópias) — mover junto
- [ ] `*_analysis.md` → `*_analise.md` (14)
- [ ] `Project Phases.canvas` → `Fases_Projeto.canvas`
- [ ] `BP-00*.md` e `HUB_Escopo*` em `04/02`

### Fase 3 — Reescrita de links e configs
Script único (ex.: `scripts/rewrite-links.py`) que:
- lê mapa `de→para` (CSV gerado na Fase 0)
- reescreve `](`, `[[`, `file.inFolder("`, `file":"`, `.obsidian/workspace.json` (JSON), `.canvas` (JSON)
- atualiza `project-map.md` (tabela + mermaid) e todos `README.md` de pasta
- atualiza `HUB_Project_Gaps.base` e `HUB_Project_Tasks.base` se renomeados
- preserva `alwaysUpdateLinks` — rodar com Obsidian fechado para evitar race

### Fase 4 — Verificação
- [ ] `grep -R "00-project-control\|01-blueprint\|02-refinement\|03-approval\|04-project-management" --include="*.md" --include="*.base" --include="*.json"` deve retornar 0 (exceto histórico `.git`)
- [ ] Abrir vault no Obsidian: checar `Graph View`, abrir cada `.base`, abrir `Project Phases.canvas`
- [ ] `yamllint` / `python -m json.tool` nos `.base`/`.json`
- [ ] `git status` sem arquivos untracked inesperados

### Fase 5 — Documentação e merge
- [ ] Atualizar `project-map.md` header: `<!-- last-synced: ... -->` e git hash
- [ ] Atualizar `README.md` raiz (se raiz renomeada)
- [ ] Commit final `docs: traduz títulos de pastas/arquivos para pt-BR` + PR

---

## 7. Automação proposta (esboço)

```bash
# inventario
find . -type d | grep -v ".git" | sort > /tmp/dirs-antes.txt
find . -type f | grep -v ".git" | grep -v ".obsidian" | sort > /tmp/files-antes.txt

# mapa de renomeacoes (gerar a partir do glossário §2)
cat > /tmp/mapa.csv <<'CSV'
00-project-control/assumptions,00-controle-projeto/premissas
01-blueprint/brand-market,01-blueprint/marca-mercado
...
CSV

# renomeacao com git mv
while IFS=, read -r de para; do git mv "$de" "$para"; done < /tmp/mapa.csv

# reescrita de links (python)
python scripts/rewrite-links.py --map /tmp/mapa.csv --roots "." \
  --include "*.md,*.base,*.canvas,*.json,*.yaml"
```

`rewrite-links.py` deve fazer replace ordenado por tamanho decrescente de `de` para evitar substring collisions.

---

## 8. Riscos e mitigação

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Links quebrados silenciosos (bases vazias) | Alta | Alto | scanner antes/depois + abrir cada base no Obsidian |
| `workspace.json` com abas perdidas | Média | Médio | reescrever JSON com `python -m json.tool` + teste manual |
| Histórico git perdido | Baixa | Médio | sempre `git mv`, nunca `mv` + `git add` |
| Normalização macOS (NFD) com acentos | Alta se usar acentos | Alto | **usar sem acentos** (kebab ascii) |
| Colaboradores com branch aberto | Média | Alto | avisar, fazer em janela curta, branch único |
| `_types`/`TaskNotes` quebram plugin | Alta se renomear | Alto | **não renomear** por padrão |

---

## 9. Decisões pendentes (precisa do usuário antes de executar)

1. **Raiz:** traduzir `00-project-control` → `00-controle-projeto` etc. ou manter raiz em inglês e traduzir só subpastas? (Recomendação: manter raiz por compatibilidade, traduzir subpastas.)
2. **Blueprint:** manter `01-blueprint` ou virar `01-blueprint` → `01-projeto-base`? (Recomendação: manter `blueprint`.)
3. **`_types` / `TaskNotes` / `System`:** traduzir? (Recomendação: não.)
4. **`beachhead`**: traduzir para `cabeca-de-praia` ou manter termo técnico `beachhead`?
5. **`build_baseline.py`**: renomear para pt-BR ou manter (código)?
6. **Padrão de arquivo HUB**: `HUB_Blueprint_<Tema>.md` vs `HUB_<Tema>_Blueprint.md`? (Recomendação: `HUB_Blueprint_<Tema>.md`.)
7. **Janela de execução:** pode fechar Obsidian e pausar colaboradores durante a migração?

---

## 10. Estimativa

- **Inventário + glossário final:** 1–2h (com aprovação)
- **Renomeações + reescrita:** 2–3h (script + testes)
- **Verificação Obsidian + bases:** 1h
- **PR/docs:** 0.5h
- **Total:** ~5–6h, 1 branch, ~30 commits (um por grupo de renomeação) para `git log --follow` limpo

---

## 11. Próximos passos

1. **Aprovar ou ajustar** o glossário do §2 e as convenções do §4.
2. **Responder** às 7 decisões pendentes do §9.
3. Ao aprovar, executo as 5 fases na ordem, com verificação após cada fase, sem pular para implementação antes do sinal verde.

