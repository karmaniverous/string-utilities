/* eslint-env mocha */

import { expect } from 'chai';

import { sn2u } from './sn2u';

describe('sn2u', function () {
  it('returns empty string when some expression has no toString property', function () {
    expect(
      sn2u`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`,
    ).to.equal(undefined);
  });

  it('returns correct string when every expression has toString property', function () {
    expect(sn2u`string: ${'foo'} number: ${42} boolean: ${true}`).to.equal(
      'string: foo number: 42 boolean: true',
    );
  });
});
