---
title: Device Security
description: Why BotShield requires a device passcode for presence verification
---

# Device Security

BotShield enforces a hard requirement that the user's device has a system passcode enabled in order to perform presence verification. This is a trust boundary, not UX friction.

## Why Device Passcode is Required

On iOS and Android, the system passcode is the foundation of hardware-backed security:

- **No passcode = no secure device-owner authentication.** Without a passcode, the OS cannot provide a hardware-backed "human-gated" event.
- **No hardware backing = no valid attestation.** Issuing presence attestations without this would be cryptographically and semantically invalid.
- **BotShield will not fake presence.** We do not simulate presence using gestures, UI interactions, or any software-only mechanism.

<Info>
This requirement does not block the BotShield app itself -- it only gates verification and attestation flows. The app remains usable for non-verification surfaces.
</Info>

## How It Works

Before any verification action, BotShield checks the device's authentication capability:

- If the device has a passcode (with or without biometrics), verification proceeds normally
- If the device has **no passcode set**, the verification flow is blocked with a clear instructional message

### What Is Allowed

| Device State | Result |
|---|---|
| Passcode only (no biometrics enrolled) | Verification proceeds -- passcode is sufficient |
| Biometrics enrolled (Face ID / Touch ID) | Verification proceeds -- biometric is used |
| Biometrics locked out (too many attempts) | Verification proceeds -- passcode fallback is used |
| User cancels authentication prompt | No attestation issued (normal failure, user can retry) |

### What Is Not Allowed

| Device State | Result |
|---|---|
| No passcode set | **No attestation issued** -- returns `DEVICE_LOCK_REQUIRED` |
| No continuity window | No reduced-friction verification possible |
| No secure device state | No Human Presence Signal output |

## Why This Is Correct

### Aligns with Platform Security Models

This behavior matches Apple's Secure Enclave and LocalAuthentication framework. The same requirement is enforced by:

- Banking applications
- Password managers (1Password, Bitwarden)
- Enterprise MDM solutions
- Apple Pay and Google Pay

### Keeps Attestations Defensible

Every Human Presence Signal (HPS) that BotShield issues carries an implicit guarantee: a real human, on a secure device, completed a hardware-backed authentication at the moment of action. Allowing attestation without a device passcode would undermine this guarantee.

### App Store Safe

This approach is Apple App Store and Google Play compliant when scoped to verification actions and explained clearly to the user. The app itself does not require a passcode to open -- only the verification flow does.

## What Partners Should Know

- **End users will occasionally encounter this.** If a user has disabled their device passcode, they will see an instructional screen asking them to enable it before they can complete verification.
- **This is rare.** The vast majority of smartphone users have a passcode enabled by default.
- **This protects your platform.** Every verification that passes through BotShield is backed by hardware-level security. There are no weak attestations.

## Error Handling

When a device does not have a passcode, your webhook will not fire (the user cannot complete verification). If you are polling for status, the verification will remain in `pending` state until it expires.

The BotShield app handles the user-facing messaging, showing clear instructions on how to enable a device passcode in Settings.

## Related Concepts

- [Human Presence](/concepts/human-presence) -- What BotShield verifies
- [Action-Scoped Enforcement](/concepts/action-scoped-enforcement) -- How verification is scoped
- [SDK Features](/sdk/features) -- Full feature overview
