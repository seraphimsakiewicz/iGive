const { User } = require('../db/models');

async function getSessionUser(req, res) {
  try {
    const { id } = req.session.user;
    const currSessionUser = await User.findOne({ where: { id } });
    res.json(currSessionUser);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  getSessionUser,
};
