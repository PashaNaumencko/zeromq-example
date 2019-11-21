module.exports = (sequelize, DataTypes) => {
  const Repository = sequelize.define(
    'users',
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
          allowNull: false,
          type: DataTypes.STRING
      },
    },
    {
      timestamps: true
    }
  );

  return Repository;
};
