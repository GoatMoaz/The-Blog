import Image from "next/image";
import RightBlog from "@/components/home/right-blog";
import BlogContent from "@/components/home/blog-content";
import AnimatedItem from "@/components/ui/animated-item";
import { Post } from "@/interfaces/PostInterface";
import BlogLoader from "@/components/loaders/blog-loader";

export default function Blogs({
  posts,
  loading,
}: {
  posts: Post[];
  loading: boolean;
}) {
  if (loading) {
    return <BlogLoader />;
  }

  return (
    <section className="flex flex-col container mx-auto py-8 px-4">
      <AnimatedItem animation="fadeIn" delay={0}>
        <h1 className="font-semibold text-2xl mb-8">Recent blog posts</h1>
      </AnimatedItem>

      {/* Left handside */}
      <div className="flex flex-col xl:flex-row gap-8">
        <AnimatedItem
          animation="slideInLeft"
          delay={0.1}
          className="flex flex-col w-full xl:w-1/2 cursor-pointer"
        >
          <div className="w-full h-64 md:h-80 mb-4">
            <Image
              src={posts[0].image}
              alt={posts[0]?.title}
              width={600}
              height={300}
              className="shadow-lg w-full h-full object-cover"
            />
          </div>
          <BlogContent
            author={`User ${posts[0]?.userId}`}
            date={new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            title={posts[0]?.title}
            description={posts[0]?.body}
            badges={[
              { content: "Design", color: "primary" },
              { content: "Research", color: "secondary" },
              { content: "Presentation", color: "tertiary" },
            ]}
          />
        </AnimatedItem>

        {/* Right handside */}
        <div className="flex flex-col gap-8 w-full xl:w-1/2">
          <AnimatedItem animation="slideInRight" delay={0.2}>
            <RightBlog
              image={posts[10].image}
              title={posts[10]?.title}
              date={new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              author={`User ${posts[10]?.userId}`}
              description={posts[10]?.body}
            />
          </AnimatedItem>

          <AnimatedItem animation="slideInRight" delay={0.1}>
            <RightBlog
              image={posts[20].image}
              title={posts[20]?.title}
              date={new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              author={`User ${posts[20]?.userId}`}
              description={posts[20]?.body}
            />
          </AnimatedItem>
        </div>
      </div>

      {/* Bottom Blog Post */}
      <AnimatedItem
        animation="scaleIn"
        delay={0.1}
        className="flex flex-col xl:flex-row mt-8 gap-8 cursor-pointer"
      >
        <div className="w-full h-64 md:h-80 mb-4">
          <Image
            src={posts[30].image}
            alt={posts[30]?.title}
            width={600}
            height={300}
            className="shadow-lg w-full h-full object-cover"
          />
        </div>
        <div>
          <BlogContent
            author={`User ${posts[30]?.userId}`}
            date={new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            title={posts[30]?.title}
            description={posts[30]?.body}
            badges={[
              { content: "Design", color: "primary" },
              { content: "Research", color: "secondary" },
              { content: "Presentation", color: "tertiary" },
            ]}
          />
        </div>
      </AnimatedItem>
    </section>
  );
}
