"use client";

import {
  Users,
  Star,
  Rocket,
  Shield,
  Code,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Tomorrow } from "next/font/google";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const valori = [
  {
    icon: Rocket,
    title: "Innovazione",
    description:
      "Sperimentiamo costantemente nuove tecnologie e metodologie per offrire soluzioni all’avanguardia che anticipano le esigenze del mercato.",
  },
  {
    icon: Shield,
    title: "Affidabilità",
    description:
      "Ogni progetto è seguito con attenzione e trasparenza, garantendo sicurezza, qualità e rispetto delle tempistiche.",
  },
  {
    icon: Code,
    title: "Eccellenza tecnica",
    description:
      "Il nostro team è composto da sviluppatori e designer con esperienza pluriennale e una forte attenzione ai dettagli.",
  },
  {
    icon: Heart,
    title: "Passione",
    description:
      "Amiamo ciò che facciamo e mettiamo entusiasmo in ogni progetto, costruendo relazioni di fiducia con i nostri clienti.",
  },
];

const testimonials = [
  {
    name: "Giulia Ferri",
    role: "CEO, StartApp",
    content:
      "Il team di elevenhats ci ha guidato dalla strategia allo sviluppo con grande professionalità. Il risultato ha superato le aspettative.",
    rating: 5,
  },
  {
    name: "Luca Neri",
    role: "CTO, MedTech Solutions",
    content:
      "Competenza tecnica e attenzione al cliente fuori dal comune. Un partner affidabile per la crescita digitale.",
    rating: 5,
  },
];

export default function ChiSiamo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="w-full py-24">
        <div className="text-center">
          <h1
            className={`mb-6 text-4xl font-light text-white md:text-5xl lg:text-7xl ${tomorrow.className}`}
          >
            Chi siamo
          </h1>
          <p className={`mx-auto max-w-3xl text-xl text-white/70 md:text-2xl`}>
            La prima boutique del software in Italia. Dal 2016 aiutiamo aziende
            e startup a trasformare idee in soluzioni digitali di successo.
          </p>
        </div>
      </div>

      {/* Storia e Mission */}
      <div className="mb-20 grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl border border-white bg-black/60 p-8">
          <h2
            className={`mb-4 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
          >
            La nostra storia
          </h2>
          <p className="mb-4 text-white/80">
            Nata dall’incontro di sviluppatori e designer appassionati,
            elevenhats è cresciuta negli anni diventando un punto di riferimento
            per chi cerca qualità, innovazione e affidabilità nello sviluppo
            software.
          </p>
          <p className="text-white/80">
            Abbiamo realizzato oltre 150 progetti per clienti di ogni settore,
            dalle startup alle grandi aziende, portando valore concreto e
            risultati misurabili.
          </p>
        </div>
        <div className="rounded-2xl border border-white bg-black/60 p-8">
          <h2
            className={`mb-4 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
          >
            La nostra missione
          </h2>
          <p className="mb-4 text-white/80">
            Creare tecnologia che funziona, che scala e che genera valore reale
            per il business dei nostri clienti.
          </p>
          <p className="text-white/80">
            Siamo il partner ideale per chi vuole innovare, digitalizzare
            processi e lanciare nuovi prodotti sul mercato in modo rapido e
            sicuro.
          </p>
        </div>
      </div>

      {/* Valori */}
      <div className="mb-20">
        <h2
          className={`mb-12 text-center text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
        >
          I nostri valori
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {valori.map((val, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white bg-black/60 p-8 text-center"
            >
              <div className="mb-4 flex justify-center">
                <val.icon className="h-10 w-10 text-white" strokeWidth={1} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {val.title}
              </h3>
              <p className="text-white/70">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Numeri e Team */}
      <div className="mb-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
          <div className="mb-2 flex justify-center">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="mb-1 text-3xl font-bold text-white">8+</div>
          <div className="text-white/70">Anni di esperienza</div>
        </div>
        <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
          <div className="mb-2 flex justify-center">
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <div className="mb-1 text-3xl font-bold text-white">150+</div>
          <div className="text-white/70">Progetti realizzati</div>
        </div>
        <div className="rounded-2xl border border-white bg-black/60 p-8 text-center">
          <div className="mb-2 flex justify-center">
            <Rocket className="h-8 w-8 text-white" />
          </div>
          <div className="mb-1 text-3xl font-bold text-white">12</div>
          <div className="text-white/70">Paesi serviti</div>
        </div>
      </div>

      {/* Testimonianze */}
      <div className="mb-20">
        <h2
          className={`mb-12 text-center text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
        >
          Cosa dicono di noi
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
          <h2
            className={`mb-6 text-3xl font-light text-white md:text-4xl ${tomorrow.className}`}
          >
            Vuoi conoscerci meglio?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl font-light text-white/70">
            Siamo pronti ad ascoltare la tua idea e a costruire insieme il
            prossimo successo digitale.
          </p>
          <Link href="#contact">
            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              size={"lg"}
              className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:text-white`}
            >
              Contattaci
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
