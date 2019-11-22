const zmq = require('zeromq');

const pubSocket = zmq.socket('pub').bindSync(`tcp://127.0.0.1:${port}`);
console.log(`Publisher bound to port ${port}`);
const subSocket = zmq.socket('sub').connect(`tcp://127.0.0.1:${port}`).subscribe('api_out');
console.log(`Subscriber connected to port ${port}`);

module.exports = {
  pubSocket,
  subSocket
};
