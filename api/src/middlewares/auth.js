const UsersService = require("../services/users");

module.exports = async (req, res, next) => {
  try {
    const response = await Promise(() => {
      UsersService.authenticate(req.headers.authorization, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    req.userId = response.user.id;

    next();
  } catch (error) {
    return res.status(401).send({ error: "Token Invalid" });
  }
};
