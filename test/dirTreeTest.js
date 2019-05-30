var assert = require('chai').assert;
var dirTree = require("../src/dirTree.js");

describe('createDir', () => {
	it('should add a single directory at top level', () => {
		let originalTree = [{name: "oldstuff", items: []}];
		let testPath = ["fruit"];
		let expectedTree = [
			{name: "oldstuff", items: []},
			{name: "fruit", items: []}
		];
		let newTree = dirTree.createDir(testPath, originalTree);
		assert.deepEqual(newTree, expectedTree);
	});

	it('should add directories two levels down', () => {
		let originalTree = [{name: "oldstuff", items: []}];
		let testPath = ["fruit", "apples"];
		let expectedTree = [
			{name: "oldstuff", items: []},
			{name: "fruit", items: [
				{name: "apples", items: []}
			]}
		];
		let newTree = dirTree.createDir(testPath, originalTree);
		assert.deepEqual(newTree, expectedTree);

	});

	it('should add directories three levels down', () => {
		let originalTree = [{name: "oldstuff", items: []}];
		let testPath = ["fruit", "apples", "fuji"];
		let expectedTree = [
			{name: "oldstuff", items: []},
			{name: "fruit", items: [
				{name: "apples", items: [
					{name: "fuji", items: []}
				]}
			]}
		];
		let newTree = dirTree.createDir(testPath, originalTree);
		assert.deepEqual(newTree, expectedTree);

	});

	it('should add directories two levels down to pre-existing directories', () => {
		let originalTree = [
			{name: "oldstuff", items: []},
			{name: "preexisting", items: [
				{name: "oranges", items: []}
			]}
		];
		let testPath = ["preexisting", "apples"];
		let expectedTree = [
			{name: "oldstuff", items: []},
			{name: "preexisting", items: [
				{name: "oranges", items: []},
				{name: "apples", items: []}
			]}
		];
		let newTree = dirTree.createDir(testPath, originalTree);
		assert.deepEqual(newTree, expectedTree);
	});
});

describe('listDirs', () => {
	it('should return a list of top level directories', () => {
		let testTree = [
			{name: "fruit", items: []},
			{name: "vegetables", items: []}
		];
		let listedDirectories = dirTree.listDirs(testTree);
		let expectedDirectoryList = ["fruit", "vegetables"];
		assert.deepEqual(listedDirectories, expectedDirectoryList);
	});
})