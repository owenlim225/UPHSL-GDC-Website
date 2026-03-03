# UPHSL GDC Operations Runbooks

This directory contains the operational documentation, live runbooks, troubleshooting flows, and incident response procedures specifically engineered for the Game Developers' Club platform hosted exclusively on Vercel and Supabase.

## Purpose

These Operations documents exist to ensure high availability and minimal downtime for the club:

- **Officers & Admins:** Gain immediate access to runbooks allowing them to fix broken environments during high-traffic events like Game Jam voting deadlines.
- **Frontend Engineers:** Troubleshoot Next.js caching bugs, authentication loops, or massive asset upload failures.
- **Database Admins:** Monitor Supabase API rate limits and rotate critical service keys safely without hardcoding them into client components.

## Available Infrastructure Runbooks

For each active service component:

- **[Frontend & Vercel Runbook](./runbooks/frontend-vercel.md)** - Covering SSR/ISR troubleshooting, Immediate Rollbacks, and secret key rotations.
- **[Database & Supabase Runbook](./runbooks/database-supabase.md)** - CLI migrations and RLS troubleshooting.
- **[Vercel Analytics](./runbooks/vercel-analytics.md)** - Monitoring performance and traffic spikes.

## Incident Response Protocol

Any time the main club domain (`uphsl-gdc.com`) throws consecutive 500 errors:

1. **Verify Vercel Health:** Check the Vercel analytics/functions tab for immediate code-crashing traces.
2. **Verify Supabase Uptime:** Log into the Supabase workspace to confirm the active PostgreSQL instance.
3. **Escalate:** Ping the `#web-dev` Discord channel alerting the Lead Technical Officer.

### Rollback Mandate
If an ongoing incident takes longer than **15 minutes** to root-cause, an officer must immediately trigger a **"Promote to Production"** action on the last known stable deployment in Vercel.

## File Structure

```
docs/operations/
├── README.md              ← Boilerplate structure
├── uphsl-operations-readme.md ← This file (GDC Hub)
├── runbooks/              Detailed service guides
├── incidents/             Post-mortems and classification
└── monitoring/            Dashboards and alert configs
```

---

**Status:** GDC Operations Hub Live  
**Last Updated:** 2026-03-04
