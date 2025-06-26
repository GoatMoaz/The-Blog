import Badge from "@/components/ui/badge";

export default function BlogContent({
  author,
  date,
  title,
  description,
  badges,
}: {
  author: string;
  date: string;
  title: string;
  description: string;
  badges: {
    content: string;
    color: string;
  }[];
}) {
  return (
    <>
      <p className="font-semibold text-sm text-badge-primary">
        {author} • {date}
      </p>

      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl py-3">{title}</h1>
      </div>
      <p className="text-content-primary line-clamp-3">{description}</p>
      <div className="flex gap-2 mt-7">
        {badges.map((count, index) => (
          <Badge key={index} content={count.content} color={count.color} />
        ))}
      </div>
    </>
  );
}
