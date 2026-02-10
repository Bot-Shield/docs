---
title: Introduction
description: Welcome to BotShield - Human Presence Verification as a Service
---

# Welcome to BotShield

BotShield is a deployable, usage-based human presence verification layer for modern platforms. It is a clean CAPTCHA replacement that verifies human presence at the moment of action -- without surveillance or continuous monitoring.

## What is BotShield?

BotShield attests **one truth**: whether a human is present for a specific action.

Unlike traditional verification methods, BotShield:

- **Confirms presence at the moment of action** -- Verification happens only when required
- **Is scoped to the action at hand** -- No broad surveillance or tracking
- **Is invoked only when it matters** -- No unnecessary friction for real users
- **Produces time-bound attestations** -- Each verification is consumed by the action itself
- **Enforces hardware-backed security** -- Device passcode is required to ensure attestations are cryptographically valid

## Current Availability

BotShield is currently available as **SDK A (Signal-Only)** -- momentary human presence verification with no persistence. Access is granted through a developer application process.

<Info>
BotShield is not a self-service download. To integrate, [request developer access](https://botshield.ai/pricing) and our team will provision your API credentials.
</Info>

## Key Features

<CardGroup cols={2}>
  <Card
    title="Single-Action Verification"
    icon="check-circle"
    href="/sdk/features"
  >
    Verify human presence for specific actions like checkout, ticketing, or signup
  </Card>
  <Card
    title="Action-Scoped Enforcement"
    icon="shield"
    href="/concepts/action-scoped-enforcement"
  >
    Enforcement is limited to the specific action being verified
  </Card>
  <Card
    title="Hardware-Backed Security"
    icon="lock"
    href="/concepts/device-security"
  >
    Requires device passcode for cryptographically valid attestations
  </Card>
  <Card
    title="No Persistence"
    icon="clock"
    href="/concepts/action-scoped-enforcement"
  >
    No data persistence across actions -- each verification is independent
  </Card>
</CardGroup>

## How It Works

BotShield integrates into your platform's critical actions via a REST API:

1. **Your server creates a session** using your API key
2. **Your server creates a verification link** for the user's action
3. **The user opens BotShield** via deep link, web URL, or QR code
4. **BotShield verifies presence** using device biometrics (Face ID / Touch ID)
5. **A Human Presence Signal (HPS) is returned** to your server via webhook or polling
6. **Your server validates the HPS** and proceeds with the action

## Use Cases

BotShield fits in any stack and is ideal for:

- **Limited-access drops** -- Ensure fair access for real customers
- **Ticket purchasing** -- Prevent bot scalping
- **High-value checkout** -- Protect critical transactions
- **Account recovery** -- Verify presence during sensitive operations
- **Digital agreement execution** -- Confirm human presence for consent
- **Public posting actions** -- Reduce spam and abuse

## Next Steps

<CardGroup cols={2}>
  <Card
    title="Quick Start"
    icon="rocket"
    href="/quickstart"
  >
    Integrate BotShield in minutes using the REST API
  </Card>
  <Card
    title="Request Developer Access"
    icon="key"
    href="https://botshield.ai/pricing"
  >
    Apply for API credentials to start integrating
  </Card>
</CardGroup>
