import { isNil } from './isNil';

/**
 * Tagged template function Some Nil to Null: returns null when any expression null or undefined.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 */
export const sn2n = (
  strings: TemplateStringsArray,
  ...exp: (string | number | null | undefined)[]
) =>
  exp.some(isNil)
    ? null
    : exp.reduce<string>(
        (output, e, i) => output + e!.toString() + strings[i + 1],
        strings[0],
      );
