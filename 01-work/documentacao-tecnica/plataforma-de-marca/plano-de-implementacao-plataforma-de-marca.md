# Plano de implementação — Plataforma de Marca HUB

> **Status:** rascunho de trabalho / provisório  
> **Local:** `01-work/documentacao-tecnica/plataforma-de-marca/`  
> **Base:** revisão de marketing e marca realizada na branch principal `main`
> **Regra:** este plano orienta a criação dos padrões; não aprova marca, claim, identidade visual ou material de publicação.

## 1. Objetivo

Criar uma plataforma de marca modular que estabeleça padrões reutilizáveis para:

- apresentações e decks;
- slides gerados por agentes;
- protótipos de produto;
- dashboards e visualizações de dados;
- mensagens, claims e evidências;
- uso de marca, sub-marcas, programas, parceiros e white-label.

O resultado deve aumentar a consistência visual e semântica das gerações sem transformar hipóteses, referências históricas ou materiais em revisão em padrões oficiais.

## 2. Diagnóstico consolidado

### 2.1 O que já existe

O repositório possui material estratégico, visual e de dados relevante:

- separação de maturidade entre `01-work/`, `02-review/`, `03-approved/` e `99-archive/`;
- orientação e registro de evidências em `wiki/`;
- registro de diretrizes de marca e claims em `01-work/pesquisa-e-confianca/documentos-oficiais/12-comercial-GTM/12.03-brand-guidelines-claim-registry.md`;
- documentos de propriedade intelectual, licenciamento, Selo e CAOS;
- materiais de visão da plataforma e referências de deck em `02-review/02-visao-plataforma/`;
- decks históricos em `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/decks iniciais/`;
- especificações de indicadores, mapas visuais e dados de dashboards;
- materiais aprovados sobre ofertas, cenários e núcleo de inteligência.

### 2.2 O que ainda não existe como padrão vigente

Não há, em estado aprovado, um sistema integrado para:

- arquitetura de marca e relações entre HUB, Plataforma HUB, HUB Negócios, Instituto HUB, CAOS e Selo;
- logotipo, assinaturas, paleta, tipografia, grid e espaçamento;
- voz, tom, vocabulário e claims aprovados;
- templates oficiais de apresentações;
- biblioteca de slides reutilizáveis;
- tokens e componentes comuns entre slides, protótipos e dashboards;
- hierarquia visual de métricas e regras de evidência;
- white-label, endosso e co-branding;
- revisão, aprovação, versionamento e rotulagem de maturidade.

## 3. Princípios de trabalho

1. **Evidência antes de estética:** nenhuma decisão visual deve ocultar incerteza, origem ou limitação de um dado.
2. **Fonte primária antes de síntese:** documentos locais e aprovados prevalecem sobre resumos de `wiki/`.
3. **Provisório explicitamente rotulado:** tudo que estiver em `01-work/` permanece hipótese ou material de trabalho até aprovação.
4. **Separação entre referência e autoridade:** decks arquivados podem inspirar narrativa ou estética, mas não são templates oficiais.
5. **Sistema único, múltiplas aplicações:** tokens visuais e regras semânticas devem servir a decks, protótipos e dashboards.
6. **Claims proporcionais à evidência:** não promover projeções, correlações, impacto, ROI, certificação ou causalidade acima do que as fontes sustentam.
7. **Pequenos documentos com donos claros:** cada módulo deve ter escopo, owner, dependências, status, revisão e gate próprios.

## 4. Estrutura documental proposta

### `00-controle/`

- `README.md` — escopo, limites e ciclo de vida;
- `indice-documentos.md` — mapa de documentos, owners, status e dependências;
- `matriz-fontes-e-autoridade.md` — classificação de fontes e maturidade;
- `registro-de-decisoes.md` — decisões de marca, visual, claims e white-label.

### `01-plataforma-estrategica/`

- `arquitetura-de-marca.md`;
- `proposito-promessa-e-posicionamento.md`;
- `publicos-e-contextos-de-mensagem.md`;
- `arquitetura-de-ofertas-e-produtos.md`;
- `nomenclatura-e-taxonomia.md`;
- `principios-de-white-label-e-endosso.md`.

### `02-identidade-verbal/`

- `voz-e-tom.md`;
- `mensagens-principais-por-publico.md`;
- `vocabulário-preferido-e-proibido.md`;
- `claims-registry.md`;
- `regras-para-evidencia-e-incerteza.md`;
- `exemplos-de-mensagem-aprovada.md`.

### `03-identidade-visual/`

- `sistema-visual.md`;
- `logo-e-assinaturas.md`;
- `paleta-de-cores.md`;
- `tipografia.md`;
- `grid-espacamento-e-composicao.md`;
- `iconografia-ilustracao-e-imagem.md`;
- `acessibilidade-e-contraste.md`;
- `direitos-e-proveniencia-de-assets.md`.

### `04-sistema-de-apresentacoes/`

- `principios-de-narrativa.md`;
- `templates-de-deck.md`;
- `template-pitch-investidores.md`;
- `template-parceiros-e-clientes.md`;
- `template-case-de-mvp.md`;
- `template-status-e-operacao.md`;
- `regras-de-graficos-e-tabelas.md`;
- `regras-de-notas-de-evidencia.md`;
- `checklist-de-publicacao.md`.

### `05-sistema-de-produto-e-dashboards/`

- `principios-de-interface.md`;
- `tokens-de-interface.md`;
- `componentes-base.md`;
- `estados-e-feedback.md`;
- `padroes-de-dashboard.md`;
- `hierarquia-de-metricas.md`;
- `regras-de-visualizacao-de-dados.md`;
- `acessibilidade-de-interface.md`;
- `protocolo-de-prototipo.md`.

### `06-governanca-e-publicacao/`

- `status-e-rotulos-de-maturidade.md`;
- `fluxo-de-aprovacao-de-claims.md`;
- `fluxo-de-aprovacao-de-decks.md`;
- `fluxo-de-aprovacao-de-prototipos.md`;
- `fluxo-de-aprovacao-de-dashboards.md`;
- `raci-de-marca.md`;
- `controle-de-versoes-e-changelog.md`.

### `99-referencias/`

- `inventario-de-decks-historicos.md`;
- `inventario-de-visuais.md`;
- `inventario-de-fontes-e-direitos.md`;
- `mapeamento-para-fontes-aprovadas.md`.

## 5. Sequência de execução

### P0 — segurança semântica e governança

1. Confirmar o status provisório desta plataforma de marca.
2. Criar o índice documental e a matriz de fontes e autoridade.
3. Definir rótulos visíveis: `aprovado`, `em revisão`, `ilustrativo`, `hipótese`, `não validado` e `histórico`.
4. Resolver a arquitetura de marca entre HUB, Plataforma HUB, HUB Negócios, Instituto HUB, CAOS e Selo.
5. Converter o claim registry em um gate operacional com fonte, owner, evidência, validade e aprovação.

### P1 — sistema mínimo reutilizável

6. Definir o sistema visual mínimo: cor, tipografia, escala, grid, espaçamento, cards, tabelas, gráficos e rodapés.
7. Criar três templates iniciais de deck:
   - institucional/visão;
   - parceria ou cliente;
   - case de MVP com evidências e limitações.
8. Criar uma biblioteca inicial de slides: problema, tese, oferta, jornada, plataforma, evidência, roadmap, governança, métricas e próximos passos.
9. Indexar os decks históricos, classificando-os como referência visual, referência narrativa, fonte factual, obsoleto ou não reutilizável.

### P2 — conexão entre marca, dados e produto

10. Definir tokens comuns para slides, protótipos e dashboards.
11. Formalizar a hierarquia de métricas: qualidade/instrumentação, ativação/operação, processo/resultado e impacto financeiro validado.
12. Criar padrões de dashboard para operação diária, gestão mensal e visão executiva trimestral.
13. Exigir proveniência em cada visualização relevante: fonte, período, definição, unidade, status e limitações.
14. Rotular cada protótipo por estágio: exploratório, conversa, usabilidade, especificação, candidato a implementação ou produto validado.

## 6. Critérios de aceitação da primeira versão

A primeira versão do sistema será considerada pronta para revisão quando:

- a arquitetura de marca e seus pontos de decisão estiverem documentados;
- cada documento indicar status, owner, fontes e dependências;
- nenhum claim sensível estiver sem fonte e regra de aprovação;
- existir um sistema visual mínimo coerente e tecnicamente especificado;
- houver pelo menos três templates de deck e uma biblioteca inicial de slides;
- slides, protótipos e dashboards compartilharem tokens e rótulos de maturidade;
- gráficos e métricas exibirem contexto e proveniência;
- materiais históricos não forem confundidos com templates vigentes;
- o conjunto estiver pronto para revisão humana antes de qualquer promoção a `03-approved/`.

## 7. Decisões direcionais registradas

As respostas abaixo foram registradas como direção de trabalho para a próxima fase. Elas não substituem aprovação formal, validação jurídica, governança de claims ou promoção para `03-approved/`.

1. **Nome oficial da marca-mãe:** `HUB`.
2. **Relação entre HUB, HUB Negócios, Instituto HUB, Plataforma HUB, CAOS e Selo:** frentes diferentes, porém conectáveis, que compõem o ecossistema da plataforma.
3. **Selo:** permanece uma hipótese; sua direção futura é mais próxima de certificação ou reconhecimento, sem autorização de uso público até definição de critérios, independência e governança.
4. **Público prioritário para apresentações:** público geral.
5. **Identidade visual externa aprovada:** não existe. O sistema será proposto a partir dos rascunhos visuais encontrados no arquivo de referências em `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/`.
6. **Identidades derivadas:** permitidas para produtos e programas, com derivação suave e alterações mínimas em relação ao sistema HUB.
7. **White-label:** capacidade e atribuições obrigatórias permanecem indefinidas; este ponto continua pendente de decisão específica.
8. **Claims:** a direção é cobrir claims de impacto, ROI, inteligência, matching, rede, certificação, moat, dados e benchmarks. A autorização de cada claim continua condicionada a fonte, owner, nível de evidência, validade e gate aplicável.
9. **Referência histórica prioritária:** `05-resources/inbox/Plataforma HUB/99-arquivo/Rascunhos iniciais/Decks atualizados/Apresentação - NESST.pdf`.
10. **Prioridade de outputs:** primeiro identidade visual; em seguida, plataforma de marca.
11. **Referência visual prioritária desta rodada:** conjunto de quatro imagens fornecido pelo usuário em `01-work/documentacao-tecnica/plataforma-de-marca/99-referencias/`, registrado como direção provisória para símbolo, wordmark, paleta, tipografia, sistema gráfico e aplicações.

## 8. Próxima ação recomendada

Com as direções acima registradas, iniciar a próxima fase sem promover os materiais automaticamente para padrão aprovado. Priorizar:

1. `00-controle/README.md`;
2. `00-controle/matriz-fontes-e-autoridade.md`;
3. `03-identidade-visual/sistema-visual.md` e seus módulos de identidade derivados;
4. `01-plataforma-estrategica/arquitetura-de-marca.md`;
5. `02-identidade-verbal/claims-registry.md`, mantendo os gates de evidência e aprovação.

### 8.1 Validação do novo conjunto visual

Antes de promover qualquer elemento do conjunto fornecido pelo usuário:

1. confirmar autoria, titularidade, direitos e arquivo-mestre do símbolo e do wordmark;
2. confirmar licenças, pesos e distribuição de `Sora` e `Inter`;
3. testar a paleta candidata em pares claro/escuro, texto, controles, gráficos e projeção;
4. aplicar a direção em um slide, um dashboard e uma tabela reais;
5. validar que trajetórias, nós e texturas não sugerem evidência inexistente;
6. registrar a decisão, owner, versão e escopo de uso antes de qualquer promoção.
