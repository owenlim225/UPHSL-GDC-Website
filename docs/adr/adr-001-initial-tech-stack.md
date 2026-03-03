# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records documenting significant technical decisions made during the project.

## What are ADRs?

ADRs are documents that capture important architectural decisions along with their context and consequences. They help teams:

- **Preserve knowledge** - Understand why decisions were made
- **Avoid repetition** - Don't re-debate settled decisions
- **Onboard new team members** - Quickly understand system rationale
- **Track evolution** - See how architecture changes over time

# ADR: Initial Tech Stack Selection

**Status:** Accepted  
**Date:** 2026-03-03  
**Deciders:** UPHSL GDC Leadership  
**Consulted:** System Architects  
**Informed:** Development Team

## Context

The UPHSL Game Developers' Club website requires a foundational technology stack. We need an architecture that supports a public-facing informative website, alongside a member and officer dashboard for game submission and approval workflows. The solution must provide excellent developer experience, cost-effective scaling out of the box, and a robust relational database capable of handling roles and auth. We need to establish our foundational technologies so we can begin feature development.

## Decision

We have decided to adopt the following foundational stack:
- **Frontend Application:** Next.js (App Router)
- **Database & Authentication:** Supabase (PostgreSQL, Postgres Auth)
- **Deployment & Hosting:** Vercel (Next.js) & Supabase Managed Cloud
- **Styling:** Tailwind CSS

## Consequences

### Positive
- Next.js combined with Vercel offers seamless deployment and optimal frontend rendering (SSR/ISR) for the public-facing content, which streamlines SEO for the UPHSL GDC landing pages.
- Supabase provides a fully managed PostgreSQL database accompanied immediately by functional Authentication and Row Level Security (RLS) policies, massively expediting our auth and logic workflows compared to building a custom API server.
- The stack allows developers to manage the backend, DB, and frontend inside a unified monorepo or tightly coupled environment ecosystem.

### Negative
- Next.js paradigm shifts. Server Actions and the App Router can have a significant learning curve out of the gate for junior developers.
- Tight coupling to Supabase services requires understanding and maintaining RLS (Row Level Security) inside the database environment instead of traditional application-level middleware.

### Neutral
- Styling is fully controlled through utility classes leveraging Tailwind. Design standardizations will be bound to `design-system.json` tokens bridging directly into `tailwind.config` and `shadcn/ui` will be used for pre-built components.

## Alternatives Considered

### Alternative 1: MERN Stack (React + Express + Node + MongoDB)
- **Pros:** Ubiquitous, easy to find learning materials and tutorials; separate API layer is cleanly separated.
- **Cons:** Additional deployment complexity (needs backend hosting + frontend hosting + detached DB service); lacks the immediate out-of-the-box auth & RLS integrations offered by Supabase; no inherent SSR without adding additional frameworks to the React layer.
- **Why not chosen:** Time to market and deployment complexity overhead for our dashboards is higher than the integrated Supabase/Next.js stack.

## References

- [SYSTEM ARCHITECTURE OVERVIEW](../reference/SYSTEM-ARCHITECTURE.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
