var mysql =require('mysql');
var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});
conn.connect(function(err){
    if(err){
        throw err;
    }
    console.log('Connected !:)');
    conn.query("CREATE DATABASE iraq",function(err,result){
        if(err){
            throw err;
        }
    console.log('Created !:)');
    });
});