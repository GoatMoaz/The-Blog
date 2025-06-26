import { Post } from "@/interfaces/PostInterface";
import Image from "next/image";
import { useState } from "react";

export default function PostImage({ post }: { post: Post }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
      {/* Loading skeleton overlay */}
      {!imageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}

      <Image
        src={post.image}
        alt={post.title}
        fill
        className={`object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
        priority
      />
    </div>
  );
}