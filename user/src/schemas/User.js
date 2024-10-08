const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});
userSchema.pre("save", async function () {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 8);
});

userSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },
};

userSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, "MeriG0D", {
      expiresIn: 86400,
    });
  },
};

module.exports = mongoose.model("User", userSchema);
