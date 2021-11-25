const {
  Hospital,
  Event,
  UserEvent,
  BloodStorage,
  Donation,
  User,
  sequelize,
} = require("../db/models");

async function getSessionHospital(req, res) {
  try {
    const { id } = req.session.hospital;
    const currSessionHospital = await Hospital.findOne({
      where: { id },
      raw: true,
      attributes: { exclude: ["password"] },
    });
    res.json({ ...currSessionHospital, role: "hospital" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function logoutHospital(req, res) {
  try {
    req.session.destroy();
    res.clearCookie("sid").end();
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
      include: User,
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
    console.log(error);
    res.sendStatus(500);
  }
}

async function addDonationFromEvent(req, res) {
  console.log(req.body);
  try {
    const { id } = req.params;
    const hospitalId = req.session.hospital.id;
    const donationDataFromFront = req.body; // quantity, userId,
    const donationData = donationDataFromFront.filter(
      (el) => el.bloodQuantity > 0
    );
    await UserEvent.update(
      { donated: true },
      {
        where: {
          attributes: donationData.map((item) => item.userId),
        },
      }
    );
    await Donation.bulkCreate(
      donationData.map((el) => ({ ...el, eventId: id }))
    );
    const sumBloodDonation = await Donation.sum("bloodQuantity", {
      where: { eventId: id },
    });
    const { bloodTypeId, eventDate } = await Event.findOne({
      where: { id },
      attributes: ["bloodTypeId", "eventDate"],
      raw: true,
    });
    await BloodStorage.update(
      {
        bloodTotalQuantity: sequelize.literal(
          `"bloodTotalQuantity" + ${sumBloodDonation}`
        ),
      },
      { where: { bloodTypeId, hospitalId } }
    );
    donationData.forEach(
      async (el) =>
        await User.update(
          {
            totalDonation: sequelize.literal(
              `"totalDonation" + ${el.bloodQuantity}`
            ),
            lastDonationDate: eventDate,
          },
          { where: { id: el.userId } }
        )
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
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

async function getAllSubscribeUsers(req, res) {
  try {
    const { id } = req.params;
    const allSubscribeUsers = await User.findAll({
      include: { model: Event, where: { id } },
    });
    res.json(allSubscribeUsers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function closeEvent(req, res) {
  try {
    const { id } = req.params;
    const closedEvent = await Event.findByPk(id);
    await Event.update({ active: !closedEvent.active }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function changeProfileImage(req, res) {
  try {
    const { id } = req.session.hospital;
    const file = req.files.file;
    file.mv(
      `${process.env.PWD}/public/uploads/${file.name}`,
      async (err) => {}
    );
    await Hospital.update({ image: file.name }, { where: { id } });
    let result = await Hospital.findOne({ where: { id } });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getStorageData(req, res) {
  try {
    const { id } = req.session.hospital;
    const storageData = await BloodStorage.findAll({
      where: { hospitalId: id },
    });
    res.json(storageData);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function changeHospitalData(req, res) {
  try {
    const { id } = req.session.hospital;
    const { headOfDep, about } = req.body;
    await Hospital.update({ headOfDep, about }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getHospitalDonors(req, res) {
  try {
    const { id } = req.session.hospital;
    // const id = '1';
    const hospitalDonors = await User.findAll({
      include: { model: Event, where: { hospitalId: id } },
      attributes: { exclude: ["password"] },
    });
    res.json(hospitalDonors);
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
  getAllSubscribeUsers,
  closeEvent,
  getStorageData,
  changeHospitalData,
  getHospitalDonors,
  changeProfileImage,
};
