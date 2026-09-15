# Sistema de agentes — Plataforma de Marca HUB

> **Status:** configuração de trabalho / provisória  
> **Escopo:** decomposição e delegação de tarefas de branding, apresentações, protótipos e dashboards  
> **Fonte de verdade:** este repositório e seus gates de maturidade; Kanbots será a camada operacional quando estiver disponível.

## 1. Objetivo

Organizar subagentes especializados para produzir análises e artefatos compatíveis com a Plataforma de Marca HUB, mantendo:

- escopo de ferramentas mínimo por função;
- separação entre pesquisa, recomendação e normatização;
- rastreabilidade de fontes e decisões;
- handoffs explícitos entre agentes;
- revisão humana antes de qualquer promoção para `03-approved/`.

## 2. Regras operacionais

1. Cada subagente recebe uma tarefa delimitada, um diretório de trabalho e um conjunto mínimo de ferramentas.
2. Agentes de pesquisa não editam documentos normativos.
3. Agentes de produção editam somente os arquivos atribuídos à sua tarefa.
4. Nenhum agente pode tratar `01-work/`, `02-review/` ou `99-archive/` como fonte aprovada sem registrar o status.
5. Claims de impacto, ROI, causalidade, certificação, moat, benchmarks ou desempenho financeiro exigem fonte, owner e gate.
6. Todo resultado deve declarar evidências observadas, recomendações e decisões pendentes separadamente.
7. Todo subagente deve permanecer em uma sessão visível e rastreável até o usuário solicitar seu encerramento.
8. A coordenação não encerra, substitui ou oculta sessões sem registrar o estado e o motivo.

## 3. Perfis de subagentes

### A. Estrategista de marca e arquitetura

**Responsabilidade:** posicionamento, públicos, arquitetura de marca, ofertas, nomenclatura, white-label e decisões estratégicas.

**Escopo de escrita:**

- `01-plataforma-estrategica/`;
- `00-controle/registro-de-decisoes.md`;
- relatórios de revisão em `01-work/`.

**Ferramentas permitidas:**

- `rg`, `rg --files`, `git status`, leitura de arquivos;
- `apply_patch` somente nos arquivos atribuídos;
- `web__run` somente quando uma fonte externa atual for necessária e com citações;
- skill `business-strategy`;
- skill `brand-guidelines`.

**Não permitido:** editar `03-approved/`, publicar claims, decidir sozinho o nome oficial da marca ou transformar hipótese jurídica em autorização.

### B. Governança verbal, claims e evidências

**Responsabilidade:** voz, tom, vocabulário, claims, níveis de evidência, rótulos de incerteza e regras de publicação.

**Escopo de escrita:**

- `02-identidade-verbal/`;
- `06-governanca-e-publicacao/fluxo-de-aprovacao-de-claims.md`;
- `00-controle/matriz-fontes-e-autoridade.md`.

**Ferramentas permitidas:**

- leitura e busca local;
- `apply_patch` nos arquivos atribuídos;
- `web__run` para verificação de fontes externas;
- skills `brand-guidelines`, `accessible-content` e `content-strategy`.

**Não permitido:** inventar evidência, elevar o grau de certeza de um claim ou aprovar linguagem jurídica, financeira ou de certificação.

### C. Sistema visual e design tokens

**Responsabilidade:** identidade visual, cores, tipografia, composição, iconografia, imagens, acessibilidade e tokens compartilhados.

**Escopo de escrita:**

- `03-identidade-visual/`;
- `05-sistema-de-produto-e-dashboards/tokens-de-interface.md`;
- `04-sistema-de-apresentacoes/regras-de-graficos-e-tabelas.md`.

**Ferramentas permitidas:**

- leitura e busca local;
- `apply_patch` nos arquivos atribuídos;
- `view_image` para inspeção visual local;
- skills `brand-guidelines`, `design-md`, `accessible-content`;
- skills de princípios visuais quando forem necessários para justificar decisões.

**Não permitido:** declarar logo, paleta ou sistema como aprovado sem decisão registrada; reutilizar imagens sem proveniência.

### D. Sistema de apresentações e slides

**Responsabilidade:** narrativa, arquitetura de decks, templates, biblioteca de slides, gráficos, notas de evidência e qualidade de apresentação.

**Escopo de escrita:**

- `04-sistema-de-apresentacoes/`;
- inventários em `99-referencias/`;
- protótipos ou decks somente quando a tarefa autorizar explicitamente.

**Ferramentas permitidas:**

- leitura e busca local;
- `apply_patch` nos documentos atribuídos;
- `view_image` para revisão visual;
- `mcp__codex_slides__open_codex_slides` e `mcp__codex_slides__edit_deck` quando o projeto de slides estiver explicitamente em escopo;
- skills `codex-slides:codex-slides-deck`, `codex-slides:codex-slides-verification` e `codex-slides:codex-slides-research`.

**Não permitido:** usar deck histórico como template oficial sem classificação; publicar apresentações; alterar fontes de dados.

### E. Produto, protótipos e dashboards

**Responsabilidade:** padrões de interface, componentes, estados, dashboards, hierarquia de métricas, visualizações e protocolo de protótipo.

**Escopo de escrita:**

- `05-sistema-de-produto-e-dashboards/`;
- inventários de telas e visualizações em `99-referencias/`.

**Ferramentas permitidas:**

- leitura e busca local;
- `apply_patch` nos arquivos atribuídos;
- `view_image` para inspeção visual;
- skills `build-web-apps:frontend-app-builder`, `build-web-apps:frontend-testing-debugging`, `chart-visualization`, `accessible-content`;
- `web__run` somente para documentação técnica atualizada.

**Não permitido:** tratar uma especificação de métrica como métrica validada; criar um dashboard que esconda fonte, período ou limitação causal.

### F. Verificação e integração

**Responsabilidade:** revisar consistência entre documentos, checar links, status, dependências, escopo de escrita e critérios de aceitação.

**Escopo de escrita:** somente relatórios de verificação e correções pequenas explicitamente atribuídas.

**Ferramentas permitidas:**

- `rg`, `rg --files`, `git diff`, `git status`;
- leitura dos documentos produzidos;
- `apply_patch` somente quando a correção estiver claramente localizada;
- skill `ai-devkit:verify`;
- skill `codex-engineering-guardrails:code-verification` quando houver artefato técnico.

**Não permitido:** reescrever decisões de produto ou marca durante a verificação.

## 4. Escopo de MCPs, plugins e ferramentas

As permissões acima são perfis de trabalho aplicados às instruções de cada subagente. O runtime de subagentes deve receber somente as menções, skills e ferramentas necessárias para o perfil. A presença de um plugin instalado não significa que ele está autorizado para toda tarefa.

Quando Kanbots estiver conectado, seus recursos devem ser usados apenas para estado operacional: backlog, responsáveis, dependências, prazos e comentários. O conteúdo normativo continua no repositório.

## 5. Estado e visibilidade

Cada sessão deve ser registrada com:

- nome visível;
- identificador da sessão;
- perfil;
- tarefa;
- worktree;
- arquivos autorizados;
- status atual;
- último handoff;
- próximo passo;
- condição de encerramento.

