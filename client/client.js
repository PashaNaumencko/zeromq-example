const { initiateLogin } = require('./services/user.service');
require('./sockets/sub-handlers');
initiateLogin();
