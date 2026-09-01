---
title: 02 — Inventário de Páginas / Telas — 96 telas
source: 02_Inventario_Paginas
tags: [hub, inventario, telas, escopo]
---

# 02 — Inventário — 96 Telas

> Fonte única de escopo. Filtros prontos para `Bases`/`Dataview`. CSV completo em `_data/02_Inventario_96_Telas.csv`.

## Estatísticas

```chartsview
type: Column
data:
  - modulo: CORE
    telas: 12
  - modulo: ED
    telas: 11
  - modulo: COL
    telas: 11
  - modulo: CAN
    telas: 13
  - modulo: FOR
    telas: 14
  - modulo: ACA
    telas: 12
  - modulo: EVT
    telas: 14
  - modulo: COM
    telas: 9
options:
  xField: "modulo"
  yField: "telas"
  label:
    position: "top"
    formatter:
      function formatter(datum) { return datum.telas; }
    style:
      fill: "#333"
      fontSize: 11
  yAxis:
    max: 16
```

```chartsview
type: Pie
data:
  - type: MVP
    value: 69
  - type: Fase 2
    value: 27
options:
  angleField: "value"
  colorField: "type"
  radius: 0.7
  label:
    type: "outer"
    formatter:
      function formatter(datum) { return datum.type + ' ' + datum.value; }
    offset: 12
    style:
      fontSize: 11
  legend:
    position: "bottom"
```

| Métrica | Valor |
|---------|-------|
| Total telas | 96 |
| MVP | 69 (72%) |
| Fase 2 | 27 (28%) |
| Muito alta | 7 telas (ED 2, CAN 2, FOR 1, ACA 1, EVT 0 + CAN/FOR matching) |

---

## Como filtrar (Bases / Dataview)

> [!tip] Use o CSV — não copie a tabela gigante
> A tabela abaixo é **amostra** (primeiras 20). Para filtrar tudo, use o CSV com Bases ou Dataview:

> [!tip] Filtrar por módulo — exemplo estático (EVT = 14 telas)

| ID | Página / tela | Canal | Fase | Complexidade |
|----|---------------|-------|------|--------------|
| 74 | Visão geral do evento | Web | MVP | Alta |
| 75 | Planejamento / metas | Web | MVP | Média |
| 76 | Talentos / equipes | Web | MVP | Alta |
| 77 | Fornecedores do evento | Web | MVP | Alta |
| 78 | Demandas e contratações | Web | MVP | Alta |
| 79 | Patrocínios / marcas | Web | Fase 2 | Alta |
| 80 | Artistas / criadores | Web | Fase 2 | Média |
| 81 | Pesquisa de público / mercado | Web/Mobile | MVP | Alta |
| 82 | Acessibilidade | Web | MVP | Média |
| 83 | Segurança / combate ao assédio | Web/Mobile | MVP | Alta |
| 84 | Operação / checklists | Web/Mobile | Fase 2 | Alta |
| 85 | Indicadores em tempo real | Web | Fase 2 | Alta |
| 86 | ROI / impacto financeiro | Web | MVP | Alta |
| 87 | Relatório pós-evento | Web | MVP | Média |

> Para filtrar dinamicamente, use **Bases**: `source: _data/02_Inventario_96_Telas.csv` + filtro `Código == "EVT"` — Dataview não lê CSV (`FROM "_data/*.csv"` é inválido).


> [!tip] Filtrar por complexidade — Muito alta (6 telas — matching/IA pesado)

| ID | Código | Página / tela | Fase | Observação |
|----|--------|---------------|------|------------|
| 17 | ED | Análises e correlações | MVP | Padrões |
| 20 | ED | Cenários / simulações | Fase 2 | Projeções |
| 41 | CAN | Match candidato-vaga | MVP | Aderência |
| 47 | CAN | Inteligência de vagas | Fase 2 | Requisitos por evidência |
| 55 | FOR | Match fornecedor-demanda | MVP | Aderência |
| 68 | ACA | Match pesquisador-empresa | Fase 2 | Pesquisa aplicada |

> Dataview não consulta CSV. Para filtro dinâmico: **Bases** com `source: _data/02_Inventario_96_Telas.csv` + `Complexidade == "Muito alta"` ou filtre direto no CSV.


---

## Amostra — 20 primeiras telas

| ID | Código | Frente | Página / tela | Canal | Fase | Complexidade | Compartilhável? | Dependência |
|----|--------|--------|---------------|-------|------|--------------|-----------------|-------------|
| 2 | CORE | Core / Plataforma | Cadastro / onboarding | Web/Mobile | MVP | Média | Sim | - |
| 3 | CORE | Core / Plataforma | Perfis e organizações | Web | MVP | Média | Sim | - |
| 4 | CORE | Core / Plataforma | Papéis e permissões | Admin | MVP | Alta | Sim | - |
| 5 | CORE | Core / Plataforma | Consentimentos / LGPD | Web/Admin | MVP | Alta | Sim | - |
| 6 | CORE | Core / Plataforma | Central de integrações | Admin | MVP | Alta | Sim | - |
| 7 | CORE | Core / Plataforma | Notificações | Web/Mobile | MVP | Média | Sim | - |
| 8 | CORE | Core / Plataforma | Mensagens | Web/Mobile | Fase 2 | Alta | Sim | - |
| 9 | CORE | Core / Plataforma | Busca global | Web | Fase 2 | Média | Sim | - |
| 10 | CORE | Core / Plataforma | Analytics de uso | Admin | MVP | Média | Sim | - |
| 11 | CORE | Core / Plataforma | Administração | Admin | MVP | Alta | Sim | - |
| 12 | CORE | Core / Plataforma | Auditoria e logs | Admin | MVP | Alta | Sim | - |
| 13 | ED | Estratégia & Dados | Visão executiva | Web | MVP | Alta | Não | CORE |
| 14 | ED | Estratégia & Dados | Conectores de dados | Admin | MVP | Alta | Não | CORE |
| 15 | ED | Estratégia & Dados | Mapeamento de indicadores | Admin | MVP | Alta | Não | CORE |
| 16 | ED | Estratégia & Dados | Diagnóstico | Web | MVP | Alta | Não | CORE |
| 17 | ED | Estratégia & Dados | Análises e correlações | Web | MVP | Muito alta | Não | CORE |
| 18 | ED | Estratégia & Dados | Prioridades | Web | MVP | Alta | Não | CORE |
| 19 | ED | Estratégia & Dados | Planos de ação | Web | MVP | Média | Não | CORE |
| 20 | ED | Estratégia & Dados | Cenários / simulações | Web | Fase 2 | Muito alta | Não | CORE |
| 21 | ED | Estratégia & Dados | ROI / valor capturado | Web | MVP | Alta | Não | CORE |

> Ver `_data/02_Inventario_96_Telas.csv` para as 96 linhas completas (importável em Bases: `type: table`, `source: _data/...csv`).

---

## Telas por Módulo — listas colapsáveis


### CORE — 11 telas

> [!details] Ver 11 telas de CORE
> - **2. Cadastro / onboarding** — MVP · Média · Web/Mobile · `-`
> - **3. Perfis e organizações** — MVP · Média · Web · `-`
> - **4. Papéis e permissões** — MVP · Alta · Admin · `-`
> - **5. Consentimentos / LGPD** — MVP · Alta · Web/Admin · `-`
> - **6. Central de integrações** — MVP · Alta · Admin · `-`
> - **7. Notificações** — MVP · Média · Web/Mobile · `-`
> - **8. Mensagens** — Fase 2 · Alta · Web/Mobile · `-`
> - **9. Busca global** — Fase 2 · Média · Web · `-`
> - **10. Analytics de uso** — MVP · Média · Admin · `-`
> - **11. Administração** — MVP · Alta · Admin · `-`
> - **12. Auditoria e logs** — MVP · Alta · Admin · `-`

### ED — 11 telas

> [!details] Ver 11 telas de ED
> - **13. Visão executiva** — MVP · Alta · Web · `CORE`
> - **14. Conectores de dados** — MVP · Alta · Admin · `CORE`
> - **15. Mapeamento de indicadores** — MVP · Alta · Admin · `CORE`
> - **16. Diagnóstico** — MVP · Alta · Web · `CORE`
> - **17. Análises e correlações** — MVP · Muito alta · Web · `CORE`
> - **18. Prioridades** — MVP · Alta · Web · `CORE`
> - **19. Planos de ação** — MVP · Média · Web · `CORE`
> - **20. Cenários / simulações** — Fase 2 · Muito alta · Web · `CORE`
> - **21. ROI / valor capturado** — MVP · Alta · Web · `CORE`
> - **22. Relatórios executivos** — MVP · Média · Web · `CORE`
> - **23. Alertas estratégicos** — Fase 2 · Alta · Web · `CORE`

### COL — 11 telas

> [!details] Ver 11 telas de COL
> - **24. Meu time** — MVP · Alta · Web · `CORE`
> - **25. Perfil do colaborador** — MVP · Média · Web · `CORE`
> - **26. Objetivos e combinados** — MVP · Média · Web · `CORE`
> - **27. Competências** — MVP · Média · Web · `CORE`
> - **28. Feedbacks / check-ins** — MVP · Média · Web/Mobile · `CORE`
> - **29. Plano de desenvolvimento** — MVP · Média · Web · `CORE`
> - **30. Mentorias** — Fase 2 · Média · Web · `CORE`
> - **31. Aprendizagem / trilhas** — Fase 2 · Média · Web · `CORE`
> - **32. Talentos internos / mobilidade** — Fase 2 · Alta · Web · `CORE`
> - **33. Sucessão** — Fase 2 · Alta · Web · `CORE`
> - **34. Saúde do time / alertas** — MVP · Alta · Web · `CORE`

### CAN — 13 telas

> [!details] Ver 13 telas de CAN
> - **35. Perfil do candidato** — MVP · Média · Web/Mobile · `CORE`
> - **36. Currículo / portfólio** — MVP · Média · Web/Mobile · `CORE`
> - **37. Competências e interesses** — MVP · Média · Web/Mobile · `CORE`
> - **38. Oportunidades recomendadas** — MVP · Alta · Web/Mobile · `CORE`
> - **39. Detalhe da oportunidade** — MVP · Baixa · Web/Mobile · `CORE`
> - **40. Candidatura** — MVP · Média · Web/Mobile · `CORE`
> - **41. Match candidato-vaga** — MVP · Muito alta · Web · `CORE`
> - **42. Minha jornada** — MVP · Média · Web/Mobile · `CORE`
> - **43. Capacitação recomendada** — Fase 2 · Alta · Web/Mobile · `CORE`
> - **44. Mentoria / preparação** — Fase 2 · Média · Web/Mobile · `CORE`
> - **45. Feedbacks do processo** — Fase 2 · Média · Web/Mobile · `CORE`
> - **46. Painel empresa - talentos** — MVP · Alta · Web · `CORE`
> - **47. Inteligência de vagas** — Fase 2 · Muito alta · Web · `CORE`

### FOR — 14 telas

> [!details] Ver 14 telas de FOR
> - **48. Perfil do fornecedor** — MVP · Média · Web · `CORE`
> - **49. Documentos e compliance** — MVP · Alta · Web · `CORE`
> - **50. Maturidade** — MVP · Alta · Web · `CORE`
> - **51. Plano de desenvolvimento** — MVP · Alta · Web · `CORE`
> - **52. Trilhas / apoio** — Fase 2 · Média · Web · `CORE`
> - **53. Oportunidades / demandas** — MVP · Média · Web · `CORE`
> - **54. Detalhe da demanda** — MVP · Baixa · Web · `CORE`
> - **55. Match fornecedor-demanda** — MVP · Muito alta · Web · `CORE`
> - **56. Painel empresa compradora** — MVP · Alta · Web · `CORE`
> - **57. Reuniões / conexões** — MVP · Média · Web · `CORE`
> - **58. Propostas** — Fase 2 · Alta · Web · `CORE`
> - **59. Negociações** — Fase 2 · Alta · Web · `CORE`
> - **60. Contratos / negócios** — Fase 2 · Alta · Web · `CORE`
> - **61. Indicadores do ecossistema** — MVP · Alta · Web · `CORE`

### ACA — 12 telas

> [!details] Ver 12 telas de ACA
> - **62. Portal da universidade** — MVP · Média · Web · `CORE`
> - **63. Perfil acadêmico do aluno** — MVP · Média · Web/Mobile · `CORE`
> - **64. Perfil pesquisador/docente** — Fase 2 · Média · Web · `CORE`
> - **65. Oportunidades acadêmicas** — MVP · Média · Web/Mobile · `CORE`
> - **66. Projetos empresa-universidade** — MVP · Alta · Web · `CORE`
> - **67. Match aluno-projeto** — MVP · Alta · Web · `CORE`
> - **68. Match pesquisador-empresa** — Fase 2 · Muito alta · Web · `CORE`
> - **69. Estágios e carreira** — MVP · Alta · Web/Mobile · `CORE`
> - **70. Bolsas corporativas** — MVP · Média · Web · `CORE`
> - **71. Formação / trilhas** — Fase 2 · Média · Web/Mobile · `CORE`
> - **72. Acompanhamento de projeto** — Fase 2 · Alta · Web · `CORE`
> - **73. Indicadores universidade-mercado** — MVP · Alta · Web · `CORE`

### EVT — 14 telas

> [!details] Ver 14 telas de EVT
> - **74. Visão geral do evento** — MVP · Alta · Web · `CORE`
> - **75. Planejamento / metas** — MVP · Média · Web · `CORE`
> - **76. Talentos / equipes** — MVP · Alta · Web · `CORE`
> - **77. Fornecedores do evento** — MVP · Alta · Web · `CORE`
> - **78. Demandas e contratações** — MVP · Alta · Web · `CORE`
> - **79. Patrocínios / marcas** — Fase 2 · Alta · Web · `CORE`
> - **80. Artistas / criadores** — Fase 2 · Média · Web · `CORE`
> - **81. Pesquisa de público / mercado** — MVP · Alta · Web/Mobile · `CORE`
> - **82. Acessibilidade** — MVP · Média · Web · `CORE`
> - **83. Segurança / combate ao assédio** — MVP · Alta · Web/Mobile · `CORE`
> - **84. Operação / checklists** — Fase 2 · Alta · Web/Mobile · `CORE`
> - **85. Indicadores em tempo real** — Fase 2 · Alta · Web · `CORE`
> - **86. ROI / impacto financeiro** — MVP · Alta · Web · `CORE`
> - **87. Relatório pós-evento** — MVP · Média · Web · `CORE`

### COM — 9 telas

> [!details] Ver 9 telas de COM
> - **88. Meu perfil** — MVP · Baixa · Web/Mobile · `CORE`
> - **89. Objetivos** — MVP · Média · Web/Mobile · `CORE`
> - **90. Plano de ação** — MVP · Média · Web/Mobile · `CORE`
> - **91. Preparação / conteúdos** — MVP · Média · Web/Mobile · `CORE`
> - **92. Mentoria** — Fase 2 · Média · Web/Mobile · `CORE`
> - **93. Saúde & cuidado** — Fase 2 · Alta · Web/Mobile · `CORE`
> - **94. Eventos da comunidade** — MVP · Média · Web/Mobile · `CORE`
> - **95. Conexões com empresas** — MVP · Alta · Web/Mobile · `CORE`
> - **96. Acadêmico** — Fase 2 · Média · Web/Mobile · `CORE`

---

## Notas de modelagem

- **Compartilhável?=Sim** = tela do CORE reutilizável entre verticais (ex: Login, RBAC, LGPD).
- **Dependência=CORE** = todas as verticais dependem do Core, mas não entre si (exceto fluxos em [[03_Matriz_Integracoes]]).
- **Canal**: `Web` (dashboard), `Mobile` (app), `Admin` (backoffice), `Web/Mobile` (híbrido).
