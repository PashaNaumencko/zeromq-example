const { subSocket } = require('./connection');
const { login } = require('../services/user.service');

subSocket.on('message', (topic, message) => login(JSON.parse(message)));
