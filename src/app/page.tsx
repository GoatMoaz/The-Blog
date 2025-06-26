"use client";

import Blogs from "@/components/home/recent-blogs";
import { usePosts } from "@/hooks/usePosts";
import AllBlogs from "@/components/home/all-blogs";

export default function Home() {
  const { posts, loading } = usePosts();
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
