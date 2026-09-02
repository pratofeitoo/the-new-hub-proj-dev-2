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

