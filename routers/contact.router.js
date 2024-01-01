const express = require("express");
const router = express.Router();

const { create, list } = require("../controllers/contact.controllerr");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
