const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageScheme = new Schema({
  userName: String,
  mail: String,
  phoneNumber: String,
  message: String,
  day: String,
  month: String,
  year: String,
});
//Створення моделі
const MessageModel = mongoose.model("Message", messageScheme);

module.exports = MessageModel;
