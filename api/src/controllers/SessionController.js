const UsersService = require("../services/users");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    UsersService.loginUser({ user: { email, password } }, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    });

    return res.send("Olha no console");
  }
}

module.exports = new SessionController();
