"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import { useFetchPost } from "@/hooks/useFetchPost";
import PostLoader from "@/components/loaders/post-loader";
import PostHeader from "@/components/post/post-header";
import PostContent from "@/components/post/post-content";
import PostImage from "@/components/post/post-image";
import AnimatedItem from "@/components/ui/animated-item";
import Error from "@/components/ui/error";

function PostDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const { post, loading, error } = useFetchPost(id);

  if (error) {
    return <Error message={error} />;
  }

  if (loading) {
    return <PostLoader />;
  }

  if (!post) {
    return <Error message="Post not found" />;
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
