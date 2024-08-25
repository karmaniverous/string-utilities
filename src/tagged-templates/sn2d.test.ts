/* eslint-env mocha */

import { expect } from 'chai';

import { sn2d } from './sn2d';

describe('sn2d', function () {
  it('returns default when some expression has no toString property', function () {
    expect(
      sn2d(
        'default',
      )`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`,
    ).to.equal('default');
  });

  it('returns correct string when every expression has toString property', function () {
    expect(
      sn2d('default')`string: ${'foo'} number: ${42} boolean: ${true}`,
    ).to.equal('string: foo number: 42 boolean: true');
  });
});
