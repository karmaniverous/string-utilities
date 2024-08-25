import { isStringifiable, type Stringifiable } from '../types';

/**
 * Tagged template meta-function _Some Non-stringifiable to Default:_ returns tagged template function that returns a default value when any expression has no `toString` property.
 *
 * @param defaultValue - The default value.
 * @returns Tagged template function that returns `default` when any expression has no `toString` property.
 *
 * @example
 * ```ts
 * const value = sn2d`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === 'default'
 * ```
 *
 * @category Tagged Templates
 */
export const sn2d =
  (defaultValue: unknown) =>
  (strings: TemplateStringsArray, ...exp: unknown[]) =>
    exp.some((e) => !isStringifiable(e))
      ? defaultValue
      : exp.reduce<string>(
          (output, e, i) =>
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            output + (e as Stringifiable).toString() + strings[i + 1],
          strings[0],
        );
