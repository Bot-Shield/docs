---
title: Presence Continuity
description: Cross-platform presence verification and reduced friction for returning users
---

# Presence Continuity

<Warning>
Presence Continuity is a **Phase II feature** and is not yet available. This page documents the planned design for SDK B (Presence SDK). Only [SDK A (Signal-Only)](/sdk/overview) is currently available.
</Warning>

Presence Continuity will enable users to verify their presence once and benefit from reduced friction across subsequent actions, based on active Presence Anchors.

## What is Presence Continuity?

Presence Continuity is the system that determines when a user can skip a full biometric check for non-critical actions, based on their anchor state:

- **Threshold-based** -- Activated when a user has 3 or more active anchors from different platforms or action classes
- **Non-critical actions only** -- Critical actions (payments, withdrawals, account changes) always require fresh biometric verification
- **Automatic decay** -- Continuity reduces as anchors expire
- **User-revocable** -- Users can revoke anchors at any time, immediately reducing continuity

## How Continuity Will Work

### Activation

A user builds up Presence Continuity by creating anchors with multiple platforms:

1. User anchors with Platform A (1 anchor)
2. User anchors with Platform B (2 anchors)
3. User anchors with Platform C (3 anchors -- continuity activates)

### Verification with Continuity

Once continuity is active:

- **Non-critical actions** -- Verification may proceed without a biometric prompt (anchor state is sufficient)
- **Critical actions** -- Fresh biometric is always required, regardless of anchor count
- **Expired anchors** -- If anchor count drops below 3, full biometric is required for all actions again

### Decay

Continuity is not permanent:

- Anchors have defined TTLs (default: 30 days)
- As anchors expire, continuity strength decreases
- Users must re-anchor to maintain continuity
- No permanent reduced-friction state

## Security Guarantees

Even with Presence Continuity active:

- **Critical actions always require fresh biometric** -- Payments, withdrawals, and account changes are never gated by continuity alone
- **Anchors are platform-scoped** -- Each partner only sees their own anchor state
- **No trust inheritance** -- One platform's anchor does not grant trust on another platform
- **Device passcode still required** -- The device must have a secure lock state at all times

## Privacy and Security

- No user tracking across platforms
- No behavior profiling
- No cross-platform surveillance
- Minimal data collection -- only anchor metadata (platform ID, scope, timestamps)

## Relationship to SDK A

SDK A (Signal-Only) does not support Presence Continuity. Every SDK A verification requires a fresh biometric check. Continuity is exclusively a Phase II / SDK B feature.

## Coming Soon

Presence Continuity is part of the Phase II roadmap alongside Presence Anchors. [Contact us](https://botshield.ai/pricing) for early access information.

## Related

- [Presence Anchors](/concepts/presence-anchors) -- The building blocks of continuity
- [Human Presence](/concepts/human-presence) -- Core presence concepts
- [Device Security](/concepts/device-security) -- Hardware-backed security requirements
- [SDK Overview](/sdk/overview) -- Current API architecture
