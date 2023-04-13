const authRouter = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { loginValidation, registerValidation } = require('../middlewares/validation');

authRouter.post('/signin', loginValidation, login);
authRouter.post('/signup', registerValidation, createUser);

module.exports = authRouter;
