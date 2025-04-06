"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image";
import {blogPosts} from "@/dummy-data/blogs";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight, Filter } from "lucide-react"

export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const postsPerPage = 6 // Adjust as needed

    // Get unique categories from blog posts
    const categories = [...new Set(blogPosts.map(post => post.category))]

    // Filter posts based on selected category
    const filteredPosts = selectedCategory
        ? blogPosts.filter(post => post.category === selectedCategory)
        : blogPosts

    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

    // Pagination functions
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))

    // Generate page numbers with ellipsis
    const getPageNumbers = () => {
        const pageNumbers = []
        const maxPagesToShow = 5

        if (totalPages <= maxPagesToShow) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, "...", totalPages]
        }

        if (currentPage >= totalPages - 2) {
            return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        }

        return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
    }
    return (
        <div className="">
            {/* Header with gradient background */}
            <div className="w-full h-[300px] bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] py-16 px-4 text-white relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Latest News</h1>
                    <p className="text-xl">In Omni and all around the world</p>
                </div>
            </div>

            <section className="relative overflow-hidden">
                {/* Gradient background */}
                <div>
                    <Image src="/images/green-ecllipse.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-0 left-0 w-auto h-full"}
                    />
                    <Image src="/images/red-ecllipse.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-20 left-0 w-auto h-full"}
                    />
                    <Image src="/images/green-ecllipse-right.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-0 right-0 w-auto h-full"}
                    />
                    <Image src="/images/red-ecllipse-right.png"
                           width={0}
                           height={0}
                           alt={"Asdf"}
                           sizes={"100vw"}
                           priority
                           className={"absolute top-20 right-0 w-auto h-full "}
                    />
                </div>
                {/* Blog list section */}
                <div className="w-full bg-gradient-to-r from-pink-50 via-gray-50 to-green-50 py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Header with title and filters */}
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Blog Posts</h2>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Filter size={16}/>
                                    <span>Filter by</span>
                                    <ChevronRight size={16}/>
                                </div>

                                <div className="relative group">
                                    <Button variant="outline" className="bg-white">
                                        {selectedCategory || "Category"}
                                    </Button>
                                    <div
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                                        <button
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setSelectedCategory(null)}
                                        >
                                            All Categories
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog posts flex container */}
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-12">
                            {currentPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-col md:flex-row bg-white overflow-hidden md:w-[calc(50%-0.5rem)]"
                                >
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
                                            <Calendar className="text-blue-500" size={16}/>
                                            <span className="text-gray-500 text-sm">{post.date}</span>
                                            <span className="text-blue-500 text-sm">{post.category}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                        <div className="border-t border-gray-200 my-3"></div>
                                        <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                                        <div className="flex justify-end">
                                            <Link href={`/blogs/${post.id}`}>
                                                <Button variant="outline" size="sm" className="text-sm">
                                                    Learn More
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-1"
                                >
                                    <ChevronLeft size={16}/> Previous
                                </Button>

                                {getPageNumbers().map((page, index) =>
                                    page === "..." ? (
                                        <span key={`ellipsis-${index}`} className="px-2">
                                              ...
                                            </span>
                                    ) : (
                                        <Button
                                            key={`page-${page}`}
                                            variant={currentPage === page ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => paginate(page)}
                                                className={`w-8 h-8 p-0 ${currentPage === page ? "bg-gray-900 text-white" : "bg-white"}`}
                                            >
                                                {page}
                                            </Button>
                                        )
                                )}

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-1"
                                >
                                    Next <ChevronRight size={16}/>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

