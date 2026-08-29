---
title: P01-T02 — Matriz oferta × comprador × capacidade (v1)
task_id: P01-T02
phase: P01
status:
  - concluido
priority: critica
area: business-model
layer: blueprint
owner:
  - PF Rezende
  - Tamara
gap_ids:
  - STR-002
dependencies:
  - P01-T01
target_file: 01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita.md
related_notes:
  - "[[04-project-management/planos-fase/P01_Arquitetura_Oferta_Negocio]]"
  - "[[00-project-control/registro-lacunas/lacunas/STR-002]]"
created: 2026-08-26
updated: 2026-08-27
tags:
  - task
  - fase-P01
---

# P01-T02 — Matriz oferta × comprador × capacidade (v1)

## Objetivo
Construir matriz `oferta × comprador × frente de negócio × unidade responsável × motor de receita` para todas as ofertas candidatas.

## Entregável
Tabela validável em `HUB_Blueprint_Oferta_e_Arquitetura_Receita.md`. Cada oferta: nome, unidade dona (A), comprador primário, JTBD, troca de valor, motor receita, premissa aberta linkada a gap.

## Dependências
- [[04-project-management/tarefas/P01-T01_Matriz_4_Unidades|P01-T01]]

## Critério de refinamento (G01.1/G01.2)
Nenhuma oferta em 2 unidades sem regra de propriedade + acordo intragrupo anotado.

## Registros relacionados
- [[00-project-control/registro-lacunas/lacunas/STR-002]]

## Execução

- **Entregável produzido:** matriz oferta → comprador → unidade → capacidade → operação → receita → gap adicionada em [[01-blueprint/modelo-negocio/HUB_Blueprint_Oferta_e_Arquitetura_Receita#2.1 Matriz oferta → comprador → unidade → capacidade → operação → receita → gap]].
- **Cobertura:** 17 ofertas candidatas nas frentes Mídia e Experiências, Impacto Financiável e Ecossistemas Empresariais.
- **Resultado:** cada linha possui unidade dona, capacidade principal, operação/troca de valor, motor de receita e gap vinculado.
- **Próximo ciclo de refinamento:** investigar compradores, JTBD, parceiros, riscos e classificação de receita; manter hipóteses explícitas e não tratá-las como decisões finais.

## Verificação estrutural de STR-002 — 2026-08-27

O inventário foi reconciliado com a matriz §2.1 e com os segmentos de lançamento §2.2.

| Critério | Resultado | Evidência |
|---|---|---|
| Ofertas cobertas | **17/17** | 5 em Mídia e Experiências; 6 em Impacto Financiável; 6 em Ecossistemas Empresariais |
| Propriedade única | **17/17** | 11 ofertas sob HUB Negócios (N) e 6 sob Instituto HUB (I); nenhuma oferta tem duas unidades donas |
| Comprador primário | **17/17** | Cada linha identifica o grupo comprador; os papéis de assinatura, pagamento e operação estão qualificados nos segmentos §2.2 |
| Troca de valor / operação | **17/17** | Cada linha descreve a operação e o valor entregue ao comprador |
| Motor econômico | **17/17** | Cada linha possui motor de receita; recorrência, marketplace e classificação contábil permanecem hipóteses quando indicado |
| Gap rastreável | **17/17** | Cada linha aponta STR-002 e os gaps complementares aplicáveis |

### Resultado da verificação estrutural

- **Propriedade:** coerente em nível de Blueprint; a unidade dona está delineada por oferta e não é alterada pelo uso de capacidades compartilhadas.
- **Comprador:** definido em nível de segmento e função compradora; ainda não é comprador nomeado nem evidência de demanda.
- **Economia:** motor de receita e faixa de teste estão definidos como hipóteses; não constituem preço, margem, ARR, receita reconhecida ou tração.
- **Condição G01.1/G01.2:** atendida estruturalmente para a versão v1, sem sobreposição de unidade dona.

### Pendências para o próximo ciclo de refinamento

- Refinar o perfil do comprador e a autoridade de contratação para a primeira oferta de cada segmento; não são compradores nomeados nesta camada.
- Refinar JTBD, hipóteses de orçamento, custo de entrega, limite de serviço e economia unitária; não buscar confirmação financeira nesta camada.
- Registrar evidências de demanda no log GTM-002; manter qualquer rota como hipótese até haver evidência suficiente.
- Refinar a classificação e o reconhecimento de receita com as hipóteses de Finanças em FIN-002.
- Registrar o parecer interno do owner de STR-002; a validação estrutural não equivale a aprovação interfuncional.

## Fichas operacionais das ofertas — v1 — 2026-08-27

As fichas abaixo tornam explícitas as hipóteses de execução para as 17 ofertas da matriz §2.1. `JTBD` significa o trabalho que o comprador precisa realizar. Compradores, parceiros, riscos e critérios são hipóteses operacionais para desenho e teste; não representam demanda validada, contrato, preço ou compromisso de entrega.

### Mídia e Experiências

#### 1. Estratégia de campanha ou conteúdo

- **JTBD:** transformar um objetivo de marca ou comunicação em uma campanha com público, mensagem, canais, entregáveis e medidas coerentes.
- **Comprador:** diretor(a) de Marketing, Comunicação, Marca ou RH de empresa, instituição ou associação; sponsor econômico e usuário operacional devem ser identificados no cenário real.
- **Parceiros:** criação, mídia, pesquisa, distribuição e produção de conteúdo, conforme escopo.
- **Riscos:** briefing ambíguo; escopo de produção maior que a capacidade; atribuição indevida de impacto; conflito entre marca, público e mensagem.
- **Critérios de sucesso:** briefing confirmado como entrada; estratégia, público, mensagens, plano de canais e responsáveis documentados; retorno sobre entregáveis registrado quando houver interação de teste; aprendizado registrado com fonte e data.

#### 2. Eventos e experiências inclusivas

- **JTBD:** projetar e operar uma experiência inclusiva que coordene participantes, fornecedores, acessibilidade, logística e evidências de participação.
- **Comprador:** dono(a) do evento, marca, instituição ou convenor de ecossistema responsável por orçamento e resultado da experiência.
- **Parceiros:** produção de eventos, acessibilidade, cultura, conteúdo, mídia, pesquisa e fornecedores locais.
- **Riscos:** falhas logísticas ou de acessibilidade; dependência de fornecedor; incidentes de segurança; baixa participação; evidência de resultado insuficiente.
- **Critérios de sucesso:** plano operacional com contingências; requisitos de acessibilidade e segurança registrados; execução dentro do escopo; incidentes tratados; participação e feedback documentados.

#### 3. Ativação de empregador ou marca

- **JTBD:** configurar e executar uma ativação que conecte uma marca ou empregador a uma audiência e produza evidência de participação e aprendizado.
- **Comprador:** líder de Marca, Marketing, Comunicação ou RH com autoridade sobre a ativação e o orçamento.
- **Parceiros:** criação, mídia, eventos, cultura, pesquisa e canais de distribuição.
- **Riscos:** desalinhamento entre marca e experiência; alegações não comprovadas; baixa adesão; dependência de canal; dados de participantes sem finalidade clara.
- **Critérios de sucesso:** objetivo e audiência definidos; jornada e ativos entregues; consentimento e uso de dados documentados; participação medida; relatório de aprendizado entregue.

#### 4. Comunicações orientadas por insights

- **JTBD:** converter sinais confiáveis do ecossistema em comunicação acionável para uma decisão ou mudança de comportamento do comprador.
- **Comprador:** líder de Marketing, Comunicação, Estratégia ou Programa em empresa, instituição ou associação.
- **Parceiros:** pesquisa, dados, conteúdo, mídia, especialistas de domínio e distribuição.
- **Riscos:** dados insuficientes ou enviesados; interpretação causal indevida; exposição de informação sensível; comunicação sem ação operacional.
- **Critérios de sucesso:** fontes e limitações registradas; insight ligado a decisão ou ação; mensagem produzida e revisada; destinatários definidos; resultado e aprendizado acompanhados.

#### 5. Pacote de medição e aprendizado

- **JTBD:** definir medidas úteis, coletar evidências e devolver aprendizado operacional sobre uma campanha, evento ou programa.
- **Comprador:** líder de Marketing, Programa, Impacto, Operações ou dono(a) de evento que precisa demonstrar execução e aprender.
- **Parceiros:** pesquisa, avaliação, dados, tecnologia de instrumentação e avaliadores independentes quando necessário.
- **Riscos:** métrica sem decisão associada; dados incompletos; mistura entre resultado e atividade; atribuição exagerada; custo de medição desproporcional.
- **Critérios de sucesso:** teoria de medida e baseline documentados; fontes e linhagem registradas; limitações explicitadas; relatório entregue no prazo; pelo menos uma decisão de melhoria vinculada ao aprendizado.

### Impacto Financiável

#### 6. Diagnóstico de impacto

- **JTBD:** estruturar problema, população, contexto e resultados possíveis sem prometer impacto ainda não demonstrado.
- **Comprador:** diretor(a) de Programa, Impacto ou Grants de fundação, instituição ou financiador.
- **Parceiros:** organizações de implementação, pesquisadores, avaliadores, instituições públicas e representantes da população afetada.
- **Riscos:** diagnóstico sem participação da população; escopo inviável; confusão entre atividade e impacto; exposição de dados sensíveis; promessa causal indevida.
- **Critérios de sucesso:** problema e população delimitados; hipóteses de resultado e limitações registradas; fontes e participação documentadas; alternativas consideradas; decisão de próximo desenho registrada.

#### 7. Arquitetura de programa

- **JTBD:** transformar um problema de impacto em programa com objetivos, intervenções, governança, indicadores, orçamento e responsabilidades.
- **Comprador:** financiador ou instituição com autoridade sobre o desenho e instrumento de funding.
- **Parceiros:** organizações de implementação, avaliadores, especialistas, educadores e instituições públicas ou comunitárias.
- **Riscos:** teoria de mudança inconsistente; responsabilidades difusas; orçamento incompatível; indicadores não mensuráveis; dependência de funding condicionado.
- **Critérios de sucesso:** objetivos e intervenções vinculados; RACI e governança definidos; indicadores e fontes descritos; orçamento e elegibilidade mapeados; plano de aprendizado registrado como artefato de trabalho.

#### 8. Portfólio de intervenções financiado

- **JTBD:** selecionar e coordenar intervenções elegíveis, controlando recursos, execução, riscos e reporte de um programa financiado.
- **Comprador:** financiador de interesse público ou empresa com orçamento de impacto restrito.
- **Parceiros:** organizações executoras, instituições locais, avaliadores, auditores e fornecedores especializados.
- **Riscos:** uso inelegível de recursos; dependência de uma única organização; falha de execução; dupla contagem de resultados; mistura com economia comercial.
- **Critérios de sucesso:** critérios de elegibilidade aplicados; intervenção e executor registrados; ledger e custos elegíveis separados; marcos monitorados; desvios e ações corretivas documentados.

#### 9. Monitoramento, avaliação e aprendizado

- **JTBD:** medir execução e resultados, explicar limitações e orientar ajustes de programa com evidência rastreável.
- **Comprador:** financiador, instituição, diretor(a) de programa ou avaliador responsável pelo reporte.
- **Parceiros:** avaliadores independentes, pesquisadores, organizações de implementação, coleta de dados e especialistas de domínio.
- **Riscos:** viés de seleção; baixa qualidade de dados; indicadores incompatíveis; inferência causal indevida; conflito de interesse do avaliador.
- **Critérios de sucesso:** plano de medição e periodicidade definidos; dados com linhagem e controles; resultados separados de interpretação; limitações publicadas; ciclo de melhoria documentado.

#### 10. Academia de capacidades

- **JTBD:** desenvolver capacidades de equipes ou participantes usando método, prática, acompanhamento e evidência de aprendizagem.
- **Comprador:** instituição, organização de implementação, financiador ou líder responsável por educação e capacidades.
- **Parceiros:** educadores, especialistas de conteúdo, instituições de ensino e organizações de implementação.
- **Riscos:** conteúdo genérico; baixa adesão; capacidade não aplicada no trabalho; certificação sem evidência; tratamento inadequado de dados de participantes.
- **Critérios de sucesso:** público e competência-alvo definidos; trilha e prática entregues; participação e conclusão registradas; aplicação observada ou autoavaliada; melhoria da trilha documentada.

#### 11. Reporte de impacto restrito

- **JTBD:** prestar contas do uso de funding restrito, resultados, limitações e desvios em formato auditável.
- **Comprador:** financiador ou instituição concedente; usuário principal é o responsável pelo programa e pelo reporte.
- **Parceiros:** avaliadores, auditores, organizações executoras e responsáveis financeiros.
- **Riscos:** mistura de ledger; custos sem elegibilidade; números sem fonte; omissão de limitações; divulgação de dados identificáveis.
- **Critérios de sucesso:** período, instrumento e elegibilidade identificados; ledger reconciliado; despesas e resultados com evidência; limitações e desvios descritos; reporte entregue e versionado.

### Ecossistemas Empresariais

#### 12. Inteligência de ecossistema

- **JTBD:** mapear atores, necessidades e relações para apoiar uma decisão de ecossistema com fontes e incertezas explícitas.
- **Comprador:** executivo(a) de ecossistema, inovação, programa ou comprador corporativo.
- **Parceiros:** associações, federações, pesquisa, CRM/procurement, especialistas e fontes institucionais.
- **Riscos:** mapa desatualizado; conflito de interesse; identificação incorreta; uso de dados sem finalidade; insight não convertido em decisão.
- **Critérios de sucesso:** escopo e população definidos; entidades identificadas com proveniência; relações qualificadas; lacunas e confiança registradas; recomendação ligada a decisão do comprador.

#### 13. Descoberta de fornecedores e talentos

- **JTBD:** encontrar, verificar e apresentar alternativas qualificadas para uma necessidade de compra ou capacidade.
- **Comprador:** líder de Procurement, Suprimentos, RH, Operações ou comprador corporativo; fornecedores e especialistas são participantes, não necessariamente compradores.
- **Parceiros:** fornecedores, especialistas, associações, redes profissionais e sistemas de procurement/CRM.
- **Riscos:** perfil desatualizado; recomendação enviesada; ausência de due diligence; tratamento de match como contratação ou tração; dados pessoais excessivos.
- **Critérios de sucesso:** necessidade e critérios registrados; perfis verificados na data; alternativas comparáveis apresentadas; conflito e limitações declarados; retorno do comprador registrado quando houver interação de teste.

#### 14. Conexões qualificadas e pareamento de oportunidades

- **JTBD:** qualificar critérios de uma oportunidade, realizar pareamento responsável e acompanhar o resultado após a conexão.
- **Comprador:** comprador corporativo, fornecedor, especialista ou dono de oportunidade, conforme o caso de uso e contrato.
- **Parceiros:** associações, federações, redes institucionais, especialistas, fornecedores e sistemas de CRM.
- **Riscos:** match sem autoridade ou orçamento; conflito de interesse; exposição de dados; resultado atribuído ao HUB sem evidência; incentivo a volume em vez de qualidade.
- **Critérios de sucesso:** critérios e consentimentos registrados; match justificável; conexão aceita pelas partes; próximo passo e owner definidos; resultado, não-resultado ou encerramento documentado.

#### 15. Programas de procurement e capacidades

- **JTBD:** diagnosticar um processo de procurement, configurar programa de melhoria e desenvolver capacidades com adoção mensurável.
- **Comprador:** diretor(a) de Procurement, Suprimentos, RH ou Operações de empresa, associação ou federação.
- **Parceiros:** provedores de procurement/HR/CRM, fornecedores qualificados, educadores e especialistas de processo.
- **Riscos:** integração inviável; resistência interna; violação de política de compras; seleção parcial; promessa de economia sem baseline.
- **Critérios de sucesso:** baseline e problema definidos; programa e responsabilidades documentados; configuração e treinamento entregues; adoção e qualidade medidas; melhoria comparada ao baseline sem alegação não sustentada.

#### 16. Acesso empresarial à Plataforma

- **JTBD:** provisionar acesso seguro e suportado a capacidades de plataforma para que uma organização execute seu fluxo de trabalho e acompanhe métricas de serviço.
- **Comprador:** sponsor executivo, Operações, Inovação, Tecnologia ou unidade de negócio responsável pelo orçamento.
- **Parceiros:** integração, identidade, segurança, dados, suporte e fornecedores de tecnologia necessários ao ambiente do cliente.
- **Riscos:** fronteira confusa entre implementação e serviço; permissões excessivas; indisponibilidade; tratamento inadequado de dados; custo de suporte maior que a receita.
- **Critérios de sucesso:** tenant, usuários, permissões e finalidade definidos; controles de segurança e dados registrados; onboarding concluído; SLO e suporte documentados; uso e incidentes acompanhados.

#### 17. Implementação e evolução

- **JTBD:** configurar uma solução, conduzir rollout, operar suporte inicial e evoluir o serviço com controle de mudanças.
- **Comprador:** comprador corporativo ou dono de ecossistema responsável por implementação, adoção e evolução.
- **Parceiros:** Plataforma HUB, integração, dados, segurança, especialistas de domínio e fornecedores do cliente.
- **Riscos:** escopo aberto; dependência de dados ou parceiro; mudança sem critério interno; rollout prematuro; suporte sem limite de serviço.
- **Critérios de sucesso:** plano de rollout e critérios de verificação definidos; configuração testada; treinamento e suporte descritos; mudanças versionadas; adoção, incidentes e backlog de evolução registrados.

## Matriz de prontidão operacional

| Frente | Ofertas | Unidade dona | Ficha operacional | Próximo artefato de refinamento |
|---|---:|---|---|---|
| Mídia e Experiências | 5 | HUB Negócios | Completa em v1 | Executar cenário SEG-01 |
| Impacto Financiável | 6 | Instituto HUB | Completa em v1 | Executar cenários SEG-04/SEG-05 |
| Ecossistemas Empresariais | 6 | HUB Negócios | Completa em v1 | Executar cenários SEG-02/SEG-03/SEG-06 |
| **Total** | **17** | **N/I** | **17/17** | 6 cenários de teste criados |

As fichas não encerram o refinamento de `STR-002`: perfil de comprador, evidência de demanda, economia unitária, classificação financeira e parecer interno continuam como hipóteses e pontos de investigação.

## Cenários de teste por segmento

| Segmento | Cenário | Oferta escolhida | Arquivo |
|---|---|---|---|
| SEG-01 | Empresas com agenda de marca, comunicação ou empregador | Ativação de empregador ou marca | [[04-project-management/cenarios/P01-S01_SEG-01_Empresas_Marca_Comunicacao_Empregador\|P01-S01]] |
| SEG-02 | Donos de ecossistemas, associações e federações | Programas de procurement e capacidades | [[04-project-management/cenarios/P01-S02_SEG-02_Ecossistemas_Associacoes_Federacoes\|P01-S02]] |
| SEG-03 | Compradores corporativos de procurement e RH | Programas de procurement e capacidades | [[04-project-management/cenarios/P01-S03_SEG-03_Compradores_Procurement_RH\|P01-S03]] |
| SEG-04 | Fundações e financiadores de interesse público | Arquitetura de programa | [[04-project-management/cenarios/P01-S04_SEG-04_Fundacoes_Financiadores_Impacto\|P01-S04]] |
| SEG-05 | Instituições com agenda de impacto e educação | Academia de capacidades | [[04-project-management/cenarios/P01-S05_SEG-05_Instituicoes_Impacto_Educacao\|P01-S05]] |
| SEG-06 | Empresas e instituições compradoras de acesso à Plataforma | Acesso empresarial à Plataforma | [[04-project-management/cenarios/P01-S06_SEG-06_Acesso_Empresarial_Plataforma\|P01-S06]] |

Os cenários permanecem no estado `hypothesis`. A execução futura deve registrar entradas, observações, resultados e aprendizados sem converter automaticamente o cenário em validação ou tração.
