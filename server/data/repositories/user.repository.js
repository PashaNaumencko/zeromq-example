const BaseRepository = require('./base.repository');
const { UserModel } = require('../models/index');

class UserRepository extends BaseRepository {
  findByEmail(email) {
    return this.model.findOne({ where: { email } });
  }
}

module.exports = new UserRepository(UserModel);
