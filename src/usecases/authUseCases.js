const authUser = (username, password, { jwtService }) => {
  if (username === "abc" && password === "abc") {
    let response = jwtService.create(username);
    return { token: response };
  } else {
    throw "Username or password is wrong";
  }
};

module.exports = { authUser };
