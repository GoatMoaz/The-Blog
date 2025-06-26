import { BlogSkeleton } from "@/components/ui/skeleton";

export default function AllBlogsLoader() {
  return (
    <div className="grid gridcols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
      <BlogSkeleton showImage={true} />
      <BlogSkeleton showImage={true} />
      <BlogSkeleton showImage={true} />
      <BlogSkeleton showImage={true} />
      <BlogSkeleton showImage={true} />
      <BlogSkeleton showImage={true} />
    </div>
  );
}
