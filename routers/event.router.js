const express = require("express");
const router = express.Router();

const {
  create,
  list,
  findById,
  update,
  deleteById,
} = require("../controllers/event.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").get(asyncMiddelware(findById));
router.route("/:id").delete(asyncMiddelware(deleteById));
router.route("/").get(asyncMiddelware(list));
router.route("/").post(asyncMiddelware(create));

module.exports = router;
