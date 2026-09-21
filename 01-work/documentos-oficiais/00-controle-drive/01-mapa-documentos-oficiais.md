---
título: "HUB — Mapa de Documentos Oficiais v1 (cópia canônica)"
origem: "Documentações Oficiais do Projeto/HUB_Instrucao_Vault_Documentos_Oficiais.md §1 + HUB_Mapa_Documentos_Oficiais_v1 (fonte canônica — ver instrução)"
destino: "HUB_Documentos_Oficiais/00-controle/01-mapa-documentos-oficiais.md"
status: ativo
created: 2026-09-02
updated: 2026-09-02
tags: [mapa, canonico, GOV-001, GOV-002, GOV-003, LGPD]
---

# HUB — Mapa de Documentos Oficiais v1 (cópia canônica)

> **Fonte da verdade** para `doc_id`, `pasta`, `gatilho` e `gap_id`. Todo arquivo em `HUB_Documentos_Oficiais/` deve ter `doc_id` idêntico a este mapa.
> Mapa original esperado em `01-work/documentos-oficiais/_controle/HUB_Mapa_Documentos_Oficiais_v1.md` — não encontrado no momento da criação do vault (2026-09-02). Esta cópia foi reconstruída a partir da árvore detalhada de `HUB_Instrucao_Vault_Documentos_Oficiais.md §1` e deve ser reconciliada quando o mapa original for localizado.

## Total
**8 blocos → 37 documentos** (5+5+5+8+5+5+5+4) + 4 arquivos de controle + 1 template = **42 artefatos no vault**.

## Blocos

### 01 — Atos Constitutivos (5) — ANTES DE QUALQUER CNPJ
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 01.01 | Contrato Social — HUB Negócios | HUB Negócios | Junta Comercial / art. 997 CC + REDESIM | Antes de pedir CNPJ | GOV-001 |
| 01.02 | Estatuto e Ata — Instituto HUB | Instituto HUB | Cartório RTD / art. 53 CC | Antes de pedir CNPJ (se OSC) | GOV-001 |
| 01.03 | Acordo de Sócios — Vesting | Sócios | Privado / contrato atípico | Antes de pedir CNPJ | GOV-001 |
| 01.04 | Licença de Marca — Método CAOS | HUB Negócios | INPI / Lei 9.279/96 | Antes de operar marca CAOS | GOV-003 |
| 01.05 | Livro de Registro de Sócios | HUB Negócios | Junta Comercial / art. 1.002 CC | Após registrar Contrato Social | GOV-001 |

### 02 — Registros Governamentais (5) — APÓS JUNTA/CARTÓRIO
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 02.01 | CNPJ — DBE — NIRE | HUB Negócios | Receita/Junta / REDESIM | Após Contrato Social | GOV-001 |
| 02.02 | Inscrição Municipal e Alvará | HUB Negócios | Prefeitura | Após CNPJ | GOV-001 |
| 02.03 | Inscrição Estadual | HUB Negócios | Sefaz | Se houver circulação de mercadoria | GOV-001 |
| 02.04 | Certificado Digital e-CNPJ | HUB Negócios | ICP-Brasil | Após CNPJ ativo | GOV-001 |
| 02.05 | CEIS / CNO | HUB Negócios | CGU/Receita | Ao contratar com poder público/obra | GOV-001 |

### 03 — Licenças e Autorizações (5) — CONDICIONAIS À OFERTA
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 03.01 | AVCB — Bombeiros e Ambiental | HUB Negócios | Bombeiros/Ambiental | Sede física com público | GOV-002 |
| 03.02 | Licença para Eventos — ECAD | HUB Negócios | ECAD/Prefeitura / Lei 9.610/98 | Eventos com música | GOV-002 |
| 03.03 | Credenciamento MEC | HUB Negócios/Instituto | MEC / LDB | Curso com certificação MEC | GOV-002 |
| 03.04 | Título OSC / OSCIP / CEBAS | Instituto HUB | MJSP/MEC/MDS | Se Instituto optar por qualificação | GOV-001 |
| 03.05 | Selo de Certificação — INMETRO | HUB Negócios+Instituto | INMETRO/OCP | Ao certificar Selo HUB | GOV-003 |

### 04 — Contratos Fundamentais (8) — ARQUITETURA MODULAR (BP-006 §2)
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 04.01 | MSA — Acordo-Quadro Cliente | HUB Negócios | Jurídico / CC | Antes do 1º cliente | BP-006 |
| 04.02 | SOW — Ordem de Jornada | HUB Negócios | Jurídico | A cada jornada | BP-006 |
| 04.03 | Termos da Plataforma — SLA | HUB Negócios | Jurídico+TI / Marco Civil | Antes de lançar plataforma | BP-006 |
| 04.04 | DPA — Cronograma e Fluxos | HUB Negócios | DPO/ANPD / LGPD | Antes de tratar dado pessoal | LGPD |
| 04.05 | Contrato Fornecedores — Avaliadores | HUB Negócios | Jurídico | Ao contratar avaliador | BP-006 |
| 04.06 | Contrato Entre Empresas | HUB Negócios+Instituto | Jurídico/Contábil | Se >1 CNPJ | GOV-001 |
| 04.07 | Termo de Voluntariado e Cessão | Instituto HUB | Jurídico / Lei 9.608/98 | Ao receber voluntário | GOV-001 |
| 04.08 | Termos do Selo HUB | HUB Negócios+Instituto | Jurídico/OCP / Lei 9.279/96 | Ao lançar Selo HUB | GOV-003 |

### 05 — Propriedade Intelectual (5) — INPI
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 05.01 | Marcas INPI — HUB / CAOS / Selo | HUB Negócios+Instituto | INPI / Lei 9.279/96 | Imediato (busca prévia) | GOV-003 |
| 05.02 | Cessão de PI — Empregados | HUB Negócios | Jurídico / art. 88 LPI | Ao contratar com criação | — |
| 05.03 | Registro de Programa | HUB Negócios | INPI / Lei 9.609/98 | Ao registrar plataforma | — |
| 05.04 | Inventário PI — Código Aberto | HUB Negócios | TI/Jurídico | Contínuo | — |
| 05.05 | Domínios — registro.br | HUB Negócios | NIC.br | Imediato | — |

### 06 — Conformidade LGPD (5) — ANPD
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 06.01 | ROPA — Registro de Operações | HUB Negócios | ANPD/DPO / art. 37 LGPD | Antes de tratar dado | LGPD |
| 06.02 | Política de Privacidade e Canal DPO | HUB Negócios | ANPD/DPO / art. 41 LGPD | Antes de coletar dado | LGPD |
| 06.03 | RIPD — Relatório de Impacto | HUB Negócios | ANPD / art. 38 LGPD | Alto risco | LGPD |
| 06.04 | Política de Segurança e Incidentes | HUB Negócios | ANPD/DPO / art. 46 LGPD | Antes de operar | LGPD |
| 06.05 | Notificação de Incidente — ANPD | HUB Negócios | ANPD / art. 48 LGPD | Se houver incidente | LGPD |

### 07 — Fiscal e Contábil (5) — REFORMA TRIBUTÁRIA 2026
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 07.01 | Regime Tributário | HUB Negócios | Receita/Contábil / CTN + EC132 | Na abertura do CNPJ | GOV-001 |
| 07.02 | NFS-e / NF-e | HUB Negócios | Prefeitura/Sefaz | Ao faturar | GOV-001 |
| 07.03 | ECD — ECF — EFD-Reinf | HUB Negócios | Receita | Anual/mensal | GOV-001 |
| 07.04 | Mapeamento IBS / CBS — EC 132 | HUB Negócios | Comitê Gestor IBS / EC132 + LC 214/2025 | Transição 2026-2032 | GOV-001 |
| 07.05 | Política de Reconhecimento de Receita | HUB Negócios | CPC 47 / IFRS 15 | Antes do 1º faturamento | BP-001 |

### 08 — Trabalhista (4) — eSOCIAL
| Doc ID | Documento | Entidade dona | Órgão / Base legal | Gatilho | Gap |
|---|---|---|---|---|---|
| 08.01 | eSocial — FGTS | HUB Negócios | MTE/Caixa | Ao contratar CLT | — |
| 08.02 | Contratos PJ | HUB Negócios | Jurídico / Lei 13.429/17 | Ao contratar PJ | — |
| 08.03 | PGR — PCMSO — LTCAT | HUB Negócios | MTE / NR-01/07/09 | Ao ter empregado | — |
| 08.04 | Confidencialidade e Não Concorrência | HUB Negócios | Jurídico | Acesso sensível | — |

## Gaps bloqueadores
- **GOV-001:** Quantos CNPJs? (ver `02-decisao-GOV-001-estrutura-societaria.md`) — bloqueia ~80% dos docs.
- **GOV-002:** Quais ofertas ativam licenças (sede física, eventos, MEC)?
- **GOV-003:** Marca/Selo HUB — titularidade e escopo da certificação.
- **LGPD / BP-001 / BP-006:** premissas de dados, reconhecimento de receita e arquitetura contratual.

## Regra de reconciliação
Quando `HUB_Mapa_Documentos_Oficiais_v1.md` original for encontrado, comparar IDs/gatilhos e atualizar esta cópia com nota de divergência em `Histórico`.
