---
title: "HUB — Mapa de Documentos Oficiais v1"
map_id: GOV-MAP-001
status: rascunho
layer: refinement
area: governance-legal
version: "1.0"
created: 2026-09-02
updated: 2026-09-02
base_legal_data: 2026-09-02
jurisdicao: Brasil - legislação federal vigente em 2026-09-02
blueprint_ref: "[[02-review/01-blueprint/governanca-juridico/HUB_Blueprint_Governanca_e_Juridico]]"
gap_ids: [GOV-001, GOV-002, GOV-003, GOV-004, GOV-005, GOV-006, GOV-007, GOV-008, GOV-009, STR-001, FIN-002]
tarefas_ref: [P04-T01, P04-T02, P05-T01]
tags: [governanca, juridico, documentos-oficiais, fundacional, brasil-2026]
---

# HUB — Mapa de Documentos Oficiais v1

> [!warning] Natureza deste documento
> **Rascunho de refinamento em 2026-09-02. Não é parecer jurídico, contábil ou tributário.** Base legal considerada: Constituição Federal, Código Civil (Lei 10.406/02), LGPD (Lei 13.709/18), Marco Civil (Lei 12.965/14), CLT, Código Tributário Nacional, EC 132/2023 (Reforma Tributária - transição IBS/CBS), Lei das S/A (6.404/76), Marco Legal das Startups (LC 182/21), Marco Regulatório das OSCs (Lei 13.019/14). Validação obrigatória com advogado (OAB) e contador (CRC) antes de qualquer registro. Nenhuma linha abaixo autoriza operação.

> [!important] Decisão bloqueadora
> **GOV-001 / STR-001 ainda em aberto:** 4 unidades conceituais (Marca HUB, HUB Negócios, Instituto HUB, Plataforma HUB) não têm forma jurídica definida. Este mapa parte da hipótese **3 CNPJs** (1 Negócios/Plataforma como unidades de negócio ou 2 se separar; 1 Instituto; Marca como ativo sem CNPJ próprio). Se a decisão for 1 CNPJ único ou 4, duplique/consolide as linhas. Enquanto GOV-001 não fechar, toda coluna `Status` permanece `hipótese`.

## Como usar

1. Preencha `Status`: `hipótese` → `em contratação` → `registrado` → `aprovado`. Só `aprovado` com evidência vai para `02-review/aprovado/` → `03-approved/governanca/`.
2. Preencha `Evidência / Arquivo`: número do protocolo, livro/folha, `Nº INPI`, ou link para PDF em `05-resources/documentos/` ou `03-approved/governanca/`.
3. Regra: **leia na camada mais madura, escreva na menos madura**. Não edite este mapa para "corrigir" o blueprint; abra refinamento e promova via aprovação.
4. Atualize `base_legal_data` quando a lei mudar (ex: virada IBS/CBS 2027).

---

## 1. Atos Constitutivos — sem isso nada existe

| # | Documento | Natureza | Entidade dona (hipótese) | Órgão / Base legal 2026-09-02 | Gatilho — quando vira obrigatório | Status | Gap ID | Evidência / Arquivo |
|---|---|---|---|---|---|---|---|
| 1.01 | Contrato Social (ou Estatuto se S/A) + alterações consolidadas | Constitutivo | HUB Negócios (e Plataforma se CNPJ separado) | Junta Comercial do estado + REDESIM | Antes de pedir CNPJ | hipótese | GOV-001, STR-001 |  |
| 1.02 | Estatuto Social + Ata de Fundação + Ata de Eleição da Diretoria | Constitutivo | Instituto HUB | Cartório RTD Pessoa Jurídica | Antes de pedir CNPJ do Instituto | hipótese | GOV-001, STR-001 |  |
| 1.03 | Acordo de Sócios / Acionistas (vesting, lock-up, tag along, deadlock) | Contratual fundacional | Marca HUB (sócios do grupo) | Privado - não registra na Junta (pode averbar) | Antes de integralizar capital | hipótese | GOV-001, GOV-004 |  |
| 1.04 | Acordo de Cotitularidade / Licença de Marca e Método C.A.O.S. | Contratual fundacional | Marca HUB → licencia para Negócios/Instituto/Plataforma | Privado | Antes de qualquer unidade usar "HUB" comercialmente | hipótese | GOV-001, GOV-006 |  |
| 1.05 | Livro de Registro de Sócios/Ações (se S/A ou LTDA com acordo) | Societário | HUB Negócios | Junta / próprio | Na constituição | hipótese | GOV-001 |  |

## 2. Registros Governamentais — existência fiscal

| # | Documento | Natureza | Entidade dona | Órgão / Base legal 2026-09-02 | Gatilho | Status | Gap ID | Evidência |
|---|---|---|---|---|---|---|---|
| 2.01 | CNPJ + DBE + NIRE | Registro | Cada CNPJ | Receita Federal / Junta via REDESIM | Após ato constitutivo | hipótese | GOV-001 |  |
| 2.02 | Inscrição Municipal + Alvará de Localização e Funcionamento | Registro | Cada CNPJ com sede | Prefeitura (Empresa Fácil / REDESIM) | Antes de operar/faturar no município | hipótese | GOV-001 |  |
| 2.03 | Inscrição Estadual | Registro | Só se vender mercadoria/transporte/comunicação | SEFAZ estadual | Se objeto incluir circulação de bens | n/a por enquanto | FIN-002 |  |
| 2.04 | Certificado Digital e-CNPJ A1/A3 | Habilitação | Cada CNPJ | ICP-Brasil | Para emitir NFSe/NFe e assinar | hipótese | GOV-005 |  |
| 2.05 | Inscrição no INSS / CEIS / CNO (se obra) | Registro | Cada CNPJ | Receita | Se tiver obra ou contratação | condicional | GOV-001 |  |

## 3. Licenças e Autorizações Operacionais — condicionais à oferta (BP-001)

| # | Documento | Natureza | Entidade | Órgão / Base legal | Gatilho | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 3.01 | Licenciamento ambiental / sanitário / bombeiros (AVCB/CLCB) | Licença | Quem opera espaço físico | Prefeitura / Corpo de Bombeiros | Se tiver sede com atendimento público ou evento presencial | condicional | STR-002 |
| 3.02 | Autorização para eventos com público + ECAD (se música) | Licença | HUB Negócios (frente Mídia e Experiências) | Prefeitura / ECAD (Lei 9.610/98) | Ao operar evento/experiência inclusiva | condicional | STR-002, STR-005 |
| 3.03 | Credenciamento educacional (se emitir diploma técnico/superior) | Registro | Instituto HUB (Academia) | MEC / Conselho Estadual | Só se sair de "curso livre" para regulado | adiado | STR-002 |
| 3.04 | Cadastro como OSC / OSCIP / CEBAS (se buscar imunidade/isenta) | Título | Instituto HUB | Ministério competente / MDS | Só se optar por regime filantrópico - não presumir | hipótese | FIN-002, STR-001 |
| 3.05 | Licença de uso de termo "certificação" (se Selo virar certificação formal) | Alerta | Selo HUB | INMETRO / Sistema Brasileiro de Avaliação da Conformidade | Enquanto Selo for "reconhecimento", não é certificação - GOV-003 bloqueia uso comercial | bloqueado | GOV-003 |

## 4. Contratos Fundamentais — arquitetura modular (BP-006 §2)

| # | Documento | Natureza | Entidade dona | Base legal 2026-09-02 | Gatilho | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 4.01 | Acordo-Quadro de Serviços (MSA) cliente/instituição | Contrato | HUB Negócios | Código Civil + CDC quando aplicável | Antes do primeiro cliente | hipótese | GOV-004 |
| 4.02 | Statement of Work / Ordem de Jornada (escopo, entregáveis, aceitação) | Contrato | HUB Negócios | Código Civil | A cada projeto | hipótese | GOV-004 |
| 4.03 | Termos de Uso da Plataforma + SLA + Política de Uso Aceitável | Contrato | Plataforma HUB | Marco Civil + LGPD + CDC | Antes de provisionar tenant | hipótese | GOV-004, GOV-002 |
| 4.04 | DPA + Cronograma de Fluxos (categorias, base legal, suboperadores, retenção) | Contrato | Plataforma HUB + Cliente (controlador) | LGPD art. 39-40 + Regulamento ANPD 2024 | Antes de tratar dado pessoal | hipótese | GOV-002, GOV-007 |
| 4.05 | Contrato com Fornecedores / Avaliadores / Especialistas | Contrato | HUB Negócios | Código Civil | Antes de qualificar fornecedor | hipótese | GOV-004 |
| 4.06 | Contrato Intercompany / Preço de Transferência (se +1 CNPJ) | Contrato | Entre CNPJs do grupo | Código Civil + IN RFB 1.312 + EC 132/2023 | Se houver compartilhamento de custo/receita | condicional | GOV-001, FIN-002 |
| 4.07 | Termo de Voluntariado / Cessão de Direitos (para Instituto) | Contrato | Instituto HUB | Lei 9.608/98 + Lei 9.610/98 | Se usar voluntário ou conteúdo de terceiro | condicional | GOV-006 |
| 4.08 | Termos do Selo HUB (critérios, taxas, recurso, licença de marca) | Contrato | Selo HUB (governança independente) | Código Civil + CDC | Só após GOV-003 aprovado - uso comercial bloqueado até lá | bloqueado | GOV-003, GOV-004 |

## 5. Propriedade Intelectual e Ativos Intangíveis

| # | Documento | Natureza | Entidade dona | Órgão / Base legal 2026-09-02 | Gatilho | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 5.01 | Pedido de Registro de Marca "HUB" + "C.A.O.S." + "Selo HUB" (classe por classe) | Registro | Marca HUB | INPI (Lei 9.279/96) | Antes de licenciar uso - 9 a 18 meses de fila | hipótese | GOV-006 |
| 5.02 | Registro de PI: Contratos de Cessão de empregados/contratados + cláusula de PI | Contratual | Cada CNPJ empregador | Lei 9.610/98 + Lei 9.279/96 | Na contratação | hipótese | GOV-006 |
| 5.03 | Registro de Software / Código (opcional, prova de autoria) | Registro | Plataforma HUB | INPI - Diretoria de Software | Ao fechar release | adiado | GOV-006 |
| 5.04 | Inventário de PI + Matriz open-source / terceiros | Governança | Marca HUB | Interno | Antes do primeiro release | hipótese | GOV-006, GOV-005 |
| 5.05 | Domínios .com.br / .app + contas | Registro | Marca HUB | Registro.br | Imediato | hipótese | GOV-006 |

## 6. Conformidade — LGPD / ANPD / Segurança

| # | Documento | Natureza | Entidade | Órgão / Base legal 2026-09-02 | Gatilho | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 6.01 | Registro de Operações de Tratamento (ROPA) - inventário fluxo a fluxo | Governança | Cada controlador (cliente + unidades HUB) | LGPD art. 37 + Regulamento ANPD 02/2024 | Antes de tratar dado pessoal | hipótese | GOV-002, GOV-007 |
| 6.02 | Política de Privacidade + Aviso de Cookies + Canal do Encarregado (DPO) | Governança | Plataforma HUB | LGPD art. 41 + Guia ANPD | Antes de coletar dado | hipótese | GOV-002 |
| 6.03 | Relatório de Impacto (RIPD) - para dados sensíveis / alto risco | Governança | Controlador | LGPD art. 38 + Regulamento ANPD | Se tratar dado sensível, criança/adolescente ou risco | condicional | GOV-002, GOV-009 |
| 6.04 | Política de Segurança da Informação + Plano de Resposta a Incidentes | Governança | Plataforma HUB | LGPD art. 46-48 + ISO 27001 (referência) | Antes de operar | hipótese | GOV-005 |
| 6.05 | Notificação de Incidente (se houver) | Obrigação | Controlador | ANPD - Resolução 15/2024 (prazo 3 dias úteis) | Se houver incidente relevante | n/a | GOV-002 |

## 7. Fiscal-Contábil — Reforma Tributária em transição

| # | Documento | Natureza | Entidade | Órgão / Base legal 2026-09-02 | Gatilho | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 7.01 | Opção de Regime Tributário (Simples/Lucro Presumido/Real) + Inscrição | Registro | Cada CNPJ | Receita Federal (LC 123/06 + RIR) | Na abertura - definirá IBS/CBS futuro | hipótese | FIN-002 |
| 7.02 | Emissão de NFS-e (padrão nacional) / NFe | Obrigação | Cada CNPJ faturador | Prefeitura + SEFAZ + NFS-e Nacional (2023-) | Ao faturar | hipótese | FIN-002 |
| 7.03 | Escriturações: ECD, ECF, EFD-Reinf, DCTFWeb, PGDAS/DEFIS | Obrigação | Cada CNPJ | Receita Federal | Mensal/anual após CNPJ ativo | hipótese | FIN-002 |
| 7.04 | Mapeamento IBS/CBS (EC 132/2023) - teste 2026: CBS 0,9% + IBS 0,1% | Planejamento | Todos | EC 132/2023 + LC 214/2025 (regulamentação) | Já em 2026 para ERP e preço - obrigatório 2027 | em transição | FIN-002 |
| 7.05 | Política de Reconhecimento de Receita (ARR vs implementação vs restrito) | Governança | HUB Negócios / Instituto | CPC 47 (IFRS 15) + BP-001 §3.1 | Antes de reconhecer 1 real - FIN-002 | hipótese | FIN-002 |

## 8. Trabalhista e Previdenciário

| # | Documento | Natureza | Entidade | Órgão / Base legal 2026-09-02 | Gatilho | Status | Gap ID |
|---|---|---|---|---|---|---|---|
| 8.01 | Registro de Empregados + eSocial + FGTS (CAIXA) | Obrigação | Cada CNPJ empregador | CLT + Decreto 8.373/14 (eSocial) | Ao contratar 1 CLT | condicional | GOV-008 |
| 8.02 | Contratos PJ / Prestador + Due diligence anti-pejotização | Contrato | Cada CNPJ contratante | CLT art. 3º + Reforma Trabalhista 13.467/17 | Se usar PJ em vez de CLT | condicional | GOV-004, GOV-008 |
| 8.03 | PPRA/PGR + PCMSO + LTCAT (segurança do trabalho) | Obrigação | Cada CNPJ com empregado | NR-01, NR-07, Lei 8.213/91 | Com empregado | condicional | GOV-008 |
| 8.04 | Acordo de Confidencialidade + Não Concorrência (quando cabível) | Contrato | Cada CNPJ | CLT + Código Civil | Na contratação | hipótese | GOV-004, GOV-006 |

---

## 9. Checklist de preenchimento (para esta nota)

- [ ] Decidir GOV-001: quantos CNPJs? (1 / 2 / 3 / 4) — registrar em `00-project-control/decisoes/`
- [ ] Para cada linha com `hipótese`, atribuir `dono` (nome) e `data-alvo` em `04-project-management/tarefas/P04-T01` e `P05-T01`
- [ ] Anexar evidência em `05-resources/documentos/` enquanto for rascunho; mover para `03-approved/governanca/` só após `02-review/aprovado/`
- [ ] Validar reforma tributária (linha 7.04) com contador — ERP já precisa carregar IBS/CBS em 2026
- [ ] Validar LGPD (linhas 6.01-6.03) fluxo a fluxo com `01-work/dados-tech-financas/refinamento-modelo-dados/matriz-dados-finalidade-P03-T08-v1.md`
- [ ] Bloquear qualquer uso comercial do Selo (linhas 3.05, 4.08) até GOV-003 aprovado com revisão independente

## 10. Próximos artefatos a derivar deste mapa

| Artefato | Onde criar | Depende de |
|---|---|---|
| `HUB_Contrato_Social_v0.md` (minuta) | `01-work/documentos-oficiais/_controle/` → promover | Linha 1.01 + parecer societário |
| `HUB_Estatuto_Instituto_v0.md` | `01-work/documentos-oficiais/_controle/` → promover | Linha 1.02 + parecer terceiro setor |
| `HUB_DPA_Template_v0.md` | `01-work/documentos-oficiais/_controle/` | Linha 4.04 + matriz P03-T08 |
| `HUB_Politica_Privacidade_v0.md` | `01-work/documentos-oficiais/_controle/` | Linha 6.02 |
| `HUB_Matriz_Oferta_CNPJ_Receita.md` | `04-project-management/tarefas/` + `02-review/01-blueprint/modelo-negocio/` | GOV-001 + BP-001 §2.1 |

---

## Histórico

- 2026-09-02 v1 — esqueleto inicial com 32 linhas obrigatórias mapeadas na base legal de 2026-09-02. Criado a partir de `HUB_Blueprint_Governanca_e_Juridico.md` (BP-006) e `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md` (BP-001). Pendente validação profissional.

> [!note] Onde esta nota vive
> `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1.md` — refinamento, não evidência aprovada. Quando aprovado, promover cópia para `02-review/aprovado/` e distribuir em `03-approved/governanca/`.
