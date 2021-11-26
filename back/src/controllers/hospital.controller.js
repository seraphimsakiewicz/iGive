const {
  Hospital,
  Event,
  UserEvent,
  BloodStorage,
  Donation,
  User,
  sequelize,
} = require("../db/models");

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = "791671273658-515ku4j038jm2t1l612e7ncjg6ts5u9b.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = "1//04-bQ2AjlAneFCgYIARAAGAQSNwF-L9IrbX9cGDIVmVHX6XXtsLTtdfpouzH57KSfVhQRJr1Hm44pZMh2ywZ0SdxHOvyjEf_8NsY";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


async function getSessionHospital(req, res) {
  try {
    const { id } = req.session.hospital;
    const currSessionHospital = await Hospital.findOne({
      where: { id },
      raw: true,
      attributes: { exclude: ["password"] },
      // include: { model: BloodStorage, where: { hospitalId: id } },
    });
    const bloodStorages = await BloodStorage.findAll({
      where: { hospitalId: id },
    });
    res.json({
      ...currSessionHospital,
      role: "hospital",
      bloodStorages,
    });
  } catch (error) {
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
      include: {
        model: User,
        attributes: { exclude: ["password"] },
      },
    });
    res.json(allEventsForHospital);
  } catch (error) {
    res.sendStatus(500);
  }
}

// async function sendMail(email) {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();
//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'adambahaev122@mail.com',
//         clientId: CLIENT_ID,
//         clientSecret: CLEINT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: 'iGive <adambahaev122@mail.com>',
//       to: email,
//       subject: 'Сбор крови',
//       html: '<div> <p style="font-size: 18px">Здравствуйте! Срочно нужна ваша кровь, можете перейти по ссылке.</p> <button style="padding: 15px; border-radius: 10px; border:none; background-color: blue"><a style="text-decoration:none; color: white; font-size: 18px" href="http://localhost:3000">Войти</a></button></div>'
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

async function addNewEvent(req, res) {

  try {
    const { id, city } = req.session.hospital;
    const { bloodTypeId, bloodQuantity, eventDate, priority } = req.body;

    await Event.create({
      bloodTypeId,
      bloodQuantity,
      eventDate,
      priority,
      hospitalId: id,
    });
    // const userEmails = await User.findAll({ raw: true, where: { bloodTypeId, city }, attributes: ['email'] })
    // const emailsArr = userEmails.map(el => el.email)
    // emailsArr.forEach(el => {
    //   sendMail(el)
    //     .then((result) => console.log('Email sent...', result))
    //     .catch((error) => console.log(error.message));
    // })
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function addDonationFromEvent(req, res) {
  try {
    const { id } = req.params;
    const hospitalId = req.session.hospital.id;
    const donationDataFromFront = req.body;
    const donationData = donationDataFromFront.filter(
      (el) => el.bloodQuantity > 0
    );
    const arrayofUserId = donationData.map((item) => item.userId);
    await UserEvent.update(
      { donated: true },
      {
        where: {
          userId: arrayofUserId,
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
      attributes: ["bloodTypeId", "eventDate"],
      where: { id },
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
    console.log(error);
    res.sendStatus(500);
  }
}

async function getAllSubscribeUsers(req, res) {
  try {
    const { id } = req.params;
    const allSubscribeUsers = await User.findAll({
      include: { model: Event, where: { id } },
      attributes: { exclude: ["password"] },
    });
    res.json(allSubscribeUsers);
  } catch (error) {
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
  changeProfileImage,
};
