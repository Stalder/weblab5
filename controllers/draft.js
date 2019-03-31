var { Draft } = require("../database/draft");

module.exports.getDrafts = function(req, res, next) {
  res.json({ result: "Return all drafts" });
};

module.exports.createDraft = function(req, res, next) {
  res.json({ result: "Creating new draft" });
};

module.exports.updateDraft = function(req, res, next) {
  const id = req.params.id;
  res.json({ result: "Saved draft " + id });
};

module.exports.deleteDraft = function(req, res, next) {
  const id = req.params.id;
  res.json({ result: "Deleted draft " + id });
};
