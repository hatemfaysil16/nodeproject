var fs = require('fs');
var rs = fs.createReadStream('input1.txt');
var ws = fs.createWriteStream('output1.txt');
rs.pipe(ws);
console.log('app finished');