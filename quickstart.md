---
title: Quick Start
description: Get started integrating BotShield via the REST API
---

# Quick Start

Integrate BotShield human presence verification into your platform using the REST API.

## Prerequisites

Before you begin, you will need:

- A BotShield Developer account ([request access here](https://botshield.ai/pricing))
- Your API key (provided after approval)
- Your platform's critical action endpoint ready for integration

<Info>
BotShield access is provisioned through a developer application process. There is no self-service download or npm package. Once approved, you receive API credentials and integration documentation.
</Info>

## Overview

BotShield SDK A (Signal-Only) uses a simple REST API flow:

```
Your Server → Create Session → Create Verification Link → User Verifies → HPS Returned
```

Each verification produces a **Human Presence Signal (HPS)** -- a short-lived, cryptographically signed token confirming a human was present at the moment of action.

## Step 1: Request Developer Access

1. Visit the [Deployment page](https://botshield.ai/pricing)
2. Click **"REQUEST DEVELOPER ACCESS"** on any deployment card
3. Fill out the Developer Application form
4. Wait for approval (typically within 24-48 hours)
5. Receive your API key and integration guide

## Step 2: Create a Session

Use your API key to create a session:

```bash
curl -X POST https://api.botshield.ai/operations/sdk/create-session \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "partner_user_id": "your_internal_user_id"
  }'
```

**Response:**

```json
{
  "data": {
    "session_token": "bss_abc123...",
    "expires_at": "2026-02-03T12:00:00Z"
  }
}
```

## Step 3: Create a Verification Link

Using the session token, create a verification request for a specific action:

```bash
curl -X POST https://api.botshield.ai/operations/sdk/create-verification-link \
  -H "Authorization: Bearer bss_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "user_email": "user@example.com",
    "return_url": "https://your-platform.com/callback",
    "webhook_url": "https://your-platform.com/webhook",
    "scope": "checkout.complete",
    "sdk_type": "signal",
    "metadata": {
      "order_id": "12345"
    }
  }'
```

**Response:**

```json
{
  "data": {
    "request_id": "req_xyz789...",
    "deep_link": "botshield://verify?request_id=req_xyz789...",
    "web_url": "https://app.botshield.ai/verify?request_id=req_xyz789...",
    "qr_code_url": "https://api.botshield.ai/qr/req_xyz789...",
    "expires_at": "2026-02-03T12:05:00Z",
    "sdk_type": "signal",
    "scope": "checkout.complete"
  }
}
```

## Step 4: Present Verification to the User

Choose the right method for your platform:

- **Mobile app** -- Open the `deep_link` directly
- **Web** -- Redirect to `web_url` or display the `qr_code_url` as an image
- **In-store / kiosk** -- Display the QR code for the user to scan

## Step 5: Receive the Human Presence Signal

### Option A: Webhook (Recommended)

When the user completes verification, BotShield sends a POST request to your `webhook_url`:

```json
{
  "event": "verification.success",
  "request_id": "req_xyz789...",
  "verified_at": "2026-02-03T11:55:00Z",
  "verification_token": "eyJhbGc...",
  "user_email": "user@example.com",
  "metadata": {
    "order_id": "12345"
  }
}
```

### Option B: Status Polling

```bash
curl https://api.botshield.ai/operations/verification/status?request_id=req_xyz789...
```

```json
{
  "data": {
    "status": "completed",
    "verified_at": "2026-02-03T11:55:00Z",
    "verification_token": "eyJhbGc..."
  }
}
```

## Step 6: Validate the Token (Server-Side)

Validate the `verification_token` JWT on your server:

```javascript
const jwt = require('jsonwebtoken');

const decoded = jwt.verify(verificationToken, BOTSHIELD_PUBLIC_KEY);

if (decoded.verified && decoded.request_id === expectedRequestId) {
  // Human presence confirmed -- proceed with the action
  processCheckout(orderId);
}
```

## What SDK A Guarantees

**Guaranteed:**
- A real human was present on a device at verification time
- Verification occurred within the expiry window
- The Human Presence Signal is cryptographically signed and tamper-proof
- The signal cannot be replayed (one-time use)

**Not guaranteed:**
- User identity (BotShield verifies presence, not who the human is)
- Device ownership
- Future presence (the signal expires after use)

## Next Steps

- [SDK Overview](/sdk/overview) -- Understand the full API architecture
- [SDK Features](/sdk/features) -- Explore capabilities and guarantees
- [API Reference](/api-reference/developer-application) -- Developer Application endpoint
- [Deployment Options](/deployment/overview) -- Choose your deployment tier
