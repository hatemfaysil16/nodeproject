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

    // var sql = 'CREATE TABLE Persons2 (id int PRIMARY KEY,FirstName varchar(255),LastName varchar(255),Address varchar(255),City varchar(255),AGE varchar(255))';
    var sql = 'ALTER TABLE Persons ADD COLUMN SALARY INT(20)';
    
    conn.query(sql,function(err,result){
        if(err){
            throw err;
        }
    console.log('Created !:)');
    });
});