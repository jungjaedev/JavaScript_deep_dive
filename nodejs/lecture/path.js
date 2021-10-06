const path = require('path');

//운영체제별로 경로 구분자가 다름(Windows:'\', POSIX:'/')

console.log(path.sep);
console.log(path.join(__dirname, '..', 'var.js')); //절대경로 무시
console.log(path.resolve(__dirname, '..', '/var.js')); // '/'가 있으면 최상위
console.log(path.extname(__filename));
console.log(path.dirname(__filename));
console.log(path.normalize('C://users//one//path.js'));
