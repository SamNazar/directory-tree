
const createDir = (path, tree) => {
	dirName = path[0];
	if (tree.findIndex(x => x.name === dirName) < 0) {
		var newDirectory = {name: dirName, items: []};
		tree.push(newDirectory)
	}
	if (path[1]) {
		path.shift();
		var subDir = tree.find(x => x.name === dirName)
		tree.dirName = createDir(path, subDir.items);
	}
	return tree;
}

const listDirs = (tree) => {
	return tree.map(directory => directory.name);
}

module.exports = {
	createDir,
	listDirs
}