const buffer = Buffer.from('버퍼로 바꿔보기');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('단어'), Buffer.from('단어1'), Buffer.from('단어2')];
console.log(Buffer.concat(array).toString());

console.log(Buffer.alloc(5));
