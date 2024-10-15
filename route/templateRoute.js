const {
  homeController,
  createController,
  editController,
} = require("../controller/templateController");
const templateRoute = require("express").Router();

templateRoute.get(`/`, homeController);
templateRoute.get(`/create`, createController);
templateRoute.get(`/edit`, editController);

module.exports = templateRoute;
