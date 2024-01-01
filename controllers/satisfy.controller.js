const satisfyModel = require("../models/satisfy.model");
const userModel = require("../models/user.model");
const exerciseModel = require("../models/exercise.model");
const dietModel = require("../models/diet.model");
const topicModel = require("../models/topic.model");
const eventModel = require("../models/event.model");

module.exports = {
  list: async (req, res) => {
    try {
      const existSatisfy = await satisfyModel.findOne({});
      const user = await userModel.countDocuments({});
      const exercise = await exerciseModel.countDocuments({});
      const diet = await dietModel.countDocuments({});
      const topic = await topicModel.countDocuments({});
      const event = await eventModel.countDocuments({});
      const bloodA = await userModel.countDocuments({ blood: 1 });
      const bloodB = await userModel.countDocuments({ blood: 2 });
      const bloodO = await userModel.countDocuments({ blood: 3 });
      const bloodAB = await userModel.countDocuments({ blood: 4 });

      const data = {
        user,
        exercise,
        diet,
        topic,
        event,
        bloodA,
        bloodB,
        bloodO,
        bloodAB,
      };

      if (existSatisfy) {
        await satisfyModel.findByIdAndUpdate(existSatisfy._id, {
          ...data,
        });
      } else {
        await satisfyModel.create(data);
      }

      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },
};
