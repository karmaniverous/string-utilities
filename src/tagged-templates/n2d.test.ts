/* eslint-env mocha */

import { expect } from 'chai';

import { n2d } from './n2d';

describe('n2d', function () {
  it('replaces expressions without .toString with empty string', function () {
    expect(
      n2d(
        'default',
      )`string: ${'foo'} number: ${42} boolean: ${true} null: ${null} undefined: ${undefined}`,
    ).to.equal(
      'string: foo number: 42 boolean: true null: default undefined: default',
    );
  });
});
