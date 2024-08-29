const UsersService = require("../services/users");

class UserController {
  async show(req, res) {
    const user = {};

    return user;
  }

  async store(req, res) {
    const { email, username, password } = req.body;

    console.log(req.body);

    UsersService.registerUser(
      { user: { email, username, password } },
      function (err, response) {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
        }
      }
    );

    return res.send("Olha o console");
  }
}

module.exports = new UserController();
