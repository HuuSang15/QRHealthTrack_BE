const eventModel = require("../models/event.model");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await eventModel.find({});
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await eventModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const data = await eventModel.findById(req.params.id);

      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  findById: async (req, res) => {
    try {
      let data = await eventModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await eventModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (req, res) => {
    try {
      await eventModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa event thành công");
    } catch (error) {
      throw error;
    }
  },
};
