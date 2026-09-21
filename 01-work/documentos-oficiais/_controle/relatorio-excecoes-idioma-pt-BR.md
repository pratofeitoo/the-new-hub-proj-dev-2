---
titulo: "Relatório de Exceções de Idioma — pt-BR"
tipo: controle
status: ativo
atualizado: 2026-09-02
---

# Relatório de Exceções de Idioma — pt-BR

## Escopo da auditoria

Foram revisados os 81 arquivos Markdown existentes no vault antes da criação
deste relatório. A normalização foi aplicada ao texto legível por pessoas,
incluindo títulos, cabeçalhos, notas, tabelas e descrições.

## Exceções mantidas

### 1. Chaves e metadados estruturais

Foram preservados campos necessários para automação e interoperabilidade,
como `doc_id`, `gap_id`, `CNPJ`, `Path` quando usado como chave externa,
extensões, caminhos de arquivos e valores controlados do frontmatter.

### 2. Siglas jurídicas, fiscais e técnicas

Foram mantidas siglas consagradas ou exigidas pelos documentos de referência:

`CNPJ`, `DBE`, `NIRE`, `INPI`, `LGPD`, `ANPD`, `DPO`, `MSA`, `SOW`, `SLA`,
`DPA`, `PI`, `ROPA`, `RIPD`, `NFS-e`, `NF-e`, `ECD`, `ECF`, `EFD-Reinf`,
`IBS`, `CBS`, `EC 132`, `RACI`, `NDA`, `ESOP`, `SAFE`, `SOP`, `BCP`, `IAM`,
`DRP`, `GTM`, `ARR`, `DRE`, `BP`, `DFC`, `SST` e `CLT`.

### 3. Termos técnicos com uso consolidado no domínio

Alguns termos podem permanecer em inglês em nomes técnicos, jurídicos ou
de mercado, especialmente `vesting`, `cliff`, `valuation`, `pipeline`,
`vault`, `README`, `Markdown` e `open source`. Quando usados no texto
narrativo, receberam tradução ou explicação em português sempre que isso não
prejudicou a precisão.

### 4. Nomes de arquivos e caminhos

Os nomes físicos dos arquivos não foram renomeados nesta etapa. Eles podem
conter termos como `business-plan`, `handbook`, `onboarding`, `sales-playbook`,
`brand-guidelines`, `model-cards`, `backup`, `roadmap` e `release`.

Essa decisão evita quebrar links, referências externas ou integrações que
dependam dos caminhos atuais. O [project-map](project-map.md) deve ser a
fonte usada para qualquer futura migração controlada de nomes.

### 5. Nomes próprios e identificadores de marca

Foram preservados `HUB`, `CAOS`, `C.A.O.S.`, `Selo HUB`, `registro.br`,
`OpenAI` quando aplicável, nomes de entidades e referências legais.

## Resultado

- Texto narrativo e títulos: normalizados para pt-BR.
- Metadados e chaves operacionais: preservados quando necessários.
- Siglas e nomes próprios: preservados.
- Nomes físicos de arquivos: preservados para evitar quebra de referências.
- Próxima auditoria: verificar links internos após qualquer renomeação futura.
