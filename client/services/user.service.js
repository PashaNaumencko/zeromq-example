const questions = require('../helpers/commandPromptHelper');
const inquirer = require('inquirer');
const uuidv4 = require('uuid/v4')
const { pubSocket } = require('../sockets/connection');

const initiateLogin = async () => {
  const { email, password: pwd } = await inquirer.prompt(questions);

  setTimeout(() => pubSocket.send(['api_in', JSON.stringify({
    type: 'login',
    msg_id: uuidv4(),
    email,
    pwd
  })]), 0);
};

const isAuthenticated = ({ status, error }) => {
  if(status === 'ok') {
    console.log(status);
  } else {
    console.log(error);
  }
}
module.exports = {
  initiateLogin,
  isAuthenticated
};
