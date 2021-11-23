const userRouter = require('express').Router();
const {
  getSessionUser,
  addUserData,
  logoutUser,
  showUserAllEvents,
  showDetailEvent,
  getUserAllArchiveEvents,
  subscribeUser,
  changeProfileData,
} = require('../controllers/user.controller');
const { checkingUserSession } = require('../middleware/checkSession');

userRouter.route('/').get(getSessionUser);
userRouter.route('/profile').get(getSessionUser).post(addUserData);
userRouter.route('/profile/data').patch(changeProfileData);
userRouter.route('/events').get(showUserAllEvents);
userRouter.route('/events/archive').get(getUserAllArchiveEvents);
userRouter.route('/events/:id').get(showDetailEvent);
userRouter.route('/events/:id/subscribe').post(subscribeUser);
userRouter.route('/logout').get(logoutUser);

module.exports = userRouter;
