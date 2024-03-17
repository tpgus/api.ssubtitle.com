const Sequelize = require('sequelize');

const { DB } = require('../config');

const sequelize = new Sequelize(DB.database, DB.username, DB.password, {
  ...DB,
  dialect: 'mysql',
});

const User = require('./User')(sequelize);

module.exports = {
  sequelize,
  User,
};
