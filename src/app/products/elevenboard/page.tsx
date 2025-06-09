"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle,
  Database,
  TrendingUp,
  Settings,
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

export default function Elevenboard() {
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
              elevenboard
            </h1>
            <p
              className={`mx-auto max-w-4xl text-xl text-white/70 md:text-2xl`}
            >
              La dashboard intelligente per gestire il tuo business
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
                Il centro di controllo per il tuo business digitale
              </h2>
              <div className={`space-y-6 text-white/80`}>
                <p className="text-lg leading-relaxed">
                  ElevenBoard è la piattaforma di business intelligence
                  progettata per dare visibilità completa sui tuoi dati
                  aziendali.
                  <br /> Trasformiamo informazioni complesse in insights chiari
                  e actionable, permettendoti di prendere decisioni strategiche
                  basate su dati reali e aggiornati in tempo reale.
                </p>
                <p className="text-lg leading-relaxed">
                  La nostra dashboard centralizza tutti i KPI importanti del tuo
                  business in un&apos;unica interfaccia intuitiva.
                  <br /> Dalle vendite alle performance del team, dai costi
                  operativi alle previsioni di crescita, ElevenBoard ti offre
                  una visione a 360° della tua azienda con report
                  personalizzabili e alert automatici.
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
                Funzionalità principali
              </h2>
              <ul className={`space-y-4`}>
                {[
                  "Dashboard personalizzabili con drag & drop per organizzare i widget",
                  "Analytics avanzate con grafici interattivi e drill-down dei dati",
                  "Report automatici programmabili via email con frequenza personalizzabile",
                  "Integrazione con oltre 50 servizi e database esterni",
                  "Alert intelligenti basati su soglie e trend personalizzati",
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
                Ideale per
              </h2>
              <div className={`space-y-4 text-white/80`}>
                <p>
                  • E-commerce che vogliono monitorare vendite e performance in
                  tempo reale
                </p>
                <p>• Agenzie che gestiscono multiple campagne e clienti</p>
                <p>
                  • SaaS che necessitano di tracking delle metriche di crescita
                </p>
                <p>• Team manager che vogliono ottimizzare la produttività</p>
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
                    <Database className="h-6 w-6 text-white" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    1. Connessione Dati
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  Colleghiamo ElevenBoard alle tue fonti dati esistenti: CRM,
                  e-commerce, social media, database interni e servizi cloud. La
                  configurazione è semplice e sicura, con connettori pre-built
                  per i principali servizi di mercato.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <Settings className="h-6 w-6 text-white" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    2. Configurazione Dashboard
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  Personalizzi la tua dashboard scegliendo i KPI più importanti
                  per il tuo business. L&apos;interfaccia drag & drop ti
                  permette di organizzare widget, grafici e tabelle secondo le
                  tue preferenze e necessità operative.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <TrendingUp
                      className="h-6 w-6 text-white"
                      strokeWidth={1}
                    />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    3. Monitoraggio Real-time
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  I tuoi dati vengono aggiornati automaticamente e visualizzati
                  in tempo reale. Ricevi notifiche immediate quando i KPI
                  superano le soglie impostate, permettendoti di reagire
                  rapidamente ai cambiamenti del mercato.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <BarChart3 className="h-6 w-6 text-white" strokeWidth={1} />
                  </div>
                  <h3
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    4. Insights e Reporting
                  </h3>
                </div>
                <p className={`text-white/80`}>
                  Genera report dettagliati con un click e condividili con il
                  tuo team. L&apos;AI integrata identifica trend e anomalie,
                  suggerendo azioni concrete per ottimizzare le performance del
                  tuo business.
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
              Integrazioni supportate
            </h2>
            <p className={`mb-12 text-center text-lg text-white/80`}>
              ElevenBoard si integra nativamente con i principali servizi e
              piattaforme di business.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  E-commerce & CRM
                </h3>
                <p className={`text-white/80`}>
                  Shopify, WooCommerce, Magento, Salesforce, HubSpot, Pipedrive
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Marketing & Social
                </h3>
                <p className={`text-white/80`}>
                  Google Analytics, Facebook Ads, Google Ads, Mailchimp,
                  Instagram
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 p-6 text-center">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Database & Cloud
                </h3>
                <p className={`text-white/80`}>
                  MySQL, PostgreSQL, MongoDB, AWS, Google Cloud, Azure
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
              Casi di successo
            </h2>

            <div className="space-y-8">
              <div className="rounded-2xl border border-white/20 p-8">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  E-commerce fashion: +40% efficienza operativa
                </h3>
                <p className={`mb-6 text-white/80`}>
                  Un brand di moda online con oltre 10.000 prodotti utilizzava
                  diversi strumenti per monitorare vendite, inventario e
                  marketing. Con ElevenBoard ha centralizzato tutti i dati in
                  un&apos;unica dashboard, automatizzando i report settimanali e
                  implementando alert per stock in esaurimento.
                </p>
                <div className={`space-y-2`}>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Sfida:</span> Dati
                    sparsi in 8 piattaforme diverse, report manuali che
                    richiedevano 6 ore settimanali.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Soluzione:</span>{" "}
                    Dashboard unificata con 15 KPI principali e automazione
                    completa dei report.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Risultato:</span>{" "}
                    Riduzione del 90% del tempo dedicato ai report e
                    identificazione proattiva di opportunità di vendita.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 p-8">
                <h3
                  className={`mb-4 text-xl font-light text-white ${tomorrow.className}`}
                >
                  Agenzia marketing: gestione di 50+ clienti
                </h3>
                <p className={`mb-6 text-white/80`}>
                  Un&apos;agenzia di marketing digitale gestiva campagne per
                  oltre 50 clienti utilizzando fogli Excel e report manuali.
                  ElevenBoard ha permesso di creare dashboard personalizzate per
                  ogni cliente con accesso diretto e aggiornamenti automatici
                  delle performance.
                </p>
                <div className={`space-y-2`}>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Sfida:</span>{" "}
                    Gestione manuale di report per 50+ clienti, mancanza di
                    visibilità real-time sulle campagne.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Soluzione:</span>{" "}
                    Dashboard white-label per ogni cliente con metriche
                    personalizzate e accesso autonomo.
                  </p>
                  <p className="text-white/60">
                    <span className="font-medium text-white">Risultato:</span>{" "}
                    Aumento del 60% della soddisfazione clienti e riduzione del
                    70% del tempo dedicato al reporting.
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
                  Quanto tempo serve per configurare ElevenBoard?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  La configurazione base richiede 1-2 giorni lavorativi. Per
                  integrazioni complesse con sistemi custom potrebbero servire
                  fino a una settimana. Il nostro team ti assiste durante tutto
                  il processo di setup e ti fornisce training personalizzato per
                  utilizzare al meglio la piattaforma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  I miei dati sono sicuri?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  Assolutamente sì. Utilizziamo crittografia end-to-end per
                  tutti i trasferimenti dati, hosting su server certificati ISO
                  27001 e backup automatici giornalieri. I tuoi dati rimangono
                  sempre di tua proprietà e puoi esportarli in qualsiasi
                  momento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Posso personalizzare completamente la dashboard?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  Sì, ElevenBoard offre completa personalizzazione. Puoi creare
                  widget custom, impostare colori e branding aziendale,
                  configurare layout specifici per diversi ruoli e creare
                  dashboard multiple per diversi dipartimenti o progetti.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="rounded-2xl border border-white/20 px-6"
              >
                <AccordionTrigger
                  className={`py-6 text-left text-xl font-light text-white hover:no-underline ${tomorrow.className}`}
                >
                  Offrite supporto per integrazioni custom?
                </AccordionTrigger>
                <AccordionContent className={`pb-6 text-white/80`}>
                  Certamente. Il nostro team di sviluppo può creare integrazioni
                  personalizzate per sistemi proprietari o servizi non ancora
                  supportati nativamente. Forniamo anche API complete per
                  sviluppatori che vogliono creare le proprie integrazioni.
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
              Pronto a ottimizzare il tuo business?
            </h2>
            <p className={`mx-auto mb-8 max-w-2xl text-white/70`}>
              Inizia la tua prova gratuita di 14 giorni e scopri come
              ElevenBoard può trasformare il modo in cui gestisci e monitori la
              tua azienda.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#contact">
                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  size={"lg"}
                  className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:text-white`}
                >
                  Inizia prova gratuita
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
