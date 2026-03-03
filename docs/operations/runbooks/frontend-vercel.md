# Next.js Frontend Runbook

**Service:** Frontend Application (Next.js)  
**Owner:** GDC Technical Lead  
**Last Updated:** 2026-03-03

## Overview

The primary public-facing UPHSL Game Developers' Club website and authenticated dashboard components. This service handles server-side rendering, API routing, and interacting directly with the central Supabase database using Next.js Server Actions.

## Architecture

The frontend is hosted globally on the **Vercel Edge Network**. Push-to-deploy is enabled on the `main` GitHub branch containing the `src/` directory monorepo structure.

## Health & Domain Configuration

- **Health Check URL:** `https://uphsl-gdc.com/api/v1/health` (Internal Next.js API route verifying simple DB connection).
- **Domains:** `uphsl-gdc.com` (Primary production domain automatically provisioned with Let's Encrypt SSL via Vercel).
- **Branch Domains:** Every pull request generates a unique `.vercel.app` staging URL for immediate UAT (User Acceptance Testing) by Officers.

## Deployment & Reversion

### Normal Production Deployment
- **Method:** Merge a Pull Request into the `main` branch.
- **Verification:** Monitor the `#web-dev` Discord channel for the successful Vercel build webhook. 

### Immediate "Hotfix" Rollback Process
If a deployment critical failure occurs (e.g., CSS entirely broken, rendering crashes):
1. Login to the **Vercel Dashboard** using the club's shared administration GitHub OAuth.
2. Select the `uphsl-gdc-website` project.
3. Click the **Deployments** tab.
4. Locate the last stable deployment before the incident.
5. Click the three vertical dots (`...`) -> **Promote to Production** -> **Confirm**.
6. The site will revert to the previous code state across global edge nodes in under 15 seconds.
7. Open a Git Issue to track the failure and fix the `main` branch code.

## Critical Troubleshooting

### Incident A: "500 Internal Server Error" on Dashboard
**Symptoms:** Upon visiting `/dashboard`, users immediately see a white screen with a Next.js Server Error.  
**Likely Cause:** A mismatched or rotated Supabase API Key.
**Resolution Steps:**
1. Check the Vercel Function logs for the specific error: `Invalid API key or access token`.
2. Retrieve the active `anon` public key and `service_role` key from the Supabase Project Dashboard under Settings > API.
3. Match them against the Vercel Environment Variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`.
4. If values mismatch, update Vercel and **Redeploy** to clear the cached variables.

### Incident B: Members Loop Back to Login Screen (Auth Failing)
**Symptoms:** Student authenticates, URL redirects to `/dashboard`, but then immediately bounces back to `/login`.  
**Likely Cause:** Corrupted CSRF Tokens or `supabase.auth` cookie issues within the Next.js Middleware.
**Resolution Steps:**
1. This is a common local dev mismatch. Advise the student to clear their browser cache, or open Incognito Mode to verify if it's a client-bound cookie storage issue.
2. If happening globally across all users, confirm the `site_url` in Supabase Auth config strictly matches `https://uphsl-gdc.com` and that the redirect URLs are securely whitelisted.

### Incident C: Vercel Function Timeout (504 Gateway Timeout)
**Symptoms:** Submitting heavy game artifact zip files fails consistently.
**Likely Cause:** Server Actions hit the strict 10-second timeout ceiling for Vercel Hobby/Pro Edge functions while streaming a large buffer to Supabase Object Storage.
**Resolution Steps:**
1. We cannot process massive payloads server-side infinitely. 
2. Transition the architecture flow so the Next.js server merely creates a `Pre-signed Upload URL` quickly.
3. Return that signed URL to the browser client and allow the React client to upload the 2GB Unity build directly into Supabase Storage, bypassing the Vercel execution limits entirely.

## Secret Rotation Policy

If `SUPABASE_SERVICE_ROLE_KEY` is accidentally leaked to GitHub:
1. Immediately navigate to **Supabase Dashboard > Settings > API** and click `Roll Key` on the Service Role.
2. Copy the newly generated key.
3. Navigate to **Vercel Dashboard > Settings > Environment Variables**.
4. Edit the `SUPABASE_SERVICE_ROLE_KEY` value with the new key.
5. Trigger an empty commit or manual Redeploy on Vercel to flush the old secrets from the running edge containers.

## Emergency Contacts

- **On-Call Engineer:** Lead Frontend Officer (Discord: `@frontend_lead`)
- **Technical Lead:** GDC President / Technical Advisor
- **Escalation Trigger:** If both the Production site and the member Dashboard login remain unavailable for longer than 30 consecutive minutes.
