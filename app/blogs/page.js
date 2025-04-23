"use client";

import BlogCard from "@/components/news-letter/BlogCard";
import { Button } from "@/components/ui/button";
import { getAllBlogsQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { ChevronRight, Filter } from "lucide-react";
import { useState } from "react";

export default function Blogs() {
  const postsPerPage = 6;
  const [pagination, setPagination] = useState({
    isGoingBack: false,
    after: "",
    before: "",
    currentPage: 1,
    pageCursors: [""],
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data, loading, error } = useQuery(getAllBlogsQuery, {
    variables: {
      after: pagination.isGoingBack ? null : pagination.after,
      before: pagination.isGoingBack ? pagination.before : null,
      first: pagination.isGoingBack ? null : postsPerPage,
      last: pagination.isGoingBack ? postsPerPage : null,
    },
  });

  const blogs = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || {};
  const categories = blogs.length
    ? [
        ...new Set(
          blogs.flatMap((post) =>
            post.categories?.nodes?.map((cat) => cat.name)
          )
        ),
      ]
    : [];
  const filteredPosts = selectedCategory
    ? blogs.filter((post) =>
        post.categories.nodes.some((cat) => cat.name === selectedCategory)
      )
    : blogs;

  const paginate = (pageNumber) => {
    // No page numbers with cursor-based pagination, optional
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (pagination.currentPage > 1) {
      const newPage = pagination.currentPage - 1;
      const previousCursor = pagination.pageCursors[newPage - 1]; // correct previous page's cursor

      setPagination((prev) => ({
        ...prev,
        isGoingBack: true,
        after: "",
        before: previousCursor,
        currentPage: newPage,
      }));
    }
  };

  const nextPage = () => {
    if (pageInfo?.hasNextPage) {
      setPagination((prev) => ({
        ...prev,
        isGoingBack: false,
        after: pageInfo.endCursor,
        before: "",
        currentPage: prev.currentPage + 1,
        pageCursors: [...prev.pageCursors, pageInfo.endCursor],
      }));
    }
  };

  return (
    <div>
      <div className="w-full h-[300px] bg-gradient-to-r from-[#68AAF0] to-[#6BAAF1] py-16 px-4 text-white relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Latest News</h1>
          <p className="text-xl">In Omni and all around the world</p>
        </div>
      </div>

      <section className="relative overflow-hidden">
        {/* <div>
          <Image
            src="/images/green-ecllipse.png"
            width={0}
            height={0}
            alt="green"
            sizes="100vw"
            priority
            className="absolute top-0 left-0 w-auto h-full"
          />
          <Image
            src="/images/red-ecllipse.png"
            width={0}
            height={0}
            alt="red"
            sizes="100vw"
            priority
            className="absolute top-20 left-0 w-auto h-full"
          />
          <Image
            src="/images/green-ecllipse-right.png"
            width={0}
            height={0}
            alt="green-right"
            sizes="100vw"
            priority
            className="absolute top-0 right-0 w-auto h-full"
          />
          <Image
            src="/images/red-ecllipse-right.png"
            width={0}
            height={0}
            alt="red-right"
            sizes="100vw"
            priority
            className="absolute top-20 right-0 w-auto h-full"
          />
        </div> */}

        <div className="w-full  py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-[13px] md:text-3xl font-bold text-gray-900">
                News from Omni and all around world!
              </h2>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Filter size={16} />
                  <span>Filter by</span>
                  <ChevronRight size={16} />
                </div>

                <div className="relative group">
                  <Button variant="outline" className="bg-white">
                    {selectedCategory || "Category"}
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
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

            {/* Blog posts */}

            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 ">
              {loading && <p>Loading blogs...</p>}
              {error && <p className="text-red-500">Error loading blogs.</p>}

              {!loading &&
                filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                  // <div
                  //   key={post.id}
                  //   className="flex flex-col md:flex-row bg-white overflow-hidden md:w-[calc(50%-0.5rem)] mb-15"
                  // >
                  //   <div className="md:w-1/2 h-10 md:h-auto relative">
                  //     <Image
                  //       src={
                  //         post.featuredImage?.node?.sourceUrl ||
                  //         "/placeholder.svg"
                  //       }
                  //       alt={post.title}
                  //       fill
                  //       className="object-cover"
                  //     />
                  //   </div>
                  //   <div className="md:w-1/2 p-6">
                  //     <div className="flex items-center gap-2 mb-2">
                  //       <Calendar className="text-blue-500" size={16} />
                  //       <span className="text-gray-500 text-sm">
                  //         {post.date}
                  //       </span>
                  //       <span className="text-blue-500 text-sm">
                  //         {post.categories.nodes[0]?.name || ""}
                  //       </span>
                  //     </div>
                  //     <h3 className="text-lg font-semibold mb-2">
                  //       {post.title}
                  //     </h3>
                  //     <div className="border-t border-gray-200 my-3 "></div>

                  //     <p className="text-gray-600 mb-4 text-sm">
                  //       {cleanExcerpt(post?.excerpt || "")
                  //         .split(" ")
                  //         .slice(0, 15)
                  //         .join(" ") + "..."}
                  //     </p>
                  //     <div className="flex justify-end">
                  //       <Link href={`/blogs/${post.slug}`}>
                  //         <Button
                  //           variant="outline"
                  //           size="sm"
                  //           className="text-sm"
                  //         >
                  //           Learn More
                  //         </Button>
                  //       </Link>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevPage}
                disabled={pagination.currentPage === 1}
                className="flex items-center gap-1"
              >
                <ChevronRight size={16} className="rotate-180" /> Previous
              </Button>

              {pagination.pageCursors.map((_, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={
                    pagination.currentPage === index + 1 ? "default" : "outline"
                  }
                  onClick={() => {
                    setPagination((prev) => ({
                      ...prev,
                      after: pagination.pageCursors[index],
                      before: "",
                      isGoingBack: false,
                      currentPage: index + 1,
                    }));
                  }}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                variant="ghost"
                size="sm"
                onClick={nextPage}
                disabled={!pageInfo?.hasNextPage}
                className="flex items-center gap-1"
              >
                Next <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
