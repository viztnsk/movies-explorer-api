const { NOT_FOUND } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND;
    this.message = 'Результат не найден';
  }
}

module.exports = NotFoundError;
