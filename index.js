require("dotenv").config();
const dbConnect = require("./src/services/db-connect");
const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes");

/**
 * Define an express app
 */
const app = express();

/**
 * Define all the libs / middleware
 */

app.use(express.json());
app.use(morgan("dev"));

/**
 * Routes
 */

app.use(routes);

/**
 * Listen
 */

dbConnect()
  .then((done) => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, (err) => {
  if (err) {
    console.log(`error while connecting to http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  } else {
    console.log(`server is running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  }
});
