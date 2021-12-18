const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  name: {type: String , default: "xxx"},
  category: {type: String, default: "---"},
  price: {type: Number, default: 0},
  quantity: {type: Number },
  manufactured: {type: String},
  rate: {type: Number},
  sold: {type: Number},
  img : {type: String},
});

module.exports = mongoose.model('Product', Product);