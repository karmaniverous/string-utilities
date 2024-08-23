**@karmaniverous/string-utilities** • **Docs**

***

# @karmaniverous/string-utilities

## Functions

### n2e()

```ts
function n2e(strings, ...exp): string
```

Tagged template function Nil to Empty: replaces null or undefined expressions with empty strings.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strings` | `TemplateStringsArray` | The string literals. |
| ...`exp` | (`undefined` \| `null` \| `string` \| `number`)[] | The expressions. |

#### Returns

`string`

The output string.

#### Defined in

n2e.ts:8

***

### normstr()

```ts
function normstr(str?): undefined | string
```

Normalize a string by converting diacriticals to base characters, removing non-word characters, and converting to lower case.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str`? | `string` | The string to normalize. |

#### Returns

`undefined` \| `string`

The normalized string or undefined if not a string.

#### Defined in

normstr.ts:7

***

### sn2e()

```ts
function sn2e(strings, ...exp): string
```

Tagged template function Some Nil to Empty: returns empty string when any expression null or undefined.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strings` | `TemplateStringsArray` | The string literals. |
| ...`exp` | (`undefined` \| `null` \| `string` \| `number`)[] | The expressions. |

#### Returns

`string`

The output string.

#### Defined in

sn2e.ts:10

***

### sn2n()

```ts
function sn2n(strings, ...exp): null | string
```

Tagged template function Some Nil to Null: returns null when any expression null or undefined.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strings` | `TemplateStringsArray` | The string literals. |
| ...`exp` | (`undefined` \| `null` \| `string` \| `number`)[] | The expressions. |

#### Returns

`null` \| `string`

The output string.

#### Defined in

sn2n.ts:10

***

### sn2u()

```ts
function sn2u(strings, ...exp): undefined | string
```

Tagged template function Some Nil to Undefined: returns undefined when any expression null or undefined.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strings` | `TemplateStringsArray` | The string literals. |
| ...`exp` | (`undefined` \| `null` \| `string` \| `number`)[] | The expressions. |

#### Returns

`undefined` \| `string`

The output string.

#### Defined in

sn2u.ts:10
