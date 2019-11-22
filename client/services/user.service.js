const userRepository = require('../data/repositories/user.repository');
const { pubSocket } = require('../sockets/connection');

const login = async (data) => {
  console.log(data.toString());
  try {
    const { email, password, msg_id } = data;
    const user = await userRepository.findOne(email);
    if(!user || password !== user.password) {
      pubSocket.send(['api_out', {
        status: 'error',
        error: 'WRONG_PWD',
        msg_id
      }]);
    } else {
      pubSocket.send(['api_out', {
        status: 'ok',
        user_id: user.id,
        msg_id
      }]);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  login
};
