const zmq = require('zeromq');
const [,, pubPort, subPort] = process.argv;

const pubSocket = zmq.socket('pub').bindSync(`tcp://127.0.0.1:${pubPort}`);
console.log(`Publisher bound to port ${pubPort}`);
const subSocket = zmq.socket('sub').bindSync(`tcp://127.0.0.1:${subPort}`).subscribe('api_in');
console.log(`Subscriber connected to port ${subPort}`);

module.exports = {
  pubSocket,
  subSocket
};
