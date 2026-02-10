---
title: Human Presence
description: Understanding what human presence means in BotShield
---

# Human Presence

Human presence is the core concept that BotShield verifies. Understanding what it means and how it differs from other verification methods is key to evaluating BotShield for your platform.

## What is Human Presence?

Human presence is the **verification that a human is physically present** at the moment an action is taken. It is not about:

- Behavior patterns
- Device fingerprints
- Session history
- User accounts or identity

It is about confirming that **a real human** is performing the action **right now**, using hardware-backed biometric authentication on their device.

## Why Human Presence Matters

<CardGroup cols={2}>
  <Card title="Bots Can Mimic Behavior" icon="bot">
    Automated systems can replicate user behavior patterns, solve CAPTCHAs, and pass behavioral analysis
  </Card>
  <Card title="Presence Requires a Human" icon="user-check">
    Actual human presence verified through device biometrics (Face ID / Touch ID) cannot be faked by bots
  </Card>
</CardGroup>

## How BotShield Verifies Presence

BotShield uses the device's built-in biometric and authentication hardware:

1. **Hardware-backed authentication** -- Face ID, Touch ID, or device passcode via the Secure Enclave
2. **Real-time interaction** -- The authentication happens at the moment of the action
3. **Cryptographic attestation** -- The result is a signed Human Presence Signal (HPS) token

This is fundamentally different from:

- **CAPTCHA** -- Solves puzzles (can be automated by CAPTCHA-solving services)
- **2FA** -- Requires user account and device ownership verification
- **Behavior Analysis** -- Tracks patterns over time (can be mimicked)
- **Device Fingerprinting** -- Identifies devices, not humans

## Properties of Presence

### Presence is Transient

<Info>
Presence exists only at the moment of action. It is not stored, tracked, or reused.
</Info>

### Presence is Action-Scoped

Verification is limited to the specific action:

- Checking out -- verify presence for checkout
- Buying tickets -- verify presence for ticket purchase
- Signing up -- verify presence for signup

### Presence is Consumed

Once verified, the HPS is consumed by the action:

- No reuse across actions
- No session persistence
- No cross-platform tracking

### Presence Requires Secure Device State

The user's device must have a system passcode enabled. Without it, BotShield cannot issue a valid attestation. [Learn more about device security requirements](/concepts/device-security).

## Benefits of Presence Verification

<CardGroup cols={2}>
  <Card title="Privacy-First" icon="lock">
    No tracking, profiling, or surveillance
  </Card>
  <Card title="User-Friendly" icon="smile">
    5-second verification for returning users
  </Card>
  <Card title="Effective" icon="shield-check">
    Hardware-backed -- stops bots reliably
  </Card>
  <Card title="Flexible" icon="settings">
    Works for any action type via REST API
  </Card>
</CardGroup>

## Related Concepts

- [Device Security](/concepts/device-security) -- Why device passcode is required
- [Action-Scoped Enforcement](/concepts/action-scoped-enforcement) -- How enforcement is limited
- [Presence Anchors](/concepts/presence-anchors) -- Cross-platform presence (Phase II)
- [Presence Continuity](/concepts/presence-continuity) -- Reduced friction (Phase II)
