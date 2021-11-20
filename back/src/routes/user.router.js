const userRouter = require('express').Router();
const {
  getSessionUser,
  addUserData,
  logoutUser,
  showUserAllEvents,
  showDetailEvent,
  getUserAllArchiveEvents,
} = require('../controllers/user.controller');
const { checkingUserSession } = require('../middleware/checkSession');

userRouter.route('/').get(getSessionUser);
userRouter.route('/profile').get(getSessionUser).post(addUserData);
userRouter.route('/events').get(showUserAllEvents);
userRouter.route('/events/:id').get(showDetailEvent);
userRouter.route('/events/archive').get(getUserAllArchiveEvents);
userRouter.route('/logout').get(logoutUser);

module.exports = userRouter;
