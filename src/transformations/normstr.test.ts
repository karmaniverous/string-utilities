import { describe, expect, it } from 'vitest';

import { normstr } from './normstr';

describe('normstr', function () {
  it('normalizes a string', function () {
    expect(normstr('Við skulum fara á fjörðurinn í kvöld.')).to.equal(
      'viskulumfaraafjorurinnikvold',
    );
  });
});
