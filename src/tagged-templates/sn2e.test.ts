/* eslint-env mocha */

import { expect } from 'chai';

import { sn2e } from './sn2e';

describe('sn2e', function () {
  it('returns empty string when some expression has no toString property', function () {
    expect(
      sn2e`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`,
    ).to.equal('');
  });

  it('returns correct string when every expression has toString property', function () {
    expect(sn2e`string: ${'foo'} number: ${42} boolean: ${true}`).to.equal(
      'string: foo number: 42 boolean: true',
    );
  });
});
