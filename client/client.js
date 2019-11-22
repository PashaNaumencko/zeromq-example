const express = require('express');
const cors = require('cors');
const pubSocket = require('./sockets/sub-handlers');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pubSocket(5000);

const port = 3001;

const client = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Client listening on port ${port}!`);
});

module.exports = app;
