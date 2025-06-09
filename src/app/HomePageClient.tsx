"use client";
import dynamic from "next/dynamic";

// Minimal loading components to reduce blocking
const HeroSkeleton = () => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="text-white">Loading...</div>
  </div>
);

const SectionSkeleton = () => (
  <div className="flex min-h-96 items-center justify-center bg-black">
    <div className="text-gray-500">Loading section...</div>
  </div>
);

// Use dynamic imports with ssr: false for client-only components
const LazyHero = dynamic(() => import("./components/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: false,
});
const LazyMission = dynamic(() => import("./components/Mission"), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});
const LazyServizi = dynamic(() => import("./components/Servizi"), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

export default function HomePageClient() {
  return (
    <>
      {/* Hero section - loads immediately with minimal overhead */}
      <LazyHero />

      {/* Mission section - loads after hero is complete  */}
      <LazyMission />

      {/* Services section - loads last */}
      <LazyServizi />
    </>
  );
}
