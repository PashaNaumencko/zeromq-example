const { initiateLogin } = require('./services/user.service');
require('dotenv').config();
require('./sockets/sub-handlers');
initiateLogin();
