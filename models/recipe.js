const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
  itemURL: { type: String, required: true },
  instr: { type: String, required: true },
  mealdbId: { type: String, required: true }
});

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;
