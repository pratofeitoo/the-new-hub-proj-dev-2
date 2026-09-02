---
title: Task Dashboard
tags:
  - dashboard
  - tasknotes
description: Dynamic task dashboard powered by Dataview + Obsidian Charts
---

# Task Dashboard

> Live overview of `TaskNotes/Tasks` — KPIs, distributions and trends rendered with **Dataview** + **Obsidian Charts** (`dataviewjs` + `window.renderChart`). See [[System/Plugins docs/Charts Plugin Docs/Basics|Basics]] and [[System/Plugins docs/Dataview Charts/Creating Dynamic Graphs in Obsidian|Creating Dynamic Graphs]] for the underlying patterns.

## Prerequisites

1. Install community plugins **Dataview** and **Obsidian Charts** (`obsidian-charts` by phibr0).
2. Dataview → Settings → **Enable JavaScript Queries** and **Enable Inline JavaScript Queries** = ON.
3. Reload Obsidian after enabling. If charts show as code, switch to Reading/Preview mode.

> Reference cheat-sheets: [[System/Plugins docs/Charts Plugin Docs/charts_cheatsheets|Charts Cheat-sheets]] · [[System/Plugins docs/Charts Plugin Docs/Dataview Integration|Dataview Integration]] · [[System/Plugins docs/Charts Plugin Docs/Bar Chart|Bar Chart]] · [[System/Plugins docs/Charts Plugin Docs/Pie and Donut Chart|Pie and Donut Chart]] · [[System/Plugins docs/Charts Plugin Docs/Line Chart|Line Chart]]

---

## KPIs — Dataview

```dataview
TABLE WITHOUT ID
  length(rows) as "Total",
  length(filter(rows, (r) => r.status = "open")) as "Open",
  length(filter(rows, (r) => r.status = "in-progress")) as "In Progress",
  length(filter(rows, (r) => r.status = "em-revisao")) as "Em Revisão",
  length(filter(rows, (r) => r.priority = "high")) as "High Priority",
  length(filter(rows, (r) => !r.due)) as "No Due Date"
FROM "TaskNotes/Tasks"
GROUP BY true
```

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks"');
const total = pages.length;
const byStatus = s => pages.where(p => String(p.status) === s).length;
const high = pages.where(p => String(p.priority) === "high").length;
const noDue = pages.where(p => !p.due).length;

dv.paragraph(`**Total:** ${total} · **Open:** ${byStatus("open")} · **In Progress:** ${byStatus("in-progress")} · **Em Revisão:** ${byStatus("em-revisao")} · **High:** ${high} · **No due:** ${noDue}`);
```

---

## Charts — Static (Charts plugin only, no JS)

Use these when DataviewJS is off — values reflect vault on 2026-09-02 (26 tasks).

### Status distribution — doughnut

```chart
type: doughnut
labels: [open, em-revisao, in-progress]
series:
  - title: Tasks by status
    data: [18, 5, 3]
width: 55%
labelColors: true
legend: true
legendPosition: right
```

### Priority distribution — bar

```chart
type: bar
labels: [high, normal]
series:
  - title: Tasks by priority
    data: [5, 21]
beginAtZero: true
yTitle: Tasks
```

### Owner workload — horizontal bar

```chart
type: bar
labels: [Tamara, "PF Rezende", Marcos]
series:
  - title: Tasks per owner
    data: [22, 18, 10]
indexAxis: y
beginAtZero: true
xTitle: Tasks
```

---

## Charts — Dynamic (DataviewJS + Obsidian Charts)

> These query `TaskNotes/Tasks` at render time via `dv.pages()` and plot with `window.renderChart` — see [[System/Plugins docs/Dataview Charts/Creating Dynamic Graphs in Obsidian|Creating Dynamic Graphs]] § Basic bar charts and [[System/Plugins docs/Charts Plugin Docs/Dataview Integration|Dataview Integration]].

### 1) Tasks by status — doughnut (live)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks"');
const statuses = ["open", "em-revisao", "in-progress", "pendente", "concluido", "done", "none"];
const counts = statuses.map(s => pages.where(p => String(p.status).trim() === s).length);
const labels = statuses.filter((_, i) => counts[i] > 0);
const data = counts.filter(v => v > 0);

const chartData = {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: 'Tasks by status',
            data: data,
            backgroundColor: ['#6366f1','#06b6d4','#f59e0b','#84cc16','#ef4444','#10b981','#9ca3af']
        }]
    },
    options: {
        plugins: { legend: { position: 'right' } },
        cutout: '55%'
    }
};
window.renderChart(chartData, this.container);
```

### 2) Tasks by priority — bar (live)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks"');
const prios = ["high","normal","low","none"];
const counts = prios.map(p => pages.where(x => String(x.priority) === p).length);
const labels = prios.filter((_, i) => counts[i] > 0);
const data = counts.filter(v => v > 0);

const chartData = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{ label: 'Tasks', data: data, backgroundColor: ['#ef4444','#f59e0b','#10b981','#9ca3af'] }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
    }
};
window.renderChart(chartData, this.container);
```

### 3) Workload by owner — horizontal bar (live)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks"');
// flatten owner (TaskNotes stores owner as list)
const owners = {};
pages.forEach(p => {
    const list = p.owner ? (Array.isArray(p.owner) ? p.owner : [p.owner]) : [];
    list.forEach(o => {
        const key = String(o).replace(/\[\[|\]\]/g,'');
        owners[key] = (owners[key] || 0) + 1;
    });
});
const labels = Object.keys(owners);
const data = Object.values(owners);

const chartData = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{ label: 'Tasks per owner', data: data }]
    },
    options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true, ticks: { precision: 0 } } }
    }
};
window.renderChart(chartData, this.container);
```

### 4) Tasks created over time — line (live, by week)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks"').where(p => p.dateCreated);
const byWeek = {};
pages.forEach(p => {
    const d = dv.date(p.dateCreated);
    if (!d) return;
    const key = d.toFormat("yyyy-'W'WW");
    byWeek[key] = (byWeek[key] || 0) + 1;
});
const labels = Object.keys(byWeek).sort();
const data = labels.map(k => byWeek[k]);

const chartData = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'New tasks / week',
            data: data,
            tension: 0.35,
            fill: true,
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99,102,241,0.12)'
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { precision: 0 } }, x: { ticks: { maxRotation: 45 } } }
    }
};
window.renderChart(chartData, this.container);
```

### 5) Due-date horizon — bar (live, from Dataview formulas)

```dataviewjs
const pages = dv.pages('"TaskNotes/Tasks"');
const buckets = { "Overdue": 0, "Today": 0, "This week": 0, "Later": 0, "No due date": 0 };
const today = dv.date("today");
pages.forEach(p => {
    if (!p.due) { buckets["No due date"]++; return; }
    const d = dv.date(p.due);
    if (!d) { buckets["No due date"]++; return; }
    const diff = Math.floor((d - today) / (1000*60*60*24));
    if (diff < 0) buckets["Overdue"]++;
    else if (diff === 0) buckets["Today"]++;
    else if (diff <= 7) buckets["This week"]++;
    else buckets["Later"]++;
});
const labels = Object.keys(buckets);
const data = labels.map(k => buckets[k]);

const chartData = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{ label: 'Tasks', data: data, backgroundColor: '#06b6d4' }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
    }
};
window.renderChart(chartData, this.container);
```

---

## Tables — Dataview

### Open high-priority tasks

```dataview
TABLE status as Status, priority as Priority, owner as Owner, due as Due, file.mtime as Updated
FROM "TaskNotes/Tasks"
WHERE priority = "high" AND status != "done" AND status != "concluido"
SORT priority DESC, due ASC
```

### Due soon / overdue (7 days)

```dataview
TABLE WITHOUT ID file.link as Task, status, priority, due, owner
FROM "TaskNotes/Tasks"
WHERE due AND date(due) <= date(today) + dur(7 days) AND status != "done" AND status != "concluido"
SORT due ASC
```

### Recently modified

```dataview
TABLE status, priority, dateModified as Modified, owner
FROM "TaskNotes/Tasks"
SORT dateModified DESC
LIMIT 10
```

---

## Bases — embedded views (no plugin install needed)

> TaskNotes ships these; no Dataview/Charts required. Keep them as fast fallback.

- **Kanban by status:** ![[TaskNotes/Views/kanban-default.base]]
- **Agenda (due/scheduled):** ![[TaskNotes/Views/agenda-default.base]]
- **List (all tasks):** ![[TaskNotes/Views/tasks-default.base]]

---

## How to extend

- Change `FROM "TaskNotes/Tasks"` to `FROM #project` or `FROM "04-project-management/tarefas"` to chart blueprint tasks.
- Swap `status`/`priority`/`owner` for `contexts` or `projects` — see [[System/Plugins docs/Charts Plugin Docs/Types|Types]] and [[System/Plugins docs/Charts Plugin Docs/charts_cheatsheets|Cheat-sheets]] § Obsidian Charts Plugin.
- For Tracker-style time-series (if you add `weight::` or `#habit` inline fields), use a `tracker` codeblock — pattern in [[System/Plugins docs/Charts Plugin Docs/charts_cheatsheets|Tracker Cheat-sheet]].
- See [[System/Plugins docs/Dataview Charts/Plotting Task Completions with DataviewJS and Obsidian Charts|Plotting Task Completions]] for task-completion-over-time scripts (requires `completionDate::` / `✅`).

## Verification

1. Open this note in **Reading View**.
2. Confirm 5 dynamic charts render (doughnut, bars, line).
3. Run Dataview table at top — totals should match `Total: 26` (adjust after adding/archiving tasks).
4. If charts are blank: check Developer Console for `window.renderChart is not a function` → install/enable Obsidian Charts.

