---
title: Client Libraries
description: Official BotShield SDKs for integrating human presence verification into your platform
---

# Client Libraries

BotShield provides official client libraries as an alternative to calling the [REST API](/api-reference/overview) directly. Each library wraps the same SDK A operations and provides typed interfaces, automatic retries, and error handling out of the box.

<Info>
Client libraries require an API key. [Request developer access](https://botshield.ai/pricing) to get started.
</Info>

## Available SDKs

<CardGroup cols={2}>
  <Card title="TypeScript / JavaScript" icon="js" href="https://github.com/Bot-Shield/botshield-sdk-typescript">
    Server-side TypeScript and JavaScript SDK. Works with Node.js, Deno, Bun, Cloudflare Workers, and Vercel Edge Runtime.
  </Card>
  <Card title="More Languages Coming" icon="ellipsis">
    Additional SDKs (Python, Go, etc.) are planned. Contact us if you have a specific language requirement.
  </Card>
</CardGroup>

---

## TypeScript / JavaScript

The TypeScript SDK is published on npm and generated with [Stainless](https://stainless.com) for full type safety and consistency with the REST API.

### Installation

```bash
npm install botshield-sdk
```

### Quick Start

```typescript
import BotShield from 'botshield-sdk';

const client = new BotShield({
  apiKey: process.env['BOTSHIELD_API_KEY'],
  environment: 'production', // or 'development' for test keys
});

// Create a session
const session = await client.sdk.createSession({
  partner_user_id: 'your_internal_user_id',
});

// Create a verification link
const verification = await client.sdk.createVerificationLink({
  scope: 'checkout.complete',
  sdk_type: 'signal',
  webhook_url: 'https://your-platform.com/botshield-webhook',
});

console.log(verification.data.deep_link);
console.log(verification.data.web_url);
console.log(verification.data.qr_code_url);
```

### Error Handling

```typescript
try {
  const response = await client.sdk.createVerificationLink({ ... });
} catch (err) {
  if (err instanceof BotShield.APIError) {
    console.log(err.status);  // 400, 401, etc.
    console.log(err.name);    // BadRequestError, AuthenticationError, etc.
    console.log(err.message);
  }
}
```

| Status Code | Error Type |
|-------------|-----------|
| 400 | `BadRequestError` |
| 401 | `AuthenticationError` |
| 403 | `PermissionDeniedError` |
| 404 | `NotFoundError` |
| 422 | `UnprocessableEntityError` |
| 429 | `RateLimitError` |
| >=500 | `InternalServerError` |

### Automatic Retries

The SDK automatically retries failed requests up to 2 times with exponential backoff. Connection errors, timeouts, 429 rate limits, and 5xx server errors are all retried by default.

```typescript
const client = new BotShield({
  maxRetries: 0, // disable retries
});

// Or per-request:
await client.sdk.createVerificationLink({
  maxRetries: 5,
});
```

### Supported Runtimes

- Node.js 20 LTS or later
- Deno v1.28.0+
- Bun 1.0+
- Cloudflare Workers
- Vercel Edge Runtime

### Resources

- [GitHub Repository](https://github.com/Bot-Shield/botshield-sdk-typescript) -- Source code, issues, and releases
- [Full API Reference](https://github.com/Bot-Shield/botshield-sdk-typescript/blob/main/api.md) -- Complete method documentation
- [npm Package](https://www.npmjs.com/package/botshield-sdk) -- Latest published version
- [Changelog](https://github.com/Bot-Shield/botshield-sdk-typescript/blob/main/CHANGELOG.md) -- Release history

---

## REST API vs. Client Library

Both approaches use the same underlying API and provide the same guarantees. Choose what fits your stack:

| | REST API | Client Library |
|---|---------|---------------|
| **Integration** | HTTP calls from any language | Import and call typed methods |
| **Type Safety** | Manual (parse JSON responses) | Built-in TypeScript types |
| **Retries** | Implement yourself | Automatic with backoff |
| **Error Handling** | Parse HTTP status codes | Typed error classes |
| **Dependencies** | None (just HTTP) | npm package |

<Tip>
If you're already using TypeScript/JavaScript on your server, the client library is the fastest path to integration. For other languages or minimal-dependency environments, the REST API works from anywhere.
</Tip>

## Next Steps

- [REST API Reference](/api-reference/overview) -- Direct HTTP endpoint documentation
- [Quick Start](/quickstart) -- Step-by-step integration walkthrough
- [SDK Features](/sdk/features) -- What SDK A provides
