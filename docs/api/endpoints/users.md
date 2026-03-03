# Users API

## GET /api/v1/users/:id

Retrieves the profile information for a specific club member or officer by their UUID. 

### Authentication
**Bearer token required.** 
- If requesting your own profile: Requires a valid Supabase Auth JWT.
- If requesting another user's profile: Must have the `Officer` role.

### Parameters

**Path Parameters**
- `id` (string, required) - The UUID of the User.

**Query Parameters**
- `include_games` (boolean, optional) - Whether to include the user's submitted games in the response data. Default: `false`.

### Response

**Success (200)**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "student@uphsl.edu.ph",
    "full_name": "John Doe",
    "role": "Member",
    "student_id": "02-12345",
    "department": "BSCS",
    "joined_at": "2026-03-01T14:30:00Z",
    "games": [
      {
        "id": "g-123",
        "title": "Neon Dash",
        "status": "Approved"
      }
    ]
  }
}
```

**Permission Denied (403)**
```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "You do not have permission to view this user's profile."
  }
}
```

**Not Found (404)**
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "User record not found."
  }
}
```

### Example Request

```bash
# Fetch user with their associated games included
curl -H "Authorization: Bearer <SUPABASE_JWT>" \
  "https://api.uphsl-gdc.com/v1/users/550e8400-e29b-41d4-a716-446655440000?include_games=true"
```
