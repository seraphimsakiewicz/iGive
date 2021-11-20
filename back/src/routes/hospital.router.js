const hospitalRouter = require('express').Router();
const {
  getSessionHospital,
  logoutHospital,
  addHospitalData,
  showHospitalAllEvents,
  addDonationFromEvent,
  getAllArchiveEvents,
  addNewEvent,
} = require('../controllers/hospital.controller');
const { showDetailEvent } = require('../controllers/user.controller');
const { checkingHospitalSession } = require('../middleware/checkSession');

hospitalRouter.route('/').get(getSessionHospital);
hospitalRouter.route('/profile').get(getSessionHospital).post(addHospitalData);
hospitalRouter.route('/events').get(showHospitalAllEvents);
hospitalRouter.route('/events/new').post(addNewEvent);
hospitalRouter.route('/events/archive').get(getAllArchiveEvents);
hospitalRouter.route('/events/:id').get(showDetailEvent);
hospitalRouter.route('/events/:id/donation').post(addDonationFromEvent);
hospitalRouter.route('/logout').get(logoutHospital);

module.exports = hospitalRouter;
