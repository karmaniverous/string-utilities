import { z } from 'zod';

/**
 * Zod schema representing Stringifiable type.
 *
 * @category Types
 */
export const stringifiableZodSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.bigint(),
  z.symbol(),
  z.instanceof(Object),
]);

/**
 * Represents any value with a `toString` method.
 *
 * @category Types
 */
export type Stringifiable = z.infer<typeof stringifiableZodSchema>;

/**
 * Returns `true` when `value` has `toString` method.
 *
 * @param value - The value to test.
 * @returns `true` if `value` has `toString` method.
 * @category Types
 */
export const isStringifiable = (value: unknown): value is Stringifiable =>
  value === '' || !!value?.toString;
