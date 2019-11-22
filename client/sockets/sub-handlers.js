const { subSocket } = require('./connection');
const { isAuthenticated } = require('../services/user.service');

subSocket.on('message', (topic, message) => isAuthenticated(JSON.parse(message)));
