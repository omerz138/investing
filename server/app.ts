import express from "express";
import config from "./config/config";
import db from "./db/db";
import * as routes from "./routes/routes";
import * as bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));
routes.register(app);

const PORT = process.env.PORT || config.PORT;
app.listen(PORT, () => {
  db.init(config.mongoURI);
  console.log(`Server is listening on port ${PORT}`);
});
