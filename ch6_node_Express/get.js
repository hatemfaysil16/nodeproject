var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
});


app.get('/express_get',function(req,res){
    response={
        firstname : req.query.firstname,
        lastname : req.query.lastname,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://127.168.0.0:8000');
});