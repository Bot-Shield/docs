---
title: Developer Application API
description: API endpoint for submitting developer access applications
---

# Developer Application API

Submit applications for BotShield developer access through the API endpoint. This is the first step to integrating BotShield into your platform.

<Info>
BotShield access is provisioned through a developer application process. You can also apply via the web form at [botshield.ai/pricing](https://botshield.ai/pricing).
</Info>

## Endpoint

```
POST /api/developer-application
```

## Authentication

No authentication required. This is a public endpoint for developer applications.

## Request

### Headers

```
Content-Type: application/json
```

### Body Parameters

<ParamField body="companyName" type="string" required>
  Company or project name
</ParamField>

<ParamField body="applicantName" type="string" required>
  Full name of the applicant
</ParamField>

<ParamField body="role" type="string" required>
  Role of the applicant. Must be one of: `Engineer`, `Founder`, `Agency`, `Platform Team`, `Other`
</ParamField>

<ParamField body="email" type="string" required>
  Email address (must be valid email format)
</ParamField>

<ParamField body="phone" type="string">
  Phone number (optional)
</ParamField>

<ParamField body="websiteUrl" type="string" required>
  Website or product URL (must be valid URL format)
</ParamField>

<ParamField body="useCase" type="string" required>
  Intended use case. Must be one of: `Checkout`, `Ticketing`, `Signup`, `Other`
</ParamField>

<ParamField body="monthlyVolume" type="string" required>
  Estimated monthly verification volume. Must be one of: `<10k`, `10k-100k`, `100k+`
</ParamField>

<ParamField body="marketingOptIn" type="boolean">
  Whether to opt-in to marketing communications (default: false)
</ParamField>

## Example Request

```bash
curl -X POST https://botshield.ai/api/developer-application \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "Example Platform",
    "applicantName": "John Doe",
    "role": "Engineer",
    "email": "john@example.com",
    "phone": "+1 (555) 123-4567",
    "websiteUrl": "https://example.com",
    "useCase": "Checkout",
    "monthlyVolume": "10k-100k",
    "marketingOptIn": true
  }'
```

## Response

### Success Response

<ResponseField name="success" type="boolean">
  Always `true` on successful submission
</ResponseField>

```json
{
  "success": true
}
```

### Error Response

<ResponseField name="error" type="string">
  Error message describing what went wrong
</ResponseField>

```json
{
  "error": "Missing required field: email"
}
```

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success -- Application submitted |
| 400 | Bad Request -- Missing or invalid required fields |
| 500 | Internal Server Error -- Check error message for details |

## What Happens After Submission

1. All applications are reviewed manually by the BotShield team
2. You will be contacted if approved (typically within 24-48 hours)
3. Upon approval, you receive your API key and integration documentation
4. This endpoint does not provide immediate API access

## Related

- [Request Developer Access](https://botshield.ai/pricing) -- Use the web form
- [Quick Start](/quickstart) -- Integration guide (after approval)
- [Deployment Options](/deployment/overview) -- Available deployment tiers
