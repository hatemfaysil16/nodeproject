var fs = require('fs');
var data = 'ahmed muhsin';

var ws = fs.createWriteStream('output.txt');
ws.write(data,'utf-8');
ws.end();
ws.on('finish',function(){
    console.log('done successfully !:)')
});

ws.on('error',function(err){
    console.log(err.stack);
});
console.log('app finished');