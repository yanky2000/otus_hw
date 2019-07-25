const fs = require("fs");

function makeFile(fileName) {
  // const initFile = "test.js";
  const initFile = fileName;
  const pathToInitFile = `${initFile}`;
  const stream = fs.createWriteStream(initFile);

  for (let index = 0; index < 1e2; index++) {
    const randomNum = Math.floor(Math.random() * 9);
    stream.write(randomNum.toString());
  }

  stream.end();

//   setTimeout(() => {
//     fs.stat(pathToInitFile, (err, stat) => {
//       console.log(stat.size);
//     });
//   }, 10);
}
module.exports = makeFile;
