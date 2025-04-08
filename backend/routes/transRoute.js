const express = require("express");
const translationRoute = express.Router();

const {
  postObject,
  getTranslation,
} = require("../controllers/translationController");

translationRoute.post("/translation", postObject);
translationRoute.post("/gettranslation", getTranslation);

module.exports = translationRoute;
