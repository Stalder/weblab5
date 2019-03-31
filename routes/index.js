var express = require("express");
var router = express.Router();

var controller = require("../controllers/draft");

router.get("/drafts", controller.getDrafts);

router.post("/drafts", controller.createDraft);

router.put("/drafts/:id", controller.updateDraft);

router.delete("/drafts/:id", controller.deleteDraft);

module.exports = router;
