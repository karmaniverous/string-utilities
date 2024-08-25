/* eslint-env mocha */

import { expect } from 'chai';

import { sn2n } from './sn2n';

describe('sn2n', function () {
  it('returns empty string when some expression has no toString property', function () {
    expect(
      sn2n`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`,
    ).to.equal(null);
  });

  it('returns correct string when every expression has toString property', function () {
    expect(sn2n`string: ${'foo'} number: ${42} boolean: ${true}`).to.equal(
      'string: foo number: 42 boolean: true',
    );
  });
});
