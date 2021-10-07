const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme2.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip(); //압축
const writeStream = fs.createWriteStream('./writeme4.txt');
readStream.pipe(zlibStream).pipe(writeStream);
