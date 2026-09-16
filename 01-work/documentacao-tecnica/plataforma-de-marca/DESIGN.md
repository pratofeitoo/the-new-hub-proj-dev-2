---
version: alpha
name: Contexto de Design HUB
description: Contexto visual e de interação da identidade HUB selecionada e de suas aplicações em marca, plataforma, produto, dashboards e superfícies de apresentação orientadas por evidências.
brandStatus: sistema visual selecionado pelo usuário / implementação pendente
colors:
  primary: "#5A2D6E"
  primary-strong: "#2B1433"
  secondary: "#2A6A7E"
  accent: "#E15A4F"
  dark: "#0D1322"
  ink: "#0D1322"
  magenta: "#B23A6B"
  plum: "#2B1433"
  violet: "#5A2D6E"
  coral: "#E15A4F"
  teal: "#2A6A7E"
  background: "#F8F7FB"
  surface: "#FFFFFF"
  border: "#E2DFEA"
  text-secondary: "#3B3745"
  text-muted: "#6B6675"
  status-success: "#166534"
  status-warning: "#92400E"
  status-danger: "#B91C1C"
  status-info: "#075985"
typography:
  display:
    fontFamily: "Sora, Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.2
  heading:
    fontFamily: "Sora, Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.43
  mono:
    fontFamily: "SFMono-Regular, Roboto Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  unit: "4px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xxxl: "64px"
components:
  button: { radius: "10px", minHeight: "44px" }
  card: { radius: "10px", border: "#E2DFEA", shadow: "none" }
  dialog: { radius: "16px", focusTrap: true }
  input: { radius: "6px", minHeight: "44px" }
  table: { radius: "6px", border: "#E2DFEA" }
  badge: { radius: "999px", requiresText: true }
---

# Contexto de Design HUB

## Visão geral

### Referência visual prioritária

O conjunto de quatro imagens fornecido pelo usuário em `01-work/documentacao-tecnica/plataforma-de-marca/99-referencias/` define a seleção visual desta identidade: símbolo geométrico entrelaçado, wordmark `HUB.` com ponto coral/vermelho, versões clara e escura, trajetórias com nós e órbitas, aplicações editoriais e digitais e paleta navy/plum/violeta/magenta/coral/teal. A seleção está registrada; arquivo-mestre, direitos, testes de contraste e regras detalhadas de uso continuam pendentes.

### Norte criativo

O HUB deve parecer uma sala de inteligência serena: um sistema editorial preciso em que contexto disperso se transforma em um caminho visível até uma decisão humana. A assinatura é a **porta de conexão** — três perspectivas sobrepostas formando um centro protegido e aberto — usada como motivo contido em marcas, diagramas, sobreposições de imagem e transições.

### Contexto do produto e registro

- **Público e trabalho principal:** Pessoas e organizações que trabalham com relações, capacidades, oportunidades, dados, decisões e resultados; a superfície do produto deve ajudar a orientar, compreender evidências, escolher a próxima ação e preservar aprendizados.
- **Mercado(s)-alvo e evidências:** O escopo de mercado ainda não foi finalizado. Use a plataforma HUB e a especificação aprovada de inteligência como evidência de domínios e conceitos operacionais, não como autorização para inventar claims de mercado.
- **Locale(s) e política de idioma:** O português (Brasil) é o idioma atual da documentação. A interface deve usar pt-BR simples por padrão; preserve rótulos e terminologia das fontes ao citar evidências. Revisão no idioma nativo é obrigatória antes da publicação. Outros locales não estão especificados.
- **Cena de uso:** Estratégia, produto, dashboards e apresentações pensados primeiro para desktop, com suporte responsivo a mobile; a densidade varia por rota. Evidências e limitações devem permanecer legíveis com zoom e em larguras estreitas.
- **Registro:** Híbrido. Superfícies de marca e apresentação podem ser editoriais e atmosféricas; superfícies de produto e dashboard priorizam clareza, familiaridade construída, conclusão da tarefa e cobertura de estados.
- **Assinatura memorável:** A porta de conexão e um único caminho dominante por superfície.
- **Contenção:** Não transforme toda superfície em moodboard, diagrama de rede, gradiente ou grade de cards. Deixe estrutura, texto e evidência carregarem o significado.
- **Antirreferências:** Neon genérico de IA, otimismo corporativo de banco de imagens, excesso de dashboards brilhantes, linguagem falsa de certificação/selo e decoração densa que faça evidência provisória parecer autoridade.
- **Mapeamento de propriedade dos tokens/runtime:** Neste repositório, `DESIGN.md` é a fonte documental provisória do contrato visual compartilhado. Nenhum pacote único de tokens de runtime foi estabelecido na raiz. A orientação-piloto em `01-work/documentacao-tecnica/plataforma-de-marca/DESIGN.md` continua sendo a referência mais específica do piloto e deve ser reconciliada antes da implementação. Tokens futuros devem ser gerados ou adaptados a partir de uma única fonte canônica e então verificados contra drift.

## Cores

Navy e ink estabelecem estrutura, texto e autoridade serena. Paper e branco fornecem superfícies de leitura. Violeta é a cor selecionada de ênfase/ação; teal expressa conexão e relacionamento; magenta expressa trajetória e energia de rede; coral é energia controlada, não uma cor genérica de alerta; plum cria profundidade. Cores de status são semânticas e devem sempre vir acompanhadas de rótulo, ícone, padrão ou posição.

Os valores selecionados na referência visual são `#0D1322` (navy), `#2B1433` (plum), `#5A2D6E` (violeta), `#B23A6B` (magenta), `#E15A4F` (coral) e `#2A6A7E` (teal). Usá-los como valores canônicos da direção visual nos documentos e protótipos; os papéis semânticos e a acessibilidade prevalecem sobre a aplicação literal quando houver conflito.

Não use violeta, coral, amarelo ou verde-claro em texto pequeno sobre superfícies claras sem medir o contraste. Busque WCAG 2.2 AA, incluindo 4,5:1 para texto normal. Mudanças de tema podem remapear primitivos, mas devem preservar papéis semânticos. Gráficos exigem legenda, definição, unidade, período, fonte e resumo textual acessível quando esses dados forem relevantes.

## Tipografia

Sora é a família selecionada de display: use-a em títulos curtos, frases de capa e números em destaque. Inter é a família selecionada utilitária: use-a em prosa, controles, rótulos, tabelas, métricas e notas de evidência. Use a família mono apenas para comandos, identificadores e valores técnicos. Confirme licenciamento, pesos, suporte ao português e distribuição antes da publicação. Use sentence case por padrão; evite caixa alta para informações essenciais.

Mantenha o corpo em 16 px ou mais sempre que possível, com line-height de 1,5. Não comprima a tipografia para preservar um layout. Dados numéricos devem usar formatação consistente e numerais tabulares quando disponíveis. Não invente comportamento de localização para locales ainda não especificados.

## Layout

Use um ritmo-base de 4 px com intervalos recorrentes de 8, 16, 24, 32 e 48 px. Comece com 12 colunas no desktop, 8 no tablet e 4 no mobile; use breakpoints orientados pelo conteúdo e preserve uma medida de leitura confortável. Prefira gutters de 24 px no desktop e 16 px no mobile. Mantenha controles primários com pelo menos 44 px de altura.

Boards de marca podem usar gutters marcados, canvas escuro e composição editorial assimétrica. Superfícies de produto devem usar geometria de página estável, colunas de leitura claras, hierarquia explícita e propriedade independente de overflow para tabelas ou painéis longos. Reserve espaço para erros, textos de ajuda, loaders, mídia e barras de rolagem para que o feedback não mova os controles principais.

## Elevação e profundidade

Prefira camadas tonais e bordas sutis a sombras. Cards estáticos são planos por padrão. Use baixa elevação apenas em overlays ou interações que realmente precisem de separação; nunca use elevação, blur, badges ou cor para sugerir aprovação, autoridade, certificação ou qualidade da evidência.

## Formas

Use 6 px para campos e controles compactos, 10 px para cards e controles primários, 16 px para painéis de destaque e pills apenas para tags, filtros e rótulos de status explícitos. Mantenha containers de ícones e divisores opticamente consistentes. O logo HUB. exige área de proteção e não deve ser alterado, esticado, recolorido ou aplicado sobre imagem complexa sem fundo controlado. Tamanho mínimo, monocromia e demais regras detalhadas dependem do arquivo-mestre.

## Componentes

### Estados visuais fundamentais

Todo componente interativo precisa de tratamento para default, hover, focus-visible, active/pressed, selected, disabled, busy, success, warning e error, conforme aplicável. O foco deve ser visível com tratamento autoral mínimo de 2 px e não pode depender apenas de cor. Controles busy mantêm sua geometria e impedem submissões duplicadas.

### Botões e ações

Use ênfase × intenção: solid de marca para a ação primária, outline/ghost para ações secundárias e danger apenas para ações destrutivas ou sensíveis à segurança. Use verbos reais (`Salvar alterações`, `Excluir`, `Continuar`). Ofereça ícone e rótulo quando a ação não for universalmente compreendida. Separe ações perigosas das ações primárias seguras.

### Navegação e exibição de dados

A navegação deve expor a localização atual e preservar o contexto da rota. Dados orientados à leitura usam tabelas semânticas; comportamento semelhante a planilha exige um modelo deliberado de teclado. Busca, filtros, ordenação, página e tamanho de página devem poder ser restaurados quando o produto oferecer esses recursos. Não publique tabela sem limite ou gráfico que esconda sua fonte e limitação.

### Formulários e overlays

Use controles semânticos nativos sempre que possível. A validação combina orientação no campo com resumo acessível para formulários com vários erros. Dialogs são controlados pelo app, têm rótulo, prendem o foco quando modais, podem ser fechados com Escape quando seguro e restauram o foco ao fechar. Toasts são compartilhados, deduplicados e anunciados em live region; nunca substituem erros inline críticos.

### Iconografia

Use uma família linear simples com stroke, peso óptico e bounding box consistentes. Ícones apoiam rótulos; não substituem rótulos para ações ou status críticos. A porta de conexão pode ser usada como motivo, mas não como badge de status ou certificação implícita.

### Movimento

O movimento é escasso e intencional: revela hierarquia, confirma uma mudança de estado ou mostra uma relação. Use transições curtas e interrompíveis; não anime dados rotineiros nem crie movimento ambiente que concorra com a evidência. Respeite `prefers-reduced-motion`, removendo movimento não essencial e preservando a mudança de estado por opacidade, posição ou texto explícito.

### Conteúdo e visualização de dados

Use linguagem clara, humana, precisa e responsável. Prefira `pode apoiar`, `em desenvolvimento`, `hipótese`, `observado` e `em validação` quando a evidência for provisória. Mantenha sujeito, ação, escopo, período, fonte, owner e limitação perto de claims e métricas. Nunca use “garante”, “certifica”, “comprova impacto” ou “gera ROI” sem registro de claim aprovado.

## Faça e não faça

- **Faça:** Faça cada superfície responder a uma pergunta e expor a próxima ação útil.
- **Faça:** Reutilize a porta de conexão, o contraste navy/paper e o vocabulário explícito de evidências como assinatura reconhecível do sistema.
- **Faça:** Preserve a distinção entre evidência observada, hipótese, ilustração, validação e aprovação.
- **Não faça:** Apresente o board de referência ou qualquer protótipo derivado como arquivo-mestre, certificação, produto ou resultado validado.
- **Não faça:** Deixe cor, profundidade, densidade ou presença do logo sugerirem autoridade ou impacto.
- **Não faça:** Crie variantes locais do comportamento compartilhado sem registrar uma razão nomeada pelo negócio em `UX-CONTRACT.md`.
