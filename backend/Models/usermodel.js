const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const user_schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      // required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);
user_schema.methods.match_password = async function(enter_password){
  return await bcrypt.compare(enter_password,this.password)
}



user_schema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const user = mongoose.model("user", user_schema);

module.exports = user;
