var express = require('express');
var cookParser = require('cookie-parser');
var app = express();
app.use(cookParser());

app.get('/',function(req,res){
    res.status(200).send('Welcome to Our web');
});

app.get('/setCookiee',function(req,res){
    res.cookie("cookieName","cookieValue");
    res.cookie("firstname","muhammed");
    res.cookie("lastname","essa");
    res.status(200).send("Cookie is end to browser");
});

app.get('/getCookiee',function(req,res){
    res.status(200).send(req.cookies);
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://127.168.0.0:8000');
});