require('dotenv').config();

const NODE_ENV = process.env;
const { JWT_SECRET = 'cea5d688c28881a0337be4461c9d5035d842b49019e09d0f2b1d841f20fc5354' } = process.env;

const { PORT = 3000 } = process.env;

const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  DB_ADDRESS,
};
