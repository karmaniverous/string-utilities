import { sn2d } from './sn2d';

/**
 * Tagged template function _Some Non-stringifiable to Null:_ returns `null` when any expression has no `toString` property.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 * @category Tagged Templates
 */
export const sn2n = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  sn2d(null)(strings, ...exp);
