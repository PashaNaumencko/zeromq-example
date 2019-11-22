const prompt = require('../helpers/commandPromptHelper');
const uuidv4 = require('uuid/v4')
const { pubSocket } = require('../sockets/connection');

const initiateLogin = async () => {
  const { email, password: pwd } = await prompt;
  console.log(email, pwd);
  // console.log(pubSocket.backlog);
  pubSocket.send(['api_in', JSON.stringify({
    type: 'login',
    msg_id: uuidv4(),
    email,
    pwd
  })]);
};

module.exports = {
  initiateLogin
};
