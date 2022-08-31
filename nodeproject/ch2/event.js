var event = require('events');

var eventEmitter = new event.EventEmitter();
var connectHandle = function connected() {
    console.log('event connected successfully');
    eventEmitter.emit('event connected successfully');
}

    eventEmitter.on('connection',connectHandle);
    eventEmitter.on('datareceived',function(){
        console.log('data received');
    })
    eventEmitter.emit('connection');
    console.log('App finished');
