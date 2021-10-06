const os = require('os');

console.log(os.uptime()); //운영체제 부팅 후 흐른 시간(초)을 보여줌 *process.uptime()은 노드의 실행시간
console.log(os.type()); //운영체제의 종류를 보여줌
console.log(os.cpus()); //컴퓨터의 코어 정보
console.log(os.cpus().length);
console.log(os.arch()); //process.arch와 동일
console.log(os.freemem()); //사용가능한 메모리
console.log(os.totalmem()); //전체 메모리 용량
