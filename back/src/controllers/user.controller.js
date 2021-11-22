const { User, Event, Hospital } = require("../db/models");

async function getSessionUser(req, res) {
  try {
    const { id } = req.session.user;
    const currSessionUser = await User.findOne({ where: { id }, raw: true });
    res.json({ ...currSessionUser, role: "user" });
  } catch (error) {
    res.sendStatus(500);
  }
}

async function logoutUser(req, res) {
  try {
    req.session.destroy();
    res.clearCookie("sid").end();
  } catch (error) {
    res.sendStatus(500);
  }
}

async function addUserData(req, res) {
  try {
    const { id } = req.session.user;
    const { image } = req.body;
    await User.update({ image }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function showUserAllEvents(req, res) {
  try {
    const { bloodTypeId, city } = req.session.user;
    const allEventsForUser = await Event.findAll({
      where: { bloodTypeId },
      include: { model: Hospital, where: { city } },
    });
    res.json(allEventsForUser);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function showDetailEvent(req, res) {
  try {
    const { id } = req.params;
    const detailEvent = await Event.findOne({ where: { id } });
    res.json(detailEvent);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getUserAllArchiveEvents(req, res) {
  try {
    const { id } = req.params;
    const userAllArchiveEvents = await Event.findAll({
      where: { active: false },
      include: { model: User, where: { id } },
    });
    res.json(userAllArchiveEvents);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  getSessionUser,
  addUserData,
  logoutUser,
  showUserAllEvents,
  showDetailEvent,
  getUserAllArchiveEvents,
};
