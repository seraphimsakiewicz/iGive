const hospitalRouter = require('express').Router();
const {
  getSessionHospital,
  logoutHospital,
  addHospitalData,
  showHospitalAllEvents,
} = require('../controllers/hospital.controller');
const { checkingHospitalSession } = require('../middleware/checkSession');

hospitalRouter.route('/').get(checkingHospitalSession, getSessionHospital);
hospitalRouter.route('/profile').get(getSessionHospital).post(addHospitalData);
hospitalRouter.route('/events').get(showHospitalAllEvents);
hospitalRouter.route('/logout').get(logoutHospital);

module.exports = hospitalRouter;
