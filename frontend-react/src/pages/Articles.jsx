import { useEffect, useState } from "react";
import api from "../services/api";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/articles")
      .then(res => {
        const result = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];

        setArticles(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);



  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          BeyondChats Articles
        </h1>

        {articles.length === 0 && (
          <p className="text-center text-gray-500">
            No articles found.
          </p>
        )}

        {articles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}
