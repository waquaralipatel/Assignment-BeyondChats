const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/articleController");

router.get("/articles", ctrl.getAll);
router.get("/articles/latest", ctrl.getLatest);
router.get("/articles/:id", ctrl.getOne);
router.post("/articles", ctrl.create);
router.put("/articles/:id", ctrl.update);
router.delete("/articles/:id", ctrl.remove);

module.exports = router;
