const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

const { dashboard, login } = require("../controllers/main");

router.route("/dashboard").get(dashboard);
router.route("/login").get(login);

module.exports = router;
