// components/news-letter/BlogCardPreview.js
"use client";

import { getHomePageBlogsQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import BlogCard from "./BlogCard";

export default function BlogCardPreview() {
  const { data, loading, error } = useQuery(getHomePageBlogsQuery);

  if (loading) return null;
  if (error) return null;

  const blogs = data?.posts?.nodes || [];

  return (
    <div className="flex flex-col  max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-row  gap-4 flex-wrap">
        {blogs.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
