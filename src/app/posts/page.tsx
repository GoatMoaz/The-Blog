"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AnimatedItem from "@/components/ui/animated-item";
import { usePosts } from "@/hooks/usePosts";
import PostsLoader from "@/components/loaders/posts-loader";
import PostsHeader from "@/components/posts/posts-header";
import Posts from "@/components/posts/posts";
import PaginationBar from "@/components/posts/pagination-bar";

const POSTS_PER_PAGE = 9;

function PostsPageContent() {
  const { posts, loading, error } = usePosts();
  const searchParams = useSearchParams();

  // Get initial page from URL or default to 1
  const [currentPage, setCurrentPage] = useState(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1;
  });

  // Update URL when page changes
  useEffect(() => {
    const url = new URL(window.location.href);
    if (currentPage === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", currentPage.toString());
    }

    // Update URL without triggering navigation
    window.history.replaceState({}, "", url.toString());
  }, [currentPage]);

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-16 px-4">
      {loading ? (
        <PostsLoader numberOfPosts={POSTS_PER_PAGE} />
      ) : (
        <>
          {/* Header */}
          <PostsHeader />

          {/* Pagination */}
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            generatePageNumbers={generatePageNumbers}
          />

          {/* Posts Grid */}
          <Posts currentPosts={currentPosts} />

          {/* Pagination */}
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            generatePageNumbers={generatePageNumbers}
          />

          {/* Posts Info */}
          <AnimatedItem animation="fadeIn" delay={0.4}>
            <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1}-{Math.min(endIndex, posts.length)} of{" "}
              {posts.length} posts
            </div>
          </AnimatedItem>
        </>
      )}
    </main>
  );
}

export default function PostsPage() {
  return (
    <Suspense fallback={<PostsLoader numberOfPosts={9} />}>
      <PostsPageContent />
    </Suspense>
  );
}
