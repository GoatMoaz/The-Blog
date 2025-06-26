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
      <Image src={image} alt="recent2" className="w-full" />
      <div>
        <BlogContent
          author={author}
          date={date}
          title={title}
          description={description}
          badges={[
            { content: "Design", color: "primary" },
            { content: "Research", color: "secondary" },
            { content: "Presentation", color: "tertiary" },
          ]}
        />
      </div>
    </div>
  );
}
