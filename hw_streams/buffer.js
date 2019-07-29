// const fs = require("fs");

// const writeStream = fs.createWriteStream("output.js");

const wStream = require("stream");
// const writable = (function() {
//   let data = "";
//   const $ = new wStream.Writable({
//     write(chunk, enc, callback) {
//         console.log(chunk.toString(), callback);
//       //   data.push(chunk.toString());
//       data += chunk.toString();
//     //   console.log(data);
//       callback(data);
//     },
//     // highWaterMark: 1
//   });
//   return $;
// })();

// // writable.on("drain", console.log);
// // console.info(1, writable.writableHighWaterMark);
// // console.log(writable.write("1219837012398473"));
// writable.write("1", () => console.log(2134));
// // writable.write("123");
// // writable.write("123");
// // writable.write("123");
// // writable.write("more data");
// // writable.write("more data");
// writable.end("done writing data");
// writable.on("finish", () => {
//   console.log("All writes are now complete.");
// });

const writable = new wStream.Writable();
 
writable._write = function(chunk, encoding, next) {
  console.log(chunk.toString());
//   next();
//   next('ok', chunk.toString());
};
 
writable.write('Hello world!', (data) => console.log('one', data));

