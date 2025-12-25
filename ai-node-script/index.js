require("dotenv").config();
const axios = require("axios");

const validateEnv = require("./validator");
const search = require("./googleSearch");
const scrape = require("./scraper");
const llm = require("./llm");

(async function main() {
  try {
    validateEnv();

    const { data: article } = await axios.get(
      `${process.env.LARAVEL_API}/articles/latest`
    );

    if (!article) {
      console.log("No article found.");
      return;
    }

    const links = await search(article.title);
    if (links.length === 0) return;

    const contents = await Promise.all(links.map(scrape));

    const updatedContent = await llm(article.content, contents);

    await axios.post(`${process.env.LARAVEL_API}/articles`, {
      title: `Updated - ${article.title}`,
      content: updatedContent,
      article_type: "updated",
      reference_links: links
    });

    console.log("Updated article published successfully");
  } catch (err) {
    console.error("Pipeline failed:", err.message);
  }
})();
