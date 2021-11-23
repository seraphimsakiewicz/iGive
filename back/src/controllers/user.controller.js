const { User, Event, Hospital, UserEvent } = require('../db/models');

async function getSessionUser(req, res) {
  try {
    const { id } = req.session.user;
    const currSessionUser = await User.findOne({
      where: { id },
      raw: true,
      attributes: { exclude: ['password'] },
    });
    res.json({ ...currSessionUser, role: 'user' });
  } catch (error) {
    res.sendStatus(500);
  }
}

async function logoutUser(req, res) {
  try {
    req.session.destroy();
    res.clearCookie('sid').end();
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

async function subscribeUser(req, res) {
  console.log(req.body)
  console.log(req.params.id)
  try {
    const eventId = req.params.id;
    const { userId } = req.body;
    await UserEvent.create({ userId, eventId });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function changeProfileData(req, res) {
  try {
    const { id } = req.session.user;
    const { phoneNumber, city, street, building, image } = req.body;
    await User.update(
      { phoneNumber, city, street, building, image },
      { where: { id } }
    );
    res.sendStatus(200);
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
  subscribeUser,
  changeProfileData,
};
