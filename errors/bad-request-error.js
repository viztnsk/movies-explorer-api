class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.message = 'Переданы некоректные данные';
  }
}

module.exports = BadRequestError;
