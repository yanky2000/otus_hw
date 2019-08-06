const fs = require('fs');
const path = require('path');

const targetPath = process.argv[2];

function tree(pathToDir) {
	const files = [];
	const dirs = [pathToDir];
	const treeDepthStack = [pathToDir];
	const scanDirectory = folderName => {
		fs.readdir(folderName, (err, filesNames) => {
			treeDepthStack.pop();
			if(!filesNames) return;
			filesNames.forEach(fileName => {
				const lookupPath = path.join(folderName, fileName);
				const isDir = !!fs.statSync(lookupPath).isDirectory();

				if (isDir) {
					dirs.push(lookupPath);
					treeDepthStack.push(fileName);
					scanDirectory(lookupPath);
				} else {
					files.push(lookupPath);
				}
			});
			if (treeDepthStack.length === 0) {
				process.nextTick(() => console.log({ files, dirs }));
			}
		});
	};

	scanDirectory(pathToDir);
}

tree(targetPath);
