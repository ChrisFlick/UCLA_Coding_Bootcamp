const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "User Name is required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    trim: true;
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
