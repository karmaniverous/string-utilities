<!-- TYPEDOC_EXCLUDE -->

> [API Documentation](https://karmaniverous.github.io/string-utilities) • [CHANGELOG](https://github.com/karmaniverous/string-utilities/tree/main/CHANGELOG.md)

<!-- /TYPEDOC_EXCLUDE -->

# string-utilities

Handy tagged templates & other string utilities.

To install:

```bash
npm i @karmaniverous/string-utilities
```

Contents:

- Types

  - [`Stringifiable`](https://karmanivero.us/string-utilities/types/index.Stringifiable.html) - Represents any value with a `toString` method.

  - [`isStringifiable`](https://karmanivero.us/string-utilities/functions/index.isStringifiable.html) - Returns `true` when value has `toString` method.

- Transformations

  - [`normstr`](https://karmanivero.us/string-utilities/functions/index.normstr.html) - Normalize a string by converting diacriticals to base characters, removing non-word characters, and converting to lower case. Non-strings return undefined.

- Tagged Template Functions

  - Non-stringifiable to Empty String ([`n2e`](https://karmanivero.us/string-utilities/functions/index.n2e.html)) - Replaces expressions without `toString` property with empty strings.

  - Some Non-stringifiable to Empty String ([`sn2e`](https://karmanivero.us/string-utilities/functions/index.sn2e.html)) - Returns empty string when any expression has no `toString` property.

  - Some Non-stringifiable to Null ([`sn2n`](https://karmanivero.us/string-utilities/functions/index.sn2n.html)) - Returns `null` when any expression has no `toString` property.

  - Some Non-stringifiable to Undefined ([`sn2u`](https://karmanivero.us/string-utilities/functions/index.sn2u.html)) - Returns `undefined` when any expression has no `toString` property.

- Higher-Order Functions

  - Non-stringifiable to Default ([`n2d`](https://karmanivero.us/string-utilities/functions/index.n2d.html)) - Returns tagged template function that replaces any expression that has no `toString` property with a default value.

  - Some Non-stringifiable to Default ([`sn2d`](https://karmanivero.us/string-utilities/functions/index.sn2d.html)) - Returns tagged template function that returns a default value when any expression has no `toString` property.

---

Built for you with ❤️ on Bali! Find more great tools & templates on [my GitHub Profile](https://github.com/karmaniverous).
