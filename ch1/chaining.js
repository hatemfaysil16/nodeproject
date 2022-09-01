// var fs = require('fs');
// var zlib = require('zlib');
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
// console.log('app finished');

////////////////////////////////////////////
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input3.txt'));
console.log('app Gunzip finished');