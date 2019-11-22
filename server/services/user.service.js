const userRepository = require('../data/repositories/user.repository');
const { pubSocket } = require('../sockets/connection');


const login = async (data) => {
  try {
    const { type, email, pwd, msg_id } = data;
    const user = await userRepository.findByEmail(email);

    if(!type || !email || !pwd || !msg_id) {
      setTimeout(() => pubSocket.send(['api_out', JSON.stringify({
        status: 'error',
        error: 'WRONG_FORMAT',
        msg_id
      })]), 0);
    } else if(!user || pwd !== user.password) {
      setTimeout(() => pubSocket.send(['api_out', JSON.stringify({
        status: 'error',
        error: 'WRONG_PWD',
        msg_id
      })]), 0);
    } else {
      setTimeout(() => pubSocket.send(['api_out', JSON.stringify({
        status: 'ok',
        user_id: user.id,
        msg_id
      })]), 0);
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  login
};
