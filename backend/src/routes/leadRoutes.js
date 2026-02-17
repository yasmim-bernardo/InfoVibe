const router = require("express").Router();
const controller = require("../controllers/leadController");

router.post("/", controller.createLead);

module.exports = router;
