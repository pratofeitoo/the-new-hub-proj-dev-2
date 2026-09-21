---
date: "{{date:YYYY-MM-DDTHH:mm:00}}"
type:
  - meeting-note
  - ata
language: pt-BR
attendees:
  - Tamara Braga
  - Marcos (braço tecnológico)
  - PF Rezende (controle projeto)
owner:
  - PF Rezende
duration: 
location: Google Meet
status: rascunho # rascunho | estruturada | validada
tags:
  - ata
related:
  - "[[Plataforma Ruby]]"
# --- Task 9B sync — rastreabilidade gate/evidência (no network, lifecycle task→plano→marcos→log→matriz) ---
evidence_required: [] # ex: ["01-work/dados-tech-financas/.../modelo-logico-P03-T01-v1.md", "02-review/pacotes/P03-Dados-Canonicos.md"]
gate: "" # ex: "G03.A1", "G05.4/TEC-005 blocking: yes", "G07.7/LCH-007 blocking: yes"
dec_link: "" # ex: "[[00-project-control/decisoes/DEC-M03-2026-10-15]]" — vazio até gate aprovado; 03-approved/ só com DEC-M*
blocked_until: "" # ex: "2026-10-15" se aguardando nomeação; usar com blocked_reason
blocked_reason: "" # ex: "aguardando nomeação Tech — TEC-005"
---

# Ata — {{title}} — {{date:YYYY-MM-DD HH:mm}}

> [!summary] TL;DR — Leia em 30 segundos
> <!-- 3-5 linhas: por que reunimos, o que decidimos, qual o próximo gatilho com data. Regra: alguém que não leu nada entende se precisa agir. -->
> 

| Campo | Valor |
|---|---|
| **Objetivo** | <!-- 1 frase: resultado esperado. Ex: Fechar custo mínimo por MVP para negociar piloto pago SEBRAE --> |
| **Facilitador(a)** |  |
| **Responsável pelo registro** | PF Rezende |
| **Gravação** | ![[audio.mp3]] |
| **Transcrição bruta** | `transcripts/{{date:YYYY-MM-DD}}-raw.md` |
| **Duração** |  |
| **Próxima reunião** |  |

---

## ✅ Decisões tomadas

<!-- Só o que foi BATIDO. Não é discussão. Formato: Decisão — motivo curto — impacto -->
1. 
2. 

| # | Decisão | Motivo/Contexto | Impacto |
|---|---|---|---|
| D1 |  |  |  |

---

## 📋 Ações — quem faz o quê até quando

<!-- Regra: toda ação = verbo no infinitivo + dono único + data. Vira task do Dataview/Kanban automaticamente -->

- [ ] **#1** <!-- Ex: Calcular horas por visão (Aba 2) × R$180–250 --> — @responsável — até {{date:YYYY-MM-DD}} 09h
- [ ] **#2** <!-- Ex: Desenho infra Hostinger 1 vs 3 máquinas --> — @responsável — até {{date:YYYY-MM-DD}}
- [ ] **#3**  — @ — até 

| # | Ação | Dono | Prazo | Status |
|---|---|---|---|---|
| A1 |  |  |  | ☐ Pendente |
| A2 |  |  |  | ☐ Pendente |

---

## 🗣️ Discussão por tema (resumo editado)

<!-- Não cole verbatim aqui. Resuma por tema, com bullets. Se precisar citar fala literal, use > [!quote] com Lxxx -->

### 1. <!-- Ex: Pricing e modelo financeiro -->
- Contexto:
- Pontos principais:
- Dúvidas/Riscos:

### 2. <!-- Ex: Infraestrutura e escalabilidade -->
- 

### 3. <!-- Ex: Produto / Escopo / Telas -->
- 

### 4. <!-- Ex: Comercial / Concorrência -->
- 

### 5. <!-- Ex: Proteção de IP / NDA -->
- 

---

## 📅 Próximos compromissos citados

| Data | Evento | Dono | Link |
|---|---|---|---|
|  |  |  |  |

---

## 🔗 Artefatos e referências

- Drive: `Plataforma Ruby > MVP` —
- Planilha: `TMVP.xlsx` — Aba 2 (visões) / Aba 4 (horas) / Aba 6 (caixa) —
- Canva: —
- Forms: —
- Infra: Hostinger VPS KVM-8 —

---

## 🔒 Gate, Evidência e Rastreabilidade (Task 9B — lifecycle)

> Preencha para toda ata que registra gate, decisão ou bloqueio. Preserva hierarquia `task frontmatter → plano → marcos → log → matriz`. Sem `DEC-M*` + pacote `02-review/pacotes/`, nenhum gate sai de `em-revisao`.

| Campo | Valor | Exemplo |
|---|---|---|
| **evidence_required** | <!-- lista de paths/canonical links; ver frontmatter --> | `01-work/dados-tech-financas/refinamento-modelo-dados/modelo-logico-fisico-P03-T01-v1.md`, `02-review/pacotes/P03-Dados-Canonicos.md` |
| **gate** | <!-- gate canônico + lacuna --> | `G03.B2/DAT-010 blocking: yes`, `G05.4/TEC-005 blocking: yes`, `G05.7/TEC-007 blocking: yes`, `G07.7/LCH-007 blocking: yes`, `G06.10/BRD-002/GTM-007 blocking: yes` |
| **DEC-* link** | <!-- link DEC-M* quando aprovado; vazio = gate pendente --> | `[[00-project-control/decisoes/DEC-M03-2026-10-15]]`, `[[00-project-control/decisoes/DEC-M07-2026-12-05]]` — se vazio, `ls 00-project-control/decisoes/DEC-M*.md ==0` |
| **blocked_until** | <!-- YYYY-MM-DD se aguardando nomeação; usar com blocked_reason --> | `2026-10-15` + `blocked_reason: "aguardando nomeação Tech"` — padrão `Tarefa_Executavel_Definicao.md §9` |
| **Cronograma** | <!-- View A Estratégico vs View B Operacional --> | View A: `P00→P07 Gates 15/10, 28/10, 28/11, 05/12` · View B: `Piloto SEBRAE 28/10 Prep 03/09–27/10 → Evento 28/10 → Follow-up → Relatório 28/11 → Decisão 05/12` |
| **Verificação** | <!-- comando local sem rede --> | `grep -c "a designar" 04-project-management/tarefas/P03*.md ==0; ls <evidence_required> && grep -c "G03\.\|TEC-\|LCH-\|BRD-" <ata> ` |

- **Regra lifecycle:** task (`P0*.md` com `owner`, `evidence_required`, `gate`, `DEC-*`, `blocked_until`) → plano fase → `marcos-fases-v1.md` (M01→M07) → `HUB_Log_Tarefas_Progresso.md` → `matriz-fases-tarefas-v1.md`. Ata só marca gate como aprovado com `DEC-M*` + pacote `02-review/pacotes/P0X-*.md`.
- **Bloqueio preservado:** `DAT-010/G03.B2`, `TEC-005/G05.4`, `TEC-007/G05.7`, `LCH-007/G07.7`, `BRD-002/GTM-007` permanecem `blocking: yes` até evidência + revisão + DEC — registrar `blocked_until` e `blocked_reason` quando aplicável.

---

> [!warning] Riscos e pontos de atenção
> <!-- O que pode nos travar se não cuidar. Ex: vazamento de IP, conflito de interesse, custo subestimado -->
> - 

---

## 📎 Transcrição — versões

> [!quote]- Transcrição LIMPA e diarizada (editada para leitura — clique para expandir)
> <!-- Cole aqui a versão limpa: com speakers (Tamara/Marcos/PF), filler removido, STT corrigido (Hostinger, Qulture.Rocks, Gupy, FIRJAN, SEBRAE). Mantenha decisões verbatim se importante. -->
> **Tamara:** 
> **Marcos:** 
> **PF Rezende:** 

> [!note]- Transcrição BRUTA original (STT verbatim — clique para expandir)
> <!-- Cole o dump cru sem edição para auditoria. Ou linke: ![[transcripts/2026-09-01-raw.md]] -->
> ```
> 
> ```

> [!tip] Como usar este template (apague ao criar a ata)
> 1. Duplique: `Cmd+O` → `_template-ata` → `Ata 2026-MM-DD - Tema`
> 2. Preencha frontmatter (attendees, duration, location)
> 3. Grave com diarização (Meet + Whisper `diarize:true` + timestamps)
> 4. Gere limpa com prompt: "Corrija STT (Hostinger, Qulture.Rocks, Gupy), remova filler né/tá/pô, identifique Tamara/Marcos/PF, preserve decisões verbatim, resuma por tema"
> 5. Preencha TL;DR → Decisões → Ações (com @ e data) → Discussão por tema
> 6. Marque `status: estruturada` e valide com donos. Tasks com `- [ ]` aparecem no Kanban/Dataview automaticamente.
> 7. Nunca cole 1500 linhas no corpo — use callout colapsado.

