const axios = require("axios");

module.exports = async function searchArticles(query) {
  const res = await axios.get("https://serpapi.com/search.json", {
    params: {
      q: query,
      api_key: process.env.SERP_API,
      num: 5
    }
  });

  return res.data.organic_results
    .filter(r =>
      r.link &&
      !r.link.includes("youtube") &&
      !r.link.includes("pdf") &&
      r.snippet
    )
    .slice(0, 2)
    .map(r => r.link);
};
