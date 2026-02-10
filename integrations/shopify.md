---
title: Shopify Integration
description: Integrate BotShield with Shopify using platform-supported checkout extensibility
---

# Shopify Integration

BotShield integrates with Shopify using platform-supported checkout extensibility to verify human presence at checkout, protecting high-demand product drops and preventing bot-driven purchases.

## Overview

The Shopify integration allows you to:

- Verify human presence at checkout
- Prevent bot-driven purchases and scalping
- Ensure fair access for real customers during limited-access drops
- Protect high-demand product releases

## How It Works

BotShield integrates with Shopify through:

1. **Checkout Extensibility** -- Shopify's official extension points
2. **Server-Side API** -- Your backend calls BotShield's REST API to create verification requests
3. **Seamless UX** -- The user verifies via BotShield (deep link or QR code) and returns to checkout

## Integration Flow

1. Customer initiates checkout on your Shopify store
2. Your checkout extension calls your backend
3. Your backend creates a BotShield verification link via the API:

```bash
POST /operations/sdk/create-verification-link
Authorization: Bearer SESSION_TOKEN

{
  "scope": "checkout.complete",
  "sdk_type": "signal",
  "webhook_url": "https://your-store.com/botshield-webhook",
  "metadata": {
    "shopify_order_id": "ORD-12345",
    "collection": "limited-edition"
  }
}
```

4. Customer completes verification in the BotShield app (5 seconds for returning users)
5. BotShield sends the Human Presence Signal to your webhook
6. Your backend validates the token and allows the checkout to proceed

## Configuration Options

You control when verification is required:

- **All checkouts** -- Every purchase requires verification
- **High-value orders only** -- Orders above a price threshold
- **Specific product collections** -- Limited-edition or high-demand items
- **Limited-access drops** -- Time-limited product releases

## Use Cases

### Limited-Access Drops

Protect high-demand product launches from bot scalping. When a sneaker drop or limited-edition release goes live, BotShield ensures only real humans can complete checkout.

### High-Value Orders

Require verification for orders above a threshold. Low-value, everyday purchases proceed normally; high-ticket items get an extra layer of human verification.

## Benefits

<CardGroup cols={2}>
  <Card title="Fair Access" icon="users">
    Ensure real customers get access to limited products
  </Card>
  <Card title="Bot Protection" icon="shield">
    Prevent automated purchases and scalping
  </Card>
  <Card title="Seamless UX" icon="zap">
    No CAPTCHA puzzles -- 5-second biometric verification
  </Card>
  <Card title="Platform Native" icon="check-circle">
    Uses Shopify's official checkout extensibility APIs
  </Card>
</CardGroup>

## Early Partner Program

We are onboarding a small group of Shopify merchants running high-demand checkouts to restore fair access for real customers.

**Early partner pricing available for a limited time.**

[Contact us](https://botshield.ai/shopify) to learn more about the early partner program.

## Next Steps

- [Request Developer Access](https://botshield.ai/pricing)
- [Quick Start](/quickstart) -- General integration guide
- [Contact Us](https://botshield.ai/shopify) for early partner pricing
