---
doc_id: "BP-001-MATRIZ"
titulo: "Matriz CNPJ × Oferta × Receita (BP-001 §2.1)"
pasta: "00-controle"
status: hipotese
gap_id: GOV-001
tags: [matriz, BP-001, GOV-001, receita]
---

# Matriz CNPJ × Oferta × Receita — BP-001 §2.1

> Define **qual CNPJ fatura qual oferta** e onde a receita é reconhecida (`07.05` — CPC 47). Depende de GOV-001.

## Como preencher

Para cada oferta do HUB, marque o CNPJ faturador e o momento de reconhecimento.

| Oferta (exemplos — ajustar ao BP-001 real) | CNPJ faturador (hipótese) | Natureza da receita | Gatilho de reconhecimento | Doc relacionado |
|---|---|---|---|---|
| Jornada / Programa CAOS | HUB Negócios Ltda. | Prestação de serviço | Ao entregar etapa (SOW `04.02`) | `04.01` + `04.02` |
| Plataforma (SaaS/assinatura) | HUB Negócios Ltda. | Licença de uso / SaaS | Mensal (SLA `04.03`) | `04.03` + `05.03` |
| Selo HUB (certificação) | _A definir (GOV-003)_ | Taxa de certificação | Ao conceder selo | `04.08` + `03.05` |
| Voluntariado / Mentorias gratuitas | Instituto HUB | Sem receita / doação | Não se aplica | `04.07` |
| Avaliações / Fornecedores | HUB Negócios Ltda. | Custo / repasse | Ao contratar (`04.05`) | `04.05` |
| Cursos com certificação MEC | _A definir (GOV-002)_ | Mensalidade educacional | Ao credenciar (`03.03`) | `03.03` |

## Regras fiscais (ver `07.*`)

- Cada CNPJ tem seu **regime tributário** (`07.01`) — não misturar NFS-e de CNPJs distintos.
- **IBS/CBS (EC 132)** — mapear por oferta em `07.04` (transição 2026-2032, LC 214/2025).
- **Entre Empresas** (`04.06`): se houver 2+ CNPJs, todo repasse precisa contrato + preço de transferência.

## Cenários

### Cenário A — 1 CNPJ
Tudo fatura pelo HUB Negócios. Simples, mas mistura receita com e sem fins lucrativos.

### Cenário B — 2 CNPJs (recomendado se houver Instituto)
- HUB Negócios: jornadas, plataforma, Selo (se não for OSC)
- Instituto HUB: voluntariado, projetos incentivados, CEBAS (se optar em `03.04`)

## Pendências
- [ ] Confirmar ofertas reais do BP-001 §2.1
- [ ] Definir GOV-001 (quantos CNPJs) → trava esta matriz
- [ ] Validar com contábil: regime por CNPJ + IBS/CBS por oferta
- [ ] Atualizar `07.05` com política de reconhecimento por cenário

## Histórico
| Data | Versão | O que mudou | Autor |
|---|---|---|---|
| 2026-09-02 | v0.1 | Esqueleto — matriz hipotética | Sisyphus |
