var express = require('express');
var app = express();
var bodyPa = require('body-parser');
var urlEncoded = bodyPa.urlencoded({extended:false});
app.use(express.static('public'))

app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
});


app.post('/express_post',urlEncoded,function(req,res){
    response={
        firstname : req.body.firstname,
        lastname : req.body.lastname,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://127.168.0.0:8000');
});