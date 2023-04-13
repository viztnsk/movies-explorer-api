const { CONFLICT } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT;
    this.message = 'Такой пользователь уже существует';
  }
}

module.exports = ConflictError;
