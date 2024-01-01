const exerciseModel = require("../models/exercise.model");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await exerciseModel.find({}).populate("category");
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await exerciseModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const user = await exerciseModel
        .findById(req.params.id)
        .populate("category");

      res.status(201).json(user);
    } catch (error) {
      throw error;
    }
  },

  findById: async (req, res) => {
    try {
      let health = await exerciseModel
        .findById(req.params.id)
        .populate("category");
      return res.status(200).json(health);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await exerciseModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (req, res) => {
    try {
      await exerciseModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa exercise thành công");
    } catch (error) {
      throw error;
    }
  },
};
