const express = require("express");
const transRoute = express.Router();

const { translate } = require("../controllers/translationController");

transRoute.post("/translation", translate);

module.exports = transRoute;
