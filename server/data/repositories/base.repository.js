class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  getAll() {
    return this.model.findAll({
      order: [
        ['createdAt', 'ASC'],
        ['updatedAt', 'DESC']
      ],
    });
  }

  getById(id) {
    return this.model.findByPk(id);
  }

  create(data) {
    return this.model.create(data);
  }

  async updateById(id, data) {
    try {
      await this.model.update(data, {
        where: { id },
        returning: true,
        plain: true
      });
      return {
        status: true
      };
    } catch (err) {
      return {
        status: false,
        errorMessage: err.message
      };
    }
  }

  deleteByIds(ids) {
    return this.model.destroy({
      where: { id: ids }
    });
  }
}

module.exports = BaseRepository;
