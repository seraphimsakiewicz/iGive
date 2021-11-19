const hospitalRouter = require('express').Router();
const { getSessionHospital } = require('../controllers/hospital.controller');

hospitalRouter.route('/').get(getSessionHospital);

module.exports = hospitalRouter;
