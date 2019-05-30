var assert = require('chai').assert;
var util = require("../src/util.js");

describe('trimEndOfString', () => {
	it('should remove last character of a string', () => {
		let testString = "hello\n";
		let expectedString = "hello";
		let trimmedString = util.trimEndOfString(testString);
		assert.equal(trimmedString, expectedString);
		assert.equal(trimmedString.length, testString.length - 1);
	});
});

describe('splitPathToArray', () => {
	it('should give array with 1 element when given path with no slash', () => {
		let testPath = "fruits";
		let actualPath = util.splitPathToArray(testPath);
		assert.deepEqual(actualPath, [testPath]);
	});
	it('should have one element in path array for each part of path', () => {
		let testPath = "grains/squash/seeds";
		let actualPath = util.splitPathToArray(testPath);
		let expectedPath = ["grains", "squash", "seeds"];
		assert.deepEqual(actualPath, expectedPath);
	});
})