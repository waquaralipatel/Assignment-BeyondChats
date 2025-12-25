const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article");

const BASE_URL = "https://beyondchats.com";

async function scrapeOldBlogs() {
  try {
    const { data } = await axios.get(`${BASE_URL}/blogs`);
    const $ = cheerio.load(data);

    const links = [];

    $("a").each((_, el) => {
      const href = $(el).attr("href");

      if (href && href.startsWith("/blogs/")) {
        links.push(BASE_URL + href);
      }
    });

    const uniqueLinks = [...new Set(links)].slice(-5);

    for (const url of uniqueLinks) {
      const page = await axios.get(url);
      const $$ = cheerio.load(page.data);

      const title = $$("h1").first().text().trim();

      let content = "";
      $$("p").each((_, p) => {
        content += $$(p).text() + "\n";
      });

      if (!title || !content) continue;

      await Article.findOneAndUpdate(
        { slug: url.split("/").pop() },
        {
          title,
          slug: url.split("/").pop(),
          content,
          article_type: "original"
        },
        { upsert: true, new: true }
      );
    }

    console.log("5 oldest blogs scraped successfully");
  } catch (err) {
    console.error("Scraping failed:", err.message);
  }
}

module.exports = scrapeOldBlogs;
