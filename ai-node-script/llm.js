const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

module.exports = async function rewriteArticle(original, references) {
  const prompt = `
Rewrite the article to improve clarity, structure, and SEO.
Do not copy text verbatim.
Preserve meaning.

Return ONLY clean markdown content.

Original Article:
${original}

Reference Articles:
${references.join("\n")}
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return res.choices[0].message.content;
};
