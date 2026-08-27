# Requisitos do Modelo Financeiro do HUB v2

**Status:** Requisitos para apoio à decisão, não uma previsão
**Escopo:** Precificação, economia unitária, motor de receita e plano de capital para os primeiros 12–18 meses
**Regra de evidência:** Valores desconhecidos permanecem como `TBD`, hipóteses ou evidências necessárias. Este documento não inventa preços, margens, CAC, tração ou valores de financiamento.

## 1. Objetivo e limite do modelo

O modelo deve determinar se o HUB v2 será inicialmente **orientado por serviços, orientado por software ou um híbrido deliberado**, e mostrar o caminho de transição. Deve apoiar o plano de prontidão para investidores do v2 sem tratar todo o portfólio do v1 como um negócio de lançamento igualmente prioritário.

Modelar separadamente:

- O comprador-alvo do beachhead e o caso de uso inicial (a ser decidido por discovery).
- O primeiro piloto pago ou explicitamente financiado.
- Pacotes pós-piloto repetíveis.
- Opções de expansão que não são necessárias nos primeiros 18 meses.
- Economia de Grupo/empresa comercial versus economia de Instituto/projeto de impacto.

Não combinar receitas, custos ou fluxos de caixa não relacionados apenas para produzir um total atraente. Cada linha precisa de um pagador, mecanismo contratual, responsável pela entrega, timing, custo direto e status de evidência.

## 2. Motores de receita candidatos

O plano v2 exige um motor primário para os primeiros 18 meses. Os seguintes são candidatos, não decisões:

| Motor candidato | Pagador e contrato | Unidade de valor a testar | Carga direta de entrega | Evidência necessária antes da seleção |
|---|---|---|---|---|
| Licenciamento de ecossistema | Entidade/parceiro; licença anual ou ambiente configurado | Ambiente do parceiro, coorte ou ecossistema ativo; unidade exata TBD | Configuração, integração, sucesso do parceiro, suporte, governança | Comprador nomeado, responsável pelo orçamento, esforço de configuração repetível, responsável pela renovação, risco de concentração |
| Assinatura empresarial | Empresa; plano recorrente por organização, usuários ou módulos | Organização, usuários ativos, módulos ou uso; unidade exata TBD | Suporte ao produto, operações de software, metodologia e sucesso da conta | Disposição a pagar, ativação, uso recorrente, gatilho de renovação, custo de software/conta |
| Adoção da plataforma orientada por implementação | Entidade/empresa; taxa de projeto mais possível cobrança recorrente da plataforma | Projeto de implementação e conta/coorte implantada | Alta carga inicial de serviços e gestão da mudança | Piloto pago, horas por função, resultado da entrega, componentes reutilizáveis, customização não proporcional |
| Programa de diagnóstico e evolução | Empresa/entidade; taxa de avaliação e jornada, com renovação opcional | Avaliação, coorte, jornada ou revisão de evidências | Metodologia, facilitação, curadoria, relatórios | Demanda paga por diagnóstico, conclusão, resultado mensurável, evidência de conversão/renovação |

Motores potencialmente expansíveis, mas não de prioridade inicial equivalente:

- **Marketplace:** taxa de fornecedor, taxa por lead qualificado, comissão ou taxa de transação. Exige um limiar de liquidez definido e desenho transacional/jurídico. Não deve ser previsto como material antes de serem observados demanda qualificada, matches concluídos, demanda repetida e take rate.
- **Mídia e experiências:** patrocínios de marca/patrocinador, conteúdo, eventos e ativações. Tratar como receita de projeto/patrocínio, com economia separada de produção de eventos, e não como ARR recorrente da plataforma.
- **Financiamento de impacto:** subvenções, financiamento por lei de incentivo, fundos públicos ou investimento social operado pelo Instituto. Tratar como financiamento restrito/de projeto, com restrições de elegibilidade, marcos, prestação de contas e alocação de custos, não como receita recorrente comercial ordinária.
- **Selo HUB:** taxas de avaliação e renovação podem ser uma linha de expansão somente depois que independência, critérios, custo de auditoria e controles de conflito forem críveis.

### Requisito de decisão do motor

Pontuar cada candidato com base em evidências, não em narrativa: acesso ao comprador, intensidade da dor, autoridade orçamentária, tempo até o valor, repetibilidade, potencial de margem bruta, custo de atendimento, risco do ciclo de vendas, complexidade de dados/jurídica, risco de concentração e adequação à expansão. Selecionar um motor primário; documentar os demais como opções de expansão, com condições explícitas de adiamento.

## 3. Contradições e regras de resolução

O documento v1 lista licenciamento, assinatura, diagnóstico/selo, marketplace, implementação, mídia e impacto como fontes paralelas, enquanto sua escada de produto coloca assinatura/jornada antes de licenciamento e trata marketplace e projetos como expansão. O plano v2, por sua vez, exige um motor primário. Resolver essa tensão da seguinte forma:

1. **Assinatura versus licenciamento:** São movimentos diferentes de pagador e implantação. Não usar “assinatura/licença” como uma única linha combinada. Modelar assinatura empresarial por empresa/conta separadamente de licença de ecossistema por ambiente/coorte do parceiro. Uma licença paga pelo parceiro pode subsidiar o acesso dos participantes; registrar explicitamente o subsídio e o pagador.
2. **Implementação versus software:** A implementação pode ser o motor inicial de caixa enquanto a receita recorrente de software é comprovada. Separar receita e custo de implementação pontuais da receita recorrente da plataforma e do custo da conta. Não classificar bookings de implementação como ARR.
3. **Diagnóstico/evolução versus assinatura:** Um diagnóstico pago pode ser um produto de entrada ou o programa principal. Testar se o valor termina com o relatório/jornada ou exige acesso contínuo à plataforma. A evidência de renovação determina se é receita recorrente ou de projeto.
4. **Marketplace versus plataforma principal:** As comissões do marketplace dependem de demanda, qualidade da oferta, matching, conversão e atividade repetida. Não presumir liquidez ou receita transacional pela existência de um catálogo. Adiar a expansão do marketplace quando o limiar de liquidez pré-registrado não for atingido.
5. **Mídia versus plataforma:** Receita de patrocínio e eventos pode ser valiosa, mas é receita de campanha/projeto, com timing irregular. Mantê-la fora das métricas de software recorrente e modelar separadamente o risco de entrega do evento.
6. **Impacto versus receita comercial:** Projetos do Instituto podem ser financiados ou subsidiados para resultados de interesse público. Separar fundos restritos, custos elegíveis, overhead de prestação de contas e resultados dos beneficiários da receita de clientes comerciais. Nunca usar financiamento de impacto para sugerir disposição comercial a pagar.
7. **Selo versus geração de demanda:** O reconhecimento pode apoiar aquisição ou expansão, mas não pode ser tratado como premissa de receita até que governança independente, custo de avaliação, demanda de renovação e controles de conflito de interesses sejam comprovados.

## 4. Requisitos de precificação e empacotamento

Construir uma tabela comercial para cada pacote candidato. Nenhum preço deve ser preenchido sem evidência observada ou uma hipótese de teste claramente identificada.

| Pacote | Campos obrigatórios |
|---|---|
| Discovery/diagnóstico | Comprador-alvo; escopo; entrega; baseline; horas de entrega por função; requisitos de dados/jurídicos; faixa de preço hipotética; caminho de conversão |
| Piloto | Comprador/patrocinador nomeado; coorte de participantes; início/fim; escopo do produto; responsabilidades de implementação; limiar de sucesso; termos pagos ou explicitamente subsidiados; decisão de renovação/expansão |
| Assinatura anual | Pagador; organizações/usuários/módulos/uso incluídos; onboarding; suporte; resultado; faixa de preço hipotética; regras de excedente; termos de renovação e expansão |
| Licença anual de ecossistema | Ambiente do parceiro e limites de customização; alocação de coorte/organização; implementação; suporte/SLA; direitos sobre dados; renovação; exposição à concentração |
| Implementação | Base fixa, por marcos ou por tempo e materiais; premissas; critérios de aceitação; regras de change order; custo de entrega; hipótese de meta de margem |
| Módulos opcionais | Resultado do módulo; custo incremental de entrega/software; elegibilidade; gatilho de adesão; hipótese de preço; risco de canibalização |
| Avaliação/renovação do Selo | Avaliador independente; critérios; carga de evidências; custo de auditoria; hipótese de taxa; frequência de renovação; processo de recurso/conflito |

Os testes de preço devem registrar preço cotado, reação do comprador, motivo da aceitação/rejeição, fonte do orçamento, restrições de compras, desconto e próxima ação. Definir a autoridade para descontos e a margem de contribuição mínima aceitável antes de vender.

## 5. Inputs mínimos do modelo

Cada input precisa de fonte, data, classe de confiança (`proven`, `observed`, `hypothesis`, `decision` ou `option`), responsável e próxima ação de evidência.

### Inputs comerciais

- Compradores e organizações alcançáveis por comprador.
- Tipo de comprador, pagador, responsável pelo orçamento, rota de compras e concentração de parceiros.
- Pacote, prazo contratual, calendário de cobrança, condições de pagamento, desconto, reembolsos, impostos e premissa de inadimplência.
- Quantidades do funil de vendas e taxas de conversão por etapa.
- Duração do ciclo de vendas e tempo entre assinatura e recebimento de caixa.
- Taxas de conversão de piloto para renovação e de renovação para expansão.
- Tamanho da coorte, usuários/organizações ativos, adesão a módulos, uso e definição de ativação.

### Inputs de entrega e custos

- Horas de implementação por função e custo-hora carregado.
- Horas de metodologia, facilitação, curadoria, auditoria, suporte e sucesso do cliente.
- Custos de software/cloud/API/licenciamento por conta, usuário, organização ou unidade de uso.
- Processamento de pagamentos, operações do marketplace, produção de eventos e custos de integração de parceiros.
- Política de alocação de overhead compartilhado, incluindo jurídico, finanças, segurança, dados e governança.
- Volume de suporte, compromissos de resposta, retrabalho e frequência de customização/change order.
- Datas de início de contratação, remuneração/encargos, contratados e restrições de capacidade.

### Inputs de capital e caixa

- Caixa inicial e fundos restritos versus irrestritos (se aplicável).
- Custos operacionais fixos mensais e custos variáveis de entrega.
- Prazo de contas a receber, prazo de contas a pagar, depósitos, cobrança por marcos e necessidades de capital de giro.
- Orçamentos de produto/tecnologia, jurídico/dados/IP, governança do Selo, vendas/piloto e reserva operacional.
- Fonte de financiamento, instrumento, restrições, data de disponibilidade e condições de tranche; os valores permanecem TBD até que evidências e decisões sejam aprovadas.

## 6. Fórmulas obrigatórias

Usar fórmulas no nível de conta/coorte antes de agregar. Definir todos os denominadores e janelas de tempo no modelo.

### Receita e contribuição

- `Gross billings = contracted price × quantity × term adjustments`
- `Recognized revenue = billings allocated to delivered obligations by period`
- `Net revenue = recognized revenue − discounts − refunds − credits − pass-through amounts − applicable taxes`
- `Direct cost = implementation labor + delivery labor + support/curation + software/hosting/API + payment/transaction costs + other attributable costs`
- `Contribution profit = net revenue − direct cost`
- `Gross margin = contribution profit / net revenue`
- `Contribution margin per account = net revenue per account − direct cost per account`

### Economia recorrente

- `ARR = recurring annualized subscription/license revenue only`
- `MRR = recurring revenue expected in the month; exclude one-time implementation, events, grants, and pass-through funds`
- `Net revenue retention = (opening recurring revenue − contraction − churn + expansion) / opening recurring revenue`
- `Logo retention = renewed customers / customers eligible to renew`
- `Activation rate = activated accounts or organizations / contracted accounts or organizations`
- `Expansion rate = accounts with paid expansion / renewed accounts` (definir janela da coorte)

### Aquisição e payback

- `CAC = attributable sales and marketing spend / new paying customers` (usar uma janela de atribuição declarada)
- `Fully loaded CAC = attributable sales and marketing spend + attributable pre-sales/onboarding acquisition effort / new paying customers`
- `CAC payback months = CAC / monthly contribution profit per retained customer`
- `Sales efficiency = new net recurring revenue / sales and marketing spend` (somente depois que a receita recorrente for real e a janela da coorte estiver especificada)

### Capacidade de serviço e escalabilidade

- `Cost to serve one additional organization = incremental delivery + support + curation + software/usage cost`
- `Implementation utilization = billable implementation hours / available implementation hours`
- `Customization ratio = custom delivery hours / total delivery hours`
- `Revenue per delivery FTE = attributable revenue / delivery FTE`
- `Operating leverage = growth rate of net revenue − growth rate of operating expense`

Para cenários de marketplace:

- `GMV = completed transaction value`
- `Take rate = marketplace revenue / GMV`
- `Marketplace contribution = marketplace revenue − payment costs − curation − matching/support − dispute/refund costs`
- `Liquidity = qualified demand, completed matches, and repeat demand measured in a defined review period`; os limiares são TBD e devem ser escritos antes do piloto.

Para cenários de impacto/mídia, reportar separadamente financiamento restrito, custo elegível do programa, contribuição irrestrita e métricas de resultado; nunca incorporá-los ao SaaS ARR ou ao CAC comercial.

## 7. Cenários e sensibilidades

Criar cenários conservador, base e de alta. Os cenários devem variar premissas, não apenas aplicar ajustes percentuais arbitrários.

Variar no mínimo:

- Quantidade/alcançabilidade de compradores e tamanho da coorte.
- Duração do ciclo de vendas, conversão por etapa, atraso de pagamento e concentração.
- Conversão do piloto, ativação, renovação, churn, expansão e descontos.
- Horas de implementação, proporção de customização, carga de suporte e inflação de custos.
- Custo de software/uso por conta e capacidade de entrega.
- Liquidez e take rate do marketplace, somente depois que existir evidência de baseline.
- Timing de mídia/projetos e disponibilidade de financiamento de impacto, separadamente da receita recorrente.
- Disponibilidade de financiamento, cenário de atraso e plano operacional mínimo viável.

Mostrar runway de caixa, timing de break-even (se houver), contribuição acumulada, capacidade de contratação e entrega de marcos em cada cenário. As tabelas de sensibilidade devem identificar quais desconhecidos mais alteram o runway ou a margem bruta.

## 8. Requisitos do plano de capital

O plano de capital deve especificar o capital necessário para 12–18 meses sem afirmar um valor antes de existir um modelo operacional.

Visões obrigatórias:

- Fluxo de caixa mensal e runway por cenário.
- Sequência de contratações vinculada à capacidade e aos marcos, não a uma aspiração de headcount.
- Orçamento de produto/tecnologia e marcos de release.
- Orçamento jurídico, dados, IP, segurança e governança do Selo.
- Orçamento de vendas, discovery de clientes, entrega do piloto e estudo de caso.
- Política de reserva operacional e piso mínimo de caixa.
- Capital restrito versus irrestrito e usos permitidos.
- Tranches de financiamento e evidências/marcos liberados por cada tranche.
- Plano de financiamento atrasado/sem financiamento externo: reduzir escopo, adiar contratações, preservar a entrega do piloto e identificar alternativas formalmente financiadas.

Os pedidos de capital devem reconciliar-se com um plano de marcos: decisão de beachhead/caso de uso; piloto pago; resultado mensurável; pacote repetível; renovação ou segundo comprador comparável; evidência de economia unitária; expansão controlada. Não solicitar capital de expansão antes que retenção, margem bruta, custo de atendimento e resultados dos clientes sustentem o caminho de escala selecionado.

## 9. Gates de decisão

### Gate A — Selecionar o motor primário

Prosseguir somente quando o discovery identificar um problema doloroso, um decisor acessível, um pagador/orçamento crível e uma prova de valor definida. Escolher um motor; manter as demais linhas como opções.

### Gate B — Autorizar o piloto

Exigir declaração escrita do problema, patrocinador nomeado, coorte, termos comerciais/de financiamento, baseline, escopo, responsabilidades, permissões de dados, limiares de sucesso e decisão de renovação/expansão.

### Gate C — Precificar e empacotar

Exigir reações observadas ao preço ou termos assinados, estimativa do custo de entrega, autoridade para descontos, condições de pagamento e hipótese de margem de contribuição. Um “piloto gratuito” deve ser explicitamente subsidiado e seu subsídio rastreado.

### Gate D — Repetibilidade

Exigir relatório de resultados, estimativa de tempo de entrega, pacote padrão, componentes reutilizáveis e evidência de que o trabalho customizado não cresce proporcionalmente à receita.

### Gate E — Escalar e financiar

Exigir a primeira renovação ou um segundo comprador comparável, além de evidências de retenção, margem bruta, custo de atendimento e resultados. A expansão do marketplace exige adicionalmente limiares de liquidez pré-registrados. A concentração de parceiros deve permanecer abaixo de um limite pré-registrado.

### Respostas de encerramento ou pausa

- Compradores elogiam o conceito, mas não financiarão um piloto: revisitar comprador, problema ou prova antes de investir em mais tecnologia.
- Baixa conclusão do diagnóstico: simplificar a jornada e reavaliar os incentivos.
- Implementação manual excessiva: estreitar o escopo ou redesenhar as operações.
- Ausência de resultado mensurável no piloto: interromper a expansão e revisar a intervenção.
- Renovação fraca: não presumir valor recorrente.
- Marketplace abaixo do limiar: adiar a expansão do marketplace e concentrar-se em um workflow orientado por demanda.
- Customização repetida: impor limites de configuração ou rejeitar o negócio.
- Independência do Selo não crível: separar, redesenhar ou suspender o produto de reconhecimento.

## 10. Requisitos de evidência para investidores

O modelo/data room final deve incluir:

- Registro de premissas com classe de evidência, fonte, data, responsável e plano de validação.
- Planilha de precificação e empacotamento com termos cotados/testados e reações dos compradores.
- Contrato do piloto ou acordo escrito de financiamento, baseline, relatório de resultados e proposta de renovação/expansão.
- Construção do custo de entrega no nível da conta: horas, funções, software, curadoria, suporte e retrabalho.
- Relatório de retenção, ativação, expansão e custo de atendimento da coorte.
- Modelo do funil com definições de etapas, evidência do ciclo de vendas, metodologia de CAC e timing de pagamentos.
- Ponte de qualidade da receita separando receita comercial recorrente, serviços pontuais, marketplace, mídia/projetos e fundos de impacto restritos.
- Modelo de três anos com cenários conservador/base/de alta e análise de sensibilidade.
- Plano de capital, fluxo de caixa mensal, runway, marcos das tranches e plano de financiamento atrasado.
- Scorecard de liquidez do marketplace e cálculo de concentração de parceiros, mesmo que a expansão seja adiada.
- Mapa jurídico/de dados/IP e evidência de independência do Selo HUB quando aplicável.

## 11. Decisões em aberto e desconhecidos explícitos

Os seguintes itens devem permanecer sem resolução até que sejam obtidas evidências:

- Comprador do beachhead e caso de uso inicial.
- Motor primário e unidade de pagador/valor.
- Faixas de preço, política de descontos, prazo contratual e condições de pagamento.
- Limiar de ativação, renovação, expansão e liquidez do marketplace.
- Taxas de custo direto, custos de software, CAC, ciclo de vendas, margens e payback.
- Sequência de contratações, valor de capital, instrumento e tranches de financiamento.
- Se as linhas de marketplace, mídia, impacto e Selo são expansão, projetos separados ou excluídas do plano operacional inicial.

O modelo estará pronto para investidores somente quando esses desconhecidos tiverem sido comprovados, explicitamente selecionados como decisões ou atribuídos a um gate de validação com data.
