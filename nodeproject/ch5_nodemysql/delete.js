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
    
 var sql = "DELETE FROM Persons WHERE id=1 LIMIT 1";

    conn.query(sql,function(err,result){
        if(err){
            throw err;
        }
    console.log(result.affectedRows + ': record DELETE !:)');
    });
});