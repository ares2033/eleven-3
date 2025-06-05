"use client";

import { useState, useEffect } from "react";

// Enhanced media query hook with better performance
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return;

    // Set initial value
    const media = window.matchMedia(query);
    setMatches(media.matches);

    // Define a handler that uses requestAnimationFrame for performance
    let frameId: number;
    const handler = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setMatches(media.matches);
      });
    };

    // Add event listener using the more efficient 'addEventListener'
    media.addEventListener("change", handler);

    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      media.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}
