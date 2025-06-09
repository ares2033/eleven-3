"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Rocket,
  Star,
  Users,
  PlusCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServiziBento() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="features" className="container mx-auto mt-12 px-4 lg:px-48">
      <div className="flex h-full w-full flex-col">
        <h2
          className={`py-8 text-center text-xl font-semibold text-white md:py-12 md:text-2xl lg:text-5xl`}
        >
          I nostri servizi
        </h2>

        {/* Bento Grid */}
        <div className="mb-8 grid h-full grid-cols-4 grid-rows-6 gap-4 md:grid-rows-4">
          {/* Main Service Card - elevenauth (2x2) */}
          <Card className="group relative col-span-4 overflow-hidden border-0 py-0 md:col-span-2 md:row-span-2">
            <MagicCard className="h-full w-full bg-transparent">
              <CardContent className="flex h-full flex-col justify-between p-8">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-white/80 p-2">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h3 className={`text-2xl font-semibold text-white`}>
                      elevenauth
                    </h3>
                  </div>
                  <p className={`mb-6 leading-relaxed text-white/90`}>
                    Il pacchetto Starter completo: dalla consulenza alla
                    consegna di un MVP scalabile e pronto per il mercato.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span className="text-white">
                        Analisi requisiti e roadmap
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span className="text-white">
                        UI/UX Design responsive
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span className="text-white">Sviluppo MVP completo</span>
                    </div>
                  </div>
                </div>
                <Link href="/products/elevenauth">
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    size={"wide"}
                    className={`hover:bg-accent/20 mt-8 rounded-full border border-white/20 bg-transparent text-lg font-light text-white hover:cursor-pointer hover:text-white`}
                  >
                    Scopri di più
                    <motion.div
                      animate={{ rotate: isHovered ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight
                        viewBox="4 4 16 16"
                        strokeWidth={1}
                        className="text-white transition-colors duration-300"
                      />
                    </motion.div>
                  </Button>
                </Link>
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
              </CardContent>
            </MagicCard>
          </Card>

          {/* Stats Card (1x1) */}
          <Card className="col-span-4 border-0 bg-white p-0 md:col-span-1 md:row-span-1">
            <MagicCard className="h-full w-full bg-white">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-white">50+</div>
                <div className={`text-sm text-white/80`}>
                  Progetti completati
                </div>
                <div className="mt-3 flex gap-1">
                  {[...Array<number>(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardContent>
            </MagicCard>
          </Card>

          {/* Team Card (1x1) */}
          <Card className="col-span-4 h-full border-0 bg-transparent p-0 md:col-span-1 md:row-span-1">
            <MagicCard className="h-full w-full bg-transparent">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center text-white">
                <Users className="mb-3 h-8 w-8" />
                <div className="mb-1 text-2xl font-bold">24/7</div>
                <div className={`text-sm text-white/90`}>Supporto dedicato</div>
              </CardContent>
            </MagicCard>
          </Card>

          {/* elevenboard Service (2x1) */}
          <Card className="col-span-4 border-0 p-0 md:col-span-2 md:row-span-1">
            <MagicCard className="h-full w-full bg-white">
              <CardContent className="flex h-full items-center justify-between p-6 text-white">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-white/20 p-2">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className={`text-xl font-semibold`}>elevenboard</h3>
                  </div>
                  <p className={`text-sm text-white/90`}>
                    API scalabili per team in crescita con automazione CI/CD e
                    monitoraggio real-time.
                  </p>
                </div>
                <Link href="/products/elevenboard">
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    size={"lg"}
                    className={`hover:bg-accent/20 mt-8 rounded-full border border-white/20 bg-transparent text-lg font-light text-white hover:cursor-pointer hover:text-white`}
                  >
                    <motion.div
                      animate={{ rotate: isHovered ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight
                        viewBox="4 4 16 16"
                        strokeWidth={1}
                        className="text-white transition-colors duration-300"
                      />
                    </motion.div>
                  </Button>
                </Link>
              </CardContent>
            </MagicCard>
          </Card>

          {/* Feature Highlight (1x2) */}
          <Card className="col-span-4 border-0 p-0 md:col-span-1 md:row-span-2">
            <MagicCard className="h-full w-full bg-white">
              <CardContent className="flex h-full flex-col justify-between p-6 text-white">
                <div>
                  <div className="mb-4 w-fit rounded-xl bg-white/20 p-3">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className={`mb-3 text-lg font-semibold`}>
                    Sicurezza Enterprise
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span>OAuth2 & SAML</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span>Multi-factor Auth</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white"></div>
                      <span>Gestione ruoli</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-white/70">
                  Incluso in elevenpay
                </div>
              </CardContent>
            </MagicCard>
          </Card>

          {/* elevenpay Service (2x1) */}
          <Card className="col-span-4 border-0 p-0 md:col-span-2 md:row-span-1">
            <MagicCard className="h-full w-full bg-white">
              <CardContent className="flex h-full flex-col items-center justify-between p-6 text-white md:flex-row">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-white/20 p-2">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className={`text-xl font-semibold`}>elevenpay</h3>
                    <span className="rounded-full bg-yellow-400 px-2 py-1 text-xs font-medium text-gray-900">
                      ENTERPRISE
                    </span>
                  </div>
                  <p className={`text-sm text-white/90`}>
                    Soluzione completa per identità, accessi e sicurezza
                    aziendale.
                  </p>
                </div>
                <Link href="/products/elevenpay">
                  <Button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    size={"lg"}
                    className={`hover:bg-accent/20 mt-8 rounded-full border border-white/20 bg-transparent text-lg font-light text-white hover:cursor-pointer hover:text-white`}
                  >
                    <motion.div
                      animate={{ rotate: isHovered ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight
                        viewBox="4 4 16 16"
                        strokeWidth={1}
                        className="text-white transition-colors duration-300"
                      />
                    </motion.div>
                  </Button>
                </Link>
              </CardContent>
            </MagicCard>
          </Card>
          <Card className="col-span-4 border-0 p-0 md:col-span-1 md:row-span-2">
            <MagicCard className="h-full w-full border-dashed bg-white">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center text-white">
                <Clock className="mb-3 h-8 w-8" />
                <div className="mb-1 text-2xl font-bold">Area funzionale</div>
                <div className={`text-sm text-white/90`}>
                  Lunedì - Sabato:9:00 - 18:00
                </div>
              </CardContent>
            </MagicCard>
          </Card>
          {/* CTA Card (1x1) */}
          <Card className="col-span-4 cursor-pointer border-0 p-0 md:col-span-2 md:row-span-1">
            <MagicCard className="h-full w-full border-dashed bg-white">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <Link
                  href="/products/eleven-custom"
                  className="flex flex-col items-center"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <PlusCircle className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className={`mb-1 text-sm font-medium text-white`}>
                    Progetto custom?
                  </div>
                  <div className={`text-xs text-white/80`}>
                    Parliamone insieme
                  </div>
                </Link>
              </CardContent>
            </MagicCard>
          </Card>
        </div>

        <div className="px-8 py-8 text-center md:px-24">
          <p
            className={`text-lg font-semibold text-white md:text-xl lg:text-2xl`}
          >
            Hai bisogno di informazioni per il servizio che ti serve?
          </p>
          <p
            className={`text-sm font-light text-white md:text-base lg:text-lg`}
          >
            Contattaci per una soluzione su misura per la tua azienda
          </p>
          <Link href="#contact">
            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              size={"lg"}
              className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white`}
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
