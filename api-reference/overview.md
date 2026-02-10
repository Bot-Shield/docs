---
title: API Reference Overview
description: Authentication, base URLs, environments, and error handling for the BotShield REST API
---

# API Reference

BotShield provides a REST API for integrating human presence verification into your platform. All SDK operations are server-to-server -- there is no client-side library to install.

<Info>
API access is provisioned through a developer application process. [Request developer access](https://botshield.ai/pricing) to receive your API credentials.
</Info>

## Base URL

All SDK operations are served from:

```
https://api.botshield.ai/operations
```

For local development with a test key:

```
http://localhost:9991/operations
```

## Authentication

All SDK operations require a Bearer token in the `Authorization` header. The token you use depends on the operation:

| Operation | Token Type | Prefix |
|-----------|-----------|--------|
| `POST /sdk/create-session` | API Key (partner credential) | `bs_live_sk_` or `bsk_test_` |
| `POST /sdk/create-verification-link` | Session Token (from create-session) | `bss_` |
| `GET /verification/status` | API Key (partner credential) | `bs_live_sk_` or `bsk_test_` |
| `POST /sdk/logout` | API Key (partner credential) | `bs_live_sk_` or `bsk_test_` |

### Example Header

```bash
Authorization: Bearer bs_live_sk_your_api_key_here
```

## Environments

| Environment | API Key Prefix | Purpose |
|-------------|---------------|---------|
| **Production** | `bs_live_sk_` | Live verification with real users |
| **Test** | `bsk_test_` | Development and integration testing |

Test keys allow you to complete the full integration flow without triggering real biometric verification.

## SDK A Operations

BotShield SDK A (Signal-Only) exposes four operations:

<CardGroup cols={2}>
  <Card title="Create Session" icon="key" href="/api-reference/endpoint/post-sdkcreate-session">
    Initialize an anchor grant window. Returns a session token for subsequent operations.
  </Card>
  <Card title="Create Verification Link" icon="link" href="/api-reference/endpoint/post-sdkcreate-verification-link">
    Generate a verification request with deep link, web URL, and QR code for the user.
  </Card>
  <Card title="Verification Status" icon="circle-check" href="/api-reference/endpoint/get-verificationstatus">
    Poll for verification result. Returns the Human Presence Signal (HPS) when complete.
  </Card>
  <Card title="Logout Session" icon="right-from-bracket" href="/api-reference/endpoint/post-sdklogout">
    Revoke an active session token. Use for cleanup after verification completes.
  </Card>
</CardGroup>

## Typical Integration Flow

```
1. POST /sdk/create-session
   → Returns session_token (bss_*)

2. POST /sdk/create-verification-link
   → Returns deep_link, web_url, qr_code_url, request_id

3. Present link to user (deep link / web URL / QR code)

4. User completes biometric verification in BotShield app

5. Receive result via:
   - Webhook POST → your server receives verification_token
   - OR poll GET /verification/status?request_id=...

6. Validate the verification_token (JWT) server-side
```

## Error Handling

All endpoints return standard HTTP status codes:

| Code | Meaning |
|------|---------|
| `200` | Success |
| `400` | Bad Request -- invalid or missing parameters |
| `401` | Unauthorized -- invalid or expired token |
| `500` | Internal Server Error |

### Error Response Format

```json
{
  "error": {
    "message": "Description of what went wrong",
    "statusCode": 400
  }
}
```

### Validation Error Format

When input validation fails, the response includes details about each invalid field:

```json
{
  "message": "Invalid input provided",
  "input": { ... },
  "errors": [
    {
      "propertyPath": "email",
      "invalidValue": "not-an-email",
      "message": "must be a valid email address"
    }
  ]
}
```

## Webhook Delivery

When you provide a `webhook_url` in the verification link request, BotShield will POST the result to your server when verification completes:

```json
{
  "event": "verification.completed",
  "request_id": "req_abc123",
  "status": "verified",
  "verification_token": "eyJhbGciOiJSUzI1NiIs...",
  "completed_at": "2025-01-15T10:30:00Z"
}
```

Your webhook endpoint should return a `200` status code to acknowledge receipt.

## Rate Limits

Rate limits are applied per API key. If you exceed the limit, you will receive a `429 Too Many Requests` response. Contact your account representative if you need higher limits.

## Next Steps

- [Quick Start](/quickstart) -- Step-by-step integration walkthrough
- [Developer Application](/api-reference/developer-application) -- Apply for API access
- [SDK Overview](/sdk/overview) -- Architecture and concepts
