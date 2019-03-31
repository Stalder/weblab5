var { Draft } = require("../database/draft");

module.exports.getDrafts = async function(req, res, next) {
  const drafts = await Draft.find();
  res.json({ drafts });
};

module.exports.createDraft = async function(req, res, next) {
  const { title, markup } = req.body;
  if (!title || !markup) {
    return res.json({ error: "Not provided title or markup field" });
  }
  const newDraft = new Draft({
    title,
    markup
  });

  const savedDraft = await newDraft.save();

  res.json({ draft: savedDraft });
};

module.exports.updateDraft = async function(req, res, next) {
  const id = req.params.id;
  const { title, markup } = req.body;

  if (!title || !markup) {
    return res.json({ error: "Not provided title or markup field" });
  }
  const updatedDraft = {
    title,
    markup
  };

  const draft = await Draft.findByIdAndUpdate(id, updatedDraft, { new: true });

  res.json({ resulr: "success", draft });
};

module.exports.deleteDraft = async function(req, res, next) {
  const id = req.params.id;
  const deletedDraft = await Draft.findByIdAndDelete(id);

  res.json({ resulr: "success", deleted: deletedDraft });
};
