const jwt = require("jsonwebtoken");

const JWTService = class {
  constructor() {
    this.jwt = jwt;
  }

  /**
   * Function to create a token
   * @param { string } username
   * @returns
   */
  create(username) {
    return this.jwt.sign({ username }, process.env.SECRET_TOKEN, { expiresIn: 60 * 60 });
  }

  /**
   * Function to verify a token
   * @param { string } jwt
   * @returns
   */
  verify(jwt) {
    let decoded = this.jwt.verify(jwt, process.env.SECRET_TOKEN);
    return decoded;
  }
};

const jwtService = new JWTService();

module.exports = jwtService;
