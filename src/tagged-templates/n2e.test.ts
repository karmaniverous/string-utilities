/* eslint-env mocha */

import { expect } from 'chai';

import { n2e } from './n2e';

describe('n2e', function () {
  it('replaces expressions without .toString with empty string', function () {
    expect(
      n2e`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`,
    ).to.equal('string: foo number: 42 boolean: true null:  undefined: ');
  });
});
