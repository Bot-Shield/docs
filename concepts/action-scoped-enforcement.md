---
title: Action-Scoped Enforcement
description: Understanding how BotShield limits enforcement to specific actions
---

# Action-Scoped Enforcement

Action-scoped enforcement is a core principle of BotShield: verification and enforcement are limited to the specific action being taken, not broad surveillance across your platform.

## What is Action-Scoped Enforcement?

Action-scoped enforcement means:

- **Verification happens for the action** -- Not for the user, session, or platform broadly
- **Enforcement is limited** -- Only affects the specific action being verified
- **No cross-action tracking** -- Each action is independent
- **No persistent monitoring** -- No surveillance beyond the immediate action

## How It Works

### Traditional Approaches

Most verification systems use broad-scoped methods:

- **Session-based verification** -- Verify once, trust for entire session
- **User-based verification** -- Verify user identity, apply broadly
- **Platform-wide monitoring** -- Track behavior across all actions
- **Persistent tracking** -- Store verification state for reuse

### BotShield's Approach

BotShield scopes verification to a single action:

- **Action-specific verification** -- Verify presence for this specific action
- **Limited enforcement** -- Only this action requires verification
- **No cross-action data** -- Each verification is independent
- **No persistent state** -- Verification is consumed by the action

## Example: Checkout Flow

```bash
# User wants to checkout -- create a verification request
POST /operations/sdk/create-verification-link
{
  "scope": "checkout.complete",
  "sdk_type": "signal",
  "webhook_url": "https://your-store.com/webhook",
  "metadata": { "order_id": "checkout-12345" }
}
# → User verifies → HPS returned → checkout proceeds

# Later, same user wants to post a comment
# This requires a NEW verification -- the previous one does not carry over
POST /operations/sdk/create-verification-link
{
  "scope": "comment.create",
  "sdk_type": "signal",
  "webhook_url": "https://your-store.com/webhook",
  "metadata": { "comment_id": "comment-67890" }
}
# → Fresh verification required
```

## Benefits

<CardGroup cols={2}>
  <Card title="Privacy-First" icon="lock">
    No broad surveillance or tracking
  </Card>
  <Card title="User-Friendly" icon="smile">
    Verification only when needed
  </Card>
  <Card title="Flexible" icon="settings">
    Different actions can have different requirements
  </Card>
  <Card title="Secure" icon="shield">
    Each action gets fresh verification
  </Card>
</CardGroup>

## Selective Enforcement

You choose which actions require verification. BotShield does not require verification for every user interaction -- only the ones you designate:

- **Checkout** -- Always verify
- **Comment posting** -- Verify for new users only
- **Account recovery** -- Always verify
- **Profile update** -- Verify for sensitive changes only

This is entirely your decision. BotShield provides the verification mechanism; you decide where to apply it.

## Comparison

| Approach | Scope | Privacy | Flexibility |
|----------|-------|---------|-------------|
| Session-Based | Entire session | Low | Low |
| User-Based | All user actions | Low | Low |
| Platform-Wide | All platform actions | Very Low | Low |
| **Action-Scoped (BotShield)** | **Single action** | **High** | **High** |

## Privacy Implications

Action-scoped enforcement provides:

- **No surveillance** -- No monitoring beyond the action
- **No tracking** -- No cross-action data collection
- **No profiling** -- No user behavior analysis
- **No persistence** -- No stored verification state

## Related Concepts

- [Human Presence](/concepts/human-presence) -- What BotShield verifies
- [Device Security](/concepts/device-security) -- Hardware-backed security requirements
- [SDK Overview](/sdk/overview) -- Technical API architecture
