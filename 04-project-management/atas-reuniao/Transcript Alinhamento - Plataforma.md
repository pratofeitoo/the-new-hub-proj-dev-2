---
date: 2026-09-01T18:00:00
type:
  - meeting-note
  - ata
language: pt-BR
attendees:
  - Tamara Braga
  - Marcos (braço tecnológico)
  - PF Rezende (controle projeto / organização)
owner:
  - PF Rezende
duration: ~90min
location: Google Meet
status: estruturada
tags:
  - ata
  - plataforma
  - SEBRAE
  - FIRJAN
  - pricing
  - infraestrutura
  - NDA
related:
  - "[[Plataforma Ruby]]"
  - "[[MVP Fornecedores]]"
  - "[[MVP Candidatos]]"
---

# Ata — Alinhamento Plataforma (01/09/2026 18h)

> [!summary] TL;DR — Leia em 30 segundos
> Alinhamento pré-SEBRAE para fechar **custo mínimo/máximo por MVP** e estratégia de piloto pago. Definido: **piloto = 50 fornecedores + 50 compradores** como base, **valor hora alvo R$180–250** (Marcos valida por visão até amanhã 09h), **infra piloto = 1x VPS Hostinger KVM-8** (produção = 3x KVM-8: 2 app + 1 DB, futuro 2 DB + 2 BI em HA). Modelo comercial: SEBRAE/FIRJAN financiam build inicial (~R$200k cada), depois MRR de **R$15k/mês por empresa cliente** (vs R$30k Gupy + R$15k Qulture.Rocks). Próximo gatilho: **SEBRAE com Bruno amanhã 02/09 10h** — levar apenas visão Fornecedores + storytelling de ROI, **sem telas detalhadas sem NDA**.

| Campo | Valor |
|---|---|
| **Objetivo** | Delimitar preços/custos por MVP (horas + infra) para negociar piloto pago com SEBRAE; alinhar repositório compartilhado; definir sociedade e proteção de IP |
| **Gravação** | ![[audio.mp3]] |
| **Artefatos revisados** | Planilha TMVP (abas 2/3/4/6 - caixa), Google Drive `Plataforma Ruby > MVP`, Canva Danesh, Forms Diverse Match, Hostinger VPS |
| **Próximas agendas externas** | SEBRAE/Bruno 02/09 10h · Workshop Petrobras 09–11/09 · FIRJAN/Cláudia 14/09 (seg) · Neste/Luan Santos qui · LED edital até 02/09 |

---

## ✅ Decisões tomadas

1.  **Piloto pago é o modelo** — não fazer gratuito. Usar piloto para testar, melhorar e financiar desenvolvimento que será reaproveitado para outros clientes.
2.  **Escopo inicial do piloto:** 50 fornecedores + 50 compradores (base para cálculo). Tamara registrou também variações `10/20/100/1000` para simular projeções, mas 50/50 é a referência para a conversa de amanhã.
3.  **Valor hora:** trabalhar com faixa **R$180–250/h** (ref: Marcos já cobrava R$120/h em 2011). Marcos traz cálculo detalhado por visão da plataforma (aba 2) até amanhã.
4.  **Infraestrutura:**
    *   Dev = custo zero (Mac local + GitHub)
    *   Piloto = 1x VPS Hostinger KVM-8 mensal (suficiente). Produção 12/24 meses = R$119/mês por máquina no plano 24m (mensal é mais caro). Produção completa = 3 máquinas (2 app + 1 DB com storage ampliado). Visão futura = 4 máquinas (2 DB + 2 BI separados, alta disponibilidade).
    *   Custo de infra é **repassado por cliente** mas servidor é compartilhado — margem vem da reutilização.
    *   Escalabilidade não é linear — requer teste de carga (Marcos já suporta 100k usuários em outro produto).
5.  **Estratégia de preço MRR:** alvo **R$15k/mês por empresa**. Justificativa: empresa hoje paga ~R$75k somando Gupy (R$30k) + Qulture.Rocks (R$15k) + Pulse etc. Entregamos tudo + cruzamento com negócio por menos.
6.  **Go-to-market focado:** mirar **SEBRAE e FIRJAN como canais** (têm base de associados). Não competir direto com Gupy no início. Para SEBRAE, **apresentar só recorte Fornecedores + impacto no negócio**, não falar de Candidatos.
7.  **Proteção de IP:** apresentações para investidores/parceiros devem ser **genéricas (storytelling + números de ROI)**, **sem telas operacionais detalhadas**. Se precisar mostrar, `navegação rápida, sem tempo de print`. Implementar NDA obrigatório + bloqueio de gravação/print no Meet (`L460-468`).
8.  **Sociedade:** proposta Tamara em discussão — Divercidade 65% + Marcos 25% + 10% pool conselho/futuro. Marcos como `braço tecnológico` com envolvimento em toda frente tech. Salário mínimo/médio/máximo pós-tração ainda a definir (depende de 1/2/3 clientes).
9.  **Repositório:** criar Drive compartilhado `Plataforma Ruby` com versão resumida do Obsidian de PF + convenção de uso (Inbox → processado → destino definido + pastas por MVP). Git separado só para tech, sem misturar Obsidian pessoal.

---

## 📋 Ações — quem faz o quê até quando

- [ ] **#1 Calcular horas por visão (Aba 2) × R$180–250 e trazer mínimo/máximo por MVP Fornecedores** — @Marcos — **até 02/09 09h** (para ter na manga na reunião SEBRAE, sem mostrar breakdown de imediato)
- [ ] **#2 Desenho de arquitetura + custos** — As-Is/To-Be com Hostinger (1 máquina piloto vs 3 máquinas prod vs 4 máquinas com BI separado), indicar mensal vs 12/24m — @Marcos — **até 02/09 09h**
- [ ] **#3 Validar custos não-hora da planilha (linha segurança, cloud, storage, monitoramento, e-mail, reserva IA, matching)** — remover `dados` duplicado, ajustar pré-aporte — @Marcos + @Tamara — **02/09**
- [ ] **#4 Criar convenção de uso do Drive compartilhado** (regra Inbox→processado, o que é `sandbox`, onde entra arquivo novo) — @PF Rezende — **esta semana**
- [ ] **#5 Preparar slide "valor piloto" (valor fechado, sem breakdown)** + storytelling ROI (caso candidato/fornecedor + economia) — @Tamara — **02/09 09h**
- [ ] **#6 Preparar NDA padrão + configurar bloqueio de gravação/print no Meet** — @PF Rezende — **antes da Neste (qui)**
- [ ] **#7 Separar telas por bloco** (Fornecedores vs Candidatos) e definir linha visual a seguir — @Tamara → @Marcos — **esta semana**
- [ ] **#8 Forms Diverse Match:** tirar obrigatoriedade dos campos para teste, publicar link piloto e validar fluxo inscrição → e-mail → painel — @Marcos — **02/09** (piloto público 15–20/09)
- [ ] **#9 Levantar proposta de sociedade + faixa salarial (mín/méd/máx) com 1/2/3 clientes** — @Tamara + @Marcos + @PF — **após SEBRAE**
- [ ] **#10 Subir candidatura LED** (falta só apresentação) — @Tamara — **até 02/09** (prazo edital)

---

## 🗣️ Discussão por tema (resumo editado)

### 1. Pricing e modelo financeiro
Tamara: precisa de valor mínimo para negociar sem perder oportunidade, e valor ideal mensal recorrente. Quer que horas sejam estornáveis quando vier aporte. Diferença entre `custo econômico do MVP (com gente se pagando)` vs `pré-aporte (só ferramentas)` veio do ChatGPT e precisa ser validada linha a linha. Ideia de financiar build inicial com múltiplos pagantes: Pijama R$200k + SEBRAE R$200k + BeBlend R$100k → junta e roda plataforma; depois cobra MRR das empresas usuárias. Contrapartida para SEBRAE/FIRJAN pode ser entrega de 30 clientes.

### 2. Infraestrutura e escalabilidade
Marcos: Hostinger KVM-8 atende. 24m = R$119/mês, 12m e mensal mais caro. Piloto usa 1 máquina grande; produção usa 3 (2 app + 1 DB com volume extra). BI não pode ficar junto com DB — precisa HA: 2 DB + 2 BI. Fez teste de carga em outro produto (motoboy/Uber) para 100k usuários. Explicou que custo não escala linearmente por usuário. Vai desenhar e precificar.

### 3. Produto e escopo
Planilha TMVP tem abas por MVP. Foco imediato: **Fornecedores** (SEBRAE amanhã) e **Candidatos** (Petrobras/FIRJAN). Onboarding futuro: `O que você é? → Empresa/Pessoa → RH/Compras/etc → visão filtrada`. Evento de outubro já pode coletar dados para match manual. Forms de inscrição (Diverse Match) quase pronto para 15–20/09, precisa capturar perguntas que gerem indicadores.

### 4. Comercial e concorrência
SEBRAE hoje não tem plataforma de fornecedores (só RS que não funciona e RJ que cobra R$600). Petronect (SAP) é ruim e cobra R$107/mês — oportunidade. Concorrentes: Gupy (R$30k), Qulture.Rocks (R$15k), Future Rock, Pulse. Risco Gupy copiar em 2 meses vs 10 anos da equipe — motivo para `construir em silêncio`, fazer MVPs sólidos antes de divulgar. FIRJAN/SEBRAE não são concorrentes diretos, são canais.

### 5. Proteção de IP e apresentação
Consenso: telas atuais estão `prontas para copiar` (sequência completa, indicadores, mapa que "quebra LinkedIn"). Solução: apresentação genérica + números de ROI para investidor; protótipo só após NDA/quase fechado e em navegação rápida. Tamara vai filtrar o que mostra amanhã para Bruno (percebido como confiável/reputacional). PF levanta barreiras técnicas no Meet.

### 6. Sociedade, governança e operação
Marcos topa ser sócio braço tech. Tamara propõe joint com marca The HUB por cima. Necessário contrato com NDA entre sócios, definição de tempo dedicado, plano de transição do operacional para estagiários/juniores e depois seniors. PF puxa organização e convenções. Todos cientes de que início será `no sacrifício` até MRR estabilizar.

### 7. Ferramentas e IA
Discussão sobre custos de IA: Anthropic Business vs OpenAI, limite de 5h, Token Tune, Qwen/Qwen3 chinês gratuito local no Mac (Qwen 3B) para trivialidades, roteamento manual de APIs vs router automático (Airbus/Hermes). Ideia de `quiosque` de seleção de API na plataforma futura.

---

## 📅 Próximos compromissos citados

| Data | Evento | Dono |
|---|---|---|
| 02/09 10h | SEBRAE — Bruno (evento + piloto fornecedores) | Tamara + Marcos |
| 02/09 | Prazo LED (apresentação) | Tamara |
| 05/09 (qui) | Neste — Luan Santos (Global Investment Manager, ex-Ória/Hora Capital) — 1h de pitch | Tamara |
| 09–11/09 | Workshop Petrobras (definição plano anual com Carla) | Tamara |
| 14/09 (seg) | FIRJAN — Cláudia (online) | Tamara |
| 15–20/09 | Lançamento captura piloto (forms Diverse Match) | Marcos |
| Fim de semana | Final Mangueira/Portela + Rock in Rio | - |

---

## 🔗 Artefatos e referências

- Drive: `Plataforma Ruby > MVP` (pastas por MVP + previsão básica)
- Planilha: `TMVP.xlsx` — Aba 2 (visões/páginas), Aba 4 (horas × valor/hora), Aba 6 (caixa), Resumo Executivo
- Canva: Danesh — pedir acesso (Request Access enviado)
- Forms: Diverse Match — inscrição candidata/compradora/fornecedora
- Infra: Hostinger VPS KVM-8
- Concorrentes citados: Gupy, Qulture.Rocks, Future Rock, Pulse, Petronect (SAP)
- Pessoas: Ana (contato antigo, confiável), Luciane (14 comitês, precisa de sistema), Nath (verba fim de ano), Patrícia (pitch 5min), Luan Santos/Neste

> [!warning] Riscos e pontos de atenção
> - **Vazamento de IP:** não compartilhar telas detalhadas nem gravações sem NDA. Revisar deck da Pijama e outros já enviados.
> - **Conflito de interesse Petrobras:** Tamara avalia concurso — se entrar, não pode vender para Petrobras; plataforma de RH não conflita, mas consultoria em energia sim. Manter separação.
> - **Dependência de poucos canais:** SEBRAE/FIRJAN — validar contrapartida (nº de empresas) por escrito.
> - **Custo infra subestimado:** validar com desenho + teste de carga antes de prometer valor fechado.

---

## 📎 Transcrição — versões

> [!quote]- Transcrição LIMPA e diarizada (editada para leitura — clique para expandir)
> **Tamara (L18):** Queria sentar com você e com o PF para delimitar preços/custo do nosso trabalho por MVP, com valor de horas até para estorno quando vier aporte, e fechar o mensal ideal por fase. Queria também que o Pepe/Marcos trocassem sobre o guia.
>
> **Marcos (L20):** Estava nos forms, nem vi o resto. Mandei sugestões para melhorar o match entre perfis.
>
> **Tamara (L50):** Montei no Drive versão resumida do Obsidian — cenários, guias — com pastinhas por MVP. Falta criar convenção: arquivo novo entra no inbox e qual regra para ir ao destino.
>
> **Marcos (L114):** Dev custo zero (Mac + storage, só compartilhar via GitHub). Piloto precisa ambiente pequeno — vou levantar.
>
> **Marcos (L130):** Hostinger KVM-8 atende. 24m sai R$119/mês. Precisaria 3 máquinas (1 DB + 2 app). Piloto dá para usar 1 grande.
>
> **Tamara (L172):** Precisamos horas × valor/hora para ter mínimo/máximo e não perder oportunidade.
>
> **Marcos (L782-786):** Faixa R$180–250/h cobre. Em 2011 já era R$120/h.
>
> **Tamara (L232):** Dessas visões (Aba 2), quantas horas por tela e quanto por hora para ter valor real? Mesmo que seja "consigo por X mas vale Y, paga parte agora e restante após aporte".
>
> **PF (L280):** Precisamos de variável X a Y para projeção com investidor.
>
> **Marcos (L292):** Custo não é linear; faço teste de carga — produto atual suporta 100k usuários.
>
> **Marcos (L296):** BI tem que ser separado do DB — 2 DB + 2 BI em HA (experiência Caixa).
>
> **Marcos (L318-343):** Uso Anthropic Business + OpenAI, Token Tune, Qwen chinês gratuito local para trivialidades.
>
> **Tamara (L388):** Precisamos propor % sociedade e faixa salarial mín/méd/máx com 1/2/3 clientes.
>
> **Tamara/Marcos (L402-460):** Contrato precisa NDA entre sócios e com cliente. Apresentações atuais expõem demais — mostrar genérico + números, protótipo só com NDA e navegação rápida. Configurar bloqueio no Meet.
>
> **Tamara (L594-613):** Modelo: SEBRAE/FIRJAN financiam build (ex: 200k cada) + MRR R$15k/empresa (vs 30k Gupy + 15k Qulture). ROI para empresa é pulo do gato — quanto economiza em decisões de pessoas/fornecedores.
>
> *(Transcrição limpa resumida — ver bruto abaixo para verbatim completo)*

> [!note]- Transcrição BRUTA original (1552 linhas — verbatim STT, com ruído — clique para expandir)
> Arquivo original preservado abaixo sem edição para auditoria. Correções STT: Rostinger→Hostinger, Quture/Qulture→Qulture.Rocks, Gupt→Gupy, Firjan→FIRJAN, Sebrae→SEBRAE, Petronect mantido, Qwen→Qwen.
>
> ```
> Opa! Tá ouvindo?
> Boa noite.
> Boa noite. Pequeno caos aqui, entregando a criança, começando a chover.
> Aqui vai cair o mundo, cara. Tá embaçado. Embaçado.
> Então, Marcos, eu queria sentar com você e com o PF hoje para a gente delimitar aqueles preços, custo mesmo, do nosso trabalho para cada MVP...
> [... 1552 linhas originais preservadas no histórico git — ver versão anterior do arquivo para verbatim completo ...]
> ![[audio.mp3]]
> ```

> [!tip] Como manter este padrão
> Use `04-project-management/atas-reuniao/_template-ata.md` com este esqueleto. Próxima reunião: grave com diarização, gere STT com timestamps e rode prompt de limpeza antes de colar aqui. Marque `status: estruturada` e crie tasks ` - [ ] ` que aparecem no Dataview/Kanban.



# full transcript

Opa! Tá ouvindo?

Boa noite.

Boa noite. Pequeno caos aqui, entregando a criança, começando a chover.

Aqui vai cair o mundo, cara. Tá embaçado. Embaçado.

Então, Marcos, eu queria sentar com você e com o PF hoje para a gente delimitar aqueles preços, custo mesmo, do nosso trabalho para cada MVP. Não sei se você conseguiu entrar lá para olhar. Mas eu acho que é legal a gente delimitar ali com o valor de horas Até para a gente fazer esse estorno quando a gente conseguir o valor E também fechar o valor mensal ali que seria ideal em todas as fases para a gente E eu queria também que o Pepe contasse pouquinho do que ele fez, porque ele também pensou em fazer esse Gui de Rubens e nem sei se ele já montou, mas ele tinha dito pra mim que ia fazer algo nesse sentido que você disse que ia fazer também. Aí eu queria que vocês trocassem, porque essa parte eu não entendo de nada.

Eu tava trabalhando lá nos forms, né? Eu acabei nem vendo o resto do material. E... Inclusive, eu até te mandei, né? Teve algumas perguntas que dá para a gente melhorar aquilo para realmente dar match entre os perfis lá. Enfim.

Não, perfeito. É, porque a gente não fez para dar match, mas dá para a gente adaptar.

Não, mas era uma ideia. Era uma ideia isso lá.

Não, é melhor.

Não, é até melhor. E aí, eu até te falei daquela plataforma lá do NOA, que lá também tem algumas informações interessantes, assim, de como perguntar e tal. Talvez seja uma boa estratégia a gente ir puxar a roupa pra tocar essa parte.

Eu entrei... Cara, mas tava travando, cara. Tá bem... Eu acho que ele não tá trabalhando muito nela, né? Tá bem lento ali, né?

É, mas ele deve ter isso guardado em algum lugar, né? Vou falar com ele.

Não, beleza.

E aí fica menos trabalho pra gente, menos coisa pra duas pessoas só.

Não, mas ele tá enrolado, hein? Ele lembra o que ele falou.

O amor você consegue falar pouquinho também da do que você criou se você já tem porque o marcos tinha falado da gente ter que o que é github com as.

Informações repositóriozinho eu tenho meu obsidian que eu salvo lá só Mas o meu tem muita coisa misturada, já tá me dando o maior trabalho de usar ele dentro do Git. De colocar pra você, então, vai explodir.

Dá pra criar Git só pra.

Você fazendo assim, e eu posso ter acesso pra abrir, mas não for tocar.

Não, isso aí, a gente tem que ter espaço pra compartilhar essas informações.

Eu tô tentando montar isso no Google Drive, e aí eu posso botar o meu obsidian pelo google drive lá para ficar disponível mas eu fiz uma versão resumida só com os arquivos importantes que a gente já criou então teste de cenário documento de guia tudo basicão assim né tudo precisa ser refinado no detalhe mas pelo menos já tem chãozinho para gente pisar aí eu separei já no drive. Só o que falta fazer, que é o que eu vou fazer aqui agora, é criar meio que uma convenção de uso. Arquivo novo entra aqui, qual regra de processamento para sair desse primeiro inbox aqui para ir para o lugar definido.

E aí dá para ser esse diretório compartilhado da gente que vai ter os arquivos mais importantes, vai ter uma regra de como a gente usa para poder saber o que foi processado já, o que é, raio de conexão,.

Perfeito, como se fosse sandbox que a gente fala, né?

É, é mais ou menos isso que eu tô montando.

Muito bom.

Eu já coloquei lá também as pastinhas de cada MVP, aí eu fiz aquela previsãozinha lá, bem básica, com o que a gente tinha.

No Google Drive que você mandou, né?

Isso, entra aí. Aí tem uma pasta que se chama Plataforma Ruby, aí você entra em MVP.

Deixa eu olhar aqui. Inscrições, Canva... o último link.

Isso, eu te mandei 300 mil coisas, né?

Não, mas eu separei, eu coloquei Hubd vs Match, aí eu puse inscrição raça, inscrição... Fui copiando e colando, aí tinha Canva link aqui, mas eu acabei nem abrindo.

O Canva é aquele que eu estava te mostrando hoje. É o do Danesh.

Request access, está falando aqui para eu requisitar acesso.

Pediu?

Vai ser mostrado para você aí. Request. Vou pôr Request.

Eu tinha liberado. Deixa eu botar de novo aqui.

Agora foi aí para você, e-mail.

Nossa, agora começou a chover pra caceta.

Amanhã é Sebrae?

Isso.

É o Bruno, né?

É. Pronto, compartilha, abre aí.

Como é que tá a percepção aí do Bruno? Como é que ele tá?

Então, ele quer fazer o evento lá, né? Só que ainda não apresentei o que dá para a plataforma.

Qual você quer que eu abro? Qual você quer que eu abro?

O TMVP.

Esse que está mostrando aqui?

Isso.

Por.

Por cada. Abra o de candidatos. Aí abre esse aí, o Excel. Aí eu fui abrindo assim, o que a gente precisa fazer, quem vai fazer, qual é a entrada, tecnologia, monte de informação. Mas a parte mais importante hoje que eu quero que você veja é a parte de caixa, né? Eu acho que é o 6, isso não é o 6.

Isso.

Aí aqui foi o Chat APT que criou esses valores, tá? Aí a gente tem que olhar linha por linha. Para ver quanto que a gente vai cobrar como custo. É o mínimo para a gente trabalhar em cada deles, pensando no tempo de projeto. Aí a gente vai entender. Aí eu botei seis meses.

Entendi. O ambiente desenvolvimento, o custo dele é zero praticamente, porque eu... Eu desenvolvo no Mac, eu tenho storage e aí os dados estão aqui, a única coisa que tem que fazer é só compartilhar via Github, para ter lá o diretório do Git com a parte dev. Piloto, aí a gente tem que ter ambiente pequeno, pelo menos, aí já gera custo. Eu vou levantar isso, tá?

Mas aí é muito baseado no que eles vão trazer também, porque esse é o ponto aqui que eu tinha falado. A gente pode fazer negócio para 1.000 empresas ou para 100 candidatos ou para 1.000. Aí eles têm que delimitar também o que eles querem fazer na primeira rodada e a gente ter pelo menos ali a projeção para 10, para 20, para eles saberem quanto que eles têm para aportar.

Eu acredito que eles vão escalonar, obviamente. Eles devem escalonar a divulgação.

A minha ideia aqui com eles é fazer piloto, aí a gente testa, a gente melhora, até pra gente não fazer uma coisa que não vai funcionar muito bem ainda e ter muita gente usando.

Piloto pago, né?

É isso, por isso que eu quero esse valor. A gente precisa desse valor mínimo para poder negociar com eles, entendeu?

Sim.

O que é bom para a gente, de uma forma, porque a gente vai conseguir pilotar, desenhar, desenvolver a plataforma, não vai ser gratuito, mas ao mesmo tempo a gente vai estar desenvolvendo algo que a gente vai poder fomentar nos outros também, nas outras empresas.

Vou até te mostrar aqui. Rostinger, que eu gosto da Rostinger porque ela é muito estável. Mais ou menos quanto gastaria? Aqui, o VPS. Por exemplo, se eu montar ambiente, escolhe esse plano aqui, KVM-8, por exemplo. Isso aqui atende a gente. Teria que ter, dependendo da quantidade de usuários que fossem, que a gente fosse trabalhar, 24 meses, 119 por mês, olha quanto sairia, tá vendo? A gente precisaria de umas três máquinas dessa, três máquinas dessa aqui, três vezes três esse valor aqui.

Mas três por quê?

Porque tem uma máquina por banco de dados, e duas máquinas para servidores de aplicação. A aplicação, ela vai rodar num servidor.

Mas aí a gente vai precisar de seis meses, né? Em vez de 24. A gente vai precisar para seis meses.

Não, isso aqui eu tô pensando já uma produção rodando, entendeu?

tá.

A gente pode fazer algo menor, mês, tá vendo? De mês, ou a gente pode fazer algo para 12 meses. Para mês. Aí a gente todo mês vai ter que ir alimentando ali, entendeu? Pagando isso aí. Aí sairia o servidor, já servidor grande. Sairia isso aqui vezes três, porque aí é servidor... Esse aqui no caso, se a gente vai fazer piloto, dá para ter só. Entendeu? Já pega esse que é grande, só desse dá. Porque é piloto. Né?

Vamos fazer o seguinte, vamos olhar então, o que é da de fornecedores que é do Sebrae de amanhã, que a gente se baseia nesse pra poder fazer o restante, que a gente já tem número, sabe? Se ele se ele perguntar pra gente amanhã a gente já sabe mais ou menos quanto que é. Eu não botei o que a gente.

Pode falar pro Sebrae que é isso aqui ó, é como se fosse de doze meses, entendeu? Tá, entendeu?

Uhum.

Mas que a gente mas se ele vai pagar a gente pode é uma máquina que a gente vai usar não só para o Sebrae a gente vai usar para os outros também é assim que a gente faz o custo entendeu por exemplo eu tenho servidor mas eu posso usar para vários clientes que eu tiver ali tem sim entendeu mas para o cliente eu vou mostrar aquele custo ali aí todos vão me pagar aquele custo, só que com o pagamento de eu custei os outros. Entendeu? O que eu recebo dos outros é o meu lucro, digamos, ali.

Isso aí é para 12 meses, né?

É. Isso aí aqui ele fala, por mês, olha quanto é. Está vendo? Agora, se eu fizer mensal, aí você vê como fica maior o valor. Entendeu?

O caso seguinte agora então marcos abre esse da de fornecedores para você dar.

Uma olhada comigo anelha é e aqui.

Embaixo não não é para cada.

MVP que eu a outro tá é.

Porque sei que tem monte de coisa que é para até para você ajudar a enxergar quais são as estruturas de página pode que MVP estrutura Fornecedores, é o penúltimo lá embaixo. esse é o deles. Isso. Aí são as etapas da gente cadastrar, mapear, tudo mais. Isso, isso é a parte financeira. Aí, eu acho que...

O que você quer? Quer comentar?

Vê esse 4 aqui pra mim. Esse é o 4.

Vou aumentar aqui. Você quer esse?

O zero quatro abinha isso aqui está por hora né a gente tem que ver o número de horas e qual o valor por hora que a gente vai botar aí. Para daqui puxar para lá e a gente vê o quanto que seria o ideal para a gente ser pago e aí tem que botar tipo o mínimo e o máximo. Porque aí é tipo assim, se não rodar... Se eles não tiverem esse valor todo, quanto que a gente consegue fazer isso? Pra não perder oportunidade, entendeu?

Isso aqui é o que você vai apresentar pra eles?

Eu não vou mostrar isso aqui pra eles, não. Eu só vou mostrar o valor final. Mas se eles quiserem e tudo mais, aí a gente conversa.

Talvez eles peçam pra você, né?

É. Mas aí depois que eles deram semi-ok, pelo menos.

Mas ele tem buzz pra isso? Ele comentou que tinha.

É.

O que ele falou?

Eu pesquisei tudo que eu podia aqui sobre o Sebrae e realmente não tem nenhuma plataforma de fornecedor. Achei o auge do absurdo.

Que absurdo.

Né?

Pra nós.

Na verdade até tem só que é no Rio Grande do Sul, não funciona, tem uma empresa grande pedindo coisa lá, que não tem nada a ver com fornecedor pequeno, coisas de manutenção assim. Não funciona, né? Aí tem aqui no Rio, tem que pagar seiscentos reais pra participar do programa. Só tem esses dois, no restante do Sebrae não tem.

Puta merda, sério?

É, eu quero uma oportunidade mesmo, entendeu?

Tô olhando aqui, nem sabia se podia olhar, mas tá bom.

Pode olhar, pode olhar.

Isso aí.

Tudo foi o ChatGPT que fez, tá? Eu fui dando exclamando para ele foi mandando aí eu acho que é legal a gente jogar junto aí o que eu fiz aqui ó custo econômico do mvp considerando toda a parte de tecnologia ferramenta mas a gente se pagando e pré-aporte é assim o que custa de ferramenta sem a gente se pagar aí essa diferença aí do caraca porra Aí é a gente analisar o quanto que seria o mínimo aí pra gente conseguir fazer esse peôdo com eles e ver o quanto que a gente consegue cobrar, porque aí é lucro, né? Quanto a gente conseguir fazer recebendo é melhor.

Caixa necessária pra aporte, 30 pão.

Mas aí não sei, tá? Não conheço nada disso. É segurança pontual, cloud, storage, ferramentas de monitoramento, e-mail, notificação, reserviar, matching.

É, isso aqui tá bem alto, né? Por exemplo.

É, mas no pré-aporte ele nem botou.

É, porque aqui quando você... Você tem que colocar infraestrutura... Infraestrutura. Aí quebra em hospedagem, banco de dados, storage, monitoramento. E-mail. Beleza. Reserva AI, importante. Isso, ok. Eu acho que eu só tiro esse... Dados aqui, não precisa. Tá bem alto, senhor.

Mas aí o ponto é a gente. Eu queria muito que você passasse isso pra mim, assim. Enquanto que... Eu quero que você olhe aqui. Volta lá, mais pra frente, por favor.

Qual? O que você quer?

Acho que é o primeiro ou o segundo? Que mostra, tipo, as páginas.

O quê?

É, eu acho que é, desculpa, eu preciso, né? Esse aqui, ó, o dois.

Dois?

Não. É, são as páginas, né, que é as visões ali dessa plataforma. Aí vê se ele abriu mais aqui, bota no 3 para dar uma olhadinha, por favor. Não, 4, 5, bota no 6, por favor, para eu ver. Não lembro mais. Passa mais pouquinho, vê se ele fez mais alguma coisa além disso. Resumo executivo, último agora. tá. Ele fez o cálculo. É, então são aquelas páginas lá. Volta tudo lá pra mim. E a gente calcula pra essas páginas no 2, por favor. Dessas visões da plataforma, quantas horas você levaria para cada uma delas, quanto você cobraria por hora, para a gente ter esse valor real ali, entendeu?

Mesmo que você fale assim para mim, Tamara, eu consigo fazer para você agora por X reais, mas o valor disso é isso. Aí a gente consegue pagar você uma parte agora, depois você recebeu o aporte e a gente pagou o restante. A gente pode tentar fazer algo nesse sentido, entendeu? Mas eu não quero também, tipo, vou te pagar menos agora e depois esquecer que você fez essa parte. Bem dividido entre todo mundo, entendeu?

É, tá bom. Isso tudo vai depender da conversa de amanhã, né? A gente só vai conseguir mensurar o quão do tempo, né? Do que eles precisam, quantos caras vão ser. Até para escolher o ambiente,.

Se bem.

Que esse servidor aqui, por exemplo, se pegar esse cara, A gente sempre pode considerar, a gente pode pegar esse cara, mensal, mas a gente escopa esse cara aqui, para os caras. Entendeu? Como infraestrutura. A gente sempre vai ter uma sobra.

É, eu acho que é bom, essa parte aí já que não é tão cara assim, acho que vale a gente ter mais.

Não, você vê, não é caro, porque são 12 meses, 24 meses, sai 119, até melhor do que o... De.

Mês é bom que a gente usa para os outros que já entendeu a.

Expandir o beleza a gente tem como porque a gente tem três máquinas para duas máquinas de aplicação a gente põe esse cara aqui aí a máquina que é para o banco de dados Aí eu faço o que? Eu priorizo, eu diminuo pouco a capacidade dela, mas aí eu aumento a parte de armazenamento, que é banco, né? Então, aumento o volume. E aí acaba equiparando o valor. É, eu vou tentar fazer desenho e colocar os valores também disso.

Esse negócio de valor de hora vai ser importante pra gente entender também, porque agora você vai ser sócio da empresa, ao mesmo tempo a pessoa que tá operando, a mesma coisa a gente. E aí a gente precisa ser pago por esse trabalho antes da gente conseguir... Claro.

Olha quanta coisa você já fez. Olha quantas horas você já deixou de dormir aí, fazendo as coisas.

O Paulo Fábio também. Tá sofrendo aqui por mim. Aí eu acho que é legal a gente parametrizar isso, a gente conversar sobre isso, a gente criar esse contrato também para poder ter tudo delimitado, bonitinho. O quanto que você também está disponível para ser nosso sócio aqui, se você quer estar confortável dessa forma, se você gostaria de ir para outro caminho, o que é melhor para você, o que é mais confortável. Eu te vejo como uma pessoa sócia da gente para a gente fazer isso junto acontecer.

Lógico. Braço tecnológico.

Tu viu o que eu botei lá, né?

Braço tecnológico. Tudo que pintar envolvendo tecnologia me envolve, óbvio. Não tem crise, não. Sem problema. Até eu sugeri isso no começo, pra você ler. Quero ser o braço tecnológico, porque uma das coisas que eu percebi lá no Júlio das Pretas é justamente isso. Com você eu já tinha conversado, mas as outras minas, por exemplo, Meu, elas precisam de tecnologia pra alavancar, mas...

É.

Pra elas, é muito caro isso.

Mas eu tô falando sério, tá, Marcos? É coisa de criar uma marca, a gente botar... Criar uma empresa, botar tudo certinho. Essa parte mesmo, assim, eu tô fazendo essa proposta.

Não é assim, mas é isso. Eu tenho a minha empresa, você tem a sua. A gente faz tipo uma joint, aí cria uma marca. O The Hub é uma marca ali, ó.

É isso.

É isso, produto, uma empresa que aí entra aqui. vamos pagar aqui em cima e distribui. Aí o lucro para as partes embaixo. É isso aí, cara. É isso.

O melhor caminho. O que você acha, Paulo Fábio? Paulo Fábio está quieto.

Ele está com o bebê?

Não, está não. Está com a minha mãe.

Eu acho que é o caminho mesmo. Eu acho que... Estou tentando fazer isso que eu falei, que estou organizando aqui, uma pastinha separada das coisas paralelas que a gente tem que fazer correndo, tipo essas apresentações que o povo está querendo fazer para a semana que vem, a mesma semana. Mas acho que, independente da velocidade que a gente faz, é ou correndo ou não, a gente precisa muito ter esses valores, pelo menos, nem que seja uma variável de X a Y, dentro disso aqui mais ou menos, para a gente poder já, quando tiver pacto com o investidor, por exemplo, a gente ter uma base para poder fazer projeção para frente, para não ficar projeção...

O valor hora da gente, pelo menos.

Obrigado.

Tudo isso tem que ser muito bem delimitado para não ter problema para ninguém.

Não, claro. Eu vou pensar nisso hoje, fica tranquilo. Vou pensar nisso hoje.

Eu falei com a Tamara dessas partes de preços de tecnologia e tal. Eu falei que nem tudo dessas 4 tipos de hospedagem que você está vendo na rosca, nem tudo é linear, às vezes é exponencial. O que processa 10 dados não é uma matemática perfeita de 10 para 100, por exemplo. O processamento de 100 pessoas na plataforma não vai ser exatamente o preço de 1, mais 1... Porque vai ter mais consumo, vai ter às vezes... Vai, vai...

Mas a forma que eu aloco os recursos... A forma que eu aloco o recurso, eu já penso nisso. E eu faço o teste de carga, né? Por exemplo, eu tô com produto que a gente deve lançar esse ano, que é para o Motoboy, para a Uber e tal, e aí... Eu desenvolvi, eu fiz teste de carga agora, por exemplo, com o ambiente que eu tenho, eu suporto até 100 mil usuários, entendeu? Eu consigo, eu faço esse teste de carga antes, isso aí já é uma bagagem minha, né? De ano de trabalho.

A ideia é que mesmo que a gente não vá usar nada grande agora, a gente já vai ter de alguma forma na ponta da língua se algum investidor perguntar, né? Porque se realmente alguém quiser botar grana no negócio, vai fazer, mas pergunta sendo escrutínio para saber detalhes.

Sim, por exemplo, nosso produto ele é muito focado em banco de dados, né cara? Porque tudo vai estar acontecendo ali na mágica, literalmente, né? As informações cruzando, BI, enfim. Então assim, eu tenho que pensar nessa questão Eu esqueci do BI. O BI não pode estar junto com o banco. O BI não pode estar junto. Ele tem que estar separado. Eu falei duas máquinas para banco e duas... Tem que ser duas para banco e duas para BI. Por quê? Tudo em alta disponibilidade. Sem mexer com dinheiro assim, cara. Trabalho com banco, né? A caixa econômica. Então, tudo tem que ter alta disponibilidade, não tem como. Não pode ter...

Zero altejo que a gente fala pouco ao mínimo possível de problemas então tem que pensar na infraestrutura vou fazer desenho então que a parte da minha parte técnica né e a gente tem que ter custo estimado disso Lógico, começou agora, uma máquina dá. A gente vai... escalou, pô. Se a gente escalar, cebrar isso, cebrar, aumentar de 10 empresas para 100, a gente tem que aumentar a nossa infra, entendeu? E tem que ser assim, tem que ser exponencial mesmo.

Eu falei da quadramar também nessa parte de... Eu não sei o plano que você usa. Você usa o Antropic, né?

Eu uso o Anthropic, uso o Voucher... Perdão, o OpenAI, né?

Aquele limite de 5 horas de uso, não é?

É, o meu eu uso o Business. Eu uso o Business. Não, não. O meu é o Business, aqui, ó. O meu é massa.

Na hora que você falou comigo, eu falei, porra, pior que esses planos desgraçados tudo, se você usar demais, ele te bloqueia por 5 horas.

É, ele bloqueia. O meu, aqui, ó, o meu já é esse aqui, ó. Mas o meu é o individual, eu posso subir mais, entendeu? Tá vendo aí na minha tela?

Sim.

Então, eu posso subir pra equipe ou pra enterprise, né? O meu tá individual, esse é o valor que eu pago.

Mas eu... Esse aí não tem o rate baixo.

Não. E outra, eu desenvolvi produtinho, chama Token Tune, que ele vai mensurando quanto eu consumo de tokens, né?

Uhum.

E aí, se eu estou consumindo muito, o que eu faço? Eu mudo para uma Iazinha chinesa, eu faço as coisas na Iazinha chinesa que é de graça. Aí, quando os meus créditos são restabelecidos, eu volto para outra.

É uma jogadinha. É seguro fazer routerzinho, API diferente para isso?

Não chega a ser router não, mano, eu faço manual mesmo, não faço routeramento não.

Não, eu tô falando pra plataforma funcionar, assim, você fazer esse esquema que você falou, atribuição de nível de consumo de token pra APIs diferentes.

Tá, você tá falando já usando no hub? É isso que você quer dizer?

É, pra quando eu vou fazer esses.

Cápsulas, pra desenvolver as coisas, entendi. Não, é uma opção boa, dá pra fazer. Você seleciona a API que você quer usar, você consegue ir chaveando, né?

Eu fiz isso com o Hermes.

Ele valida a quantidade de créditos que você usou ali na Tropic, e aí você consegue, por exemplo, colocar a API key lá pra ele usar o outro. Você coloca outras, né? Mas querendo ou não, dá uma mensagenzinha, né? Crédito esgotado, até ele jogar pra outra, ele dá uma mensagem. Dá uma mensagenzinha.

Os que eu uso pelo Airbus, que eu não sei exatamente como que é, por trás do rolê, eu boto uma sequência de chaves diferentes e ele fica rotativo o tempo todo. Com uma atividade simples assim. E aí não fica apitando, ele vai mudando sozinho.

Mas o esquema aqui, agora eu uso o Kuei. Kuei é chinês.

Eu amo o Kuei!

Gratuito, sensacional. E eu tenho o servidor dele, eu tenho no meu Mac aqui, eu instalei o server. E aí eu uso ele, cara.

Se essa plataforma der dinheiro pra gente, a primeira coisa que eu vou fazer.

É montar server. É, pô. É a melhor coisa, mano. Você quer fazer negocinho trivialzinho ali, ó? Coloca o Quen, já era.

Pô, eu já consegui fazer umas coisas não tão triviais como o Quen de 3B, assim.

O 3.8?

É, acho que eu usei o 1.6, 1.7, não é?

O 3.8 é o Plus lá que eles falam, que é o modelo novo deles, né?

não, não, não. Não é o modelo, não. Estou falando do... Eu usava, sei lá, acho que o 3 e o 3.5, que eu não usava antes.

Olha o meu F.

Os minizinhos... Esse daí é o quê?

O meu F.

Eu estou vendo a rostinha ainda.

Meu app, vou mostrar para vocês. Aqui, ele captura a corrida do iFood. Está vendo a tela?

tá, agora estou vendo.

Aí eu clico para aceitar, aí ele volta para o iFood. Aí eu venho aqui e aceito a corrida no iFood. Aceitei. Só que aí o pulo do gato do meu app é justamente que Agora o cara sabe quanto ele ganha, porque normalmente o cara não sabe quanto ele ganha. Por exemplo, aqui ele sabe que ele tá ganhando valor, a corrida ela é R$10,73, o valor, o líquido pra ele é R$9, entendeu? O iFood não fala isso pra ele.

Não?

Não.

Ele só dá o saldo depois de esses tempos.

Ele só fala a distância e o valor bruto ali, ó.

Nossa.

Os caras são filha da puta, mano. O Uber também é a mesma coisa. Aí a gente quer hackear os caras, entendeu? Hackear o modo de dizer, mostrar pra todo mundo quanto é que ganha. Falar assim, só vocês querem ganhar dinheiro, então não.

Marcos, a gente não falou ainda sobre proporções, sobre como que você vai querer entrar. Eu quero muito que você me passe o que você pensa, tanto dessa parte das horas, mas também de como seria essa estrutura de sociedade. Eu quero também que a gente consiga propor quanto que a gente gostaria, no mínimo, médio e máximo de salário após tudo rodando, para a gente ver quando que a gente consegue pagar, tipo, com cliente, com dois clientes, três clientes, quanto que a gente vai se propor, né, de salário ali, com esse fluxo.

Tempo também, né?

Oi, amor?

Tempo dedicado, né?

Tempo dedicando. A parte que a gente fica no operacional, depois vai ter que ir jogando para fora da gente, né?

Isso.

No início, a gente vai se foder pouco, né? Isso é normal, velho. Porque, assim, não tem grana pra pagar ninguém, tipo, só pagando as contas nossas, guardando nossa grana ali. Aí, vai à medida que escalha, aí pega uma pessoa, estagiário, aí pega outro, aí pra fazer coisa braçal e pra dar pouco pra pessoa. Até pra ela aprender também. Eu penso dessa forma, não sei. E aí depois, ao medir que vai escalando, a parte operacional, precisa de alguém que já seja sapo. Aí tem que ver quanto vai pagar para a pessoa. Tem que pensar em conjunto depois isso mesmo.

Outra coisa que tem que ter nesse contrato é a parte de NDA. Porque a gente vai ter que fazer uma compilada entre nós aqui de que a gente não vai replicar o que a gente está fazendo entre nós com outras pessoas. Até porque tem toda essa coisa com a Gupt, né? Então, eu acho perigoso a gente até comentar com certas pessoas, porque muita gente é próxima deles lá.

Então, eu não falo com ninguém, só falo com você.

Até o cliente que a gente vai apresentar tem que ter esse cuidado, né?

É, eu nem... Você vê, você me chama, eu fico quietinho ali, eu fico só ouvindo esse cara falando, você eu fico quieto, mano, não falo nada. Isso aí, pra mim, isso aí é tranquilo, vixi. Às vezes eu nem falo, por exemplo, eu sou amigo da Ana, eu não falo coisas, nossa, assim, pra ela. Aí você fala, falei com a Ana, aí eu, beleza, se ela for com a Ana, eu posso ficar com ela.

A Ana, ela já conhece a minha ideia já há muito tempo, por isso que ela me apresentou pra você, então pra ela tá tudo bem.

Não, ela é amiga de anos, desde os 16 anos. Estou com 51, ela está com 50.

A Ana é muito confiável.

Porra, total.

Mas o problema é só o como e para quem que a gente vai falar.

A gente só tem que se blindar justamente para esses possíveis investidores. Esses caras vêm ter que ficar espertos.

É isso que eu estou falando. É isso que eu estava falando para o Fábio. Eu vou mostrar, mas eu não vou mostrar como.

Então, por exemplo, as suas apresentações são ótimas. Beleza. Mas eu acho que tem telas que dão muitos detalhes, por exemplo. Entendeu? Muito detalhe. É operacional ali. Se o cara está gravando aquilo, ele consegue reproduzir.

É.

É mais fácil você fazer uma apresentação meio genérica para o cara falando como é o Hub e tal, enfim. Fala em números, que os caras gostam de números. quanto eu vou ganhar? Quanto eu sei o quê? Fala isso. Agora, sem os itens de tela que ali dá para montar, tipo, o cara monta sistema ali se ele quiser. Você fez tudo. Você fez as telas, você viu? Você fez a tela com detalhes ali. Aí se for fazer isso, apresentar isso para .. Para cara que foi investir, se o cara for cuzão, que sempre tem monte de cuzão... E é bastante comum. E é muito comum. A gente está rodeado deles, não é verdade? Cara que... Os invejosos. Puta que pariu, né?

É muito difícil, porque a gente tem que mostrar para mostrar valor e ao mesmo tempo não mostrar muito.

Não, você pode mostrar, você... Isso aí é .. Você é foda nisso aí. Você mostra, você consegue, você convence, você vende bem. Mas assim, sem itens de tela, tipo... Por exemplo, se o cara quiser ver o protótipo dia, beleza. Tá bom, cara, a gente tenta mostrar pro cara a funcionalidade, mas depois se o cara já tiver quase certo pra ele pagar, entendeu? Ou então só de relance, assim, ó, como é, assim, ó. Navegando rápido. O cara não tem nem ideia do que... legal!

Não tempo nem de respirar.

Não tempo nem de respirar.

Eu acho que tem que ser nesse caminho também. É que o Fábio ontem já estava me falando assim, mas e se te perguntarem, não tem que mostrar como é que faz? Eu falei assim, acho que não. Por causa disso, que eu acho que é mais fácil eles pegarem e fazer com alguém que eles conhecem do que roubar a minha ideia e pronto, ir embora.

Eu sou super fiel nessa ideia de... Gente filha da puta tem pra todo lado, mas o que eu falo é que a gente precisa ter uma maga pronta também, é de alguma forma modelozinho de evidências, mesmo que por suposições do como que a gente vai gerar o tipo de valor que a gente propõe. Então, à frente de evento.

Mas aí se eu contar o como, mas aí se eu contar como, eu vou estar entregando como que eu vou fazer.

tá. Tem que achar o... Uma forma de.

Só... Que tá com o cara. É, como que isso vai gerar, como que isso que você me falou agora vai gerar economia que você falou nesse número, de tantos mil por ano? Sabe alguma coisa que você quer responder essa pergunta?

Poxa, é bem claro. Tipo assim, eu tô contando a história lá da candidata. Eles não sabem que aquela pessoa não se candidatou. Quanto tempo que eles estão ali com aquela vaga aberta que é difícil encontrar candidato para uma pessoa que tem match ali com eles porque eles não escrevem o requisito direito.

Não, beleza, ok. É storytellingzinho, beleza. Isso aí é ok. Agora, você é tão perfeccionista que você já desenhou até a tela que mostra coisas que o cara pode falar, caralho, olha lá, ó. Caralho, vamos fazer isso aí. Ele já tira print. Aquele print já manda pro pessoal desenvolvimento, joga na IA essa porra aí, vê que dá pra fazer. O storytelling é da hora. Apareceu lá a Maria, tal, não sei o quê.

Tá até medo de mandar essas apresentações para as pessoas, gente.

É, tem que dar uma chugada. Não, mas onde tem essas telas, eu quero dizer. Deixa eu ver se tem uma aqui.

Mas para além da tela, até apresentação sem tela, eu tô com medo. Tanto trabalho.

Eu mandei, você vê, o negócio da menina lá, da Patrícia.

Já vou falar para o pessoal assim, ó, começar a reunião, assina aqui o NDA.

É o quê?

Isso não é de todo ruim mesmo não, tá?

Eu acho que eu vou fazer isso.

Pelo Google Meet tem como você meio que bloquear algumas coisas também, depois gravar a tela, depois printar, botar EAD de reunião, tem como fazer bloqueio desses. Já é uma boa gente implementar isso logo também.

Mas você viu como é que ficou o da pijama, Marcos?

Eu vi, pô.

Eu sei tanto, mas ficou muito bom. Ficou muito legal.

Eu queria pegar o exemplo dos telas aqui que você abriu, que você mandou,.

peraí, eu vou pegar.

Eu estou abrindo o que você mandou para mim, entendeu?

Eu salvei aqui no Drive. Deixa eu achar onde. Aqui, rascunhos iniciais. Eu fiz monte, né?

É que tem uns que você fez que tem até a sequência de tela certinho. O cara faz, mano, se ele quiser. Aí, olha uma tela, cara. Esse cara, você não pode... É uma sugestão, mas isso aí você mandou para mim, não sei se você mandou para outras pessoas.

Não, eu mandei para você só.

Não, suave. Mas olha isso aí, né, Paulo? Olha a tela, uma tela do sistema já. O cara, se o cara quiser copiar isso aí, ele só tira o printzinho. Olha lá, meu.

Tem até shield pra isso pronta já.

Tem, cara. O indicador ali, ele fala, porra, do caralho. Porque, às vezes, pô, isso é sua ideia. Mas o cara, ele não tem essa visão. Então, agora você deu a visão pra ele. Agora ele segue.

É. Essa parte aqui que eu acho superlegal.

Que é do caralho, ó. Isso é do caralho, esse mapa aqui, ó.

Isso aqui ia ajudar muito as empresas.

Puta que pariu do caralho! Isso aqui você quebra o LinkedIn, fia. Se eu quebrar o LinkedIn, eu ia comprar essa aqui. Não é zoeira, né?

É sonho. Esse aqui ficou muito legal mesmo. Aí tem esses outros aqui que a gente fez primeiro, né? Que era ali pra parte de candidato e tal. Ou como que a pessoa pode entrar, tem tudo aqui.

Aí você precisa, no caso, a gente vai fazer, óbvio, isso aí, a gente precisa ver qual que a gente vai usar para eu seguir aqui, para fazer idêntico, olha, seguir a sua linha, entendeu, de raciocínio.

Tá.

Eu vou fazer o seguinte, eu vou.

Separar as telas por bloco ali.

Isso.

Essa tela aqui, Marcos, Essa é a linha que eu quero para candidatos. Essa aqui é a linha que eu quero para tal.

A gente vai montar 7x9 com isso daí, Marcos.

Perfeito, cara. É isso. Não, é que o raciocínio dela é tão rápido que ela já vai... Aí ela já teve a ideia, ela já pegou, já tá fazendo outro em paralelo ali, ó. Melhor do que aquele anterior. Aí ela manda assim, ó. Pô, olha o que eu fiz aí. Puta, beleza. Aí já tá melhor o outro. Caralho, amor. Uma hora que ela mandou, ela já mandou melhor.

O Paulo falou hoje, você não ia dormir? Ela estava aqui fazendo a apresentação da filha.

Aí já está melhor, ela vai melhorando os bagulhos. Eu falo, caralho.

Mas é bom que agora foi rápido e ficou bom, porque antes a gente estava incomodado com corpo, essas coisas, eu acho que agora ficou uma coisa que conversa comunidade, conversa com a empresa também, né? Fica uma coisa...

É, tem que ter cuidado nessa questão que você vai vender, as cores que vão ser utilizadas, às vezes aquela cor tá muito chamativa. Aí igual aquela Quture lá, como é que é? Quture Rocks. Puta cara, sei lá, eu até me inscrevi lá, o cara me chamou, ele queria vender pra mim e tal. Falei que tô aprovando o budget primeiro, não tem como envolver.

Foi engraçado, falou o Fábio. Eu tava aqui com ele, falei da Quture Rock, ele entrou, só que não abre direto, né? É só a empresa que pode usar. Aí ele mandou e-mail lá, aí já pediram pra ele pra poder apresentar a conta.

Já apareceu, já. Aí o cara me chamou no WhatsApp. Aí eu falei assim, caralho, mano, que ligeiro esse cara. Já tem consultor já, né, mano, pra trabalhar ali com você. Mas o produto deles é fodido, hein, meu?

É.

É muito foda, hein? Mas deve ser caríssimo aquilo ali, velho.

Mas o recrutado é assim, ó. Eu vou descobrir que o mar... Vamos supor que você trabalha na área, sei lá, de RH. Aí você é recrutador. Sua meta é 90 candidatos por mês. Você bateu 100% da meta. É isso que aparece. Sabe? Mas o que isso entrega para o negócio? Isso não existe.

Zero. Não tem... Não liga.

Não tem ligação. É. Não tem esse ninho. E as pessoas que montam os QPIs das pessoas que estão embaixo, normalmente têm noção do que estão fazendo. Aí fica uma bagunça, porque assim, beleza, você está entregando 90, mas as quantidades são boas? Tem várias coisas ali embutidas que não são analisadas nesse indicador. Entendeu? É isso que dá para a gente melhorar, inteligência por trás para que funcione, porque não adianta nada ter uma plataforma que te diz isso, mas não é para você bugar nenhum. Entendeu? Não sei se o Paulo Sábio concorda comigo, mas eu acho que sim.

Eu conheço também o pessoal da... Como que eles fazem na coach. Eles têm sistema muito maravilhoso, né? É isso mesmo.

É, o sistema deles funciona muito bem. E é bem diferente do restante do RH, que é aquele Windows 98 da vida, né? Mas o problema é esse. O RH fica muito ali no RH e esquece que faz parte do negócio. É isso que a gente precisa trazer como diferencial mesmo. E é esse o cuidado que a gente tem que ter, porque se a Gamp descobrir que a gente tá fazendo isso, vai fazer em dois meses, porque a gente vai demorar 10 anos pra fazer. Entendeu?

Não, esses caras... Eles compram. Porque... Não, eles compram. Eles chegam e compram.

Não compram nada de mim, não.

Se quiser me comprar, vai ter que me pagar muito.

Vou vender pro concorrente deles.

É, mas...

Acho que minha internet ficou ruim, peraí, deixa eu fechar a minha câmera. Tá me ouvindo?

Sim.

tá. Marquei a câmera, né? tá. Beleza, pensei que caiu aqui.

Não, eu fechei porque começou a oscilar. Eu fechei porque tava oscilando mesmo.

Não, sem problema.

Tá me ouvindo?

Tô ouvindo, aham.

Eu acho que a sua internet... Peraí, deixa eu mudar aqui. Peraí, acho que é a minha. Peraí que eu vou mudar aqui. Opa! Tá me ouvindo?

Tô, agora sim. Agora eu tô ouvindo.

deixa eu ver agora. Tô. Tava usando uma internet meio zoadinha aqui que eu tenho. Deixa eu ver.

O que acontece agora?

É que o Matinho não é... Eu tenho o roteador, aí ele tem lá uma 2.4, uma 5G, aí eu tenho que... Tava na 2.4, que acabou a energia aquela hora, ele já sobe na 2.4. Aí agora eu mudei pra 5G.

Vamos fazer isso, então. Contra o TNDA.

Esses caras não vão ser nosso concorrente direto, né? Não vão ser nosso concorrente direto, eu acho.

Vão sim. Na verdade, a gente vai ser concorrente direto deles, né? A ideia aqui é acabar com o monopólio deles, porque eles não entregam nada direito.

Mas eles têm as informações e não conectam. Eles não fazem essa...

Mas para eles é fácil fazer isso, entendeu? É por isso que tem que ser muito na xinxa.

Mas, meu, vai chegando, meu, olha como vai ser entrado, ó. Sebrae, pum, entrou. Vai disseminar entre os clientes lá do Sebrae. A Ephirjã, mesma coisa. Já era, entrou, já era, cara.

Eu só quero esses dois, preciso do resto, não pode ficar. Fala assim, só quero esses dois.

Aí há uma parada que você ia fazer que era, você ia ver a questão, você ia cobrar dos caras, dos clientes da Sebrae e da Firjan ou só do Sebrae e da Firjan, lembra? Você falou que ia pensar nisso. Você tinha pensado nisso.

É, o que eu pensei? Por isso que eu preciso do seu valor em horas, porque eu quero que eles financiem essa parte inicial nossa, que é botar a plataforma para rodar. Aí a partir daqui a gente não cobra mais deles e a gente cobra das empresas que estão com eles Ou então a gente cobra valor mínimo ali para eles Porque aí eu quero que eles promovam que a gente faça essa entrega para as empresas associadas deles, entendeu? Porque para a gente essa conexão com Sebrae e Firjan já é mais interessante para eles darem esse boom inicial E falarem, não, a gente atesta isso aqui, podem usar Porque aí eles vão aumentar muito mais o número de empresas que.

Vão estar usando Hoje, as empresas associadas já pagam algo para eles?

Pagam. Não sei como é que funciona isso não, estou entendendo ainda. Mas hoje, depois que eu mostrei essa ideia toda lá para a Cláudia, né? A Maggie veio falar comigo que ela gostaria muito de focar nesse primeiro momento na parte de candidatos. Porque essa é aquela gama até da Petrobras que eu dei exemplo pra você né. Por isso que eu fiz aquela apresentação focada nessa frente de banco de talentos. Então eu quero que por exemplo a Pijama me pague 200 mil. Aí o Sebrae me pague mais 200 mil. A BeBlend me pague ali sei lá 100 mil que é menorzinha. A gente junta isso tudo e bota pra outra plataforma pra rodar entendeu. Aí a partir disso aqui a gente cobra o FII mensal das empresas que estiverem usando.

Aí é uma negociação que a gente vai ter que fazer com Fijão e Cedrai. Se eles falarem assim, a gente tem dinheiro pra poder dar esse aporte aqui, mas depois a gente não tem. Contanto que vocês entreguem, sei lá, 30 clientes aqui pra gente, tá bom.

É, aí teria que ver quanto cobraria de cada deles, né? Que aí não pode ser muito também.

Eu botei 15 mil por mês.

De cada. Vixe.

Eles pagam muito mais que isso, Marcos. É isso que eu tô falando, entendeu? O que eu estou fazendo de estratégia? Mas eles já pagam... Fingiando não, mas as empresas já pagam.

As empresas já pagam para ter banco de talentos, que é a Gupy, ou vagas e tal Pagam para ter uma Future Works da vida, que seja para poder fazer essa parte desempenho, engajamento Às vezes paga mais uma para ter de saúde mental, que é a Pulse, essas outras aí que existem E aí são várias plataformas que a gente vai estar trazendo para a gente Então vamos supor que uma empresa pague R$ 75 mil por mês, porque é caro O Pepe trouxe aqui que ele tem aí a ideia que seja R$ 30 mil por mês ali na Gupy Aí a Q2OROCKS eu acho que é 15 mil por mês. Vai por aí, tá? Esses valores dessas empresas.

Não, mas é bom. Eu não tinha ideia desses valores deles.

É, então, por isso que eu botei 15. Porque aí, beleza, vocês vão pagar menos pra gente e a gente vai estar entregando mais coisas. Porque além de ter tudo isso aqui, a gente vai entregar esse cruzamento de dados de pessoas com o negócio. É esse que é o pulo do gato, entendeu? Ele já tem budget. Por isso que eu não dá pra eu chegar só com dados pra eles. Eu preciso ter outras coisas acopladas pra eu trocar. Você tem esse budget aqui, mas você vai investir aqui e eu vou te dar uma coisa a mais. Pra mostrar o valor disso aqui, entendeu? Dessa parte do negócio.

É, cara. Tem que encher os olhos dos caras. Eu tava olhando aqui o Ture Rocks lá. Eles tem .. É bem interessante as paradas lá deles.

Aí chega no ponto que o Paulo Fábio tinha falado. Beleza, a gente fala muito de ROI para o investidor Mas qual é o ROI da empresa por estar usando a nossa plataforma? Aí que vem a base de cálculo que a gente vai ter que trazer Tipo, vamos supor que uma Umbev passa a usar a nossa plataforma Quanto que ela está deixando de gastar com decisões em pessoas, seja fornecedores, candidatos e mais, por estar usando a nossa plataforma? Porque é isso que vai chamar a atenção, porque além de fazer essa troca, a gente tem que fazer essa troca porque eles vão ter alguma coisa em troca, né?

Fizeram na IA o bagulho também, ó. Os clientes deles. Tá vendo a tela aí?

Eu usei essa plataforma lá na Gup, eles usam a Future Rocks.

eles usam? Mas aí eles vendem com os produtos deles, né?

A Gup não tem essa parte de performance.

eles usam deles, da Future Rock.

Eu achei que eles tentaram comprar a Future Rock, mas elas não quiseram. Porque eles quiseram fazer esse monopólio do RH. Quando eu estava lá, eles estavam fazendo isso. Só que não conseguiram ainda.

eles queriam isso?

É, eles têm a parte de treinamento, eles têm a parte de curso, de pesquisa de engajamento, tem essa parte de candidato. Tem a parte de admissão também.

Que a gente estava falando hoje, ciclo de avaliação lentos e improdutivos, com aquela menina lá que você falou, Eric, eles vão mandar ela embora, lembra? Na sua apresentação. Que ela performar no baixo, né?

É. Eles vão mandar ela embora de qualquer jeito, mas eu quero que ela não seja mandada embora. Então, o que a gente pode fazer antes dela ser mandada embora? Mas eu gosto da parte de People X deles, é bem bonito.

É, eles estão em várias empresas, a Tóquio, não é?

Eles estão?

É, tem que trabalhar direitinho.

Tem que trabalhar direitinho, por isso que eu te falei, a gente precisa muito gastar pouco mais de tempo agora, sem ganhar tanto, para poder fazer MVPs, não fazer muita divulgação, para a gente ter uma base sólida, para aí a gente ir com tudo, porque vai ser essas pessoas aí que vão querer matar nós.

Eles vão assediar vocês aí absurdamente. Quem que é? Tamara?

Quem é esse nome?

Não, mas aí quem é CEO é você, pô. Eles vão em cima de você, pô! CEO, alô, pô! Quem é Tamara? Tamara Braga? Já ouviu falar desse nome? Já? Já?

A Mariana é a proteia da Gazelle. Ela vai querer me matar quando ela ver.

Ela vai querer comprar.

Não, ela vai querer me matar mesmo, ela tem ranço de mim mortal.

Tem que pensar bem em leis, as leis de LGBT, tem que pensar em tudo isso, cara.

É, tudo isso. O Paulo Fábio tá fazendo isso. Né, amor? O Paulo Fábio, ele tem essa... Ele me bota no chão, porque eu viajo na batatinha. Aí ele fala assim, tem que fazer isso. Porque depois eu fico chorando no ombro dele que eu fiz merda. É o que, amor?

Emoção e razão, tem que ser.

É, ser racional demais me deixa muito pessimista, né? E a Tamara compensa essa parte.

Por isso que é casamento assim, né?

Pois é.

A gente quase se mata quase todo dia, agora é a primeira vez que tá funcionando a gente trabalhando junto.

Vários dias a gente tem sempre que brigar, a gente sempre se mata.

É, mas é porque eu me tornei aquilo que ele queria que eu fosse desde o início, porque eu não tinha capacidade ainda, eu era muito sonhadora. Agora eu sou mais realista, entendeu?

E quando eu comecei a trabalhar, eu era zero planejamento, né? Eu era a pior pessoa do mundo pra planejar qualquer coisa. Depois eu virei o psicótico.

Nossa, ele exagera às vezes também. Mas agora você pode exagerar, amor. O que vai vir vai ser difícil.

Mas é isso, entendeu? É.

Mas assim, se a gente conseguir esse investimento da Neste, que seja, ou então do Led, que eu estou escrevendo a gente, já é uma base para a gente começar. E aí eu não quero ir pela linha da gente sair já matando com tudo. Eu quero que a gente estruture bem esses MVPs de cada frente, junte tudo na plataforma, tenha certeza que está bom, e a partir daí a gente começar a divulgar e aí matar mesmo na venda, né? Mas é importante a gente ter isso sólido, porque senão a gente vai estar se misturando com os gigantes e eles vão conseguir fazer isso muito mais rápido do que a gente. Entendeu? Se a ideia vazar, aí fudeu.

Por exemplo, já que você tocou nesse assunto, o que está hoje, por exemplo, o que tem lá da... Da Firjan, não, do Sebrae. O Sebrae não tem essa visão do candidato que você bolou depois, entendeu? Isso era algo que trouxe da divercidade.

Isso.

Então, ali, quando apresentar para o Sebrae, apresenta o bloco inteiro com tudo?

Não. Vou apresentar só o fornecedor para eles.

Mas aí eu vou... Aquela tela tem várias visões, né?

Você lembra, né?

Mas aí eu vou contar para eles que faz parte daquele tudo. Mas o que eu quero que eles foquem é na parte fornecedor, mas cruzando com o negócio também. Porque eu não vou dar só banco de fornecedores, criar banco de fornecedores Sebrae para empresas. Eu quero que a empresa enxergue o quanto que contratar aqueles fornecedores está trazendo de retorno. Entendeu? Mas eu não vou falar de candidato, nem de nada disso com eles.

Não vai falar.

Não. Eu vou falar só de conexão com o negócio. Porque eu quero ter esse rastro, né? Porque, por exemplo, você da empresa lá me contratou como fornecedora. Beleza, eu tô lá no banco do Sebrae, conversão. Aí, sei lá, você me pagou 100 mil reais. Beleza. Isso foi ganho pra mim. Foi impacto social pra mim como fornecedora. Mas qual foi o impacto de me contratar pra sua empresa? Quanto que eu deixei de gastar contratando a Tamara?

Ou quanto que, sei lá, eu consegui ganhar de impacto Isso tem que ser mensurado para ser uma coisa mais recorrente Porque senão a pessoa só vai investir em impacto social quando pensar em impacto social E não porque isso dá retorno É nessa linha de construção que eu quero ir com eles Porque isso não existe hoje também.

Essa aqui é, por exemplo, que foi apresentar para os caras lá. Vai ter que ser essa visão aqui. Você está enxergando a tela aí?

Estou. Estou só respondendo a minha mãe que o bebê fez cocô. Tenho que levar a fralda para ele, mas eu vou no celular. Pode ir mostrando que eu vou vendo, tá? Deixa eu só trocar aqui. Esqueci de levar a fralda para criança, coitada. Hoje é que dia, gente?

Eu preciso saber se essas visões podem ficar desse jeito ou você quer que muda? Isso aqui é para o cara ter a primeira leitura.

Abre de novo para mim a visãozinha inicial, por favor.

Agora foi.

Deixa eu ver. Empresa, investidor, negócio Ginga. O que é programa Ginga? Aí seria o pessoal do Sebrae olhando, né? É isso mesmo.

Investidor, empresa. Empresa que está afiliada ao Sebrae, né?

Empresa seria as grandes empresas que vão contratar.

Exatamente mas aqui não tem a visão pessoa. Candidato no caso não é negócio ginga.

O negócio ginga que você é fornecedor.

Ou startup mas aí não é pessoa. Pessoa candidato quero dizer.

Tá. Não a gente não vai ter isso na visão deles mesmo não.

A visão deles é exatamente a gente já está falando da Intretec. Lembra da Intretec? Lembra?

É isso mesmo.

É que tem essa visão sei só que se quiser até mostrar para o cara amanhã. Era uma boa para ele ter ideia.

Aí eu pergunto para o Paulo Fábio, o que ele acha, porque eu não sei, não tenho segurança de apresentar nada para ninguém. O que você acha, amor?

Apresentar o que tem de protótipo já para Sebrae ou para Ginga?

É que Ginga é do Sebrae, na verdade.

Mas não são duas negociações diferentes, não?

Não, é porque o Ginga é focado empreendedores negros, né? Aí foi ele que curtiu mais com a gente, mas a gente tá falando com várias pessoas do Sebrae que foram se apresentando no meio do caminho, entendeu? Mas o Ginga é do Sebrae. Não entendi.

Eu acho que é aquela lógica que eu te falei. Mantenha a manga, evita mostrar o máximo possível, mostra só o necessário, deixa alguém perguntar, uma prévia rápida durante a primeira reunião, tá tudo bloqueado pra não pintar nada.

Ou a gente já chega amanhã com NDA pra ele assinar.

É, talvez.

É, isso aqui é uma ideia, né? O problema é o cara olhar e gravar o vídeo e... E aí ele fala leva para alguém que é do perfil que ele quer e que ele vai ganhar dinheiro em cima também aí eles fazem e vende lá.

É complicado né gente.

Mano é foda. Falando em dinheiro os caras matam a mãe e pai. Você acha que não vai foder os outros?

Eu também não sei. Talvez, é porque eu acho que o Bruno é confiável, porque ele faz muito negócio com muita gente, né? O trabalho dele é ajudar em negócios, então talvez pra ele faça sentido mostrado.

Seria mais difícil acho que é mais complicado como se é investidor assistindo cara que vai investir.

Ele é cara que faz essa facilitação entre os fornecedores com o startup e com o investidor. Então acho que não faz muito sentido ele roubar nossa ideia. Beleza acho que até risco para ele né reputacional também.

Tá. Que hora que é amanhã? Não sei se você me chamou também.

Eu chamei. Deixa eu ver aqui que horas vai ser. Você já até aceitou. É 10 horas.

10, Fechou.

Mas eu acho que vale mostrar para ele essa primeira visão. Só não sei qual é a melhor.

Falhou. Ele entrou num túnel.

o cara tá trocando de casa, aí troca de Wi-Fi. A casa do lado da outra, aí no portão troca Wi-Fi.

Tá me ouvindo? Agora sim.

É, troquei de casa e acabou a internet. Então, Marcos, eu preciso muito desse dever de casa seu aí, de passar esses valores. Primeiro, principalmente pra esse, né, de fornecedor, pra gente ter essa ideia de quanto é o mínimo. Preciso também entender sua proposta de como que a gente pode trabalhar, porque aí pode ser assim, eu quero tantos por cento trabalhando desse jeito, tantos por centos trabalhando desse jeito. A gente conversa direitinho sobre essa parte. É, mas isso aí a gente pode fazer depois do Sebrastik. O primeiro agora é a hora, o valor da hora, porque se ele me perguntar, quanto que vocês precisam para fazer esse peôto aí acontecer? A gente tem que ter esse valor para apresentar pra mim.

Mínimo e máximo, né? Entendi. Entendi. eu acho que o valor, aquele valor, se você for 180, a gente pode ir de 180 a 250, acho que cobre. Se você quer o mínimo e máximo, intervalo, é isso.

Quando.

Eu trabalhava por hora em 2011 já era já ganhava 120 a hora então 180 acho que tá dentro do.

É, isso é pra gente pagar pra conseguir fazer negócio pra gente também ganhar lucro no futuro, né Então pense que isso aí vai ser o pagamento pra gente fazer a base E depois vai vir muito dinheiro se tudo der certo E eu estou lutando muito pra isso Aí a gente quer essa parte aí do fim mensal e tudo mais a gente pensa nesse valor de 15 mil a gente conseguir alguns clientes já dá para a gente se pagar bem e fica muito mais fácil tudo né.

Sim. Mas é isso aí. Você tem ideias de 80 a 250. Essa é a faixa.

Tá, mas vê as outras partes também, que fique mais tangível, porque aquilo ali eu não sei se tá confiável de servidor e tudo isso.

Não, tem que detalhar ali.

Isso, para a gente ter esse valor também.

Fazer desenho do Exis, o To Be, o Exis, como é que seria aí, com Zoar, com uma empresa e poucos afiliados. Várias empresas e vários afiliados ali, no caso, como se fossem organizações igual a Firjan e Sebrae, enfim.

Isso, isso mesmo. Aí o que eu botei ali de ideia para o piloto, para a gente ter uma base para sair, né? A gente colocou considerando o número de fornecedores sendo 50 fornecedores e 50 pessoas compradoras.

Onde você pôs isso? Na planilha?

Ela.

Está no túnel de novo.

E aí a gente vai abrir amanhã também dele.com.br. Mas tá inscrito aí na planilha. Tá ouvindo?

Tá na planilha, né? tá aqui, ó. Agora tô.

Beleza, tô chegando em casa.

Agora eu tô.

É, eu botei em cada plano.

Agora eu tô te ouvindo.

Em cada planilha dessa...

Essa parada aqui, tá falando? Piloto, empresas, 10 candidatos, 1.000 oportunidades, 50, mete 500, é isso? Isso.

Isso. Pra gente ter uma base pra sair. Mas você tem que ver também qual o número de horas que você levaria pra fazer cada visão dessa, pra poder ficar valor tangível também, que isso aí eu não sei se tá certo.

Tá, mas é que eu tenho que mensurar, por exemplo, se eu tiver que chamar mais duas pessoas dentro do tempo que a gente tem que fazer, por exemplo. Supondo que o Sebrae queira em três meses.

Isso.

Aí eu preciso, ó, puta, eu preciso dar de braço.

É, mas aí você bota confortável quanto tempo que seria só você e a gente propõe só você. Aí se eles falarem, não, a gente quer menos tempo. Tá, o valor vai ser diferente. Aí a gente volta e refaz, entendeu?

Tá bom.

Eu acho que a gente tem que trabalhar com o mínimo e a partir disso a gente construiu. Se eles falarem, a gente quer mais rápido, a gente tem mais dinheiro, aí tá. Aí vocês estão trazendo dinheiro, a gente faz. Mas é esse o caminho.

Eu acho que essa reunião amanhã vai ser boa, hein? Porque, cara, tem que tentar fechar algo realmente antes das eleições. Porque se esperar eleição, fodeu.

Só no que vem.

Só no que vem, cara.

É. Eu tô montando aqui o da mão, que a Nath tinha pedido. A Nath às vezes ela tem. Ela fez isso comigo ano passado. Ela tem uns dinheiros sobrando no final do ano e ela quer gastar. Aí é bom estar perto dela assim que às vezes fala assim sobrou aqui tantos mil. Vamos fazer alguma coisa e já dá para fazer pelo menos a primeira parte com ela que é o da.

Sobram dinheiro assim para ela.

Às vezes sim. Ela pode ser bem. Ela fala assim, tem que gastar logo, porque senão o povo vai cortar meu dinheiro. É, ela faz do seu jeito.

Deixa eu ver aqui o meu app mesmo. Esse app aqui eu vou ganhar dinheiro, assim.

Você tem que ganhar, né?

Opa, o maluco tá... O cara tá... O cara que eu fiz pra ele pirou quando eu mostrei. Ele não imaginava que fosse ficar bom assim, tá?

E também tem a parte de web design, né? Que você tinha falado, né, Marcos? Também tem que estar aí.

Isso é importante. Esse cara aí é importante. Esse cara é importante porque ele... Os caras estão dando mal grana aqui, mano. Enfim, esse cara é importante porque ele vai refinar mesmo as coisas, né? Ele vai refinar, vai deixar aquela cara, não a cara de que foi feito por Iá, né?

É.

Isso é importante. Eu até falei com ele. Falei com ele. É que esse cara, ele tem vários trampinhos que ele faz, sabe?

É, eu acho que é importante a gente botar isso abarcado aí também.

Vou tentar falar com ele, mano.

Aí a gente fechando esses valores aqui já fica mais fácil, aí também eu já replico isso para o outro lado da Neste, que aí ficou faltando também a gente fechar esses valores. E ver direitinho quanto que a gente vai botar, quanto que a gente vai cobrar mensalmente para cada empresa para poder fazer projeção, né? Porque eu botei 15 mil, mas acho que 15 mil as pessoas nem acham que as pessoas vão pagar. Eu sei que pagam porque eles pagam para outros, mas a gente pode botar valor mais acessível nesse primeiro momento e depois ir aumentando também.

Essa Neste é quinta, né?

É quinta, isso.

Esse cara aí vai demorar pra entrar grana, isso aí não vai ser esse ano, não.

É, não vai ser rápido, não.

Mas acredito que é .. Vai analisar, vai analisar... Contexto das suas ideias, do projeto. Isso aí você...

É mais fácil porque ele me conhece bem. A gente é próxima, assim. Ele foi a pessoa que me levou a primeira vez na Faria Lima. Nunca tinha ido lá, eu não sei como é ir lá. Aí ele falou mal do chefe dele.

Era o cara da empresa. Ele é diretor de... Ele era diretor de uma empresa?

Ele era diretor financeiro da Hora Capital. Que era financiadora da Gupy. Ele era o braço direito lá do cara que investia na caralho. E homem preto né ele era tipo o Tolkien do velho lá. Nossa não estava aqui e aí ele saiu de lá e foi para a Neste que tem tudo a ver com ele porque fala de investimento e a parte social né.

Então é esse cara Jovã não é Luan Luan.

Eu até vi o sobrenome dele que eu esqueci.

O Gilvão é amigo meu, negrão também. Ele é diretor financeiro de uma empresa de investimentos. Você falou desse cara e falei, será que é o Gilvão?

Aqui, vou mandar o perfil dele para vocês. Ele é gerente de investimentos. Vê se você consegue abrir.

Você mandou onde aqui no chat achando pensando que é no WhatsApp é mas.

Eu já tive uma primeira conversa com ele desde que ele foi para lá é contei pouco do que eu estava querendo fazer e tal ele me deu algumas dicas aí se foi meio que matutou na minha cabeça e agora dá para mostrar o negócio legal para ele acho que vai dar bom e assim acho que ele também vai dar algumas dicas de para onde a gente pode ir para além da Neste entendeu Ele tem muita visão, sabe?

Isso é rico, isso é rico.

E a gente vai ter uma hora com ele, né? A Patrícia estava me contando que ela teve cinco minutos para apresentar o pitch dela para conseguir investimento. A gente vai ter uma hora. Talvez seja mais tranquilo também, até desde a dica. Tipo, isso aqui não precisa, isso aqui vai para aqui. Acho que vai ser bom.

Qual o nome dele? Não apareceu não, mano.

Luan Santos.

Apareceu esse feed e não existe, é uma coisa assim.

que doidera. é porque tem uns negócios aqui que... Deixa eu mandar pra você pelo WhatsApp. Achou?

Vixe, o que mais tem no mundo é Luan Santos.

Vai te mandar pelo WhatsApp. Luan, meu filho, tá me mandando várias gifs aqui, eu não tô conseguindo nem te achar.

Achei.

Achou? Eu tava copiando e não tá indo também, não sei por quê.

Luan Santos, C-E-A-F-M-V-A, que tá na assinatura de Global Investment Manager. Forbes Black Member. Neste, achei.

É isso aí.

A Ória. Da hora. Legal. O cara é novo, né?

Ele é novo.

Deve ter, no máximo, uns 35 anos. É, 96, né? 35.

Ele é bem foda de coisa de investimento mesmo. Bem reconhecido. E ele tinha me falado que ele queria sair dessa parte para a parte mais social que não tinha muito a ver com ele. As coisas que passam em coisas de investimento e ele acabou achando achei super legal.

Isso aqui mesmo estar com a mão no ouro. Isso é louco. Trabalha direto com o CEO. O cara que chega para ele e fala E aí onde eu ponho meu dinheiro aqui? O que você sugere?

Quem conhece o negócio da Gupy?

Ele conhece?

Ele conhece, ele era o cara que investiu na Gup, né?

Da Ódia, né?

É, ele era de Ódia, então ele conhece bem essa parte de RH e tal. E ele era bem crítico em relação a isso também, então acho que ele vai gostar.

ele era?

Uhum. Eu tinha várias reuniões com ele era mó louco. Eu nem vi o tamanho disso na época, eu era tão inocente, né, vida? Hoje em dia eu fico, nossa, eu perdi a chance da minha vida de pegar investimento que eu queria ter.

Pô, legal, hein, mãe? Legal. Bem legal isso aqui. Tem monte de... Você conhece tanta gente, velho. Pelo amor deus.

Eu conheço, mas o Justus me odeia, então provavelmente muitos velhos e brancos ricos me odeiam também, sabe?

sim, isso aí também, eu sou odiado também, mas é bom. Se você chega igual, se você chega à idade que eu tenho, por exemplo, ninguém te odeia, tem algo errado.

É. Não, e eu sempre tive pávoas com isso, né? O Fábio sempre falava, tem que parar com isso, de se importar com o que os outros pensam de você. Agora eu tô assim, foda-se também, não quer gostar de mim, não gosta, mas eu sou boa, sou inteligente, vocês que... Porque eu ainda tinha essa coisa de, ai, meu Deus, vocês não vão gostar de mim.

Porque as pessoas vão pensar, né? Eu falei disso, falei para os caras falarem, mano, eu não estou nem ligando, foda-se. Eu costumo falar, deixa o meu Exu cuidar deles.

E o Paulo Fabio é uma pessoa que não está nem aí para nada, né? E eu sempre estou assim, desesperada com tudo. Aí, quando eu comecei a aprender a cagar para as pessoas, a minha vida ficou pouco melhor. Mas ainda sofro com algumas coisas. É menos que o riqueiro, antes era todo dia, agora só dia e cinco.

Eu ia te falar, daquela mina lá, eu sei que não é assunto, mas eu vou ver tudo que você falou. E a mina da Petrobras lá, Carla,.

Do lance do... Então, eu vou ter esse retorno dela depois do dia 11, que a gente vai ter aquele workshop, para poder definir como é que ela vai querer fazer as coisas, entendeu? Aí fica mais fácil para eu te direcionar, porque agora nem ela sabe o que ela quer. Aí agora ela vai pro workshop com todo mundo pra poder desenhar o plano do ano que vem. Aí quando tiver esse plano eu te passo, que aí fica mais fácil.

E aquele link que você me passou, Petronect?

Petronect. É porque essa plataforma tava... Petronect, tá. É, tem outro ponto também, essa Petronect é basicamente o que a gente quer fazer Só que o que a gente quer fazer é para ajudar as pessoas, não é? Isso aqui é só para poder as pessoas mesmo. É uma plataforma de condensedor, não é?

Teve uma manutenção, lembra que eu falei que estava fora? Foi no sábado, a manutenção foi sábado, agora eu estou vendo.

Aí tem que pagar, mas para você concorrer nas coisas de chamada pública que eles têm aí, tem que pagar 107 reais por mês. Aí eu falei, tá, mas empreendedor pequeno, como é que faz? Eles não têm nada.

essa porra aqui é uma... realmente você achou isso certo que eu vou fornecer... Olha só, mano. Puta merda, mas aí você não pode aparecer. Mano, você não pode aparecer nessa porra. Não, o Hub não pode aparecer aqui. Você está trampando para os caras, velho.

Não, mas aí eu não vou. Eu não vou fazer com eles. Não agora.

O dinheiro tá aqui, mano, porque aqui é foda, hein?

Pô, mas é muito difícil trocar isso aí, que eu tenho certeza que é de alguém parente deles, porque é uma merda.

Parece ser ruim mesmo.

É muito ruim essa plataforma, Jesus Cristo. Deve ser de algum parente, que não é possível. Eu juro pra você, é muito ruim.

Deixa eu ver em desenvolvido em que é isso aqui.

Olha essa porra.

Nossa, SAP, cara.

É. É porque daqui você já fica cadastrado como fornecedor no SAP, entendeu?

Puta, mas não precisava ter essa visão dessa AP. Poderia ter frameworkzinho melhor, né, mano?

É horroroso.

Que pobre isso aqui, velho.

Mas tô aprendendo várias coisas que não fazer com essa plataforma. Pô, muito ruim. Mas a gente já conseguiu contratar duas fornecedoras de brinde, né? Meio tempo. Aí a Ana vai fechar agora também.

A Ana decidiu fechar?

Decidiu. A Luciane voltou atrás e pediu para falar com ela.

É uma doideira. Eu comecei a falar com ela. Falei assim Ana, precisa fazer isso, comprar isso, pagar isso. Ela já... Aí ela começa a falar, ela falou em dinheiro, ela já começa a ficar desesperada. Ela falou mano, você quer que ponha a plataforma no ar? Mano, tem custo isso aí, mano. É foda, né? É isso que eu falei para ela. Tem custo, mano. Falei, mano, você fechou... Ela falou assim, você tá reclamando, você fechou com o Sebrae nacional, fechou com não sei quem, fechou com mais não sei quem. Caralho, tá entrando dinheiro pra você, fica feliz, porra.

É.

Né?

Eu já falei pra ela, se resolva com ela, eu não quero ficar no meio de vocês duas, irmão.

Tá, mas aí a mulher quer que ela faça.

Quer.

Tudo.

É. Agora quer, né? Mas não sei se amanhã ela ainda vai querer, porque ela também é meio idiota. Aí eu já falei assim, dei o telefone de uma pra outra e falei assim, vocês se resolvam que eu não quero saber nada.

Ai, a Ana é bruta ali, a Ana é meio bruta.

E a Luciana também, é por isso que fica nisso, entendeu?

também é igual a Ana?

É, ela é.

A única pessoa que ela é legal é comigo.

É preta?

Não.

A Luciana não?

Não.

Puxa, aí é foda, hein? Aí o ego aí é foda. Imagina.

Mas ela trabalha muito bem, eu gosto muito dela. Trabalha bem mesmo. Eu nunca vi nada parecido com o que ela faz aqui. Eu dou muito valor ao trabalho dela. Tem seus percalços, como toda pessoa, né? Ninguém é perfeito, cada tem o seu jeito de agir, né? Mas... Ela me irrita às vezes, mas eu tô acostumada a falar assim... Dormir que amanhã passa.

Não pode ficar se estressando com isso, não. É verdade. Tem pessoa que leva o pessoal, né?

Ela fica querendo me ligar pra ficar desabafando da vida, eu acho.

Tem poucos amigos, então.

É, e a gente trabalha home office, né? Aí ela não tem com quem reclamar da vida. Ela vem ligar pra mim pra reclamar das pessoas. E ela não tem time, aí eu ajudo ela, então.

Ela é uma gerente sem subordinado.

Ela cuida de 14 comitês de divercidade, mas ela não tem ninguém diretamente pra ela, entendeu?

Caralho, ela é uma pessoa que precisa de sistema mesmo pra agilizar a vida, né?

Precisa muito. O sistema dela hoje sou eu.

Pra ela conseguir divulgar as coisas e conseguir ter capilaridade pra todo mundo saber o que tá rolando, pegar as informações. Puta, pra ela seria lindo, hein? Mas aí então, pra ela seria lindo o Hub, né?

É, mas eu não vou poder. Não vai poder porque eu estou planejando passar no concurso e trabalhar na Petrobras para sempre, nunca mais esquentar a minha cabeça.

Não, você já tem que pensar, se você entrar na Petrobras, você não vai poder ter empresa.

Pode sim, monte de gente que tem empresa.

Eu acho que voltado para a área que você trabalha, acho que não.

Tem problema não, só não vender pra mim. Tem problema.

Pra não ter conflitos de interesse, né?

É, mas pode ser. Tem problema nenhum, né? Tem monte de gente aqui que trabalha há anos, que é consultor, tem empresa de consultoria, faz as coisas. Aí não pode, por exemplo, eu não posso dar consultoria, se eu for Petrobras mesmo, né? Dar consultoria pra outra empresa que trabalha com energia.

Aí não pode.

É, porque aí é conflito também.

Conflito de interesse.

É. Mas a plataforma de RH não tem nada a ver com esse problema não. É, mas aí se a plataforma sair, aí eu não consigo mais trabalhar não, aí eu só...

Não, mano, se virar essa parada aí, investimento no caso, né? Virando investimento, tipo... Aí eu largo e.

Fico consultora deles, aí eu falo, ó, se vocês quiserem usar minha plataforma, já mando. Último dia de trabalho, vou mandar pra todo mundo, comitê de divercidade, Aí é.

Cliente, vai ser cliente da sua empresa.

Eu tenho contato com o diretor, então... Eu tenho feito essa aproximação estratégica também com eles, porque eu sei que se dia eu tomar a decisão de sair, eu consigo trabalhar com eles ainda, vendendo coisa, entendeu? Eles gostam bastante do meu trabalho.

Pô, tá sensacional, né, irmã?

Foi o lugar que eu mais me desenvolvi, assim, no total. Eles fazem muita coisa legal mesmo. Tem pra gente oportunidade, independente se eu ficar ou se eu sair, a gente tem oportunidade de fazer coisa.

amor, a gente tem que... Tem de como, a gente é pobre, né? A gente tem que... Né? Dia, assim, com o pezinho na frente, assim, na frente do outro, bem devagar, né, amor? Pra aí começar a andar mais rápido e correr depois, porque puta merda.

Tem jeito não.

Dá vontade de jogar tudo pra cima e falar, não, vamos ficar só nisso, já era.

Todo dia.

É, mas não dá, mano.

Não dá. O Paulo Fábio fica agoniado comigo, ele fica assim, meu Deus, garota, respira, você quer fazer tudo ao mesmo tempo. Desespero para o poder não ter mais que o tempo.

Para dar logo o certo, né? Você pensa, né?

É.

Não, eu sou justamente o contrário. Eu tenho a mesma ansiedade de fazer tudo de uma vez só e eu já me fodi milhões de vezes pra disso.

Aí ele não quer que eu me foda também.

É, eu fico assim, confia em mim, porque se foder é uma habilidade que eu tenho assim, desconfiada.

É foda, mano. É foda. É isso. Pior que é mesmo. Tem os dois lados, hein. Eu queria mesmo, tipo, falar, pô, vou acordar mais tarde.

O que eu tenho?

Tenho que desenvolver tal coisa. Fazer teste assim, assado, mas sabendo que o negócio é meu, é algo pra mim, né?

É, mas é por isso que é legal uma ideia de algo que tenha fluxo mensal, né? Que não seja uma coisa que acontece uma vez, depois de três meses de novo, pra gente também não ficar nessa necessidade, porque aí fica bem mês, depois fica tudo na merda de novo. Não dá, tem que ser algo que a gente tenha segurança de sobreviver.

É, eu te falei lá, aquela vez que a gente tava vendo a questão do Firjan lá. Falei, mano, é melhor ter pinga sempre, ali ó, e vai caindo lá ó, aí você tá no seu trampo, eu tô no meu, aí vai caindo.

É.

Medida, puta, tá aumentando esse negócio aqui ó, a foto tá legal, tá ficando legal, puta, já não tô conseguindo trabalhar tanto aqui, será que dá pra eu me aventurar? Aí é análise, cada analisa o seu lado.

É, é isso. Mas eu vejo muito assim, nesse esquema de Firjan, Sebrae, outra organização que tenha associados, assim, pra gente poder focar. Até pra não ficar nessa coisa de concorrência com as outras empresas, pra elas não querem eliminar a gente. Pra gente focar em algo que não seja tão concorrente com eles, né? Até porque a Firjan não usa a Gupy.

Não.

Sebrae não usa a Gupy, porque é tudo edital. Os processos seletivos deles são tudo por edital, entendeu?

Então, tem que pensar nisso aí também, sistemicamente.

Mas é porque não são eles que vão usar essa parte, seriam as empresas associadas de candidatos, entendeu? Eu não quero que eles usem a parte de candidatos, eu quero que as empresas associadas usem. Candidato fornecedor, no caso. Eles trouxeram essa dor para mim, a Firjan. Falou assim, a gente forma as pessoas e a gente não consegue fazer com que elas se conectem com as empresas que estão investindo nessas formações. Essa é uma dor deles, mas eles não fazem esse tipo de contratação.

Então, a visão da Firjan somaria aquela tela a candidato, por exemplo?

É. Na verdade, eu acho que, na visão principal, a gente precisa daquele desdobramento. Lembra? O que eu sou? Representa uma empresa ou só uma pessoa.

Aqui da forma que você pensou é como se fosse onboarding na verdade e aí o cara vai escolher o que ela quer isso.

Mas aí depois que isso tiver tudo, né? Todas as visões prontas Mas a ideia é assim, tô entrando na plataforma Aí entrei, represento minha empresa Aí quando bota lá, represento minha empresa, o que eu sou? Eu sou uma pessoa de RH? Sou uma pessoa de compras? Sou uma pessoa de não sei o quê? Aí eu boto lá meu e-mail Entrei, aí eu tenho a minha visão Se eu sou uma pessoa recrutadora, eu vou ver a parte candidato Se eu sou uma pessoa compradora, eu vou ver uma partilha de compras, entendeu? Vai ter que ser esse direcionamento. Isso vai ser mais complicado mesmo. Mas por isso que eu acho que é interessante a gente pensar em fases. A gente olha agora para o SEBRAE e pensa nessa parte fornecedor.

Mas é o que você falou, foi importante, de eu já vou construir pensando que depois vai estar tudo acoplado, que a gente já vai poder estar preparado. É, meu.

O outubro, por exemplo, é .. Em outubro você quer fazer essa... Vai ter o evento? A forma que vai ser construído lá já vai determinar muitas coisas já para a plataforma. Já vai coletar e já vai dando match ali, daqueles caras. o cara vende tal coisa, o outro aqui é comprador daquilo.

Match.

o Zé trabalha desenvolvedor e o banco que também a mãe precisa desenvolvedor. Então já vai dando match ali.

É isso. Seria ótimo a gente ter isso.

Na pesquisa, na verdade.

É se a gente tivesse isso já seria ótimo vamos ver o que ele vai falar amanhã a gente mostra essa visão inicial do que a gente já tá começando a montar e tal e vê o quanto que ele tem disponível se ele fala assim eu não tenho dinheiro nenhum para fazer isso agora aí a gente senta junto e planeja mas aí eu já vou dar se ele fala assim não tem dinheiro nenhum agora eu vou falar tá mas pro ano que vem porque aí vai ser.

Triste meu se ele falar que não tem dinheiro nenhum vai ser triste acontece.

Bastante Puta que pariu. Por isso que eu quero muito ver se a gente consegue algo de outra forma. Porque agora esse ano tá foda, cara. Ninguém tem dia pra nada. Nunca vi igual.

mano. O ano de eleição sempre é assim. Os caras não têm, cara. Os caras não têm grana. Aqui como ficou. Mas ficou o perfil Formis, tá? Vou te mostrar aqui. Eu fiz esqueminha aqui. Mas depois eu vou deixar aquela visão que você gosta, cheia de cores, cheia de...

Não, isso aí é o que deixa funcionar.

Tá vendo aqui?

Tô vendo.

Formes, basicão. Só que o lance é o que tá por trás, né, cara? Tipo, porque essas perguntas vão gerar indicadores, né?

Aham.

José, aí eu vou hospedar a parada lá.

E vem cá, você acha que nesse formato aí de capturar candidato, recrutador, comprador, fornecedor, a gente consegue já ter essa página quando? Será que a gente consegue ter essa página para a gente, independente do Sebrae?

Não, isso aqui independe deles, não tem nada a ver com eles.

É porque o que eu queria era assim independente do que vai acontecer com o Sebrae que a gente já comece a nutrir de pessoas porque aí quando a gente for vender a gente tem seis mil pessoas aqui compradoras tem 3 mil pessoas candidatas tem né que a gente já tem esses dados.

A ideia é essa né né e.

Eu já vou ter que lançar isso.

Tipo 15 de setembro em breve.

15 A 20 de setembro, mais ou menos.

Quando?

15 A 20 de Setembro.

sim. Não, só que até sexta-feira está no jeito.

E a gente vai começar a divulgar para as pessoas se candidatarem, né? Se inscreverem.

Essa pergunta aqui, empresa que fazia parte quando participou do Diverse Match, sei lá.

Empresa que você fazia parte quando participou do Diverse Match.

Não deve.

Qual o setor dessa empresa?

Bebidas.

Falta alguma coisa.

Como você gostaria de ser apresentado?

Marcos, gostaria sempre de ser apresentado como Marcos. Tudo é Marcos. Fiz várias aqui. Teve que aumentar, teve coisa que melhorou. Eu vou publicar link pra você testar aí.

Tá.

Assim, mas eu coloquei como obrigatório, mas sabe o que eu acho que eu vou fazer? Pra gente testar, eu vou tirar a obrigatoriedade de preencher só pra gente navegar.

Tá.

Né?

Pra ir embora, pra fluir no caso, né?

Uhum.

Senão, sou obrigado a preencher. Não, aí você põe qualquer coisa e vai embora. Ou vê como tá, entendeu?

Tá, eu vou até abrir aqui para ver se o forms que a gente tinha montado tem alguma resposta, porque o Dave, aquele lá da Diágio, ele me deu a dica de pegar alguns comentários das pessoas e eu esqueci de olhar isso.

Eu acho que eu coloquei algumas respostas aqui de texto, hein?

No nosso formulário?

É.

Mas aí eu vejo pela data também.

É.

Quando eu cheguei, eu olhei isso.

Aqui, tem essa aqui. Conta para a gente isso. Ouveu algum match marcante, alguma história de transformação que você viu graças ao projeto? Acho que não tinha isso. Existe alguma demanda, desafio, oportunidade específica que você gostaria de conferir junto com a gente?

A gente está recebendo ainda a fornecedora se inscrevendo, acabei de ver aqui.

O campo obrigatório, o campo obrigatório...

Eu.

Vou tirar a obrigatoriedade pra gente conseguir navegar. Eu vou publicar num... Vou publicar num link que eu tenho, que é justamente pra piloto, né? Justamente para fazer piloto, aí funciona bem.

Pedi aqui para o Pedro também, o link desse. Mas beleza então faz isso para mim acho que já assim já tá ótimo tá aí se a gente depois quiser melhorar deixar uma bonita não é só.

Que pelo menos vai salvar em banco de dados não vai ficar formes para depois você juntar é uma merda né.

Meu é isso é isso que eu queria assim que a gente tivesse essas duas quatro né as quatro visões que depois quando a gente for fazer match é só montar ali o como que a gente vai é para a gente pensar em processo assim tipo é qual tipo de produto você compra aí eu compro coisa de alimentação tá bom essas aqui são todas as que eu.

Tenho a inscrição a gente já envia a inscrição do cara como assim não entendi o cara já se inscreve aqui ou ele como é que vai funcionar.

Já se inscreve aqui já se inscreve.

E recebe e-mail com as informações data...

É, aí a gente depois manda invite pra eles, né?

É, porque daqui eu já envio.

É isso que eu tô perguntando.

É, mas é porque a gente ainda não tem definido o dato e o horário dessas coisas. Eu vou ter essa reunião com o pessoal da 99 amanhã, eu acho.

Aí tem painel aqui, ó. Inscrições, login, confirmada 1, tá vendo?

Legal.

Eu vou dar uma melhorada nisso.

É essa parte aqui de padronizar o que tá escrito aqui também te ajuda a fazer bonitinho mas é para amanhã a gente já fecha essa parte dos valores que eu vou ter que ter slide aí tá na manga que guardado né caso ele pagar tenho dinheiro quero saber quanto A gente já mostra para ele e depois você vai matutando na sua cabeça, a partir desse valor, quanto você gostaria de fazer essa sociedade com a gente, para a gente já começar, em paralelo, a desenhar tudo isso. É chato, mas é importante essa parte burocrática.

É importante.

Comprometer os dois lados aqui.

É investimento. Você está investindo. Eu uso a IA, é investimento pessoal meu. Você também está usando a sua, além da nossa capacidade, né? Você também está usando, eu estou usando a minha, você está usando a sua.

Então, a gente está investindo. É a coisa da vida da gente, né?

Então... Está investindo. Eu estou, tipo, ao janto, eu falo, vou ver aquela coisa, tal coisa, vou ver se dá para melhorar. Enfim, é isso.

Eu acredito que a gente tá num caminho muito legal. E assim, o Paulo Fábio é a pessoa mais negativista que eu já vi na minha vida e ele tá animado. Então, estamos em bom caminho.

É, mas é...

Ele tá animado a fazer alguma coisa.

É que, assim, dependendo das pessoas com que você se associa, aí você vê se tá indo pelo caminho certo ou não, né, Carla? Eu acho que é mais, deve ser, não falando a meu respeito, obviamente, mas dependendo da pessoa que você está se unindo para fazer as coisas, te dá tranquilidade ou não. Talvez seja isso que ele pense.

É, eu falei isso para ele, eu falei que você tem a mesma velocidade de querer fazer as coisas que a gente, então isso é muito importante. Senão vai ficando para trás não tem jeito a gente tem uma velocidade e.

Uma necessidade é capacidade o meu problema.

É capacidade das pessoas é gente burra querendo pagar de inteligente, gente inteligente que não sabe o que tá fazendo e aí tenta ser inteligente meu terror é.

Esse aí eu prefiro fazer eu sozinho.

20 Mil vezes mais carga do que confiar que alguém não vai fazer merda Porque, pelo menos, essas são as minhas merdas, meu problema é isso.

Aí você fala, deixa que eu faço.

Aí você não tem o que fazer.

Quando eu comecei, eu falei assim, vou montar uma empresa. Falei, puta, eu dei, graças a Deus, a IA, velho. A IA é linda, porque o cara vai trabalhar, enquanto eu dei ideia pra ele, eu montei prompt com 20 páginas, sei lá. Joguei lá, o bagulho tá moendo lá. Permitir que eu faça? Filho, vai embora, vai, constrói. Servidor é esse, você sobe o banco, testa, faz isso. Eu já dou instruções, porque saiu da minha cabeça e foi pra lá. Então, ele tá fazendo. Às vezes dá errado, dá errado. Aí dá errado dentro do... Eu tenho controle, tá dando errado, aí eu consigo corrigir.

Você tem controle e noção do caminho que chegou.

É, eu sei o que eu tô fazendo, né, cara? Igual eu tava falando pra Tamara hoje. Eu achei cara, outro dia na internet, cara vendendo .. Cara vendendo sistema de gestão de obras. Cheguei lá, o maluco tava vendendo HTML que ele tava na máquina dele, ele inseria os dados lá, gerava o gráfico, funcionava, beleza.

Tem bastante agora a gente fazendo coisa que é single page, html.

Então, mas o cara tá achando que é sistema. Não tem banco de dados, não tem segurança, não tem autenticação. Ele não publicou isso aonde? Aí o cara, não, mas eu vendi já.

Você vendeu?

Vendi, vendi 300. Falei, quê? Você vendeu 300 HTML, ele manda pra pessoa por e-mail, cara. O cara comprou, pagou três pau, mano. Ele ganhou 10 mil reais, praticamente, com HTML. Aí ele tirou, ele parou de publicar. Ele saiu do Instagram. Ele falou, não, preciso conversar com você e tal. Aí eu falei, não, tudo bem, mas você tava... Eu falei, você ia se ferrar, mano. Que o cara apaga bagulho, três contas, achando que é sistema, e chega lá HTML. Aí o cara vai salvar, a hora que ele desligar, abrir de novo, tudo que ele inseriu no dia anterior, que tava ativo, né? Ele tava gravando, ele não persiste em dado nenhum, né, cara? E o cara ganhou dinheiro com isso, mano. Filho da puta, mano.

Só esse pouquinho que ele vendeu já, já resolveu o problema dele.

Porra, mano! Porra, vendeu 300, mano. É o que ele falou também. Caralho, filho da puta. Tá enganando os outros e ganhando dinheiro. É o que mais tem também, né, mano? Os caras enganam pra caralho.

Puta que pariu. Eu tava assistindo, eu tô assistindo uma série que se chama Dropout. Eu não sei se você já ouviu falar.

Não.

Da mulher que ficou bilionária aos 19 anos conseguindo investimento de monte de homem, velho. E ela não conseguiu sair do protótipo. E era negócio de fazer teste em sangue. É verdade essa história, tá? A mulher tá presa até hoje. Ela tá presa? Tá presa até hoje, 11 anos que ela pegou. Porque ela conseguiu bilhões depois de dólares E depois não conseguiu entregar nem o protótipo porque o negócio não funcionava E o pessoal que era cientista falou, não dá, não dá Aí ela fez uma fraude lá pra poder falar que deu pra fazer o teste Porque era em uma gota de sangue, era protótipo tipo notebook, assim, né? Aí uma gota de sangue você consegue fazer o teste em casa, tipo assim.

Analisar a doença e o caralho.

É, foi uma ideia maravilhosa, só que não conseguiu fazer rodar. E aí ela conseguiu o investimento antes de conseguir fazer o protótipo rodar, só que ela fingiu que tava rodando. E fica dez anos nisso e ela não consegue fazer o protótipo. E aí só depois desses dez anos que os caras vão atrás dela, mas ela ficou bilionária durante todos esses dez anos. A valentia valeu a pena.

E ela tá presa.

Tá presa pra onde?

Pô...

Mó caos, ela é mó charlatona mesmo, meu Deus do céu. E ela começa toda fofinha e tal, depois ela vai virando monstro na série. Ela usa todo mundo, acaba com a vida de todo mundo.

Tem cara, quando eu estava na faculdade, o maluco estava contando a história do cara que judeu foi apresentar projeto de TI. E aí o cara... É... PowerPoint, velho. Produto que não existia. Ele foi numa rodada, tipo, dessas de... Pra apresentar. Ele saiu da rodada com 5 milhões de dólares.

Caraca!

PowerPoint com 20 slides lá. Mano, produto que não existia. Eu falei, olha, tá vendo, mano? Mas foi mais lance assim, ó... A identidade dele era judeu e se identificou com vários judeus que tinham lá no investidor então os caras meio que acreditaram nele ele tinha uma lábia ele falou meu pai de tal região ele perguntava para o cara a sua família a família a família a minha família então ele tinha uma lábia Aí também, descobriram, pegaram ele, se fodeu, foi preso. Porque nos Estados Unidos o cara vai preso mesmo, né? Não importa se ele é rico, se fode, o cara manda pra cadeia. Se fodeu, roubou, ficou bilionário também.

Ela ficou 10 anos bilionária, já valeu a pena, já.

Pô, já viveu bem pra caralho, né?

Ela enrolou os velhos muito tempo, né? Passando tempo assim, os velhos lá, tipo... E eles começaram a gostar dela que nem figa, né? Aí os outros assim, você não tá enxergando que ela tá te enrolando, não? E eu assim, tô aprendendo aqui como é que eu vou ser charlatona com essa cara de tacho. Falar assim, não, não investe porque eu tenho certeza que vai dar certo.

Puta que pariu, né, mãe?

A mulher tem ódio. E ela largou o Stanford em dois anos. Ela falou que não precisava daquilo, que ela tava fazendo engenharia química. Ela largou e foi fazer a empresa dela. Por quê? Porque ela começou a namorar indiano lá que tinha 40 milhões pra investir nela. Aí começou a investir, aí os outros começaram a investir também, e foi assim. E ela vai fazer pedaço de sapato.

Tem cara que ele... Como que foi essa história do maluco? Puta, esqueci agora. Não esqueci.

Depois você assiste essa série, você vai gostar. É engraçado.

Como é que é o nome? Drop?

Dropout.

Dropout.

Você chama o que? A Netflix? O que é isso aí?

É Disney, por exemplo.

A Disney?

É.

Tá.

É bem boa. Mas é isso. Aí a gente... Você faz esse aparato aí de valores pra gente saber, porque aí eu já criei enjolade aqui de... Eu vou botar na manga. Eu não vou nem mostrar de primeira pra ele, não. Ele vai falar primeiro.

É, tem que sentir qual que é do cara, mano. E aí? Vai investir mesmo? Não vai? É para esse ano, não é?

É, e talvez ele possa falar assim, é, tipo, eu não tenho dinheiro, mas eu quero fazer esse piloto com vocês, aí vamos ver o que ele vai falar.

Não, mas ele tem que saber que para fazer piloto, ele precisa, tem investimento inicial.

É, mas aí ele pode achar que é, tipo, muitos mil reais, a gente fala, para fazer o investimento inicial, a gente precisa disso aqui, porque não é só a gente, tem outras coisas também envolvidas no processo, tem que falar várias coisas para ele. Mas eu quero que seja bem claro para ele, entendeu? O que precisa e tal. E ele também tem que se comprometer. Beleza, vai fazer esse conto mais acessível aqui com a gente, com esse valor aqui. Mas o que você vai dar em troca, né? Nessa contrapartida. Você vai conseguir conectar a gente com tantas empresas para usar.

E a Firjan, você falou que é lá, né?

É, então, a Cláudia está muito difícil de agenda, assim, para fazer coisa presencial. Eu marquei online mesmo. Eu até esqueci qual foi a data que a Mirna mandou. Deixa eu ver aqui. Falei com ela agora quase. Mas eu já estava montando porque ela já falou tem que ser essa data aqui. Dia 14.

Na sexta-feira.

Dia 14 eu acho que é segunda-feira.

Segunda-feira, é verdade.

É, na outra semana. Porque semana que vem eu vou estar em workshop da Petrobras do dia 9 até dia 11.

Esse final de semana eu vou para o Rio.

Você vai para onde?

Eu vou... A gente vai ver a final da Mangueira.

que legal.

Eu não sei se a gente vai ver alguma coisa na Portela também. Não lembro agora, acho que não. Ô, Laura. A gente só vai na Mangueira ou vai na Portela? Tá. Não, não é certeza então. Mas a Mangueira é certeza. Que é a final, né? A gente vai sexta-feira e volta segunda, que como é feriado, né?

É, eu tinha até esquecido que segunda-feira é feriado.

Segunda é feriado então, a gente vai aproveitar esse feriado aí.

Bom que esse final, essa semana a gente já vai falar com os Hebraia, vai falar com a Neste também e eu já vou mandar o da LED também. Vou terminar aqui a apresentação da LED e vou subir, que eu acho que é até amanhã que vai se inscrever. Minha mãe que viu na Globo, ela falou, se inscreve aí.

Eu acho que o Led já foi.

Não, eu já botei quase tudo. Falta só a apresentação. Acho que é até amanhã. Deixa eu ver aqui se é até hoje. Acho que é até amanhã. Mas eu já subi quase tudo.

Então, esse final de semana a gente vai, coincidentemente, Rock in Rio, né, Cata? A cidade vai tá bombando mano, cê é louco. Vai tá inferno mano.

Até esqueci do Rock in Rio já.

4 E 5 tava vendo aqui.

É, mas tem essa semana, tem outra semana também.

Acho que são duas semanas, né? Dois finais de semana, acho que são.

Eu vou lá que eu tenho que buscar o topo lá. Mas amanhã a gente conversa lá se você consegue participar vai ser bom. Aí se a gente tiver tempinho a gente marca também para preparar alguma coisa para Néstor se a gente tiver alguma dúvida. Néstor quinta na quinta e sexta não tem nada marcado ainda não. Mas eu estou vendo se eu consigo marcar com a menina da Monks para ver o que ela vai querer fazer também.

Tenta agendar com ela uma horinha aí. Uma meia horinha, na sexta, se ela conseguir.

E mandei pra Bblend também, pro Sugino, pra ver quando que ele vai conseguir falar, que agora que a gente tá mais estruturado do que a gente quer fazer, fica mais fácil, né? Separado ali de cada.

Opa!

Fica mais fácil. Se a gente conseguir fazer pouquinho com cada já é uma coisa. Tá bom. Aí a gente espera até a Neste mandar o dinheirão, pra gente conseguir fazer mais. Mas vai dar bom.

Beleza, querida.

Obrigada. Amor, você quer falar alguma coisa? Nem te perguntei, desculpa.

Não, está tudo certinho.

A gente está planejando aqui.

Eu vou sentar com o Paulo Fábio nessa semana para poder fechar as ações do lado que ele está montando, que ele é muito mais de organizar esses pontos. Depois que ele tiver feito isso comigo, a gente senta contigo de novo para você olhar e ver se está faltando alguma coisa também do seu lado.

Eu vou fazer uns desenhos também de arquitetura, para mostrar como funciona o fluxo da informação, como é que vai ser.

Então, é isso que eu achei estranho, porque naquele lá que eu tinha colocado os MVPs, lá eu tinha colocado meio que os direcionamentos, só que acho que desse fornecedor não abriu, não ficou. Deixa eu ver aqui. Porque eu tinha aberto para você, tipo, cada página tinha que ter essas coisas. Eu vou achar aqui direitinho.

mas minha visão é macro, né? Eu digo de sistema, como é que funciona.

É, então, pra você poder entender de onde que...

Eu preciso ver até as relações dentro de banco de dados, como é que funciona, isso aí é uma coisa que eu tenho que estudar ainda, como é que vai funcionar.

É, isso aí eu centro contigo pra fazer. Vamos fazer primeiro esse de fornecedor e o candidato que tá mais perto, aí eu me comprometo aqui também a fazer esses cruzamentos com você, como é que a gente vai fazer. Qual é seu estado, tudo mais. Aí depois a gente vai pro restante que eu acho que vai ser mais complicado. Que é performance. Mais difícil.

Se tiver simples, tá errado.

É, exatamente.

É, é real, mano. Você montar uma plataforma com quatro visões. Quatro não mais, né? Tem vestidor, tem... Pisa pra caralho, mano.

Tão simples.

Fechou. Beleza.

A gente vai por partes.

É, senão não adianta tentar abraçar tudo que não vai. Não rola.

É. Tá bom? Beleza, queridos. Beijo.

Até amanhã, hein? Tchau, tchau.

Você promete? Tem segurança negro?

Sim.

Eu tenho segurança negro, eu tô boa. Segurança cheia faz as coisas rápidas.

Eu tenho.

Hã?

Eu tenho mesmo.

Tem vida agoniada, faz ser nóis. Quatro reais não vai dar pra fazer hoje não, só pra fazer isso. Vamos lá, pegar pouquinho, tá? Cê vai jantar? O que? Era fácil.

No começo, né?

Nossa. Não era uma fase não, que eu faço monte de coisa lá e lá.

Então, eu falei, era mais fácil no.

Começo, você não fazia nada. O povo não sabia nem o que ele tinha que falar pra você fazer.

Não tem nada a ver com o que eu falo. Acho que a reunião com o Cortella vai ser quinta-feira. Vou falar com o Cortella.

Direto com ele?

Mentira.

Já sei qual é o assunto.

Eu que marquei ainda. Eu peguei a ajuda dele, da mulher dele, que ela vai comer. Relaxo. Todo mundo quer entrar na Reunião Cortel agora. Tem 20 pessoas. Daqui a pouco ele vai xingar. Eu quero falar quem era, quem foi cada pessoa, qual é o cargo. Porque tu sabe todo mundo qual é o cargo da pessoa que vai estar lá e quem são as pessoas que vão estar na reunião. Cada hora aparece mais gente, então é uma porra de coisa. É isso, né? Aí o que eu penso que eu faço na minha cabeça? A gente, como divercidade, está com 65%. Dá 25% para ele. A gente, como divercidade, 65%. Ele tem 25% e tem 10% para se a gente quiser botar alguém. De fora.

Tipo, eu quero botar o seu livro como conselheiro. Não é, porque coisa vem de outra parte depois. É, mas é bom ter ali. Eu vou botar vinte e cinco pra ele porque é na minha cabeça. Porque aí eu falei, vinte e cinco, você ganhando pelo que você tá fazendo, você não paga. Se você não for pago, aí eu te dou com nada.

Sim, entendi.

Tá bem, uma volta. Ele tem uma cabeça boa pra pensar em investimento assim.

Ele falou que investe monte de.

Negocinho pequenininho pra existir.

Até agora. Daqui a pouco. Então, a gente tem que arrumar as.

Tarefas aqui pra passar pra você. A gente tem uma coisa em comum. Pelo menos eu e você. Tem mesmo lugar de tarefa comum.

Tá. Eu tenho que pegar o da filha no Cedrai, aí eu vou usar a internet. Tá. Então, eu vou ter O que a gente vai editar com você mais?

Deve ser uma coisa de crédito também.

Foi mesmo?

Mentira.

Chegou.

Ei.

O que é?

Na hora que eu peguei é mais.

Sim. Sim. Sim. Tá bom.

Sync with audio

00:10

/

02:00:17

  

1×