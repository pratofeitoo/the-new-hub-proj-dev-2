---
titulo: Arquitetura de ofertas e produtos — HUB
status: provisório / mapa estratégico
fontes:
  - 04-project-management/tarefas/P01-T02_Matriz_Oferta_Comprador_Capacidade.md
  - 02-review/01-mvps/LEIAME-origem-inbox.md
  - wiki/architecture/modulos-hub-core.md
  - 02-review/02-visao-plataforma/README.md
---

# Arquitetura de ofertas e produtos — HUB

## 1. Evidências observadas

- P01-T02 registra 17 ofertas candidatas, cada uma com unidade dona delineada em nível de blueprint; o próprio documento mantém compradores, receita e capacidade como hipóteses sujeitas a refinamento.
- O portfólio de MVPs funciona como teste de aplicações diferentes de uma mesma lógica: inteligência, pessoas, empregabilidade, fornecedores, academia e eventos.
- A arquitetura conceitual da plataforma nomeia seis módulos: Intelligence, Journey, Solutions, Connections, Academy e Recognition.
- A visão de longo prazo está em `02-review/` e é descrita como tese congelada para gate; seus números não são orçamento.
- HUB Negócios, Instituto HUB e Plataforma HUB aparecem como fronteiras de trabalho; “Marca HUB” aparece como método e padrões.

## 2. Modelo recomendado de portfólio

Organizar as ofertas em três camadas, evitando tratar cada nome de módulo como produto comercial já lançado:

| Camada | Papel | Exemplos de trabalho | Critério de comunicação |
|---|---|---|---|
| Método e serviços | Problema, contexto, facilitação e implementação. | Jornadas, diagnósticos, programas, eventos e curadoria. | Nomear o caso e o resultado observado. |
| Plataforma | Capacidades reutilizáveis de dados, workflow e acompanhamento. | Intelligence, Journey, Solutions, Connections, Academy. | Descrever capacidade e estágio, não promessa automática. |
| Reconhecimento | Resultado ou mecanismo de reconhecimento baseado em evidências. | Recognition / Selo HUB. | Manter bloqueado até governança e independência. |

## 3. Regra de nomeação recomendada

- `HUB + [capacidade]` para módulos conceituais compartilhados.
- `HUB + [contexto ou público]` para uma experiência específica, somente quando houver escopo e owner definidos.
- Nome do cliente/parceiro apenas com autorização de uso e sem implicar endosso.
- Não chamar um MVP, blueprint ou protótipo de “produto validado” sem gate e evidência correspondentes.
- Registrar unidade responsável, comprador, JTBD, troca de valor, receita como hipótese e gap relacionado para cada oferta.

## 4. Decisões pendentes

- Quais módulos serão lançados como ofertas e quais permanecerão internos.
- Se a primeira oferta será serviço, plataforma, programa ou combinação.
- Relação entre portfólio de produtos em revisão e arquitetura dos seis módulos.
- Unidade contratante, faturadora e responsável por PI para cada oferta.

