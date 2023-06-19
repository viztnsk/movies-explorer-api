const { BAD_REQUEST, BadRequestMessage } = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQUEST;
    this.message = BadRequestMessage;
  }
}

module.exports = BadRequestError;
