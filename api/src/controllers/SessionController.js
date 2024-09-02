const UsersService = require("../services/users");

class SessionController {
  async store(req, res) {
    const { email, username, password } = req.body;

    const response = await new Promise((resolve, reject) => {
      UsersService.authenticate(
        { user: { email, password } },
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

module.exports = new SessionController();
