# Requisitos do Modelo Financeiro HUB v2

**Status:** Requisitos para apoio à decisão, não uma previsão
**Escopo:** Precificação, unit economics, motor de receita e plano de capital para os primeiros 12–18 meses
**Regra de evidência:** Valores desconhecidos permanecem `TBD`, hipóteses ou evidência necessária. Este documento não inventa preços, margens, CAC, tração ou valores de captação.

## 1. Propósito e fronteira do modelo

O modelo deve determinar se o HUB v2 é inicialmente **orientado a serviços, orientado a software ou um híbrido deliberado**, e mostrar o caminho de transição. Ele deve apoiar o plano de prontidão para investimento da v2 sem tratar o portfólio completo da v1 como um negócio de lançamento igualmente priorizado.

Modelar separadamente:

- O buyer beachhead selecionado e o caso de uso inicial (a ser decidido por meio de discovery).
- O primeiro piloto pago ou explicitamente financiado.
- Pacotes repetíveis pós-piloto.
- Opções de expansão que não são necessárias nos primeiros 18 meses.
- Economia do grupo/empresa comercial versus economia do Instituto/projetos de impacto.

Não combinar receitas, custos ou fluxos de caixa não relacionados apenas para produzir um total atraente. Cada linha precisa de um pagador, mecanismo contratual, responsável pela entrega, timing, custo direto e status de evidência.

## 2. Motores de receita candidatos

O plano da v2 exige um motor primário para os primeiros 18 meses. Os seguintes são candidatos, não decisões:

| Motor candidato | Pagador e contrato | Unidade de valor a testar | Carga direta de entrega | Evidência necessária antes da seleção |
|---|---|---|---|---|
| Licenciamento de ecossistema | Entidade/parceiro; licença anual ou ambiente configurado | Ambiente do parceiro, coorte ou ecossistema ativo; unidade exata TBD | Configuração, integração, sucesso do parceiro, suporte, governança | Comprador identificado, dono do orçamento, esforço de configuração repetível, dono da renovação, risco de concentração |
| Assinatura enterprise | Empresa; plano recorrente por organização, usuários ou módulos | Organização, usuários ativos, módulos ou uso; unidade exata TBD | Suporte de produto, operações de software, metodologia e sucesso de conta | Disposição a pagar, ativação, uso recorrente, gatilho de renovação, custo/conta de software |
| Adoção de plataforma liderada por implementação | Entidade/empresa; taxa de projeto mais possível cobrança recorrente de plataforma | Projeto de implementação e conta/coorte implantada | Serviços iniciais elevados e gestão de mudança | Piloto pago, horas por papel, resultado da entrega, componentes reutilizáveis, customização não proporcional |
| Programa de diagnóstico e evolução | Empresa/entidade; taxa de avaliação e jornada, com renovação opcional | Avaliação, coorte, jornada ou revisão de evidências | Metodologia, facilitação, curadoria, relatórios | Demanda paga por diagnóstico, conclusão, resultado mensurável, evidência de conversão/renovação |

Motores iniciais potencialmente expansíveis, mas não de prioridade igual:

- **Marketplace:** taxa de fornecedor, taxa de lead qualificado, comissão ou taxa de transação. Exige um limiar de liquidez definido e desenho transacional/jurídico. Não deve ser previsto como material antes que demanda qualificada, matches concluídos, demanda recorrente e take rate sejam observados.
- **Mídia e experiências:** patrocínios de marca/mantenedor, conteúdo, eventos e ativações. Tratar como receita de projeto/patrocínio com economia separada de produção de eventos, não ARR recorrente de plataforma.
- **Financiamento de impacto:** subsídios, recursos de lei de incentivo, fundos públicos ou investimento social operados pelo Instituto. Tratar como financiamento restrito/de projeto com restrições de elegibilidade, marcos, prestação de contas e alocação de custos, não como receita comercial recorrente ordinária.
- **Selo HUB:** taxas de avaliação e renovação podem ser uma linha de expansão somente depois que independência, critérios, custo de auditoria e controles de conflito forem críveis.

### Requisito de decisão do motor

Pontuar cada candidato com base em evidência, não narrativa: acesso ao comprador, intensidade da dor, autoridade orçamentária, tempo até valor, repetibilidade, potencial de margem bruta, custo de servir, risco de ciclo de vendas, complexidade de dados/jurídica, risco de concentração e aderência à expansão. Selecionar um motor primário; documentar os demais como opções de expansão com condições explícitas de adiamento.

## 3. Contradições e regras de resolução

O documento da v1 lista licenciamento, assinatura, diagnóstico/selo, marketplace, implementação, mídia e impacto como fontes paralelas, enquanto sua escada de produtos coloca assinatura/jornada antes do licenciamento e trata marketplace e projetos como expansão. O plano da v2, em vez disso, exige um motor primário. Resolver essa tensão da seguinte forma:

1. **Assinatura versus licenciamento:** São movimentos diferentes de pagador e implantação. Não usar "assinatura/licença" como uma linha única mesclada. Modelar assinatura enterprise por empresa/conta separadamente da licença de ecossistema por ambiente/coorte de parceiro. Uma licença paga pelo parceiro pode subsidiar o acesso dos participantes; registrar o subsídio e o pagador explicitamente.
2. **Implementação versus software:** A implementação pode ser o motor inicial de caixa enquanto a receita recorrente de software é comprovada. Separar receita única de implementação e custo de implementação da receita recorrente de plataforma e custo de conta. Não rotular bookings de implementação como ARR.
3. **Diagnóstico/evolução versus assinatura:** Um diagnóstico pago pode ser um produto de entrada ou o programa principal. Testar se o valor termina com o relatório/jornada ou requer acesso continuado à plataforma. A evidência de renovação determina se isso é receita recorrente ou de projeto.
4. **Marketplace versus plataforma central:** As comissões de marketplace dependem de demanda, qualidade da oferta, matching, conversão e atividade recorrente. Não assumir liquidez ou receita de transação apenas por ter um catálogo. Adiar a expansão do marketplace quando o limiar de liquidez pré-registrado não for atingido.
5. **Mídia versus plataforma:** Receita de patrocínio e eventos pode ser valiosa, mas é receita de campanha/projeto com timing irregular. Mantê-la fora das métricas recorrentes de software e modelar o risco de entrega de eventos separadamente.
6. **Impacto versus receita comercial:** Projetos do Instituto podem ser financiados ou subsidiados para resultados de propósito público. Separar fundos restritos, custos elegíveis, sobrecarga de prestação de contas e resultados dos beneficiários da receita de clientes comerciais. Nunca usar financiamento de impacto para implicar disposição comercial a pagar.
7. **Selo versus geração de demanda:** O reconhecimento pode apoiar aquisição ou expansão, mas não pode ser tratado como premissa de receita até que governança independente, custo de avaliação, demanda de renovação e controles de conflito de interesses sejam evidenciados.

## 4. Requisitos de precificação e empacotamento

Construir uma tabela comercial para cada pacote candidato. Nenhum preço deve ser preenchido sem evidência observada ou uma hipótese de teste claramente rotulada.

| Pacote | Campos obrigatórios |
|---|---|
| Discovery/diagnóstico | Comprador-alvo; escopo; entregável; linha de base; horas de entrega por papel; requisitos de dados/jurídicos; faixa de preço hipotética; caminho de conversão |
| Piloto | Comprador/patrocinador identificado; coorte de participantes; início/fim; escopo do produto; responsabilidades de implementação; limiar de sucesso; condições pagas ou explicitamente subsidiadas; decisão de renovação/expansão |
| Assinatura anual | Pagador; organizações/usuários/módulos/usos incluídos; onboarding; suporte; resultado; faixa de preço hipotética; regras de excedente; termos de renovação e expansão |
| Licença anual de ecossistema | Ambiente do parceiro e limites de customização; cota de coorte/organização; implementação; suporte/SLA; direitos de dados; renovação; exposição de concentração |
| Implementação | Base fixa, por marco ou time-and-materials; premissas; critérios de aceitação; regras de change order; custo de entrega; hipótese de margem-alvo |
| Módulos opcionais | Resultado do módulo; custo incremental de entrega/software; elegibilidade; gatilho de attach; hipótese de preço; risco de canibalização |
| Avaliação/renovação do Selo | Avaliador independente; critérios; carga de evidência; custo de auditoria; hipótese de taxa; frequência de renovação; processo de recurso/conflito |

Os testes de precificação devem registrar preço cotado, reação do comprador, motivo de aceitação/rejeição, fonte do orçamento, restrições de procurement, desconto e próxima ação. Definir autoridade de desconto e margem de contribuição mínima aceitável antes de vender.

## 5. Entradas mínimas do modelo

Cada entrada precisa de uma fonte, data, classe de confiança (`proven`, `observed`, `hypothesis`, `decision` ou `option`), responsável e próxima ação de evidência.

### Entradas comerciais

- Compradores e organizações alcançáveis por comprador.
- Tipo de comprador, pagador, dono do orçamento, rota de procurement e concentração de parceiros.
- Pacote, prazo de contrato, cronograma de faturamento, condições de pagamento, desconto, reembolsos, impostos e premissa de inadimplência.
- Contagens de funil de vendas e taxas de conversão por etapa.
- Duração do ciclo de vendas e tempo da assinatura até a coleta do caixa.
- Taxas de piloto-para-renovação e renovação-para-expansão.
- Tamanho da coorte, usuários/organizações ativos, attach de módulos, uso e definição de ativação.

### Entradas de entrega e custo

- Horas de implementação por papel e custo horário carregado.
- Horas de metodologia, facilitação, curadoria, auditoria, suporte e sucesso do cliente.
- Custos de software/cloud/API/licenciamento por conta, usuário, organização ou unidade de uso.
- Custos de processamento de pagamento, operações de marketplace, produção de eventos e integração de parceiros.
- Política de alocação de overhead compartilhado, incluindo jurídico, finanças, segurança, dados e governança.
- Volume de suporte, compromissos de resposta, retrabalho e frequência de customização/change order.
- Datas de início de contratações, remuneração/carga, contractors e restrições de capacidade.

### Entradas de capital e caixa

- Caixa inicial e fundos restritos versus irrestritos (se aplicável).
- Custos operacionais fixos mensais e custos variáveis de entrega.
- Timing de contas a receber, timing de contas a pagar, depósitos, faturamento por marco e necessidades de capital de giro.
- Orçamentos de produto/tecnologia, jurídico/dados/IP, governança do selo, vendas/piloto e reserva operacional.
- Fonte de captação, instrumento, restrições, data de disponibilidade e condições de tranche; valores permanecem TBD até que evidência e decisão sejam aprovadas.

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
- `Expansion rate = accounts with paid expansion / renewed accounts` (definir janela de coorte)

### Aquisição e payback

- `CAC = attributable sales and marketing spend / new paying customers` (usar uma janela de atribuição declarada)
- `Fully loaded CAC = attributable sales and marketing spend + attributable pre-sales/onboarding acquisition effort / new paying customers`
- `CAC payback months = CAC / monthly contribution profit per retained customer`
- `Sales efficiency = new net recurring revenue / sales and marketing spend` (somente após a receita recorrente ser real e a janela de coorte especificada)

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

Para cenários de impacto/mídia, reportar financiamento restrito, custo elegível do programa, contribuição irrestrita e métricas de resultado separadamente; nunca incorporá-los ao ARR de SaaS ou ao CAC comercial.

## 7. Cenários e sensibilidades

Criar casos conservador, base e otimista. Os casos devem variar premissas, não meramente aplicar ajustes percentuais arbitrários.

Variar no mínimo:

- Contagem/alcançabilidade de compradores e tamanho da coorte.
- Duração do ciclo de vendas, conversão por etapa, atraso de pagamento e concentração.
- Conversão de piloto, ativação, renovação, churn, expansão e descontos.
- Horas de implementação, razão de customização, carga de suporte e inflação de custos.
- Custo de software/uso por conta e capacidade de entrega.
- Liquidez e take rate do marketplace, somente após existir evidência de baseline.
- Timing de mídia/projetos e disponibilidade de financiamento de impacto, separadamente da receita recorrente.
- Disponibilidade de captação, caso de captação atrasada e plano operacional mínimo viável.

Mostrar runway de caixa, timing de break-even (se houver), contribuição acumulada, capacidade de contratação e entrega de marcos em cada caso. Tabelas de sensibilidade devem identificar quais incógnitas mais alteram o runway ou a margem bruta.

## 8. Requisitos do plano de capital

O plano de capital deve especificar o capital necessário para 12–18 meses sem afirmar um valor antes que o modelo operacional exista.

Visões obrigatórias:

- Fluxo de caixa mensal e runway por cenário.
- Sequência de contratações vinculada a capacidade e marcos, não a aspiração de headcount.
- Orçamento de produto/tecnologia e marcos de release.
- Orçamento jurídico, de dados, IP, segurança e governança do selo.
- Orçamento de vendas, descoberta de clientes, entrega de piloto e estudo de caso.
- Política de reserva operacional e piso mínimo de caixa.
- Capital restrito versus irrestrito e usos permitidos.
- Tranches de captação e as evidências/marcos que cada tranche destrava.
- Plano de captação externa atrasada/inexistente: reduzir escopo, adiar contratações, preservar a entrega do piloto e identificar alternativas formalmente financiadas.

As solicitações de capital devem conciliar com um plano de marcos: decisão de beachhead/caso de uso; piloto pago; resultado mensurável; pacote repetível; renovação ou segundo comprador comparável; evidência de unit economics; expansão controlada. Não solicitar capital de expansão antes que retenção, margem bruta, custo de servir e resultados de clientes apoiem o caminho de escala selecionado.

## 9. Portões de decisão

### Portão A — Selecionar motor primário

Prosseguir somente quando o discovery identificar um problema doloroso, um decisor acessível, um pagador/orçamento crível e uma prova de valor definida. Escolher um motor; manter as outras linhas como opções.

### Portão B — Autorizar piloto

Exigir declaração escrita do problema, patrocinador nomeado, coorte, condições comerciais/de captação, baseline, escopo, responsabilidades, permissões de dados, limiares de sucesso e decisão de renovação/expansão.

### Portão C — Preço e empacotamento

Exigir reações de preço observadas ou termos assinados, estimativa de custo de entrega, autoridade de desconto, condições de pagamento e uma hipótese de margem de contribuição. Um "piloto gratuito" deve ser explicitamente subsidiado e seu subsídio rastreado.

### Portão D — Repetibilidade

Exigir relatório de resultado, estimativa de tempo de entrega, pacote padrão, componentes reutilizáveis e evidência de que o trabalho customizado não cresce proporcionalmente à receita.

### Portão E — Escalar e captar

Exigir primeira renovação ou segundo comprador comparável, além de evidência de retenção, margem bruta, custo de servir e resultados. A expansão do marketplace requer adicionalmente limiares de liquidez pré-registrados. A concentração de parceiros deve permanecer abaixo de um limite pré-registrado.

### Respostas de encerramento ou pausa

- Compradores elogiam o conceito mas não financiam um piloto: revisitar comprador, problema ou prova antes de mais tecnologia.
- Baixa conclusão do diagnóstico: simplificar a jornada e reavaliar incentivos.
- Implementação manual excessiva: estreitar o escopo ou redesenhar operações.
- Sem resultado mensurável do piloto: parar a expansão e revisar a intervenção.
- Renovação fraca: não assumir valor recorrente.
- Marketplace abaixo do limiar: adiar a expansão do marketplace e focar em um fluxo de trabalho puxado por demanda.
- Customização repetida: impor limites de configuração ou rejeitar o negócio.
- Independência do Selo não crível: separar, redesenhar ou suspender o produto de reconhecimento.

## 10. Requisitos de evidência para investidores

O modelo/data room final deve incluir:

- Registro de premissas com classe de evidência, fonte, data, responsável e plano de validação.
- Planilha de precificação e empacotamento com termos cotados/testados e reações dos compradores.
- Contrato de piloto ou acordo escrito de financiamento, baseline, relatório de resultado e proposta de renovação/expansão.
- Construção de custo de entrega no nível de conta: horas, papéis, software, curadoria, suporte e retrabalho.
- Relatório de retenção, ativação, expansão e custo de servir por coorte.
- Modelo de funil com definições de etapas, evidência de ciclo de vendas, metodologia de CAC e timing de pagamento.
- Ponte de qualidade de receita separando receita comercial recorrente, serviços únicos, marketplace, mídia/projetos e fundos restritos de impacto.
- Modelo de três anos com casos conservador/base/otimista e análise de sensibilidade.
- Plano de capital, fluxo de caixa mensal, runway, marcos de tranches e plano de captação atrasada.
- Scorecard de liquidez do marketplace e cálculo de concentração de parceiros, mesmo que a expansão seja adiada.
- Mapa jurídico/dados/IP e evidência de independência do Selo HUB onde aplicável.

## 11. Decisões abertas e incógnitas explícitas

O seguinte deve permanecer sem resolução até que evidência seja obtida:

- Buyer beachhead e caso de uso inicial.
- Motor primário e pagador/unidade de valor.
- Faixas de preço, política de desconto, prazo de contrato e condições de pagamento.
- Limiares de ativação, renovação, expansão e liquidez do marketplace.
- Taxas de custo direto, custos de software, CAC, ciclo de vendas, margens e payback.
- Sequência de contratações, valor de capital, instrumento e tranches de captação.
- Se as linhas de marketplace, mídia, impacto e Selo são expansão, projetos separados ou excluídas do plano operacional inicial.

O modelo está pronto para investidores somente quando essas incógnitas estiverem evidenciadas, explicitamente selecionadas como decisões, ou atribuídas a um portão de validação datado.
