const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const session = require('express-session');
const { RedisStore } = require('connect-redis');

const path = require('path');
const bcrypt = require("bcryptjs");

// require('dotenv').config({ path: .${ process.env.NODE_ENV }.env });
require('dotenv').config();

// Redis setup
const { createClient } = require('redis');

// Create Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  socket: {
    reconnectStrategy: retries => Math.min(retries * 50, 1000)
  }
});

// Redis error handling
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to Redis'));
redisClient.on('reconnecting', () => console.log('Redis client reconnecting'));
redisClient.on('ready', () => console.log('Redis client ready'));

// Connect to Redis
redisClient.connect().catch(console.error);

// Initialize RedisStore with the client
const signupRouter = require('./src/routes/signup.router');
const loginRouter = require('./src/routes/login.router');
const userRouter = require('./src/routes/user.router');
const hospitalRouter = require('./src/routes/hospital.router');
const addressApi = require('./src/routes/addressApi.router');

// Session configuration
const sessionsConf = {
  store: new RedisStore({ 
    client: redisClient,
    prefix: 'igive:sess:' 
  }),
  name: 'sid',
  secret: process.env.SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
};
const app = express();
const PORT = process.env.PORT || 3005;

app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app we're connecting to
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//session middleware
app.use(session(sessionsConf));

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(path.join(process.env.PWD, 'public')));


app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/hospital', hospitalRouter);
app.use('/addressApi', addressApi);

app.listen(PORT, () => {
  console.log(`Server has launched on port ${PORT}`);
});
