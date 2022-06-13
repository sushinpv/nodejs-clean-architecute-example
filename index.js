require("dotenv").config();
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

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, (err) => {
  if (err) {
    console.log(`error while connecting to http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  } else {
    console.log(`server is running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  }
});
