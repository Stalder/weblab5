var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/drafts", function(req, res, next) {
  res.json({ result: "Return all drafts" });
});

router.post("/drafts", function(req, res, next) {
  res.json({ result: "Creating new draft" });
});

router.get("/drafts/:id", function(req, res, next) {
  const id = req.params.id;
  res.json({ result: "Returned draft with id " + id });
});

router.put("/drafts/:id", function(req, res, next) {
  const id = req.params.id;
  res.json({ result: "Saved draft " + id });
});

router.delete("/drafts/:id", function(req, res, next) {
  const id = req.params.id;
  res.json({ result: "Deleted draft " + id });
});

module.exports = router;
