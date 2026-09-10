# Matriz de Comparação — HUB × Business OS

> **Correção de escopo:** A = especificação aprovada do HUB. B = wiki/referência visual do Business OS no segundo repositório. As faixas são apenas um formato comum de comparação; elas não afirmam que o Business OS usa a mesma arquitetura de navegação.
> Branch: `wip/meeting-2026-09-10` | Corrigido em: 2026-09-10

## Regra de evidência

- **Definido:** existe na especificação do HUB, mas não significa construído.
- **Observado:** aparece nas telas/imagens do Business OS, mas não significa produção validada.
- **Não evidenciado:** não apareceu no material visual analisado. Não significa que não exista.
- **Sobreposição:** só pode ser marcada quando o conceito é comparável, não apenas porque recebeu o mesmo nome de faixa.

## Resumo honesto

| Área comparável | HUB A | Business OS B | Leitura segura |
|---|---|---|---|
| Home / Panorama | Definido: HUB Core + Cockpit | Observado: Panorama / Início | Sobreposição conceitual, não equivalência de implementação |
| Oportunidades / matching | Definido: Pessoas e Talentos | Observado: Oportunidades, recomendações e Match | Sobreposição forte; B tem evidência visual mais concreta |
| Soluções / inteligência | Definido: HUB Core + Inteligência | Observado: HUB Intelligence + Soluções | Sobreposição forte de conceito |
| Conexões / ecossistema | Definido: grafo, fornecedores, academia, comunidades | Observado: Conexões, pessoas, fornecedores, especialistas | Sobreposição conceitual |
| Jornada / execução | Definido: planos de ação, performance, evidências | Observado: Diagnóstico, Plano, Evidências, Selo | Sobreposição forte de fluxo |
| Impacto / resultados | Definido: Clientes, Receita, HUB Impact, ROI | Observado: cadeias de impacto e resultados executivos | Sobreposição conceitual; não comparar números sem fonte |
| Governança / dados | Definido: LGPD, consentimento, qualidade, auditoria | Observado: LGPD, consentimento, acesso, dados agregados | Sobreposição de requisitos; maturidade não comprovada |
| Academy / conteúdo | Definido: Acadêmico + Comunidades | Observado: Academy, Conteúdo, Pesquisas | Sobreposição parcial |
| E-commerce cart/checkout | Definido: ações/planos, não e-commerce literal | Não evidenciado | Não chamar de lacuna de produto |
| Blog editorial separado | Definido: Comunidades/Eventos | Não evidenciado | Não chamar de lacuna sem evidência adicional |

## Matriz detalhada com rastreabilidade

| Capability | HUB A | Business OS B | Status da comparação | Evidência |
|---|---|---|---|---|
| Dashboard inicial / Panorama | HUB Core + SCR-01 Cockpit | Panorama / Início | 🟡 Comparável conceitualmente | A: Planilha #10; B: `22.11.03.jpeg` |
| Perfil e contexto | Personas, perfis e dados de pessoa | Meu perfil, 72% completo, frentes ativas | 🟢 Conceito presente nos dois | A: #03/#05; B: `23.49.36.jpeg` |
| Descoberta de oportunidades | MOD-03 Pessoas e Talentos | Oportunidades + filtros + recomendações | 🟢 Sobreposição forte | A: #02; B: `23.49.36.jpeg` |
| Matching explicável | Match definido na arquitetura | Match 92%/89% visível | 🟡 B demonstra visualmente; A define tecnicamente | A: FLD-047/#02; B: `23.49.36.jpeg` |
| Publicação de oportunidade | Fornecedores/Compras e ações | Publicar oportunidade visível | 🟡 Conceito relacionado, fluxo não equivalente | A: MOD-05; B: `23.50.41.jpeg` |
| Fornecedores | MOD-05 Fornecedores e Compras | Busca/conexões com fornecedores | 🟡 Comparável parcialmente | A: #02; B: `23.50.41.jpeg` |
| Soluções | HUB Core / módulos técnicos | Soluções / HUB Solutions | 🟢 Sobreposição de conceito | A: #09/#19; B: `22.11.03.jpeg` |
| Inteligência | Motores HUB Graph/Value/Intelligence | HUB Intelligence diagram | 🟢 Sobreposição de conceito | A: #19; B: `22.11.03.jpeg` |
| Cadeias de impacto | Receita, margem, risco, valor | Cinco cadeias de impacto visíveis | 🟢 Sobreposição forte | A: #04/#05/#07; B: `22.11.03.jpeg` |
| Resultados executivos | Cockpit, ROI, indicadores | Custos, produtividade, receita, lucratividade | 🟢 Sobreposição de objetivo | A: SCR-01/SCR-06; B: `22.11.03.jpeg` |
| Jornada | Planos, performance, evidências | Diagnóstico → plano → evidências → selo | 🟢 Sobreposição forte de fluxo | A: MOD-02/SCR-03; B: `22.11.03.jpeg` |
| Indicadores | Catálogo KPI governado | Indicadores no menu e impacto em números | 🟡 Conceito presente; profundidade diferente | A: #06; B: `22.11.03.jpeg`; `23.50.41.jpeg` |
| Medição e atribuição | HUB Impact e ROI | Baseline → intervenção → validação | 🟢 Sobreposição de método | A: #20; B: `22.11.03.jpeg` |
| LGPD / consentimento | GOV-01..12 e N24 | Área de privacidade e governança | 🟢 Requisito presente nos dois | A: #11; B: `22.11.03.jpeg` |
| Academy / aprendizagem | MOD-06 Acadêmico | Academy | 🟢 Nome e intenção compatíveis | A: MOD-06; B: `22.11.03.jpeg` |
| Comunidade | MOD-07 Comunidades/Eventos | Não há tela de comunidade explícita | ⚪ Não evidenciado em B | A: MOD-07; B: nenhum arquivo visual |
| E-commerce cart/checkout | Não definido como e-commerce literal | Não evidenciado | ⚪ Comparação inválida | Nenhuma evidência equivalente |

## Conclusão corrigida

1. O material permite dizer que o HUB e o Business OS compartilham uma **visão de plataforma de inteligência, oportunidades, conexões, jornada e impacto**.
2. O Business OS possui **evidência visual de fluxos e telas**; o HUB possui **especificação técnica e governança**. Isso não permite declarar que um está “à frente” em implementação.
3. A comparação mais útil é: **o que o HUB já especificou que o Business OS demonstra visualmente; o que o Business OS demonstra que o HUB ainda não transformou em fluxo/tela; e o que permanece não evidenciado.**
4. Não há base para afirmar “6 meses atrás”, “Business OS já tem usuários”, “quatro faixas iguais” ou qualquer ROI validado.
5. A decisão segura para a próxima conversa é escolher quais fluxos observados do Business OS devem virar telas/fluxos equivalentes do HUB: **Oportunidades/Match, Jornada, Inteligência/Impacto ou Governança**.

## O que não dizer na reunião

- Não dizer que os dois produtos são iguais.
- Não dizer que o Business OS tem ou não tem uma funcionalidade que não aparece nas fontes.
- Não apresentar os números do HUB como resultados do Business OS.
- Não tratar sitemap visual como prova de produto construído.
