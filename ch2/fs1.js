// var fs = require('fs');
// fs.open('input.txt','r+',function(err,fd) {
//     if(err) {
//         console.error(err);
//     }
//     console.log('file opened !');
// });
///////////////////////////////////////////////////
var fs = require('fs');
console.log('file opening');
fs.stat('input.txt',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('file success');
    console.log(stats.isFile);
    console.log(stats.isDirectory());
    console.log(stats.isBlockDevice());
    console.log(stats.isFIFO());
    console.log(stats.isCharacterDevice());
    console.log(stats.isSocket());
    console.log(stats.isSymbolicLink());
})