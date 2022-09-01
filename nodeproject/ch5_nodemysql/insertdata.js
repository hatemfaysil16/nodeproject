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

  var sql =  "INSERT INTO Persons (id, FirstName, LastName, Address, City, AGE, SALARY)VALUES (1,'hatem', 'faysil','4streeat','cairo','25',200)";
    
    conn.query(sql,function(err,result){
        if(err){
            throw err;
        }
    console.log('Created !:)');
    });
});