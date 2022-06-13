const userController = require("../controllers/userController");

const router = require("express")();

/**
 * Route to handle list users => /users
 */
router.get("", userController.listUsersController);

/**
 * Route to get a single user by user id
 */
router.get("/:id", userController.getUserController);

module.exports = router;
