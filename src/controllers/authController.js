const jwtService = require("../services/jwtService");
const { authUser } = require("../usecases/authUseCases");

const loginController = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  try {
    let response = authUser(username, password, { jwtService });

    res.status(200).json(response);
  } catch (ex) {
    res.status(401).json({
      message: ex || "Username or password is wrong",
    });
  }
};

module.exports = { loginController };
