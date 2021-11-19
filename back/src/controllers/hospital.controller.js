const { Hospital } = require('../db/models');

async function getSessionHospital(req, res) {
  try {
    const { id } = req.session.hospital;
    const currSessionHospital = await Hospital.findOne({ where: { id } });
    res.json(currSessionHospital);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function logoutHospital(req, res) {
  req.session.destroy();
  res.clearCookie('sid').end();
}

async function addHospitalData(req, res) {
  try {
    const { id } = req.session.hospital;
    const { webSite, title, about } = req.body;
    await Hospital.update({ webSite, title, about }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function showHospitalAllEvents(req, res) {
  try {
    const { id } = req.session.hospital;
    const allEventsForHospital = await Event.findAll({
      where: { hospitalId: id },
    });
    res.json(allEventsForHospital);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  getSessionHospital,
  logoutHospital,
  addHospitalData,
  showHospitalAllEvents,
};
