// const util = require('util');
// let { pipeline } = require('stream');
// const fs = require('fs');

// pipeline = util.promisify(pipeline);

// async function run() {
//   await pipeline(
//     fs.createReadStream('file1.js'),
//     fs.createReadStream('file2.js'),
//     fs.createReadStream('file2.js'),
//     fs.createWriteStream('outcome.js')
//   );
//   console.log('Pipeline succeeded.');
// }

// run().catch(console.error);

const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('file1.js'),
  // fs.createReadStream('file2.js'),
  // fs.createReadStream('file3.js'),
//   zlib.createGzip(),
  fs.createWriteStream('./outcome.js'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);