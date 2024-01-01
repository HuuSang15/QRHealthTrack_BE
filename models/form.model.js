const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },

    age: {
      type: Number,
    },

    // 1: A 2:B 3:0 4:AB
    blood: {
      type: Number,
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

    event: { type: mongoose.Schema.Types.ObjectId, ref: "event" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("form", formSchema);
