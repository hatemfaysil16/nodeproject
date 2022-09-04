try {
    const x = 2;
    const d = x+y;
} catch (e) {
    console.log(e);
}
//////////////////file//////////////////////////////
const fs = require('fs');
function MuhammadCallback(err,data){
    if(err) {
        console.error("there is an error",err);
        return;
    }
    console.log(data);
}
fs.readFile('Desktop',MuhammadCallback);