---
title: SDK Features
description: BotShield SDK A capabilities and what is planned for SDK B
---

# SDK Features

## Available Now: SDK A (Signal-Only)

SDK A is BotShield's current production offering -- momentary human presence verification via REST API.

### Live Human Presence Attestation

Real-time verification that a human is present at the moment of action. Unlike behavior-based detection, BotShield verifies actual human presence using device biometrics (Face ID / Touch ID).

<Warning>
Bots can mimic behavior, but presence requires a human. Every time.
</Warning>

### Human Presence Signal (HPS)

Each verification produces a short-lived, cryptographically signed HPS token:

- Valid only for the specific action
- Expires after use (5-minute window)
- Cannot be reused or replayed
- Delivered via webhook or polling

### Action-Scoped Enforcement

Verification and enforcement are limited to the specific action being taken:

- No broad surveillance across your platform
- Verification only when required
- No tracking of user behavior outside the action

### Hardware-Backed Security

BotShield requires the user's device to have a system passcode enabled:

- Without a passcode, the OS cannot provide hardware-backed human-gated events
- Attestations are only issued from devices with a secure lock state
- This ensures every HPS is cryptographically and semantically valid
- [Learn more about device security requirements](/concepts/device-security)

### No Persistence Across Actions

Each verification is independent:

- No session tracking
- No user profiling
- No cross-action data storage
- Privacy-first by design

### Usage-Based Pricing

Pay only for verifications you use:

- No monthly minimums
- No hidden fees
- Clear pricing per verification
- See [Deployment Options](/deployment/overview) for tiers

## Technical Capabilities

### REST API Integration

BotShield is integrated entirely via server-side REST API calls. There is no client-side SDK to install:

```bash
# Step 1: Create session
POST /operations/sdk/create-session
Authorization: Bearer YOUR_API_KEY

# Step 2: Create verification link
POST /operations/sdk/create-verification-link
Authorization: Bearer SESSION_TOKEN
```

### Multiple Delivery Methods

Present verification to users via:

- **Deep link** -- Direct app launch on mobile (`botshield://verify?request_id=...`)
- **Web URL** -- Browser-based verification flow
- **QR code** -- Scannable code for in-store or kiosk scenarios

### Webhook and Polling

Receive verification results via:

- **Webhook** (recommended) -- BotShield sends a POST to your callback URL
- **Polling** -- Query the verification status endpoint

### JWT Token Validation

Verification tokens are standard JWTs that you validate server-side using BotShield's public key.

### Test Mode

Use test API keys (prefix: `bsk_test_`) for development:

- Same endpoints and response format
- No charges or rate limits
- Not connected to production data

## Security Properties

### What BotShield Does

- Confirms a real human is present on a device at the moment of action
- Produces a cryptographically signed, tamper-proof signal
- Enforces hardware-backed device security (passcode required)
- Ensures each signal is single-use and time-bound

### What BotShield Does Not Do

- Verify user identity (presence is not identity)
- Track users across sessions or actions
- Store personal information or biometric data
- Monitor behavior patterns
- Create user profiles

## Planned: SDK B (Presence SDK -- Phase II)

<Warning>
The following features are planned for Phase II and are not yet available.
</Warning>

SDK B will extend SDK A with:

- **Presence Anchors** -- Platform-scoped, time-bound tokens that reduce repeated verification friction
- **Continuity System** -- When a user has 3+ active anchors from different platforms, non-critical actions can skip biometric verification
- **Scope-Based Gating** -- Required scopes with impact classification (low/medium/high/critical)
- **Anchor Management** -- APIs to list, inspect, and revoke anchors
- **Admin Configuration** -- Scope registration and policy management

Critical actions (payments, withdrawals, account changes) will always require fresh biometric verification, even with active anchors.

## Next Steps

- [Use Cases](/sdk/use-cases) -- Real-world applications
- [Quick Start](/quickstart) -- Step-by-step integration
- [Device Security](/concepts/device-security) -- Hardware-backed security requirements
- [Deployment Options](/deployment/overview) -- Choose your plan
