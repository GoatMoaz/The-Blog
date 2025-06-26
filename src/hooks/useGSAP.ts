"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export function useIntersectionObserver(threshold = 0.5) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsIntersecting(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, hasAnimated]);

  return { ref, isIntersecting, hasAnimated };
}

export function useGSAP() {
  const ref = useRef<HTMLDivElement>(null);

  // Fade in animation
  const fadeIn = (element: string | Element, duration = 1, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    );
  };

  // Slide in from left
  const slideInLeft = (element: string | Element, duration = 1, delay = 0) => {
    const isMobile = window.innerWidth < 768;
    gsap.fromTo(
      element,
      { opacity: 0, x: isMobile ? -20 : -50 },
      { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
    );
  };

  // Slide in from right
  const slideInRight = (element: string | Element, duration = 1, delay = 0) => {
    const isMobile = window.innerWidth < 768;
    gsap.fromTo(
      element,
      { opacity: 0, x: isMobile ? 20 : 50 },
      { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
    );
  };

  // Slide in from bottom (up)
  const slideInUp = (element: string | Element, duration = 1, delay = 0) => {
    const isMobile = window.innerWidth < 768;
    gsap.fromTo(
      element,
      { opacity: 0, y: isMobile ? 20 : 30 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    );
  };

  // Scale in animation
  const scaleIn = (element: string | Element, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)" }
    );
  };

  // Stagger animation for multiple elements
  const staggerIn = (elements: string, duration = 0.8, stagger = 0.1) => {
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power2.out",
        stagger: stagger,
      }
    );
  };

  // Animate on scroll function
  const animateOnScroll = (
    elements: { selector: string; animation: string; delay?: number }[]
  ) => {
    elements.forEach(({ selector, animation, delay = 0 }) => {
      const element = document.querySelector(selector);
      if (!element) return;

      gsap.set(element, { willChange: "transform, opacity" });

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
        case "staggerIn":
          staggerIn(selector, 0.8, 0.1);
          break;
      }

      gsap.delayedCall(delay + 1, () => {
        gsap.set(element, { willChange: "auto" });
      });
    });
  };

  return {
    ref,
    fadeIn,
    slideInLeft,
    slideInRight,
    slideInUp,
    scaleIn,
    staggerIn,
    animateOnScroll,
    gsap,
  };
}
