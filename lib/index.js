'use strict';
// calls your function with three paths from process.argv and then logs the contents of the three files to the screen

//your console.log should be in the index.js file not in your print-files function

const fp = module.exports = exports = {};

const fs = require('fs');

fs.readFile(__dirname + '/../data/file1.txt'), (err, data) => {
  if (err) return err;
  console.log(data.toString());
};

fs.readFile(__dirname + '/../data/file2.txt'), (err, data) => {
  if (err) return err;
  console.log(data.toString());
};

fs.readFile(__dirname + '/../data/file3.txt'), (err, data) => {
  if (err) return err;
  console.log(data.toString());
};

fp.labFunction(arrayPaths, SOMETHING);
console.log(fp.labFunction);
