const jwtService = require("../services/jwtService");

/**
 * Middleware to check user is authenticated or not
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const authUser = (req, res, next) => {
  let token = req.headers.token;
  try {
    let user = jwtService.verify(token);
    req.authUser = user;
    next();
  } catch (ex) {
    console.log("ex", ex);
    res.status(401).json({
      message: "You are not authenticated to use this route",
    });
  }
};

module.exports = { authUser };
