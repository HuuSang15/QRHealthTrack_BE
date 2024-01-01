const express = require("express");
const router = express.Router();

const { list } = require("../controllers/satisfy.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/").get(asyncMiddelware(list));

module.exports = router;
