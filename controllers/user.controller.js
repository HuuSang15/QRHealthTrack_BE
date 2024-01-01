const userModel = require("../models/user.model");
const ErrorResponse = require("../helpers/ErrorResponse");

module.exports = {
  list: async (req, res) => {
    try {
      let user = await userModel
        .find({})
        .populate("excercises")
        .populate("diets")
        .select(["-updatedAt", "-createdAt"])
        .sort({ createdAt: -1 });
      return res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  },

  findUser: async (req, res) => {
    try {
      let user = await userModel
        .findById(req.params.id)
        .populate("excercises")
        .populate("diets")
        .select(["-updatedAt", "-createdAt"]);
      return res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  },

  login: async (req, res) => {
    try {
      let { ...body } = req.body;
      let user = await userModel.findOne({
        username: body.username,
        password: body.password,
      });

      if (!user) {
        throw new ErrorResponse(404, "Username hoặc mật khẩu không chính xác");
      }
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      let { ...body } = req.body;

      let user = await userModel.findOne({
        username: body.username,
      });

      if (user) {
        throw new ErrorResponse(404, "Username đã tồn tại");
      }

      const data = await userModel.create(body);
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },

  update: async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });

      const user = await userModel
        .findById(req.params.id)
        .populate("excercises")
        .populate("diets");

      res.status(201).json(user);
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (req, res) => {
    try {
      await userModel.findOneAndDelete({ _id: req.params.id });
      res.status(201).json("Xóa user thành công");
    } catch (error) {
      throw error;
    }
  },
};
