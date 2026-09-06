"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { useFinePointer } from "@/hooks/use-fine-pointer";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ComponentProps<typeof motion.div> {
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 12,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const isFinePointer = useFinePointer();

  const enabled = isFinePointer && !shouldReduceMotion;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
