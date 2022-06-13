const authUserController = require("../controllers/authController");

const router = require("express")();

/**
 * Auth route
 */

router.post("", authUserController.loginController);

module.exports = router;
