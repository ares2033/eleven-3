"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useId, useRef, useState } from "react";

/**
 * DotPattern Component Props
 */
interface DotPatternProps {
  /** The horizontal spacing between dots */
  width?: number;
  /** The vertical spacing between dots */
  height?: number;
  /** The x-offset of the entire pattern */
  x?: number;
  /** The y-offset of the entire pattern */
  y?: number;
  /** The x-offset of individual dots */
  cx?: number;
  /** The y-offset of individual dots */
  cy?: number;
  /** The radius of each dot */
  cr?: number;
  /** Additional CSS classes to apply to the SVG container */
  className?: string;
  /** Whether dots should have a glowing animation effect */
  glow?: boolean;
  /** Opacity of the dots (0-1) */
  opacity?: number;
  /** Color of the dots (CSS color value) */
  color?: string;
}

/**
 * DotPattern Component
 *
 * A React component that creates an animated or static dot pattern background using SVG.
 * Designed to be used as a full-page background in layout.tsx.
 *
 * @component
 *
 * @example
 * // In layout.tsx
 * <DotPattern className="text-neutral-300" />
 *
 * // With glowing effect
 * <DotPattern glow={true} opacity={0.6} />
 */
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

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // Use viewport dimensions for full-page background
        const width = window.innerWidth;
        const height = window.innerHeight;
        setDimensions({ width, height });
      }
    };

    // Initial dimensions
    updateDimensions();

    // Update on resize
    window.addEventListener("resize", updateDimensions);

    // Update on orientation change (mobile)
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
        // Fixed positioning to cover entire viewport
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
