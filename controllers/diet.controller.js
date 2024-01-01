const dietModel = require("../models/diet.model");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await dietModel.find({});
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await dietModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const data = await dietModel.findById(req.params.id);

      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  findById: async (req, res) => {
    try {
      let data = await dietModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await dietModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (req, res) => {
    try {
      await dietModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa diet thành công");
    } catch (error) {
      throw error;
    }
  },
};
