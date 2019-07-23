const fs = require('fs');

const initFile = 'test.js';
const stream = fs.createWriteStream(initFile);

for (let index = 0; index < 1e3; index++) {
	const randomNum = Math.floor(Math.random() * 9);
	stream.write(randomNum.toString());
}

stream.end();

setTimeout(() =>
	fs.stat(`./${initFile}`, (err, stat) => {
		console.log(stat.size);
    }),
    10
);


// divide initr file into subs 

