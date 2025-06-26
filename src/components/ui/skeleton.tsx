import { SkeletonProps } from "@/interfaces/SkeletonInterface";

export function Skeleton({ className = "", width, height }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      style={{ width, height }}
    />
  );
}

export function BlogSkeleton({ showImage }: { showImage?: boolean }) {
  return (
    <div className="space-y-4">
      {/* Image skeleton */}
      <Skeleton
        className={`w-full h-48 md:h-64 ${showImage ? "" : "hidden"}`}
      />

      {/* Author and date skeleton */}
      <Skeleton className="w-32 h-4" />

      {/* Title skeleton */}
      <Skeleton className="w-3/4 h-6" />

      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-5/6 h-4" />
      </div>

      {/* Badges skeleton */}
      <div className="flex gap-2 mt-4">
        <Skeleton className="w-16 h-6 rounded-full" />
        <Skeleton className="w-20 h-6 rounded-full" />
        <Skeleton className="w-18 h-6 rounded-full" />
      </div>
    </div>
  );
}

export function RightBlogSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Image skeleton */}
      <Skeleton className="w-full md:w-48 h-48 flex-shrink-0" />

      <div className="flex-1 space-y-3">
        {/* Author and date skeleton */}
        <Skeleton className="w-28 h-4" />

        {/* Title skeleton */}
        <Skeleton className="w-4/5 h-5" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-3/4 h-3" />
        </div>

        {/* Badges skeleton */}
        <div className="flex gap-2 mt-3">
          <Skeleton className="w-14 h-5 rounded-full" />
          <Skeleton className="w-16 h-5 rounded-full" />
          <Skeleton className="w-20 h-5 rounded-full" />
        </div>
      </div>
    </div>
  );
}
