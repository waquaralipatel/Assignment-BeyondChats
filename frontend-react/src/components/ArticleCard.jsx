export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {article.title}
      </h2>

      <span
        className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4
          ${article.article_type === "updated"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"}
        `}
      >
        {article.article_type.toUpperCase()}
      </span>

      <p className="text-gray-600 line-clamp-3">
        {article.content?.slice(0, 200)}...
      </p>

      {article.reference_links?.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium text-gray-700 mb-2">
            References
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {article.reference_links.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
