---
title: Use Cases
description: Real-world applications for BotShield human presence verification
---

# Use Cases

BotShield is designed for platforms that need to verify human presence for critical actions. Here are common use cases.

## E-Commerce and Retail

### Limited-Access Product Drops

Protect high-demand product launches from bots and scalpers:

- Sneaker releases
- Limited edition collectibles
- Concert merchandise
- Exclusive collaborations

<Card title="Example: Sneaker Drop" icon="shoe">
A sneaker brand integrates BotShield at checkout. When a user attempts to purchase a limited release, the platform creates a verification request via the API. The user verifies their presence in 5 seconds via Face ID, and the checkout proceeds. Bots cannot complete this flow.
</Card>

### High-Value Checkout

Require verification for expensive purchases:

- Luxury goods
- Electronics
- High-ticket items
- Custom orders

**Integration pattern:**

```bash
# When cart total exceeds threshold, create verification
POST /operations/sdk/create-verification-link
{
  "scope": "checkout.complete",
  "sdk_type": "signal",
  "webhook_url": "https://your-store.com/botshield-webhook",
  "metadata": { "order_id": "ORD-12345", "total": 599.99 }
}
```

## Ticketing and Events

### Ticket Sales

Ensure fair access for real customers:

- Concert tickets
- Sports events
- Theater shows
- Festival passes

<Card title="Example: Concert Tickets" icon="ticket">
A ticketing platform uses BotShield to prevent bot scalping. Before a ticket purchase is processed, the user must complete a presence verification. Real fans complete this in seconds. Automated scalping bots cannot.
</Card>

### Event Registration

Protect event registration from automated signups:

- Conferences
- Workshops
- Limited-capacity events

## Platform Actions

### Account Recovery

Verify human presence during sensitive account operations:

- Password reset
- Email change
- Security settings modification

### High-Value Platform Actions

Protect critical platform operations:

- API key generation
- Payment method changes
- Subscription modifications
- Data exports

## Content and Community

### Public Posting

Reduce spam and abuse in public forums:

- Comment systems
- Review platforms
- Community forums

### Content Submission

Prevent automated content creation:

- User-generated content
- Form submissions
- Upload systems

## Financial Services

### Transaction Verification

Verify human presence for financial actions:

- Wire transfers
- Large withdrawals
- Account changes

### Digital Agreements

Confirm human presence for legal documents:

- Terms acceptance
- Contract signing
- Consent forms

## Integration Patterns

### Selective Enforcement

You choose which actions require verification. Not every action needs it -- only the ones where bot abuse would cause harm:

```bash
# High-value checkout: always verify
POST /operations/sdk/create-verification-link
{ "scope": "checkout.complete", "sdk_type": "signal" }

# Low-value actions: skip verification
# (no BotShield call needed)
```

### Webhook-Driven Flow

The recommended pattern for production:

1. User initiates action on your platform
2. Your server creates a verification link via BotShield API
3. User completes verification (5 seconds for returning users)
4. BotShield sends HPS to your webhook
5. Your server validates the token and completes the action

## Next Steps

- [Quick Start](/quickstart) -- Step-by-step integration guide
- [SDK Overview](/sdk/overview) -- Technical API architecture
- [Request Developer Access](https://botshield.ai/pricing) -- Apply for API credentials
