const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const logger = require("morgan");

const app = express();
const users = require("./routes/api/users");
const commentbox = require("./routes/api/commentbox");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(logger("dev"));

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

// commentbox
app.use("/api/commentbox", commentbox);

//const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`server running on port 5000`));
