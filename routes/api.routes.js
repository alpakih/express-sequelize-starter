const express = require("express");
const router = express.Router();

const compareController = require("../controllers/compare.controller.js");
router.post("/compare", compareController.create);
router.get("/compare/:id", compareController.getById);

module.exports = router;