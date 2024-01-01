const express = require("express");
const router = express.Router();

const {
  create,
  list,
  update,
  findHealth,
  deleteHealth,
} = require("../controllers/health.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").get(asyncMiddelware(findHealth));
router.route("/:id").delete(asyncMiddelware(deleteHealth));
router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
