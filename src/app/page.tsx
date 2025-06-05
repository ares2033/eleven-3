"use client";

import Hero from "./components/Hero";
import Servizi from "./components/Servizi";
import { Mission } from "./components/Mission";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Servizi />
    </>
  );
}
