---
title: SDK Overview
description: Understanding the BotShield API architecture and integration model
---

# BotShield SDK Overview

BotShield provides a REST API for integrating human presence verification into your platform. There is no client-side library to install -- integration happens server-to-server via API calls, with the user interacting through deep links, web URLs, or QR codes.

<Info>
Access to the BotShield API is provisioned through a [developer application process](https://botshield.ai/pricing). Once approved, you receive an API key to authenticate your requests.
</Info>

## Integration Model

```
Partner Server → BotShield API → Verification Link → User's Device → BotShield App → HPS → Partner Server
```

The integration is entirely server-side on your end. Your server:

1. **Creates a session** using your API key
2. **Creates a verification link** for a specific user action
3. **Presents the link** to the user (deep link, web URL, or QR code)
4. **Receives the result** via webhook or polling

The user:

1. Opens the BotShield app (or is prompted to set it up on first use)
2. Completes a biometric check (Face ID / Touch ID)
3. Is returned to your platform

## Human Presence Signal (HPS)

Each successful verification produces an **HPS** -- a short-lived, cryptographically signed token that confirms:

- A real human was present on a device
- The verification occurred within the expiry window
- The signal is tamper-proof and single-use

The HPS is delivered to your server via webhook or polling, and you validate it using BotShield's public key.

## SDK A: Signal-Only (Available Now)

SDK A performs **momentary human presence verification** with no persistent state:

- Each action requires a fresh biometric check
- The HPS expires quickly (5-minute window)
- No anchors, no continuity, no session persistence
- Binary signal: human present (yes/no)

### API Flow

```
POST /operations/sdk/create-session
  → Returns session_token

POST /operations/sdk/create-verification-link
  → Returns deep_link, web_url, qr_code_url, request_id

User completes verification in BotShield app

POST webhook → your server receives verification_token
  OR
GET /operations/verification/status?request_id=...
  → Returns status + verification_token
```

### What SDK A Guarantees

**Guaranteed:**
- Real human was present on a device at verification time
- Verification occurred within the expiry window
- Signal is cryptographically signed and tamper-proof
- Signal cannot be replayed (one-time use)

**Not guaranteed:**
- User identity (presence is not identity)
- Device ownership
- Account state
- Future presence (signal expires quickly)

## SDK B: Presence SDK (Planned -- Phase II)

<Warning>
SDK B is a planned Phase II feature and is not yet available. The information below describes the intended design.
</Warning>

SDK B will add **platform-scoped Presence Anchors** that enable:

- Reduced verification friction for returning users
- Continuity system (skip biometric if recently verified, based on anchor state)
- Time-bound anchors that expire automatically (default: 30 days)
- User-revocable anchors
- Scope-based action gating with impact classification

SDK B will use the same REST API pattern as SDK A, with additional endpoints for anchor creation and management.

## Scopes

Scopes identify what action is being verified. They follow the format `category.action`:

| Scope | Description |
|-------|-------------|
| `checkout.complete` | Complete a purchase |
| `payment.authorize` | Authorize a payment |
| `listing.create` | Create a marketplace listing |
| `bid.place` | Place a bid on an item |
| `withdrawal.initiate` | Initiate a fund withdrawal |

In SDK A, scopes are optional but recommended for tracking and analytics. In SDK B (Phase II), scopes will be required and will define what action is being anchored.

## Next Steps

- [Quick Start](/quickstart) -- Step-by-step integration guide
- [SDK Features](/sdk/features) -- Detailed capabilities
- [Use Cases](/sdk/use-cases) -- Real-world applications
- [API Reference](/api-reference/developer-application) -- Developer Application endpoint
