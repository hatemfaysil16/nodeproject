const net = require('net');
var client = net.connect({port:55737},()=>{
    console.log("Connected ! :) ");
    client.write("Hi am Client \n");
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.end
});

client.on('end',()=>{
    console.log("Disconnected ! :( ");
})
