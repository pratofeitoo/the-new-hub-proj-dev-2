---
doc_id: "PM-VER-004"
titulo: "Registro provisório de claims"
status: "hipotese"
versao: "v0.1"
escopo: "Plataforma de Marca HUB"
owner: "Governança verbal — a confirmar"
fonte-base: "12.03-brand-guidelines-claim-registry.md"
nao-aprovado: true
---

# Registro provisório de claims

> **Status:** material de trabalho em `01-work/`. Este registro organiza linguagem, evidência e gates. Ele não aprova claims, não certifica resultados e não autoriza publicação.

## Como usar

Uma linha do registro é uma ficha de controle, não uma frase pronta para marketing. Antes de publicar, o responsável deve:

1. copiar o texto exato para o campo `claim`;
2. declarar público e contexto de uso;
3. anexar fonte verificável, período, escopo e limitações;
4. classificar o nível de evidência e o rótulo de incerteza;
5. obter o gate indicado em [fluxo de aprovação de claims](../06-governanca-e-publicacao/fluxo-de-aprovacao-de-claims.md).

Ausência de fonte, owner, validade ou gate mantém o item em `não validado`. `01-work/` não é uma fonte aprovada.

## Fundação aprovada de inteligência para os claims

Os documentos aprovados de inteligência fundamentam guardrails para claims sobre inteligência, matching, recomendações, ROI, impacto, fairness, explicabilidade e decisão humana. A formulação deve deixar claro que a IA prepara e recomenda, enquanto pessoas revisam e aprovam decisões sensíveis; deve distinguir correlação de causalidade e expor fonte, período, confiança e limitações. Essas fontes apoiam as regras do registro, mas não aprovam nenhum claim público automaticamente.

Fontes: [Especificação Mestra de Inteligência HUB](../../../03-approved/nucleo-inteligencia/especificacao-conceitual-inteligencia-plataforma/Especificacao_Mestra_Inteligencia_HUB%203.md) e [Planilha Técnica de Desenvolvimento HUB](../../../03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md).

## Níveis de evidência e rótulos

| Nível | Significado operacional | Uso enquanto provisório |
|---|---|---|
| `E0 — não validado` | Não há evidência suficiente ou a fonte ainda não foi identificada. | Não publicar. Usar apenas para registrar lacuna. |
| `E1 — documental-provisório` | Há descrição em documento de trabalho ou revisão, sem validação independente. | Conversa interna com rótulo `hipótese` ou `não validado`. |
| `E2 — observacional` | Há dado/registro datado e rastreável, mas sem desenho causal ou validação financeira suficiente. | Reporte qualificado, nunca como causalidade, ROI ou certificação. |
| `E3 — validado` | Protocolo, baseline/comparação, cálculo reproduzível e revisão responsável documentados. | Só após o gate específico; não equivale automaticamente a certificação financeira. |
| `E4 — realizado/oficial` | Resultado validado reconciliado com registro operacional ou financeiro oficial e aprovado pelo dono competente. | Só após aprovação de Finanças e demais gates aplicáveis. |

Rótulos permitidos: `hipótese`, `ilustrativo`, `observacional`, `em validação`, `não validado`, `expirado`, `rejeitado`. O rótulo deve aparecer junto do claim quando ele sair do registro.

## Schema mínimo

| Campo | Preenchimento obrigatório |
|---|---|
| `claim` | Texto exato, delimitado por sujeito, verbo, objeto, período e escopo. |
| `audience` | Público que verá a mensagem: interno, cliente, parceiro, investidor, público geral ou avaliador. |
| `context` | Peça, canal, etapa e finalidade. Ex.: conversa interna, deck comercial, site, proposta, Selo. |
| `source` | Caminho do arquivo/registro, versão, período, responsável pela fonte e localização do trecho. |
| `evidence_level` | Um nível `E0`–`E4`, sem subir de nível por inferência. |
| `owner` | Pessoa ou função que responde pela fonte e pela atualização. Não preencher com “HUB” genericamente. |
| `expiry` | Data ou evento de revalidação. Claim sem validade fica bloqueado. |
| `uncertainty_label` | Rótulo visível e limitação principal: escopo, amostra, causalidade, período, projeção ou dependência. |
| `prohibited_stronger_formulation` | Formulação que não pode substituir o claim sem nova evidência e novo gate. |
| `approval_gate` | Gate necessário, revisor, decisão e registro da aprovação. Vazio = não publicável. |

## Registro

Todos os itens abaixo são provisórios. Os textos da coluna `claim` são limites de formulação para revisão, não linguagem aprovada.

| ID / categoria | Claim | Audience | Context | Source | Evidence level | Owner | Expiry | Uncertainty label | Prohibited stronger formulation | Approval gate |
|---|---|---|---|---|---|---|---|---|---|---|
| `CLM-CAP-001` / capacidade | “A Plataforma HUB organiza fluxos de diagnóstico, evidências, jornadas, recomendações, conexões, aprendizado e reconhecimento sob revisão humana quando aplicável.” | Interno; cliente técnico | Descrição de produto; conversa de arquitetura | `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Arquitetura_Tecnologica.md`, seção “Fronteira da plataforma-alvo” | `E1 — documental-provisório` | Produto + Governança verbal, a confirmar | Revalidar na próxima revisão de escopo | `hipótese`; blueprint não prova implementação ou disponibilidade | “A plataforma já entrega todos esses resultados” ou “automatiza reconhecimento/impacto” | Gate de produto + verificação de implementação; não publicar como capacidade disponível sem evidência operacional |
| `CLM-FIN-001` / financeiro | “Qualquer valor financeiro deve permanecer identificado como potencial, influenciado, validado ou realizado, conforme seu caminho de evidências.” | Interno; Finanças; cliente | Política de métricas; deck com números | `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md`, seção 4 | `E1 — documental-provisório` | Finanças + Dados, a confirmar | Revalidar a cada mudança do glossário financeiro | `não validado`; estados não podem ser colapsados em “impacto” | “Gerou receita”, “economizou R$ X” ou “impacto financeiro comprovado” sem `E4` | Gate Financeiro + revisão de Dados + fonte oficial reconciliada |
| `CLM-CAU-001` / causal | “Uma mudança temporalmente associada à atividade do HUB não deve ser descrita como causada pelo HUB sem desenho contrafactual ou método aprovado.” | Interno; cliente; público geral | Case, relatório de impacto, press release | `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md`, seção 4; `HUB_Blueprint_Arquitetura_Tecnologica.md`, seção “Fronteira de inteligência” | `E1 — documental-provisório` | Dados/Inteligência + revisor independente, a confirmar | Revalidar por estudo | `observacional`; confundidores e atribuição podem permanecer abertos | “O HUB causou”, “garantiu” ou “foi responsável por” | Gate metodológico de causalidade + revisão independente + aprovação do owner do estudo |
| `CLM-IMP-001` / impacto | “Resultados de impacto só podem ser apresentados com métrica, denominador, janela, fonte, limitações e estado de evidência.” | Cliente; parceiro; público geral | Relatório, case ou dashboard | `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Arquitetura_Tecnologica.md`, seção “Marts de serving”; `HUB_Blueprint_Dados_e_Inteligencia.md`, seção 4 | `E1 — documental-provisório` | Dados/Inteligência, a confirmar | Revalidar a cada versão da métrica | `não validado`; impacto sem escopo não é claim utilizável | “Transforma vidas”, “gera impacto comprovado” ou “impacto em escala” sem protocolo e escopo | Gate de impacto + revisão de evidência + aprovação editorial do contexto |
| `CLM-CERT-001` / certificação | “A existência de um fluxo de reconhecimento ou de um Selo não deve ser comunicada como certificação, acreditação ou garantia sem regulamento, autoridade e decisão válidos.” | Público geral; avaliador; cliente | Site, proposta, selo, co-branding | `01-work/documentos-oficiais/04-contratos-fundamentais/04.08-termos-Selo-HUB.md` (status `bloqueado`); `02-review/02-reconciliacao-blueprint/HUB_Fundacao_Blueprint_Projeto.md`, seção sobre Selo HUB | `E1 — documental-provisório` | Governança independente do Selo + Jurídico, a confirmar | Até definição/desbloqueio de `GOV-003` | `bloqueado`; autoridade, regulamento e independência não estão fechados | “Certificado pelo HUB”, “empresa certificada”, “garantia de conformidade” ou uso de selo como prova de desempenho | Gate específico do Selo + Jurídico + independência/recursos/apelação documentados; bloqueado até lá |
| `CLM-ROI-001` / ROI | “Os valores de ROI presentes em simuladores ou cenários são ilustrativos até que exista baseline, fórmula, período, fonte e aprovação financeira.” | Interno; investidor; cliente | Modelo financeiro, deck, proposta | `01-work/dados-tech-financas/modelos-financeiros/HUB_Glossario_Financeiro_Congelado_v1.md`, regras congeladas; `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Dados_e_Inteligencia.md`, seção 4 | `E1 — documental-provisório` | Finanças, a confirmar | Revalidar no fechamento do baseline | `ilustrativo`; não serve à decisão como resultado realizado | “ROI de X%”, “payback garantido” ou “retorno comprovado” | Gate Financeiro com baseline aprovado, cálculo reproduzível e fonte oficial; não usar números atuais como prova |
| `CLM-MOAT-001` / moat | “Diferenciação, barreira de entrada ou vantagem defensável são hipóteses estratégicas até haver evidência comparável e decisão de estratégia.” | Interno; investidor; parceiro | Posicionamento, pitch, estratégia | Plano de implementação, princípio de claims proporcionais à evidência; fontes de arquitetura e oferta relacionadas | `E0 — não validado` | Estratégia de marca, a confirmar | Revalidar em cada revisão competitiva | `hipótese`; não há evidência comparativa registrada nesta ficha | “Moat comprovado”, “impossível de copiar”, “líder incontestável” ou “único” | Gate de Estratégia + evidência competitiva comparável + revisão Jurídica quando houver superlativo |
| `CLM-BENCH-001` / benchmark | “Benchmark só pode ser comunicado com coorte, denominador, métrica, período, comparabilidade, anonimização e fonte definidos.” | Cliente; público geral | Relatório, dashboard, benchmark comercial | `02-review/02-reconciliacao-blueprint/HUB_Blueprint_Arquitetura_Tecnologica.md`, seção sobre benchmarks anônimos como estágio-alvo; `02-review/02-reconciliacao-blueprint/matriz-status-E01-E20-v1.md`, item E16 | `E1 — documental-provisório` | Dados + LGPD/DPO, a confirmar | Revalidar por coorte e período | `não validado`; capacidade de benchmark é alvo, não disponibilidade atual | “Acima da média do mercado”, “top 10%” ou comparação nominal sem coorte e base | Gate de Dados + LGPD/DPO + revisão estatística + aprovação editorial |
| `CLM-SELO-001` / linguagem sensível ao Selo | “O Selo HUB, quando e se houver fluxo aprovado, deve ser descrito apenas segundo seu regulamento e decisão independente; relação comercial não garante reconhecimento.” | Avaliador; cliente; público geral | Site, certificado, proposta, anúncio | `02-review/02-reconciliacao-blueprint/HUB_Fundacao_Blueprint_Projeto.md`, seção sobre Selo; `04.08-termos-Selo-HUB.md`, status `bloqueado` | `E1 — documental-provisório` | Governança independente do Selo, a confirmar | Até regulamentação e decisão formal | `bloqueado`; o nome, autoridade e processo ainda dependem de decisão | “Comprar o Selo”, “Selo garantido”, “cliente reconhecido por contratar” ou endosso comercial implícito | Gate independente do Selo + Jurídico + aprovação da peça; bloqueado enquanto `GOV-003` estiver aberto |

## Regras de redação e acessibilidade

- Escrever uma ideia por frase e preferir sujeito, verbo, objeto, período e escopo explícitos.
- Não esconder incerteza em nota de rodapé, tooltip ou legenda de gráfico. O rótulo acompanha o claim.
- Evitar superlativos, absolutos e verbos causais quando a evidência é documental ou observacional.
- Em tabelas e decks, repetir a definição do indicador, a unidade, o período e a fonte junto do número.
- Não usar “clique aqui”, “resultado garantido”, “comprovado” ou “certificado” como atalho de confiança.
- Linkar para a fonte ou para o registro de aprovação com texto descritivo, como “ver definição financeira e fonte”.

## Pendências de aprovação

1. Confirmar owners por categoria e substitutos.
2. Confirmar matriz de fontes e autoridade e os caminhos definitivos de evidência.
3. Aprovar o vocabulário jurídico de `certificação`, `Selo`, `endosso` e `acreditação`.
4. Definir baseline, protocolo e dono para qualquer claim financeiro, ROI, impacto ou causal.
5. Definir coortes, anonimização e autorização LGPD antes de qualquer benchmark.
6. Promover este documento para revisão humana; nada aqui deve ser promovido diretamente para `03-approved/`.
