"use client";

import type React from "react";

import { useEffect, useState } from "react";

interface PerformanceOptimizedWrapperProps {
  children: React.ReactNode;
  priority?: "high" | "medium" | "low";
  delay?: number;
}

export function PerformanceOptimizedWrapper({
  children,
  priority = "medium",
  delay = 0,
}: Readonly<PerformanceOptimizedWrapperProps>) {
  const [shouldRender, setShouldRender] = useState(priority === "high");

  useEffect(() => {
    if (priority === "high") return;

    const timeoutId = setTimeout(() => {
      // Use requestIdleCallback for non-critical components
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => setShouldRender(true));
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => setShouldRender(true), delay);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [priority, delay]);

  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
}
