# UPHSL GDC — Project documentation

This directory is the main entry point for all project documentation for the **UPHSL Game Developers' Club** website and related tooling.

---

## Who this is for

| Audience | What you do |
|----------|-------------|
| **Viewers** | Use the [public website](/) to browse the club, events, projects, gallery, and FAQ. No login required. |
| **GDC members** | (Coming later) Use a **member dashboard** to submit and manage your games. |
| **Officers** | (Coming later) Use an **officer dashboard** to review and approve games submitted by students. |
| **Developers & contributors** | Use this docs folder and the links below to understand the codebase, APIs, and operations. |

Backend and **Supabase** integration are planned for later in development.

---

## Root-level docs (repo root)

These live in the repository root, next to `package.json`:

| Document | Description |
|----------|-------------|
| [PRD.md](../PRD.md) | Product requirements and contract/service agreement context. |
| [DevOps.md](../DevOps.md) | DevOps and infrastructure strategy (CI/CD, monitoring, incident response). |
| [draft.md](../draft.md) | Spec template for proposals (title, description, abstract, specification, rationale). |
| [design-system.json](../design-system.json) | Design tokens (colors, typography, spacing, radii) for the website. Keep UI consistent here. |
| [README.md](../README.md) | Main project README (setup, scripts, assets). |

---

## Documentation structure (`docs/`)

```
docs/
├── README.md              ← You are here
├── reference/             Quick reference guides
├── architecture/          System design and component specs
├── api/                   API docs (endpoints, schemas, examples)
├── operations/            Runbooks, troubleshooting, incident response
├── adr/                   Architecture Decision Records
└── mdx/                   MDX content (getting-started, guides, FAQ)
```

### reference/

Quick lookups and high-level technical overviews.

- [TECHNICAL-SUMMARY.md](reference/TECHNICAL-SUMMARY.md) — Tech stack, architecture pattern, API structure.
- [SYSTEM-ARCHITECTURE.md](reference/SYSTEM-ARCHITECTURE.md) — System architecture overview.
- [ARCHITECTURE-VISUAL-MAP.md](reference/ARCHITECTURE-VISUAL-MAP.md) — Visual architecture diagrams.
- [API-REFERENCE.md](reference/API-REFERENCE.md) — API reference.
- [COMPLETE-MONOREPO-STRUCTURE.md](reference/COMPLETE-MONOREPO-STRUCTURE.md) — Repo layout.
- [MASTER-FILE-INDEX.md](reference/MASTER-FILE-INDEX.md) — Master file index.

See [reference/README.md](reference/README.md) for the full list.

### architecture/

Detailed architecture: system overview, component specs, data flow, deployment.  
See [architecture/README.md](architecture/README.md).

### api/

API documentation: endpoints, schemas, authentication, examples.  
See [api/README.md](api/README.md).

### operations/

Runbooks, deployment, monitoring, incident response, troubleshooting.  
See [operations/README.md](operations/README.md).

### adr/

Architecture Decision Records — why we chose certain tech or designs.  
See [adr/README.md](adr/README.md).

### mdx/

MDX docs (getting started, planning, technical guide, skills, FAQ).  
See [mdx/README.md](mdx/README.md).

---

## Quick guide by role

### For developers

1. Read the main [README.md](../README.md) (setup, run, build).
2. Read [reference/TECHNICAL-SUMMARY.md](reference/TECHNICAL-SUMMARY.md) for stack and structure.
3. Use [reference/SYSTEM-ARCHITECTURE.md](reference/SYSTEM-ARCHITECTURE.md) and [architecture/](architecture/) for system design.
4. Use [reference/API-REFERENCE.md](reference/API-REFERENCE.md) and [api/](api/) for endpoints and integration.

### For operations / DevOps

1. Use [operations/](operations/) for runbooks, deployment, and incident response.
2. Use [DevOps.md](../DevOps.md) for overall DevOps and infrastructure strategy.

### For architecture decisions

1. Check [adr/](adr/) for existing decisions.
2. Add a new ADR when making significant technical choices.

---

## Getting started (contributors)

1. Read the main [README.md](../README.md).
2. Read [reference/TECHNICAL-SUMMARY.md](reference/TECHNICAL-SUMMARY.md).
3. Explore [architecture/](architecture/) and [api/](api/) as needed.
4. Follow [design-system.json](../design-system.json) for UI work.

---

## Roadmap (context for docs)

- **Public site** — Live; viewers browse club info, events, projects, gallery, FAQ.
- **Member dashboard** — Planned: members submit and manage their games.
- **Officer dashboard** — Planned: officers approve student-submitted games.
- **Backend / Supabase** — Planned: auth, data, and APIs for the dashboards.

Docs will be updated as these features are added.

---

## Contributing to docs

- Use clear, concise language.
- Include examples where they help.
- Keep diagrams and links up to date.
- Link related documents.
- When changing UI, keep [design-system.json](../design-system.json) and this README in sync.
