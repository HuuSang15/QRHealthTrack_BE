const mongoose = require("mongoose");

const dietSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    content: {
      type: String,
    },

    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("diet", dietSchema);
