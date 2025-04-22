"use client";

import { getSingleBlogBySlugQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const slug = useParams()?.slug;
  console.log(slug);
  const { data, loading, error } = useQuery(getSingleBlogBySlugQuery, {
    variables: { slug },
  });

  const post = data?.post;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">Loading post...</h2>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Blog Post Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-100 to-teal-100 min-h-screen text-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="w-full h-72 bg-gray-300 rounded-xl mb-12 relative overflow-hidden">
          <Image
            src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Title + Excerpt */}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="mb-6 text-gray-600">
          {post.excerpt.replace(/<[^>]*>/g, "")}
        </p>

        {/* Body Sections */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-shrink-0 w-full md:w-1/3 h-32 bg-gray-400 rounded-lg" />
          <p className="flex-1">{post.content?.slice(0, 200)}...</p>
        </div>

        <p className="mb-10">{post.content?.slice(200, 400)}...</p>

        {/* Section 2 with sample list */}
        <h2 className="text-2xl font-bold mb-4">Sub Title 2</h2>
        {/* <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-700">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip.
          </li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </li>
        </ul> */}

        <p className="mb-16">{post.content?.slice(400, 600)}...</p>

        {/* Metadata */}
        <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <div className="mb-2 sm:mb-0">
            Published on
            <br />
            <span className="font-semibold">{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={post.author?.node?.avatar?.url || "/placeholder.svg"}
              alt={post.author?.node?.name || "Author"}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-medium">
              {post.author?.node?.firstName || ""}{" "}
              {post.author?.node?.lastName || ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
