const path = require("path");
const router = require("express").Router();
const recipeRoutes = require("./recipes");
const mealdbRoutes = require("./mealdb");

// localhost:3000/api/recipes

// Recipe routes
router.use("/recipes", recipeRoutes);

// mealDB Routes
router.use("/mealdb", mealdbRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
