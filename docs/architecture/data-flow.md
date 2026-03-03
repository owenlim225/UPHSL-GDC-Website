# Data Flow Diagrams

Visualizing how data travels through the GDC system.

## 1. Member Registration Flow
`User -> Supabase Auth -> Trigger -> PostgreSQL (Profiles table)`

## 2. Game Submission Flow
`Member -> Next.js Form -> Supabase Storage (Assets) -> PostgreSQL (Games table) -> Discord Webhook (Officer Alert)`

## 3. Officer Approval Flow
`Officer -> Dashboard -> Next.js Server Action -> PostgreSQL (RLS Bypass via Service Role) -> Update Game Status`

---
*Status: Stub - Detailed Mermaid diagrams pending development of Phase 2 features.*
