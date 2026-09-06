---
title: Ideon — capability evaluation
description: Working evaluation of Ideon as a spatial project workspace, MCP control surface, and automation platform.
type: reference
tags:
  - ideon
  - agentic-ai
  - mcp
  - capability-evaluation
date: 2026-09-06
---

# Ideon — capability evaluation

## Executive assessment

Ideon is a self-hosted, collaborative spatial workspace. It organizes project resources as blocks and links on an infinite 2D canvas, with realtime CRDT synchronization, project roles, snapshots, files, Kanban boards, webhooks, cron actions, and an MCP server.

Ideon is more operational than a document-centered knowledge base, but it is not an autonomous AI. Its reasoning comes from the connected agent; Ideon supplies the visual state, control surface, automation primitives, and persistent project model.

### Capability rating

| Dimension | Assessment |
| --- | --- |
| Autonomous goals and initiative | Low |
| Agent-accessible workspace | Very high |
| Canvas and graph manipulation | Very high |
| Kanban/project control | High |
| Event and schedule automation | High |
| General-purpose AI reasoning | Low |
| Host-side operational execution | Medium–high, mainly through the Shell Block |
| Human/agent collaboration | Very high |

## Live MCP verification

The local Ideon server is reachable at `http://localhost:3000/api/mcp` and authenticated successfully after the API key was configured.

The live MCP server currently exposes **20 tools**, although the official MCP guide states 14. The live tool list is authoritative for the installed version.

The connected API key currently sees one project:

- **New HUB v-02** — 233 blocks

No data was modified during this verification.

## What Ideon can do through MCP

### Projects and canvas

- List accessible projects.
- Read project metadata, block counts, link counts, and canvas bounds.
- List blocks with type, position, dimensions, and previews.
- Read full block content, data, metadata, and geometry.
- Search block content and metadata.
- Create individual blocks or atomic batches of up to 50 blocks.
- Place blocks relative to an anchor or at explicit coordinates.
- Update block content, data, metadata, position, and dimensions.
- Delete blocks, including connected links.
- List, create, and delete canvas connections.

Supported block types include notes, links, files, GitHub blocks, palettes, contacts, videos, snippets, checklists, Kanban boards, sketches, shells, folders, Vercel blocks, webhooks, cron blocks, LaTeX, calendars, and frames.

### Kanban and workflow control

- List Kanban columns and tasks.
- Create, update, move, and delete tasks.
- Create, rename, delete, and reorder columns.
- Create, update, and delete custom fields.
- Assign users and update task field values.
- Create or delete task relationships such as `blocks`, `blocked-by`, and `relates-to`.

### Spatial reasoning support

Ideon’s MCP design gives an agent spatial context. The agent can inspect the existing layout, place related blocks near an anchor, create links to represent relationships, and use batch placement for structured groups.

## What an agent can practically achieve

An agent with Ideon access can:

- Build and maintain a visual project map.
- Convert planning notes into Kanban tasks.
- Organize tasks spatially by phase, domain, or dependency.
- Create relationship graphs between resources.
- Maintain checklists and workflow boards.
- Add architecture notes, snippets, diagrams, files, and references to a project canvas.
- Keep a shared canvas synchronized while humans collaborate.
- Search an existing canvas and summarize its current state.
- Build visual dashboards and control surfaces from blocks.
- Use task dependencies and custom fields to maintain structured execution state.

## Automation outside the MCP tool surface

The Ideon documentation also describes capabilities that are not represented as direct MCP tools:

- **Webhook Blocks:** authenticated HTTP events can trigger predefined actions.
- **Cron Blocks:** scheduled actions can run server-side using UTC cron schedules.
- **Automation actions:** set block state, change color, create a Kanban task, or prepend text to a note.
- **Shell Block:** an interactive terminal can execute commands on the Ideon host, restricted to project creators/owners and configurable through `SHELL_MAX_SESSIONS`.
- **Vercel Block:** the UI can monitor deployments, trigger redeploys, inspect logs, and manage environment variables when configured.

These features make Ideon a useful automation and operations surface, but the documented Webhook/Cron actions are predefined event-to-action workflows rather than fully autonomous reasoning loops.

## What Ideon cannot do through the connected MCP tools

The current MCP surface does not provide tools to:

- Create or delete entire projects.
- Manage users, invitations, roles, or project permissions.
- Manage API keys or account settings.
- Upload arbitrary binary content directly through a dedicated MCP upload operation.
- Read or modify the database directly.
- Run arbitrary shell commands through MCP.
- Interactively control an existing Shell Block through MCP.
- Inspect Webhook/Cron execution logs through dedicated MCP tools.
- Trigger Vercel actions directly through MCP.
- Export a canvas as PNG through MCP.
- Parse XLSX/CSV files into structured tables natively.
- Choose goals, reason, plan, or run an autonomous AI loop without an external model.

UI capabilities may exceed the MCP surface. A feature documented for the web interface should not automatically be treated as an MCP capability.

## Safety and authorization boundary

MCP reads require viewer-level access. MCP writes require editor-level access; destructive block, link, and task operations should still require deliberate confirmation in an agent workflow.

The MCP server is authenticated with an Ideon API key and rate-limited to 60 requests per minute per key. Request, content, batch, geometry, and search-size limits also constrain large operations.

The Shell Block is especially sensitive because commands execute on the server running Ideon. It should be disabled or restricted when the instance is exposed beyond a trusted environment.

## Final classification

> Ideon is an agent-operable spatial project-control environment with MCP mutation, Kanban coordination, realtime collaboration, and server-side automation—not an autonomous agent.

## Official evidence

- [Ideon documentation overview](https://www.theideon.com/docs)
- [MCP guide](https://www.theideon.com/docs/guides/mcp)
- [Blocks reference](https://www.theideon.com/docs/concepts/blocks)
- [Automation guide](https://www.theideon.com/docs/guides/automation)
- [Workspace and projects](https://www.theideon.com/docs/concepts/workspace)
- [Collaboration guide](https://www.theideon.com/docs/guides/collaboration)
- [Security model](https://www.theideon.com/docs/architecture/security)
- [Installation and configuration](https://www.theideon.com/docs/installation)
