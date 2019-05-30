const trimEndOfString = (str) => {
	return str.substring(0, str.length - 1);
};

const splitPathToArray = (path) => {
	return path.split('/');
};

const printArrayLineByLine = (array) => {
	array.forEach(line => {
		console.log(line);
	})
}

module.exports = {
	trimEndOfString,
	splitPathToArray,
	printArrayLineByLine
}

