const assert = require('assert');

const operations = require('./operations.js');
const validateInput = require('./validation.js');

const { add, subtract, multiply, divide } = operations;

// Test the test :)
// ---------------------------
it('Should be TRUE', () => {
	assert.equal(true, true);
});
// ---------------------------

// Test add() function
// ---------------------------------------------------------------
// test add() function if numbers are passed
it('Should return 4', () => {
	assert.equal(add(1, 3), 4);
});
// test add() function if one of passed number is negative
it('Should return 4', () => {
	assert.equal(add(-1, 5), 4);
});
// test add() function if numbers are passed as strings
it('Should return 8', () => {
	assert.equal(add('2', '6'), 8);
});
// test add() function if number and string as a number are passed
it('Should return 10', () => {
	assert.equal(add('5', 5), 10);
});
// ---------------------------------------------------------------

// Test subtract() function
// ---------------------------------------------------------------
// test subtract() function if numbers are passed
it('Should return 66', () => {
	assert.equal(subtract(67, 1), 66);
});
// test subtract() function if numbers are passed as strings
it('Should return 33', () => {
	assert.equal(subtract('66', '33'), 33);
});
// test subtract() function if number and string as a number are passed
it('Should return 10', () => {
	assert.equal(subtract('60', 50), 10);
});
// test subtract() function if the output is negative
it('Should return -1', () => {
	assert.equal(subtract(30, 31), -1);
});
// test subtract() function if the passed numbers are negative
it('Should return 1', () => {
	assert.equal(subtract(-3, -4), 1);
});
// ---------------------------------------------------------------

// Test multiply() function
// ---------------------------------------------------------------
// test multiply() function if numbers are passed
it('Should return 32', () => {
	assert.equal(multiply(4, 8), 32);
});
// test multiply() function if number and string are passed
it('Should return 21', () => {
	assert.equal(multiply('7', 3), 21);
});
// test multiply() function if negative number is passed
it('Should return -8', () => {
	assert.equal(multiply(2, -4), -8);
});
// ---------------------------------------------------------------

// Test divide() function
// ---------------------------------------------------------------
// test divide() function if numbers are passed
it('Should return 3', () => {
	assert.equal(divide(21, 7), 3);
});
// test divide() function if number and string are passed
it('Should return 5', () => {
	assert.equal(divide('25', 5), 5);
});
// test divide() function if negative number is passed
it('Should return -4', () => {
	assert.equal(divide(8, -2), -4);
});
// ---------------------------------------------------------------

// Test validationInput() function
// ---------------------------------------------------------------
it('Should throw warning if the string passed instead of a number', () => {
	assert.equal(validateInput('something', 3), false);
});

it('Should throw warning if 2 strings are passed as arguments', () => {
	assert.equal(validateInput('something', 'other'), false);
});

it('Success on using numbers', () => {
	assert.equal(validateInput(3, 5), true);
});
// ---------------------------------------------------------------
