# Matriz de Sobreposição — Filtro Sim/Não Lado a Lado

> Ambos os sitemaps agora compartilham a mesma forma física (Home + 6 faixas + portões amarelos). Esta tabela é o filtro binário: **verde = ambos têm, amarelo = só um tem, cinza = nenhum / lacuna do Business OS**.
> Branch: `wip/meeting-2026-09-10` | Gerado em: 2026-09-10

## Resumo (visão geral)

| Faixa | No A? | No B? | Veredito |
|---|---|---|---|
| **Home + Barra superior (4)** | ✅ 5 nós | ✅ 5 nós | 🟢 IGUAL — ambos têm Home + Minha Conta/Login/Criar Conta/Rede Social |
| **Shop (Performance/Valor)** | ✅ 11 nós | ✅ 8 nós | 🟢 MESMA faixa, mais profunda no A (tem portões Carrinho/Checkout) vs B tem mais dados (73 indicadores) mas menos portões |
| **Classifieds (Descoberta de Talentos)** | ✅ 9 nós | ❌ 0 (órfão) | 🟡 LACUNA no B — A tem marketplace de talentos (MOD-03), B não tem nada |
| **Sell (Oferta / Fornecedores)** | ✅ 10 nós | ✅ 9 nós | 🟢 IGUAL — ambos têm fluxo de Sell + portões de aprovação; B adiciona detalhe de 17 integrações |
| **About (Conceito / Dicionário)** | ✅ 3 nós | ✅ 8 nós | 🟡 B MAIS PROFUNDO — A com 20 caps colapsado; B tem 25 nós + 20 arestas + 41 campos + RACI |
| **Support (Governança / ROI)** | ✅ 9 nós | ✅ 9 nós | 🟢 MESMO peso — ambos têm Contato/FAQ/Tornar-se Vendedor/Política de Devolução/Política de Envio/Alertas |
| **Blog (Comunidade / Academia)** | ✅ 3 nós | ❌ 0 (órfão) | 🟡 LACUNA no B — A tem MOD-06/07 construído; B só pesquisa futura |

**Contagem:** A 58 mapeados / 0 órfãos | B 37 mapeados / 4 órfãos | **Sobreposição em 4 faixas, 2 lacunas, 1 assimetria profunda**

## Matriz Detalhada de Nós

| Página / Portão | Faixa | No A (dev-2) | No B (Branch 01) | Filtro | Nota para a Reunião |
|---|---|---|---|---|---|
| Home (HUB Core / tese 00_Leia-me) | Home | ✅ MOD-01 | ✅ 00_Leia-me | 🟢 | Ambos reivindicam inteligência unificada — fraseado diferente |
| Minha Conta | Barra superior | ✅ PER-01..13 | ✅ 07 visões ×10 | 🟢 | Mesmo padrão |
| Login | Barra superior | ✅ | ✅ | 🟢 | — |
| Criar uma Conta | Barra superior | ✅ consentimento N24 | ✅ CMP/N24 | 🟢 | Ambos têm portão de LGPD — forte |
| Rede Social | Barra superior | ✅ | ✅ | 🟢 | Placeholder nos dois |
| Shop | Shop | ✅ MOD-02+04 | ✅ 04_Master (73) | 🟢 | A = cockpit transacional, B = catálogo de indicadores — mesmo assento, lente diferente |
| Lista de Produtos | Shop | ✅ Scorecards | ✅ Lista de indicadores | 🟢 | Colapsado no B para 1 nó em vez de 73 linhas |
| Detalhe do Produto | Shop | ✅ Detalhe KPI + FIN-01 | ✅ 05 Árvore 12 alavancas | 🟢 | B adiciona cadeia causal — mais rico |
| Carrinho | Shop | ✅ Carrinho de Ações | ✅ — | 🟡 | A tem carrinho de ações, B não tem conceito de carrinho — **lacuna B** |
| Log In / Cadastro (Shop) | Shop | ✅ portão amarelo ×2 | ✅ portão amarelo | 🟢 | Mesma ramificação de autenticação |
| Checkout | Shop | ✅ Confirmar Plano | ✅ Commit de evento (09) | 🟢 | Rótulo diferente, mesma semântica de commit |
| Classifieds | Classifieds | ✅ MOD-03 | ❌ — | 🟡 | **B sem a faixa inteira** — marketplace de talentos |
| Classifieds — Histórias de Sucesso | Classifieds | ✅ | ❌ — | 🟡 | — |
| Postar um Classified | Classifieds | ✅ | ❌ — | 🟡 | — |
| Template de Post | Classifieds | ✅ | ❌ — | 🟡 | — |
| E-mail de Confirmação → Rejeitado/Aprovado → E-mail | Classifieds | ✅ fluxo completo | ❌ — | 🟡 | Fluxo completo de aprovação ausente no B |
| Sell | Sell | ✅ MOD-05 | ✅ 10_Integrações | 🟢 | Mesma faixa |
| Conta do Vendedor | Sell | ✅ SCR-08 | ✅ | 🟢 | — |
| Template | Sell | ✅ | ✅ | 🟢 | — |
| E-mail de Confirmação | Sell | ✅ | ✅ | 🟢 | — |
| Post Rejeitado / Aprovado (Sell) | Sell | ✅ amarelo | ✅ amarelo | 🟢 | Mesmos portões |
| E-mail de Rejeição/Aprovação Enviado (Sell) | Sell | ✅ terminal | ✅ terminal | 🟢 | Mesmas folhas |
| Não Logado / Logado como Vendedor | Sell | ✅ portão duplo | ✅ portão duplo | 🟢 | Mesma divisão de entrada |
| Sobre Nós | About | ✅ tese 20 caps | ✅ 01 Mapa + Beachhead | 🟢 | A narrativa, B visual+pesquisa — mesmo assento |
| Depoimentos | About | ✅ Cases | ✅ Pesquisa de mercado | 🟢 | Evidência diferente, mesmo assento |
| Glossário | About | ✅ FLD-001..047 | ✅ 41 campos + 25 nós +20 arestas | 🟡 | B **muito mais profundo** — colapso foi a decisão correta |
| Suporte ao Cliente | Support | ✅ MOD-08 | ✅ 11_Governança | 🟢 | Mesma raiz de faixa |
| Fale Conosco | Support | ✅ | ✅ | 🟢 | — |
| FAQs | Support | ✅ GOV-08 | ✅ 11_Gov | 🟢 | — |
| Tornar-se um Vendedor | Support | ✅ | ✅ pesquisa GTM | 🟢 | B adiciona lente de GTM |
| Política de Devolução | Support | ✅ validação ROI | ✅ portões M0/M1/M2 | 🟢 | Mesma semântica |
| Política de Envio | Support | ✅ SLAs INT | ✅ 17 integrações + SLAs | 🟢 | B mais detalhado (2s–1h vs D+1) |
| Central de Alertas / Visões de Dashboard | Support | ✅ SCR-05 | ✅ 07 (10 visões) | 🟢 | A centralizado, B distribuído — mesmo assento |
| ROI do HUB | Support | ✅ SCR-06 / HUB-04 | ✅ 06 Simulador | 🟢 | A dashboard, B simulador — mesmo assento |
| Blog | Blog | ✅ MOD-06+07 | ❌ — | 🟡 | **B sem a faixa inteira** — comunidade/academia |

## O Filtro Executivo em 5 Linhas (para a reunião)

1. **Business OS provou:** Um marketplace transacional com navegação Shop+Sell+Support JÁ é construível e já tem usuários — sua tese do HUB não é teórica.
2. **Onde o HUB está à frente:** Faixas completas — você tem Classifieds (talentos) + Blog (comunidade/academia) desenhados; apps estilo Business OS geralmente não têm governança (seu N24/LGPD + ROI Impact não tem equivalente lá).
3. **Onde o HUB está atrás:** Profundidade de dados colapsada no sitemap mas **não construída** — B tem 73 indicadores / 41 campos / 27 eventos validados no papel; A tem 8 módulos / 9 telas no papel. Nenhum dos dois tem os portões em produção.
4. **Lacuna mais arriscada (2 órfãos):** Marketplace de talentos (Classifieds) + Eventos de comunidade (Blog) — B tem 0 nós ali, A tem design mas sem evidência. Se o Business OS monetizar essas faixas, você fica 6 meses atrás em efeito de rede.
5. **Decisão para hoje:** Escolha **uma faixa órfã** para validar primeiro (matching de talentos em Classifieds OU comunidade em Blog). Não construa as duas. As outras 4 faixas já estão lado a lado — não há peça faltando ali.

## O Que Fazer Com Isso

- **Antes da reunião:** Solte o screenshot do Business OS em `BusinessOS-reference.md` e substitua os 5 bullets — a matriz acima vai se recolorir instantaneamente.
- **Durante a reunião:** Abra `sitemap-A.html` + `sitemap-B.html` lado a lado. Para qualquer pergunta "temos X?" — encontre a faixa, leia a célula acima (✅/❌).
- **Depois da reunião:** Promova a faixa órfã escolhida para `02-review/` como uma decisão de 1 página (linha do `mapping-A.csv` → proposta).

