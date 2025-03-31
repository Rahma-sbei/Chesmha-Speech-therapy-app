require("dotenv").config();
const Object = require("../models/Object");

const getTranslation = async (request, response) => {
  const object = request.body;
  try {
    console.log(object.name);
    const foundObject = await Object.findOne({ name: object.name });
    if (foundObject) {
      response
        .status(200)
        .send(JSON.stringify({ translation: foundObject.translation }));
    } else {
      response.status(200).json({ msg: " object does not exist" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: "error on translating" });
  }
};

const postObject = async (request, response) => {
  const object = request.body;
  try {
    const foundObject = await Object.findOne({ name: object.name });
    if (foundObject) {
      response.status(400).json({ msg: "object already exist" });
    } else {
      const newObject = new Object(object);
      console.log(newObject);
      await newObject.save();
      response
        .status(200)
        .json({ object: newObject, msg: " object successfully added" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ msg: "error on adding object" });
  }
};

module.exports = { postObject, getTranslation };
