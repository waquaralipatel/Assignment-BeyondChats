module.exports = function validateEnv() {
  const required = [
    "SERP_API",
    "OPENAI_KEY",
    "LARAVEL_API"
  ];

  required.forEach(key => {
    if (!process.env[key]) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  });
};
