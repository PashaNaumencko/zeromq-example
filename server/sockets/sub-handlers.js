const { subSocket } = require('./connection');
const { login } = require('../services/user.service');

subSocket.on('message', (topic, message) => console.log(topic, message));
