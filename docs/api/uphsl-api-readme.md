# UPHSL GDC API Hub

This hub centralizes all API-related documentation for the Game Developers' Club platform, focusing on the integration between Next.js and Supabase.

## Documentation Standard

Following **ADR-001**, we prioritize Markdown-based documentation over OpenAPI to maintain agility. For new endpoints, please use the [Endpoint Template](./endpoint-template.md).

## Core Guides

- **[Authentication Guide](./authentication.md)** - Details on Supabase JWTs and Bearer token usage.
- **[Endpoint Template](./endpoint-template.md)** - Blueprint for documenting new routes.
- **[System Overview](../architecture/uphsl-architecture-readme.md)** - Technical design overview.
- **[ADR Log](../adr/uphsl-adr-readme.md)** - Selection of Next.js & Supabase.

## Endpoints

- **[Users API](./endpoints/users.md)** - Profile management and role-based access.
- **[Resources API](./endpoints/resources.md)** - (Stub) Managing shared club assets and links.

## File Structure

```
docs/api/
├── README.md              ← Boilerplate structure
├── uphsl-api-readme.md    ← This file (GDC Hub)
├── authentication.md      Auth protocols
├── endpoint-template.md   Standard template
└── endpoints/             Route-specific docs
```

---

**Status:** API Hub Live  
**Last Updated:** 2026-03-04
