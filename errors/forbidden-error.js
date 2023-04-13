const { NOT_ALLOWED } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_ALLOWED;
    this.message = 'Доступ запрещен';
  }
}

module.exports = ForbiddenError;
