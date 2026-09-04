---
title: TaskNotes Dashboard
tags:
  - dashboard
  - tasknotes
description: Painel unificado — Dataview + Obsidian Charts sobre TaskNotes/Tasks (operacional, 31 notas) + 04-project-management/tarefas (blueprint/P01-P07, 64 notas)
---

# Painel de Tarefas — Unificado (Operacional + Blueprint)

> Visão ao vivo de **dois sistemas de tarefas** renderizada com **Dataview** + **Obsidian Charts** (`dataviewjs` + `window.renderChart`):
> - `TaskNotes/Tasks` — tarefas operacionais (31 notas, plugin TaskNotes, `status: open/in-progress/em-revisao`, `priority: high/normal`, `owner`, `due`, `dateCreated`) — inclui epic `Documentação Oficial (01-14)` + 4 subtasks `GOV-001/AGORA/01-08/09-14`
> - `04-project-management/tarefas` — tarefas de blueprint e fases (64 notas: `BP-001..008` + `P01-T01..P07-T07`, `status: em-revisao/sem status`, `priority: critica/alta/critical/high`, `phase: P01..P07`, `layer: blueprint/refining/approval`, `gap_ids`)
> Veja [[System/Plugins docs/Charts Plugin Docs/Basics|Basics]] e [[System/Plugins docs/Dataview Charts/Creating Dynamic Graphs in Obsidian|Creating Dynamic Graphs]] para os padrões subjacentes.

## Pré-requisitos

1. Instale os plugins da comunidade **Dataview** e **Obsidian Charts** (`obsidian-charts` por phibr0) — já adicionados em `.obsidian/community-plugins.json` (`dataview`, `obsidian-charts`, `obsidian-chartsview-plugin`).
2. Dataview → Configurações → **Enable JavaScript Queries** e **Enable Inline JavaScript Queries** = ON (ativado).
3. Recarregue o Obsidian após ativar. Se os gráficos aparecerem como código, alterne para o modo Leitura/Preview.

> Folhas de referência: [[System/Plugins docs/Charts Plugin Docs/charts_cheatsheets|Charts Cheat-sheets]] · [[System/Plugins docs/Charts Plugin Docs/Dataview Integration|Dataview Integration]] · [[System/Plugins docs/Charts Plugin Docs/Bar Chart|Bar Chart]] · [[System/Plugins docs/Charts Plugin Docs/Pie and Donut Chart|Pie and Donut Chart]] · [[System/Plugins docs/Charts Plugin Docs/Line Chart|Line Chart]]

---

## KPIs — Dataview (Unificado + Por Fonte)

### Unificado (ambas as fontes)

```dataview
TABLE WITHOUT ID
  length(rows) as "Total (95)",
  length(filter(rows, (r) => contains(string(r.status), "open"))) as "Abertas (ops)",
  length(filter(rows, (r) => contains(string(r.status), "in-progress"))) as "Em Progresso",
  length(filter(rows, (r) => contains(string(r.status), "em-revisao"))) as "Em Revisão",
  length(filter(rows, (r) => contains(string(r.status), "pendente"))) as "Pendentes (blueprint)",
  length(filter(rows, (r) => contains(string(r.status), "concluido"))) as "Concluídas"
FROM "TaskNotes/Tasks" OR "04-project-management/tarefas"
GROUP BY true
```

```dataviewjs
const normStatus = p => { let s=p.status; if(!s) return "none"; if(Array.isArray(s)) s=s[0]; return String(s).trim(); };
const normPriority = p => String(p.priority||"none").trim();
const all = dv.pages('"TaskNotes/Tasks" or "04-project-management/tarefas"');
const ops = dv.pages('"TaskNotes/Tasks"');
const bp = dv.pages('"04-project-management/tarefas"');
const by = (pages, fn) => pages.where(fn).length;

dv.paragraph(`**Unificado (95):** Total ${all.length} · Abertas ${by(all, p=>normStatus(p)==="open")} · Em Progresso ${by(all, p=>normStatus(p)==="in-progress")} · Em Revisão ${by(all, p=>normStatus(p)==="em-revisao")} · Pendentes ${by(all, p=>normStatus(p)==="pendente")} · Concluídas ${by(all, p=>normStatus(p)==="concluido")} — **Ops:** ${ops.length} · **Blueprint/P0x:** ${bp.length}`);
```

### Detalhamento por fonte

```dataview
TABLE WITHOUT ID
  "TaskNotes/Tasks" as Fonte,
  length(rows) as Total,
  length(filter(rows, (r) => r.status = "open")) as Abertas,
  length(filter(rows, (r) => r.status = "em-revisao")) as "Em Revisão",
  length(filter(rows, (r) => r.status = "in-progress")) as "Em Progresso",
  length(filter(rows, (r) => r.priority = "high")) as Alta
FROM "TaskNotes/Tasks"
GROUP BY true
```

```dataview
TABLE WITHOUT ID
  "04-project-management/tarefas" as Fonte,
  length(rows) as Total,
  length(filter(rows, (r) => contains(string(r.status), "concluido"))) as Concluidas,
  length(filter(rows, (r) => contains(string(r.status), "em-revisao"))) as "Em Revisão",
  length(filter(rows, (r) => contains(string(r.status), "pendente"))) as Pendentes,
  length(filter(rows, (r) => contains(string(r.phase), "P03"))) as P03
FROM "04-project-management/tarefas"
GROUP BY true
```

---

## Gráficos — Estáticos (somente plugin Charts, sem JS)

> Fallback quando o DataviewJS está desativado. Valores = vault em 2026-09-02 18:30: **31 ops + 64 blueprint = 95 total** (ops: 19 open, 6 in-progress, 6 em-revisao; blueprint: 56 sem status, 8 em-revisao). Todo o texto em branco para tema escuro.

### Status unificado — rosca

```chart
type: doughnut
labels: [open, "em-revisao", "in-progress", none]
series:
  - title: Unificado por status
    data: [19, 6, 6, 56]
width: 60%
labelColors: false
legend: true
legendPosition: right
options:
  plugins:
    legend:
      labels:
        color: '#ffffff'
```

### Operacional vs Blueprint — barras

```chart
type: bar
labels: ["TaskNotes/Tasks", "04-project-management/tarefas"]
series:
  - title: Tarefas por fonte
    data: [31, 64]
beginAtZero: true
yTitle: Tarefas
options:
  plugins:
    legend:
      labels:
        color: '#ffffff'
  scales:
    x:
      ticks:
        color: '#ffffff'
      title:
        color: '#ffffff'
        display: true
      grid:
        color: 'rgba(255,255,255,0.15)'
    y:
      ticks:
        color: '#ffffff'
      title:
        color: '#ffffff'
        display: true
      grid:
        color: 'rgba(255,255,255,0.15)'
```

### Blueprint por fase — barras

```chart
type: bar
labels: [P01, P02, P03, P04, P05, P06, P07]
series:
  - title: Tarefas de blueprint por fase
    data: [7, 6, 9, 8, 7, 12, 7]
beginAtZero: true
yTitle: Tarefas
options:
  plugins:
    legend:
      labels:
        color: '#ffffff'
  scales:
    x:
      ticks:
        color: '#ffffff'
      title:
        color: '#ffffff'
        display: true
      grid:
        color: 'rgba(255,255,255,0.15)'
    y:
      ticks:
        color: '#ffffff'
      title:
        color: '#ffffff'
        display: true
      grid:
        color: 'rgba(255,255,255,0.15)'
```

### Prioridade (bruto) — barras (unificado)

```chart
type: bar
labels: [critica, alta, critical, high, normal]
series:
  - title: Unificado por prioridade (bruto)
    data: [25, 31, 5, 12, 22]
beginAtZero: true
yTitle: Tarefas
options:
  plugins:
    legend:
      labels:
        color: '#ffffff'
  scales:
    x:
      ticks:
        color: '#ffffff'
      title:
        color: '#ffffff'
        display: true
      grid:
        color: 'rgba(255,255,255,0.15)'
    y:
      ticks:
        color: '#ffffff'
      title:
        color: '#ffffff'
        display: true
      grid:
        color: 'rgba(255,255,255,0.15)'
```

---

## Gráficos — Dinâmicos (DataviewJS + Obsidian Charts)

> Cada bloco consulta o vault em tempo de renderização via `dv.pages()` e plota com `window.renderChart` — veja [[System/Plugins docs/Dataview Charts/Creating Dynamic Graphs in Obsidian|Creating Dynamic Graphs]] § Basic bar charts e [[System/Plugins docs/Charts Plugin Docs/Dataview Integration|Dataview Integration]].
> Helper `normStatus` desembrulha `status: [concluido]` (forma array nas tarefas de blueprint) vs `status: open` (forma string nas TaskNotes). Todo o texto forçado para branco (`#ffffff`) para tema escuro.

### 1) Por status unificado — rosca (ao vivo, ambas as fontes)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks" or "04-project-management/tarefas"');
const norm = p => { let s=p.status; if(!s) return "none"; if(Array.isArray(s)) s=s[0]; return String(s).trim(); };
const statuses = ["open","em-revisao","in-progress","pendente","concluido","done","none"];
const counts = statuses.map(s => pages.where(p => norm(p)===s).length);
const labels = statuses.filter((_,i)=>counts[i]>0);
const data = counts.filter(v=>v>0);
window.renderChart({ type:'doughnut', data:{ labels:labels, datasets:[{ label:'Unificado por status', data:data, backgroundColor:['#22c55e','#6366f1','#f59e0b','#06b6d4','#10b981','#9ca3af','#eab308'] }] }, options:{ plugins:{legend:{position:'right', labels:{color:'#ffffff'}}}, cutout:'58%' } }, this.container);
```

### 2) Comparativo por fonte — barras empilhadas (ao vivo)

```dataviewjs
const ops = dv.pages('"TaskNotes/Tasks"');
const bp = dv.pages('"04-project-management/tarefas"');
const norm = p => { let s=p.status; if(!s) return "none"; if(Array.isArray(s)) s=s[0]; return String(s).trim(); };
const cats = ["open","in-progress","em-revisao","pendente","concluido"];
const opsData = cats.map(c => ops.where(p=>norm(p)===c).length);
const bpData  = cats.map(c => bp.where(p=>norm(p)===c).length);
window.renderChart({ type:'bar', data:{ labels:cats, datasets:[{label:'TaskNotes/Tasks', data:opsData, backgroundColor:'#6366f1'}, {label:'04-project-management/tarefas', data:bpData, backgroundColor:'#06b6d4'}] }, options:{ plugins:{legend:{position:'top', labels:{color:'#ffffff'}}}, scales:{x:{stacked:true, ticks:{color:'#ffffff'}, grid:{color:'rgba(255,255,255,0.15)'}}, y:{stacked:true, beginAtZero:true, ticks:{color:'#ffffff', precision:0}, grid:{color:'rgba(255,255,255,0.15)'}}} } }, this.container);
```

### 3) Blueprint por fase — barras (ao vivo, só tarefas)

```dataviewjs
const pages = dv.pages('"04-project-management/tarefas"');
const phases = ["P01","P02","P03","P04","P05","P06","P07"];
const counts = phases.map(ph => pages.where(p=>String(p.phase)===ph).length);
window.renderChart({ type:'bar', data:{ labels:phases, datasets:[{label:'Blueprint por fase', data:counts, backgroundColor:'#8b5cf6'}] }, options:{ plugins:{legend:{display:false}}, scales:{x:{ticks:{color:'#ffffff'}, grid:{color:'rgba(255,255,255,0.15)'}}, y:{beginAtZero:true, ticks:{color:'#ffffff', precision:0}, grid:{color:'rgba(255,255,255,0.15)'}}} } }, this.container);
```

### 4) Blueprint por camada — rosca (ao vivo)

```dataviewjs
const pages = dv.pages('"04-project-management/tarefas"');
const layers = ["blueprint","refining","approval","governance","refinement"];
const counts = layers.map(l => pages.where(p=>String(p.layer)===l).length);
const labels = layers.filter((_,i)=>counts[i]>0);
const data = counts.filter(v=>v>0);
window.renderChart({ type:'doughnut', data:{ labels:labels, datasets:[{label:'Por camada', data:data, backgroundColor:['#6366f1','#06b6d4','#f59e0b','#10b981','#8b5cf6'], borderColor:'#1e1e1e', borderWidth:2 }] }, options:{plugins:{legend:{position:'right', labels:{color:'#ffffff'}}}, cutout:'55%'} }, this.container);
```

### 5) Prioridade unificada — barras (ao vivo, valores brutos)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks" or "04-project-management/tarefas"');
const normP = p => String(p.priority||"none").trim();
const prios = ["critica","alta","critical","high","normal","low","none"];
const counts = prios.map(v => pages.where(p=>normP(p)===v).length);
const labels = prios.filter((_,i)=>counts[i]>0);
const data = counts.filter(v=>v>0);
window.renderChart({ type:'bar', data:{ labels:labels, datasets:[{label:'Unificada por prioridade (bruto)', data:data, backgroundColor:'#f59e0b'}] }, options:{plugins:{legend:{display:false}}, scales:{x:{ticks:{color:'#ffffff'}, grid:{color:'rgba(255,255,255,0.15)'}}, y:{beginAtZero:true, ticks:{color:'#ffffff', precision:0}, grid:{color:'rgba(255,255,255,0.15)'}}}} }, this.container);
```

### 6) Carga por responsável — barras horizontais (ao vivo, unificado)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks" or "04-project-management/tarefas"');
const owners = {};
pages.forEach(p=>{
  const list = p.owner ? (Array.isArray(p.owner)?p.owner:[p.owner]) : [];
  list.forEach(o=>{
    const key = String(o).replace(/\[\[|\]\]/g,'').trim();
    if(!key) return;
    owners[key]=(owners[key]||0)+1;
  });
});
const labels = Object.keys(owners).sort((a,b)=>owners[b]-owners[a]).slice(0,12);
const data = labels.map(k=>owners[k]);
const palette = ['#6366f1','#06b6d4','#f59e0b','#10b981','#8b5cf6','#ec4899','#f43f5e','#14b8a6','#eab308','#22c55e','#3b82f6','#a855f7'];
window.renderChart({ type:'bar', data:{ labels:labels, datasets:[{label:'Tarefas por responsável (top 12)', data:data, backgroundColor: labels.map((_,i)=>palette[i%palette.length]), borderColor:'#1e1e1e', borderWidth:1 }] }, options:{ indexAxis:'y', plugins:{legend:{display:false}, tooltip:{enabled:true}, datalabels:{anchor:'end', align:'right', color:'#ffffff', font:{weight:'bold', size:11}, formatter:(v)=>v} }, scales:{x:{beginAtZero:true, ticks:{color:'#ffffff', precision:0}, grid:{color:'rgba(255,255,255,0.15)'}}, y:{ticks:{color:'#ffffff'}, grid:{color:'rgba(255,255,255,0.15)'}}} } }, this.container);
```

### 7) Criação ao longo do tempo — linha (ao vivo, por semana, ambas as fontes)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks" or "04-project-management/tarefas"');
const byWeek = {};
pages.forEach(p=>{
  const raw = p.dateCreated || p.created || p.dateModified || p.updated;
  const d = dv.date(raw);
  if(!d) return;
  const key = d.toFormat("yyyy-'W'WW");
  byWeek[key]=(byWeek[key]||0)+1;
});
const labels = Object.keys(byWeek).sort();
const data = labels.map(k=>byWeek[k]);
window.renderChart({ type:'line', data:{ labels:labels, datasets:[{label:'Novas tarefas / semana (unificado)', data:data, tension:0.35, fill:true, borderColor:'#6366f1', backgroundColor:'rgba(99,102,241,0.12)', pointBackgroundColor:'#ffffff'}] }, options:{ plugins:{legend:{display:false}}, scales:{x:{ticks:{color:'#ffffff', maxRotation:45}, grid:{color:'rgba(255,255,255,0.15)'}}, y:{beginAtZero:true, ticks:{color:'#ffffff', precision:0}, grid:{color:'rgba(255,255,255,0.15)'}}} } }, this.container);
```

---

## Tabelas — Dataview (Unificado + Por Fonte)

### Unificado — tarefas alta/crítica (ambas as fontes)

```dataview
TABLE WITHOUT ID file.link as Tarefa, status as Status, priority as Prioridade, phase as Fase, layer as Camada, owner as Responsável
FROM "TaskNotes/Tasks" OR "04-project-management/tarefas"
WHERE contains(string(priority), "high") OR priority = "critica" OR priority = "critical" OR priority = "alta"
SORT priority DESC, phase ASC
LIMIT 20
```

### TaskNotes/Tasks — alta prioridade em aberto

```dataview
TABLE status as Status, priority as Prioridade, owner as Responsável, due as Vencimento, file.mtime as Atualizado
FROM "TaskNotes/Tasks"
WHERE priority = "high" AND !contains(string(status), "done") AND !contains(string(status), "concluido")
SORT due ASC
```

### TaskNotes/Tasks — vencimento ≤ 7 dias

```dataview
TABLE WITHOUT ID file.link as Tarefa, status as Status, priority as Prioridade, due as Vencimento, owner as Responsável
FROM "TaskNotes/Tasks"
WHERE due AND date(due) <= date(today) + dur(7 days) AND !contains(string(status), "done") AND !contains(string(status), "concluido")
SORT due ASC
```

### 04-project-management/tarefas — por fase com status

```dataview
TABLE task_id as ID, status as Status, priority as Prioridade, layer as Camada, gap_ids as Gaps, target_file as ArquivoAlvo
FROM "04-project-management/tarefas"
WHERE phase = "P03"
SORT task_id ASC
```

### 04-project-management/tarefas — pendentes (precisam de trabalho)

```dataview
TABLE WITHOUT ID file.link as Tarefa, phase as Fase, status as Status, priority as Prioridade, gap_ids as Gaps
FROM "04-project-management/tarefas"
WHERE contains(string(status), "pendente")
SORT phase ASC, task_id ASC
LIMIT 25
```

### Unificado — modificadas recentemente (ambas as fontes)

```dataview
TABLE status as Status, priority as Prioridade, phase as Fase, dateModified as Modificado, owner as Responsável
FROM "TaskNotes/Tasks" OR "04-project-management/tarefas"
SORT dateModified DESC
LIMIT 15
```

---

## Bases — visões incorporadas (sem necessidade de plugin)

>Fallback rápido quando Dataview/Charts estão desativados.

- **Kanban Ops (TaskNotes):** ![[TaskNotes/Views/kanban-default.base]]
- **Agenda Ops:** ![[TaskNotes/Views/agenda-default.base]]
- **Lista Ops:** ![[TaskNotes/Views/tasks-default.base]] — agora 4 views: Today / Next 7 Days / Backlog / All Tasks
- **Documentação Oficial — Kanban + Horizonte + Canvas:** ![[TaskNotes/Views/documentacao-oficial.base]] — 6 views: Kanban por Status, Kanban por Horizonte, Lista AGORA, Bloqueados (GOV-001), Epic + Subtasks, Canvas — Documentação Oficial (columns + edges `blockedBy`)
- **Blueprint — todas P01..P07 (64 tarefas + 8 BP):** ![[04-project-management/tarefas/HUB_Tarefas_Projeto.base]]
- **Blueprint — quadro de execução (56 tarefas de fase, 9 visões):** ![[04-project-management/registros-trabalho/HUB_Tarefas_Fases_Execucao.base]]

---

## Como estender

- Filtre gráficos unificados para uma única fonte: troque `dv.pages('"TaskNotes/Tasks" or "04-project-management/tarefas"')` por `dv.pages('"TaskNotes/Tasks"')` ou `dv.pages('"04-project-management/tarefas"')`.
- Troque `status`/`priority`/`phase`/`layer`/`owner` por `gap_ids`, `area`, `projects`, `contexts` — veja [[System/Plugins docs/Charts Plugin Docs/Types|Types]] e [[System/Plugins docs/Charts Plugin Docs/charts_cheatsheets|Cheat-sheets]] § Obsidian Charts Plugin.
- Para séries temporais estilo Tracker (se adicionar campos inline `weight::` ou `#habit`), use um bloco `tracker` — padrão em [[System/Plugins docs/Charts Plugin Docs/charts_cheatsheets|Tracker Cheat-sheet]].
- Veja [[System/Plugins docs/Dataview Charts/Plotting Task Completions with DataviewJS and Obsidian Charts|Plotting Task Completions]] para scripts de conclusão ao longo do tempo (requer `completionDate::` / `✅`).

## Verificação

1. Abra esta nota no **modo Leitura**.
2. Confirme que os 7 gráficos dinâmicos renderizam (rosca, barras empilhadas, barras por fase, rosca por camada, barras por prioridade, barras por responsável, linha) — todos os rótulos/ticks/legendas em branco.
3. Os KPIs no topo devem mostrar `Total 95` (31 ops + 64 blueprint — ops: 19 open/6 in-progress/6 em-revisao; blueprint: 56 sem status/8 em-revisao) — ajuste após adicionar/arquivar tarefas.
4. Se os gráficos ficarem em branco: verifique o Console do Desenvolvedor por `window.renderChart is not a function` → instale/ative Obsidian Charts e Dataview (JS Queries ON).
5. Valide que `![[TaskNotes/Views/documentacao-oficial.base]]` mostra 6 views e que `Canvas — Documentação Oficial` desenha edges `GOV-001 → AGORA → 01-08 → 09-14` via `blockedBy`.
