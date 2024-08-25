/**
 * Normalize a string by converting diacriticals to base characters, removing non-word characters, and converting to lower case. Non-strings return undefined.
 *
 * @param value - The string to normalize.
 * @returns The normalized string or undefined if not a string.
 *
 * @example
 * ```ts
 * const value = normstr('Við skulum fara á fjörðurinn í kvöld.');
 * // value === 'viskulumfaraafjorurinnikvold'
 * ```
 *
 * @category Transformations
 */
export const normstr = (value?: string) =>
  value === ''
    ? value
    : value?.normalize
      ? value
          .normalize('NFKD')
          .replace(/[\p{Diacritic}\W]/gu, '')
          .toLowerCase()
      : undefined;
