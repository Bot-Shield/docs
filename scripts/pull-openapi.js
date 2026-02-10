#!/usr/bin/env node
/**
 * Pull and filter SDK A OpenAPI spec from botshield-wg
 *
 * Reads the full OpenAPI spec and operations manifest from ../botshield-wg/,
 * filters to SDK A operations only, and writes the result to openapi-sdk-a.json.
 *
 * Usage:
 *   node scripts/pull-openapi.js
 *   npm run update:openapi
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WG_DIR = path.resolve(__dirname, '../../botshield-wg');
const OPENAPI_SOURCE = path.join(WG_DIR, 'openapi-spec.json');
const MANIFEST_SOURCE = path.join(WG_DIR, 'sdk-operations-manifest.json');
const OPENAPI_TARGET = path.resolve(__dirname, '../openapi-sdk-a.json');

// Check source files exist
if (!fs.existsSync(OPENAPI_SOURCE)) {
  console.error(`Error: OpenAPI spec not found at ${OPENAPI_SOURCE}`);
  console.error('Make sure botshield-wg is at ../botshield-wg/ and has been built.');
  console.error('Run: cd ../botshield-wg && npm run sdk:openapi');
  process.exit(1);
}

if (!fs.existsSync(MANIFEST_SOURCE)) {
  console.error(`Error: Manifest not found at ${MANIFEST_SOURCE}`);
  console.error('Make sure botshield-wg is at ../botshield-wg/ and has been built.');
  console.error('Run: cd ../botshield-wg && npm run sdk:manifest');
  process.exit(1);
}

// Read source files
const openapi = JSON.parse(fs.readFileSync(OPENAPI_SOURCE, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(MANIFEST_SOURCE, 'utf8'));

// Get SDK A operation paths
const sdkAPaths = manifest.operations
  .filter(op => op.sdk_a === true)
  .map(op => op.path);

console.log('SDK A Operations:');
sdkAPaths.forEach(p => {
  console.log(`  ${p}`);
});

// Filter paths to only SDK A operations
const filteredPaths = {};
for (const [apiPath, methods] of Object.entries(openapi.paths || {})) {
  if (sdkAPaths.includes(apiPath)) {
    filteredPaths[apiPath] = methods;
  }
}

console.log(`\nFiltered ${Object.keys(filteredPaths).length} of ${Object.keys(openapi.paths || {}).length} paths for SDK A`);

// Create filtered OpenAPI spec
const filteredSpec = {
  ...openapi,
  info: {
    ...openapi.info,
    title: 'BotShield SDK A API',
    description: 'BotShield SDK A -- Signal-only verification. Momentary human presence check with no persistence.',
    version: openapi.info?.version || '1.0.0'
  },
  paths: filteredPaths
};

// Write filtered spec
fs.writeFileSync(OPENAPI_TARGET, JSON.stringify(filteredSpec, null, 2));

console.log(`\nWritten to ${OPENAPI_TARGET}`);
console.log('\nNext steps:');
console.log('  1. Review: git diff openapi-sdk-a.json');
console.log('  2. Commit: git add openapi-sdk-a.json && git commit -m "docs: update SDK A OpenAPI spec"');
console.log('  3. Push: git push origin main');
console.log('  4. Mintlify will auto-deploy the updated API docs');
