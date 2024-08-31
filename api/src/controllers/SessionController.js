const UsersService = require("../services/users");

class SessionController {
  async store(req) {
    const { email, password } = req.body;

    UsersService.loginUser({ user: { email, password } }, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    });
  }
}

module.exports = new SessionController();
