const assert = require("assert");

// Test the test :)
it('Should be TRUE', () => {
  assert.equal(true, true);
});

// test add() function
it('Should return 4', () => {
  assert.equal(add(1, 3), 4);
});
