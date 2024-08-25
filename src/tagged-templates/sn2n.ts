import { sn2d } from './sn2d';

/**
 * Tagged template function _Some Non-stringifiable to Null:_ returns `null` when any expression has no `toString` property.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 *
 * @example
 * ```ts
 * const value = sn2d`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === null
 * ```
 *
 * @category Tagged Templates
 */
export const sn2n = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  sn2d(null)(strings, ...exp);
