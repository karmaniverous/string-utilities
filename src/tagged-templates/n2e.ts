import { n2d } from './n2d';

/**
 * **Non-stringifiable to Empty String**: replaces expressions without toString property with empty strings.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 *
 * @example
 * ```ts
 * const value = n2e`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`;
 * // value === 'string: foo number: 42 boolean: true null:  undefined: '
 * ```
 *
 * @category Tagged Templates
 */
export const n2e = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  n2d('')(strings, ...exp);
