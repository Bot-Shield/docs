---
title: Presence Anchors
description: Understanding Presence Anchors and cross-platform presence verification
---

# Presence Anchors

<Warning>
Presence Anchors are a **Phase II feature** and are not yet available. This page documents the planned design for SDK B (Presence SDK). Only [SDK A (Signal-Only)](/sdk/overview) is currently available.
</Warning>

Presence Anchors will enable platform-scoped presence verification that reduces friction for returning users while maintaining security and privacy.

## What are Presence Anchors?

Presence Anchors are time-bound, platform-scoped tokens that represent a verified human presence relationship between a user and a specific partner platform.

When a user creates an anchor with your platform:

- A secure, time-bound token is created
- The anchor is scoped to your platform only (not visible to other partners)
- Future verifications can use the anchor to reduce friction
- The anchor expires automatically (default: 30 days)
- The user can revoke the anchor at any time

## How Anchors Will Work

1. **Partner requests anchor creation** via the SDK B API
2. **User approves** in the BotShield app ("Your Platform wants to anchor presence")
3. **Anchor is created** with defined scopes and TTL
4. **Future verifications** check the anchor state before requiring biometric
5. **Anchor expires** or is revoked, requiring re-anchoring

## Key Properties

- **Platform-scoped** -- Each anchor is isolated to a single partner. Your anchors are not visible to other platforms.
- **Time-bound** -- Anchors expire automatically. No permanent state.
- **User-controlled** -- Users can view and revoke anchors at any time in the BotShield app.
- **Not identity** -- An anchor confirms ongoing presence consent, not user identity.

## Benefits

<CardGroup cols={2}>
  <Card title="Reduced Friction" icon="zap">
    Returning users can verify faster for non-critical actions
  </Card>
  <Card title="Platform-Scoped" icon="globe">
    Anchors are isolated per partner -- no cross-platform visibility
  </Card>
  <Card title="Privacy-Preserving" icon="lock">
    No tracking or surveillance -- anchors are consent-based
  </Card>
  <Card title="Time-Bound" icon="clock">
    Anchors expire automatically with no permanent state
  </Card>
</CardGroup>

## Relationship to SDK A

SDK A (Signal-Only) does not create anchors. Every verification with SDK A requires a fresh biometric check. Anchors are exclusively a Phase II / SDK B feature.

If you are integrating today, use SDK A. When SDK B becomes available, you can add anchor support to reduce friction for your most active users.

## Coming Soon

Presence Anchors are part of the Phase II roadmap. If you are interested in early access or want to plan your integration ahead of time, [contact us](https://botshield.ai/pricing).

## Related

- [Presence Continuity](/concepts/presence-continuity) -- How anchors enable reduced friction
- [Human Presence](/concepts/human-presence) -- Core presence concepts
- [SDK Overview](/sdk/overview) -- Current API architecture
