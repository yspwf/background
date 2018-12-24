const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'blog'
// });

// connection.connect((err) => {
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log('connection seccessed');
// });



var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '123456',
  //database: "blog",
  multipleStatements: true
});

pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

// const pool = mysql.createPool({
//     connectionLimit: 50,
//     host: "127.0.0.1",
//     user:"root",
//     password: "123456",
//     database: "",
//     multipleStatements: true
// });

// pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
  
//     console.log('The solution is: ', rows[0].solution);
//   });
        

// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "123456",
//     port: "3306"
// });

// connection.connect((err) => {
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log('connection seccessed');
// });