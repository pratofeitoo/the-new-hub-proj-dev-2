# Mapa do projeto
_Gerado: 2026-09-02 17:55 | Atualização: marcas de tempo_

## Como ler
- Chave primária das pastas: `Caminho` na tabela de diretórios.
- Chave primária dos arquivos: `Caminho` na tabela de arquivos.
- `nota` é metadado objetivo, não narrativa.

## Índice de diretórios
| Caminho | Pasta-pai | Rótulo | Filhos | Estado |
|---|---|---|---:|---|
| `./` | `—` | Vault oficial raiz | 19 | ativo |
| `00-controle/` | `raiz` | Controle, índice e modelos | 5 | ativo |
| `01-atos-constitutivos/` | `raiz` | Constituição societária | 5 | ativo |
| `02-registros-governamentais/` | `raiz` | Registros oficiais | 5 | ativo |
| `03-licencas-autorizacoes/` | `raiz` | Licenças condicionais | 6 | ativo |
| `04-contratos-fundamentais/` | `raiz` | Contratos núcleo | 8 | ativo |
| `05-propriedade-intelectual/` | `raiz` | PI, marcas e domínios | 5 | ativo |
| `06-conformidade-LGPD/` | `raiz` | Privacidade e segurança | 5 | ativo |
| `07-fiscal-contabil/` | `raiz` | Fiscal e contábil | 5 | ativo |
| `08-trabalhista/` | `raiz` | Trabalhista e SST | 5 | ativo |
| `09-governanca-corporativa/` | `raiz` | Governança corporativa | 6 | ativo |
| `10-financeiro-estrategia/` | `raiz` | Estratégia e finanças | 6 | ativo |
| `11-pessoas-cultura/` | `raiz` | Pessoas e cultura | 6 | ativo |
| `12-comercial-GTM/` | `raiz` | Comercial e GTM | 5 | ativo |
| `13-operacoes-processos/` | `raiz` | Operações e processos | 4 | ativo |
| `14-tecnologia-produto/` | `raiz` | Tecnologia e produto | 5 | ativo |
| `99-arquivo/` | `raiz` | Arquivo histórico | 4 | ativo |
| `00-controle/_templates/` | `00-controle` | Modelos base | 1 | reservado |
| `99-arquivo/descontinuado/` | `99-arquivo` | Itens descontinuados | 0 | reservado |
| `99-arquivo/rejeitado/` | `99-arquivo` | Itens rejeitados | 0 | ativo |
| `99-arquivo/superado/` | `99-arquivo` | Versões superadas | 0 | reservado |

## Índice de arquivos
| Caminho | Pasta-pai | Tipo | Título | ID do documento/mapa | Status | Prioridade | ID da lacuna | Nota |
|---|---|---|---|---|---|---|---|---|
| `00-controle/00-indice-vault.md` | `00-controle` | markdown | Índice do Vault — HUB_Documentos_Oficiais | — | ativo | — | — | índice navegável do vault e tabela de status |
| `00-controle/01-mapa-documentos-oficiais.md` | `00-controle` | markdown | HUB — Mapa de Documentos Oficiais v1 (cópia canônica) | — | ativo | — | — | mapa canônico dos documentos 01-08 |
| `00-controle/02-decisao-GOV-001-estrutura-societaria.md` | `00-controle` | markdown | Decisão — Estrutura Societária: quantos CNPJs? | GOV-001 | hipotese | — | GOV-001 | decisão bloqueadora sobre a estrutura de CNPJs |
| `00-controle/03-matriz-CNPJ-oferta-receita.md` | `00-controle` | markdown | Matriz CNPJ × Oferta × Receita (BP-001 §2.1) | BP-001-MATRIZ | hipotese | — | GOV-001 | matriz de receita por oferta e CNPJ |
| `00-controle/_templates/template-documento-oficial.md` | `00-controle/_templates` | modelo | Modelo de Documento Oficial | — | modelo | — | — | modelo base dos documentos oficiais |
| `01-atos-constitutivos/01.01-contrato-social-HUB-Negocios.md` | `01-atos-constitutivos` | markdown | Contrato Social — HUB Negócios | 01.01 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Antes de pedir CNPJ |
| `01-atos-constitutivos/01.02-estatuto-ata-Instituto-HUB.md` | `01-atos-constitutivos` | markdown | Estatuto e Ata — Instituto HUB | 01.02 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Antes de pedir CNPJ (se optar por OSC) |
| `01-atos-constitutivos/01.03-acordo-socios-vesting.md` | `01-atos-constitutivos` | Markdown | Acordo de Sócios — Aquisição (vesting) | 01.03 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Antes de pedir CNPJ |
| `01-atos-constitutivos/01.04-licenca-marca-metodo-CAOS.md` | `01-atos-constitutivos` | markdown | Licença de Marca — Método CAOS | 01.04 | hipotese | — | GOV-003 | gap=GOV-003; gatilho=Antes de operar com marca CAOS |
| `01-atos-constitutivos/01.05-livro-registro-socios.md` | `01-atos-constitutivos` | markdown | Livro de Registro de Sócios | 01.05 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Após registro do Contrato Social |
| `02-registros-governamentais/02.01-CNPJ-DBE-NIRE.md` | `02-registros-governamentais` | markdown | CNPJ — DBE — NIRE | 02.01 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Após Contrato Social registrado |
| `02-registros-governamentais/02.02-inscricao-municipal-alvara.md` | `02-registros-governamentais` | markdown | Inscrição Municipal e Alvará | 02.02 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Após CNPJ |
| `02-registros-governamentais/02.03-inscricao-estadual.md` | `02-registros-governamentais` | markdown | Inscrição Estadual | 02.03 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Se houver circulação de mercadoria/bens |
| `02-registros-governamentais/02.04-certificado-digital-eCNPJ.md` | `02-registros-governamentais` | markdown | Certificado Digital e-CNPJ | 02.04 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Após CNPJ ativo |
| `02-registros-governamentais/02.05-CEIS-CNO.md` | `02-registros-governamentais` | markdown | CEIS / CNO | 02.05 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Ao contratar com poder público / obra |
| `03-licencas-autorizacoes/.gitkeep` | `03-licencas-autorizacoes` | gitkeep | .gitkeep | — | reserved | — | — | marcador reservado |
| `03-licencas-autorizacoes/03.01-AVCB-bombeiros-ambiental.md` | `03-licencas-autorizacoes` | markdown | AVCB — Bombeiros e Ambiental | 03.01 | nao_aplicavel | — | GOV-002 | gap=GOV-002; gatilho=Ao ter sede física com circulação de público |
| `03-licencas-autorizacoes/03.02-eventos-ECAD.md` | `03-licencas-autorizacoes` | markdown | Licença para Eventos — ECAD | 03.02 | nao_aplicavel | — | GOV-002 | gap=GOV-002; gatilho=Ao realizar eventos com música |
| `03-licencas-autorizacoes/03.03-credenciamento-MEC.md` | `03-licencas-autorizacoes` | markdown | Credenciamento MEC | 03.03 | nao_aplicavel | — | GOV-002 | gap=GOV-002; gatilho=Ao ofertar curso com certificação MEC |
| `03-licencas-autorizacoes/03.04-titulo-OSC-OSCIP-CEBAS.md` | `03-licencas-autorizacoes` | markdown | Título OSC / OSCIP / CEBAS | 03.04 | nao_aplicavel | — | GOV-001 | gap=GOV-001; gatilho=Se Instituto HUB optar por qualificação |
| `03-licencas-autorizacoes/03.05-selo-certificacao-INMETRO.md` | `03-licencas-autorizacoes` | markdown | Selo de Certificação — INMETRO | 03.05 | bloqueado | — | GOV-003 | gap=GOV-003; gatilho=Ao certificar Selo HUB (produto/serviço) |
| `04-contratos-fundamentais/04.01-MSA-acordo-quadro-cliente.md` | `04-contratos-fundamentais` | markdown | MSA — Acordo-Quadro Cliente | 04.01 | hipotese | — | BP-006 | gap=BP-006; gatilho=Antes do 1º cliente |
| `04-contratos-fundamentais/04.02-SOW-ordem-jornada.md` | `04-contratos-fundamentais` | markdown | SOW — Ordem de Jornada | 04.02 | hipotese | — | BP-006 | gap=BP-006; gatilho=A cada jornada vendida |
| `04-contratos-fundamentais/04.03-termos-plataforma-SLA.md` | `04-contratos-fundamentais` | markdown | Termos da Plataforma — SLA | 04.03 | hipotese | — | BP-006 | gap=BP-006; gatilho=Antes de lançar plataforma |
| `04-contratos-fundamentais/04.04-DPA-cronograma-fluxos.md` | `04-contratos-fundamentais` | markdown | DPA — Cronograma e Fluxos de Dados | 04.04 | hipotese | — | LGPD | gap=LGPD; gatilho=Antes de tratar dado pessoal |
| `04-contratos-fundamentais/04.05-contrato-fornecedores-avaliadores.md` | `04-contratos-fundamentais` | markdown | Contrato Fornecedores — Avaliadores | 04.05 | hipotese | — | BP-006 | gap=BP-006; gatilho=Ao contratar avaliador/fornecedor |
| `04-contratos-fundamentais/04.06-contrato-intercompany.md` | `04-contratos-fundamentais` | Markdown | Contrato entre empresas (intercompany) | 04.06 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Se >1 CNPJ (GOV-001 = múltiplos) |
| `04-contratos-fundamentais/04.07-termo-voluntariado-cessao.md` | `04-contratos-fundamentais` | markdown | Termo de Voluntariado e Cessão | 04.07 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Ao receber voluntário no Instituto |
| `04-contratos-fundamentais/04.08-termos-Selo-HUB.md` | `04-contratos-fundamentais` | markdown | Termos do Selo HUB | 04.08 | bloqueado | — | GOV-003 | gap=GOV-003; gatilho=Ao lançar Selo HUB |
| `05-propriedade-intelectual/05.01-marcas-INPI-HUB-CAOS-Selo.md` | `05-propriedade-intelectual` | markdown | Marcas INPI — HUB / CAOS / Selo | 05.01 | hipotese | — | GOV-003 | gap=GOV-003; gatilho=Imediato (busca prévia) |
| `05-propriedade-intelectual/05.02-cessao-PI-empregados.md` | `05-propriedade-intelectual` | markdown | Cessão de PI — Empregados | 05.02 | hipotese | — | — | gap=—; gatilho=Ao contratar com criação intelectual |
| `05-propriedade-intelectual/05.03-registro-software.md` | `05-propriedade-intelectual` | Markdown | Registro de Programa | 05.03 | hipotese | — | — | gap=—; gatilho=Ao registrar plataforma/código |
| `05-propriedade-intelectual/05.04-inventario-PI-open-source.md` | `05-propriedade-intelectual` | markdown | Inventário PI — Código Aberto | 05.04 | hipotese | — | — | gap=—; gatilho=Contínuo (a cada dependência) |
| `05-propriedade-intelectual/05.05-dominios-registro-br.md` | `05-propriedade-intelectual` | markdown | Domínios — registro.br | 05.05 | hipotese | — | — | gap=—; gatilho=Imediato |
| `06-conformidade-LGPD/06.01-ROPA-registro-operacoes.md` | `06-conformidade-LGPD` | markdown | ROPA — Registro de Operações | 06.01 | hipotese | — | LGPD | gap=LGPD; gatilho=Antes de tratar dado pessoal |
| `06-conformidade-LGPD/06.02-politica-privacidade-DPO.md` | `06-conformidade-LGPD` | markdown | Política de Privacidade e Canal DPO | 06.02 | hipotese | — | LGPD | gap=LGPD; gatilho=Antes de coletar dado |
| `06-conformidade-LGPD/06.03-RIPD-impacto.md` | `06-conformidade-LGPD` | markdown | RIPD — Relatório de Impacto | 06.03 | hipotese | — | LGPD | gap=LGPD; gatilho=Quando tratamento de alto risco |
| `06-conformidade-LGPD/06.04-politica-seguranca-incidentes.md` | `06-conformidade-LGPD` | markdown | Política de Segurança e Incidentes | 06.04 | hipotese | — | LGPD | gap=LGPD; gatilho=Antes de operar |
| `06-conformidade-LGPD/06.05-notificacao-incidente-ANPD.md` | `06-conformidade-LGPD` | markdown | Notificação de Incidente — ANPD | 06.05 | hipotese | — | LGPD | gap=LGPD; gatilho=Se houver incidente de segurança |
| `07-fiscal-contabil/07.01-regime-tributario.md` | `07-fiscal-contabil` | markdown | Regime Tributário | 07.01 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Na abertura do CNPJ |
| `07-fiscal-contabil/07.02-NFSe-NFe.md` | `07-fiscal-contabil` | markdown | NFS-e / NF-e | 07.02 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Ao faturar |
| `07-fiscal-contabil/07.03-ECD-ECF-EFD-Reinf.md` | `07-fiscal-contabil` | markdown | ECD — ECF — EFD-Reinf | 07.03 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Anual / mensal contábil |
| `07-fiscal-contabil/07.04-mapeamento-IBS-CBS-EC132.md` | `07-fiscal-contabil` | markdown | Mapeamento IBS / CBS — EC 132 | 07.04 | hipotese | — | GOV-001 | gap=GOV-001; gatilho=Transição 2026-2032 |
| `07-fiscal-contabil/07.05-politica-reconhecimento-receita.md` | `07-fiscal-contabil` | markdown | Política de Reconhecimento de Receita | 07.05 | hipotese | — | BP-001 | gap=BP-001; gatilho=Antes do 1º faturamento |
| `08-trabalhista/.gitkeep` | `08-trabalhista` | gitkeep | .gitkeep | — | reserved | — | — | marcador reservado |
| `08-trabalhista/08.01-eSocial-FGTS.md` | `08-trabalhista` | markdown | eSocial — FGTS | 08.01 | nao_aplicavel | — | — | gap=—; gatilho=Ao contratar CLT |
| `08-trabalhista/08.02-contratos-PJ.md` | `08-trabalhista` | markdown | Contratos PJ | 08.02 | nao_aplicavel | — | — | gap=—; gatilho=Ao contratar PJ |
| `08-trabalhista/08.03-PGR-PCMSO-LTCAT.md` | `08-trabalhista` | markdown | PGR — PCMSO — LTCAT | 08.03 | nao_aplicavel | — | — | gap=—; gatilho=Ao ter empregado/exposição |
| `08-trabalhista/08.04-confidencialidade-nao-concorrencia.md` | `08-trabalhista` | markdown | Confidencialidade e Não Concorrência | 08.04 | nao_aplicavel | — | — | gap=—; gatilho=Ao contratar com acesso sensível |
| `09-governanca-corporativa/09.01-cap-table-vesting-cliff.md` | `09-governanca-corporativa` | Markdown | Tabela de Participações + Cronograma de Aquisição/Carência | 09.01 | hipotese | AGORA | GOV-001, STR-001 | natureza=Governança; gap=GOV-001, STR-001; gatilho=Antes de conversar com investidor/banco |
| `09-governanca-corporativa/09.02-acordo-socios-completo.md` | `09-governanca-corporativa` | Markdown | Acordo de Sócios Completo — decisão, diluição, saída, impasse | 09.02 | hipotese | AGORA | GOV-001, GOV-004 | natureza=Contratual; gap=GOV-001, GOV-004; gatilho=Antes de integralizar capital / SAFE/mútuo conversível (LC 182/21) |
| `09-governanca-corporativa/09.03-board-advisory-charter.md` | `09-governanca-corporativa` | Markdown | Regimento do Conselho/Conselho Consultivo + Regimento de Decisão | 09.03 | hipotese | 0-6M | GOV-008 | natureza=Governança; gap=GOV-008; gatilho=Ao criar conselho/conselheiros ou rodada |
| `09-governanca-corporativa/09.04-registro-decisoes-matriz-alcadas.md` | `09-governanca-corporativa` | markdown | Registro de Decisões + Matriz de Alçadas | 09.04 | hipotese | 0-6M | GOV-008 | natureza=Governança; gap=GOV-008; gatilho=Ao ter 2+ decisores ou conta bancária com limite |
| `09-governanca-corporativa/09.05-codigo-conduta-conflito-interesses.md` | `09-governanca-corporativa` | Markdown | Código de Conduta + Política de Conflito de Interesses | 09.05 | hipotese | 0-6M | GOV-003, FIN-002 | natureza=Governança; gap=GOV-003, FIN-002; gatilho=Ao receber financiamento restrito ou ter Selo |
| `09-governanca-corporativa/09.06-politica-partes-relacionadas-intercompany.md` | `09-governanca-corporativa` | Markdown | Política de Partes Relacionadas / entre empresas | 09.06 | hipotese | 0-6M | GOV-001, FIN-002 | natureza=Governança; gap=GOV-001, FIN-002; gatilho=Se houver compartilhamento de custo/receita |
| `10-financeiro-estrategia/10.01-business-plan-strategic-memo.md` | `10-financeiro-estrategia` | markdown | Plano de Negócios / Memorando Estratégico 12-18 meses | 10.01 | hipotese | AGORA | STR-002, STR-003 | natureza=Estratégia; gap=STR-002, STR-003; gatilho=Antes de captar ou pedir crédito |
| `10-financeiro-estrategia/10.02-modelo-financeiro-3D-cenarios.md` | `10-financeiro-estrategia` | Markdown | Modelo Financeiro 3 demonstrativos (DRE/BP/DFC) + cenários | 10.02 | hipotese | AGORA | FIN-002 | natureza=Financeiro; gap=FIN-002; gatilho=Antes de valuation/orçamento |
| `10-financeiro-estrategia/10.03-orcamento-forecast-fluxo-caixa-13s.md` | `10-financeiro-estrategia` | Markdown | Orçamento Anual + Previsão + Fluxo de Caixa 13 semanas | 10.03 | hipotese | 0-6M | FIN-002 | natureza=Financeiro; gap=FIN-002; gatilho=Ao operar (mês 1) |
| `10-financeiro-estrategia/10.04-manual-politicas-contabeis-CPC47.md` | `10-financeiro-estrategia` | markdown | Manual de Políticas Contábeis (CPC 47 - reconhecimento por obrigação) | 10.04 | hipotese | 0-6M | FIN-002, BP-001 §3.1 | natureza=Financeiro; gap=FIN-002, BP-001 §3.1; gatilho=Antes de reconhecer 1 real (ARR vs implementação vs restrito) |
| `10-financeiro-estrategia/10.05-valuation-memo-captacao-SAFE.md` | `10-financeiro-estrategia` | Markdown | Memorando de Valuation + Captação (SAFE/mútuo, termos) | 10.05 | hipotese | 6-18M | FIN-002 | natureza=Financeiro; gap=FIN-002; gatilho=Na rodada |
| `10-financeiro-estrategia/10.06-controles-internos-trilha-auditoria.md` | `10-financeiro-estrategia` | markdown | Controles Internos + Trilha de Auditoria financeira | 10.06 | hipotese | 6-18M | GOV-005 | natureza=Financeiro; gap=GOV-005; gatilho=Ao ter auditor ou 5+ pessoas com acesso a dinheiro |
| `11-pessoas-cultura/11.01-organograma-RACI-JDs.md` | `11-pessoas-cultura` | Markdown | Organograma + RACI + Descrições de Cargos | 11.01 | hipotese | AGORA | GOV-008 | natureza=Operacional; gap=GOV-008; gatilho=Contratação |
| `11-pessoas-cultura/11.02-handbook-colaborador-regimento-interno.md` | `11-pessoas-cultura` | Markdown | Manual do Colaborador (Regimento Interno) | 11.02 | hipotese | 0-6M | GOV-008 | natureza=Pessoas; gap=GOV-008; gatilho=CLT exige com 20+, mas precisa com 3 |
| `11-pessoas-cultura/11.03-politica-remuneracao-ESOP.md` | `11-pessoas-cultura` | Markdown | Política de Remuneração + Plano de Participação Societária/ESOP | 11.03 | hipotese | 0-6M | GOV-001, GOV-004 | natureza=Pessoas; gap=GOV-001, GOV-004; gatilho=Antes de prometer participação societária |
| `11-pessoas-cultura/11.04-NDA-cessao-PI-empregado-contratado.md` | `11-pessoas-cultura` | markdown | NDA + Cessão de PI (empregado/contratado) — assina ANTES de acessar C.A.O.S./código | 11.04 | hipotese | AGORA | GOV-006 | natureza=Contratual; gap=GOV-006; gatilho=Antes de dar acesso |
| `11-pessoas-cultura/11.05-onboarding-offboarding-desligamento.md` | `11-pessoas-cultura` | Markdown | Integração/Desligamento + Política de Desligamento | 11.05 | hipotese | 0-6M | GOV-008 | natureza=Pessoas; gap=GOV-008; gatilho=A partir de 3 pessoas |
| `11-pessoas-cultura/11.06-codigo-cultura-principios.md` | `11-pessoas-cultura` | markdown | Código de Cultura / Princípios | 11.06 | hipotese | 6-18M | STR-001 | natureza=Cultura; gap=STR-001; gatilho=Quando time >5 |
| `12-comercial-GTM/12.01-politica-preco-packaging.md` | `12-comercial-GTM` | Markdown | Política de Preço e Empacotamento (por oferta/BP-001 §2.1) | 12.01 | hipotese | AGORA | STR-002, FIN-002 | natureza=Comercial; gap=STR-002, FIN-002; gatilho=Antes de proposta |
| `12-comercial-GTM/12.02-sales-playbook-contract-playbook.md` | `12-comercial-GTM` | markdown | Manual Comercial + Manual de Contratos (como vender vs o que está no MSA) | 12.02 | hipotese | 0-6M | GTM-001 | natureza=Comercial; gap=GTM-001; gatilho=Cliente |
| `12-comercial-GTM/12.03-brand-guidelines-claim-registry.md` | `12-comercial-GTM` | markdown | Diretrizes de Marca + Registro de Alegações Públicas (o que pode dizer publicamente) | 12.03 | hipotese | 0-6M | GOV-005, GOV-006 | natureza=Marca; gap=GOV-005, GOV-006; gatilho=Antes de publicar deck/site/Selo |
| `12-comercial-GTM/12.04-politica-parcerias-limite-concentracao.md` | `12-comercial-GTM` | markdown | Política de Parcerias + Limite de Concentração | 12.04 | hipotese | 0-6M | STR-003, GTM-001 | natureza=Comercial; gap=STR-003, GTM-001; gatilho=Parceiro |
| `12-comercial-GTM/12.05-pipeline-criterios-tracao.md` | `12-comercial-GTM` | markdown | Pipeline/Categoria de Pipeline + Critérios de Tração (hipótese vs tração) | 12.05 | hipotese | 0-6M | GTM-002 | natureza=Comercial; gap=GTM-002; gatilho=Ao reportar pipeline |
| `13-operacoes-processos/13.01-SOPs-fluxos-CAOS.md` | `13-operacoes-processos` | markdown | SOPs dos fluxos C.A.O.S. (diagnóstico→arquitetura→operação→sustentação) | 13.01 | hipotese | 0-6M | BP-005 | natureza=Operacional; gap=BP-005; gatilho=Primeira entrega |
| `13-operacoes-processos/13.02-matriz-riscos-BCP.md` | `13-operacoes-processos` | Markdown | Matriz de Riscos + Plano de Continuidade (BCP) | 13.02 | hipotese | 6-18M | GOV-005 | natureza=Operacional; gap=GOV-005; gatilho=Cliente empresarial pede |
| `13-operacoes-processos/13.03-gestao-fornecedores-SLA.md` | `13-operacoes-processos` | markdown | Gestão de Fornecedores + SLA de parceiros | 13.03 | hipotese | 0-6M | GOV-004 | natureza=Operacional; gap=GOV-004; gatilho=Fornecedor crítico |
| `13-operacoes-processos/13.04-politica-compras-reembolso.md` | `13-operacoes-processos` | markdown | Política de Compras + Reembolso | 13.04 | hipotese | 0-6M | FIN-002 | natureza=Operacional; gap=FIN-002; gatilho=Time >3 |
| `14-tecnologia-produto/14.01-arquitetura-tecnica-diagrama-dados.md` | `14-tecnologia-produto` | markdown | Arquitetura Técnica + Diagrama de Dados + Dicionário | 14.01 | hipotese | 0-6M | BP-004, DAT-* | natureza=Técnico; gap=BP-004, DAT-*; gatilho=Antes de provisionar tenant |
| `14-tecnologia-produto/14.02-politica-seguranca-IAM.md` | `14-tecnologia-produto` | Markdown | Política de Segurança da Informação + Controle de Acesso (IAM) | 14.02 | hipotese | 0-6M | GOV-002, GOV-005 | natureza=Técnico; gap=GOV-002, GOV-005; gatilho=Cliente empresarial pede |
| `14-tecnologia-produto/14.03-model-cards-fairness-explicabilidade.md` | `14-tecnologia-produto` | Markdown | Cartões de Modelo + Limiares de Equidade/Explicabilidade | 14.03 | hipotese | 0-6M | GOV-009 | natureza=Técnico; gap=GOV-009; gatilho=Antes de ligar modelo/recomendação |
| `14-tecnologia-produto/14.04-plano-backup-DRP-teste-restauracao.md` | `14-tecnologia-produto` | Markdown | Plano de Cópia de Segurança + Recuperação de Desastres (DRP) + Teste de Restauração | 14.04 | hipotese | 6-18M | GOV-005, GOV-007 | natureza=Técnico; gap=GOV-005, GOV-007; gatilho=Ao ir para produção |
| `14-tecnologia-produto/14.05-roadmap-produto-criterios-release.md` | `14-tecnologia-produto` | Markdown | Plano de Evolução de Produto + Critérios de Lançamento/Portão | 14.05 | hipotese | 0-6M | BP-002, P05 | natureza=Produto; gap=BP-002, P05; gatilho=Lançamento |
| `README.md` | `raiz` | Markdown | README — HUB_Documentos_Oficiais | — | ativo | — | — | entrada do vault; diagrama + regras de uso |
| `project-map.md` | `raiz` | Markdown | Mapa do projeto — índice legível por agentes | — | ativo | — | — | índice legível por agentes |
| `relatorio-excecoes-idioma-pt-BR.md` | `raiz` | Markdown | Relatório de Exceções de Idioma — pt-BR | — | ativo | — | — | registro da normalização e das exceções justificadas |

## Restrições críticas
| Constraint | Meaning |
|---|---|
| Vault location | `Documentações Oficiais do Projeto/HUB_Documentos_Oficiais/` |
| Scope split | `01-08` obrigatórios; `09-14` requeridos para escala |
| Blocker | `GOV-001` define estrutura societária e destrava a maior parte dos docs |
| Sensitive access | `11.04` antes de acesso a código ou dados sensíveis |
| Finance/publication gates | `10.04` e `12.03` antes de faturar/publicar |
| Conditional pastas | `03-licencas-autorizacoes/` e `08-trabalhista/` podem ficar com `.gitkeep` |
| Staleness | sem git; usar marcas de tempo |

## Notas de legibilidade para agentes
- Parse tables row-by-row.
- Use `Caminho` e `ID do documento/mapa` como chaves semânticas principais.
- Ignore linhas `reservado`, exceto ao indexar marcadores.
