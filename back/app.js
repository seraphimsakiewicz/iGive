const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// require('dotenv').config({ path: `.${process.env.NODE_ENV}.env` });
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server has launched on port ${PORT}`);
});
