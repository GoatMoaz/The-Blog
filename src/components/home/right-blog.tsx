import Image, { StaticImageData } from "next/image";
import BlogContent from "@/components/home/blog-content";

export default function RightBlog({
  image,
  title,
  date,
  author,
  description,
}: {
  image: StaticImageData;
  title: string;
  date: string;
  author: string;
  description: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 cursor-pointer">
      <div className="relative w-full md:w-72 h-48 flex-shrink-0">
        <Image
          src={image}
          alt={author}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 192px"
        />
      </div>
      <div>
        <BlogContent
          author={author}
          date={date}
          title={title}
          description={description}
          badges={[
            { content: "Design", color: "primary" },
            { content: "Research", color: "tertiary" },
          ]}
        />
      </div>
    </div>
  );
}
