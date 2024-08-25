import { Stringifiable } from '../types';

/**
 * Tagged template meta-function **Non-stringifiable to Default**: returns tagged template function that replaces any expression that has no `toString` property with a default value.
 *
 * @param defaultValue - The default value.
 * @returns Tagged template function that replaces any expression that has no `toString` property with `default`.
 *
 * @example
 * ```ts
 * const value = sn2d`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === 'string: foo number: 42 boolean: true null: default undefined: default'
 * ```
 *
 * @category Tagged Templates
 */
export const n2d =
  (defaultValue: Stringifiable) =>
  (strings: TemplateStringsArray, ...exp: unknown[]) =>
    exp.reduce<string>(
      (output, e, i) =>
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        output + (e?.toString?.() ?? defaultValue.toString()) + strings[i + 1],
      strings[0],
    );
