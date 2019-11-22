const express = require('express');
const cors = require('cors');
const { initiateLogin } = require('./services/user.service');
require('dotenv').config();

require('./sockets/connection');
initiateLogin();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port = 3001;

const client = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Client listening on port ${port}!`);

});

module.exports = app;
