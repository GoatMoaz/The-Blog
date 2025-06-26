import { ReactNode } from "react";

export interface AnimatedItemProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
  delay?: number;
  threshold?: number;
  className?: string;
}
