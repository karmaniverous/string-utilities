import { sn2d } from './sn2d';

/**
 * **Some Non-stringifiable to Empty String**: returns empty string when any expression has no `toString` property.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 *
 * @example
 * ```ts
 * const value = sn2e`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === ''
 * ```
 *
 * @category Tagged Templates
 */
export const sn2e = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  sn2d('')(strings, ...exp);
