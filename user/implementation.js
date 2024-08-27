const User = require("./src/schemas/User");

module.exports = {
  async getUserById(call, callback) {
    const { id } = call.request;

    const user = await User.findById(id);

    if (user) {
      return callback({ error: "User not found" });
    }

    return callback(null, user);
  },

  async getAllUsers(call, callback) {
    const users = await User.find({});

    callback(null, { users });
  },

  async registerUser(call, callback) {
    const { email, username, password } = call.request;

    const user = await User.create({ email, username, password });

    callback(null, { user });
  },

  async loginUser(call, callback) {
    const { email, password } = call.request;

    const user = await User.findOne({ email });

    if (!user) {
      return callback({ error: "User not found" });
    }

    if (!(await user.compareHash(password))) {
      return callback({ error: "Invalid Password" });
    }

    return callback(null, {
      token: User.generateToken(user),
    });
  },
};
