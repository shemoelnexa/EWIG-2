"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "blur";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const revealClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
    blur: "reveal-blur",
  }[direction];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply blur initial styles via inline styles for the blur direction
    if (direction === "blur") {
      el.style.opacity = "0";
      el.style.filter = "blur(8px)";
      el.style.transform = "translateY(20px)";
      el.style.transition =
        "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
            if (direction === "blur") {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.filter = "blur(0px)";
              (entry.target as HTMLElement).style.transform = "translateY(0px)";
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  );
}
