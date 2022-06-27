const usersRepository = require("../model/user.model");
const { listUsers, getUserById } = require("../usecases/userUseCases");

const listUsersController = async (req, res) => {
  let name = req.query.username;
  let response = await listUsers(name, { usersRepository });
  res.status(200).json(response);
};

const getUserController = async (req, res) => {
  // Input
  let userId = req.params.id;

  // Condition
  if (!userId) res.status(422).json({ message: "UserId is missing" });
  let response = await getUserById(userId, { usersRepository });

  // Output
  res.status(200).json(response);
};

module.exports = {
  listUsersController,
  getUserController,
};
