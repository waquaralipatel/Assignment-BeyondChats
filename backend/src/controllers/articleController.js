const Article = require("../models/Article");

exports.getAll = async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
};

exports.getLatest = async (req, res) => {
  const article = await Article.findOne({ article_type: "original" })
    .sort({ createdAt: -1 });
  res.json(article);
};

exports.getOne = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
};

exports.create = async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
};

exports.update = async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(article);
};

exports.remove = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ deleted: true });
};
