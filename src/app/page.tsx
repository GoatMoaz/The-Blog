"use client";

import Blogs from "@/components/home/recent-blogs";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import AllBlogs from "@/components/home/all-blogs";

export default function HomePage() {
  const { posts, loading } = useFetchPosts();
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-16">
        {/* Recent Blog Posts Section */}
        <Blogs posts={posts} loading={loading} />

        {/* All Posts Section */}
        <AllBlogs posts={posts.slice(0, 6)} loading={loading} />
      </div>
    </main>
  );
}
