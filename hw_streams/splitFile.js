const fs = require('fs');

const streamsArr = ['file1.js', 'file2.js', 'file3.js'].map(fileName => {
	return fs.createReadStream(fileName, { highWaterMark: 1 });
});

async function main(streamsArr) {
	let cache = [];

	// PROMISES
	// const promises = streamsArr.map(stream => {
	// 	return new Promise((resolve, reject) => {
	// 		stream.on('data', chunk => {
	// 			cache.push(chunk);
	// 			// console.log(chunk.toString());
	// 			stream.pause();
	// 			resolve(chunk);
	// 			// console.log('ac', cache);
	// 		});
	// 	});
	// });

	// return Promise.all(promises);

	// ASYNC LOOP
	// streamsArr.forEach(async stream => {

	// 	for await (let chunk of stream) {
	// 		cache += chunk;
	// 		console.info('innner cache', chunk.toString());
	// 		console.log('length', cache.length);
	// 		stream.pause();
	// 	}
	// })

	// });

	const writeStream = fs.createWriteStream('output.js')

	streamsArr.forEach(stream => {
		stream.on('data', chunk => {
			// console.log('object', cache);
			cache.push(chunk.toString());
			stream.pause();
			// cache += chunk.toString();
			writeStream.write(min.toString())
			stream.resume()
			
			// resolve(chunk);
			// console.log('ac', cache);
		});

		stream.on('finish', () =>{
			console.log('finished');
			// stream.resume()
		})
	});



}

main(streamsArr)

// console.log(res);
// async function* somefn(chunksAsync) {
// 	for await (let chunk of chunksAsync) {
// 		console.log(chunk.toString());
// 		yield chunk;
// 	}
// }

// async function run(streamsArr) {
// 	try {
// 		const result = await main(streamsArr);

// 		console.log(result.toString());
// 		// streamsArr.forEach(stream => stream.resume());
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

// run(streamsArr);

//  main();
// const str = fs.createReadStream('./file1.js', { highWaterMark: 1 });
// str.on('data', (chunk) => {
// 	console.log(chunk.toString());
// 	str.pause();
// });

// const get = main();
