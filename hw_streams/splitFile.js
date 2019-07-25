const fs = require('fs');
// const pathToInitFile = require('./hw_streams');

// fs.readFile(pathToInitFile, (err, data) => {
//     if (err) throw new Error(error);
//     processFile(data.toString());
// });

// // divide init file into subs

// function processFile(data) {
// 	console.log(data);
// }

const file1 = 'file1.js';
const file2 = 'file2.js';
const file3 = 'file3.js';

const writeStream1 = fs.createWriteStream(file1);
const readStream = fs.createReadStream('test.js');
readStream.pipe(writeStream1)

// writeStream1.write('234');
// const writeStream1 = fs.createWriteStream()
// const writeStream1 = fs.createWriteStream()
