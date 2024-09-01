const UsersService = require("../services/users");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    console.log(email, password);

    const response = await new Promise((resolve, reject) => {
      UsersService.loginUser(
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

    console.log(response);

    return res.send("Olha no console");
  }
}

module.exports = new SessionController();
