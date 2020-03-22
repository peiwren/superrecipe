// CREATE ROUTE TO DATABASE ---
const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const mealController = require("../../controllers/mealdbController");

//Below like if statement, if match go here, if not go another router
// Matches with "/api/recipes/"
router.route("/").get(mealController.findAll);

router
  .route("/")
  .get(mealController.findAll)
  .post(recipeController.create);

router.route("/saved").get(recipeController.findAll);
// Matches with "/api/recipes/:id"
router
  .route("/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

// Matches with "/api/recipes/saved"

module.exports = router;
