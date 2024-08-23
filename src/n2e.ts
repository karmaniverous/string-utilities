/**
 * Tagged template function Nil to Empty: replaces null or undefined expressions with empty strings.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 */
export const n2e = (
  strings: TemplateStringsArray,
  ...exp: (string | number | null | undefined)[]
) =>
  exp.reduce<string>(
    (output, e, i) => output + (e?.toString() ?? '') + strings[i + 1],
    strings[0],
  );
