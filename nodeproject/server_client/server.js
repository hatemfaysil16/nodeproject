const net = require('net');

var server = net.createServer((socket)=>{
    socket.end('Thanks have a nice day ! :)');
}).on('error',(err)=>{
    throw err;
});

server.listen(()=>{
    address = server.address();
    console.log('listening on port :',address);
});