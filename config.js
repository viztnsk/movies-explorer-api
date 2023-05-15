require('dotenv').config();

const NODE_ENV = process.env;
const { JWT_SECRET = '85c4222028d8a3f50f9861cf80fba972edd109995ec32437cef4e023b69320b8' } = process.env;

const { PORT = 3001 } = process.env;

const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  DB_ADDRESS,
};
