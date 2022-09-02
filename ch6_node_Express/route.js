var express = require('express');
var app = express();
// app.use(express.static('public'))

app.get('/',function(req,res){
    console.log("This Home Page ! ");
    res.send("Welcome to Home Page");
});

// app.post('/',function(req,res){
//     console.log("This Home Page ! POST method");
//     res.send("Welcome to Home Page ! POST method");
// });

app.get('/delete_person',function(req,res){
    console.log("Delete Page");
    res.send("Welcome to Delete page");
});

app.get('/all_person',function(req,res){
    console.log("all_person Page");
    res.send("Welcome to all_person page");
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://127.168.0.0:8000');
});