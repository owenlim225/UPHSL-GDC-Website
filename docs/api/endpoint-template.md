# API Endpoint Template

*Copy this template when creating new endpoint documentation in `docs/api/endpoints/`.*

---

# [Endpoint Name]

Brief description of what this endpoint does.

## Details

- **Path:** `/api/[path]`
- **Method:** `GET` | `POST` | `PUT` | `DELETE`
- **Authentication:** `None` | `Member` | `Officer`
- **Supabase Integration:** (e.g., Direct table access via RLS or Server Action)

## Request

### Parameters (if applicable)
| Name | Type | Description |
|------|------|-------------|
| id | string | Unique identifier |

### Headers
```http
Authorization: Bearer <token>
```

### Body (for POST/PUT)
```json
{
  "field": "value"
}
```

## Response

### Success (200 OK)
```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "Example"
  }
}
```

### Error (4xx/5xx)
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descriptive error message"
  }
}
```

## Example `curl`
```bash
curl -X GET https://uphsl-gdc.com/api/example \
  -H "Authorization: Bearer YOUR_TOKEN"
```
