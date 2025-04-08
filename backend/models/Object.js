var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objects = new Schema({
  name: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("object", objects);
