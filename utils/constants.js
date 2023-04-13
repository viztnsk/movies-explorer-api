const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const NOT_ALLOWED = 403;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;
const STATUS_OK = 200;
const CONFLICT = 409;

const BadRequestMessage = 'Переданы некоректные данные';
const UnauthMessage = 'Требуется авторизация';
const ForbiddenMessage = 'Доступ запрещен';
const NotFoundMessage = 'Результат не найден';
const ConflictMessage = 'Такой пользователь уже существует';
const ServerErrMessage = 'Произошла ошибка на сервере';

module.exports = {
  BAD_REQUEST,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  STATUS_OK,
  CONFLICT,
  NOT_ALLOWED,
  BadRequestMessage,
  UnauthMessage,
  ForbiddenMessage,
  NotFoundMessage,
  ConflictMessage,
  ServerErrMessage,
};
