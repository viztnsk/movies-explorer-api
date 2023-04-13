const { UNAUTHORIZED } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED;
    this.message = 'Требуется авторизация';
  }
}

module.exports = UnauthorizedError;
