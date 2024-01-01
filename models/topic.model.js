const mongoose = require("mongoose");

const topicSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },

    url: {
      type: String,
    },

    thumnail: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("topic", topicSchema);
