---
title: What is BotShield?
description: Understanding BotShield's core concepts and how it differs from traditional verification
---

# What is BotShield?

BotShield is a **human presence verification service** that confirms whether a human is present for a specific action. It is designed as a clean, modern alternative to CAPTCHA that respects user privacy while protecting platforms from automation and fraud.

## Core Concept

BotShield attests **one truth**: **Whether a human is present for a specific action.**

This simple principle drives everything:

- Verification happens **at the moment of action**
- Verification is **scoped to that specific action**
- Verification is **consumed by the action** -- no persistent tracking
- Verification is **time-bound** -- presence exists only at the moment of action
- Verification is **hardware-backed** -- the device must have a system passcode to ensure cryptographic validity

## How BotShield Differs

### Traditional CAPTCHA
- Interrupts user flow with puzzles
- Requires user interaction every time
- Can be solved by bots and automation services
- Poor user experience

### BotShield
- Seamless verification via device biometrics (Face ID / Touch ID)
- Verifies actual human presence, not puzzle-solving ability
- Hardware-backed attestation that cannot be faked
- Excellent user experience (5-second verification for returning users)

## The BotShield Approach

<CardGroup cols={2}>
  <Card title="Presence, Not Behavior" icon="user">
    Bots can mimic behavior, but presence requires a human. Every time.
  </Card>
  <Card title="Action-Scoped" icon="target">
    Verification is limited to the specific action being taken
  </Card>
  <Card title="No Surveillance" icon="eye-off">
    No continuous monitoring or tracking across sessions
  </Card>
  <Card title="Hardware-Backed" icon="lock">
    Device passcode required -- no attestation without a secure device state
  </Card>
</CardGroup>

## The Effect

When platforms integrate BotShield:

- **Bots can no longer hide** in systems
- **Automation fails by default** -- presence requires a real human on a real device
- **Verification without surveillance** -- no behavioral tracking or profiling
- **Fraud economics collapse** -- attacks become uneconomical

## Two SDK Paths

BotShield offers two integration paths:

### SDK A: Signal-Only (Available Now)

- Momentary human presence verification
- No persistence across actions
- Each action requires a fresh biometric check
- Returns a short-lived Human Presence Signal (HPS)
- Ideal for: checkout, ticketing, form submission, bot prevention

### SDK B: Presence SDK (Planned -- Phase II)

- Platform-scoped Presence Anchors with continuity
- Reduced verification friction for returning users
- Time-bound anchors that expire automatically
- Ideal for: frequent marketplace actions, multi-step flows

<Warning>
SDK B (Presence SDK) is a planned Phase II feature. Only SDK A (Signal-Only) is currently available. [Learn more about deployment options](/deployment/overview).
</Warning>

## Privacy and Security

- **Biometric data never leaves the device** -- Face ID / Touch ID data stays in the Secure Enclave
- **No identity verification** -- BotShield verifies presence, not who the human is
- **No behavioral tracking** -- no user profiling or cross-session monitoring
- **Device passcode required** -- attestations are only issued when the device has a secure lock state

## Next Steps

- [SDK Features](/sdk/features) -- What SDK A provides today
- [How It Works](/sdk/overview) -- Technical API overview
- [Device Security](/concepts/device-security) -- Why device passcode is required
- [Integration Guides](/integrations/shopify) -- Platform-specific guides
