const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const cookieparser = require('cookie-parser');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieparser());

app.use((req, res, next) => {
  console.log('모든 요청에 실행');
  next();
});

app.get('/', (req, res, next) => {
  res.cookie('name', encodeURIComponent(name), {
    expires: new Date(),
    httpOnly: true,
    path: '/',
  });
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/category/javascript', (req, res) => {
  res.send(`hello javascript`);
});

app.get('/category/:name', (req, res) => {
  res.send(`hello wildcard`);
});

app.post('/', (req, res) => {
  res.send('hello express!');
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.get('*', (req, res) => {
  res.send(`hello everybody`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send('you should fix it!');
});

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});
