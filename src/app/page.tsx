import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

// Optimized metadata
export const metadata: Metadata = {
  title: "elevenhats - La prima boutique del software in Italia",
  description:
    "Scopri i nostri servizi di sviluppo software personalizzati. Soluzioni innovative per la tua azienda.",
};

// Move all client-only logic to a client component

export default function HomePage() {
  return <HomePageClient />;
}
