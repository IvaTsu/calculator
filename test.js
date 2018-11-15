const assert = require('assert');

const operations = require('./operations.js');

const { add } = operations;

// Test the test :)
it('Should be TRUE', () => {
  assert.equal(true, true);
});

// test add() function if numbers are passed
it('Should return 4', () => {
  assert.equal(add(1, 3), 4);
});

// test add() function if numbers are passed as strings
it('Should return 8', () => {
  assert.equal(add('2', '6'), 8);
});

// test add() function if number and string as a number are passed
it('Should return 10', () => {
  assert.equal(add('5', 5), 10);
});
