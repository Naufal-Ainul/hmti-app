"use client";

import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export default function CardTilt({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  }

  return (
    <motion.div
      className="w-full h-full"
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}