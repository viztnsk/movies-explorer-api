const { NOT_ALLOWED, ForbiddenMessage } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_ALLOWED;
    this.message = ForbiddenMessage;
  }
}

module.exports = ForbiddenError;
