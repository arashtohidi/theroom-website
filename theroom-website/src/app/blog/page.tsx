/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/blog/page.tsx
import { fetchArticles } from "@/lib/strapi";

export default async function BlogPage() {
  const articles = await fetchArticles();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">وبلاگ دروم</h1>
      {articles?.data?.map((article: any) => (
        <div key={article.id} className="mb-8 border-b pb-4">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="text-gray-700">{article.description}</p>
        </div>
      ))}
    </main>
  );
}
