---
title: Deployment Overview
description: Choose the right BotShield deployment option for your platform
---

# Deployment Options

BotShield offers deployment options for platforms of any size, from development to enterprise scale. All tiers use SDK A (Signal-Only) verification.

<Info>
Access to all tiers begins with a [developer application](https://botshield.ai/pricing). Once approved, you receive API credentials for your chosen tier.
</Info>

## Deployment Tiers

<CardGroup cols={2}>
  <Card title="Development" icon="code">
    For local development and controlled evaluation
  </Card>
  <Card title="Production Starter" icon="rocket">
    For initial live deployment and low-volume traffic
  </Card>
  <Card title="Growth" icon="trending-up">
    For platforms with sustained verification demand
  </Card>
  <Card title="Enterprise" icon="building">
    For high-traffic platforms with advanced needs
  </Card>
</CardGroup>

## Comparison

| Feature | Development | Production Starter | Growth | Enterprise |
|---------|------------|-------------------|--------|------------|
| **Environment** | Test-only | Live | Live | Live |
| **Verification Volume** | Capped for evaluation | Baseline capacity | Increased volume | Custom |
| **Enforcement Scope** | Single action | Action-scoped | Multiple critical actions | Custom configuration |
| **Usage** | Evaluation only | First production rollout | Continuous production | High-traffic production |
| **Support** | Community | Standard | Standard | Priority + Dedicated |
| **Hosting** | Shared | Shared | Shared | Dedicated |
| **Access Control** | Basic | Basic | Basic | Role-Based Access Control |

## Choosing Your Tier

### Development

Choose Development if you:

- Are evaluating BotShield for your platform
- Need a test environment for integration
- Want to understand how BotShield works before committing
- Are building a proof of concept

<Card title="Development Features" icon="flask">
- Test-only execution environment
- Capped verification volume for evaluation
- Single-action presence verification
- Test API keys (prefix: `bsk_test_`)
- No overage usage permitted
</Card>

### Production Starter

Choose Production Starter if you:

- Are ready for your first live deployment
- Have low to moderate traffic volume
- Need action-scoped enforcement
- Want to start with baseline capacity

<Card title="Production Starter Features" icon="rocket">
- Live execution environment
- Baseline verification capacity
- Action-scoped presence enforcement
- Webhook and polling support
- Intended for first production rollout
</Card>

### Growth

Choose Growth if you:

- Have sustained verification demand
- Need enforcement across multiple actions
- Are operating in continuous production
- Require increased verification volume

<Card title="Growth Features" icon="trending-up">
- Increased verification volume
- Enforcement across multiple critical actions
- Designed for continuous production operation
</Card>

### Enterprise

Choose Enterprise if you:

- Have high-traffic platforms
- Need custom enforcement configuration
- Require priority support
- Want dedicated hosting
- Need role-based access control

<Card title="Enterprise Features" icon="building">
- Custom enforcement and policy configuration
- Priority operational and deployment support
- Dedicated hosting
- Role-Based Access Control
</Card>

## Getting Started

1. **Request Developer Access** -- Fill out the [application form](https://botshield.ai/pricing)
2. **Choose Your Tier** -- Select the deployment option that fits your needs
3. **Get Approved** -- Applications are reviewed manually (typically 24-48 hours)
4. **Receive Credentials** -- Get your API key and integration guide
5. **Integrate** -- Follow the [Quick Start](/quickstart) guide

## Pricing

All tiers use **transparent, usage-based pricing**:

- Pay only for verifications you use
- No monthly minimums
- No hidden fees
- Clear pricing per verification

## Next Steps

- [Request Developer Access](https://botshield.ai/pricing)
- [Quick Start Guide](/quickstart) -- Step-by-step integration
- [Integration Guides](/integrations/shopify) -- Platform-specific guides
