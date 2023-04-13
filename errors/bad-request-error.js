const { BAD_REQUEST } = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQUEST;
    this.message = 'Переданы некоректные данные';
  }
}

module.exports = BadRequestError;
