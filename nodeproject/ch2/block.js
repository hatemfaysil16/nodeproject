/////////////////////////block////////////////////////
// const fs = require('fs');
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('App done');
/////////////////////////un block////////////////////////
const fs = require('fs');
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log('App done');