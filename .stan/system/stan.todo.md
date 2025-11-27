# Development Plan

## Next up

- Verify Rollup build produces ESM, CJS, IIFE, and minified IIFE artifacts.
- Run knip and prune any new unused deps or files after migration.
- Confirm ESLint runs type-aware on all TS files, including configs.

## Completed (recent)

- Migrate tests from Mocha/Chai to Vitest:
  - Replaced Chai imports with Vitest imports.
  - Removed Mocha env headers; kept describe/it semantics via Vitest.
  - Removed obsolete .mocharc.json and .nycrc.json.
- Adopt strict, flat ESLint config:
  - Lint all TS/JS files (including configs and tests).
  - Type-aware linting for all TS; enforced no-explicit-any.
  - Kept Prettier integration, import sorting, and TSDoc syntax checks.
- Update Rollup per legacy requirements:
  - Restored IIFE outputs (regular + minified) using @rollup/plugin-terser.
  - Used packageName for IIFE global name.
  - Maintained ESM, CJS, and DTS outputs.
- Align tsconfig with typed ESLint:
  - Included rollup.config.ts and ensured config/test files are covered.
  - Removed stray paths alias.
- Dependency hygiene:
  - Added @rollup/plugin-terser.
  - Removed unused devDependencies: ts-node.
  - Added @vitest/coverage-v8 for coverage provider "v8".
