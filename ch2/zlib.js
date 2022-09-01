// const zlib = require('zlib');
// const fs = require('fs');
// const gzip = zlib.createGzip();
// const input = fs.createReadStream('input.txt');
// const output = fs.createWriteStream('input.txt.gz');
// input.pipe(gzip).pipe(output)
// console.log('done comp');
//////////////////////////////////////////////////
const zlib = require('zlib');
const fs = require('fs');
const gzip = zlib.createUnzip();
const input = fs.createReadStream('input.txt.gz');
const output = fs.createWriteStream('input2.txt');
input.pipe(gzip).pipe(output)
console.log('done comp');