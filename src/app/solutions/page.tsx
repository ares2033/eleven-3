"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Calendar,
  Users,
  Zap,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Shield,
  Code,
} from "lucide-react";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Solutions() {
  const [isHovered, setIsHovered] = useState(false);

  const progetti = [
    {
      id: 1,
      title: "EcoMarket Platform",
      client: "GreenTech Solutions",
      category: "E-commerce Sostenibile",
      year: "2024",
      duration: "8 mesi",
      team: "6 sviluppatori",
      description:
        "Piattaforma marketplace per prodotti eco-sostenibili con sistema di tracciabilità blockchain e carbon footprint calculator.",
      technologies: ["Next.js", "TypeScript", "Blockchain", "AI/ML"],
      metrics: [
        { label: "Venditori attivi", value: "500+" },
        { label: "Riduzione CO2", value: "30%" },
        { label: "Utenti registrati", value: "15K" },
      ],
      icon: Globe,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 2,
      title: "FinanceFlow Mobile",
      client: "BankTech Innovations",
      category: "Fintech App",
      year: "2024",
      duration: "12 mesi",
      team: "8 sviluppatori",
      description:
        "App mobile per gestione finanziaria personale con AI-powered insights e integrazione bancaria multi-istituto.",
      technologies: ["React Native", "AI/ML", "Microservices", "Security"],
      metrics: [
        { label: "Download", value: "100K+" },
        { label: "Rating App Store", value: "4.8/5" },
        { label: "Transazioni/mese", value: "2M+" },
      ],
      icon: Smartphone,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "HealthCare Dashboard",
      client: "MedTech Systems",
      category: "Healthcare SaaS",
      year: "2023",
      duration: "10 mesi",
      team: "5 sviluppatori",
      description:
        "Dashboard completa per la gestione di strutture sanitarie con monitoraggio real-time e analytics predittive.",
      technologies: ["Vue.js", "Python", "Analytics", "Real-time"],
      metrics: [
        { label: "Ospedali attivi", value: "50+" },
        { label: "Pazienti gestiti", value: "500K" },
        { label: "Efficienza", value: "+45%" },
      ],
      icon: Database,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 4,
      title: "LogiFlow Warehouse",
      client: "Supply Chain Pro",
      category: "Logistica IoT",
      year: "2023",
      duration: "6 mesi",
      team: "4 sviluppatori",
      description:
        "Sistema di gestione magazzino con IoT sensors, automazione robotica e ottimizzazione AI dei percorsi.",
      technologies: ["IoT", "Automation", "AI Optimization", "Real-time"],
      metrics: [
        { label: "Magazzini connessi", value: "25" },
        { label: "Efficienza picking", value: "+60%" },
        { label: "Errori ridotti", value: "-80%" },
      ],
      icon: ShoppingCart,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 5,
      title: "EduTech Platform",
      client: "Learning Innovations",
      category: "EdTech SaaS",
      year: "2024",
      duration: "14 mesi",
      team: "7 sviluppatori",
      description:
        "Piattaforma e-learning con VR integration, adaptive learning algorithms e sistema di valutazione automatica.",
      technologies: ["React", "VR/AR", "Machine Learning", "Cloud"],
      metrics: [
        { label: "Studenti attivi", value: "50K+" },
        { label: "Corsi disponibili", value: "1,200" },
        { label: "Completion rate", value: "85%" },
      ],
      icon: Code,
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      id: 6,
      title: "SecureAuth Enterprise",
      client: "CyberSec Corp",
      category: "Cybersecurity",
      year: "2023",
      duration: "9 mesi",
      team: "6 sviluppatori",
      description:
        "Sistema di autenticazione enterprise con biometria avanzata, zero-trust architecture e threat detection.",
      technologies: ["Security", "Biometrics", "Zero-Trust", "AI Detection"],
      metrics: [
        { label: "Aziende protette", value: "200+" },
        { label: "Minacce bloccate", value: "99.9%" },
        { label: "Compliance", value: "100%" },
      ],
      icon: Shield,
      color: "from-gray-500/20 to-slate-500/20",
    },
  ];

  return (
    <section id="solutions" className="container mx-auto px-4 pt-16">
      <div className="w-full py-24">
        <div>
          <h1
            className={`text-center text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl ${poppins.className}`}
          >
            Progetti realizzati
          </h1>
          <p
            className={`mx-auto mt-6 max-w-4xl text-center text-xl text-white/70 md:text-2xl ${poppins.className}`}
          >
            Soluzioni digitali innovative che hanno trasformato il business dei
            nostri clienti, generando risultati misurabili e valore concreto.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16 grid grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-48">
        {[
          { icon: Calendar, label: "Anni di esperienza", value: "8+" },
          { icon: Users, label: "Progetti completati", value: "150+" },
          { icon: Zap, label: "Clienti soddisfatti", value: "95%" },
          { icon: Globe, label: "Paesi serviti", value: "12" },
        ].map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white p-6 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <stat.icon className="h-8 w-8 text-white" strokeWidth={1} />
              </div>
            </div>
            <h3
              className={`mb-2 text-2xl font-light text-white md:text-3xl ${poppins.className}`}
            >
              {stat.value}
            </h3>
            <p className={`text-sm text-white/60 ${poppins.className}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {progetti.map((progetto) => (
          <div key={progetto.id} className="group relative">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white bg-black p-8">
              {/* Project Header */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white">
                    <progetto.icon
                      className="h-6 w-6 text-white"
                      strokeWidth={1}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-light text-white md:text-xl ${poppins.className}`}
                    >
                      {progetto.title}
                    </h3>
                    <p className={`text-sm text-white/60 ${poppins.className}`}>
                      {progetto.client}
                    </p>
                  </div>
                </div>
                <span className={`text-xs text-white/50 ${poppins.className}`}>
                  {progetto.year}
                </span>
              </div>

              {/* Category Badge */}
              <div
                className={`mb-4 inline-block w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white ${poppins.className}`}
              >
                {progetto.category}
              </div>

              {/* Description */}
              <p
                className={`mb-6 text-sm leading-relaxed text-white/80 ${poppins.className}`}
              >
                {progetto.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4
                  className={`mb-3 text-xs font-medium text-white ${poppins.className}`}
                >
                  TECNOLOGIE
                </h4>
                <div className="flex flex-wrap gap-2">
                  {progetto.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`rounded-full border border-white/20 px-2 py-1 text-xs text-white/70 ${poppins.className}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <h4
                  className={`mb-3 text-xs font-medium text-white ${poppins.className}`}
                >
                  RISULTATI
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {progetto.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div
                        className={`text-lg font-light text-white ${poppins.className}`}
                      >
                        {metric.value}
                      </div>
                      <div
                        className={`text-xs text-white/60 ${poppins.className}`}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span
                    className={`block font-medium text-white ${poppins.className}`}
                  >
                    DURATA
                  </span>
                  <span className={`text-white/60 ${poppins.className}`}>
                    {progetto.duration}
                  </span>
                </div>
                <div>
                  <span
                    className={`block font-medium text-white ${poppins.className}`}
                  >
                    TEAM
                  </span>
                  <span className={`text-white/60 ${poppins.className}`}>
                    {progetto.team}
                  </span>
                </div>
              </div>

              {/* CTA Button 
              <div>
                <Button
                  className={`w-full rounded-full border border-white/20 bg-transparent font-light text-white transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-black ${poppins.className}`}
                >
                  Scopri il caso studio
                  <ArrowUpRight viewBox="4 4 16 16" strokeWidth={1} />
                </Button>
              </div>*/}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="px-4 pt-16 text-center md:px-24">
        <div className="px-8 py-8 text-center md:px-24">
          <p
            className={`text-lg font-semibold text-white md:text-xl lg:text-2xl ${poppins.className}`}
          >
            Pronto per il tuo prossimo progetto?
          </p>
          <p
            className={`text-sm font-light text-white md:text-base lg:text-lg ${poppins.className}`}
          >
            Trasformiamo le tue idee in soluzioni digitali innovative.
            Contattaci per discutere come possiamo aiutarti a raggiungere i tuoi
            obiettivi.
          </p>
          <Button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            size={"lg"}
            className={`hover:bg-accent/20 mt-6 rounded-full border border-white/20 bg-transparent text-sm font-light text-white hover:text-white ${poppins.className}`}
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
        </div>
      </div>
    </section>
  );
}
