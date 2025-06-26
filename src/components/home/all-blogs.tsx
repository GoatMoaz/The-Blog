import { Post } from "@/interfaces/PostInterface";
import Image from "next/image";
import BlogContent from "@/components/home/blog-content";
import AnimatedItem from "@/components/ui/animated-item";
import AllBlogsLoader from "@/components/loaders/all-blogs-loader";
import FancyButton from "@/components/ui/fancy-button";

export default function AllBlogs({
  posts,
  loading,
}: {
  posts: Post[];
  loading: boolean;
}) {
  if (loading) {
    return <AllBlogsLoader />;
  }
  return (
    <section className="px-2 sm:px-4">
      <h1 className="font-semibold text-2xl mb-8">All blog posts</h1>
      <div className="grid gridcols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
        {/* Blog Card */}
        {posts.map((post, idx) => (
          <AnimatedItem
            animation="fadeIn"
            delay={0.1 + idx * 0.1}
            key={post.id}
            className="p-4 cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="shadow-lg w-full object-cover mb-4"
            />
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
                { content: "Design", color: "primary" },
                { content: "Research", color: "secondary" },
                { content: "Presentation", color: "tertiary" },
              ]}
            />
          </AnimatedItem>
        ))}
      </div>

      {/* Discover More */}
      <div className="mt-8 text-center">
        <FancyButton />
      </div>
    </section>
  );
}
