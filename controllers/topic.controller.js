const topicModel = require("../models/topic.model");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await topicModel.find({});
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await topicModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const data = await topicModel.findById(req.params.id);

      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  findById: async (req, res) => {
    try {
      let data = await topicModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await topicModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (req, res) => {
    try {
      await topicModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa topic thành công");
    } catch (error) {
      throw error;
    }
  },
};
