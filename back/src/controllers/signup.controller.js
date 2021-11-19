const bcrypt = require('bcryptjs');
const { User, Hospital } = require('../db/models');

async function signUpUser(req, res) {
  try {
    const {
      name,
      lastName,
      email,
      password,
      city,
      street,
      building,
      oms,
      bloodTypeId,
    } = req.body;
    const pass = await bcrypt.hash(password, 5);
    const newUser = await User.create({
      name,
      lastName,
      email,
      password: pass,
      city,
      street,
      building,
      oms,
      bloodTypeId,
    });
    req.session.user = {
      id: newUser.id,
      name: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
      bloodTypeId: newUser.bloodTypeId,
    };
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
}

async function signUpHospital(req, res) {
  try {
    const {
      email,
      password,
      inn,
      headOfDep,
      phoneNumber,
      city,
      street,
      building,
    } = req.body;
    const pass = await bcrypt.hash(password, 5);
    const newHospital = await Hospital.create({
      email,
      password: pass,
      inn,
      headOfDep,
      phoneNumber,
      city,
      street,
      building,
    });
    req.session.hospital = {
      id: newHospital.id,
      email: newHospital.email,
      inn: newHospital.inn,
      headOfDep: newHospital.headOfDep,
    };
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  signUpUser,
  signUpHospital,
};
