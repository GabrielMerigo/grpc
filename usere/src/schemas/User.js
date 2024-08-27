const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  email: String,
  username: String,
  passwordHash: String,
});

UserSchema.pre("save", async (next) => {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },
};

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, autoConfig.secret, {
      expiresIn: 86400,
    });
  },
};
export default mongoose.Model("User", UserSchema);
