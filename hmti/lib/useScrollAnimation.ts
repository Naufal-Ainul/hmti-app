"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

/**
 * Hook for scroll-triggered animations — replaces AOS throughout the app.
 * Returns a ref to attach to the target element and a boolean `inView`.
 *
 * Usage with Framer Motion:
 *   const { ref, inView } = useScrollAnimation();
 *   <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
 *
 * Usage with CSS classes:
 *   const { ref, inView } = useScrollAnimation();
 *   <div ref={ref} className={inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}>
 */
export function useScrollAnimation(options?: {
  /** Trigger only once (default: true) */
  once?: boolean;
  /** Margin around the viewport to trigger earlier/later (default: "-80px") */
  margin?: string;
  /** Threshold 0-1 of element visibility to trigger (default: 0.15) */
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: options?.once ?? true,
    margin: (options?.margin ?? "-80px") as `${number}px`,
    amount: options?.amount ?? 0.15,
  });

  return { ref, inView };
}
