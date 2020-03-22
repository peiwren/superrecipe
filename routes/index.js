const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// localhost:3000/api
// API Routes
//If the request has "/api", go to the /api folder 
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app ../client/build/index.html
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
