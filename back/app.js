const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const bcrypt = require("bcryptjs");
// require('dotenv').config({ path: .${ process.env.NODE_ENV }.env });

//redis
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const redisClient = redis.createClient();

//session config
const sessionsConf = {
  store: new RedisStore({ host: "localhost", port: 6379, client: redisClient }),
  key: "sid", // ключ куки (название куки)
  secret: "asdfghjk", // для шифрования id сессии
  resave: true, // сессия будет сохраняться заново только при изменениях
  saveUninitialized: false, // сохранение (или не сохранение) не инициализированной сессии
  httpOnly: true, // невозможно изменить куку с фронта
  cookie: { expires: 24 * 60 * 60e3 },
};
const app = express();
const PORT = 3001;

users = [];

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app we're connecting to
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//session middleware
app.use(session(sessionsConf));

app.post("/donor/reg", async (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body)
  try {
    const password = await bcrypt.hash(pass, 5);
    const currUser = { email, password };
    users.push(currUser);
    req.session.user = currUser;
    res.json(currUser);
  } catch (err) {
    console.log(err);
  }
});

app.post("/hospital/reg", async (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body)

  try {
    const password = await bcrypt.hash(pass, 5);
    const currUser = { email, password };
    users.push(currUser);
    req.session.user = currUser;
    res.json(currUser);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server has launched on port ${PORT}`);
});
