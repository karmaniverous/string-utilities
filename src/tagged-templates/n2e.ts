/**
 * Tagged template function _Non-stringifiable to Empty:_ replaces expressions without toString property with empty strings.
 *
 * @param strings - The string literals.
 * @param exp - The expressions.
 * @returns The output string.
 * @category Tagged Templates
 */
export const n2e = (strings: TemplateStringsArray, ...exp: unknown[]) =>
  exp.reduce<string>(
    (output, e, i) => output + (e?.toString?.() ?? '') + strings[i + 1],
    strings[0],
  );
