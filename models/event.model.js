const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    description: {
      type: String,
    },

    address: {
      type: String,
    },

    startDate: {
      type: String,
    },

    endDate: {
      type: String,
    },

    startTime: {
      type: String,
    },

    endTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", eventSchema);
