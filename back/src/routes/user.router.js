const userRouter = require('express').Router();
const {
  getSessionUser,
  addUserData,
  logoutUser,
  showUserAllEvents,
  showDetailEvent,
} = require('../controllers/user.controller');
const { checkingUserSession } = require('../middleware/checkSession');

userRouter.route('/').get(checkingUserSession, getSessionUser);
userRouter.route('/profile').get(getSessionUser).post(addUserData);
userRouter.route('/events').get(showUserAllEvents);
userRouter.route('/events/:id').get(showDetailEvent);
userRouter.route('/logout').get(logoutUser);

module.exports = userRouter;
