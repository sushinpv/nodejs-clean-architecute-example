/**
 * This usecase is used to list all the users
 * @param { string } authUserName
 * @returns
 */
const listUsers = async (name, { usersRepository }) => {
  // let user = new usersRepository({
  //   name: `${name} - ${new Date().getTime()}`,
  // });

  // await user.save();

  await usersRepository.updateOne({ name: name }, { admin: `${name} - ${new Date().getTime()}`, isActive: true });

  return usersRepository.find({ name: name }, { admin: 0 });
};

/**
 * This usecase is used to get the user by user id
 * @param { number } id
 * @returns
 */
const getUserById = (id, { usersRepository }) => {
  return usersRepository.findOne({ _id: id });
};

module.exports = { listUsers, getUserById };
