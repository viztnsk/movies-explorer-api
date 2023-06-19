const { NOT_FOUND, NotFoundMessage } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND;
    this.message = NotFoundMessage;
  }
}

module.exports = NotFoundError;
