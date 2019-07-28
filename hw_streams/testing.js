// const fs = require('fs');

// const fs = require('fs');
// async function myF() {
//   let names;
//   try {
//     names = await fs.readdir('./');
//   } catch (e) {
//     console.log('e', e);
//   }
//   if (names === undefined) {
//     console.log('undefined');
//   } else {
//     console.log('First Name', names[0]);
//   }
// }

// myF();


// const fs = require('fs');
// const util = require('util');

// const readdir = util.promisify(fs.readdir);

// async function myF() {
//   let names;
//   try {
//     const {err, names} = await readdir('./');
//     console.log('init', err, names);
//     if (err) {
//         // Handle the error.
//         console.log('from err', err)
//     }
//   } catch (e) {
//     console.log('e', e);
//   }
//   if (names === undefined) {
//     console.log('undefined', names);
//   } else {
//     console.log('First Name', names[0]);
//   }
// }

// function some () {
//     fs.readdir('./', (err, files) => {
//         console.log('s', files)
//     })
// }

// myF();

// some()

const fs = require('fs');
const util = require('util');
const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

(async () => {
  try {
    const files = ['file1.js', 'file2.js', 'file3.js'];
    for (const file of files) {
      console.log(
        await readFile(file)
      );
    }
  }
  catch (error) {
    console.error(error);
  }
})();