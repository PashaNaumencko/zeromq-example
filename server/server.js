const express = require('express');
const cors = require('cors');
const subSocket = require('./sockets/sub-handlers');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

subSocket(5000);

const port = 3000;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}!`);
});

module.exports = app;
