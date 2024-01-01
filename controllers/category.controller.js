const categoryModel = require("../models/category.model");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await categoryModel.find({});
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await categoryModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const data = await categoryModel.findById(req.params.id);

      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  findById: async (req, res) => {
    try {
      let data = await categoryModel.findById(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      const data = await categoryModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (req, res) => {
    try {
      await categoryModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa category thành công");
    } catch (error) {
      throw error;
    }
  },
};
