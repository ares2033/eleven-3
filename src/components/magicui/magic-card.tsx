"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
  enableGlobalEffect?: boolean; // Nuova prop per controllare l'effetto globale
}

export function MagicCard({
  children,
  className,
  gradientSize = 150,
  gradientColor = "#26262600",
  gradientOpacity = 0.9,
  gradientFrom = "#06b6d4",
  gradientTo = "#1559a4",
  enableGlobalEffect = true,
}: Readonly<MagicCardProps>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = "clientX" in e ? e.clientX : (e as MouseEvent).clientX;
        const clientY = "clientY" in e ? e.clientY : (e as MouseEvent).clientY;

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  // Effetto globale (comportamento originale)
  useEffect(() => {
    if (!enableGlobalEffect) return;

    const globalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    document.addEventListener("mousemove", globalMouseMove);

    return () => {
      document.removeEventListener("mousemove", globalMouseMove);
    };
  }, [handleMouseMove, enableGlobalEffect]);

  // Event handler locali (comportamento isolato)
  const localHandlers = enableGlobalEffect
    ? {}
    : {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      };

  return (
    <div
      ref={cardRef}
      className={cn("group relative rounded-[inherit]", className)}
      {...localHandlers}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          var(--border) 100%
          )
          `,
        }}
      />
      <div className="absolute inset-px rounded-[inherit] bg-black" />
      {/* Added white background overlay with 10% opacity that shows on hover */}
      <div className="absolute inset-px rounded-[inherit] bg-white/0 transition-colors duration-300 group-hover:bg-white/5" />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
