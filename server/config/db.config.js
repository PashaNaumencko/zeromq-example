const dotenv = require('dotenv');

dotenv.config();

const storage  = process.env.DB_STORAGE;
const dialect = process.env.DB_DIALECT;

module.exports = {
    storage,
    dialect
};
