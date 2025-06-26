import {
  BlogSkeleton,
  RightBlogSkeleton,
  Skeleton,
} from "@/components/ui/skeleton";

export default function BlogLoader() {
  return (
    <section className="flex flex-col container mx-auto py-8 px-4">
      <Skeleton className="h-10 w-full md:w-1/4 mb-8" />

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex flex-col w-full xl:w-1/2">
          <BlogSkeleton showImage={true} />
        </div>

        <div className="flex flex-col gap-8 w-full xl:w-1/2">
          <RightBlogSkeleton />
          <RightBlogSkeleton />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row mt-8 gap-8">
        <div className="w-full xl:w-1/2">
          <div className="w-full h-64 md:h-80 mb-4">
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded w-full h-full" />
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <BlogSkeleton showImage={false} />
        </div>
      </div>
    </section>
  );
}
