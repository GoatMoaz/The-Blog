export default function Badge({
  content,
  color,
}: {
  content: string;
  color: string;
}) {
  return (
    <p
      className={`text-badge-${color} font-medium text-sm bg-badge-${color}/10 rounded-full px-2.5 py-0.5`}
    >
      {content}
    </p>
  );
}
