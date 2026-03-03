# Component Specifications

This document provides a deep dive into the internal structure of the GDC platform's building blocks.

## 1. Next.js App Router (Frontend)
- **Role:** Handles routing, SSR, and client-side interactions.
- **Key Files:** `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/docs/`.
- **State Management:** React Context / Server-side sessions via Supabase.

## 2. Supabase (Backend-as-a-Service)
- **Database:** PostgreSQL with RLS enabled on all tables.
- **Auth:** Email-based authentication with student ID verification.
- **Storage:** S3-compatible buckets for game artifacts.

## 3. Discord Integration (Webhook Layer)
- **Alerts:** Triggered by database webhooks for incoming submissions.
- **Security:** Webhook URLs stored strictly as environment variables.

---
*Status: Stub - Detailed mapping will be added during Phase 2 development.*
