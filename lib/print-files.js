
//create function that takes an array of three filepaths and a callback

//your console.log should be in the index.js file not in your print-files function

const fp = module.exports = exports = {};

const fs = require('fs');

fp.labFunction = function (array, callback) {

  let arrayPaths = [];
  let countPaths = 0;

  fs.readFile(__dirname + '/../data/file1.txt'), (err, data) => {
    if (err) return err;
    arrayPaths.push(data.toString());
    countPaths ++;
    console.log(data.toString());
    console.log(arrayPaths);
  };

  fs.readFile(__dirname + '/../data/file2.txt'), (err, data) => {
    if (err) return err;
    arrayPaths.push(data.toString());
    countPaths ++;
    console.log(data.toString());
    console.log(arrayPaths);
  };

  fs.readFile(__dirname + '/../data/file3.txt'), (err, data) => {
    if (err) return err;
    arrayPaths.push(data.toString());
    countPaths ++;
    console.log(data.toString());
    console.log(arrayPaths);
  };


  if (Array.isArray(arrayPaths) && countPaths === 3) {
    return 'Nice!';
  } else {
    return err;
  }

};
