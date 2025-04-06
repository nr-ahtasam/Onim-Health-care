"use client"

import { Button } from "@/components/ui/button"
import {blogPosts} from "@/dummy-data/blogs"; // Adjust path based on your structure
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function BlogPost({ params }) {
    const { id } = params // Get the id from the URL (e.g., "1")

    // Convert id to a number and find the blog post matching the id
    const post = blogPosts.find(post => post.id === Number(id))

    // If no post is found, show a fallback message
    if (!post) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-900">Blog Post Not Found</h2>
            </div>
        )
    }

    return (
        <div className="">
            {/* Header with gradient background */}
            <div className="w-full h-[300px] bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] py-16 px-4 text-white relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{post.title}</h1>
                    <p className="text-xl">{post.category}</p>
                </div>
            </div>

            <section className="relative overflow-hidden">
                {/* Gradient background */}
                <div>
                    <Image
                        src="/images/green-ecllipse.png"
                        width={0}
                        height={0}
                        alt="Background"
                        sizes="100vw"
                        priority
                        className="absolute top-0 left-0 w-auto h-full"
                    />
                    <Image
                        src="/images/red-ecllipse.png"
                        width={0}
                        height={0}
                        alt="Background"
                        sizes="100vw"
                        priority
                        className="absolute top-20 left-0 w-auto h-full"
                    />
                    <Image
                        src="/images/green-ecllipse-right.png"
                        width={0}
                        height={0}
                        alt="Background"
                        sizes="100vw"
                        priority
                        className="absolute top-0 right-0 w-auto h-full"
                    />
                    <Image
                        src="/images/red-ecllipse-right.png"
                        width={0}
                        height={0}
                        alt="Background"
                        sizes="100vw"
                        priority
                        className="absolute top-20 right-0 w-auto h-full"
                    />
                </div>

                {/* Single blog post section */}
                <div className="w-full bg-gradient-to-r from-pink-50 via-gray-50 to-green-50 py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Single blog post */}
                        <div className="flex flex-col md:flex-row bg-white overflow-hidden md:w-[calc(50%-0.5rem)] mx-auto">
                            <div className="md:w-1/2 h-32 md:h-auto bg-gray-300 relative">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="text-blue-500" size={16} />
                                    <span className="text-gray-500 text-sm">{post.date}</span>
                                    <span className="text-blue-500 text-sm">{post.category}</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                <div className="border-t border-gray-200 my-3"></div>
                                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                                {/* Add more content here if available */}
                                <div className="flex justify-end">
                                    <Link href="/blogs">
                                        <Button variant="outline" size="sm" className="text-sm">
                                            Back to Blogs
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}