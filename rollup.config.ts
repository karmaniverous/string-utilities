/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { readFileSync } from 'node:fs';

import aliasPlugin, { Alias } from '@rollup/plugin-alias';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import stripPlugin from '@rollup/plugin-strip';
import terserPlugin from '@rollup/plugin-terser';
import typescriptPlugin from '@rollup/plugin-typescript';
import type { InputOptions, OutputOptions, RollupOptions } from 'rollup';
import dtsPlugin from 'rollup-plugin-dts';

import { packageName } from './src/util/packageName';

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);

const outputPath = `dist`;

const commonPlugins = [
  stripPlugin({ include: ['**/*.ts'] }),
  commonjsPlugin(),
  jsonPlugin(),
  nodeResolve(),
  typescriptPlugin(),
];

const commonAliases: Alias[] = [];

type Package = Record<string, Record<string, string> | undefined>;

const commonInputOptions: InputOptions = {
  external: [
    ...Object.keys((pkg as unknown as Package).dependencies ?? {}),
    ...Object.keys((pkg as unknown as Package).peerDependencies ?? {}),
    'tslib',
  ],
  input: 'src/index.ts',
  plugins: [aliasPlugin({ entries: commonAliases }), ...commonPlugins],
};

const iifeCommonOutputOptions: OutputOptions = {
  name: packageName ?? 'unknown',
};

const config: RollupOptions[] = [
  // ESM output.
  {
    ...commonInputOptions,
    output: [
      {
        dir: `${outputPath}/mjs`,
        extend: true,
        format: 'esm',
        preserveModules: true,
      },
    ],
  },

  // IIFE output.
  {
    ...commonInputOptions,
    plugins: [aliasPlugin({ entries: commonAliases }), ...commonPlugins],
    output: [
      {
        ...iifeCommonOutputOptions,
        extend: true,
        file: `${outputPath}/index.iife.js`,
        format: 'iife',
      },
      {
        ...iifeCommonOutputOptions,
        extend: true,
        file: `${outputPath}/index.iife.min.js`,
        format: 'iife',
        plugins: [terserPlugin()],
      },
    ],
  },

  // CommonJS output.
  {
    ...commonInputOptions,
    output: [
      {
        dir: `${outputPath}/cjs`,
        extend: true,
        format: 'cjs',
        preserveModules: true,
      },
    ],
  },

  // Type definitions output.
  {
    ...commonInputOptions,
    // Rebuild plugin list locally to avoid spreading a possibly non-iterable
    // InputPluginOption union (fixes TS2488 in typed builds).
    plugins: [
      aliasPlugin({ entries: commonAliases }),
      ...commonPlugins,
      dtsPlugin(),
    ],
    output: [
      {
        extend: true,
        file: `${outputPath}/index.d.ts`,
        format: 'esm',
      },
    ],
  },
];

export default config;
