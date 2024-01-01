const contactModel = require("../models/contact.model");
const nodemailer = require("nodemailer");

module.exports = {
  list: async (req, res) => {
    try {
      let data = await contactModel.find({});
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  },

  create: async (req, res) => {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "phamhuusang24@gmail.com", // Your email address
          pass: "iopz ltxx jsty mgkl", // Password (for gmail, your app password)
        },
      });

      await transporter.sendMail({
        from: "phamhuusang24@gmail.com",
        to: "phamhuusang24@gmail.com",
        subject: "Healthy Tracker Contact",
        html: `
    <p>Email ${req.body.email}</p>
    <p>Name: ${req.body.name}</p>
    <p>Phone: ${req.body.phone}</p>
    <p>Messge: ${req.body.message}</p>
    `,
      });

      const data = await contactModel.create({ ...req.body });
      res.status(201).json(data);
    } catch (error) {
      throw error;
    }
  },
};
