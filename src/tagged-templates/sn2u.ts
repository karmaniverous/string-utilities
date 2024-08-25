import { sn2d } from './sn2d';

/**
 * Tagged template function **Some Non-stringifiable to Undefined**: returns `undefined` when any expression has no `toString` property.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 *
 * @example
 * ```ts
 * const value = sn2d`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === undefined
 * ```
 *
 * @category Tagged Templates
 */
export const sn2u = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  sn2d(undefined)(strings, ...exp);
