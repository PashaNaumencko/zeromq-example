const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./sockets/connection');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port = 3000;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}!`);
});

module.exports = app;
