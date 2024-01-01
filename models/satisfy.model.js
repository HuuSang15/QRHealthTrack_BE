const mongoose = require("mongoose");

const satisfySchema = mongoose.Schema(
  {
    user: {
      type: Number,
    },

    exercise: {
      type: Number,
    },

    diet: {
      type: Number,
    },

    topic: {
      type: Number,
    },

    event: {
      type: Number,
    },

    bloodA: {
      type: Number,
    },

    bloodB: {
      type: Number,
    },

    bloodO: {
      type: Number,
    },

    bloodAB: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("satisfy", satisfySchema);
