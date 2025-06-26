import { BlogSkeleton } from "@/components/ui/skeleton";

export default function PostsLoader({
  numberOfPosts = 9,
}: {
  numberOfPosts?: number;
}) {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-12 w-64 mx-auto mb-4"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-6 w-96 mx-auto"></div>
      </div>

      {/* Posts grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {Array.from({ length: numberOfPosts }).map((_, index) => (
          <div key={index} className="space-y-4">
            <BlogSkeleton />
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-10 h-10"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
