const dotenv = require('dotenv');

dotenv.config({ path: `env/.env.${process.env.NODE_ENV ?? 'development'}` });

module.exports = {
  DB: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
};
