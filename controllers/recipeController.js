const db = require("../models");
const mongoose = require("mongoose");
// Defining methods for the recipeController
module.exports = {
  findAll: function(req, res) {
    //end of request
    db.Recipe.find({})
      .then(dbRecipe => res.send(dbRecipe))
      .catch(err => res.status(422).send(err));
  },
  findById: function(req, res) {
    db.Recipe.findById(req.params.id)
      .then(dbRecipe => res.send(dbRecipe))
      .catch(err => res.status(422).send(err));
  },
  create: function(req, res) {
    db.Recipe.create(req.body);
    const title = req.body.strMeal;
    const imageURL = req.body.strMealThumb;
    const itemURL = req.body.strYoutube;
    const itemURL2 = req.body.strYoutube;
    const instr = req.body.strInstructions;

    db.Recipe.create({
      title,
      imageURL,
      itemURL,
      itemURL2,
      instr
    })
      .then(dbRecipe => res.send(dbRecipe))
      .catch(err => res.status(422).send(err));
  },
  update: function(req, res) {
    db.Recipe.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body
    )
      .then(dbRecipe => res.send(dbRecipe))
      .catch(err => res.status(422).send(err));
  },
  remove: function(req, res) {
    db.Recipe.findById(req.params.id)
      .then(dbRecipe => dbRecipe.remove())
      .then(dbRecipe => res.send(dbRecipe))
      .catch(err => res.status(422).send(err));
  }
};
