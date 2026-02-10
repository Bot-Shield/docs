# OpenAPI SDK A Documentation

This directory contains the filtered OpenAPI specification for BotShield SDK A.

## What is SDK A?

SDK A provides **signal-only verification without anchoring**. It offers momentary human presence checks with no persistence.

## Included Endpoints

The `openapi-sdk-a.json` file includes only SDK A operations:

1. **POST** `/sdk/create-session` - Create an Anchor Grant Window (legacy: session token)
2. **POST** `/sdk/create-verification-link` - Create Verification Request (Anchor-Scoped)
3. **POST** `/sdk/logout` - Revoke Anchor Grant Window (legacy: Logout Session)
4. **GET** `/verification/status` - Check verification status

## Updating the OpenAPI Spec

When the API changes in `botshield-wg`, update the Mintlify documentation spec:

```bash
npm run update:openapi
```

This script:
1. Reads the full OpenAPI spec from `../botshield-wg/openapi-spec.json`
2. Filters to only SDK A operations using `../botshield-wg/sdk-operations-manifest.json`
3. Updates `docs/openapi-sdk-a.json`

Then commit and push:

```bash
git add docs/openapi-sdk-a.json
git commit -m "docs: update SDK A OpenAPI spec"
git push origin main
```

Mintlify will automatically deploy the updated API documentation.

## Manual Update

If you need to update manually:

```bash
node scripts/update-openapi-sdk-a.js
```

## Source Files

- **OpenAPI Source**: `../botshield-wg/openapi-spec.json`
- **Manifest Source**: `../botshield-wg/sdk-operations-manifest.json`
- **Filtered Output**: `docs/openapi-sdk-a.json`

## Mintlify Configuration

The OpenAPI spec is configured in `mint.json`:

```json
{
  "openapi": "docs/openapi-sdk-a.json",
  "api": {
    "baseUrl": "https://api.botshield.ai",
    "auth": {
      "method": "bearer"
    }
  }
}
```
