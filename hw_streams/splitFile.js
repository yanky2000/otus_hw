const fs = require("fs");
const chalk = require("chalk");
// const pathToInitFile = require('./hw_streams');

// fs.readFile(pathToInitFile, (err, data) => {
//     if (err) throw new Error(error);
//     processFile(data.toString());
// });

// // divide init file into subs

// function processFile(data) {
// 	console.log(data);
// }

const file1 = "file1.js";
const file2 = "file2.js";
const file3 = "file3.js";

// const writeStream1 = fs.createWriteStream(file1);
// writeStream1.write('heelo')
// const readStream = fs.createReadStream('test.js');
// readStream.pipe(writeStream1)

function main(params) {
	const stream1 = fs.createReadStream("./file1.js", { highWaterMark: 1 });
	const stream2 = fs.createReadStream("./file2.js", { highWaterMark: 1 });

	const streamsArr = [stream1, stream2];

	streamsArr.forEach(async stream => {
		for await (let chunk of stream) {
			cache += chunk;
			console.log(cache);
		}
	});

}

// async function* somefn(chunksAsync) {
// 	for await (let chunk of chunksAsync) {
// 		console.log(chunk.toString());
// 		yield chunk;
// 	}
// }

const get = main();
