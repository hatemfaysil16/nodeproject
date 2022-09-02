var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
});


app.get('/express_get',function(req,res){

    res.send(
    '<p>firstname:' +req.query.firstname+'</p> <p>lastname : '+req.query.lastname+'</p>');
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://127.168.0.0:8000');
});