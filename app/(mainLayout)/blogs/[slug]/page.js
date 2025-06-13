"use client";

import { getSingleBlogBySlugQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useParams } from "next/navigation";

import { cleanExcerpt } from "@/lib/cleanExcerpt";
import { formatDateTime } from "@/lib/formatDateTime";
export default function ArticlePage() {
  const slug = useParams()?.slug;
  const { data, loading, error } = useQuery(getSingleBlogBySlugQuery, {
    variables: { slug },
  });

  const post = data?.post;
  const author = {
    name: post?.author?.node?.name || "Unknown Author",
    image: post?.author?.node?.avatar?.url || "https://via.placeholder.com/40",
  }
  const {date: publishedDate, time} = formatDateTime(post?.date);

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

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="text-gray-600 blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>

        {/* Published Info Div */}
        <div className="p-2.5 flex justify-between items-start">
          <div>
            <span className="text-gray-600">Published On</span>
            <br />
            <span className="font-bold">{publishedDate + ' ' + time}</span>
          </div>
          <div className="flex flex-col justify-start items-center ">
            <div className="text-gray-600">Published by</div>
            <div className="flex flex-row items-center">
              <img
                src={author.image}
                width={40}
                height={40}
                alt="Author Image"
                className="rounded-full mr-2"
              />
              <span className="font-bold">{author.name}</span>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
