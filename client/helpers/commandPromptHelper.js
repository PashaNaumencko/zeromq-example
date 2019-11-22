const inquirer = require('inquirer');

const questions = [{
  type: 'input',
  name: 'email',
  message: 'Enter your email: ',
},
{
  type: 'input',
  name: 'password',
  message: 'Enter your password: ',
}];

module.exports = inquirer.prompt(questions);
