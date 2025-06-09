"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code, Zap, Users, Lightbulb, Star } from "lucide-react";
import { Tomorrow } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const vantaggi = [
  {
    icon: Lightbulb,
    title: "Soluzioni su misura",
    description:
      "Analizziamo le tue esigenze e sviluppiamo software personalizzato che si adatta perfettamente ai tuoi processi e obiettivi.",
  },
  {
    icon: Zap,
    title: "Tecnologie moderne",
    description:
      "Utilizziamo stack tecnologici all’avanguardia per garantire performance, sicurezza e scalabilità.",
  },
  {
    icon: Users,
    title: "Team dedicato",
    description:
      "Un team di sviluppatori, designer e project manager ti segue in ogni fase: dall’idea al rilascio e oltre.",
  },
  {
    icon: Code,
    title: "Integrazione totale",
    description:
      "Integriamo il software custom con i tuoi sistemi esistenti, API, database e piattaforme di terze parti.",
  },
];

const testimonials = [
  {
    name: "Sara Colombo",
    role: "COO, Retail360",
    content:
      "Avevamo bisogno di una soluzione unica per la nostra logistica. Elevenhats ha creato un sistema su misura che ha rivoluzionato il nostro lavoro.",
    rating: 5,
  },
  {
    name: "Davide Riva",
    role: "Founder, EduNext",
    content:
      "Il team ha ascoltato ogni nostra esigenza e ha sviluppato una piattaforma e-learning perfettamente integrata con i nostri processi.",
    rating: 5,
  },
];

export default function ElevenCustom() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="w-full py-24">
        <div className="text-center">
          <h1
            className={`mb-6 text-4xl font-semibold text-white md:text-5xl lg:text-7xl`}
          >
            Soluzioni Custom
          </h1>
          <p className={`mx-auto max-w-3xl text-xl text-white/70 md:text-2xl`}>
            Ogni azienda è unica. Sviluppiamo software su misura per soddisfare
            qualsiasi esigenza, senza limiti di settore o complessità.
          </p>
        </div>
      </div>

      {/* Vantaggi */}
      <div className="mb-20">
        <h2
          className={`mb-12 text-center text-3xl font-light text-white md:text-4xl`}
        >
          Perché scegliere una soluzione custom?
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {vantaggi.map((v, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white bg-black/60 p-8 text-center"
            >
              <div className="mb-4 flex justify-center">
                <v.icon className="h-10 w-10 text-white" strokeWidth={1} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {v.title}
              </h3>
              <p className="text-white/70">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Processo */}
      <div className="mb-20">
        <h2
          className={`mb-12 text-center text-3xl font-light text-white md:text-4xl`}
        >
          Il nostro approccio
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              1. Analisi e consulenza
            </h3>
            <p className="text-white/70">
              Ascoltiamo le tue idee, analizziamo i processi e definiamo insieme
              gli obiettivi e le funzionalità chiave.
            </p>
          </div>
          <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              2. Sviluppo agile
            </h3>
            <p className="text-white/70">
              Sviluppiamo il software in modo iterativo, con demo frequenti e
              feedback costante per garantire il risultato atteso.
            </p>
          </div>
          <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              3. Integrazione e test
            </h3>
            <p className="text-white/70">
              Testiamo ogni funzionalità e integriamo la soluzione con i tuoi
              sistemi, assicurando performance e sicurezza.
            </p>
          </div>
          <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              4. Supporto continuo
            </h3>
            <p className="text-white/70">
              Ti accompagniamo anche dopo il rilascio con supporto, formazione e
              miglioramenti evolutivi.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonianze */}
      <div className="mb-20">
        <h2
          className={`mb-12 text-center text-3xl font-light text-white md:text-4xl`}
        >
          Casi di successo
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white bg-black/60 p-8"
            >
              <div className="mb-4 flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-white/80">
                &quot;{t.content}&quot;
              </p>
              <div>
                <h4 className="font-medium text-white">{t.name}</h4>
                <p className="text-sm text-white/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA finale */}
      <div className="px-4 pt-16 text-center md:px-24">
        <div>
          <h2 className={`mb-6 text-3xl font-light text-white md:text-4xl`}>
            Raccontaci la tua idea
          </h2>
          <p className="mx-auto mb-8 max-w-3xl font-light text-white/70">
            Nessuna esigenza è troppo complessa. Siamo pronti a sviluppare la
            soluzione perfetta per te.
          </p>
          <Link href="#contact">
            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              size={"lg"}
              className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:text-white`}
            >
              Richiedi una consulenza gratuita
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight
                  viewBox="4 4 16 16"
                  strokeWidth={1}
                  className="text-white"
                />
              </motion.div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
