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
    
 var sql = "UPDATE Persons SET FirstName = 'adel1', LastName= 'mona33' WHERE id = 1";

    conn.query(sql,function(err,result){
        if(err){
            throw err;
        }
    console.log(result.affectedRows + ': record updated !:)');
    });
});