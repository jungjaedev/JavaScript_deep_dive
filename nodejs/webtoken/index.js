const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', function (req, res) {
  res.json({
    text: 'my api!',
  });
});

app.post('/api/login', (req, res) => {
  //  auth user
  const user = { id: 3 };
  const token = jwt.sign({ user }, 'my_secret_key');
  res.json({
    token: token,
  });
});

app.get('/api/protected', (req, res) => {
  res.json({
    text: 'this is protected',
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
