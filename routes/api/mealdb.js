// CREATE ROUTE TO DATABASE ---
const router = require("express").Router();

// Matches with "/api/mealdb"
router.route("/").get((req, res) => res.json({ success: true }));

module.exports = router;
