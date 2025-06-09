"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
  opacity?: number;
  color?: string;
}

export function DotPattern({
  width = 64,
  height = 64,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  opacity = 0.5,
  color,
}: Readonly<DotPatternProps>) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
    }
  }, [containerRef]);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    window.addEventListener("orientationchange", () => {
      setTimeout(updateDimensions, 100);
    });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("orientationchange", updateDimensions);
    };
  }, []);

  const dots = React.useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return [];

    const cols = Math.ceil(dimensions.width / width) + 1; // Add extra column for seamless coverage
    const rows = Math.ceil(dimensions.height / height) + 1; // Add extra row for seamless coverage

    return Array.from({ length: cols * rows }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      };
    });
  }, [dimensions.width, dimensions.height, width, height, cx, cy, x, y]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-[-1] h-screen w-screen",
        className,
      )}
      style={{
        color: color,
        opacity: opacity,
      }}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot, index) => (
        <motion.circle
          key={`${dot.x}-${dot.y}-${index}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          initial={glow ? { opacity: 0.4, scale: 1 } : { opacity: 1 }}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : {}
          }
          transition={
            glow
              ? {
                  duration: dot.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: dot.delay,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </svg>
  );
}
