"use client";

import { useEffect } from "react";

export function ScriptOptimizer() {
  useEffect(() => {
    // Defer heavy operations until after initial render
    const deferredTasks = () => {
      // Preload critical resources during idle time
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          // Preload next page resources
          const link = document.createElement("link");
          link.href = "/products";
          document.head.appendChild(link);
        });
      }
    };

    // Run deferred tasks after a short delay
    setTimeout(deferredTasks, 100);
  }, []);

  return null;
}
