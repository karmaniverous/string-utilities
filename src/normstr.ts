/**
 * Normalize a string by converting diacriticals to base characters, removing non-word characters, and converting to lower case.
 *
 * @param str - The string to normalize.
 * @returns The normalized string or undefined if not a string.
 */
export const normstr = (str?: string) =>
  str
    ? str
        .normalize('NFKD')
        .replace(/[\p{Diacritic}\W]/gu, '')
        .toLowerCase()
    : undefined;
