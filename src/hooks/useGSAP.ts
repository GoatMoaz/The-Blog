"use client"

import { useRef } from "react"
import { gsap } from "gsap"

export function useGSAP() {
  const ref = useRef<HTMLDivElement>(null)

  // Fade in animation
  const fadeIn = (element: string | Element, duration = 1, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    )
  }

  // Slide in from left
  const slideInLeft = (element: string | Element, duration = 1, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
    )
  }

  // Slide in from right
  const slideInRight = (element: string | Element, duration = 1, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
    )
  }

  // Scale in animation
  const scaleIn = (element: string | Element, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)" }
    )
  }

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
        stagger: stagger
      }
    )
  }

  return {
    ref,
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    staggerIn,
    gsap
  }
}