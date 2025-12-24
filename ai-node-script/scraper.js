const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function scrapeArticle(url) {
  const { data } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const $ = cheerio.load(data);

  let content = "";

  $("article p, main p").each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 50) {
      content += text + "\n";
    }
  });

  return content.slice(0, 4000);
};
