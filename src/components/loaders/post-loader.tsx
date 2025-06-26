import { Skeleton } from "@/components/ui/skeleton";

export default function PostLoader() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      {/* Back button skeleton */}
      <Skeleton className="w-32 h-10 mb-6" />

      {/* Meta info skeleton */}
      <Skeleton className="w-48 h-4 mb-4" />

      {/* Title skeleton */}
      <div className="space-y-3 mb-6">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-3/4 h-12" />
      </div>

      {/* Badges skeleton */}
      <div className="flex gap-2 mb-6">
        <Skeleton className="w-20 h-6 rounded-full" />
        <Skeleton className="w-16 h-6 rounded-full" />
        <Skeleton className="w-12 h-6 rounded-full" />
      </div>

      {/* Image skeleton */}
      <Skeleton className="w-full h-64 md:h-96 lg:h-[500px] mb-8 rounded-lg" />

      {/* Content skeleton */}
      <div className="space-y-4 mb-8">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-5/6 h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-2/3 h-4" />
      </div>

      {/* Action buttons skeleton */}
      <div className="flex gap-4 pt-8 border-t border-border mb-12">
        <Skeleton className="w-20 h-10" />
        <Skeleton className="w-20 h-10" />
        <Skeleton className="w-20 h-10" />
      </div>

      {/* Author info skeleton */}
      <div className="p-6 bg-muted rounded-lg">
        <Skeleton className="w-40 h-6 mb-2" />
        <div className="space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      </div>
    </div>
  );
}