var util = require("./src/util.js");
var dirTree = require("./src/dirTree.js");

var standard_input = process.stdin;
standard_input.setEncoding('utf-8');
var standard_output = process.stdout;

var tree = [];
standard_input.on('data', (command) => {
	if (command === 'exit\n'){
		console.log("exiting");
		process.exit();
	} else if (command.startsWith('CREATE')) {
		var argument = command.split(' ')[1];
		var path = util.splitPathToArray(util.trimEndOfString(argument));
		tree = dirTree.createDir(path, tree);
		console.log(tree);
	} else if (command === "LIST\n") {
		util.printArrayLineByLine(dirTree.listDirs(tree));
	} else {
		console.log(`unknown command: ${command}`);
	}
});
