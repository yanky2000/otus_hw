const fs = require("fs");
const path = require("path");

function tree(pathToDir) {
  let filesArr = [];
  let dirsArr = [];
  // list files and folders
  const loop = dirName => {
    fs.readdir(dirName, (err, files) => {
      files.forEach(f => {
        console.log(f);
        const isDir = !!fs.statSync(path.join(dirName, f)).isDirectory();
        /**
         * if folder is empty just add its path to dirname array
         */

        /**
         * If folder:
         * 1. add folder name to current dirname
         * 2. go inside and loop through its content
         *
         * */

        if (isDir) {
          const newDir = path.join(dirName, f);
          dirsArr.push(path.join(dirName, f));
          //   dirs.push(path.join(dirName, f));
          loop(path.join(dirName, f));
        } else {
          /**
           * if file filename to result array
           */
          const newFile = path.join(dirName, f);
          filesArr.push(path.join(dirName, f));
        }
      });
    });
  };
  loop(pathToDir);
  process.nextTick(() => console.log({ files: filesArr, dirs: dirsArr }));
  // console.log('over')
  return setTimeout( () => {
      console.log( { files: filesArr, dirs: dirsArr });
  }, 2000)
    // return process.nextTick(() =>({ files: filesArr, dirs: dirsArr }));
    // return process.nextTick(() =>({ files: filesArr, dirs: dirsArr }));
}

const out = tree(path.join(__dirname, "foo"));
// console.log(out);
// process.nextTick(() => console.log(files, dirs));
