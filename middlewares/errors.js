const { NotFoundError, ServerErrMessage, INTERNAL_SERVER_ERROR } = require('../errors/not-found-error');

const errorHandler = (err, req, res, next) => {
  const { statusCode = INTERNAL_SERVER_ERROR, message } = err;
  console.log(err);
  res.status(statusCode).send({
    message: statusCode === INTERNAL_SERVER_ERROR ? ServerErrMessage : message,
  });
  next();
};

const wrongRouteHandler = (req, res, next) => {
  next(new NotFoundError('page'));
};

module.exports = { errorHandler, wrongRouteHandler };
