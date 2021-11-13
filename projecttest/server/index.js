const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello from API Server');
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
