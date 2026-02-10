# BotShield Client Documentation

Client-facing documentation for BotShield, powered by [Mintlify](https://mintlify.com).

Published at: **https://docs.botshield.ai**

## Audience

This documentation is for BotShield's external audience:

- **Partners** -- companies evaluating BotShield for integration
- **Decision makers** -- executives and sales teams
- **Developers** -- engineers at partner companies integrating via REST API

## Local Development

Preview documentation locally:

```bash
npx mintlify dev
```

## Updating the OpenAPI Spec

The SDK A OpenAPI spec (`openapi-sdk-a.json`) is generated from the BotShield WunderGraph backend.

### Option A: Pull from botshield-wg (from this repo)

```bash
npm run update:openapi
```

This reads `openapi-spec.json` and `sdk-operations-manifest.json` from `../botshield-wg/` and filters to SDK A operations.

### Option B: Push from botshield-wg

From the `botshield-wg` repo:

```bash
npm run sdk:openapi:docs
```

This generates the filtered spec and writes it directly to this repo.

## Structure

```
docs.json                  -- Mintlify configuration
openapi-sdk-a.json         -- SDK A OpenAPI spec (auto-generated)
introduction.md            -- Welcome page
quickstart.md              -- Getting started guide
what-is-botshield.md       -- Product overview
api-reference/             -- API endpoint documentation
concepts/                  -- Core concepts (human presence, device security, etc.)
deployment/                -- Deployment tiers
integrations/              -- Platform-specific guides (Shopify, etc.)
sdk/                       -- SDK/API overview, features, use cases
scripts/                   -- Helper scripts
```

## Deployment

Mintlify auto-deploys from the `main` branch via GitHub integration. Any push to `main` triggers a new deployment to `docs.botshield.ai`.
