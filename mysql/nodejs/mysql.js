//'mysql'모듈을 사용하겠다
var mysql = require('mysql');
//mysql 객체의  createConnection을 호출
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'opentutorials',
});
//connect()접속메서드 실행
connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) console.log(error);
  console.log(results);
});

connection.end();

// 접속 => 질의 => 종료
