import AnimatedItem from "@/components/ui/animated-item";

export default function PostsHeader() {
  return (
    <AnimatedItem animation="fadeIn" delay={0}>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">All Posts</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Discover our latest articles and insights
        </p>
      </div>
    </AnimatedItem>
  );
}
