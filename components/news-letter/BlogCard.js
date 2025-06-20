"use client";

import { Button } from "@/components/ui/button";
import { cleanExcerpt } from "@/lib/cleanExcerpt";
import { formatDateTime } from "@/lib/formatDateTime";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  if (!post) return null;
const {date, time} = formatDateTime(post?.date);
  return (
    <div className="flex flex-col md:flex-row bg-white overflow-hidden md:w-[calc(50%-0.5rem)] mb-15">
      <div className="w-full md:w-1/2 h-40 md:h-auto relative">
        <Image
          src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2 p-6">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="text-[#705CE1]" size={16} />
          <div className="flex justify-between w-full">
            <span className="text-[#705CE1] text-xs">{date + ' ' + time}</span>
            <span className="text-[#705CE1] text-xs">
              {post.categories?.nodes?.[0]?.name || ""}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <div className="border-t border-gray-200 my-3" />
        <p className="text-gray-600 mb-4 text-sm">
          {cleanExcerpt(post.excerpt || "")
            .split(" ")
            .slice(0, 15)
            .join(" ") + "..."}
        </p>
        <div className="flex justify-end">
          <Link href={`/blogs/${post.slug}`}>
            <Button variant="outline" size="sm" className="text-sm rounded-none">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
