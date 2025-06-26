import { Post } from "@/interfaces/PostInterface";
import Image from "next/image";
import Link from "next/link";
import BlogContent from "@/components/home/blog-content";
import { useState, useCallback, memo } from "react";

// Memoized individual post component to prevent unnecessary re-renders
const PostItem = memo(({ post, index }: { post: Post; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <Link href={`/posts/${post.id}`} className="block">
      <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
          {/* Loading skeleton overlay */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-t-lg flex items-center justify-center z-10">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          )}

          <Image
            src={post.image}
            alt={post.title}
            fill
            className={`object-cover group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={handleImageLoad}
            onError={handleImageLoad}
            priority={index < 6}
          />
        </div>

        <div
          className={`p-6 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-60"
          }`}
        >
          <BlogContent
            author={`User ${post.userId}`}
            date={new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            title={post.title}
            description={post.body}
            badges={[
              { content: "Article", color: "primary" },
              { content: "Blog", color: "secondary" },
            ]}
          />
        </div>
      </article>
    </Link>
  );
});

PostItem.displayName = "PostItem";

export default function Posts({ currentPosts }: { currentPosts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {currentPosts.map((post, index) => (
        <div key={post.id} className="group cursor-pointer">
          <PostItem post={post} index={index} />
        </div>
      ))}
    </div>
  );
}
