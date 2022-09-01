var mysql =require('mysql');
var conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'iraq',
});
conn.connect(function(err){
    if(err){
        throw (err);
    }
    console.log('Connected !:)');
    
 var sql = "SELECT * FROM Persons";

    conn.query(sql,function(err,result){
        if(err){
            throw err;
        }
    console.log(result);
    });
});