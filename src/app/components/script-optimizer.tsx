"use client";

import { useEffect } from "react";

function preloadNextPageResources() {
  const links = ["/products", "/solutions"];
  links.forEach((href) => {
    const link = document.createElement("link");
    link.href = href;
    document.head.appendChild(link);
  });
}

export function ScriptOptimizer() {
  useEffect(() => {
    // Defer heavy operations until after initial render
    const deferredTasks = () => {
      // Preload critical resources during idle time
      if ("requestIdleCallback" in window) {
        requestIdleCallback(preloadNextPageResources);
      }
    };

    // Run deferred tasks after a short delay
    setTimeout(deferredTasks, 100);
  }, []);

  return null;
}
