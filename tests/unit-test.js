const chai = require('chai');
require('jsdom-global/register');

const { assert } = chai;
const {
  addNumbers, subtractNumbers, multiplyNumbers, divideNumbers,
} = require('./calc-app-functions');

describe('Test addNumbers function', () => {
  it('failing test result equals 1', () => {
    assert.notEqual(addNumbers(1, 1), 1);
  });
  it('passing test result equals 2', () => {
    assert.equal(addNumbers(1, 1), 2);
  });
});

describe('Test subtractNumbers function', () => {
  it('failing test result equals 1', () => {
    assert.notEqual(subtractNumbers(1, 1), 1);
  });
  it('passing test result equals 2', () => {
    assert.equal(subtractNumbers(4, 2), 2);
  });
});

describe('Test multiplyNumbers function', () => {
  it('failing test result equals 1', () => {
    assert.notEqual(multiplyNumbers(1, 0), 1);
  });
  it('passing test result equals 2', () => {
    assert.equal(multiplyNumbers(1, 2), 2);
  });
});

describe('Test divideNumbers function', () => {
  it('failing test result equals 1', () => {
    assert.notEqual(divideNumbers(0, 1), 1);
  });
  it('passing test result equals 2', () => {
    assert.equal(divideNumbers(4, 2), 2);
  });
});
