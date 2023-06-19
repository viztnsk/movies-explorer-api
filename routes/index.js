const router = require('express').Router();
const { errorLogger } = require('express-winston');
const { errors } = require('celebrate');
const userRouter = require('./users');
const movieRouter = require('./movies');
const authRouter = require('./auth');
const { auth } = require('../middlewares/auth');
const { wrongRouteHandler, errorHandler } = require('../middlewares/errors');

router.use('/', authRouter);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('*', wrongRouteHandler);
router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
