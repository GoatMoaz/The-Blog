"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { AnimatedItemProps } from "@/interfaces/AnimationInterface";

export default function AnimatedItem({
  children,
  animation = "fadeIn",
  delay = 0,
  threshold = 0.3,
  className = "",
  onClick,
}: AnimatedItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { fadeIn, slideInLeft, slideInRight, slideInUp, scaleIn } = useGSAP();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, hasAnimated]);

  useEffect(() => {
    if (isVisible && elementRef.current) {
      const element = elementRef.current;

      // Add will-change for better performance
      element.style.willChange = "transform, opacity";

      switch (animation) {
        case "fadeIn":
          fadeIn(element, 1, delay);
          break;
        case "slideInLeft":
          slideInLeft(element, 1, delay);
          break;
        case "slideInRight":
          slideInRight(element, 1, delay);
          break;
        case "slideInUp":
          slideInUp(element, 1, delay);
          break;
        case "scaleIn":
          scaleIn(element, 0.8, delay);
          break;
      }

      // Remove will-change after animation completes
      setTimeout(() => {
        if (element) {
          element.style.willChange = "auto";
        }
      }, (delay + 1) * 1000);
    }
  }, [
    isVisible,
    animation,
    delay,
    fadeIn,
    slideInLeft,
    slideInRight,
    slideInUp,
    scaleIn,
  ]);

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
