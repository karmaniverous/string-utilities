import { Stringifiable } from '../types';

/**
 * **Non-stringifiable to Default**: returns tagged template function that replaces any expression that has no `toString` property with a default value.
 *
 * @param defaultValue - The default value.
 * @returns Tagged template function that replaces any expression that has no `toString` property with `default`.
 *
 * @example
 * ```ts
 * const value = n2d('default')`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === 'string: foo number: 42 boolean: true null: default undefined: default'
 * ```
 *
 * @category Higher-Order Functions
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
