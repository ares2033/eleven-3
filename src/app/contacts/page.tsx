"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowUpRight,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Consulenza Gratuita",
      description:
        "Prenota una chiamata di 30 minuti per discutere il tuo progetto",
      action: "Prenota ora",
      details: [
        "Analisi preliminare gratuita",
        "Stima tempi e costi",
        "Roadmap personalizzata",
        "Nessun impegno",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Phone,
      title: "Supporto Immediato",
      description: "Per clienti esistenti con necessità urgenti",
      action: "Chiama ora",
      details: [
        "Supporto tecnico 24/7",
        "Risoluzione problemi critici",
        "Assistenza deployment",
        "SLA garantito",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Mail,
      title: "Richiesta Dettagliata",
      description: "Invia una descrizione completa del tuo progetto",
      action: "Scrivi ora",
      details: [
        "Analisi approfondita",
        "Proposta commerciale",
        "Timeline dettagliata",
        "Risposta in 24h",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo richiede lo sviluppo di un progetto?",
      answer:
        "I tempi variano in base alla complessità. Un MVP può richiedere 2-4 mesi, mentre progetti enterprise possono necessitare 6-12 mesi. Durante la consulenza gratuita forniamo una stima precisa.",
    },
    {
      question: "Offrite supporto post-lancio?",
      answer:
        "Sì, offriamo diversi piani di supporto che includono manutenzione, aggiornamenti di sicurezza, monitoraggio e assistenza tecnica 24/7 per garantire il funzionamento ottimale della tua soluzione.",
    },
    {
      question: "Lavorate con startup o solo con aziende consolidate?",
      answer:
        "Lavoriamo con realtà di ogni dimensione, dalle startup innovative alle enterprise consolidate. Adattiamo il nostro approccio e i nostri servizi alle specifiche esigenze e budget di ogni cliente.",
    },
    {
      question: "Utilizzate tecnologie moderne e scalabili?",
      answer:
        "Assolutamente. Utilizziamo sempre le tecnologie più moderne e comprovate come Next.js, TypeScript, cloud-native solutions e architetture microservizi per garantire scalabilità e performance.",
    },
    {
      question: "Fornite documentazione e training?",
      answer:
        "Ogni progetto include documentazione completa, guide utente e sessioni di training per il vostro team. Offriamo anche workshop personalizzati per massimizzare l'adozione della soluzione.",
    },
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CTO, TechFlow Solutions",
      content:
        "ElevenHats ha trasformato la nostra visione in una piattaforma SaaS di successo. La loro competenza tecnica e attenzione ai dettagli sono eccezionali.",
      rating: 5,
    },
    {
      name: "Laura Bianchi",
      role: "Founder, GreenMarket",
      content:
        "Professionalità e risultati concreti. Il nostro marketplace ha superato ogni aspettativa grazie al loro lavoro. Consiglio vivamente.",
      rating: 5,
    },
    {
      name: "Alessandro Verdi",
      role: "Product Manager, FinanceFlow",
      content:
        "Collaborazione eccellente dall'inizio alla fine. Hanno rispettato tempi e budget, consegnando una soluzione che ha rivoluzionato il nostro business.",
      rating: 5,
    },
  ];

  return (
    <section id="contact-page" className="container px-4 py-16">
      {/* Hero Section */}
      <div className="w-full py-24">
        <div>
          <h1
            className={`text-center text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl`}
          >
            Iniziamo insieme
          </h1>
          <p
            className={`mx-auto mt-6 max-w-4xl text-center text-xl text-white/70 md:text-2xl`}
          >
            Trasformiamo le tue idee in soluzioni digitali innovative. Scegli il
            metodo di contatto più adatto alle tue esigenze e iniziamo a
            costruire il futuro del tuo business.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="mb-20 px-4">
        <h2
          className={`mb-16 text-center text-3xl font-light text-white md:text-4xl`}
        >
          Come possiamo aiutarti?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-full rounded-2xl border border-white bg-black p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                    <method.icon
                      className="h-8 w-8 text-white"
                      strokeWidth={1}
                    />
                  </div>
                  <h3 className={`text-xl font-light text-white md:text-2xl`}>
                    {method.title}
                  </h3>
                </div>

                <p
                  className={`mb-6 text-sm leading-relaxed text-white/80 md:text-base`}
                >
                  {method.description}
                </p>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {method.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-sm text-white/70"
                      >
                        <CheckCircle className="mr-3 h-4 w-4 text-green-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link href="#contact">
                    <Button
                      className={`w-full cursor-pointer rounded-full border border-white/20 bg-transparent font-light text-white transition-all duration-300 hover:bg-white hover:text-black`}
                    >
                      {method.action}
                      <ArrowUpRight viewBox="4 4 16 16" strokeWidth={1} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20 px-4">
        <h2
          className={`mb-16 text-center text-3xl font-light text-white md:text-4xl`}
        >
          Domande frequenti
        </h2>

        <div className="mx-auto max-w-4xl rounded-2xl border border-white p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/20"
              >
                <AccordionTrigger
                  className={`text-left text-lg font-light text-white hover:text-white/80 md:text-xl`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`leading-relaxed text-white/70`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20 px-4">
        <h2
          className={`mb-16 text-center text-3xl font-light text-white md:text-4xl`}
        >
          Cosa dicono i nostri clienti
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white bg-black p-8"
            >
              <div className="mb-4 flex">
                {Array.from({ length: Number(testimonial.rating) }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ),
                )}
              </div>
              <p className={`mb-6 leading-relaxed text-white/80`}>
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <h4 className={`font-medium text-white`}>{testimonial.name}</h4>
                <p className={`text-sm text-white/60`}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Info */}
      <div className="mb-20 px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-white p-8">
            <h2 className={`mb-6 text-2xl font-light text-white md:text-3xl`}>
              Chi siamo
            </h2>
            <p className={`mb-6 leading-relaxed text-white/70`}>
              ElevenHats è un team di sviluppatori e designer appassionati che
              trasforma idee innovative in soluzioni digitali di successo. Con
              oltre 8 anni di esperienza, abbiamo aiutato più di 150 aziende a
              digitalizzare i loro processi e raggiungere i loro obiettivi.
            </p>
            <p className={`leading-relaxed text-white/70`}>
              La nostra missione è semplice: creare tecnologia che funziona, che
              scala e che genera valore reale per il business dei nostri
              clienti.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-white p-8">
              <h3 className={`mb-4 text-xl font-light text-white`}>
                Informazioni aziendali
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-white/60" />
                  <span className={`text-white/70`}>
                    Via Vittorio Veneto 22, Bresso (MI), Italia
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-white/60" />
                  <span className={`text-white/70`}>info@elevenhats.it</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-white/60" />
                  <span className={`text-white/70`}>+39 324 530 5977</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white p-8">
              <h3 className={`mb-4 text-xl font-light text-white`}>
                Orari di lavoro
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={`text-white/70`}>Lunedì - Venerdì:</span>
                  <span className={`text-white/70`}>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-white/70`}>Sabato:</span>
                  <span className={`text-white/70`}>9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-white/70`}>Supporto 24/7:</span>
                  <span className={`text-white/70`}>Sempre attivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-4 text-center md:px-24">
        <div>
          <h2 className={`mb-6 text-3xl font-light text-white md:text-4xl`}>
            Non aspettare, iniziamo oggi
          </h2>
          <p className={`mx-auto mb-8 max-w-3xl font-light text-white/70`}>
            Il momento migliore per iniziare è adesso. Contattaci per una
            consulenza gratuita e scopri come possiamo trasformare la tua
            visione in realtà.
          </p>
          <div>
            <Link href="#contact">
              <Button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                size={"lg"}
                className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:text-white`}
              >
                Inizia la tua trasformazione digitale
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
      </div>
    </section>
  );
}
