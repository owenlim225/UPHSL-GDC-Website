# Resources API

## GET /api/v1/resources

List of shared resources (tutorials, assets, external links) available to GDC members.

### Authentication
**None / Member.** 
- Public resources are viewable by everyone.
- Premium/Internal resources require a Member JWT.

### Parameters
- `category` (query, optional) - Filter by resource type (e.g., `Tutorials`, `Assets`).

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": "res-1",
      "title": "Introduction to Unity",
      "type": "Tutorial",
      "url": "https://..."
    }
  ]
}
```

---
*Status: Stub - Pending Database Schema Definition.*
