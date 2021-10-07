const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글쓰는 중...')
  .then(() => {
    return fs.readFile('./writeme.txt');
  })
  .then(data => {
    console.log(data.toString());
  })
  .catch(err => {
    throw err;
  });
