"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CreditCard,
  CheckCircle,
  Zap,
  FileText,
  Shield,
} from "lucide-react";
import { Tomorrow } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Elevenpay() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="w-full py-24">
          <div className="text-center">
            <h1
              className={`mb-6 text-4xl font-light text-white md:text-5xl lg:text-7xl ${tomorrow.className}`}
            >
              elevenpay
            </h1>
            <p
              className={`mx-auto max-w-4xl text-xl text-white/70 md:text-2xl`}
            >
              La soluzione di pagamento sicura e senza confini
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-16">
          <div className="rounded-2xl p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`mb-8 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
              >
                Pagamenti digitali semplici, sicuri e globali
              </h2>
              <div className={`space-y-6 text-white/80`}>
                <p className="text-lg leading-relaxed">
                  ElevenPay è la piattaforma di pagamento completa che permette
                  al tuo business di accettare, processare e gestire transazioni
                  in tutto il mondo. <br /> Con tecnologie all&apos;avanguardia
                  e conformità alle normative internazionali, offriamo
                  un&apos;esperienza di pagamento fluida sia per te che per i
                  tuoi clienti.
                </p>
                <p className="text-lg leading-relaxed">
                  Dalla gestione di pagamenti singoli agli abbonamenti
                  ricorrenti, dalle transazioni mobile ai pagamenti in-store,
                  ElevenPay si adatta a ogni tipo di business. <br /> La nostra
                  API flessibile e i dashboard intuitivi ti permettono di avere
                  controllo completo sui flussi di pagamento con la massima
                  sicurezza.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white p-8">
              <h2
                className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
              >
                Caratteristiche avanzate
              </h2>
              <ul className={`space-y-4`}>
                {[
                  "Accettazione di 40+ metodi di pagamento globali e criptovalute",
                  "Protezione antifrode con AI e machine learning avanzato",
                  "Pagamenti ricorrenti e gestione abbonamenti automatizzata",
                  "Checkout ottimizzato per mobile con conversioni fino al 30% superiori",
                  "Dashboard real-time con analytics dettagliate e reporting automatico",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-start text-white/80"
                  >
                    <CheckCircle
                      className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-white"
                      strokeWidth={1}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white p-8">
              <h2
                className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
              >
                Perfetto per
              </h2>
              <div className={`space-y-4 text-white/80`}>
                <p>
                  • E-commerce che vogliono espandere i metodi di pagamento
                  accettati
                </p>
                <p>
                  • SaaS e servizi in abbonamento che necessitano di billing
                  ricorrente
                </p>
                <p>• Marketplace che gestiscono pagamenti multi-vendor</p>
                <p>• Business internazionali che operano in multiple valute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="rounded-2xl p-8 md:p-16">
            <h2
              className={`mb-12 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Come funziona
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <FileText className="h-6 w-6 text-white" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    1. Integrazione Rapida
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  Integra ElevenPay nel tuo sito o app in pochi minuti
                  utilizzando le nostre API RESTful o SDK pre-costruiti.
                  Supportiamo tutti i principali linguaggi di programmazione e
                  framework con documentazione completa e esempi pratici.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <Shield className="h-6 w-6 text-white" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    2. Configurazione Sicurezza
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  Configuri i livelli di sicurezza secondo le tue esigenze: 3D
                  Secure, verifica CVV, controlli antifrode personalizzati.
                  Tutti i dati sono crittografati secondo standard PCI DSS Level
                  1 con tokenizzazione automatica delle carte.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <CreditCard
                      className="h-6 w-6 text-white"
                      strokeWidth={1}
                    />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    3. Processamento Pagamenti
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  I pagamenti vengono processati istantaneamente attraverso la
                  nostra rete globale di partner bancari. Routing intelligente
                  assicura il tasso di successo più alto e le commissioni più
                  basse per ogni transazione.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <Zap className="h-6 w-6 text-white" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    4. Gestione e Analytics
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  Monitora tutte le transazioni dal dashboard centralizzato,
                  gestisci rimborsi, analizza le performance e ottimizza i tassi
                  di conversione. Report automatici e riconciliazione contabile
                  semplificano la gestione finanziaria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <div className="rounded-2xl border border-white p-8 md:p-16">
            <h2
              className={`mb-8 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Metodi di pagamento supportati
            </h2>
            <p className={`mb-12 text-center text-lg text-white/80`}>
              Accetta pagamenti da tutto il mondo con i metodi preferiti dai
              tuoi clienti.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Carte & Digital Wallet
                </h3>
                <p className={`text-white/80`}>
                  Visa, Mastercard, American Express, Apple Pay, Google Pay,
                  PayPal
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Banking & Locale
                </h3>
                <p className={`text-white/80`}>
                  SEPA, Bonifici, Klarna, Afterpay, Alipay, WeChat Pay
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Criptovalute
                </h3>
                <p className={`text-white/80`}>
                  Bitcoin, Ethereum, USDC, USDT, Litecoin, Bitcoin Cash
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="rounded-2xl border border-white p-8 md:p-16">
            <h2
              className={`mb-8 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Storie di successo
            </h2>

            <div className="space-y-8">
              <div className="rounded-2xl border border-white/20 p-8">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  E-commerce internazionale: +25% conversioni
                </h3>
                <p className={`mb-6 text-white/80`}>
                  Un retailer online che vendeva in 15 paesi aveva problemi con
                  i tassi di abbandono del carrello a causa di metodi di
                  pagamento limitati. Con ElevenPay ha implementato pagamenti
                  locali per ogni mercato e checkout ottimizzato mobile-first.
                </p>
                <div className={`space-y-2`}>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Sfida:</span> Alto
                    tasso di abbandono carrello (68%) e difficoltà
                    nell&apos;accettare pagamenti locali.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Soluzione:</span>{" "}
                    Implementazione di 25+ metodi di pagamento locali e checkout
                    one-click ottimizzato.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Risultato:</span>{" "}
                    Riduzione del 40% dell&apos;abbandono carrello e aumento del
                    25% delle conversioni globali.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  SaaS B2B: automazione billing ricorrente
                </h3>
                <p className={`mb-6 text-white/80`}>
                  Una piattaforma SaaS con 5000+ clienti enterprise gestiva
                  manualmente fatturazione e rinnovi, causando ritardi nei
                  pagamenti e perdita di clienti. ElevenPay ha automatizzato
                  completamente il processo di billing con retry intelligenti e
                  dunning management.
                </p>
                <div className={`space-y-2`}>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Sfida:</span>{" "}
                    Gestione manuale di 5000+ abbonamenti e 15% di failed
                    payments mensili.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Soluzione:</span>{" "}
                    Automazione completa billing ricorrente con retry logic e
                    gestione dunning personalizzata.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Risultato:</span>{" "}
                    Riduzione del 80% dei failed payments e aumento del 12% del
                    customer lifetime value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="rounded-2xl border border-white p-8 md:p-16">
            <h2
              className={`mb-12 text-center text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Domande frequenti
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Quali sono le commissioni di ElevenPay?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  Le nostre commissioni partono da 1.4% + €0.25 per transazione
                  per carte europee, con tariffe competitive per tutti i metodi
                  di pagamento. Offriamo pricing personalizzato per volumi
                  elevati e piani enterprise. Non ci sono costi di setup o
                  canoni mensili fissi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Quanto tempo serve per l&apos;integrazione?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  L&apos;integrazione base può essere completata in 1-2 giorni
                  utilizzando i nostri SDK. Per integrazioni custom o
                  marketplace complessi potrebbero servire 1-2 settimane. Il
                  nostro team tecnico ti assiste durante tutto il processo con
                  supporto dedicato.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  ElevenPay è conforme alle normative internazionali?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  Sì, siamo certificati PCI DSS Level 1, conformi a PSD2, GDPR e
                  normative locali in tutti i paesi dove operiamo. Manteniamo
                  licenze di e-money in Europa e partnership con istituti
                  bancari regolamentati a livello globale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Posso gestire pagamenti multi-vendor?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  Assolutamente. ElevenPay supporta split payments automatici,
                  gestione commissioni per marketplace, onboarding vendor
                  semplificato e payout automatici. Ideale per marketplace,
                  piattaforme di crowdfunding e business multi-vendor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <div className="p-8 text-center md:p-16">
            <h2
              className={`mb-6 text-2xl font-light text-white md:text-3xl ${tomorrow.className}`}
            >
              Pronto ad accettare pagamenti globali?
            </h2>
            <p className={`mx-auto mb-8 max-w-2xl text-white/70`}>
              Inizia oggi stesso con ElevenPay. Setup gratuito, nessun costo
              fisso e supporto tecnico dedicato per accompagnarti in ogni fase
              dell&apos;integrazione.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#contact">
                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  size={"lg"}
                  className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:text-white`}
                >
                  Inizia integrazione
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
      </div>
    </section>
  );
}
