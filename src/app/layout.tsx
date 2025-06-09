import type React from "react";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic"; // add this import
import { ScriptOptimizer } from "./components/script-optimizer";
import { TRPCReactProvider } from "@/trpc/react";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Optimized metadata for better SEO and performance
export const metadata: Metadata = {
  title: "elevenhats",
  description: "La prima boutique del software in Italia",
  applicationName: "elevenhats",
  authors: [{ name: "ElevenHats Team", url: "https://www.elevenhats.it" }],
  creator: "ElevenHats Team",
  publisher: "ElevenHats S.r.l.",
  generator: "Next.js",

  // Optimized icons
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/favicon.svg" },
  ],

  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Optimized Open Graph
  openGraph: {
    title: "elevenhats",
    description: "La prima boutique del software in Italia",
    url: "https://www.elevenhats.it",
    siteName: "elevenhats",
    images: [
      {
        url: "https://www.elevenhats.it/meta/og_logo.png",
        width: 1200,
        height: 630,
        alt: "elevenhats logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@elevenhats",
    creator: "@elevenhats",
    title: "elevenhats",
    description: "La prima boutique del software in Italia",
    images: ["https://www.elevenhats.it/meta/twitter_logo.png"],
  },

  alternates: {
    canonical: "https://www.elevenhats.it",
  },

  verification: {
    google: "ufRO8PtGWD-CzaaMwJvAGj4-Kvy48BO0MsBRqceJivM",
  },
};

// Lazy load heavy components with proper imports
const LazyHeader = lazy(() => import("./components/Header"));
const LazyFooter = lazy(() => import("./components/Footer"));
const LazyContact = lazy(() => import("./components/Contact"));

// Add this dynamic import instead
const LazyDotPattern = dynamic(() =>
  import("@/components/magicui/dot-pattern").then((m) => m.DotPattern),
);

// Loading fallbacks for better UX
const HeaderFallback = () => (
  <div className="h-16 animate-pulse border-b border-gray-800 bg-black" />
);

const FooterFallback = () => (
  <div className="h-32 animate-pulse border-t border-gray-800 bg-black" />
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        {/* Critical resource hints */}
        <link rel="dns-prefetch" href="https://www.elevenhats.it" />

        {/* Preload critical assets */}
        <link href="/favicon.svg" as="image" type="image/svg+xml" />

        {/* Critical CSS will be inlined by Next.js automatically
        <Script
          crossOrigin="anonymous"
          src="https://unpkg.com/react-scan/dist/auto.global.js"
        /> */}
      </head>
      <body className="bg-black">
        <TRPCReactProvider>
          {/* Script optimizer for deferred tasks */}
          <ScriptOptimizer />

          {/* Header with loading fallback */}
          <Suspense fallback={<HeaderFallback />}>
            <LazyHeader />
          </Suspense>

          {/* Background pattern - lazy loaded and optimized */}
          <Suspense fallback={null}>
            <LazyDotPattern
              className="text-neutral-300 dark:text-neutral-700"
              width={32}
              height={32}
              cr={1}
              opacity={0.4}
              glow={false} // Disable glow for better performance
            />
          </Suspense>

          {/* Main content */}
          <main className="relative z-10">{children}</main>

          {/* Contact section - lazy loaded */}
          <Suspense fallback={null}>
            <LazyContact />
          </Suspense>

          {/* Footer with loading fallback */}
          <Suspense fallback={<FooterFallback />}>
            <LazyFooter />
          </Suspense>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
