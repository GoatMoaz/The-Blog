"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import { useFetchPost } from "@/hooks/useFetchPost";
import PostLoader from "@/components/loaders/post-loader";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostImage from "@/components/post/post-image";
import AnimatedItem from "@/components/ui/animated-item";

function PostDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const { post, loading, error } = useFetchPost(id);

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

  if (loading) {
    return <PostLoader />;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600">
            The blog post you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-16 px-4 max-w-4xl">
      {/* Header */}
      <PostHeader post={post} />

      {/* Featured Image */}
      <AnimatedItem animation="fadeIn" delay={0.2}>
        <PostImage post={post} />
      </AnimatedItem>

      {/* Content */}
      <PostContent post={post} />
    </main>
  );
}

export default function PostDetailPage() {
  return (
    <Suspense fallback={<PostLoader />}>
      <PostDetailContent />
    </Suspense>
  );
}
