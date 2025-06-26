import { Post } from "@/interfaces/PostInterface";
import AnimatedItem from "@/components/ui/animated-item";
import { Button } from "@/components/ui/button";
import { Heart, Share2, BookmarkPlus } from "lucide-react";

export default function PostContent({ post }: { post: Post }) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {/* Content */}
      <AnimatedItem animation="fadeIn" delay={0.4}>
        <div className="text-lg leading-relaxed text-content-primary mb-8">
          {/* Split the body into paragraphs for better readability */}
          {post.body.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}

          {/* Add some mock content to make it look more like a real blog post */}
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
            &ldquo;This is an example of how a blockquote would look in the blog
            post content.&rdquo;
          </blockquote>

          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </AnimatedItem>

      {/* Action Buttons */}
      <AnimatedItem animation="slideInUp" delay={0.5}>
        <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
          <Button
            variant="outline"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Heart className="h-4 w-4" />
            Like
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 cursor-pointer"
          >
            <BookmarkPlus className="h-4 w-4" />
            Save
          </Button>
        </div>
      </AnimatedItem>

      {/* Author Info */}
      <AnimatedItem animation="fadeIn" delay={0.6}>
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold text-lg mb-2">About the Author</h3>
          <p className="text-muted-foreground">
            User {post.userId} is a passionate writer and content creator who
            enjoys sharing insights and experiences through engaging blog posts.
            Follow for more interesting articles and updates.
          </p>
        </div>
      </AnimatedItem>
    </div>
  );
}
