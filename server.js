const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();
const users = require("./routes/api/users");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// connect mongodb
const db = require("./config/keys").MongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//paspport middleware
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server running on port ${port}`));

// register http://localhost:9000/api/users/register
// login http://localhost:9000/api/users/login
