const serverController = require("../controllers/serverController");

const router = require("express")();
const usersRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const { authUser } = require("../middleware/authMiddleware");

/**
 * Route to handle home page /
 */
router.get("", serverController.defaultController);

/**
 * Load all users route
 */

router.use("/user", authUser, usersRoutes);

/**
 * Load all auth routes
 */
router.use("/auth", authRoutes);

/**
 * Route to handle all other routes
 */
router.get("*", serverController.pageNotFoundController);

module.exports = router;
