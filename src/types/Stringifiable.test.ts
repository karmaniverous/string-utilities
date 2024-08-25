/* eslint-env mocha */

import { expect } from 'chai';

import { isStringifiable } from './Stringifiable';

describe('isStringifiable', function () {
  it('correctly characterizes string', function () {
    expect(isStringifiable('foo')).to.be.true;
  });

  it('correctly characterizes empty string', function () {
    expect(isStringifiable('')).to.be.true;
  });

  it('correctly characterizes number', function () {
    expect(isStringifiable(42)).to.be.true;
  });

  it('correctly characterizes bigint', function () {
    expect(isStringifiable(42n)).to.be.true;
  });

  it('correctly characterizes boolean', function () {
    expect(isStringifiable(false)).to.be.true;
  });

  it('correctly characterizes null', function () {
    expect(isStringifiable(null)).to.be.false;
  });

  it('correctly characterizes undefined', function () {
    expect(isStringifiable(undefined)).to.be.false;
  });

  it('correctly characterizes object', function () {
    expect(isStringifiable({})).to.be.true;
  });

  it('correctly characterizes array', function () {
    expect(isStringifiable([])).to.be.true;
  });
});
