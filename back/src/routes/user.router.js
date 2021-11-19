const userRouter = require('express').Router();
const { getSessionUser } = require('../controllers/user.controller');

userRouter.route('/').get(getSessionUser);
userRouter.route('/event').get();

module.exports = userRouter;
