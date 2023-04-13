const { UNAUTHORIZED, UnauthMessage } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED;
    this.message = UnauthMessage;
  }
}

module.exports = UnauthorizedError;
