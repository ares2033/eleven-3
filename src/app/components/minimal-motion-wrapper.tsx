"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface MinimalMotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function MinimalMotionWrapper({
  children,
  delay = 0,
}: Readonly<MinimalMotionWrapperProps>) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Use the most efficient timing possible
    const timeoutId = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
}
