window.getPath = getPath;

function getPath(node) {
	
    if(!node) return;

	const isUnique = tagName => {
		return document.querySelectorAll(tagName).length === 1;
	};

	// check tag name
	const tagName = node.localName;
	if (isUnique(tagName)) return tagName;

	// check id
	if (node.id) return node.id;

	// check className
	const allClasses = {};
	const nodeClassList = node.classList;
	document.querySelectorAll('*').forEach(el => {
		if (el.className) {
			allClasses[el.className] = allClasses[el.className] + 1 || 1;
		}
	});

	for (let i = 0; i < nodeClassList.length; i++) {
		const nodeClassName = nodeClassList[i];
		if (allClasses[nodeClassName] === 1) return nodeClassName;
	}
}
