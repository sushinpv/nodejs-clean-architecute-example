/**
 * This usecase is used to list all the users
 * @param { string } authUserName
 * @returns
 */
const listUsers = (authUserName, { usersRepo }) => {
  return usersRepo.filter((user) => user.admin == authUserName);
};

/**
 * This usecase is used to get the user by user id
 * @param { number } id
 * @returns
 */
const getUserById = (id, { usersRepo }) => {
  let index = usersRepo.findIndex((user) => user._id == id);
  return usersRepo[index];
};

module.exports = { listUsers, getUserById };
