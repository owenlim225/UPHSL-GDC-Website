# Runbook: Supabase & PostgreSQL

## Overview
Operational guide for managing the Supabase backend, including database migrations and auth settings.

## Common Tasks
- **Migration Sync:** Ensuring local schema matches production via Supabase CLI.
- **RLS Troubleshooting:** Verifying why a user might be getting empty results even when authenticated.
- **Key Rotation:** Procedures for rotating the `ANON` and `SERVICE_ROLE` keys.

## Monitoring
Check the Supabase Dashboard "Reports" section for:
- Database size / disk usage.
- Auth success/failure rates.
- API request latency.

---
*Status: Draft - Updates pending next major schema migration.*
