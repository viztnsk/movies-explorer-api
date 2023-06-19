const { CONFLICT, ConflictMessage } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT;
    this.message = ConflictMessage;
  }
}

module.exports = ConflictError;
