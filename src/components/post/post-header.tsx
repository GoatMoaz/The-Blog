import { Post } from "@/interfaces/PostInterface";
import AnimatedItem from "@/components/ui/animated-item";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="mb-8">
      {/* Back Button */}
      <AnimatedItem animation="slideInLeft" delay={0}>
        <Link href="/posts">
          <Button variant="ghost" className="mb-6 hover:bg-accent cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Button>
        </Link>
      </AnimatedItem>

      {/* Post Meta */}
      <AnimatedItem animation="fadeIn" delay={0.1}>
        <div className="mb-4">
          <p className="text-sm text-badge-primary font-medium">
            User {post.userId} • {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </AnimatedItem>

      {/* Title */}
      <AnimatedItem animation="slideInUp" delay={0.2}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>
      </AnimatedItem>

      {/* Badges */}
      <AnimatedItem animation="fadeIn" delay={0.3}>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge content="Featured" color="primary" />
          <Badge content="Article" color="secondary" />
          <Badge content="Blog" color="tertiary" />
        </div>
      </AnimatedItem>
    </div>
  );
}