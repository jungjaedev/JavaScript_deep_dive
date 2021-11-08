const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

// db connectiity
dbConnection();

// cors
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('Hello from API Server');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
