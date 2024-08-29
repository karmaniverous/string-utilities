/**
 * Represents any value with a `toString` method.
 *
 * @category Types
 */
export type Stringifiable =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | object;

/**
 * Returns `true` when `value` has `toString` method.
 *
 * @param value - The value to test.
 * @returns `true` if `value` has `toString` method.
 * @category Types
 */
export const isStringifiable = (value: unknown): value is Stringifiable =>
  value === '' || !!value?.toString;
