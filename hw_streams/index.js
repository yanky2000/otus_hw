const fs = require("fs");

const mergeSort = require("./mergeSort");
const makeFile = require("./makeFile");
// const mergeSort = require('./mergeSort');

const nameOfBigFile = "test.js";
// make 1 big file
makeFile("test.js");

// split file into several smaller files
// prefix for smaller files = copy-*

// sort files separately
fs.readdir("./", (err, files) => {
  if (err) return;
  files.forEach(fileName => {
    if (fileName.match(/^copy/i)) {
      fs.readFile(fileName, (err, data) => {
        const sortedData = mergeSort(data.toString());
        console.log("order", sortedData);
        fs.writeFile(`sorted-${fileName}`, sortedData, err => {
          if (err) {
            console.log(`error writing ${fileName}`, err);
          }
          console.log(`writing to ${fileName}: SUCCESS`);
        });
      });
    }
  });
});

// merge files into 1
