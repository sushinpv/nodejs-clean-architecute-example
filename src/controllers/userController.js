const usersRepo = require("../model/user.model");
const { listUsers, getUserById } = require("../usecases/userUseCases");

const listUsersController = (req, res) => {
  let authUserName = req.authUser.username;
  let response = listUsers(authUserName, { usersRepo });
  res.status(200).json(response);
};

const getUserController = (req, res) => {
  // Input
  let userId = req.params.id;

  // Condition
  if (!userId) res.status(422).json({ message: "UserId is missing" });
  let response = getUserById(userId, { usersRepo });

  // Output
  res.status(200).json(response);
};

module.exports = {
  listUsersController,
  getUserController,
};
