import { sn2d } from './sn2d';

/**
 * Tagged template function _Some Non-stringifiable to Undefined:_ returns `undefined` when any expression has no `toString` property.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 * @category Tagged Templates
 */
export const sn2u = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  sn2d(undefined)(strings, ...exp);
