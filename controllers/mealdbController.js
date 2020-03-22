const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const { query } = req;

    //example url = https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      )
      .then(response => {
        res.json(response.data.meals);
      })
      .catch(err => res.status(422).send(err));
  }
};
