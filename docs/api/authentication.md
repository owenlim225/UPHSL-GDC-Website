# API Guide: Authentication & Structure

This document outlines the standard conventions, authentication protocols, and structural decisions for the UPHSL Game Developers' Club API integrations, answering the template configurations for the project.

## Documentation Format

- **Format:** Exclusively Markdown (`.md`).
- **Rationale:** Given the tight coupling between our Next.js App Router API endpoints and our Supabase backend (established in ADR-001), managing complex OpenAPI specifications is unnecessary overhead. Markdown files located in `docs/api/endpoints/` provide sufficient, developer-friendly references.

## Authentication Strategy

We exclusively utilize **Supabase JWTs (JSON Web Tokens)** passed via the `Authorization` header as Bearer tokens. 

### Implementation

- **Client Requests:** Frontend components should seamlessly attach the active user's session token to any secure API fetches.
- **Header Format:** `Authorization: Bearer <token>`
- **API Keys / Third Party:** There are currently no API Key or webhook authentication strategies planned. All access control is mapped strictly to internal, authenticated Club members or Officers.

## Response & Error Handling 

All API endpoints must return a standardized JSON envelope to ensure the frontend can predictably handle success and error states.

### Standard Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE_STRING",
    "message": "Human readable explanation of what failed."
  }
}
```

## Rate Limiting & Security

All routing currently runs through **Vercel Edge Functions** and directly accesses the **Supabase Cloud Managed Postgres**. Out-of-the-box infrastructure DDoS protection mitigates basic attacks. 
- At this stage, explicit application-level tracking or sliding-window rate limiting (e.g., via Redis) is deemed unnecessary overhead and has been deferred.

## Postman Collection
- We will rely strictly on the `docs/api/endpoints` reference files and curl examples embedded within them. A formal `postman-collection.json` is not maintained at this time.

---

**Status:** Accepted for Baseline Architecture  
**Last Updated:** 2026-03-03
