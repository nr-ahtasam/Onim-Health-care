// components/news-letter/BlogCardPreview.js
"use client";

import { getHomePageBlogsQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "./BlogCard";

export default function BlogCardPreview() {
  const { data, loading, error } = useQuery(getHomePageBlogsQuery);

  if (loading) return null;
  if (error) return null;

  const blogs = data?.posts?.nodes || [];

  return (
    <div className="flex flex-col  max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          News From Our Center
        </h2>
        <Link
          href="/blogs"
          className="w-20 md:w-20 text-[12px] text-gray-600 flex  gap-1 hover:text-gray-900"
        >
          View all <ArrowRight size={16} />
        </Link>
      </div>
      <div className="flex flex-row  gap-4 flex-wrap">
        {blogs.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
