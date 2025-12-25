const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    content: String,
    article_type: {
      type: String,
      enum: ["original", "updated"],
      default: "original"
    },
    reference_links: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
