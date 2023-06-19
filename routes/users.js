const userRouter = require('express').Router();
const { getUser, patchUser } = require('../controllers/users');

const { updateUserValidation } = require('../middlewares/validation');

userRouter.get('/me', getUser);
userRouter.patch('/me', updateUserValidation, patchUser);

module.exports = userRouter;
