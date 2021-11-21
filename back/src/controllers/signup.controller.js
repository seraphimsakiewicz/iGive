const bcrypt = require('bcryptjs');
const { User, Hospital, BloodStorage } = require('../db/models');

async function signUpUser(req, res) {
  console.log('!!!!!', req.body);
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
      city: newUser.city,
      bloodTypeId: newUser.bloodTypeId,
      role: 'user',
    };
    res.json(req.session.user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function signUpHospital(req, res) {
  console.log(423423423);
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
      role: 'hospital',
    };
    await BloodStorage.bulkCreate([
      { bloodTypeId: 1, hospitalId: req.session.hospital.id },
      { bloodTypeId: 2, hospitalId: req.session.hospital.id },
      { bloodTypeId: 3, hospitalId: req.session.hospital.id },
      { bloodTypeId: 4, hospitalId: req.session.hospital.id },
      { bloodTypeId: 5, hospitalId: req.session.hospital.id },
      { bloodTypeId: 6, hospitalId: req.session.hospital.id },
      { bloodTypeId: 7, hospitalId: req.session.hospital.id },
      { bloodTypeId: 8, hospitalId: req.session.hospital.id },
    ]);
    res.json(req.session.hospital)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  signUpUser,
  signUpHospital,
};
