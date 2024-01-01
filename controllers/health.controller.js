const healthModel = require("../models/health.model");

module.exports = {
  list: async (req, res) => {
    try {
      let query = {};

      query = {
        ...(req?.query?.user && { user: req.query.user }),
      };

      let data = await healthModel.find(query).populate("user");
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await healthModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const user = await healthModel.findById(req.params.id).populate("user");

      res.status(201).json(user);
    } catch (error) {
      throw error;
    }
  },

  findHealth: async (req, res) => {
    try {
      let health = await healthModel.findById(req.params.id).populate("user");
      return res.status(200).json(health);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await healthModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteHealth: async (req, res) => {
    try {
      await healthModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa health thành công");
    } catch (error) {
      throw error;
    }
  },
};
