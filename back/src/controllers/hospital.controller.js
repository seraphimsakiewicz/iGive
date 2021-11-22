const { Hospital, Event, BloodStorage } = require('../db/models');

async function getSessionHospital(req, res) {
  try {
    const { id } = req.session.hospital;
    const currSessionHospital = await Hospital.findOne({ where: { id } });
    res.json({...currSessionHospital,role:'hospital'});
  } catch (error) {
    res.sendStatus(500);
  }
}

async function logoutHospital(req, res) {
  try {
    req.session.destroy();
    res.clearCookie('sid').end();
  } catch (error) {
    res.sendStatus(500);
  }
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

async function addNewEvent(req, res) {
  try {
    const { id } = req.session.hospital;
    const { bloodTypeId, bloodQuantity, eventDate, priority } = req.body;
    await Event.create({
      bloodTypeId,
      bloodQuantity,
      eventDate,
      priority,
      hospitalId: id,
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function addDonationFromEvent(req, res) {
  try {
    const { id } = req.params;
    const hospitalId = req.session.hospital.id;
    const { bloodQuantity, userId } = req.body;
    await Donation.create({ bloodQuantity, userId, eventId: id });
    const sumBloodDonation = await Donation.sum('bloodQuantity', {
      where: { eventId: id },
    });
    const eventBloodType = await Event.findOne({
      where: { id },
      attributes: ['bloodTypeId'],
    });
    await BloodStorage.update(
      {
        bloodTotalQuantity: sequelize.literal(
          `bloodTotalQuantity + ${sumBloodDonation}`
        ),
      },
      { where: { bloodTypeId: eventBloodType, hospitalId } }
    );
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getAllArchiveEvents(req, res) {
  try {
    const { id } = req.session.hospital;
    const allArchiveEvents = await Event.findAll({
      where: { hospitalId: id, active: false },
    });
    res.json(allArchiveEvents);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  getSessionHospital,
  logoutHospital,
  addHospitalData,
  showHospitalAllEvents,
  addDonationFromEvent,
  getAllArchiveEvents,
  addNewEvent,
};
