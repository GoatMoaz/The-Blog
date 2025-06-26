import { ReactNode } from "react";

export interface AnimatedItemProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideInLeft" | "slideInRight" | "slideInUp" | "scaleIn";
  delay?: number;
  threshold?: number;
  className?: string;
  onClick?: () => void;
}
