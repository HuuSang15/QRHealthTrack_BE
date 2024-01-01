const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    password: {
      type: String,
      require: true,
    },

    username: {
      type: String,
      require: true,
    },

    fullName: {
      type: String,
      require: true,
    },

    // 0: user 1: admin
    role: {
      type: Number,
      default: 0,
    },

    // 1: male 2: female
    gender: {
      type: Number,
    },

    phone: {
      type: String,
    },

    avatar: {
      type: String,
    },

    address: {
      type: String,
    },

    birth: {
      type: String,
    },

    // 1: A 2:B 3:0 4:AB
    blood: {
      type: Number,
    },

    excercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "exercise" }],

    diets: [{ type: mongoose.Schema.Types.ObjectId, ref: "diet" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
