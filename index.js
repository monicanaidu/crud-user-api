const express = require("express");
const { StatusCodes } = require("http-status-codes");
const cors = require("cors");

//cofig settings to access env setting
require("dotenv").config();

//import db congif method
const connectDb = require("./db/dbConfig");

const PORT = process.env.PORT;

const app = express();

//view as static
app.use(express.static("view"));

//body parse config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//index route
app.get(`/`, (req, res) => {
  res.status(StatusCodes.OK).json({ status: true, msg: `crud user api` });
});

//connecting the route so "use" not "get"
app.use(`/`, require("./route/templateRoute"));

//api route
app.use(`/api/user`, require("./route/userRoute"));

//default route
app.all(`*`, (req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: false, msg: "requested path not found" });
});

app.listen(PORT, () => {
  if (process.env.MODE === "development") {
    connectDb(process.env.MONGO_DEV);
  }
  if (process.env.MODE === "production") {
    connectDb(process.env.MONGO_PROD);
  }

  console.log(`server is running @ http:localhost:${PORT}`);
});
