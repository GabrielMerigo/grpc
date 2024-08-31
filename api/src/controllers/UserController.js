const UsersService = require("../services/users");

class UserController {
  async show(req, res) {
    const user = {};

    return user;
  }

  async store(req, res) {
    const { email, username, password } = req.body;

    const response = new Promise((resolve, reject) => {
      UsersService.registerUser(
        { user: { email, username, password } },
        function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
      );
    });

    return res.json(response);
  }
}

module.exports = new UserController();
