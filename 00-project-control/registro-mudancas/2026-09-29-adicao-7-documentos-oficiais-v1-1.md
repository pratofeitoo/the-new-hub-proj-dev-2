---
title: "Registro de Mudança — Adição 7 Documentos Oficiais v1.1"
date: 2026-09-29
type: registro-mudanca
status: rascunho
tags:
  - projeto/registro-mudanca
  - projeto/gestao
related_notes: []
author:
  - PF Rezende
commits: []
---

# Registro de Mudança — Adição 7 Documentos Oficiais v1.1

> [!info] Identificação
> - **Data:** 2026-09-29
> - **Tipo:** governança (documentos oficiais)
> - **Origem:** revisão deep-dive 8 seções de `HUB_Mapa_Documentos_Oficiais_v1.md` (GOV-MAP-001) vs `HUB_Mapa_Documentos_Nao_Obrigatorios_v1.md` (GOV-MAP-002)
> - **Antecessor:** —

## 1. Resumo

Deep-dive nas 32 linhas oficiais 01-08 identificou 7 essenciais ausentes em ambos os mapas. Proposta v1.1 adiciona 1.06, 1.07, 2.06, 3.06, 4.09, 6.06, 8.05.

**Resultado:** minuta das 7 linhas em formato tabela pronta para colar na v1.1, ainda não aplicada ao mapa canônico.

## 2. Contexto e motivação

- **Antes:** GOV-MAP-001 com 32 linhas 01.01-08.04, base legal 2026-09-02, status `hipótese` bloqueado por GOV-001.
- **Problema ou oportunidade:** gaps bloqueantes para CNPJ, enterprise e fiscalização: sem viabilidade REDESIM, sem certidões, sem canal assédio Lei 14.457/22, sem DPO formal, sem consentimento imagem/acessibilidade, sem MROSC, sem governança Instituto/MP.
- **Objetivo:** fechar buracos obrigatórios antes de pedir CNPJ / contratar / operar evento.

## 3. O que mudou

### 3.1 Artefatos criados ou atualizados

| Arquivo | Papel | Gaps / requisitos | Links |
|---|---|---|---|
| `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1.md` | fonte revisada (32 linhas, sem edição) | GOV-001..009, STR-001, FIN-002 | GOV-MAP-001 |
| `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1.md` | conferido para evitar duplicação 09-14 | GOV-001, GOV-004, FIN-002 | GOV-MAP-002 |
| este registro | minuta 7 linhas v1.1 para colar | GOV-001, GOV-002, GOV-004, GOV-007..009, FIN-002, STR-001..002 | — |

Documentos novos propostos:

| # | Documento | Natureza | Gatilho |
|---|---|---|---|
| 1.06 | Viabilidade REDESIM + Consulta Nome + Declaração Desimpedimento + Procuração e-CAC/gov.br | Registro prévio | Antes de 1.01/2.01 |
| 1.07 | Livro de Associados + Atas Anuais + Parecer Conselho Fiscal + Prestação Contas MP | Societário / Prestação | Na fundação 1.02, depois anual |
| 2.06 | Certidões Negativas (CND Federal/Estadual/Municipal + FGTS + Trabalhista CNDT) | Certidão | Rotina mensal |
| 3.06 | Termo Consentimento Imagem/Voz + Acessibilidade + Autorização ECA/LBI | Licença / Consentimento | Ao operar evento/experiência |
| 4.09 | Termo Fomento / Colaboração MROSC + Plano Trabalho + Prestação Contas | Contrato | Se captar verba pública |
| 6.06 | Ato Nomeação Encarregado (DPO) + Workflow Direitos Titulares art.18 + Tabela Retenção/Descarte | Governança | Antes de coletar |
| 8.05 | Canal Denúncias Assédio + CIPA Assédio + Política Conscientização | Obrigação | Ao contratar 1 CLT |

Tabelas completas com colunas `Órgão / Base legal 2026-09-02`, `Status`, `Gap ID` entregues em sessão e prontas para colar por seção (§1 após 1.05, §2 após 2.05, §3 após 3.05, §4 após 4.08, §6 após 6.05, §8 após 8.04).

### 3.2 Decisões e regras afetadas

- 3.05/4.08 seguem `bloqueado` GOV-003 — 3.06 e 4.09 não desbloqueiam Selo.
- 5.03 registro software segue `adiado` com ressalva de risco se Plataforma for core.
- 1.06 numerado após 1.05 para evitar renumeração, mas logicamente anterior a 1.01.

## 4. Impactos e rastreabilidade

- **Impacto no escopo:** +7 linhas oficiais (32 → 39). Nenhum 09-14 alterado.
- **Impacto operacional:** destrava CNPJ (1.06), contratação CLT (8.05), eventos (3.06), coleta LGPD (6.06).
- **Impacto técnico ou de dados:** nenhum.
- **Rastreabilidade:** revisão 8 seções → 7 gaps → minuta → este registro → futura v1.1 do mapa.

## 5. Validação e sincronização

- **Validação realizada:** conferência contra GOV-MAP-002 para não duplicar 09.01-14.05; base legal 2026-09-02 mantida.
- **Resultado:** pendente — aplicar no mapa + validar OAB/CRC.
- **Arquivos vivos sincronizados:** nenhum ainda.

## 6. Próximos passos

- [ ] Colar as 7 linhas na cópia v1.1 de `HUB_Mapa_Documentos_Oficiais_v1.md`
- [ ] Validar com advogado OAB + contador CRC antes de qualquer registro
- [ ] Decidir GOV-001 (nº CNPJs) para ajustar `Entidade dona`

## 7. Referências

- `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1.md`
- `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Nao_Obrigatorios_v1.md`
- `01-work/documentos-oficiais/_controle/HUB_Instrucao_Vault_Documentos_Oficiais.md`
