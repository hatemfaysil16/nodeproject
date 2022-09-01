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

  var sql =  "INSERT INTO Persons (id, FirstName, LastName, Address, City, AGE, SALARY)VALUES ?";
  var values = [
      [1,'hatem', 'faysil','4streeat','cairo','25',200],
      [2,'mohamed', 'ahmed','2streeat','alx','20',500],
      [3,'ayman', 'sayed','1streeat','monf','29',100],
  ]
    
    conn.query(sql,[values],function(err,result){
        if(err){
            throw err;
        }
    console.log(result.affectedRows + 'record inserted ! :)');
    });
});