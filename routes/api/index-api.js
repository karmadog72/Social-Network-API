// express router
const router = require("express").Router();

// user & thoughts routes
const userRoutes = require("./user-routes");
const thoughtsRoutes = require("./thoughts-routes");

router.use("/user, userRoutes");
router.thoughts("/thoughts, thoughtsRoutes");

module.exports = router;
