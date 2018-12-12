import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import rfs from "rotating-file-stream";
import route from "./server/routes";

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// create a rotating write stream
const accessLogStream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log")
});

// setup the logger
app.use(logger("combined", { stream: accessLogStream }));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
route(app);
app.get("*", (_req, res) =>
  res.status(200).send({
    message: "snothingness."
  })
);

export default app;
