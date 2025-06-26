import { memo } from "react";

const badgeStyles = {
  primary: "text-badge-primary bg-badge-primary/10",
  secondary: "text-badge-secondary bg-badge-secondary/10",
  tertiary: "text-badge-tertiary bg-badge-tertiary/10",
  default: "text-foreground bg-muted/10",
} as const;

function Badge({ content, color }: { content: string; color: string }) {
  const colorKey = color as keyof typeof badgeStyles;
  const styles = badgeStyles[colorKey] || badgeStyles.default;

  return (
    <p className={`font-medium text-sm rounded-full px-2.5 py-0.5 ${styles}`}>
      {content}
    </p>
  );
}

export default memo(Badge);
