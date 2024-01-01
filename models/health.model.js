const mongoose = require("mongoose");

const healthSchema = mongoose.Schema(
  {
    height: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    bloodPressure: {
      type: Number,
    },

    heartRate: {
      type: Number,
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("health", healthSchema);
