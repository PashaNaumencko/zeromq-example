const zmq = require('zeromq');
const [,, pubPort, subPort] = process.argv;

const pubSocket = zmq.socket('pub').connect(`tcp://127.0.0.1:${subPort}`);
console.log(`Publisher bound to port ${subPort}`);
const subSocket = zmq.socket('sub').connect(`tcp://127.0.0.1:${pubPort}`).subscribe('api_out');
console.log(`Subscriber connected to port ${pubPort}`);

module.exports = {
  pubSocket,
  subSocket
};
