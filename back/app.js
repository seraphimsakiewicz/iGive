const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
const morgan = require("morgan");

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(5000, () => {
  console.log("Server Has Started");
});
