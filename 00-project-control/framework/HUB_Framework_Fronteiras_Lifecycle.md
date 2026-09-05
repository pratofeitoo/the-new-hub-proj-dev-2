---
title: Framework de Fronteiras Lifecycle do HUB
aliases:
  - Lifecycle Borders Framework
  - HUB Filesystem Lifecycle Contract
tags:
  - hub
  - project-framework
  - governance
  - lifecycle
type:
  - framework
author:
  - PF Rezende
---

# Framework de Fronteiras Lifecycle do HUB

> **Para agentes (leia primeiro):** este documento é a fonte normativa de ONDE os arquivos vivem
> e COMO eles se movem. Antes de qualquer criação, move ou promoção de arquivo, identifique a
> transição que você está executando na §2 e valide-a contra a §4. Em dúvida, não mova — pergunte.
> Documento-irmão (processo): [[HUB_Framework_Desenvolvimento_Projeto_Tres_Camadas|Três Camadas]].
> Histórico de decisões: `00-project-control/registro-mudancas/2026-09-05-*`.

## 1. Princípio

**A pasta = nível de confiança.** Um arquivo, um status, um lugar. Rascunho nunca divide endereço
com aprovado. O `status:` do frontmatter MUST ser igual ao da pasta; a pasta é a verdade, o campo é o carimbo.

Fonte única de verdade: vault iCloud `The New HUB dev-2` (git). O Google Drive `THE NEW HUB` é
exporto somente-leitura de `03-approved/` com paths idênticos — nunca origem, nunca cópia manual.

## 2. Máquina de estados

```
01-work ──(submeter: congelar + carimbar em-revisao + dono + data)──▶ 02-review
02-review ──(gate aprova: mover + carimbar aprovado + bloco de histórico)──▶ 03-approved
02-review ──(gate rejeita/bloqueia)──▶ 01-work  (ou 02-review/bloqueado/ com motivo)
03-approved ──(nova necessidade)──▶ nova versão começa em 01-work (NUNCA edita no lugar)
qualquer ──(obsoleto, com motivo)──▶ 99-archive
```

Transições inexistentes acima são proibidas. Em particular: `01-work → 03-approved` direto (sem gate)
e qualquer edição dentro de `03-approved/` ou `02-review/`.

## 3. Vocabulários controlados

`status:` por fronteira (MUST):

| Pasta | `status:` permitido |
|---|---|
| `01-work/` | `rascunho` \| `em-elaboracao` |
| `02-review/` | `em-revisao` |
| `03-approved/` | `aprovado` |
| `99-archive/` | `superado` \| `rejeitado` \| `descontinuado` |

Exceções documentadas (SHOULD NOT estender sem registro):

- `01-work/pesquisa-e-confianca/documentos-oficiais/` usa o vocabulário herdado do shell (`hipotese | em_elaboracao | ...`),
  sempre abaixo de aprovado. Nada ali é oficial (bloqueador GOV-001). Cada saída exige evidência
  legal individual via `02-review/`.
- `layer:` (`cross-cutting | governance | refining | blueprint | approval | ...`) é taxonomia de
  **papel do conteúdo**, ortogonal a lifecycle. `layer: blueprint` numa tarefa = "tarefa sobre a camada
  blueprint", não "arquivo em rascunho". **Nunca normalizar em massa** (auditoria 2026-09-05).
- `type: test-scenario`, `hypothesis` no corpo de aprovados e `tags: scenario` descrevem o que o
  documento É, não seu status. Rotular estimativa como hipótese dentro de aprovado é virtude, não violação.

## 4. Contrato de diretórios (normativo)

- `01-work/<tema>/<domínio>/` — MUST conter só elaboração editável, em 4 temas com README próprio:
  `mercado-e-direcao/` (`estrategia/`, `modelo-negocio/`, `marca-mercado/`, `visao-lancamento/`),
  `produto-e-operacao/` (`produto/`, `operacoes/`, `refinamento-produto/`),
  `dados-tech-financas/` (`dados-inteligencia/`, `tecnologia/`, `modelos-financeiros/`,
  `refinamento-modelo-dados/`), `pesquisa-e-confianca/` (`pesquisa/`, `governanca-juridico/`,
  `documentos-oficiais/`). Arquivo novo nasce aqui com `rascunho`. Nomes de domínio MUST NOT mudar
  sem registro; temas novos exigem decisão do usuário.
- `02-review/pacotes/` — MUST conter só pacotes congelados com gate, dono e data. `02-review/bloqueado/`
  MUST registrar o motivo do bloqueio. Nada aqui é editado.
- `03-approved/<domínio>/` — MUST conter só finais gate-assinados com bloco `## Histórico de aprovação`
  (data, gate, aprovador, commit). Imutável. `documentos-oficiais/` reservado, vazio até o primeiro gate legal.
- `00-project-control/`, `04-project-management/`, `05-resources/`, `99-archive/`, `TaskNotes/`, `System/`
  são transversais e MUST NOT carregar `status:` de lifecycle.
- `05-resources/inbox/` + `05-resources/fontes/` são matéria-prima, MUST NOT ser citados como evidência.
- Pastas aposentadas (`01-blueprint/`, `02-refinement/`, `03-approval/`, `06-deliverables/`,
  `05-resources/Processar/`) MUST NOT ser recriadas. Referências a elas em docs vivos são bug, exceto
  prosa histórica em `registro-mudancas/`, `99-archive/` e neste framework.

## 5. Procedimento operacional do agente

Antes de mover/promover (MUST, nesta ordem):

1. Declare a transição da §2 que você está executando.
2. Use `git mv` (preserva `git log --follow`). Cross-filesystem (Drive): `cp` + verificação, nunca `mv` sem conferência.
3. Atualize `status:` + anexe/atualize o bloco de histórico.
4. Rode o sweep de links: `grep -rln "01-blueprint/\|02-refinement/\|03-approval/\|05-resources/Processar\|06-deliverables/\|04-project-management/cenarios" --include="*.md" .` (exclua `99-archive/`, `registro-mudancas/`) — resultado MUST ser vazio.
5. Rode a checagem de fronteira: `grep -rh "^status:" 03-approved/ | sort | uniq -c` MUST mostrar só `aprovado`; o mesmo para `02-review/` (`em-revisao`).
6. Mirror Drive (só se `03-approved/` mudou): copiar com paths idênticos + `diff -rq` limpo. Deletes no Drive exigem aprovação explícita do usuário.
7. Atualize `README.md` + `project-map.md` se a árvore mudou. Mudança estrutural sem registro em
   `00-project-control/registro-mudancas/` é incompleta.

## 6. Anti-padrões (todos observados neste repo, todos proibidos)

1. **Editar aprovado no lugar** — causa: conveniência. Custo: finais indistinguíveis de rascunhos. Correto: nova versão em `01-work/`.
2. **Recriar pastas aposentadas** — `02-refinement/` dissolvida em 2026-09-05. Correto: `01-work/`.
3. **"Normalizar" `layer:` ou `type:` em massa** — destrói a taxonomia de papel (auditoria 2026-09-05). Correto: só `status:` segue fronteira.
4. **Copiar à mão para o Drive** — causa drift comprovado (cenarios divergiram por 1 tag em dias). Correto: espelho com `diff -rq`.
5. **Tratar shell como oficial** — `01-work/documentos-oficiais/` é aspiração até GOV-001. Correto: README de aviso + gate individual por documento.
6. **Mover sem `git mv`** — quebra `git log --follow` e apaga a prova de origem. Correto: sempre `git mv`, branch dedicada + tag de backup em moves grandes.

## 7. Manutenção deste documento

Estável por desenho. Detalhe de sessão vive em `registro-mudancas/` e é referenciado, nunca colado aqui.
Alterar §2–§4 exige decisão registrada do usuário. Verificação de rotina e guia de sessão em
[[00-project-control/registro-mudancas/2026-09-05-lifecycle-fronteiras-manutencao|manutenção 2026-09-05]].
