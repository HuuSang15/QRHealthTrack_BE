const formModel = require("../models/form.model");

module.exports = {
  list: async (req, res) => {
    try {
      let query = {};

      query = {
        ...(req?.query?.user && { user: req.query.user }),
      };

      let data = await formModel.find(query).populate("user").populate("event");
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await formModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const data = await formModel
        .findById(req.params.id)
        .populate("user")
        .populate("event");

      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await formModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  findById: async (req, res) => {
    try {
      let data = await formModel
        .findById(req.params.id)
        .populate("user")
        .populate("event");
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (req, res) => {
    try {
      await formModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa form thành công");
    } catch (error) {
      throw error;
    }
  },
};
