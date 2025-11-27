import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tsDocPlugin from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

// Safely extract Vitest's recommended rules with concrete typing,
// avoiding any/unknown in the config object.
const vitestRecommendedRules = (
  vitest.configs as unknown as {
    recommended: { rules: Record<string, unknown> };
  }
).recommended.rules;

export default defineConfig([
  // Global ignores (keep ESLint away from build/cache JS)
  {
    ignores: ['coverage/**/*', 'dist/**/*', 'docs/**/*', '.rollup.cache/**/*'],
  },
  // Strict, type-aware rules for all TS (including configs and tests)
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      prettierConfig,
    ],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      tsdoc: tsDocPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'tsdoc/syntax': 'warn',
    },
  },
  // JS files (configs, scripts)
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    extends: [eslint.configs.recommended, prettierConfig],
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'error',
    },
  },
  // Vitest rules and globals for test files
  {
    files: ['**/*.test.ts'],
    plugins: {
      vitest: vitest as never,
    },
    rules: {
      ...vitestRecommendedRules,
      // Allow Chai-style chainers provided by Vitest (e.g., .to.equal)
      'vitest/valid-expect': 'off',
    },
  },
]);
